import DotModel from "./dotModel.js";
class PreyModel {
    static instance = new PreyModel(new DotModel({
        x: PreyModel.randomizePosition(20),
        y: PreyModel.randomizePosition(16)
    }));
    static randomizePosition(range) {
        return (25 * (Math.floor(Math.random() * range)));
    }
    _prey;
    constructor(dot) {
        this._prey = dot;
    }
    get position() {
        return this._prey.position;
    }
    shufflePosition() {
        this._prey.position.x = PreyModel.randomizePosition(20);
        this._prey.position.y = PreyModel.randomizePosition(16);
    }
}
export default PreyModel;
