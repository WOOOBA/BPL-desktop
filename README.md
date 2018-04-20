![ARK-DESKTOP](https://i.imgur.com/eZPrrCQ.png)

[![Build Status](https://travis-ci.org/ArkEcosystem/ark-desktop.svg?branch=master)](https://travis-ci.org/ArkEcosystem/ark-desktop)

## Pinned: Help us with translations
Collaborate with other translators on our OneSky project and help us get wallet translated in other languages  http://osjc1wl.oneskyapp.com/collaboration/project?id=95031

Please don't submit Pull-Requests (PRs) for translations, but use the link above!

## Download
[Latest Release](https://github.com/ArkEcosystem/ark-desktop/releases)

## Features
* Available on ***Windows***, ***Linux*** (Ubuntu/Debian) and ***MacOSX*** (signed).
* No need to download ARK blockchain, just sync to the network: launch and use within seconds.
* View any account from its address (transactions, delegate status and votes).
* Label any account and add your own contacts.
* Hardware wallet support : Ledger Nano S.
* Real-time currency value (updated every 5 min) in USD, EUR, BTC, HKD, JPY, CNY, AUD, GBP, Rubble, ...
* Autoconnect to a healthy ARK network peer. If the peer is not good anymore, it will automatically find a new one.
* Send ark from / to any account.
* Easily switch to a different network, or private chains.
* Customized backgrounds and themes for better user experience.
* Choose between dark or light mode.
* Isolated processes on Windows and MacOSX to prevent from data sniffing or injection.
* Translations (thanks to the ARK community) - help out http://osjc1wl.oneskyapp.com/collaboration/project?id=95031
* Organise your accounts with virtual folders (for instance savings, personnal etc...) so you don't pay any transfer fee (stored locally).
* Change your delegate vote.
* When new version is available, message is shown in the right upper part.
* Easy to update - download latest version, start installation program and it will automatically remove previous version and install new one.
* Second signature supported.
* (soon) Deposit or withdraw ARK using altcoins or USD (via exchange) - no registration needed.
* (soon) Multisignature accounts.
* **SAVE YOUR PASSPHRASE(S) - if you lose it, you lose access to that particular ARK address(es). There is no forgot my password option with blockchains and no one can help you retrieve it!**


## Screenshots
![dashboard](https://i.imgur.com/AVdyM16.jpg)
![account](https://i.imgur.com/DD8fx1O.jpg)

## From AUR
For distros derived from Arch Linux the package is avaliable in AUR, just run:

```
yaourt -Sy ark-desktop
```

## From code

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Optionally switch to node 6.9.2, because this is currently developped with this version:
```
sudo npm install -g n
sudo n 6.9.2
```

Install from source:
```bash
# Clone this repository
git clone https://github.com/ArkEcosystem/ark-desktop
# Go into the repository
cd ark-desktop
# Install dependencies 
npm install
```
Additional Dependencies may be required on Ubuntu 16.04 and above 
```
sudo apt-get install libusb-1.0-0-dev
sudo npm install electron --verbose
```

* In some cases, [node-hid](https://github.com/node-hid/node-hid) doesn't provide pre-built binaries, so is necessary to install the [node-hid dependencies](https://github.com/node-hid/node-hid#compiling-from-source) to build them from source before running `npm install`.

Then start:
```bash
npm start
```

## Necessary to package from Mac OS X

```
brew tap Homebrew/bundle
brew bundle
```

## Contributing
Read [CONTRIBUTING.md](https://github.com/ArkEcosystem/ark-desktop/blob/master/CONTRIBUTING.md) to learn about how to contribute to this project.

## Authors
- FX Thoorens <fx@ark.io>
- Guillaume Verbal <doweig@ark.io>
- Lúcio Rubens <lucio@ark.io>
- Juan Martín <juan@ark.io>

### License [MIT](LICENSE.md) | Copyright (c) 2016-2017 ARK.io | Copyright (c) 2016-2017 FX Thoorens
