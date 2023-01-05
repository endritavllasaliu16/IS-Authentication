import { Application, Router } from "express";

import { PingController } from "./controllers/Ping.controller";
import { RegisterController } from "./controllers/Register.controller";
import { LoginController } from "./controllers/Login.controller";

const _routes: [string, Router][] = [
    ["/ping", PingController],
    ["/register", RegisterController],
    ["/login", LoginController],
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};
