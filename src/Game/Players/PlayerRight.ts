import Ball from '../Ball'
import EnvGame from '../EnvGame'
import Player from './Player'

export default class PlayerRight extends Player {
    x: number
    y: number
    width: number
    height: number
    color: string

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.x = canvas.width - this.width * 2
        this.y = canvas.height / 2 - this.height / 2
        this.control.keys = {
            up: 'ArrowUp',
            down: 'ArrowDown',
        }
    }

    update = () => {
        this.playerMoviment()
    }
}
