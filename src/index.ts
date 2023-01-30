import KeyBoard from './KeyBoard'
import Display from './Display'
import Players from './Game/Players'
import Ball from './Game/Ball'

new KeyBoard()
KeyBoard.config('w')
KeyBoard.config('s')
KeyBoard.config('ArrowUp')
KeyBoard.config('ArrowDown')

const display = new Display()

const playerLeft = new Players.PlayerLeft(display.canvas)
const playerRight = new Players.PlayerRight(display.canvas)
const ball = new Ball(display.canvas)

display.canvas.style.border = '1px solid black'

const onRender = () => {
    display.clearAllCanvas()
    ball.render(display.context)
    playerLeft.render(display.context)
    playerRight.render(display.context)
}

const onUpdate = () => {
    playerLeft.update()
    playerRight.update()
    ball.update()
}

const loop = () => {
    onUpdate()
    onRender()
    requestAnimationFrame(loop)
}

loop()
