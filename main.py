def on_button_pressed_a():
    for index in range(4):
        for index2 in range(5):
            pins.digital_write_pin(DigitalPin.P0, 1)
            basic.pause(600)
            pins.digital_write_pin(DigitalPin.P0, 0)
            basic.pause(600)
        for index3 in range(10):
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P1, 0)
            pins.digital_write_pin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digital_write_pin(DigitalPin.P2, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)
