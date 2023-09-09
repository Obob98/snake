export type PositionType = { x: number, y: number }
export type NextDotType = DotModelInterface | null

export interface DotModelInterface {
    position: PositionType
    nextDot: NextDotType
}


export default class DotModel implements DotModelInterface {
    constructor(
        private _position: PositionType,
        private _nextDot: NextDotType = null
    ) { }

    get position(): PositionType {
        return this._position
    }

    set position(position: PositionType) {
        this._position = position
    }

    get nextDot(): NextDotType {
        return this._nextDot
    }

    set nextDot(dot: NextDotType) {
        this._nextDot = dot
    }
}