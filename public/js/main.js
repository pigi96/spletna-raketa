var loadedImages;
var imgPath = 'public/img/';

var images = [imgPath+'background.svg',
imgPath+'Earth planet.png',
imgPath+'Luna planet.png',
imgPath+'Mars planet.png',
imgPath+'Venus planet.png',
imgPath+'Rocket.svg'];

function initialize() {
    loadImages();
}

var imagesLoaded = false;
var enable = false;

$(document).ready(function() {

    setTimeout(function(){
        enable = true;
        if (imagesLoaded) {
            $('body').addClass('loaded');
        }
    }, 2000);

    setTimeout(function(){
        if (imagesLoaded) {
            $('body').addClass('loaded');
        }
    }, 9999);

});

function initializeAfterLoad() {
    initController();

    initBackground();
    initForeground();

    drawBackground();
    drawForeground();

    document.getElementById("description").innerHTML = earthDescription;
    document.getElementById("video").src = earthVideo;
    document.getElementById("statistics").innerHTML = earthStatistics;
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
    imagesLoaded = true;
    if (enable)
        $('body').addClass('loaded');
}