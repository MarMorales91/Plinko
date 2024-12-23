



const socket = io();


let Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Runner = Matter.Runner,
    Events = Matter.Events,
    Composite = Matter.Composite;

const width = window.innerWidth;
const height = window.innerHeight; 
let engine
let plinkos = []
let particles = []
let rows = 8;
let cols = 11;
let bounds = []
let img
let bucket = 9


function preload() {
    img = loadImage('/img/grinch2.webp');
}

function setup() {
    
    
    
    
    createCanvas(width, height)

      
    engine = Engine.create();
    engine.gravity.y = 1.5;


 



    let spacing = width / cols;
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols + 1; i++) {
            let x = i * spacing;
            if (j % 2 == 0) {
                x += spacing / 2;
            }
            let y = spacing + j * spacing;
         
            let p = new Plinko(x, y, 15);
            plinkos.push(p);
        }
    }

    let newSpacing = width / bucket
    let b = new Boundary(width / 2, height + 50, width, 100);
    bounds.push(b);
  
    for (var i = 0; i < cols + 2; i++) {  
      let x = i * newSpacing;
      let h = 200;
      let w = 10;
      let y = height - h / 2;
      let b = new Boundary(x, y, w, h);
      bounds.push(b);
    }
    
    
}


function newParticle(r, g, b){
    const p = new Particles(width/2, 0, 25, r, g, b)
    particles.push(p)
}

socket.on('data', (data) => {
    if(data === "1"){
        newParticle(255, 0, 0)
    }
    if(data === "2"){
        newParticle(255, 255, 0)
    }
    if(data === "3"){
        newParticle(0, 0, 255)
    }
})



function draw() {


    background(img)
    textSize(60);
    fill('blue');
    text('5', 30, height - 200);
    fill('blue');
    text('5', width - 90, height - 200);


    textSize(60)
    fill('blue')
    text('2', width/2 - 25, height - 200)
    
    textSize(65)
    fill('blue')
    text('1', 290, height - 200)
    fill('blue')
    text('1', width - 320, height - 200)

    textSize(60)
    fill('red')
    text("Merry Christmas You Filthy Animal!!", width/2 - 500, height - 500)
    

    Engine.update(engine)
    
    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }

    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
      }
    
  
}    


function windowResized() {
    // Resize canvas when the window is resized
    resizeCanvas(windowWidth, windowHeight);
  }