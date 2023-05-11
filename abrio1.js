const colors = [
    "#87CEEB",
    "#FFA500",
    "##FF0000",
    "#7393B3",
    "#00FF00",
    ];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");
   
    btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    color.textContent = colors[randomIndex];
    });