const titNum = document.querySelector(".titNum");
const mainQuestion = document.querySelector(".questionBlock");
const vars = document.querySelectorAll(".var");
const var1 = document.querySelector("#var1");
const var2 = document.querySelector("#var2");
const var3 = document.querySelector("#var3");
const var4 = document.querySelector("#var4");
const quiz = document.querySelector(".quizBlock");
const load = document.querySelector(".load");
const imgScore = document.querySelector(".imgScore");
const score = document.querySelector(".score");
const text = document.querySelector(".text");
const drum = new Audio('sounds/drums.mp3');
const goofy = new Audio('sounds/goofy.mp3');
const mickey  = new Audio('sounds/mickey.mp3');
const duck = new Audio('sounds/duck.mp3');
let currentIndex = 0;
let total = 0;


const questions = [

{
  quest: "Ո՞րն է Գերմանիայի մայրաքաղաքը։",
  variant1: "Լոնդոն",
  variant2: "Փարիզ",
  variant3: "Բեռլին",
  variant4: "Համբուրգ",
  rightAnswer: "Բեռլին"
},

{
  quest: "Նշվածներից ո՞րը քիմիական տարր չէ։",
  variant1: "Էլիբրիում",
  variant2: "Ալյումինիում",
  variant3: "Գերմանիում",
  variant4: "Կուպրում",
  rightAnswer: "Էլիբրիում"
},

{
  quest: "Ե՞րբ է տեղի ունեցել Ավարայրի ճակատամարտը։",
  variant1: "403թ․",
  variant2: "405թ․",
  variant3: "451թ․",
  variant4: "541թ․",
  rightAnswer: "451թ․"
},

{
  quest: "Ո՞րն է աշխարհի ամենաերկար գետը։",
  variant1: "Ամազոն",
  variant2: "Միսիսիպի",
  variant3: "Գանգես",
  variant4: "Նեղոս",
  rightAnswer: "Նեղոս"
},

{
  quest: "Քանի՞ օվկիանոս կա երկրի վրա։",
  variant1: "4",
  variant2: "3",
  variant3: "5",
  variant4: "7",
  rightAnswer: "5"
},

{
  quest: "Թվով ո՞րերորդ մոլորակն է հանդիսանում Յուպիտերը։",
  variant1: "3",
  variant2: "5",
  variant3: "6",
  variant4: "4",
  rightAnswer: "5"
},

{
  quest: "Ե՞րբ է տեղի ունեցել Գավգամելայի ճակատամարտը։",
  variant1: "մ․թ․ա․ 331թ․",
  variant2: "մ․թ․ա․ 323թ․",
  variant3: "մ․թ․ա․ 451թ․",
  variant4: "մ․թ․ա․ 301թ․",
  rightAnswer: "մ․թ․ա․ 331թ․"
},

{
  quest: "Որքա՞ն կկազմի 11 թվի քառակուսին",
  variant1: "111",
  variant2: "121",
  variant3: "221",
  variant4: "112",
  rightAnswer: "121"
},

{
  quest: "Քանի՞ մետր է 1 կմ։",
  variant1: "100մ",
  variant2: "1000մ",
  variant3: "10000մ",
  variant4: "10մ",
  rightAnswer: "1000մ"
},

{
  quest: "Ես իմ անուշ Հայաստանի ․․․ բառն եմ սիրում։",
  variant1: "նրբահամ",
  variant2: "արևահամ",
  variant3: "նրբանկատ",
  variant4: "արևահարված",
  rightAnswer: "արևահամ"
},

{
  quest: 'Նշվածներից ո՞րն է "սնգույր" բառի հոմանիշը։',
  variant1: "Թախիծ",
  variant2: "Դատարկ",
  variant3: "Կախիչ",
  variant4: "Շպար",
  rightAnswer: "Շպար"
},

{
  quest: 'Ու՞մ են պատկանում " Եվ դու՞ Բրուտոս " խոսքերը։',
  variant1: "Ա. Մակեդոնացի",
  variant2: "Մ. Կրասոս",
  variant3: "Հ. Կեսար",
  variant4: "Կալիգուլա",
  rightAnswer: "Հ. Կեսար"
},

];


function loadQuestion() {
  mainQuestion.textContent = questions[currentIndex].quest;
  var1.textContent = questions[currentIndex].variant1;
  var2.textContent = questions[currentIndex].variant2;
  var3.textContent = questions[currentIndex].variant3;
  var4.textContent = questions[currentIndex].variant4;
}

window.onload = function() {
  loadQuestion();
}

for(let va of vars) {
  va.onclick = function() {
    titNum.textContent++;
    if(va.innerHTML == questions[currentIndex].rightAnswer) {
      total++;
    }
    currentIndex++;
    if(currentIndex === questions.length) {
      load.style.display = "block";
      drum.play();
      quiz.style.display = "none";
      setTimeout(showResult, 2000);
    } else {
      loadQuestion();
    }
  }
}

const imgMessage = [

{
  img: "<img src='img/duck.png'>",
  text: "Խորհուրդ կտայի ավելի շատ գիրք կարդայիք։",
  sound: duck,
  info: function() {
    this.sound.play();
    imgScore.innerHTML = `${this.img}`;
    text.innerHTML = `${total} / ${questions.length}`;
    score.innerHTML = `${this.text}`;
  }
},

{
  img: "<img src='img/mickey.png'>",
  text: "բավականին լավ գիտելիքներ ունեք։",
  sound: mickey,
  info: function() {
    this.sound.play();
    imgScore.innerHTML = `${this.img}`;
    text.innerHTML = `${total} / ${questions.length}`;
    score.innerHTML = `${this.text}`;
  }
},

{
  img: "<img src='img/goofy.png'>",
  text: "Ուղղակի հրաշալի գիտելիքներ ունեք։",
  sound: goofy,
  info: function() {
    this.sound.play();
    imgScore.innerHTML = `${this.img}`;
    text.innerHTML = `${total} / ${questions.length}`;
    score.innerHTML = `${this.text}`;
  }
},

];

function showResult() {
  if(total <= 5) {
    imgMessage[0].info();
  } else if(total > 5 && total < 10) {
    imgMessage[1].info();
  } else if(total > 10) {
    imgMessage[2].info();
  }
  load.style.display = "none";
  document.body.style.backgroundColor = "darkslategrey";
}

