export default class Sprite{
  constructor(spriteSheet, width, height, spacing=0){
    this.spriteSheet = spriteSheet;
    this.width = width;
    this.height = height;
    this.spacing = {
      unit: spacing,
      xLead: 0,
      yLead: 0
    }
    this.calibrateSpacing();
    this.rows = Math.floor(spriteSheet.naturalHeight/(height+spacing));
    this.cols = Math.floor(spriteSheet.naturalWidth/(width+spacing));
    this.timeSinceRedraw = 0;
    this.currentAnimation = [];
    this.currentFrame = 0;
    this.scale = 1;
    this.animations = {};
    this.fps = 5;
  }
  calibrateSpacing(){
    let sheetW = this.spriteSheet.naturalWidth;
    if(sheetW % (this.width + this.spacing.unit) == 1) this.spacing.xLead = 1;

    let sheetH = this.spriteSheet.naturalHeight;
    if(sheetH % (this.height + this.spacing.unit) == 1) this.spacing.yLead = 1;
  }
  createAnimation(name, indices){
    this.animations[name] = [...indices];
  };
  setAnimation(name){
    this.currentAnimation = this.animations[name];
  }
  getIndex(row, col){
    return(row*this.cols + col)
  }
  getRowCol(index){
    return({row: Math.floor(index/this.cols), col: index % this.cols})
  }
  getCoords(index){
    let x = (index % this.cols)*(this.width+this.spacing.unit) + this.spacing.xLead
    let y =  Math.floor(index/this.cols)*(this.height+this.spacing.unit) + this.spacing.yLead;

    return({y: y, x: x})
  }
  animate(ctx, x, y){

    let pos = this.getCoords(this.currentAnimation[this.currentFrame]);

    ctx.drawImage(this.spriteSheet, pos.x, pos.y, this.width, this.height, x, y, this.width*this.scale, this.height*this.scale)
  }
  update(delta){
    this.timeSinceRedraw += delta;
    if(this.timeSinceRedraw/1000 >= 1/this.fps){
      this.currentFrame++
      this.currentFrame %= this.currentAnimation.length;
      this.timeSinceRedraw = 0;
    }
  }
  reSize(scale){
    this.scale = scale;
  }
  changeSpeed(fps){
    this.fps = fps;
  }
}
