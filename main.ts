let degreesC = 0
basic.forever(function () {
    degreesC = gatortemp.temp(AnalogPin.P2, GatorTempType.C)
    basic.showNumber(degreesC)
    basic.pause(100)
})
