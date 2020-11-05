class Pencil {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];

        var options = {
            restitution: 0.6
            

        }
    }

    

    display() {

        this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);

        
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          

        for(var i=0; i<this.trajectory.length ; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }
     
    }
    
    }