var Img = "";
function setup() {
    canvas = createCanvas(1125, 625);
    canvas.position(400, 175);
    background("red");
}
function preload() {
    Img = loadImage("cosde.png");
}
function draw() {
    image(Img, 0, 0, 1125, 625);

    fill("blue");
    rect(53, 60, textWidth("test test"), 30);

    fill("white");
    textSize(20);
    text("test test", 53, 80);
}
