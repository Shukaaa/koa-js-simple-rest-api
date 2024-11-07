import Router from "koa-router";
import {getRoute} from "./core/routes/get.route";
import {postRoute} from "./core/routes/post.route";
import {putRoute} from "./core/routes/put.route";
import {deleteRoute} from "./core/routes/delete.route";

type RouteFn = (router: Router) => void;
export const routes: RouteFn[] = [
    getRoute,
    postRoute,
    putRoute,
    deleteRoute
]