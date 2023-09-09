export default class DotModel {
    _position;
    _nextDot;
    constructor(_position, _nextDot = null) {
        this._position = _position;
        this._nextDot = _nextDot;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    get nextDot() {
        return this._nextDot;
    }
    set nextDot(dot) {
        this._nextDot = dot;
    }
}
