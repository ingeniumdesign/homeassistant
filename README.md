## ING - Home Assistant Configuration :metal:

This is my [Home Assistant](https://www.home-assistant.io/) configuration.
<br/>My final Home Assistant (HA) Machine is a Intel NUC i5 ([NUC7i5BNB](https://ark.intel.com/content/www/de/de/ark/products/95064/intel-nuc-board-nuc7i5bnb.html)) with 16GB RAM and 250GB NVMe SSD [Amazon i5-10 *](https://amzn.to/35e8tYI)

---

My Home Assistant (HA) Test-Machine is an [Raspberry Pi 3 Model B+ *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC in a [Aukru Super 3 in 1 Kit Case *](https://amzn.to/3ne80fx). <br />
It's running with a Pi3 64-bit Image for [Hass.io Install-Info](https://www.home-assistant.io/hassio/installation/).

> Buy the new [Raspberry Pi 4 B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) - [Amazon *](https://amzn.to/35aHPjo) with 8GB RAM. :rocket:

---

![HAVERSION](https://img.shields.io/badge/homeassistant-2021.8.x-blue)
![STARS](https://img.shields.io/github/stars/ingeniumdesign/homeassistant?color=yellow&style=flat-square)
![WATCHERS](https://img.shields.io/github/watchers/ingeniumdesign/homeassistant?color=green&style=flat-square)
![ISSUES](https://img.shields.io/github/issues-raw/ingeniumdesign/homeassistant?style=flat-square)
![LASTCOMMIT](https://img.shields.io/github/last-commit/ingeniumdesign/homeassistant?style=flat-square)
![SIZE](https://img.shields.io/github/repo-size/ingeniumdesign/homeassistant?style=flat-square)

## Screenshot

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-dash.JPG)
_More Screenshot down below._

## Hardware

- Intel NUC i5 [NUC7i5BNB](https://ark.intel.com/content/www/de/de/ark/products/95064/intel-nuc-board-nuc7i5bnb.html) with 16GB RAM and 250GB NVMe SSD [Amazon i5-10 *](https://amzn.to/35e8tYI)
- Raspberry [Pi3 B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/) - [Amazon *](https://amzn.to/3hJPFWC) with 1GB RAM and [16GB *](https://amzn.to/2KRBXVH) microSDHC - DEV Server
- AVM [FRITZ!Box 6590 Cable](https://avm.de/produkte/fritzbox/fritzbox-6590-cable/) - [Amazon *](https://amzn.to/359i6YE) // Take the new [6591 Cable](https://avm.de/produkte/fritzbox/fritzbox-6591-cable/)! - [Amazon *](https://amzn.to/3pNbdUU)
- AVM 8x [FRITZ!DECT 301](https://avm.de/produkte/fritzdect/fritzdect-301/) - [Amazon *](https://amzn.to/3pSRUd4)
- AVM 1x [FRITZ!DECT 200](https://avm.de/produkte/fritzdect/fritzdect-200/) - [Amazon *](https://amzn.to/2LnpAQK)
- AVM 1x [FRITZ!Powerline 1260E Set](https://avm.de/produkte/fritzpowerline/fritzpowerline-1260e-wlan-set/) - [Amazon *](https://amzn.to/35a7gSv)
- Phoscon [Conbee II USB](https://phoscon.de/de/conbee2) - [Amazon *](https://amzn.to/3n7jgu0) - for Zigbee using ZHA integration <br />
  _See the Install Pi3 Infos down below: Conbee II USB for the RPi 3B+_
- Z-Wave [RaZberry 2 Modul](https://z-wave.me/products/razberry/) ZMEERAZ2 (only for the Raspberry) - [Amazon *](https://amzn.to/3nchsA1) - for ZWave <br />
  _See the Install Pi3 Infos down below: Z-Wave RaZberry 2 Modul for the RPi 3B+_
- AEOTEC [Z-Stick Gen5+ EU 868.4MHz](https://aeotec.com/z-wave-usb-stick/) ZW090-C - for ZWave <br />
  _For the Intel NUC i5 Upgrade_
- Xiaomi [Roborock S6](https://de.roborock.com/pages/roborock-s6) - [Xiaomi Cloud Tokens Extractor](https://github.com/PiotrMachowski/Xiaomi-cloud-tokens-extractor) - [Amazon *](https://amzn.to/38eLmPX)
- Xiaomi 4x [Door & Window Sensor](https://xiaomi-mi.com/sockets-and-sensors/xiaomi-mi-door-window-sensors/) MCCGQ01LM - [Amazon *](https://amzn.to/2NR1pM0)
- AEOTEC 4x [Plus Multisensor 6 EU 868.4MHz](https://aeotec.com/z-wave-sensor/) ZW100-C - [Amazon *](https://amzn.to/38YJoCm)
- Amazon [FireHD 10 Tablet *](https://amzn.to/3oicZNp) - [Fire Toolbox V11.0](https://forum.xda-developers.com/t/windows-tool-fire-toolbox-v11-0.3889604/)
- Amazon [FireHD 10 Plus Tablet *](https://amzn.to/3iqhlli) - [Fire Toolbox V11.0](https://forum.xda-developers.com/t/windows-tool-fire-toolbox-v11-0.3889604/)
- Amazon 1x [Echo Dot (4. Gen.) *](https://amzn.to/3ncrktE)
- Amazon 1x [Echo Dot (3. Gen.) *](https://amzn.to/3hHu8xz)
- Shelly 2x [2.5](https://shelly.cloud/products/shelly-25-smart-home-automation-relay/) - [Amazon *](https://amzn.to/38W9vuG)
- Shelly 2x [1](https://shelly.cloud/products/shelly-1-smart-home-automation-relay/) - [Amazon *](https://amzn.to/397NDNm)
- Shelly 2x [1L](https://shelly.cloud/products/shelly-1l-single-wire-smart-home-automation-relay/) - [Amazon *](https://amzn.to/3paPwhT)
- USB Power Socket 4x for the ceiling / AEOTEC Plus Multisensor - [Amazon *](https://amzn.to/3KNcbeQ)
- Synology [DS713+](https://www.synology.com/de-de/support/download/DS713+#system) - [Amazon *](https://amzn.to/3hHu8xz) // Buy the new [DS720+](https://www.synology.com/de-de/products/DS720+) [Amazon *](https://amzn.to/3rWErT1)
- ZyXEL [GS1900-24E](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/391vcbR)
- ZyXEL [GS1900-8](https://www.zyxel.com/de/de/products_services/8-10-16-24-48-port-GbE-Smart-Managed-Switch-GS1900-Series/) - [Amazon *](https://amzn.to/357BQMo)
- ZyXEL [GS108B-V3](https://www.zyxel.com/de/de/products_services/8-Port-Desktop-Gigabit-Ethernet-Switch-GS-108B-v3/) - [Amazon *](https://amzn.to/3irRh9k)
- Homematic IP 1x [Access Point](https://www.homematic-ip.com/produkte/detail/home-control-access-point.html) - [Amazon *](https://amzn.to/2MhohDn)
- Homematic IP 1x [Fußbodenheizungsaktor – 12-fach, motorisch](https://www.homematic-ip.com/produkte/detail/homematic-ip-fussbodenheizungsaktor-12-fach-motorisch.html) - [Amazon *](https://amzn.to/3paOJNB)
- Homematic IP 7x [Stellantrieb – motorisch](https://www.homematic-ip.com/produkte/detail/homematic-ip-stellantrieb-motorisch.html) - [Amazon *](https://amzn.to/3p4AVEq)
- Homematic IP 2x [Wandthermostat 240V - 150628A0](https://www.homematic-ip.com/produkte/detail/wandthermostat-mit-schaltausgang-fuer-markenschalter.html) - [Amazon *](https://amzn.to/39lquqC)
- Gardena [Mähroboter smart SILENO city, 250](https://www.gardena.com/de/produkte/rasenpflege/mahroboter/mahroboter-smart-sileno-city-250-m2-set/970450703/) - [Amazon *](https://amzn.to/3fNnVAq)

## Hass.io Addons

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-logo-small.png)

- Check Home Assistant configuration
- [File editor](https://github.com/home-assistant/addons/tree/master/configurator)
- [Terminal & SSH](https://github.com/home-assistant/addons/tree/master/ssh)
- [Visual Studio Code](https://github.com/hassio-addons/addon-vscode) with git / I use the IDE [PHPstorm](https://www.jetbrains.com/de-de/phpstorm/) with git
- [duckDNS Addon](https://github.com/home-assistant/addons/tree/master/duckdns) / [duckDNS](https://www.duckdns.org/)
  <br />Fritzbox Install [Configs](https://www.duckdns.org/install.jsp)
  <br />_edit: configuration.yaml => http_
- [Hass.io Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup)
  <br />Backup to a second HDD: `ln -s /home/backup-ha/ /usr/share/hassio/backup`
- [Mosquitto broker](https://home-assistant.io/addons/mosquitto/)
- [Node-RED](https://github.com/hassio-addons/addon-node-red)
  - a Pluginlist is above
- [ESPHome](https://esphome.io/)
- [MariaDB](https://home-assistant.io/addons/mariadb/)
- [Z-Wave JS](https://www.home-assistant.io/integrations/zwave_js/) - Z-Stick Gen5+ or RaZberry 2
- [deCONZ](https://www.home-assistant.io/integrations/deconz/) - Conbee II
- [OpenSky Network](https://opensky-network.org/)
- [Speedtest.net](https://www.speedtest.net/)
- [Samsung Smart TV](https://www.home-assistant.io/integrations/samsungtv/)
- [MQTT](https://www.home-assistant.io/integrations/mqtt/)
- [uptimerobot](https://uptimerobot.com/)

## Custom Components

- [Alexa Media Player](https://github.com/custom-components/alexa_media_player)
- [HACS (Home Assistant Community Store)](https://hacs.xyz)
  - HACS
  - SamsungTV Tizen
  - Monitor Docker
  - browser_mod
  - [Custom UI](https://github.com/Mariusthvdb/custom-ui)
  - ICS
  - Shelly (_Next testing with [ShellyForHass](https://github.com/StyraHem/ShellyForHASS)_)
  - [Skoda Connect](https://github.com/lendy007/homeassistant-skodaconnect) - ŠKODA OCTAVIA RS COMBI
  - [Gardena Smart System](https://github.com/py-smart-gardena/hass-gardena-smart-system)
- [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen)
- HA Add-ons by alexbelgium [GitHub](https://github.com/alexbelgium/hassio-addons) - Manage add-on repositories

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
- [light-popup-card](https://github.com/DBuit/light-popup-card)
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
- [custom-sidebar](https://github.com/DBuit/sidebar-card) - deactivated

### Google Fonts
- **Headlines:** Comfortaa [Google Fonts](https://fonts.google.com/specimen/Comfortaa)
- **Content:** Raleway [Google Fonts](https://fonts.google.com/specimen/Raleway)

## Automations :green_heart:

All of my automations are in Home Assistant - automations.yaml and with NODE-RED:

#### NODE-RED Plugins:
- [node-red-contrib-alexa-remote2](https://flows.nodered.org/node/node-red-contrib-alexa-remote2)
- [node-red-contrib-amazon-echo](https://flows.nodered.org/node/node-red-contrib-amazon-echo)
- [node-red-contrib-shelly](https://flows.nodered.org/node/node-red-contrib-shelly)
- node-red-contrib-stoptimer
- node-red-contrib-sun-position

#### Automation / Features:

- [ ] Dashboard Cards Widgets with HACS [room-card](https://github.com/marcokreeft87/room-card)
- [ ] Solar Power Cards Widgets with HACS [power-card](https://github.com/reptilex/tesla-style-solar-power-card)
- [ ] Quick-Infos when leaving the house
  - All windows closed?
  - Living-Room devices still on?
  - Iron still on?
  - Lights still on?
  - Stove or oven still on?
  - Heating-System´s turn down.
- [ ] Frontdoor is longer open XX Minutes, Alexa Info
- [x] Trash Calendar with notification
- [x] Zones for different people
- [ ] presence detection with different states like zone
- [x] Motion Sensor, Edit Time, Lights Control
- [ ] "Party" Light Modus with On/Off Control.
  - LED Strips Light Effect
- [ ] Weather-Infos for one Week
- [x] Show Planes over the house
- [x] Turning the AEOTEC Plus Multisensor 6 - motion sensors off on demand.
- [x] notification via telegram
  - Telegram Bot for the "Family Group" - _**Info:** Invite the "GetIDs Bot" in Group for Bot-ID -100XXXXX_
  - HA Info stop or restart
  - Monitor Sensor Crash with Notify
- [ ] notification via whatsapp - https://www.callmebot.com/
- [x] Vacuum Infos and Start/Stop Functions
- [x] HA and Plugin Update Infos.
- [x] Lovelace Restart, Frontend/Theme Reload, Restart HA and Server Restart.
- [x] Intel NUC Infos and Stats.
- [x] DOCKER Infos and Stats. - _**Info:** See the Bug-Infos down below_
- [x] Synology NAS Infos and Stats. - _**Info:** See the Error-Infos down below_
- [x] Device, Sensor... Battery Infos and Stats.
- [x] Network Infos from Fritzbox
- [x] SpeedTest.net Infos for the Network
- [ ] Settings for the different sensors, Lights, Motion detector...
- [ ] More Gardena Mower Infos
- [ ] More Gardena Infos
- [x] Car Infos
- [ ] Info for Car is open? Next Car Check?
- [ ] and many more...

## Aditional Screenshots

#### PC

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-dash.JPG) Dashboard | ![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-dash2.JPG) Popup with Blur-Effect
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-dash3.JPG) Active Vacuum | ![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-system.JPG) System Overview
![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-settings.JPG) Settings Overview | ![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/ha-office.JPG) Room - Office

## Install - Infos :point_up:

### HA on Intel NUC with Docker

##### Juan Mtech Install Guide

Check this Install Guide frist! <br />
[How to set up Hassio in Docker and in an Ubuntu server](https://www.juanmtech.com/how-to-set-up-hassio-in-docker-and-in-an-ubuntu-server/)

##### Absolute Beginners guide to installing HA on Intel NUC using Docker.

Check this install Guide after the "main Install". Dont use the Install part. <br />
[community.home-assistant.io](https://community.home-assistant.io/t/absolute-beginners-guide-to-installing-ha-on-intel-nuc-using-docker/98412)

##### A successful migration from Pi 3 to Intel NUC

Use this Guide to Check the migration from Pi to NUC. Dont use the Install part. <br />
[community.home-assistant.io](https://community.home-assistant.io/t/a-successful-migration-from-pi-3-to-intel-nuc/189992)

### Portainer CE - Docker Overview

![](https://raw.githubusercontent.com/ingeniumdesign/homeassistant/master/docs/portainer.JPG)  
Container CE: [Docker Portainer CE](https://www.portainer.io/)  
Local URL: [192.168.178.xx:9443](https://192.168.178.xx:9443/)  
Update & Backup: [Portainer Backup](https://docs.portainer.io/admin/settings#backup-portainer) / Update: [Portainer CE](https://docs.portainer.io/start/upgrade/docker)  
After Update - Reconnect Docker API: [Exposing docker.sock for monitor_docker](https://community.home-assistant.io/t/exposing-docker-sock-for-monitor-docker/265565/9)


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

https://www.home-assistant.io/integrations/zwave_js/ <br />
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

- [x] **ERROR** ~~vacuum-card/vacuum-card.js Error: Cannot read property 'states' of undefined~~ [~~GitHub #169~~](https://github.com/denysdovhan/vacuum-card/issues/169)
- [ ] **WARNING** The 'entity_id' option is deprecated, please remove it from your configuration
- [ ] **ERROR** ICS Calendar Platform and !secret ics_url dont work [GitHub #23](https://github.com/franc6/ics_calendar/issues/23)
- [x] **ERROR** ~~RAZBERRY2 Board dont work on the Pi3B+~~ [~~Community Forum~~](https://community.home-assistant.io/t/pi3b-setup-with-razberry-v2/264457)
- [ ] **ERROR** kiosk-mode dont work from LoveLace UI
- [ ] **ISSUE** Backup to a second HDD [Community Forum](https://community.home-assistant.io/t/snapshot-other-hdd/268439)
- [ ] **WARNING** Updating opensky sensor took longer than the scheduled update interval [GitHub #45453](https://github.com/home-assistant/core/issues/45453)
- [ ] **ISSUE** Can not connect to Docker API [Community Forum](https://community.home-assistant.io/t/exposing-docker-sock-for-monitor-docker/265565) - All the time, after HA Update!
- [ ] **ERROR** synology_dsm dont work. Go in long loading point.

### Say Thank You

[PayPal *](https://paypal.me/INGENIUMDESIGN)

[Amazon Wishlist *](https://www.amazon.de/hz/wishlist/ls/1I6FZL9008ULK)

<a href="https://www.buymeacoffee.com/ingeniumdesign" target="_blank" style="height: 60px !important;width: 217px !important;max-width: 217px !important;">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" style="height: 60px !important;width: 217px !important;max-width: 217px !important;" >
</a>

_* Amazon Affiliate Link_
