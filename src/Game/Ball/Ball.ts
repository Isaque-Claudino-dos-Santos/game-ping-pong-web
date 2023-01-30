import InterfaceEntity from '@Src/Interfaces/InterfaceEntity'
import InterfacePlayer from '@Src/Interfaces/InterfacePlayer'
import RectMeasure from '../RectMeasure'

type TypeSenses = { x: 1 | -1; y: 1 | -1 }

export default class Ball extends RectMeasure implements InterfaceEntity {
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

    constructor(private canvas: HTMLCanvasElement) {
        super()
        this.x = canvas.width / 2
        this.y = canvas.height / 2
    }

    bounce(colliderIn: InterfacePlayer) {
        //TODO: Implement
        const catX = this.centerX() - colliderIn.centerX()
        const catY = this.centerY() - colliderIn.centerY()
        const sumHalfWidth = this.halfWidth() + colliderIn.halfWidth()
        const sumHalfHeight = this.halfHeight() + colliderIn.halfHeight()
        const overlapX = sumHalfWidth - Math.abs(catX)
        const overlapY = sumHalfHeight - Math.abs(catY)

        if (Math.abs(catX)) {
        }
    }

    update = () => {
        this.x += this.speed * this.senses.x
        this.y += this.speed * this.senses.y

        if (this.y + this.height >= this.canvas.height) this.senses.y = -1
        if (this.y <= 0) this.senses.y = 1
    }

    render = (context: CanvasRenderingContext2D) => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
