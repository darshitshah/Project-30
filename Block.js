class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.Visibility= 255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
      }
      else{
        World.remove(world,this.body)
        push();
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y)
    this.Visibility =  this.Visibility-5
    pop();
    
      }
    }
}