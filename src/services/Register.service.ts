import { StatusCodeEnums } from "../interfaces/enums/StatusCode.enums";
import { RegisterModel } from "interfaces/models/Register.model";

import UserModel from "../models/User.model";

import { HashPassword } from "../utils/hashPassword";
import { GenerateJWT } from "../utils/generateJWT";
import { failure, ok } from "../utils/response";

export const RegisterService = {
    register: async (data: RegisterModel) => {
        const { name, email, password } = data;

        // Check if user exists
        const exists = await UserModel.query().where("email", "ILIKE", email);

        // Return failure if user exists
        if (exists?.length != 0)
            return failure("User exists", StatusCodeEnums.USER_EXISTS);

        const hashedPwd = await HashPassword(password);

        const insertUser = await UserModel.query().insert({
            name,
            email,
            password: hashedPwd,
        });

        return ok({
            id: insertUser.id,
            name,
            email,
            token: GenerateJWT(insertUser),
        });
    },
};
