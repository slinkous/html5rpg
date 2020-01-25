import InputHandler from "./input.js";
import Player from "./player.js";
import Sprite from "./sprite.js"
import {map1, Map} from "./tile.js"

export const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

export class Game {
  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    // this.music = document.querySelector("#gameMusic");
    // this.music.loop = true;
    this.gameObjects = [];
    this.input = new InputHandler(this);
    let playerImg = document.querySelector('#playersprite');
    this.player = new Player(this)
    this.player.createSprite(playerImg, 1, 3, 16, 16)
    this.map = new Map(map1);
    this.player.moveTo(this.map.getCoordsbyGrid(8, 15))
  }

  start(){
    if(this.gamestate !== GAMESTATE.MENU) return;
    this.gameObjects = [this.player];
    this.gamestate = GAMESTATE.RUNNING;

    // this.music.play()
  }
  update(deltaTime){
    if(
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    ) return;
    this.input.update();

    this.player.control(this.input.inputStates);
    this.player.move(this.map);

  }
  draw(ctx, colorScheme, font){

    ctx.save();
    // ctx.fillStyle = colorScheme[6];
    // ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
    this.map.render(ctx, colorScheme);
    ctx.restore();
    this.player.draw(ctx)

    if(this.gamestate === GAMESTATE.PAUSED){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "3em " + font;
      ctx.fillStyle = colorScheme[4];
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth/2, this.gameHeight/2);
    }
    if(this.gamestate === GAMESTATE.MENU){
      ctx.fillStyle = colorScheme[1];
      ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

      ctx.font = "3em " + font;
      ctx.fillStyle = colorScheme[6];
      ctx.textAlign = "center";
      ctx.fillText("Menu", this.gameWidth/2, this.gameHeight/2);
    }
    if(this.gamestate === GAMESTATE.GAMEOVER){
      ctx.fillStyle = colorScheme[4];
      ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

      ctx.font = "3em " + font;
      ctx.fillStyle = colorScheme[5];
      ctx.textAlign = "center";
      ctx.fillText("Game Over", this.gameWidth/2, this.gameHeight/2);
    }
  }
  togglePause(){
    if(this.gamestate == GAMESTATE.PAUSED){
      this.gamestate = GAMESTATE.RUNNING;
      // this.music.play()
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      // this.music.pause()
    }
  }

}
