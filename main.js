Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>"
  })
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dlrmY7Y8x/model.json", modelLoaded);

//aftr the model is loaded
function modelLoaded() {
  console.log("model has loaded");
}

function accuracy() {
  img = document.getElementById("selfie");
  classifier.classify(img, gotResult);
}
// a function is created to get answer and errors 

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results)
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }

}