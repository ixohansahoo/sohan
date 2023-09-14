const images = ["probs.jpg", "pyt.jpg","sq.jpg","30day.jpg"];
const texts = [ "5⭐ Golden Badge In Problem Solving", "5⭐ Golden Badge In Python","5⭐ Golden Badge In Sql","Completed 30days Coding Challange"];

let currentIndex = 0;

const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateContent(direction) {
    // Apply a transform to slide the image
    if (direction === "next") {
        imageElement.style.transform = "translateX(180%)";
    } else if (direction === "prev") {
        imageElement.style.transform = "translateX(-180%)";
    }
    
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        // Use a timeout to allow the image change to take effect before sliding back
        setTimeout(() => {
            imageElement.style.transform = "translateX(0)";
            setTimeout(() => {
                textElement.textContent = texts[currentIndex];
            }, 0);
        }, 0);
    }, 250); // Delay to let the slide animation finish
}
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent("prev");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent("next");
});
updateContent();









