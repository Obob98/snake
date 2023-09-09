import SnakeModel from "../Models/snakeModel.js"

interface FieldTemplateInterface {
    DOMSnake: HTMLDivElement
    renderField(): void
}

export default class FieldTemplate implements FieldTemplateInterface {

    static instance: FieldTemplate = new FieldTemplate()

    private snakeModel = SnakeModel.instance

    private _DOMSnake: HTMLDivElement

    private constructor() {
        this._DOMSnake = document.querySelector('.snake') as HTMLDivElement
    }

    get DOMSnake(): HTMLDivElement {
        return this._DOMSnake
    }

    renderField(): void {
        this._DOMSnake.innerHTML = ''
        let currentDot = this.snakeModel.head as typeof this.snakeModel.head.nextDot
        while (currentDot) {
            const divElement = document.createElement('div')
            divElement.style.left = `${currentDot.position.x}px`
            divElement.style.top = `${currentDot.position.y}px`

            this._DOMSnake.append(divElement)

            currentDot = currentDot.nextDot
        }
    }
}