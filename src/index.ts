import FieldTemplate from "./Templates/fieldTemplate.js";
import SnakeModel from "./Models/snakeModel.js";
import game from "./Controllers/gameLogic.js";
import modalTemplate from "./Templates/modalTemplate.js"
import debounce from "./Utils/debounce.js";

const fieldTemplate = FieldTemplate.instance
const snake = SnakeModel.instance
const modal = modalTemplate.instance

const initApp = () => {

    startNewGame()

    const startBtn = document.querySelector('button.start') as HTMLButtonElement

    const pausetBtn = document.querySelector('button.pause') as HTMLButtonElement

    const restartBtn = document.querySelector('button.restart') as HTMLButtonElement

    startBtn.addEventListener('click', () => {
        if (game.gameStatus.paused) {
            game.gameStatus.paused = false
            modal.hideModal()
            game.crawl.start()
        } else if (game.gameStatus.gameOver) {
            modal.hideModal()
            game.gameStatus.gameOver = false
            game.crawl.start()
        }
    })

    pausetBtn.addEventListener('click', () => {
        if (!game.gameStatus.gameOver) {
            game.gameStatus.paused = true
            game.crawl.stop()
            modal.showModal('PAUSED')
        }
    })

    restartBtn.addEventListener('click', () => {
        snake.revive()
        game.crawl.stop()
        game.reset()
        modal.hideModal()
        startNewGame()
    })

    window.addEventListener('keyup', game.changeDirection)
}

function startNewGame() {
    game.spawn()
    game.crawl.start()
}

window.addEventListener('DOMContentLoaded', initApp)