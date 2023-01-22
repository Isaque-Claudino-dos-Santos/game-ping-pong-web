import InterfacePlayer from '@Interfaces/InterfacePlayer'
import EnvGame from '../EnvGame'

export default class PlayerLeft implements InterfacePlayer {
    x: number
    y: number
    width: number
    height: number
    color: string = 'black'

    constructor(canvas: HTMLCanvasElement) {
        this.width = EnvGame.PLAYER_WIDTH
        this.height = EnvGame.PLAYER_HEIGHT
        this.x = this.width
        this.y = canvas.height / 2 - this.height / 2
        this.color = EnvGame.PLAYER_COLOR
    }

    update = () => {}

    render = (context: CanvasRenderingContext2D) => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
