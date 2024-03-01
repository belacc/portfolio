let aboutBtn = document.querySelector('#about-btn');

aboutBtn.addEventListener("click",() => {
    let aNav = document.querySelectorAll('.nav-ul li a');

    window.location.href = "about.html";
});

let home = document.querySelector('#home-btn');

home.addEventListener("click", () => {
    window.location.href = "index.html";
});