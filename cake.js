document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("birthdayMusic");

    // Cek apakah tombol sudah ditekan di halaman pertama
    if (localStorage.getItem("playMusic") === "true") {
        let playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay dicegah oleh browser. Klik di mana saja untuk memulai musik.");
            });
        }

        document.body.addEventListener("click", function () {
            audio.play();
        });
    }

    // Animasi Bintang Jatuh
    let canvas = document.getElementById("stars");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 3 + 1
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        for (let i = 0; i < stars.length; i++) {
            let star = stars[i];
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        }
        requestAnimationFrame(drawStars);
    }

    drawStars();
});