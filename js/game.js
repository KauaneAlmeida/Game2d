const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 1025
const canvasHeight = 576

canvas.width = canvasWidth;
canvas.height = canvasHeight; 

let prevTime = 0

animate();

function animate() {
    window.requestAnimationFrame(animate);

    handleControls() 
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    player.update();
    player2.update();

    let delta = (performance.now() - prevTime) / 1000;
    let fps = 1 / delta;

    prevTime = performance.now()

    //console.log(`FPS: ${fps}`)
   
}

