document.addEventListener("DOMContentLoaded", function () {
    const corazonBtn = document.getElementById("corazonBtn");
    const corazonesDiv = document.getElementById("corazones");
    const cartaBtn = document.getElementById("cartaBtn");
  
    corazonBtn.addEventListener("click", () => {
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "100vh";
        heart.style.animationDuration = (Math.random() * 2 + 4) + "s";
        document.body.appendChild(heart);
  
        setTimeout(() => {
          heart.remove();
        }, 6000);
      }
    });
  
    cartaBtn.addEventListener("click", () => {
      window.location.href = "carta.html";
    });
  });
  
