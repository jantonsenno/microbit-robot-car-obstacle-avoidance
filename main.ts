let distance = 0
basic.forever(function () {
    distance = MiniCar.ultra()
    if (distance > 20) {
        basic.showIcon(IconNames.Happy)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 80)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 80)
    } else {
        basic.showIcon(IconNames.Sad)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
        basic.pause(500)
    }
})
