input.onButtonPressed(Button.A, function () {
    if (counter > 1) {
        counter += -1
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (counter < 25) {
        counter += 1
        basic.clearScreen()
    }
})
let y = 0
let x = 0
let counter = 0
counter = 1
basic.forever(function () {
    x = (counter - 1) % 5
    y = Math.trunc((counter - 1) / 5)
    led.plot(x, y)
})
