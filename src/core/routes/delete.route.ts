import Router from "koa-router";
import {RuntimeStore} from "../store/runtime.store";
import {EntryDoesNotExistError} from "../errors/entry-does-not-exist.error";

export const deleteRoute = (router: Router) => {
    router.delete('/list/:id', async (ctx) => {
        const {id} = ctx.params;

        if (!RuntimeStore.checkIfIdExists(parseInt(id))) {
            throw new EntryDoesNotExistError(id)
        }

        RuntimeStore.removeFromList(parseInt(id));
        ctx.status = 204;
    });
}