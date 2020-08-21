let direction = -1
let angle = 45
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    angle += direction
    pins.servoWritePin(AnalogPin.P0, angle)
    if (angle < 0 || angle == 90) {
        direction = direction * -1
    }
})
