import SnakeModel from "../Models/snakeModel.js";
import PreyModel from "../Models/preyModel.js";
class FieldTemplate {
    static instance = new FieldTemplate();
    snake = SnakeModel.instance;
    prey = PreyModel.instance;
    _DOMSnake;
    _DOMPrey;
    constructor() {
        this._DOMSnake = document.querySelector('.snake');
        this._DOMPrey = document.querySelector('.prey');
    }
    get DOMSnake() {
        return this._DOMSnake;
    }
    get DOMPrey() {
        return this._DOMPrey;
    }
    renderDOMSnake() {
        this._DOMSnake.innerHTML = '';
        let currentDot = this.snake.head;
        while (currentDot) {
            const divElement = document.createElement('div');
            divElement.style.left = `${currentDot.position.x}px`;
            divElement.style.top = `${currentDot.position.y}px`;
            this._DOMSnake.append(divElement);
            currentDot = currentDot.nextDot;
        }
    }
    renderDOMPrey() {
        this._DOMPrey.innerHTML = '';
        const divElement = document.createElement('div');
        divElement.style.left = `${this.prey.position.x}px`;
        divElement.style.top = `${this.prey.position.y}px`;
        this._DOMPrey.append(divElement);
    }
}
export default FieldTemplate;
