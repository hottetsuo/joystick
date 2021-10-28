basic.forever(function () {
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (pins.analogReadPin(AnalogPin.P0) > 560) {
        led.plot(2, 2)
        led.unplot(1, 2)
        led.unplot(0, 2)
    } else if (pins.analogReadPin(AnalogPin.P0) < 460) {
        led.unplot(2, 2)
        led.unplot(1, 2)
        led.plot(0, 2)
    } else {
        led.unplot(2, 2)
        led.plot(1, 2)
        led.unplot(0, 2)
    }
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.analogReadPin(AnalogPin.P1) > 560) {
        led.plot(3, 1)
        led.unplot(3, 2)
        led.unplot(3, 3)
    } else if (pins.analogReadPin(AnalogPin.P1) < 460) {
        led.unplot(3, 1)
        led.unplot(3, 2)
        led.plot(3, 3)
    } else {
        led.unplot(3, 1)
        led.plot(3, 2)
        led.unplot(3, 3)
    }
})
