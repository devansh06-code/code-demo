const puppy = document.querySelector(".puppy");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let puppyX = mouseX;
let puppyY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {

    puppyX += (mouseX - puppyX) * 0.08;
    puppyY += (mouseY - puppyY) * 0.08;

    puppy.style.left = puppyX + "px";
    puppy.style.top = puppyY + "px";

    const angle =
        Math.atan2(
            mouseY - puppyY,
            mouseX - puppyX
        ) * 180 / Math.PI;

    puppy.style.transform =
        `translate(-50%, -50%) rotate(${angle}deg)`;

    requestAnimationFrame(animate);
}

animate();