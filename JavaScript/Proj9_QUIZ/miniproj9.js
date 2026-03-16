const startquiz = document.getElementById("startquiz");
const introdiv = document.getElementById("intro");
const quizbox = document.getElementById("quizbox");
const btns = document.querySelectorAll(".btns");
const button = document.getElementsByClassName("btns");
const nextbtn = document.getElementById("nextbtn");
const question = document.getElementById("question");

const playagain = document.createElement("button");

let m = 0;
let count = 0;
let answered = false;
let quizarray=[];

const buttonarray = Array.from(button);

// ================= PLAY AGAIN =================
playagain.onclick = function () {
    m = 0;
    count = 0;
    answered = false;
    introdiv.style.display = "none";
    quizbox.style.display = "block";
    console.log("clicked");
    createdata();
};
async function getdata(){
    const response = await fetch("miniproj9.json");
    quizarray = await response.json();
    console.log(quizarray);
}

// ================= START QUIZ =================
async function quizprogram() {
    await getdata();
    introdiv.style.display="none";
    createdata();
    //console.log("created");
}

// ================= LOAD QUESTION =================
async function createdata() {
    console.log("entered");
    answered = false;
    nextbtn.style.display = "none";

    btns.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.disabled = false;
        btn.classList.remove("selected", "wrong", "correct");
    });

    if (m >= quizarray.length) {
        playagainquiz(quizarray.length);
        return;
    }

    quizbox.style.display = "block";
    console.log(quizarray);

    question.textContent =quizarray[m].question;

    btns.forEach((btn, index) => {
        btn.textContent = quizarray[m].options[index];
    });
}
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (answered) 
            return;

        answered = true;
        submitdata(btn, quizarray, m);
        nextbtn.style.display = "block";
    });
});


// ================= CHECK ANSWER =================
function submitdata(element, data, n) {
    if (element.textContent === data[n].answer) {
        count++;
        element.style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
    }

    buttonarray.forEach(btn => {
        btn.disabled = true;
        btn.classList.add("butt");
    });

    m++;
}
// ================= FINISHED SCREEN =================
function playagainquiz(len) {
    quizbox.style.display="none";
    introdiv.innerHTML="";

    const finished = document.createElement("h1");
    const score = document.createElement("h3");

    finished.textContent = "Finished!!!";
    finished.classList.add("finished");

    score.textContent = `Total Score : ${count} / ${len}`;
    score.classList.add("score");

    playagain.textContent = "Play Again";
    playagain.classList.add("play");

    introdiv.appendChild(finished);
    introdiv.appendChild(score);
    introdiv.appendChild(playagain);
    introdiv.style.display = "block";
}

// ================= NEXT BUTTON =================
nextbtn.onclick = createdata;