class Pigboss extends BaseClass {
    constructor(x, y,height,angle){
      super(x,y,height,angle);
      isStatic: true
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
     else{
     //  World.remove(world, this.body);
       push();
     //  this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 65, 65);
       pop();
     }
    }
    
  // score(){
     // if (this.Visiblity < 0 && this.Visiblity > -1005){
       // score++;
    //  }
   // }
  
  
  
  }