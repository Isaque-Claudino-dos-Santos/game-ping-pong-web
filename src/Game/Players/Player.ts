import InterfacePlayer from '@Src/Interfaces/InterfacePlayer'
import EnvGame from '../EnvGame'

export default abstract class Player implements InterfacePlayer {
    x: number
    y: number
    width: number
    height: number
    color: string

    constructor() {
        this.width = EnvGame.PLAYER_WIDTH
        this.height = EnvGame.PLAYER_HEIGHT
        this.color = EnvGame.PLAYER_COLOR
    }

    update = () => {}

    render = (context: CanvasRenderingContext2D) => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
