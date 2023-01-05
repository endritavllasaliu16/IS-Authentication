import { NextFunction, Request, Response, Router } from "express";

import { ValidationMiddleware } from "../middleware/Validation.middleware";

import { LoginValidator } from "../validators/Login.validator";

import { LoginService } from "../services/Login.service";

export const LoginController: Router = Router();

LoginController.post(
    "/",
    ValidationMiddleware(LoginValidator, {}, (req: Request) => req.body),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const result = await LoginService.login(email, password);

            res.status(result.httpCode).send(result.data);
        } catch (e) {
            next(e);
        }
    }
);
