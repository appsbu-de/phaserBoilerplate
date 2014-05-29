
BasicGame.Game = function (game) {
    this.game = game;
};

BasicGame.Game.prototype = {

	create: function () {
        this.game.stage.backgroundColor = '#dddddd';
        // Game init Code here.
    },

	update: function () {

	},

	quitGame: function (pointer) {
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.game.state.start('MainMenu');
	}
};
