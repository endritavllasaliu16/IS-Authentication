import { NextFunction, Request, Response, Router } from "express";

import { ValidationMiddleware } from "../middleware/Validation.middleware";

import { RegisterValidator } from "../validators/Register.validator";

import { RegisterService } from "../services/Register.service";

export const RegisterController: Router = Router();

RegisterController.post(
    "/",
    // ValidationMiddleware(RegisterValidator),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { data } = req.body;
            const result = await RegisterService.register(data);

            res.status(result.httpCode).send(result.data);
        } catch (e) {
            next(e);
        }
    }
);
