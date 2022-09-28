function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/jSc87bs4/Doge.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}