import Router from "koa-router";
import {RuntimeStore} from "../store/runtime.store";
import {EntryDoesNotExistError} from "../errors/entry-does-not-exist.error";

export const putRoute = (router: Router) => {
    router.put('/list/:id', async (ctx) => {
        const id = parseInt(ctx.params.id);
        const {name} = ctx.request.body as {name: string};

        if (!RuntimeStore.checkIfIdExists(id)) {
            throw new EntryDoesNotExistError(id)
        }

        RuntimeStore.updateItem(id, name);

        ctx.body = {
            message: 'Item updated'
        }
    });
}