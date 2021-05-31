var hypnoticBall;
// variable create
var database;
var position; 

var hypnoticBallPosition;

function preload(){
    ballImg = loadImage("ball444.png")
}

function setup(){
    createCanvas(500,500);

    //activated database variable.
    database=firebase.database()


    hypnoticBall = createSprite(250,250,20,20);
   // hypnoticBall.shapeColor = "red";
   hypnoticBall.addImage(ballImg);
   hypnoticBall.scale = 0.05

//reading the position of the ball form the database
//.on() - to the value
    hypnoticBallPosition=database.ref('ball/position')
    hypnoticBallPosition.on("value",readPosition)    

}

function draw(){
    background("brown");
    
if(position!==undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0)
        console.log("left")
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0)
        console.log("right")  
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1) 
        console.log("up") 
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1)   
   console.log("down")
    }

}
   
    drawSprites();
   
}
function readPosition(data){
    position=data.val()
    console.log(position); 

    hypnoticBall.x=position.x;
    hypnoticBall.y=position.y;

}
//read the data
//on() - continuous listener
// and once() - read the data in the beginning
//write the data on the database
//.set({x:200, y:300})
//.update()

function writePosition(x,y){
  database.ref('ball/position').set({
      'x':position.x+x,
      'y':position.y+y
     
  })
}

