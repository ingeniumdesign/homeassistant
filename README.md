## ING - Home Assistant Configuration

This is my Home Assistant configuration. This is a Fork from [aFFekopp](https://github.com/aFFekopp/homeassistant).
<br/>My Home Assistant (HA) Machine is an [Raspberry Pi 3 Model B](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit Case](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

![HAVERSION](https://img.shields.io/badge/homeassistant-2020.12.2-blue)
![STARS](https://img.shields.io/github/stars/ingeniumdesign/homeassistant?color=yellow&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/ingeniumdesign/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/ingeniumdesign/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/ingeniumdesign/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash.JPG)

## Hardware

- Phoscon [Conbee II USB](https://phoscon.de/de/conbee2) - [Amazon](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration
- Z-Wave [RaZberry 2 Modul](https://z-wave.me/products/razberry/) ZMEERAZ2 - [Amazon](https://amzn.to/3nchsA1) - for Zigbee using ZHA integration
- Xiaomi [Roborock S6](https://de.roborock.com/pages/roborock-s6) - [Amazon](https://amzn.to/38eLmPX)
- AEOTEC [Plus Multisensor 6](https://aeotec.com/z-wave-sensor/) - [Amazon](https://amzn.to/38YJoCm)
- Amazon 1x [Echo Dot (4. Gen.)](https://amzn.to/3ncrktE)
- Amazon 1x [Echo Dot (3. Gen.)](https://amzn.to/3hHu8xz)

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