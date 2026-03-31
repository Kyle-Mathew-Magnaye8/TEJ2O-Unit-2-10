"""
Created by: Kyle Matthew
Created on: Mar 2026
This module reads the light levels and updates NeoPixels.
"""

from microbit import *
import neopixel

# Initialize NeoPixels
strip = neopixel.NeoPixel(pin16, 4)

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.clear()
        sleep(100)

        # Read the light level (0-255)
        light_reading = display.read_light_level()
        display.scroll(str(light_reading), wait=False)

        # 1. Start with all pixels off
        strip.clear()

        # 2. If light is > 52, light up 1st Neopixel (Red)
        if light_reading > 52:
            strip[0] = (255, 0, 0)

        # 3. If light is > 104, light up 2nd Neopixel
        if light_reading > 104:
            strip[1] = (255, 0, 0)

        # 4. If light is > 156, light up 3rd Neopixel
        if light_reading > 156:
            strip[2] = (255, 0, 0)

        # 5. If light is > 208, light up 4th Neopixel
        if light_reading > 208:
            strip[3] = (255, 0, 0)

        # Show the final result
        strip.show()

        # Wait 2 seconds then reset
        sleep(2000)
        strip.clear()
        strip.show()
        display.show(Image.HAPPY)
