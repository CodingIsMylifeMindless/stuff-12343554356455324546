input.onButtonPressed(Button.A, function () {
    basic.showString("starting")
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(200)
    music.playMelody("G F G F G F G F ", 420)
    basic.pause(200)
    basic.showString("b to select rune")
    basic.showString("shake to show stats")
})
input.onButtonPressed(Button.B, function () {
    Players = randint(0, 11)
    Atk = 0
    Def = 0
    St = 0
    if (Players == 0) {
        Atk = 5
        Def = 3
        basic.showLeds(`
            # # # # .
            # . . # .
            # . . . .
            # # # # #
            . . # . .
            `)
    } else if (Players == 1) {
        Atk = 8
        St = 12
        basic.showLeds(`
            . . # # .
            . . . # .
            # . . # .
            # # # # #
            # . # . .
            `)
    } else if (Players == 2) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            . . . . .
            . # . . .
            # . . . .
            # # # # #
            # . # . .
            `)
    } else if (Players == 3) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            . # # . .
            # . . . #
            # . # . #
            . . . . #
            . # # # .
            `)
    } else if (Players == 4) {
        Atk = 0
        Def = 0
        St = 0
        basic.showLeds(`
            . # # # #
            # . . # #
            # . # . #
            . . . . #
            . # # # .
            `)
    } else if (Players == 5) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            . # # # #
            # . . # #
            # . # . #
            . # . . #
            # # # # .
            `)
    } else if (Players == 6) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            # # # # #
            . # . . #
            . . . . #
            . # . . #
            # # . # .
            `)
    } else if (Players == 7) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            # . # # #
            . # . . #
            # . # . #
            . # . . #
            . . . # .
            `)
    } else if (Players == 8) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    } else if (Players == 9) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            # . # . .
            . . . . #
            . # . # .
            # . # . .
            . # . . .
            `)
    } else if (Players == 10) {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            # . # # .
            # . . # #
            . # . # .
            # . . # .
            . # . # .
            `)
    } else {
        Atk = 0
        St = 0
        Def = 0
        basic.showLeds(`
            # # # # #
            # . . # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("1 = atk")
    basic.showString("2 = def")
    basic.showString("3 = st")
    basic.showString("" + (Atk))
    basic.showString("" + (Def))
    basic.showString("" + (St))
    basic.showString("= stats")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Games += 1
    basic.showString("a to continue")
})
let St = 0
let Def = 0
let Atk = 0
let Players = 0
let Points = 0
let Games = 0
basic.showString("logo to start")
