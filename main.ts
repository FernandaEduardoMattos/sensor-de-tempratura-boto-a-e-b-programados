input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() > 27) {
        basic.showArrow(input.temperature())
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
