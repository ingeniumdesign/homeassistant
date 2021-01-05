## ING - Home Assistant Configuration :metal:

This is my Home Assistant configuration. This is a Fork of [aFFekopp](https://github.com/aFFekopp/homeassistant).
<br/>My Home Assistant (HA) Machine is an [Raspberry Pi 3 Model B+ *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit Case *](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

> Buy the new [Raspberry Pi 4 B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) - [Amazon](https://amzn.to/35aHPjo) with 8GB RAM. :rocket:

![HAVERSION](https://img.shields.io/badge/homeassistant-2020.12.2-blue)
![STARS](https://img.shields.io/github/stars/ingeniumdesign/homeassistant?color=yellow&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/ingeniumdesign/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/ingeniumdesign/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/ingeniumdesign/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash.JPG)

## Hardware

- Raspberry [Pi3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) - [Amazon *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC
- AVM [FRITZ!Box 6590 Cable](https://avm.de/produkte/fritzbox/fritzbox-6590-cable/) - [Amazon *](https://amzn.to/359i6YE) // Take the new [6591 Cable](https://avm.de/produkte/fritzbox/fritzbox-6591-cable/)! - [Amazon *](https://amzn.to/3pNbdUU)
- AVM [FRITZ!DECT 301](https://avm.de/produkte/fritzdect/fritzdect-301/) - [Amazon *](https://amzn.to/3pSRUd4)
- AVM [FRITZ!DECT 200](https://avm.de/produkte/fritzdect/fritzdect-200/) - [Amazon *](https://amzn.to/2LnpAQK)
- AVM [FRITZ!Powerline 1260E Set](https://avm.de/produkte/fritzpowerline/fritzpowerline-1260e-wlan-set/) - [Amazon *](https://amzn.to/35a7gSv)
- Phoscon [Conbee II USB](https://phoscon.de/de/conbee2) - [Amazon *](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration <br />
  _See the Install Pi3 Infos: Conbee II USB for the RPi 3B+_
- Z-Wave [RaZberry 2 Modul](https://z-wave.me/products/razberry/) ZMEERAZ2 - [Amazon *](https://amzn.to/3nchsA1) - for Z-Wave <br />
  _See the Install Pi3 Infos: Z-Wave RaZberry 2 Modul for the RPi 3B+_
- Xiaomi [Roborock S6](https://de.roborock.com/pages/roborock-s6) - [Amazon *](https://amzn.to/38eLmPX)
- AEOTEC [Plus Multisensor 6](https://aeotec.com/z-wave-sensor/) - [Amazon *](https://amzn.to/38YJoCm)
- Amazon [FireHD 10 Tablet *](https://amzn.to/3oicZNp)
- Amazon 1x [Echo Dot (4. Gen.) *](https://amzn.to/3ncrktE)
- Amazon 1x [Echo Dot (3. Gen.) *](https://amzn.to/3hHu8xz)
- Synology [DS713+](https://www.synology.com/de-de/support/download/DS713+#system) - [Amazon *](https://amzn.to/3hHu8xz) // Buy the new [DS720+](https://www.synology.com/de-de/products/DS720+) [Amazon *](https://amzn.to/3rWErT1)
- ZyXEL [GS1900-24E](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/391vcbR)
- ZyXEL [GS1900-8](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/357BQMo)

## Hass.io Addons

- Check Home Assistant configuration
- [File editor](https://github.com/home-assistant/addons/tree/master/configurator)
- [Terminal & SSH](https://github.com/home-assistant/addons/tree/master/ssh)
- [duckDNS Addon](https://github.com/home-assistant/addons/tree/master/duckdns) / [duckDNS](https://www.duckdns.org/)
  <br />Fritzbox Install [Configs](https://www.duckdns.org/install.jsp)
  <br />_edit: configuration.yaml => http_
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

## Automations :green_heart:

All of my automations are in Home Assistant - automations.yaml:

- [x] Quick-Infos when leaving the house
- [x] Weather-Infos for one Week
- [ ] turning Hue motion sensors off on demand
- [x] notification via telegram
- [ ] presence detection with different states like zone
- [x] Trash Calendar with notification
- [x] Vacuum Infos and Start/Stop Functions
- [x] HA and Plugin Update Infos
- [x] Frontend Reload, Restart HA and Server restart
- [x] Pi3 Infos and Stats
- [x] NAS Infos and Stats
- [x] Network Infos from Fritzbox
- [x] SpeedTest.net Infos for the Network
- [x] Settings for the different sensors, Lights, Motion detector...
- [ ] and many more...

## Aditional Screenshots

#### PC

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash.JPG) Dashboard | ![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash2.JPG) Popup with Blur-Effect
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash3.JPG) Active Vacuum | ![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-system.JPG) System Overview
![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-office.JPG) Room - Office |

## Install - Infos :point_up:

### Conbee II USB for the RPi 3B+

1. Plugged it into the USB.
2. Popped out the SD card and used [USB reader *](https://amzn.to/3pOwVI1) to access on another computer.
3. Edited config.txt <br />
   Config Device Pi3B, Pi3B+ or Pi4: <br />
   **Raspberry Pi 3B** or older: <br/>
```yaml
enable_uart=1
dtoverlay=pi3-disable-bt
```
3.  **Raspberry Pi 3B+ or 4** <br/>
```yaml
enable_uart=1
dtoverlay=pi3-miniuart-bt
```
4. Put SD card back in RPi and turned it on.
5. Went to Configuration > deCONZ. <br/>
```yaml
device: >-
  /dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_DE2408889-if00
```

### Z-Wave RaZberry 2 Modul for the RPi 3B+:

https://www.home-assistant.io/docs/z-wave/device-specific/#razberry-board

1. Plugged it into the very first pins (#1-#10).
2. Popped out the SD card and used [USB reader *](https://amzn.to/3pOwVI1) to access on another computer.
3. Edited config.txt to add "dtoverlay=pi3-miniuart-bt" for a Pi3B+. Ejected.
4. Put SD card back in RPi and turned it on.
5. Went to Configuration > Integrations.
6. Added "Z-Wave". Set device path to "/dev/ttyAMA0". HA said everything was good.
7. Went to Configuration > Z-Wave.
8. Tried "Test Network" which showed green.

### DEBUGGING and Errors :neckbeard:

- [ ] **ERROR** vacuum-card/vacuum-card.js Error: Cannot read property 'states' of undefined [GitHub #169](https://github.com/denysdovhan/vacuum-card/issues/169)
- [ ] **WARNING** The 'entity_id' option is deprecated, please remove it from your configuration


_* Amazon Affiliate Link_
