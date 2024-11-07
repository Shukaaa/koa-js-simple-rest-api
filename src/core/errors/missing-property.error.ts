import {CustomError} from "./custom-error";

export class MissingPropertyError extends CustomError {
    constructor(propertyName: string) {
        super(
            `Missing property: ${propertyName}`,
            1000
        )
    }
}