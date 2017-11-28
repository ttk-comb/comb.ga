enchant();
window.onload = function () {
	var game = new Game(500,500);



	game.onload = function () {
var hello = new Label("Hello");
hello.x = 0;
hello.y = 0;
hello.color = "black";
hello.font = '15px "Arial"'
game.rootScene.addChild(hello);

  };
  game.start();
}