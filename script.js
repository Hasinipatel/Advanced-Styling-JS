
const quizData = [
    { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
    { q: "Which language runs in a web browser?", a: "JavaScript" }
];

function submitQuiz() {
    const answers = document.querySelectorAll(".quiz-answer");
    let score = 0;
    answers.forEach((el, index) => {
        if (el.value.toLowerCase() === quizData[index].a.toLowerCase()) {
            score++;
        }
    });
    document.getElementById("quiz-result").textContent = `You got ${score}/${quizData.length} correct!`;
}

window.onload = () => {
    const quizDiv = document.getElementById("quiz");
    quizData.forEach((q, i) => {
        quizDiv.innerHTML += `<p>${q.q}</p><input class='quiz-answer' type='text'><br>`;
    });
};

let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carousel-img").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carousel-img").src = images[index];
}

async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
    });
    const data = await res.json();
    document.getElementById("joke").textContent = data.joke;
}
