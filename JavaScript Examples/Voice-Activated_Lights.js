let light2 = 0
led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P2)
    if (light2 < 50) {
        let noise = 0
        light2 = smarthome.ReadNoise(AnalogPin.P2)
        if (noise > 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(10000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
