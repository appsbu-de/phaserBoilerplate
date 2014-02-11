
BasicGame.MainMenu = function (game) {
	this.music = null;
	this.playButton = null;
};

BasicGame.MainMenu.prototype = {
	create: function () {
        //this.music = this.add.audio('titleMusic');
		//this.music.play();

		this.add.sprite(0, 0, 'titlepage');
		this.playButton = this.add.button(200, 400, 'playButton', this.startGame, this, 'over', 'out', 'over');
	},

	update: function () {

	},

	startGame: function (pointer) {
		//this.music.stop();
		this.game.state.start('Game');
	}
};
