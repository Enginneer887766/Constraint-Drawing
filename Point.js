class Point {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true
            

        }
    }

    

    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
     
        pop();
    }
}