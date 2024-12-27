input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(600)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(600)
        }
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
