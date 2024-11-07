import {Item} from "../types/item";

export class RuntimeStore {
    static list: Item[] = []
    static idCounter = 0

    static addToList(name: string) {
        this.list.push({
            id: this.getNextId(),
            name
        })
    }

    static getList() {
        return this.list
    }

    static removeFromList(id: number) {
        this.list = this.list.filter(item => item.id !== id)
    }

    static updateItem(id: number, name: string) {
        this.list = this.list.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    name
                }
            }
            return item
        });
    }

    static checkIfIdExists(id: number) {
        return this.list.some(item => item.id === id)
    }

    private static getNextId() {
        return ++this.idCounter
    }
}