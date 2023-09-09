import FieldTemplate from "./Templates/fieldTemplate.js";
import SnakeModel from "./Models/snakeModel.js";
import DotModel from "./Models/dotModel.js";
import gameLogic from "./Controllers/gameLogic.js";

const fieldTemplate = FieldTemplate.instance
const snake = SnakeModel.instance

const initApp = () => {

    gameLogic.initializeGame()
    gameLogic.crawl.start()

    window.addEventListener('keyup', gameLogic.changeDirection)
}



window.addEventListener('DOMContentLoaded', initApp)