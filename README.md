## ING - Home Assistant Configuration

This is my Home Assistant configuration. This is a Fork from [aFFekopp](https://github.com/aFFekopp/homeassistant).
<br/>My Home Assistant (HA) Machine is an [Raspberry Pi 3 Model B](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

![HAVERSION](https://img.shields.io/badge/homeassistant-0.109.4-blue)
![STARS](https://img.shields.io/github/stars/aFFekopp/homeassistant?color=yellow&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/aFFekopp/homeassistant?style=flat-square)
![ACTIVITY](https://img.shields.io/github/commit-activity/w/aFFekopp/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/aFFekopp/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/aFFekopp/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/aFFekopp/homeassistant/master/docs/screenshots/pc/1.jpg)

## Hardware

- Phoscon [Conbee II](https://phoscon.de/de/conbee2) - [Amazon](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration
- Philips [Hue Lights](https://www2.meethue.com/de-de/bulbs)
- Philips [Hue Motion Sensors](https://www2.meethue.com/de-de/p/hue-bewegungssensor/8718696743171) in every room
- Philips [Hue Remotes](https://www2.meethue.com/de-de/p/hue-dimmschalter/8718696743157) with custom [3D printed Switch Frames](https://www.thingiverse.com/thing:2905340)
- Xiaomi [Buttons](https://banggood.com/Original-Xiaomi-Mijia-Smart-Home-Zig-bee-Wireless-Smart-Switch-Touch-Button-ON-OFF-WiFi-Remote-Control-Switch-p-1049175.html)
- Xiaomi [Humidity Sensor](https://www.banggood.com/Original-Xiaomi-Mijia-Smart-Home-Temperature-and-Humidity-Sensor-Thermometer-Sensor-p-1046061.html)
- Xiaomi [Door/Window Sensors](https://www.banggood.com/Original-Xiaomi-Intelligent-Door-Window-Sensor-Control-Smart-Home-Suit-Kit-Accessory-p-1017541.html)
- Amazon [Echo Dot](https://www.amazon.de/dp/B07PHPXHQS/) / [Echo Show 8](https://www.amazon.de/dp/B07SNPKX5Y/) / 2x [Echo 3rd Gen.](https://www.amazon.de/dp/B07P64LFFH/)
- Amazon [Fire TV 4k](https://www.amazon.de/dp/B079QHMFWC/)

## Hass.io Addons
- Check Home Assistant configuration
- [File editor](https://github.com/home-assistant/addons/tree/master/configurator)
- [Terminal & SSH](https://github.com/home-assistant/addons/tree/master/ssh)
- [duckDNS Addon](https://github.com/home-assistant/addons/tree/master/duckdns) / [duckDNS](https://www.duckdns.org/)
  <br />Fritzbox Install [Configs](https://www.duckdns.org/install.jsp)
  <br />edit: configuration.yaml => http
- [Hass.io Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup)
- [Mosquitto broker](https://home-assistant.io/addons/mosquitto/)
- [Node-RED](https://github.com/hassio-addons/addon-node-red)
- [ESPHome](https://esphome.io/)
- [MariaDB](https://home-assistant.io/addons/mariadb/)

## Custom Components

- [Alexa Media Player](https://github.com/custom-components/alexa_media_player)
- [HACS (Home Assistant Community Store)](https://hacs.xyz)
- [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen)

## Lovelace Plugins

- [auto-entities](https://github.com/thomasloven/lovelace-auto-entities)
- [Bar Card](https://github.com/custom-cards/bar-card)
- [Button Card](https://github.com/custom-cards/button-card)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod)
- [card-tools](https://github.com/thomasloven/lovelace-card-tools)
- [Custom Header](https://github.com/maykar/custom-header)
- [Lovelace Popup Card](https://github.com/thomasloven/lovelace-popup-card)
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card)
- [Mini Media Player](https://github.com/kalkih/mini-media-player)
- [slider-entity-row](https://github.com/thomasloven/lovelace-slider-entity-row)
- [state-switch](https://github.com/thomasloven/lovelace-state-switch)
- [Vertical Stack In Card](https://github.com/custom-cards/vertical-stack-in-card)
- [Weather Card](https://github.com/bramkragten/weather-card)

## Automations

All of my automations are in Home Assistant - automations.yaml:

- turning Hue motion sensors off on demand
- actionable notification via telegram when the doorbell is ringing
- turn everything off when everyone is in bed
- presence detection with different states (just arrived, just left, extended away etc.)
- alert when there ist movement in the apartment and nobody is home
- reminder to open the window in the bathroom when a humidity threshold is reached
- music following you around
- guest mode automations
- and many more...

## Aditional Screenshots

#### PC

![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/1-1.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/2.jpg)
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/3.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/4.jpg)
![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/5.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/pc/6.jpg)

#### Android

![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/1.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/2.jpg) | ![](https://raw.githubusercontent.com/aFFekopp/noctis/master/docs/screenshots/android/3.jpg)
:-------------------------:|:-------------------------:|:-------------------------: