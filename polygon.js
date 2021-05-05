class Polygon{
    constructor(x,y){
     var op = {
      friction: 0.8,
      density: 1,
      restitution: 1.2
     }
      this.body = Bodies.rectangle(x,y,50,40,op);
      World.add(world,this.body);
      this.image = loadImage("polygon.png");
    }
    display(){
     imageMode(CENTER)
     var pos = this.body.position;
     image(this.image,pos.x,pos.y,50,40);
    }
  }