var currentPlanet = 0;

var dirX;
var dirY;

var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;

var mercuryDescription = "<h1>Mercury</h1><p>The closest planet to the sun, Mercury is only a bit larger than Earth's moon. Its day side is scorched by the sun and can reach 840 degrees Fahrenheit (450 Celsius), but on the night side, temperatures drop to hundreds of degrees below freezing. Mercury has virtually no atmosphere to absorb meteor impacts, so its surface is pockmarked with craters, just like the moon.</p>";
var mercuryStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> Known to the ancients and visible to the naked eye</p><p><b>Diameter:</b> 3,031 miles (4,878 km)</p><p><b>Orbit:</b> 88 Earth days</p><p><b>Day:</b> 58.6 Earth days</p>";
var mercuryVideo = "https://www.youtube.com/embed/0KBjnNuhRHs?rel=0";

var venusDescription = "<h1>Venus</h1><p>The second planet from the sun, Venus is terribly hot, even hotter than Mercury. The atmosphere is toxic. The pressure at the surface would crush and kill you. Scientists describe Venus's situation as a runaway greenhouse effect. Its size and structure are similar to Earth, Venus's thick, toxic atmosphere traps heat in a runaway 'greenhouse effect'.</p>";
var venusStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> Known to the ancients and visible to the naked eye</p><p><b>Diameter:</b> 7,521 miles (12,104 km)</p><p><b>Orbit:</b> 225 Earth days</p><p><b>Day:</b> 241 Earth days</p>";
var venusVideo = "https://www.youtube.com/embed/BvXa1n9fjow?rel=0";

var earthDescription = "<h1>Earth</h1><p>The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in life-sustaining nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) slightly more than 1,000 mph (1,600 kph) at the equator.</p>";
var earthStatistics = "<h1>Planet statistics</h1><p><b>Diameter:</b> 7,926 miles (12,760 km)</p><p><b>Orbit:</b> 365.24 days</p><p><b>Day:</b> 23 hours, 56 minutes</p>";
var earthVideo = "https://www.youtube.com/embed/HCDVN7DCzYE?rel=0";

var marsDescription = "<h1>Mars</h1><p>The fourth planet from the sun, is a cold, dusty place. The dust, an iron oxide, gives the planet its reddish cast. Mars shares similarities with Earth: It is rocky, has mountains and valleys, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. It snows on Mars. And Mars harbors water ice.</p>";
var marsStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> Known to the ancients and visible to the naked eye</p><p><b>Diameter:</b> 4,217 miles (6,787 km)</p><p><b>Orbit:</b> 687 Earth days</p><p><b>Day:</b> Just more than one Earth day (24 hours, 37 minutes)</p>";
var marsVideo = "https://www.youtube.com/embed/D8pnmwOXhoY?rel=0";

var jupiterDescription = "<h1>Jupiter</h1><p>The fifth planet from the sun, Jupiter is huge and is the most massive planet in our solar system. It's a mostly gaseous world, mostly hydrogen and helium. Its swirling clouds are colorful due to different types of trace gases. A big feature is the Great Red Spot, a giant storm which has raged for hundreds of years.</p>";
var jupiterStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> Known to the ancients and visible to the naked eye</p><p><b>Diameter:</b> 86,881 miles (139,822 km)</p><p><b>Orbit:</b> 11.9 Earth years</p><p><b>Day:</b> 9.8 Earth hours</p>";
var jupiterVideo = "https://www.youtube.com/embed/PtkqwslbLY8?rel=0";

var saturnDescription = "<h1>Saturn</h1><p>The sixth planet from the sun is known most for its rings. When Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery.</p>";
var saturnStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> Known to the ancients and visible to the naked eye</p><p><b>Diameter:</b> 74,900 miles (120,500 km)</p><p><b>Orbit:</b> 29.5 Earth years</p><p><b>Day:</b> About 10.5 Earth hours</p>";
var saturnVideo = "https://www.youtube.com/embed/epZdZaEQhS0?rel=0";

var uranusDescription = "<h1>Uranus</h1><p>The seventh planet from the sun, Uranus is an oddball. It's the only giant planet whose equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers think the planet collided with some other planet-size object long ago, causing the tilt. The tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years.</p>";
var uranusStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> 1781 by William Herschel (was thought previously to be a star)</p><p><b>Diameter:</b> 31,763 miles (51,120 km)</p><p><b>Orbit:</b> 84 Earth years</p><p><b>Day:</b> 18 Earth hours</p>";
var uranusVideo = "https://www.youtube.com/embed/m4NXbFOiOGk?rel=0";

var neptuneDescription = "<h1>Neptune</h1><p>The eighth planet from the sun, Neptune is known for strong winds - sometimes faster than the speed of sound. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. It has a rocky core. Neptune was the first planet to be predicted to exist by using math, before it was detected. Neptune is about 17 times as massive as Earth.</p>";
var neptuneStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b> 1846</p><p><b>Diameter:</b> 30,775 miles (49,530 km)</p><p><b>Orbit:</b> 165 Earth years</p><p><b>Day:</b> 19 Earth hours</p>";
var neptuneVideo = "https://www.youtube.com/embed/NStn7zZKXfE?rel=0";

var plutoDescription = "<h1>Pluto</h1><p>Once the ninth planet from the sun, Pluto is unlike other planets in many respects. From 1979 until early 1999, Pluto had been the eighth planet from the sun. Then, on Feb. 11, 1999, it crossed Neptune's path and once again became the solar system's most distant planet - until it was demoted to dwarf planet status.</p>";
var plutoStatistics = "<h1>Planet statistics</h1><p><b>Discovery:</b>1930 by Clyde Tombaugh</p><p><b>Diameter:</b> 1,430 miles (2,301 km)</p><p><b>Orbit:</b> 248 Earth years</p><p><b>Day:</b> 6.4 Earth day</p>";
var plutoVideo = "https://www.youtube.com/embed/-iZio70bd-M?rel=0";

var currentPos = 2;

function visitPlanetToRight() {
    if (currentPos == 0) {
        currentPos = 1;
        visitPlanet(venus);
        setContent(venus);
    } else if (currentPos == 1) {
        currentPos = 2;
        visitPlanet(earth);
        setContent(earth);
    } else if (currentPos == 2) {
              currentPos = 3;
              visitPlanet(mars);
              setContent(mars);
  } else if (currentPos == 3) {
        currentPos = 4;
        visitPlanet(jupiter);
        setContent(jupiter);
    } else if (currentPos == 4) {
          currentPos = 5;
          visitPlanet(saturn);
          setContent(saturn);
      } else if (currentPos == 5) {
        currentPos = 6;
        visitPlanet(uranus);
        setContent(uranus);
    } else if (currentPos == 6) {
      currentPos = 7;
      visitPlanet(neptune);
      setContent(neptune);
        } else if (currentPos == 7) {
            currentPos = 8;
            visitPlanet(pluto);
            setContent(pluto);
        }
}

function visitPlanetToLeft() {
    if (currentPos == 1) {
        currentPos = 0;
        visitPlanet(mercury);
        setContent(mercury);
    } else if (currentPos == 2) {
        currentPos = 1;
        visitPlanet(venus);
        setContent(venus);
    } else if (currentPos == 3) {
              currentPos = 2;
              visitPlanet(earth);
              setContent(earth);
  } else if (currentPos == 4) {
        currentPos = 3;
        visitPlanet(mars);
        setContent(mars);
    } else if (currentPos == 5) {
          currentPos = 4;
          visitPlanet(jupiter);
          setContent(jupiter);
      } else if (currentPos == 6) {
        currentPos = 5;
        visitPlanet(saturn);
        setContent(saturn);
    } else if (currentPos == 7) {
      currentPos = 6;
      visitPlanet(uranus);
      setContent(uranus);
        } else if (currentPos == 8) {
            currentPos = 7;
            visitPlanet(neptune);
            setContent(neptune);
        }
}

function colorBackground() {

}

function initController() {
    mercury = document.getElementById("mercury");
    venus = document.getElementById("venus");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    jupiter = document.getElementById("jupiter");
    saturn = document.getElementById("saturn");
    uranus = document.getElementById("uranus");
    neptune = document.getElementById("neptune");
    pluto = document.getElementById("pluto");

    window.onresize = function() {
        rocketUserObj.updateView();
    }

      $("#mercury1").click(function(){
        currentPos = 0;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(mercury);
            setContent(mercury);
    });
    $("#venus1").click(function(){
      currentPos = 1;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(venus);
            setContent(venus);
    });
    $("#earth1").click(function(){
      currentPos = 2;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(earth);
            setContent(earth);
    });
    $("#mars1").click(function(){
      currentPos = 3;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(mars);
            setContent(mars);
    });
    $("#jupiter1").click(function(){
      currentPos = 4;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(jupiter);
            setContent(jupiter);
    });
    $("#saturn1").click(function(){
      currentPos = 5;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(saturn);
            setContent(saturn);
    });
    $("#uranus1").click(function(){
      currentPos = 6;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(uranus);
            setContent(uranus);
    });
    $("#neptune1").click(function(){
      currentPos = 7;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(neptune);
            setContent(neptune);
    });
    $("#pluto1").click(function(){
          currentPos = 8;
         document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanet(pluto);
            setContent(pluto);
    });

    $("#move-left").click(function () {
         if (updateLoop == null) {
         if (currentPos == 0)
            return;
          document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanetToLeft();
            }
    });
    $("#move-right").click(function () {
         if (updateLoop == null) {
         if (currentPos == 8)
            return;
          document.getElementById("helperDesc").classList.add("helperDescription-out");
          document.getElementById("helperDesc").classList.remove("helperDescription-in");
          document.getElementById("helperVid").classList.add("helperVideo-out");
          document.getElementById("helperVid").classList.remove("helperVideo-in");
          document.getElementById("helperStats").classList.add("helperStatistics-out");
          document.getElementById("helperStats").classList.remove("helperStatistics-in");
          document.getElementById("helperNav").classList.add("helperNavigation-out");
          document.getElementById("helperNav").classList.remove("helperNavigation-in");
            visitPlanetToRight();
            }
    });
}
      /*$("#earth-to-venus, #earth-to-venus1").click(function () {
      if (updateLoop == null)
        visitPlanet(venus);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = venusDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/BvXa1n9fjow?rel=0";
       document.getElementById("earth-to-venus1").style.visibility = "hidden";
       document.getElementById("earth-to-luna1").style.visibility = "visible";
       document.getElementById("earth-to-mars1").style.visibility = "visible";
      });
      $("#earth-to-luna, #earth-to-luna1").click(function () {
      if (updateLoop == null)
        visitPlanet(luna);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = moonDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/6AviDjR9mmo?rel=0";
        document.getElementById("earth-to-luna1").style.visibility = "hidden";
        document.getElementById("earth-to-venus1").style.visibility = "visible";
        document.getElementById("earth-to-mars1").style.visibility = "visible";
      });
    $("#earth-to-mars, #earth-to-mars1").click(function () {
      if (updateLoop == null)
        visitPlanet(mars);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = marsDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/D8pnmwOXhoY?rel=0";
        document.getElementById("earth-to-mars1").style.visibility = "hidden";
        document.getElementById("earth-to-luna1").style.visibility = "visible";
        document.getElementById("earth-to-venus1").style.visibility = "visible";
      });
    });*/

window.requestAnimationFrame =
           window.requestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.msRequestAnimationFrame;

var updateLoop = null;
function visitPlanet(planet) {
    var start = null;
    function update(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        rocketUserObj.updateMovement(progress);

        drawForeground();

        if (rocketUserObj.distance(planet.offsetLeft + planet.width/2 - 20, planet.offsetTop + planet.height/2 - 40)) {
            //clearInterval(updateLoop);
            console.log(updateLoop);
            cancelAnimationFrame(updateLoop);
            updateLoop = null;

            document.getElementById("helperDesc").classList.remove("helperColorMercury", "helperColorVenus", "helperColorEarth", "helperColorMars", "helperColorJupiter", "helperColorSaturn", "helperColorUranus", "helperColorNeptune", "helperColorPluto");
            document.getElementById("helperStats").classList.remove("helperColorMercury", "helperColorVenus", "helperColorEarth", "helperColorMars", "helperColorJupiter", "helperColorSaturn", "helperColorUranus", "helperColorNeptune", "helperColorPluto");

            if (currentPos == 0) {
                document.getElementById("helperDesc").classList.add("helperColorMercury");
                document.getElementById("helperStats").classList.add("helperColorMercury");
            } else if (currentPos == 1) {
                document.getElementById("helperDesc").classList.add("helperColorVenus");
                document.getElementById("helperStats").classList.add("helperColorVenus");
            }else if (currentPos == 2) {
                 document.getElementById("helperDesc").classList.add("helperColorEarth");
                 document.getElementById("helperStats").classList.add("helperColorEarth");
             }else if (currentPos == 3) {
                  document.getElementById("helperDesc").classList.add("helperColorMars");
                  document.getElementById("helperStats").classList.add("helperColorMars");
              }else if (currentPos == 4) {
                   document.getElementById("helperDesc").classList.add("helperColorJupiter");
                   document.getElementById("helperStats").classList.add("helperColorJupiter");
               }else if (currentPos == 5) {
                    document.getElementById("helperDesc").classList.add("helperColorSaturn");
                    document.getElementById("helperStats").classList.add("helperColorSaturn");
                }else if (currentPos == 6) {
                     document.getElementById("helperDesc").classList.add("helperColorUranus");
                     document.getElementById("helperStats").classList.add("helperColorUranus");
                 }else if (currentPos == 7) {
                      document.getElementById("helperDesc").classList.add("helperColorNeptune");
                      document.getElementById("helperStats").classList.add("helperColorNeptune");
                  }else if (currentPos == 8) {
                       document.getElementById("helperDesc").classList.add("helperColorPluto");
                       document.getElementById("helperStats").classList.add("helperColorPluto");
                   }

            document.getElementById("helperDesc").classList.add("helperDescription-in");
            document.getElementById("helperDesc").classList.remove("helperDescription-out");
            document.getElementById("helperVid").classList.add("helperVideo-in");
            document.getElementById("helperVid").classList.remove("helperVideo-out");
            document.getElementById("helperStats").classList.add("helperStatistics-in");
            document.getElementById("helperStats").classList.remove("helperStatistics-out");
            document.getElementById("helperNav").classList.add("helperNavigation-in");
            document.getElementById("helperNav").classList.remove("helperNavigation-out");

            return;
        }

        updateLoop = requestAnimationFrame(update);
    }
    rocketUserObj.moveTowards(planet.offsetLeft + planet.width/2 - 20, planet.offsetTop + planet.height/2 - 40);

    //updateLoop = setInterval(update, 30);
    updateLoop = window.requestAnimationFrame(update);
}

function distance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a*a + b*b);
    return c;
}

function setContent(planet){
  if(planet == mercury){
    document.getElementById("description").innerHTML = mercuryDescription;
    document.getElementById("video").src = mercuryVideo;
     document.getElementById("statistics").innerHTML = mercuryStatistics;
  }else if(planet == venus){
    document.getElementById("description").innerHTML = venusDescription;
    document.getElementById("video").src = venusVideo;
  }else if(planet== earth){
    document.getElementById("description").innerHTML = earthDescription;
    document.getElementById("video").src = earthVideo;
  }else if(planet== mars){
    document.getElementById("description").innerHTML = marsDescription;
    document.getElementById("video").src = marsVideo;
  }else if(planet== jupiter){
    document.getElementById("description").innerHTML = jupiterDescription;
    document.getElementById("video").src = jupiterVideo;
  }else if(planet == saturn){
    document.getElementById("description").innerHTML = saturnDescription;
    document.getElementById("video").src = saturnVideo;
  }else if(planet == uranus){
    document.getElementById("description").innerHTML = uranusDescription;
    document.getElementById("video").src = uranusVideo;
  }else if(planet == neptune){
    document.getElementById("description").innerHTML = neptuneDescription;
    document.getElementById("video").src = neptuneVideo;
  }else{
    document.getElementById("description").innerHTML = plutoDescription;
    document.getElementById("video").src = plutoVideo;
  }

}