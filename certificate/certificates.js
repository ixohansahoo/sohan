const images = ["java_basic.jpg",
 "sql_intermediate.jpg",
 "sql_basic.jpg",
"python_basic.jpg",
"sqlbe.jpg",
"modernj.jpg",
"junit5.jpg",
"jdbc.jpg",
"dsa.jpg",
"corej.jpg",
"cc.jpg",
"agile.jpg"];
const texts = ["JAVA Certificate", 
"SQL Intermediate Certificate",
"SQL Certificate",
"Python Certificate",
 "SQL Course Completion Certificate",
"Modern Java Course Completion Certificate",
"Practical Java Unit Testing Course Completion Certificate",
"JDBC Course Completion Certificate",
"DSA Course Completion Certificate",
"CORE-JAVA Course Completion Certificate",
"Cloud Computing Course Completion Certificate",
"Agile Fundamentals Course Completion Certificate"];

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









