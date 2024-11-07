import Router from "koa-router";
import {RuntimeStore} from "../store/runtime.store";

export const getRoute = (router: Router) => {
    router.get('/list', async (ctx) => {
        ctx.body = {
            items: RuntimeStore.getList()
        };
    });
}