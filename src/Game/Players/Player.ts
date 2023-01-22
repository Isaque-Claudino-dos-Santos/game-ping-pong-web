import InterfacePlayer from '@Src/Interfaces/InterfacePlayer'
import KeyBoard from '../../KeyBoard'
import TypesPlayer from '@Src/Types/TypesPlayer'
import EnvGame from '../EnvGame'

export default abstract class Player implements InterfacePlayer {
    x: number
    y: number
    width: number
    height: number
    color: string

    control: TypesPlayer.Control = {
        keys: {
            up: '',
            down: '',
        },
        states: {
            up: false,
            down: false,
        },
    }

    speed = 5

    constructor() {
        this.width = EnvGame.PLAYER_WIDTH
        this.height = EnvGame.PLAYER_HEIGHT
        this.color = EnvGame.PLAYER_COLOR
    }

    protected playerMoviment() {
        this.control.states.up = KeyBoard.check(this.control.keys.up)
        this.control.states.down = KeyBoard.check(this.control.keys.down)

        if (this.control.states.up) this.y -= this.speed
        if (this.control.states.down) this.y += this.speed
    }

    render = (context: CanvasRenderingContext2D) => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    abstract update: () => void
}
