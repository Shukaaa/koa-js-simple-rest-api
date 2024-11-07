import {Context, Next} from "koa";
import {CustomError, ErrorResponse} from "../errors/custom-error";

export const errorHandler = async (ctx: Context, next: Next) => {
    try {
        await next();
    } catch (error) {
        let response: ErrorResponse;

        console.error(error);
        if (error instanceof CustomError) {
            response = error.response;
        } else {
            response = {
                message: 'Ein unbekannter Fehler ist aufgetreten',
                code: 500,
                data: error instanceof Error ? error.message : undefined,
            };
        }

        ctx.status = 500;
        ctx.body = response;
        ctx.app.emit('error', error, ctx);
    }
};