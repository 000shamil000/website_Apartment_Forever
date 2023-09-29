let imgArray = [
    'img/apartment_main.jpg',
    'img/neo-cityplace-4k-spadina-ave-original-2.jpg',
    'img/wallpapper1.jpg',
    'img/wp2100672-apartment-wallpapers.jpg'
]
let slide = document.querySelector(".slide_show")
let index = 0;
function createImg(){
    slide.src = imgArray[index];
    index = (index + 1) % imgArray.length
} 
createImg()
setInterval(createImg, 4000)



let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
    const currentScrollPos = window.scrollY;
    
    if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-100px";
    }
    
    prevScrollPos = currentScrollPos;
});


const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer_text');

questions.forEach(function(question, index) {
    question.addEventListener('click', function() {
        const answer = answers[index];
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});




  

