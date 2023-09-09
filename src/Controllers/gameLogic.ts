import SnakeModel from "../Models/snakeModel.js"
import FieldTemplate from "../Templates/fieldTemplate.js"
import { DotModelInterface, NextDotType, PositionType } from "../Models/dotModel"
import deepClone from "../Utils/deepClone.js"

type DirectionType = 'up' | 'down' | 'left' | 'right'

type GameLogicType = {
    spawn(): void,
    move(dot: DotModelInterface): void,
    crawl: {
        start(): void,
        stop(): void
    },
    changeDirection(event: KeyboardEvent): void,
    checkGameOver(): void,
}

const gameLogic: GameLogicType = (() => {

    const snake = SnakeModel.instance
    const fieldTemplate = FieldTemplate.instance

    let _direction: DirectionType = 'right'
    let unfilledPosition: PositionType | null = null

    const spawn = (): void => {
        snake.head.nextDot = snake.tail
        fieldTemplate.renderField()
    }

    const move = (dot: DotModelInterface): void => {

        if (!unfilledPosition) {
            unfilledPosition = deepClone(dot.position)

            if (_direction === 'up') {
                dot.position.y -= 25
            }

            if (_direction === 'down') {
                dot.position.y += 25
            }

            if (_direction === 'left') {
                dot.position.x -= 25
            }

            if (_direction === 'right') {
                dot.position.x += 25
            }


            checkGameOver()
        } else {
            const temp = { ...dot.position }
            dot.position = unfilledPosition
            unfilledPosition = temp
        }
    }

    function changeDirection(event: KeyboardEvent) {
        // placeholder checks, will write proper move validator later
        if (_direction === 'up' && event.key === 'ArrowDown') return
        if (_direction === 'down' && event.key === 'ArrowUp') return
        if (_direction === 'left' && event.key === 'ArrowRight') return
        if (_direction === 'right' && event.key === 'ArrowLeft') return
        ///////////////////////////////////////////////////////////////

        if (event.key === 'ArrowUp') {
            _direction = 'up'
        }

        if (event.key === 'ArrowDown') {
            _direction = 'down'
        }

        if (event.key === 'ArrowLeft') {
            _direction = 'left'
        }

        if (event.key === 'ArrowRight') {
            _direction = 'right'
        }
    }

    const crawl = (() => {
        let interval: NodeJS.Timer

        function start() {
            interval = setInterval(() => {
                let currentDot = snake.head as NextDotType

                while (currentDot) {
                    move(currentDot)
                    currentDot = currentDot.nextDot
                }

                unfilledPosition = null
                fieldTemplate.renderField()
            }, 200)
        }

        function stop() {
            clearInterval(interval)
        }

        return {
            start,
            stop
        }
    })()

    const checkGameOver = (): void => {
        const snakePosition = snake.head.position

        if (
            snakePosition.x < 0 ||
            snakePosition.x === 500 ||
            snakePosition.y < 0 ||
            snakePosition.y === 400
        ) {
            crawl.stop()
            snake.revive()
            spawn()
        }
    }

    return {
        spawn,
        move,
        crawl,
        changeDirection,
        checkGameOver,
    }
})()

export default gameLogic