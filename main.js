var Img = "";
var ModelCocossd = "";
var objectsList = [];
var detectionStatus = false;

function setup() {
    ModelCocossd = ml5.objectDetector('cocossd', ModelCocossdLoaded);
    
    canvas = createCanvas(1125, 625);
    canvas.position(400, 175);
    background("red");
    Img.resize(1125, 625);
}

function ModelCocossdLoaded() {
    console.log("El modelo Cocossd fue exitoso en cargar...");

    ModelCocossd.detect(Img, getResults);
}

function getResults(error, results) {
    if (!error) {
        console.log(results);
        objectsList = results;
        detectionStatus = true;
    }
}

function preload() {
    Img = loadImage("cosde.png");
}

function draw() {
    image(Img, 0, 0, 1125, 625);
    
    
    
    if (detectionStatus) {
        for (var i = 0; i < objectsList.length; i++) {
            var label = objectsList[i].label;

            var probability = objectsList[i].confidence;
            probability = Math.round(probability * 100);

            var x = objectsList[i].x;
            var y = objectsList[i].y;

            var objectWidth = objectsList[i].width;
            var objectHeight = objectsList[i].height;
            
            fill("blue");
            rect(x, y, textWidth(label), 30);
            
            fill("white");
            textSize(20);
            text(label + " " + probability + "%", x, y + 20); 

            noFill();
            stroke("blue");
            strokeWeight(3);
            rect(x, y, objectWidth, objectHeight);
        }
        document.getElementById("status").innerText = "Detectado ✔️"
    }
}

