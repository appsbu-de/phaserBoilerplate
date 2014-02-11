# Phaser Boilerplate

This Boilerplate helps to get started with the fabulous HTML5 game framework [Phaser](http://www.phaser.io).

## Getting started

install Grunt as described at http://gruntjs.com/
`npm install -g grunt-cli`

Go to Boilerplate directory and install required npm modules: `npm install`

run `grunt`. Your Browser should come up with your game loaded.
If you change any of the source files, a new package would be build and your browser should reload (live reload)

## Project layout

All files are located in `src`

`src/public` - index.html
`src/js` - all js files
`src/js/states` - Boilerplate Game States
`src/phaser` - Phaser main file (1.1.4 included in this version)
`src/assets` - Assets sorted in directories.
`src/assets/audio` - All audio assets needed in your game
`src/assets/fonts` - all Fonts/bitmap fonts and definitions
`src/assets/img` - Every other image you need

## Which path to use in your game
- always refer to `assets/...`

## What does this boilerplate do?

- Lint (jshint) your javascript code.
- Copy all your assets to a `game` directory
- Copy all assets to the `game` directory
- Concatenate and uglify all JS-Files into one `game.js`
- Copy all file from public to `game` (e. g. index.html)

## Shipping your game
- `grunt build`
- Copy everything in `game` to your web server
- done.

## Legal
- Feel free to use and modify this boilerplate. It should be an inspiration.