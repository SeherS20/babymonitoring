img = "";
status ="";
objects = [];

function preload(){
img = loadImage("dog_cat.jpg")
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
   }
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(video, 0, 0, 380, 380)
    
    if( status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult)
        for(i=0; i <objects.length; i++ ){
            document.getElementById("status").innerHTML = "Status: Object Detected";
    
          }
    }
}
function modelLoaded(){
    console.log("The cocossd model has loaded !🌈🌈🌈")
    status = true;
}

function gotResult(error, results){
    if (error){
        console.log(error)
    }
    console.log(results)
    objects = results;
}