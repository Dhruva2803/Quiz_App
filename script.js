const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a: "Hello To My Lord",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: what is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Sty;e Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: what is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q5: Which CSS property is used to make text bold?",
        a: "font-weight",
        b: "text-style",
        c: "font-style",
        d: "bold",
        ans: "ans1"
    },
    {
        question: "Q6: Which property is used to change the background color in CSS?",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "background",
        ans: "ans2"
    },
    {
        question: "Q7: Which of the following is not a valid JavaScript data type?",
        a: "Undefined",
        b: "Boolean",
        c: "Float",
        d: "String",
        ans: "ans3"
    },
    {
        question: "Q8: Which event occurs when the user clicks on an HTML element?",
        a: "onmouseover",
        b: "onchange",
        c: "onclick",
        d: "onmouseclick",
        ans: "ans3"
    },
    {
        question: "Q9: Which method is used to select an element by ID in JavaScript?",
        a: "getElementByName()",
        b: "getElementById()",
        c: "querySelectorAll()",
        d: "getElementsByClass()",
        ans: "ans2"
    },
    {
        question: "Q10: In CSS, which property controls the text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        ans: "ans3"
    }
];

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector('#submit');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (!checkedAnswer) {
        alert("Please select an answer before proceeding.");
        return;
    }

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showscore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} &#9996;</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scoreArea');
    }
});
