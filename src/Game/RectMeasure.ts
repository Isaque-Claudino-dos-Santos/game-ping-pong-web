export default abstract class RectMeasure {
    declare x: number
    declare y: number
    declare width: number
    declare height: number

    centerX(): number {
        return this.x + this.width / 2
    }

    centerY(): number {
        return this.y + this.height / 2
    }

    halfWidth(): number {
        return this.width / 2
    }

    halfHeight(): number {
        return this.height / 2
    }
}
