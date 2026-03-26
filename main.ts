/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program reads light levels and updates NeoPixels.
*/

let lightReading = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Initial setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // Clear screen to get an accurate light reading
  basic.clearScreen()
  basic.pause(100)
  lightReading = input.lightLevel()
  basic.showNumber(lightReading)

  // 1. Start with all pixels off (handles the <= 51 case)
  strip.clear()

  // 2. If light is > 52, light up 1 Neopixel
  if (lightReading > 52) {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  }

  // 3. If light is > 104, light up 2 Neopixels
  if (lightReading > 104) {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  }

  // 4. If light is > 156, light up 3 Neopixels
  if (lightReading > 156) {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  }

  // 5. If light is > 208, light up 4 Neopixels
  if (lightReading > 208) {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
  }

  // Show the final result
  strip.show()

  // Wait 2 seconds so you can see the result, then reset
  basic.pause(2000)
  strip.clear()
  strip.show()
  basic.showIcon(IconNames.Happy)
})
