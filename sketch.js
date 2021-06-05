const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);
    if(backgroundImg){
    
background(backgroundImg);
fill("white");
textSize(25);
text("Time: "+time, 600, 350);
    }
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    
    

    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    time = hour;
    // add conditions to change the background images from sunrise to sunset
if(hour>4 && hour<6){
backgroundImg = loadImage("sunrise1.png")
}
else if(hour>6 && hour<10){
    backgroundImg = loadImage("sunrise2.png")
}
else if(hour>10 && hour<14){
    backgroundImg = loadImage("sunrise3.png")
}
else if(hour>14 && hour<17){
    backgroundImg = loadImage("sunrise4.png")
}
else if(hour>17 && hour<19){
    backgroundImg = loadImage("sunset8.png")
}
else if(hour>19 && hour<22){
    backgroundImg = loadImage("sunset10.png")
}
else if(hour>22 && hour<0){
    backgroundImg = loadImage("sunset12.png")
}


    //load the image in backgroundImg variable here

}
