
class Particles{
    constructor(x, y, radius, r, g, b ){
        let options = {
            restitution: 0.5,
            friction: 0,
            density: 1
          }
        x += random(-200, 200);
        this.radius = radius,
        this.r = r,
        this.g = g,
        this.b = b,
        this.body = Bodies.circle(x, y, radius, options)
        this.body.label = 'particle'
        this.radius = radius
        Composite.add(engine.world, this.body)
    }

    show(){
        strokeWeight(4);
        stroke(255,255, 255);
        fill(this.r, this.g, this.b)
        let pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipse(0, 0, this.radius * 2);
        pop();
    }
}

