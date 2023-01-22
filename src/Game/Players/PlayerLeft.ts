import EnvGame from '../EnvGame'
import Player from './Player'

export default class PlayerLeft extends Player {
    x: number
    y: number
    width: number
    height: number
    color: string = 'black'

    constructor(canvas: HTMLCanvasElement) {
        super()
        this.x = this.width
        this.y = canvas.height / 2 - this.height / 2
    }

    update = () => {}
}
