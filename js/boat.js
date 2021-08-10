class Boat{
    constructor(x, y, width, height,boatPos) {
      var options = {
        restitution:0.8,
        friction:1,
        density:1
      };
      this.image = loadImage("assets/boat.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.boatPos=boatPos
      World.add(world, this.body);
    }
    remove(index){
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
    }
    display() {
      var pos = this.body.position;
      push()
      translate(pos.x,pos.y)
        rotate(this.body.angle)
      imageMode(CENTER);
      image(this.image, 0,this.boatPos, this.width, this.height);
     pop()
    }
  }