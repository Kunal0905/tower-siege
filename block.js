class Block{
  constructor(x,y){
   var op = {
    friction: 0.8,
    density: 1,
    restitution: 1.2
   }
    this.fade = 255;
    this.body = Bodies.rectangle(x,y,50,40,op);
    World.add(world,this.body);
    this.image = loadImage("brick.png");
  }
  display(){
    var pos = this.body.position;
   if(this.body.speed < 2){
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,50,40);
   }
   else{
     World.remove(world,this.body);
     push()
     tint(255,this.fade);
     this.fade -= 7;
     image(this.image,pos.x,pos.y,50,40);
     pop()
   }
  }
  increase(){
   if(this.fade < 0 && this.fade > -175){
     score += 1;
   }
  }
}