class Stand{
  constructor(x,y){
   var op = {
    isStatic: true
   }
   this.body = Bodies.rectangle(x,y,200,20,op);
   World.add(world,this.body);
   //this.w = width;
   //this.h = height;
  }
  display(){
   rectMode(CENTER)
   push()
   fill("red")
   var pos = this.body.position;
   rect(pos.x,pos.y,200,20);
   pop()
  }
}