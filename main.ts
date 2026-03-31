/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program reads the light levels and updates NeoPixels.
*/

let lightReading = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// initial setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.pause(100)
  lightReading = input.lightLevel()
  basic.showNumber(lightReading)

  // 1. start with all pixels off (handles the <= 51 case)
  strip.clear()

  // 2. if light is > 52, light up 1 Neopixel
  if (lightReading > 52) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  }

  // 3. if light is > 104, light up 2 Neopixels
  if (lightReading > 104) {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  }

  // 4. if light is > 156, light up 3 Neopixels
  if (lightReading > 156) {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  }

  // 5. if light is > 208, light up 4 Neopixels
  if (lightReading > 208) {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
  }

  // show the final result
  strip.show()

  // wait 2 seconds then reset
  basic.pause(2000)
  strip.clear()
  strip.show()
  basic.showIcon(IconNames.Happy)
})
