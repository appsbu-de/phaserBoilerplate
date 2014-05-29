BasicGame = {};

BasicGame.Boot = function (game) {
    this.game = game;
};

BasicGame.Boot.prototype = {
    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('preloaderBackground', 'assets/img/water_texture.jpg');
        this.load.image('preloaderBar', 'assets/img/plane-sheet.png');

    },

    create: function () {
        this.game.input.maxPointers = 1;
        this.game.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
            this.game.stage.scale.pageAlignHorizontally = true;
        }
        else {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.stage.scale.minWidth = 320;
            this.game.stage.scale.minHeight = 240;
            this.game.stage.scale.maxWidth = 1024;
            this.game.stage.scale.maxHeight = 768;            
            this.game.stage.scale.pageAlignHorizontally = true;
            this.game.stage.scale.pageAlignVertically = true;
            this.game.scale.setScreenSize(true);
        }

        this.game.state.start('Preloader');
    }
};
