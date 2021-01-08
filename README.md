## ING - Home Assistant Configuration :metal:

This is my Home Assistant configuration. This is a Fork of [aFFekopp](https://github.com/aFFekopp/homeassistant).
<br/>My final Home Assistant (HA) Machine is a Intel NUC i5 ([NUC7i5BNB](https://ark.intel.com/content/www/de/de/ark/products/95064/intel-nuc-board-nuc7i5bnb.html)) with 16GB RAM and 250GB NVMe SSD [Amazon i5-10 *](https://amzn.to/35e8tYI)

---

My Home Assistant (HA) Test-Machine is an [Raspberry Pi 3 Model B+ *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit Case *](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

> Buy the new [Raspberry Pi 4 B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) - [Amazon *](https://amzn.to/35aHPjo) with 8GB RAM. :rocket:

---

![HAVERSION](https://img.shields.io/badge/homeassistant-2020.12.2-blue)
![STARS](https://img.shields.io/github/stars/ingeniumdesign/homeassistant?color=yellow&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/ingeniumdesign/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/ingeniumdesign/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/ingeniumdesign/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/hs-dash.JPG)
_More Screenshot down below._

## Hardware

- Intel NUC i5 [NUC7i5BNB](https://ark.intel.com/content/www/de/de/ark/products/95064/intel-nuc-board-nuc7i5bnb.html) with 16GB RAM and 250GB NVMe SSD [Amazon i5-10 *](https://amzn.to/35e8tYI)
- Raspberry [Pi3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) - [Amazon *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC
- AVM [FRITZ!Box 6590 Cable](https://avm.de/produkte/fritzbox/fritzbox-6590-cable/) - [Amazon *](https://amzn.to/359i6YE) // Take the new [6591 Cable](https://avm.de/produkte/fritzbox/fritzbox-6591-cable/)! - [Amazon *](https://amzn.to/3pNbdUU)
- AVM [FRITZ!DECT 301](https://avm.de/produkte/fritzdect/fritzdect-301/) - [Amazon *](https://amzn.to/3pSRUd4)
- AVM [FRITZ!DECT 200](https://avm.de/produkte/fritzdect/fritzdect-200/) - [Amazon *](https://amzn.to/2LnpAQK)
- AVM [FRITZ!Powerline 1260E Set](https://avm.de/produkte/fritzpowerline/fritzpowerline-1260e-wlan-set/) - [Amazon *](https://amzn.to/35a7gSv)
- Phoscon [Conbee II USB](https://phoscon.de/de/conbee2) - [Amazon *](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration <br />
  _See the Install Pi3 Infos down below: Conbee II USB for the RPi 3B+_
- Z-Wave [RaZberry 2 Modul](https://z-wave.me/products/razberry/) ZMEERAZ2 - [Amazon *](https://amzn.to/3nchsA1) - for ZWave <br />
  _See the Install Pi3 Infos down below: Z-Wave RaZberry 2 Modul for the RPi 3B+_
- AEOTEC [Z-Stick Gen5+ EU 868.4MHz](https://aeotec.com/z-wave-usb-stick/) ZW090-C - for ZWave <br />
  _For the Intel NUC i5 Upgrade_
- Xiaomi [Roborock S6](https://de.roborock.com/pages/roborock-s6) - [Amazon *](https://amzn.to/38eLmPX)
- AEOTEC [Plus Multisensor 6 EU 868.4MHz](https://aeotec.com/z-wave-sensor/) ZW100-C - [Amazon *](https://amzn.to/38YJoCm)
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
- [OpenZWave (beta)](https://www.home-assistant.io/integrations/ozw) - RaZberry 2
- [deCONZ](https://www.home-assistant.io/integrations/deconz/) - Conbee II

## Custom Components

- [Alexa Media Player](https://github.com/custom-components/alexa_media_player)
- [HACS (Home Assistant Community Store)](https://hacs.xyz)
- [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen)

## Lovelace Plugins

- [layout-card](https://github.com/thomasloven/lovelace-layout-card)
- [hui-element](https://github.com/thomasloven/lovelace-hui-element)
- [light-entity-card](https://github.com/ljmerza/light-entity-card)
- [stack-in-card](https://github.com/custom-cards/stack-in-card)
- [vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card)
- [mini-graph-card-bundle](https://github.com/kalkih/mini-graph-card)
- [card-tools](https://github.com/thomasloven/lovelace-card-tools)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod)
- [bar-card](https://github.com/custom-cards/bar-card)
- [transmission-card](https://github.com/amaximus/transmission-card)
- [button-card](https://github.com/custom-cards/button-card)
- [time-picker-card](https://github.com/GeorgeSG/lovelace-time-picker-card)
- [auto-entities](https://github.com/thomasloven/lovelace-auto-entities)
- [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)
- [kiosk-mode](https://github.com/maykar/kiosk-mode) - deactivated
- [slider-entity-row](https://github.com/thomasloven/lovelace-slider-entity-row)
- [swipe-card](https://github.com/bramkragten/swipe-card)
- [mini-media-player-bundle](https://github.com/kalkih/mini-media-player)
- [simple-thermostat](https://github.com/nervetattoo/simple-thermostat)
- [weather-card](https://github.com/bramkragten/weather-card)
- [state-switch](https://github.com/thomasloven/lovelace-state-switch)
- [vacuum-card](https://github.com/denysdovhan/vacuum-card)


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

### HA on Intel NUC with Docker

##### Juan Mtech Install Guide

Check this Install Guide frist! <br />
[How to set up Hassio in Docker and in an Ubuntu server](https://www.juanmtech.com/set-up-hassio-in-docker-and-in-an-ubuntu-server/)

##### Absolute Beginners guide to installing HA on Intel NUC using Docker.

Check this install Guide after the "main Install". Dont use the Install part. <br />
[community.home-assistant.io](https://community.home-assistant.io/t/absolute-beginners-guide-to-installing-ha-on-intel-nuc-using-docker/98412)

##### A successful migration from Pi 3 to Intel NUC

Use this Guide to Check the migration from Pi to NUC. Dont use the Install part. <br />
[community.home-assistant.io](https://community.home-assistant.io/t/a-successful-migration-from-pi-3-to-intel-nuc/189992)

### Portainer - Docker Overview

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/portainer-3.JPG) Container list


### HA on Raspbarry Pi 3B+

#### Conbee II USB for the RPi 3B+

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

#### Z-Wave RaZberry 2 Modul for the RPi 3B+:

https://www.home-assistant.io/integrations/ozw <br />
https://www.home-assistant.io/docs/z-wave/device-specific/#razberry-board

1. Plugged it into the very first pins (#1-#10).
2. Popped out the SD card and used [USB reader *](https://amzn.to/3pOwVI1) to access on another computer.
3. Edited config.txt to add "`dtoverlay=pi3-miniuart-bt`" for a Pi3B+. Ejected.
4. Put SD card back in RPi and turned it on.
5. Went to Configuration > Integrations.
6. Added "OpenZWave (beta)". Set device path to "`/dev/ttyAMA0`". HA said everything was good.
```yaml
device: /dev/ttyAMA0
network_key: 0x2e, 0xcc, 0xab, 0x1c, 0xa3, 0x7f, 0x0e, 0xb5, 0x70, 0x71, 0x2d, 0x98, 0x25, 0x43, 0xee, 0x0c
```
Generate a **unique Network Key** with the Terminal:
```text
cat /dev/urandom | tr -dc '0-9A-F' | fold -w 32 | head -n 1 | sed -e 's/\(..\)/0x\1, /g' -e 's/, $//'
```
7. Went to Configuration > OpenZWave.
8. OpenZWave application, just the lower half (Remote Daemon) and just click start to connect.
9. Tried "Test Network" which showed green.

### Backend Config

You find the System Configuration in this File: <br />
`config/.storage/core.config_entries`

### DEBUGGING and Errors :neckbeard:

- [ ] **ERROR** vacuum-card/vacuum-card.js Error: Cannot read property 'states' of undefined [GitHub #169](https://github.com/denysdovhan/vacuum-card/issues/169)
- [ ] **WARNING** The 'entity_id' option is deprecated, please remove it from your configuration
- [ ] **ERROR** ICS Calendar Platform and !secret ics_url dont work [GitHub #23](https://github.com/franc6/ics_calendar/issues/23)
- [x] **ERROR** ~~RAZBERRY2 Board dont work on the Pi3B+~~ [~~Community Forum~~](https://community.home-assistant.io/t/pi3b-setup-with-razberry-v2/264457)
- [ ] **ERROR** kiosk-mode dont work from LoveLace UI

### Say Thank You

[PayPal *](https://paypal.me/INGENIUMDESIGN)

[Amazon Wishlist *](https://www.amazon.de/hz/wishlist/ls/1I6FZL9008ULK)

_* Amazon Affiliate Link_
