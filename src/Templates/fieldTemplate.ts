import SnakeModel from "../Models/snakeModel.js"
import PreyModel from "../Models/preyModel.js"

interface FieldTemplateInterface {
    DOMSnake: HTMLDivElement
    DOMPrey: HTMLDivElement
    renderDOMSnake(): void
    renderDOMPrey(): void
}

export default class FieldTemplate implements FieldTemplateInterface {

    static instance: FieldTemplate = new FieldTemplate()

    private snake = SnakeModel.instance
    private prey = PreyModel.instance

    private _DOMSnake: HTMLDivElement
    private _DOMPrey: HTMLDivElement

    private constructor() {
        this._DOMSnake = document.querySelector('.snake') as HTMLDivElement
        this._DOMPrey = document.querySelector('.prey') as HTMLDivElement
    }

    get DOMSnake(): HTMLDivElement {
        return this._DOMSnake
    }

    get DOMPrey(): HTMLDivElement {
        return this._DOMPrey
    }

    renderDOMSnake(): void {
        this._DOMSnake.innerHTML = ''
        let currentDot = this.snake.head as typeof this.snake.head.nextDot
        while (currentDot) {
            const divElement = document.createElement('div')
            divElement.style.left = `${currentDot.position.x}px`
            divElement.style.top = `${currentDot.position.y}px`

            this._DOMSnake.append(divElement)

            currentDot = currentDot.nextDot
        }
    }

    renderDOMPrey(): void {
        this._DOMPrey.innerHTML = ''
        const divElement = document.createElement('div')
        divElement.style.left = `${this.prey.position.x}px`
        divElement.style.top = `${this.prey.position.y}px`

        this._DOMPrey.append(divElement)
    }
}