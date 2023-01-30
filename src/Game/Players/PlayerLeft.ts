import Ball from '../Ball'
import Player from './Player'

export default class PlayerLeft extends Player {
    x: number
    y: number
    width: number
    height: number
    color: string

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.x = this.width
        this.y = canvas.height / 2 - this.height / 2
        this.control.keys = {
            up: 'w',
            down: 's',
        }
    }

    update = () => {
        this.playerMoviment()
    }
}
