let Aforo = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Aforo = Aforo + 1
    }
    if (input.buttonIsPressed(Button.A)) {
        Aforo = Aforo - 1
    }
    if (input.buttonIsPressed(Button.AB)) {
        Aforo = 0
    }
    basic.showNumber(Aforo)
})
