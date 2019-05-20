var myImage = new Image();
        var back = new Image();
        var ctx;
        function displayImage() {
            canvas = document.getElementById("myCanvas");
            if (canvas.getContext) {
                ctx = canvas.getContext("2d");
                window.addEventListener('keydown', moveobj, true);

                ctx.beginPath();
                ctx.moveTo(25, 150);
                ctx.lineTo(145, 150);
                ctx.lineTo(145, 135);
                ctx.lineTo(115, 130);
                ctx.lineTo(115, 120);
                ctx.lineTo(115, 120);
                ctx.lineTo(50, 120);
                ctx.lineTo(50, 130);
                ctx.lineTo(50, 130);
                ctx.lineTo(40, 130);
                ctx.closePath();
                ctx.fillStyle = "#FF0000";
                ctx.fill();

                ctx.beginPath();
                ctx.arc(50, 150, 10, 360, true);
                ctx.fillStyle = "#696969";
                ctx.fill();

                ctx.beginPath();
                ctx.arc(110, 150, 10, 360, true);
                ctx.fillStyle = "#696969";
                ctx.fill();
                back = ctx.getImageData(25, 50, 200, 150);
            }
        }

          var old = new Image();
          var next = 35;
          function moveobj(evt) {
              switch (evt.keyCode) {
                  case 37:
                      if (next < 20) {
                          return;
                      }
                      next = next - 5;
                      break;
                  case 39:
                      if (next > 650) {
                          return;
                      }
                      next = next + 5;
                      break;
              }
              ctx.fillStyle = "#ffffff";
              ctx.rect(0, 5, 650, 300);
              ctx.fill();
              ctx.putImageData(back, next, 50);
          }