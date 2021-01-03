class paper {

    constructor(x, y) {
        var options = {
            isStatic:false,
             // restitution:0.8,
              //friction:1.5,
              density:1.4
          }
        this.body = Bodies.circle(x,y,20,options);
                
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        circle(0, 0, 20);
        pop();
      }




}