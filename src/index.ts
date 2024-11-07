import Koa from 'koa';
import Router from "koa-router";
import json from "koa-json";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

import {routes} from "./routes";
import {errorHandler} from "./core/handler/error.handler";

const config = {
    port: 3000
}

const app = new Koa();
const router = new Router();

app
    .use(errorHandler)
    .use(json())
    .use(bodyParser())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods());

routes.forEach(route => route(router));

app.listen(config.port, () => {
    console.log(`🤸 Server running on port ${config.port}`);
});