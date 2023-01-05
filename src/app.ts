import express, { Application } from "express";

import { Model } from "objection";
import Knex from "knex";

import { routes } from "./routes";
import { CorsMiddleware } from "./middleware/Cors.middleware";
import { AppErrorHandlerMiddleware } from "./middleware/AppErrorHandler.middleware";

// Knex initialization
import { knexConfig } from "./config/knex";
const knex = Knex(knexConfig);
Model.knex(knex);

// Boot express
export const app: Application = express();

// CORS
app.use(CorsMiddleware);

// Express configuration
app.use(express.json());

// Application routing
routes(app);

// Application (global) error handling
app.use(AppErrorHandlerMiddleware);
