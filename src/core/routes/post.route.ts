import Router from "koa-router";
import {RuntimeStore} from "../store/runtime.store";
import {MissingPropertyError} from "../errors/missing-property.error";

export const postRoute = (router: Router) => {
    router.post('/list', async (ctx) => {
        const {name} = JSON.parse(ctx.request.rawBody);

        console.log('name', name);
        if (!name) {
            throw new MissingPropertyError('name');
        }

        RuntimeStore.addToList(name);

        ctx.body = {
            message: 'Item added'
        }
        ctx.status = 201;
    });
}