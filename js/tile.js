export const map1 = {
  rows: 16,
  cols: 16,
  tileSize: 32,
  tiles: [
    3, 3, 3, 3, 3, 3, 1, 0, 0, 2, 2, 0, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 1, 0, 0, 2, 2, 0, 1, 1, 1, 3,
    3, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 1, 3,
    3, 1, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 0, 1, 3,
    3, 1, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 0, 1, 3,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 3,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 3,
    2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    2, 0, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3,
    2, 0, 3, 1, 3, 3, 3, 3, 3, 0, 1, 0, 3, 3, 3, 3,
    2, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 3, 3, 3, 3,
    2, 0, 3, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3, 3,
    2, 0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3,
    2, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 3,
    2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3,
  ],
}


export class Map {
  constructor(mapInfo){
    this.rows = mapInfo.rows;
    this.cols = mapInfo.cols;
    this.tileSize = mapInfo.tileSize;
    this.tiles = mapInfo.tiles;
    this.tileSheet = document.querySelector('#tilesheet')
  }
  getTile(col, row){
    return this.tiles[row*this.cols + col]
  }
  render(ctx, colorScheme){
    for(let c=0; c<this.cols; c++){
      for(let r=0; r<this.rows; r++){
        let tileType = this.getTile(c, r)
        let imgPos = this.getTileSheetPos(tileType)
        ctx.fillStyle= colorScheme[this.getColor(tileType)];
        ctx.fillRect(c*this.tileSize, r*this.tileSize, this.tileSize, this.tileSize)

        ctx.drawImage(
          this.tileSheet, //image
          imgPos.x, //source x
          imgPos.y, // source y
          16, //image sprite size
          16, //image sprite size
          c*this.tileSize, //canvas sprite location
          r*this.tileSize, //canvas sprite location
          this.tileSize, //canvas sprite size
          this.tileSize) //canvas sprite size
      }
    }
  }
  getColor(tileType){
    let color;
    switch(tileType){
      case 0:
        color = 5;
        break;
      case 1:
        color = 3;
        break;
      case 2:
        color = 13;
        break;
      case 3:
        color = 6;
        break;
      default:
        color = 0;
        break;
    }
    return color;
  }
  getTileSheetPos(tileType){
    let position = {};
    switch(tileType){
      case 0:
        position.row = 0;
        position.col = 5;
        break;
      case 1:
        position.row = 0;
        position.col = 2;
        break;
      case 2:
        position.row = 5;
        position.col = 8;
        break;
      case 3:
        position.row = 1;
        position.col = 0;
        break;
      default:
        position.row = 0;
        position.col = 0;
        break;
    }
    position.x = position.col*17;
    position.y = position.row*17;
    return position;
  }
  getCollision(row, col){
    switch(getTile(row, column)){
      case 0, 1:
        return false;
      case 2, 3:
        return true;
    }
  }
}

// class Tile {
//   constructor(col, row, img=null, color="#FF0000",type=null){
//     this.col = col;
//     this.row = row;
//     this.img = img;
//     this.color = color;
//     this.type = type;
//     this.zIndex = 0;
//     this.collision = false;
//   }
// }
//
// export default class TileMap {
//   constructor(width, height, text=null){
//     this.colSize = width/MAPSIZE.cols;
//     this.rowSize = height/MAPSIZE.rows;
//     this.tiles = []
//     if(this.text){
//       this.createFromText(text)
//     } else {
//       this.createEmpty()
//     }
//   }
//   createEmpty(){
//     for(var i=0; i<MAPSIZE.rows; i++){
//       for(var j=0; j<MAPSIZE.cols; j++){
//         this.tiles.push(new Tile(i, j))
//       }
//     }
//   }
//   createFromText(text){
//
//   }
//   getCoords(tile){
//     let x = tile.col*this.colSize;
//     let y = tile.row*this.rowSize;
//     return {x: x, y: y};
//   }
//   getMapLoc(obj){
//     let col = Math.floor(obj.x / this.colSize);
//     let row = Math.floor(obj.y / this.rowSize);
//     return {col: col, row: row}
//   }
// }
