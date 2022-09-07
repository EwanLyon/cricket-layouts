# DEPRECATION NOTICE

**These layouts are not going to be updated as it uses deprecated frameworks and respositories (polymer/bower). I wish to make a more generic sports bundle which can then have specific sport modules attached to it. https://github.com/EwanLyon/nodecg-sportscontrol**

# cricket-layouts

Layouts used for cricket matches. These are not used in any production and were made for fun. Some of the [gdx18-layouts](https://github.com/gamesdonequick/gdqx18-layouts) (e.g. tsconfig files) may be seen as it currently is the only large TypeScript bundle so I'm using to assist my learning.

## Images
**Graphics**

![Standard](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/graphics/standard.jpg)
![Small](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/graphics/small.jpg)

**Dashboard**

![Game](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/dashboard/game.jpg)
![Setup](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/dashboard/setup.jpg)
![Players](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/dashboard/players.jpg)
![Producer](https://raw.githubusercontent.com/EwanLyon/cricket-layouts/master/img/dashboard/producer.jpg)

## Requirements
- [Node.js 8 or greater (8 recommended, newer versions not tested)](https://nodejs.org/)
- [NodeCG v1.x](https://github.com/nodecg/nodecg/releases)

## Installation
1. Clone (or download & extract) to `nodecg/bundles/cricket-layouts`.
2. Install `bower` if you have not already (`npm install -g bower`)
3. `cd nodecg/bundles/cricket-layouts` and run `npm install --production`, then `bower install`
4. Run the nodecg server: `node index.js` (or `nodecg start` if you have [`nodecg-cli`](https://github.com/nodecg/nodecg-cli) installed) from the `nodecg` root directory.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[Apache v2](https://choosealicense.com/licenses/apache-2.0/)
