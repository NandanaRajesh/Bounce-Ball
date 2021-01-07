//using the matter.js file to add physics functions to objects
//giving constant values to matter engine,world and bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating engine and world for own code
var engine, world;
var ground, ball,box;

function setup(){
    var canvas = createCanvas(400,400);
    //creating engine and adding our world to it
    engine = Engine.create();
    world = engine.world;

    //making ground a stationary body
    var ground_options ={
        isStatic: true
    }
    //creating ground,giving it static option and adding to world
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    //creating bounce option
    var bounce_options = {
        restitution : 1
    }
    //creating ball and giving it bounce opyion and adding to world
    ball = Bodies.circle(200,100,20,bounce_options);
    World.add(world,ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    //alligning rectangle and ellipse and creating them using values declared in setup
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);


}