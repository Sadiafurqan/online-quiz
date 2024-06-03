// Sample quiz data (replace this with your actual quiz data)
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    // Add more quiz questions as needed
];

let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    score = 0;
    displayQuestion(quizContainer);
}

// Function to display a question
function displayQuestion(quizContainer) {
    if (currentQuestion >= quizData.length) {
        showSummary(quizContainer);
        return;
    }
    const questionDiv = document.createElement("div");
    const questionData = quizData[currentQuestion];
    questionDiv.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.options.map(option => `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`).join("")}
        </ul>
    `;
    quizContainer.appendChild(questionDiv);
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const questionData = quizData[currentQuestion];
    if (selectedOption === questionData.answer) {
        score++;
    }
    currentQuestion++;
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    displayQuestion(quizContainer);
}

// Function to show quiz summary
function showSummary(quizContainer) {
    const summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = `
        <h2>Quiz Summary</h2>
        <p>You scored ${score} out of ${quizData.length}.</p>
    `;
    quizContainer.appendChild(summaryDiv);
}
