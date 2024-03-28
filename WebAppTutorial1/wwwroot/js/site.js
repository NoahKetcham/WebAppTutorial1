// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

let circle = document.getElementById('animatedCircle');
let screenWidth = window.innerWidth;
let speed = 2;
let direction = 1;
let position = 0;

function animate() {
    position += speed * direction;
    circle.style.left = position + 'px';

    if (position <= 0 || position >= screenWidth - circle.offsetWidth) {
        direction *= -1;
    }

    requestAnimationFrame(animate);
}


window.onresize = function () {
    screenwidth = window.innerwidth;
}

animate();