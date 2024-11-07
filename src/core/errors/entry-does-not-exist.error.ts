import {CustomError} from "./custom-error";

export class EntryDoesNotExistError extends CustomError {
    constructor(id: any) {
        super(
            `Entry with id ${id} does not exist`,
            1001
        )
    }
}