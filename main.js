song1="music.mp3";
song2="music2.mp3";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
  song=loadSound("music.mp3");
  song=loadSound("music2,mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    background("white");
    video=createCapture(VIDEO);
    video.hide();
    canvas.position(200,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

  }
  function modelLoaded(){
    console.log("Posenet IS Intialised");
  }
  function gotPoses(results){
    if(results.lenght > 0){
      console.log(results);
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      console.log("leftWristX=" +leftWristX +"leftWristY=" +leftWristY);

      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
      console.log("rightWristX=" +rightWristX +"rightWristY=" +rightWristY);
    }
  }
  function draw(){
    image(video,0,0,600,500);
}
