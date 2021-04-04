const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

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
    if (backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

        var response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Rome');
        var responseJSON = await response.json();
        console.log(responseJSON);
        console.log(responseJSON.datetime);
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
    
        if (hour = 08){
            bg = 'sunrise1.png';
        }

        if (hour = 09){
            bg = 'sunrise2.png';
        }

        if (hour = 10){
            bg = 'sunrise3.png';
        }

        if (hour = 11){
            bg = 'sunrise4.png';
        }

        if (hour = 12){
            bg = 'sunrise5.png';
        }

        if (hour = 13){
            bg = 'sunrise6.png';
        }

        if (hour = 19){
            bg = 'sunset7.png';
        }

        if (hour = 20){
            bg = 'sunset8.png';
        }

        if (hour = 21){
            bg = 'sunset9.png';
        }

        if (hour = 22){
            bg = 'sunset10.png';
        }

        if (hour = 23){
            bg = 'sunset11.png';
        }

        if (hour = 24){
            bg = 'sunset12.png';
        }
        
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
     

}
