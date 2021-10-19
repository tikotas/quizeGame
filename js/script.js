const titNum = document.querySelector(".titNum");
const mainQuestion = document.querySelector(".questionBlock");
const vars = document.querySelectorAll(".var");

const quiz = document.querySelector(".quizBlock");
const load = document.querySelector(".load");

const imgScore = document.querySelector(".imgScore");
const score = document.querySelector(".score");
const text = document.querySelector(".text");

// sounds
const drum = new Audio('sounds/drums.mp3');
const goofy = new Audio('sounds/goofy.mp3');
const mickey = new Audio('sounds/mickey.mp3');
const duck = new Audio('sounds/duck.mp3');

let currentIndex = 0;
let total = 0;

window.onload = () => {
  loadQuestion();
}

function loadQuestion() {
  mainQuestion.textContent = questions[currentIndex].quest;
  vars[0].textContent = questions[currentIndex].variant1;
  vars[1].textContent = questions[currentIndex].variant2;
  vars[2].textContent = questions[currentIndex].variant3;
  vars[3].textContent = questions[currentIndex].variant4;
}


for (let ansBtn of vars) {
  ansBtn.onclick = () => {
    titNum.textContent++;
    if (ansBtn.innerHTML === questions[currentIndex].rightAnswer) {
      total++;
    }

    currentIndex++;

    if (currentIndex === questions.length) {
      load.style.display = "block";
      drum.play();
      quiz.style.display = "none";
      setTimeout(showResult, 2000);
    } else {
      loadQuestion();
    }
  }
}


class ImgMessage {
  constructor(img, text, sound) {
    this.img = img;
    this.text = text;
    this.sound = sound;
  }

  info() {
    this.sound.play();
    imgScore.innerHTML = `${this.img}`;
    text.innerHTML = `${total} / ${questions.length}`;
    score.innerHTML = `${this.text}`;
  }
}

const dck = new ImgMessage("<img src='img/duck.png'>", "Խորհուրդ կտայի ավելի շատ գիրք կարդայիք։", duck);
const mkey = new ImgMessage("<img src='img/mickey.png'>", "բավականին լավ գիտելիքներ ունեք։", mickey);
const gfy = new ImgMessage("<img src='img/goofy.png'>", "Ուղղակի հրաշալի գիտելիքներ ունեք։", goofy);


function showResult() {
  if (total <= 5) {
    dck.info();
  } else if (total > 5 && total <= 10) {
    mkey.info();
  } else if (total > 10) {
    gfy.info();
  }
  load.style.display = "none";
  document.body.style.backgroundColor = "darkslategrey";
}




