import { StatusCodeEnums } from "../interfaces/enums/StatusCode.enums";

import UserModel from "../models/User.model";

import { ComparePassword } from "../utils/comparePassword";
import { GenerateJWT } from "../utils/generateJWT";
import { failure, ok } from "../utils/response";

export const LoginService = {
    login: async (email: string, password: string) => {
        // Check if user exists
        const users = await UserModel.query().where("email", "ILIKE", email);
        if (users.length == 0)
            return failure(
                "Invalid credentials",
                StatusCodeEnums.INVALID_CREDENTIALS
            );

        //Check if password does match
        const match = await ComparePassword(password, users[0].password);
        if (!match)
            return failure(
                "Invalid credentials",
                StatusCodeEnums.INVALID_CREDENTIALS
            );

        // Return JWT
        return ok({
            token: GenerateJWT(users[0]),
        });
    },
};
