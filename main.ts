let i = 0
let c = 0
input.onButtonPressed(Button.A, function () {
    i = -1000
    c = c + 1
    basic.showNumber(c)
})
input.onButtonPressed(Button.AB, function () {
    i = c
    while (i >= 0) {
        i = i - 1
        basic.showNumber(i)
        if (i == 0) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    i = -1000
    c = c + 10
    basic.showNumber(c)
})
