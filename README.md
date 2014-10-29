# Phaser Boilerplate

This Boilerplate helps to get started with the fabulous HTML5 game framework [Phaser](http://www.phaser.io).
Inspired by https://github.com/luizbills/phaser-js-boilerplate

> A version for pixel perfect scaling as [described here](http://www.html5gamedevs.com/topic/6090-lowrezjam-offical-thread/page-2#entry38068) has been added. Just checkout the [lowrez branch](https://github.com/appsbu-de/phaserBoilerplate/tree/lowrez).

## Getting started

Install Grunt as described at http://gruntjs.com/
`npm install -g grunt-cli`

Go to Boilerplate directory and install required npm modules: `npm install`

run `grunt`. Your Browser should come up with your game loaded.
If you change any of the source files, a new package would be build and your browser should reload (live reload)

## Project layout

All files are located in `src`

- `src/public` - index.html
- `src/js` - all js files
- `src/js/states` - Boilerplate Game States
- `src/phaser` - Phaser main file (2.1.3 - arcade-physics included.)
- `src/assets` - Assets sorted in directories.
- `src/assets/audio` - All audio assets needed in your game
- `src/assets/fonts` - all Fonts/bitmap fonts and definitions
 -`src/assets/img` - Every other image you need

> You could use any other phaser version. Just copy it into src/phaser. If you change the name, make sure you change it at Gruntfile.js, too.

## Which path to use in your game
- always refer to `assets/...`

## What does this boilerplate do?
- Lint (jshint) your javascript code.
- Copy all assets to the `game` directory
- Concatenate and uglify all JS-Files into one `game.js`
- Copy all files from public to `game` (e. g. index.html)

## Development
- `default` task is for development.
- `grunt` copies your files (not minified, not concatenated) to `game`
- `index.html` includes every single file.
- Debug firendly, because errors could easily located in separated files.

## Shipping your game
- `grunt build`
- Your `states` will be concatenated and uglified/mangeld into `game.js`
- All assets will also been copied
- now copy everything in `game` directory to your web server
- done.

## Legal
- Feel free to use and modify this boilerplate. It should be an inspiration.
