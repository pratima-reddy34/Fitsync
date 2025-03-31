// Function to show meal plan popup with two images
function showMealPlan() {
    let dietType = document.getElementById("goal-select").value;
    let img1 = document.getElementById("meal-image1");
    let img2 = document.getElementById("meal-image2");

    // Set correct images based on selection
    if (dietType === "gain") {
        img1.src = "img/gym veg.png";
        img2.src = "img/gym non veg.png"; // Different image to ensure two images appear
    } else if (dietType === "loss") {
        img1.src = "img/gym non veg.png";
        img2.src = "img/gym veg.png"; // Different image for variation
    } else if (dietType === "muscle") {
        img1.src = "img/gym both.png";
        img2.src = "img/gym both.png";
    }

    // Make sure both images load before displaying the popup
    img1.onload = img2.onload = function () {
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.body.classList.add("popup-active");
    };
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("popup-active");
}
