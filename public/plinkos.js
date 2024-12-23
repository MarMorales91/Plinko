class Plinko{
    constructor(x, y, r){
        this.color = random(255);
        let options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.r = r,
        this.body = Bodies.circle(x, y, r, options),
        this.body.label = 'plinko',
        this.r = r,
        Composite.add(engine.world, this.body)
    }

    show(){
        strokeWeight(4);
        stroke(255, 255, 255);
        fill(this.color, 255, this.color);
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}