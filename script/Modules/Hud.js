app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    this.renderScore(app.width - 16, 32, player.score, "#fff");

  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },

  renderScore: function(x, y, score, color) {

  var score = "score: " + score;

    app.layer
      .fillStyle(color)
      .font("32px Arial")
      .textAlign("right")
      .fillText(score, x, y);
  }

};
