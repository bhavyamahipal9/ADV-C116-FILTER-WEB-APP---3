noseX = 0;
noseY = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(img, noseX - 35, noseY - 10, 75, 75);
}

function take_snapshot(){
    save("I got Older.png");
}

function modelLoaded(){
    console.log("PoseNet Is Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X position = " + noseX);
        console.log("Y position = " + noseY);
    }
}
