function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VmH3VgGKZ/model.json', modelLoaded);
}
    function modelLoaded(){
        console.log('Model Loaded!');
    }

    function draw()
{

}