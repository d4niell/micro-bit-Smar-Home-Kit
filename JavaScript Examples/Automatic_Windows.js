let noise = 0
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P10)
    if (noise > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(2000)
    }
})
