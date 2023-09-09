import SnakeModel from "../Models/snakeModel.js";
class FieldTemplate {
    static instance = new FieldTemplate();
    snakeModel = SnakeModel.instance;
    _DOMSnake;
    constructor() {
        this._DOMSnake = document.querySelector('.snake');
    }
    get DOMSnake() {
        return this._DOMSnake;
    }
    renderField() {
        this._DOMSnake.innerHTML = '';
        let currentDot = this.snakeModel.head;
        while (currentDot) {
            const divElement = document.createElement('div');
            divElement.style.left = `${currentDot.position.x}px`;
            divElement.style.top = `${currentDot.position.y}px`;
            this._DOMSnake.append(divElement);
            currentDot = currentDot.nextDot;
        }
    }
}
export default FieldTemplate;
