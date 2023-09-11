import DotModel, { PositionType } from "./dotModel.js";

interface PrayInterface {
    position: PositionType
    shufflePosition(): void
}

export default class PreyModel implements PrayInterface {
    static instance: PreyModel = new PreyModel(
        new DotModel(
            {
                x: PreyModel.randomizePosition(20),
                y: PreyModel.randomizePosition(16)
            }
        )
    )

    static randomizePosition(range: number) {
        return (25 * (Math.floor(Math.random() * range)))
    }

    private _prey: DotModel

    private constructor(dot: DotModel) {
        this._prey = dot
    }


    get position(): PositionType {
        return this._prey.position
    }

    shufflePosition(): void {
        this._prey.position.x = PreyModel.randomizePosition(20)
        this._prey.position.y = PreyModel.randomizePosition(16)
    }
}