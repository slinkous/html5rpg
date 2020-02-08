import Sprite from './sprite.js';

let playerImg = document.querySelector('#playersprite');

export default class Player {
  constructor(game, x=0, y=0, width=32, height=32, speed=4){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.scale = 1;
    this.direction = "right";
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.sprite = this.createSprite(playerImg, 16, 16);
    this.sprite.createAnimation("run", [0,1]);
    this.sprite.createAnimation("still", [0])
    this.sprite.reSize(2);
    this.sprite.setAnimation("still")
  }
  update(delta, input, map){
    if(this.onGrid(map.tileSize)){
      this.control(input)
    } else {
      // console.log("off the grid")
    }
    console.log("x: " + this.x, "y: " + this.y)
    this.move(map);
    this.sprite.update(delta);
  }
  onGrid(tileSize){
    return (this.x % tileSize == 0 && this.y % tileSize == 0)
  }
  control(input){
    // this.xSpeed = 0;
    // this.ySpeed = 0;
    this.sprite.setAnimation("still");

    if(input.right){
      // this.direction = "right";
      this.xSpeed = this.speed;
      this.ySpeed = 0;
      this.sprite.setAnimation("run")
    }
    if(input.left){
      // this.direction = "left";
      this.xSpeed = -this.speed;
      this.ySpeed = 0;
      this.sprite.setAnimation("run")
    }
    if(input.up){
      // this.direction = "up";
      this.xSpeed = 0;
      this.ySpeed = -this.speed;
      this.sprite.setAnimation("run")
    }
    if(input.down){
      // this.direction = "down";
      this.xSpeed = 0;
      this.ySpeed = this.speed;
      this.sprite.setAnimation("run")
    }

  }
  move(map){
    if(this.xSpeed > 0 && map.collisionByLoc(this.x + this.width + this.xSpeed -1,this.y)){
      this.xSpeed = 0;
      // return;
    }
    if(this.xSpeed < 0 && map.collisionByLoc(this.x + this.xSpeed + 1, this.y)){
      this.xSpeed = 0;
      // return;
    }
    if(this.ySpeed > 0 && map.collisionByLoc(this.x, this.y + this.height + this.ySpeed - 1)){
      this.ySpeed = 0;
      // return;
    }
    if(this.ySpeed < 0 && map.collisionByLoc(this.x, this.y + this.ySpeed)){
      this.ySpeed = 0;
      // return;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x % map.tileSize == 0){
      this.xSpeed = 0;
    }
    if(this.y % map.tileSize == 0){
      this.ySpeed = 0;
    }
  }
  moveTo(loc){
    this.x = loc.x;
    this.y = loc.y;
  }
  createSprite(spriteSheet, width, height, spacing, callback){
    return new Sprite(spriteSheet, width, height, spacing);

  }
  draw(ctx, x=this.x, y=this.y){
    if(!this.sprite){
      ctx.strokeStyle = "#FF0000";
      ctx.strokeRect(x, y, this.width, this.height)
    }else{
      this.sprite.animate(ctx, x, y, this.scale)
    }

  }

}
