export class Funko {
    private _id: string;
    private _name: string;
    private _image: string;
    private _collection: string;
    private _num: number;

    constructor() {
        this._id = "";
        this._name = "";
        this._image = "";
        this._collection = "";
        this._num = 0;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    get collection(): string {
        return this._collection;
    }

    get num(): number {
        return this._num;
    }

    set id(id: string) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set image(image: string) {
        this._image = image;
    }

    set collection(collection: string) {
        this._collection = collection;
    }

    set num(num: number) {
        this._num = num;
    }
}
