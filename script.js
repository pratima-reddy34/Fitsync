document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");

    function updateClasses() {
        let imgs = document.querySelectorAll(".slider img");

        imgs.forEach((img, index) => {
            img.classList.remove("center", "small");
            if (index === 0 || index === imgs.length - 1) img.classList.add("small");
            if (index === 2) img.classList.add("center");
        });
    }

    function slideShow() {
        let firstImage = slider.firstElementChild;
        slider.appendChild(firstImage);
        updateClasses();
    }

    updateClasses(); // Initial class setup
    setInterval(slideShow, 3000);
});
