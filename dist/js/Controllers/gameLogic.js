import SnakeModel from "../Models/snakeModel.js";
import FieldTemplate from "../Templates/fieldTemplate.js";
import DotModel from "../Models/dotModel.js";
import deepClone from "../Utils/deepClone.js";
import ModalTemplate from "../Templates/modalTemplate.js";
import PreyModel from "../Models/preyModel.js";
const gameLogic = (() => {
    const snake = SnakeModel.instance;
    const prey = PreyModel.instance;
    const fieldTemplate = FieldTemplate.instance;
    const modal = ModalTemplate.instance;
    const gameStatus = {
        paused: false,
        gameOver: false,
        speed: 300
    };
    let _direction = 'right';
    let unfilledPosition = null;
    const reset = () => {
        gameStatus.paused = false;
        gameStatus.gameOver = false;
        _direction = 'right';
        unfilledPosition = null;
    };
    const spawn = () => {
        snake.head.nextDot = snake.tail;
        console.log('head', snake.head);
        console.log('tail', snake.tail);
        fieldTemplate.renderDOMSnake();
        fieldTemplate.renderDOMPrey();
    };
    const move = (dot) => {
        if (!unfilledPosition) {
            unfilledPosition = deepClone(dot.position);
            if (_direction === 'up') {
                dot.position.y -= 25;
            }
            if (_direction === 'down') {
                dot.position.y += 25;
            }
            if (_direction === 'left') {
                dot.position.x -= 25;
            }
            if (_direction === 'right') {
                dot.position.x += 25;
            }
            checkGameOver();
        }
        else {
            if (gameStatus.gameOver)
                return;
            const temp = deepClone(dot.position);
            dot.position = unfilledPosition;
            unfilledPosition = temp;
        }
    };
    function changeDirection(event) {
        // placeholder checks, will write proper move validator later
        if (_direction === 'up' && event.key === 'ArrowDown')
            return;
        if (_direction === 'down' && event.key === 'ArrowUp')
            return;
        if (_direction === 'left' && event.key === 'ArrowRight')
            return;
        if (_direction === 'right' && event.key === 'ArrowLeft')
            return;
        ///////////////////////////////////////////////////////////////
        if (event.key === 'ArrowUp') {
            _direction = 'up';
            continuePlaying();
        }
        if (event.key === 'ArrowDown') {
            _direction = 'down';
            continuePlaying();
        }
        if (event.key === 'ArrowLeft') {
            _direction = 'left';
            continuePlaying();
        }
        if (event.key === 'ArrowRight') {
            _direction = 'right';
            continuePlaying();
        }
    }
    const crawl = (() => {
        let interval;
        function start() {
            interval = setInterval(() => {
                let currentDot = snake.head;
                while (currentDot) {
                    move(currentDot);
                    currentDot = currentDot.nextDot;
                }
                eat();
                unfilledPosition = null;
                fieldTemplate.renderDOMSnake();
            }, gameStatus.speed);
        }
        function stop() {
            clearInterval(interval);
        }
        return {
            start,
            stop
        };
    })();
    const eat = () => {
        if (snake.head.position.x === prey.position.x && snake.head.position.y === prey.position.y) {
            const newDot = new DotModel({ x: snake.tail.position.x, y: snake.tail.position.y }, null);
            snake.tail = newDot;
            prey.shufflePosition();
            fieldTemplate.renderDOMPrey();
        }
    };
    const continuePlaying = () => {
        if (gameStatus.paused) {
            gameStatus.paused = false;
            crawl.start();
        }
    };
    const checkGameOver = () => {
        const snakePosition = snake.head.position;
        if (snakePosition.x < 0 ||
            snakePosition.x === 500 ||
            snakePosition.y < 0 ||
            snakePosition.y === 400 ||
            gameStatus.gameOver) {
            gameStatus.gameOver = true;
            _direction = 'right';
            crawl.stop();
            modal.showModal('GAME OVER', false);
            snake.revive();
            spawn();
            return;
        }
        let currentDot = snake.head.nextDot;
        while (currentDot) {
            if (snakePosition.x === currentDot.position.x &&
                snakePosition.y === currentDot.position.y) {
                gameStatus.gameOver = true;
                checkGameOver;
            }
            currentDot = currentDot.nextDot;
        }
    };
    return {
        gameStatus,
        spawn,
        move,
        crawl,
        changeDirection,
        eat,
        checkGameOver,
        reset,
    };
})();
export default gameLogic;
