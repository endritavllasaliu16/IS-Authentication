import jwt, { Algorithm } from "jsonwebtoken";

import { JWT_ALGORITHM, JWT_EXPIRES_IN, JWT_SECRET } from "../config/jwt";

import { UserDataModel } from "../interfaces/models/UserData.model";

export const GenerateJWT = (user: UserDataModel) => {
    const payload = {
        "x-allowed-roles": ["user"],
        "x-default-role": "user",
        "x-user-id": user.id?.toString(),
    };

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        algorithm: JWT_ALGORITHM as Algorithm,
    });
};
