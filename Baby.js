class Baby extends BaseClass {
    constructor(x,y){
      super(x,y,5,5);
      this.image = loadImage("sprites/enemy.png");

      this.trajectory =[];
      
    }
  
    display() {
     // this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
     if(this.body.speed < 3){
        super.display();
      }
       else{
       //  World.remove(world, this.body);
         push();
    //     this.Visiblity = this.Visiblity - 0.00000000000000000000000000000000000000000000000000000000000001;
        tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 5, 5);
         pop();
       }
      }

       
      }
    
  
  