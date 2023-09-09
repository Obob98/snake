import deepClone from "../Utils/deepClone.js"
import Dot, { PositionType } from "./dotModel.js"

interface SnakeModelInterface {
    head: Dot
    tail: Dot
    size: number
    revive(): void
}

export default class SnakeModel implements SnakeModelInterface {

    static instance: SnakeModel = new SnakeModel()

    private _initialPosition: PositionType[] = [
        { x: 25, y: 0 },
        { x: 0, y: 0 }
    ]
    private _size: number = 0
    private _head: Dot
    private _tail: Dot

    private constructor() {
        this._head = new Dot(deepClone(this._initialPosition[0]), null)
        this._tail = new Dot(deepClone(this._initialPosition[1]), null)
        this._size = 2
    }

    get head(): Dot {
        return this._head
    }

    set head(dot: Dot) {

        this._head = dot
    }

    get tail(): Dot {
        return this._tail
    }

    set tail(dot: Dot) {
        this._tail = dot
    }

    get size(): number {
        return this._size
    }

    revive(): void {
        this.head = new Dot(deepClone(this._initialPosition[0]), null)
        this.tail = new Dot(deepClone(this._initialPosition[1]), null)
    }
}