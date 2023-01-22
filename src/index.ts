import Display from './Display'
import Players from './Game/Players'

const display = new Display()

const playerLeft = new Players.PlayerLeft(display.canvas)
const playerRight = new Players.PlayerRight(display.canvas)

display.canvas.style.border = '1px solid black'

const onRender = () => {
    playerLeft.render(display.context)
    playerRight.render(display.context)
}

const onUpdate = () => {}

const loop = () => {
    onUpdate()
    onRender()
    requestAnimationFrame(loop)
}

loop()
