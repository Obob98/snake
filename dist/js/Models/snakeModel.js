import deepClone from "../Utils/deepClone.js";
import Dot from "./dotModel.js";
class SnakeModel {
    static instance = new SnakeModel();
    _initialPosition = [
        { x: 25, y: 0 },
        { x: 0, y: 0 }
    ];
    _size = 0;
    _head;
    _tail;
    constructor() {
        this._head = new Dot(deepClone(this._initialPosition[0]), null);
        this._tail = new Dot(deepClone(this._initialPosition[1]), null);
        this._size = 2;
    }
    get head() {
        return this._head;
    }
    set head(dot) {
        this._head = dot;
    }
    get tail() {
        return this._tail;
    }
    set tail(dot) {
        this._tail = dot;
    }
    get size() {
        return this._size;
    }
    revive() {
        this.head = new Dot(deepClone(this._initialPosition[0]), null);
        this.tail = new Dot(deepClone(this._initialPosition[1]), null);
    }
}
export default SnakeModel;
