basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (pins.analogReadPin(AnalogPin.P1) > 560) {
        led.plot(0, 0)
        led.unplot(0, 2)
        led.unplot(0, 4)
    } else if (pins.analogReadPin(AnalogPin.P1) < 460) {
        led.unplot(0, 0)
        led.unplot(0, 2)
        led.plot(0, 4)
    } else {
        led.unplot(0, 0)
        led.plot(0, 2)
        led.unplot(0, 4)
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.analogReadPin(AnalogPin.P1) > 560) {
        led.plot(4, 0)
        led.unplot(4, 2)
        led.unplot(4, 4)
    } else if (pins.analogReadPin(AnalogPin.P1) < 460) {
        led.unplot(4, 0)
        led.unplot(4, 2)
        led.plot(4, 4)
    } else {
        led.unplot(4, 0)
        led.plot(4, 2)
        led.unplot(4, 4)
    }
})
