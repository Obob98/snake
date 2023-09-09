import FieldTemplate from "./Templates/fieldTemplate.js";
import SnakeModel from "./Models/snakeModel.js";
import DotModel from "./Models/dotModel.js";
import game from "./Controllers/gameLogic.js";

const fieldTemplate = FieldTemplate.instance
const snake = SnakeModel.instance

const initApp = () => {

    game.spawn()
    game.crawl.start()

    window.addEventListener('keyup', game.changeDirection)
}



window.addEventListener('DOMContentLoaded', initApp)