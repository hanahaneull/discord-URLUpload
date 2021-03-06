[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#

# Discord URL Uploader

Upload Discord attachment straight from your discord account.

# Installation

1. Open console in folder
2. type `npm i`
3. and type `node index.js` (Make sure you already edit the settings)

# Settings

Rename `config.json.example` to `config.json` and edit with your setting

`token`: Your discord token.  
`prefix`: Your prefix for sending attachment

# Flags

`--message`: Set message content.  
`--type`: Force set file extension.  
`--name`: Force set file name.

# Usage

`<prefix>send (URL) [FLAGS]`

Example simple:

`up!send https://x0.at/dx3.png`

![Example](https://lewd.pics/p/nx9U.gif)

Example advance:

`up!send https://x0.at/dx3.png --message='Yuno is cute' --type=jpg --name=UWU`

![Example advance](https://lewd.pics/p/DZw0.gif)

# License

Copyright © 2020 Haneul Seong hana@disroot.org  
This work is free. You can redistribute it and/or modify it under the  
terms of the Do What The Fuck You Want To Public License, Version 2,  
as published by Sam Hocevar. See the LICENSE file for more details.