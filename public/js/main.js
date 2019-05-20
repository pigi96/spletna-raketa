var loadedImages;
var imgPath = 'public/img/';

var images = [imgPath+'universe.jpg',
imgPath+'Earth planet.png',
imgPath+'Luna planet.png',
imgPath+'Mars planet.png',
imgPath+'Venus planet.png',
imgPath+'rocket.png'];

function initialize() {
    loadImages();
}

function initializeAfterLoad() {
    initBackground();
    initForeground();

    drawBackground();
    drawForeground();
}
function loadImages() {

    loadedImages = {};
    var promiseArray = images.map(function(imgurl){
       var prom = new Promise(function(resolve,reject){
           var img = new Image();
           img.onload = function(){
               loadedImages[imgurl] = img;
               resolve();
           };
           img.src = imgurl;
       });
       return prom;
    });

    Promise.all(promiseArray).then(initializeAfterLoad);
}