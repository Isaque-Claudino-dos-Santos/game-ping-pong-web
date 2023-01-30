import InterfaceEntity from '@Src/Interfaces/InterfaceEntity'
import InterfacePlayer from '@Src/Interfaces/InterfacePlayer'

type TypeSenses = { x: 1 | -1; y: 1 | -1 }

export default class Ball implements InterfaceEntity {
    x: number
    y: number
    width: number = 10
    height: number = 10
    color: string = 'red'

    senses: TypeSenses = {
        x: 1,
        y: 1,
    }

    speed = 5

    constructor(canvas: HTMLCanvasElement) {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
    }

    bounce(colliderIn: InterfacePlayer) {
        //TODO: Implement
    }

    update = () => {
        this.x += this.speed * this.senses.x
    }

    render = (context: CanvasRenderingContext2D) => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
