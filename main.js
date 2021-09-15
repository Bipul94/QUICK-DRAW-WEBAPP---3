function setup(){
canvas = createCanvas(300, 400)
canvas.center()
background("white")

}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}

function clearCanvas(){
    background("white")
}