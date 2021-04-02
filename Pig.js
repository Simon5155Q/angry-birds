class Pig extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    
  }

 display(){
    //console.log(this.body.speed);
    //if(this.body.speed < 2){
      super.display();
    //}
    /*else{
      World.remove(world,this.body);
      push()
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop()
    }*/
  }


 /*scoring(){
  if(pig1.Visiblity < 10 && pig1.Visiblity > -10){
    score = score + 1;
    pig1.destroy();
  }
  if(pig2.Visiblity < 10 && pig2.Visiblity > -10){
    score = score + 1;
    pig1.destroy();
  }
}*/

}