
BasicGame.MainMenu = function (game) {
	this.game = game;
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
	},

    render: function() {
        pixelcontext.drawImage(this.game.canvas, 0, 0, 32, 32, 0, 0, pixelwidth, pixelheight);
    }
};
