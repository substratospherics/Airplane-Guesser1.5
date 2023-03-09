// Variables
let answer2;
let answer3;
let answer4;
let ranArray = [0, 1, 2, 3];
let currentNum = 75;
let time = 20;
let hearts = 3;
let timer;
let timesRan = 0;
let onQuestion = 1;
let fiftyUsed = false;
let questionsCorrect = 0;
let goDownBy;
let currentTime;
const settingsDOM = document.getElementById("settings")
const settings = document.getElementById("settings-btn");
const statistics = document.getElementById("statistics-btn");
const statEl = document.getElementById("stats");
const resetFifty = document.getElementById("resetFifty");
const restartScreenEl = document.getElementById("restart");
const questionEl = document.getElementById("question");
const timeEl = document.getElementById("time");
const heartEl = document.getElementById("hearts");
const line = document.getElementById("line");
const answerChoices = document.getElementsByClassName("answer");
const answerInner = document.getElementsByClassName("answerChoices");
const startDOM = document.getElementById("start");
const gameDOM = document.getElementById("game");
const startBtn = document.getElementById("start-btn");
const imgEl = document.getElementById("img2");
const availableAnswers = [
  "Boeing 707",
  "Boeing 717",
  "Boeing 727-100",
  "Boeing 727-200",
  "Boeing 737-600",
  "Boeing 737-700ER",
  "Boeing 737-800",
  "Boeing 737-900ER",
  "Boeing 747-100",
  "Boeing 747-200",
  "Boeing 747-300",
  "Boeing 747-400",
  "Boeing 747-8",
  "Boeing 757-200",
  "Boeing 757-300",
  "Boeing 767-200",
  "Boeing 767-300",
  "Boeing 767-400",
  "Boeing 777-200",
  "Boeing 777-200ER",
  "Boeing 777-200LR",
  "Boeing 777-300",
  "Boeing 777-300ER",
  "Boeing 777-8",
  "Boeing 777-9",
  "Boeing 787-8",
  "Boeing 787-9",
  "Boeing 787-10",
  "Airbus A220-100",
  "Airbus A220-300",
  "Airbus A310-200",
  "Airbus A310-300",
  "Airbus A318-100",
  "Airbus A319-100",
  "Airbus A319neo",
  "Airbus A320-100",
  "Airbus A320-200",
  "Airbus A320neo",
  "Airbus A321-100",
  "Airbus A321-200",
  "Airbus A321neo",
  "Airbus A330-200",
  "Airbus A330-300",
  "Airbus A330-800neo",
  "Airbus A330-900neo",
  "Airbus A340-200",
  "Airbus A340-300",
  "Airbus A340-500",
  "Airbus A340-600",
  "Airbus A350-900",
  "Airbus A350-1000",
  "Airbus A380-800",
];
const boeingPlanes = {
  "737-800": {
    img: "https://cdn.airlines-inform.ru/upload/iblock/7de/Boeing-737-800.jpg",
    airplaneType: "Boeing 737-800",
    alreadyUsed: false,
  },
  707: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Boeing_707-138B_Qantas_Jett_Clipper_Ella_N707JT.jpg/1200px-Boeing_707-138B_Qantas_Jett_Clipper_Ella_N707JT.jpg",
    airplaneType: "Boeing 707",
    alreadyUsed: false,
  },
  717: {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Delta_Air_Lines_Boeing_717-2BD_N966AT.jpg",
    airplaneType: "Boeing 717",
    alreadyUsed: false,
  },
  "737-600": {
    img: "https://cdn.airlines-inform.ru/upload/iblock/c63/Boeing-737-600.JPG",
    airplaneType: "Boeing 737-600",
    alreadyUsed: false,
  },
  "737-900ER": {
    img: "https://airwaysmag.com/wp-content/uploads/2022/07/AW_Michael-Rodeback-6.jpg",
    airplaneType: "Boeing 737-900ER",
    alreadyUsed: false,
  },
  "747-200": {
    img: "https://aeropedia.com.au/wp-content/uploads/2019/05/Boeing-747-200_Aeropedia-The-Encyclopedia-of-Aircraft.jpg",
    airplaneType: "Boeing 747-200",
    alreadyUsed: false,
  },
  "747-8": {
    img: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2022/08/Lufthansa-Boeing-747-8-Business-Class.jpeg?fit=3600%2C2025&ssl=1",
    airplaneType: "Boeing 747-8",
    alreadyUsed: false,
  },
};
const airbusPlanes = {
  "A320-200": {
    img: "https://static.vecdn.net/images/aircraft/airbus-a320-200/aircraft.jpg",
    airplaneType: "Airbus A320-200",
    alreadyUsed: false,
  },
  A320neo: {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/IndiGo_Airbus_A320neo_F-WWDG_%28to_VT-ITI%29_%2828915135713%29.jpg",
    airplaneType: "Airbus A320neo",
    alreadyUsed: false,
  },
  "A321-100": {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Airbus_A321-100_%28D-AIRT%29_01.jpg/2560px-Airbus_A321-100_%28D-AIRT%29_01.jpg",
    airplaneType: "Airbus A321-100",
    alreadyUsed: false,
  },
  A321neo: {
    img: "https://mediaassets.airbus.com/permalinks/522397/wpr/a321neo-acf-roll-out.jpg",
    airplaneType: "Airbus A321neo",
    alreadyUsed: false,
  },
  "A330-300": {
    img: "https://cdn.businesstraveller.com/wp-content/uploads/2016/11/KLM-A330-200-ext-e1479486019250.jpg",
    airplaneType: "Airbus A330-300",
    alreadyUsed: false,
  },
  "A340-200": {
    img: "https://cdn.airlines-inform.ru/upload/iblock/d63/Airbus-A340-200.JPG",
    airplaneType: "Airbus A340-200",
    alreadyUsed: false,
  },
  "A350-1000": {
    img: "https://i.insider.com/624749dce22adb0018d1a9c1?width=1000&format=jpeg&auto=webp",
    airplaneType: "Airbus A350-1000",
    alreadyUsed: false,
  },
  "A380-800": {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg",
    airplaneType: "Airbus A380-800",
    alreadyUsed: false,
  },
};
const currentBoeing = Object.values(boeingPlanes);
const currentAirbus = Object.values(airbusPlanes);
const availablePlanes = currentBoeing.concat(currentAirbus);

// Event Listeners
startBtn.addEventListener("click", renderGame);
statistics.addEventListener("click", renderStats);
settings.addEventListener("click", renderSettings);
// Functions
function renderGame() {
  resetFifty.innerHTML = `
  <button type="button" id="fifty">50/50</button>
  `;
  heartEl.textContent = `❤️ 3`;
  questionEl.textContent = "1 / 10";
  line.style.width = "75vw";
  checkTime();
  if (currentTime < 10) {
    timeEl.textContent = `00:0${currentTime}`;
  } else {
    timeEl.textContent = `00:${currentTime}`;
  }
  let ranNumber = getRandomNumber();
  startDOM.style.display = "none";
  gameDOM.style.display = "block";
  imgEl.style.visibility = "hidden";
  showQuestion(ranNumber);
}

function checkTime() {
  let mode;
  if (localStorage.getItem('mode') !== null) {
    mode = (localStorage.getItem('mode'));
  } else {
    mode = "easy";
  }

  switch (true) {
    case mode === "easy":
      time = 20;
      currentTime = 20;
      goDownBy = 3.75;
      break;
    case mode === "medium":
      time = 10;
      currentTime = 10;
      goDownBy = 7.5;
      break;
    case mode === "hard":
      time = 5;
      currentTime = 5;
      goDownBy = 15;
      break;
  }
}

function getRandomNumber() {
  let ranNumber;
  do {
    ranNumber = Math.floor(Math.random() * availablePlanes.length);
  } while (availablePlanes[ranNumber].alreadyUsed === true);
  return ranNumber;
}

function showQuestion(ranNumber) {
  if (timesRan > 0) {
    onQuestion++;
    questionEl.textContent = `${onQuestion} / 10`;
  }
  timesRan++;
  availablePlanes[ranNumber].alreadyUsed = true;
  let img = availablePlanes[ranNumber].img;
  imgEl.src = `${img}`;
  imgEl.onload = function () {
    imgEl.style.visibility = "visible";
  };
  displayAnswers(ranNumber);
}

function displayAnswers(ranNumber) {
  let plane = availablePlanes[ranNumber].airplaneType;
  let rightAnswer = plane;
  answer2 = getAnswers(plane);
  answer3 = getAnswers(plane);
  answer4 = getAnswers(plane);
  let newArray = shuffleArray(ranArray);
  answerInner[0].innerHTML = `
    <button type="button" class="right answer">Answer Choice</button>
    <button type="button" class="answer">Answer Choice</button>
  `;
  answerInner[1].innerHTML = `
  <button type="button" class="right answer">Answer Choice</button>
  <button type="button" class="answer">Answer Choice</button>
`;
  answerChoices[newArray[0]].textContent = rightAnswer;
  answerChoices[newArray[1]].textContent = answer2;
  answerChoices[newArray[2]].textContent = answer3;
  answerChoices[newArray[3]].textContent = answer4;
  for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].style.pointerEvents = "auto";
  }
  let fifty = document.getElementById("fifty");
  if (fiftyUsed === false) {
    fifty.style.pointerEvents = "auto";
  }
  answerChoices[0].addEventListener("click", function () {
    checkAnswer(0, rightAnswer);
  });
  answerChoices[1].addEventListener("click", function () {
    checkAnswer(1, rightAnswer);
  });
  answerChoices[2].addEventListener("click", function () {
    checkAnswer(2, rightAnswer);
  });
  answerChoices[3].addEventListener("click", function () {
    checkAnswer(3, rightAnswer);
  });
  fifty.addEventListener("click", function () {
    removeTwo(rightAnswer);
  });
  timer = setInterval(displayLess, 1000);
}

function displayLess() {
  time--;
  if (time < 10) {
    timeEl.textContent = `00:0${time}`;
  } else {
    timeEl.textContent = `00:${time}`;
  }
  line.style.width = `${currentNum - goDownBy}vw`;
  currentNum -= goDownBy;
  if (time === 0) {
    hearts--;
    if (hearts > 0) {
      clearInterval(timer);
      heartEl.textContent = `❤️ ${hearts}`;
      let ranNumber = getRandomNumber();
      time = currentTime;
      if (currentTime < 10) {
        timeEl.textContent = `00:0${currentTime}`;
      } else {
        timeEl.textContent = `00:${currentTime}`;
      }
      currentNum = 75;
      line.style.width = `${currentNum}vw`;
      showQuestion(ranNumber);
    } else {
      clearInterval(timer);
      heartEl.textContent = `❤️ ${hearts}`;
      fifty.style.pointerEvents = "none";
      for (let i = 0; i < answerChoices.length; i++) {
        answerChoices[i].style.pointerEvents = "none";
      }
      setTimeout(function() {
        restartScreen();
      }, 2000);
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getAnswers(plane) {
  let answer;
  do {
    let ranNumber = Math.floor(Math.random() * availableAnswers.length);
    answer = availableAnswers[ranNumber];
  } while (
    answer === plane ||
    answer === answer2 ||
    answer === answer3 ||
    answer === answer4
  );
  return answer;
}

function checkAnswer(number, rightAnswer) {
  let fifty = document.getElementById("fifty");
  clearInterval(timer);
  for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].style.pointerEvents = "none";
  }
  fifty.style.pointerEvents = "none";
  if (answerChoices[number].textContent === rightAnswer) {
    answerChoices[number].style.background = "#84cf6b";
    questionsCorrect++;
    if (onQuestion === 10) {
      setTimeout(function() {
        restartScreen();
      }, 2000)
    }
  } else {
    hearts--;
    heartEl.textContent = `❤️ ${hearts}`;
    if (hearts < 1) {
        answerChoices[number].style.background = "#d64a31"
        setTimeout(function() {
            restartScreen();
        }, 2000)
    } else {
        answerChoices[number].style.background = "#d64a31";
        switch (true) {
          case answerChoices[0].textContent === rightAnswer:
            answerChoices[0].style.background = "#84cf6b";
            break;
          case answerChoices[1].textContent === rightAnswer:
            answerChoices[1].style.background = "#84cf6b";
            break;
          case answerChoices[2].textContent === rightAnswer:
            answerChoices[2].style.background = "#84cf6b";
            break;
          case answerChoices[3].textContent === rightAnswer:
            answerChoices[3].style.background = "#84cf6b";
            break;
        }
        if (onQuestion === 10) {
          setTimeout(function() {
            restartScreen();
          }, 2000)
        }
    }
  }

  if (hearts >= 1 && onQuestion !== 10) {
    setTimeout(function () {
        let ranNumber = getRandomNumber();
        time = currentTime;
        timeEl.textContent = `00:${time}`;
        currentNum = 75;
        line.style.width = `${currentNum}vw`;
        showQuestion(ranNumber);
      }, 2000);
  }
}

function removeTwo(rightAnswer) {
  let fifty = document.getElementById("fifty");
  fiftyUsed = true;
  fifty.style.background = "#121111";
  switch (true) {
    case answerChoices[0].textContent === rightAnswer:
      let deleteOne = Math.floor(Math.random() * 3) + 1;
      let deleteTwo;
      do {
        deleteTwo = Math.floor(Math.random() * 3) + 1;
      } while (deleteTwo === deleteOne);
      answerChoices[deleteOne].style.background = "#121111";
      answerChoices[deleteTwo].style.background = "#121111";
      answerChoices[deleteOne].style.pointerEvents = "none";
      answerChoices[deleteTwo].style.pointerEvents = "none";
      break;
    case answerChoices[1].textContent === rightAnswer:
      const allowedNums = [0, 2, 3];
      let deleteThree =
        allowedNums[Math.floor(Math.random() * allowedNums.length)];
      let deleteFour;
      do {
        deleteFour =
          allowedNums[Math.floor(Math.random() * allowedNums.length)];
      } while (deleteThree === deleteFour);
      answerChoices[deleteThree].style.background = "#121111";
      answerChoices[deleteFour].style.background = "#121111";
      answerChoices[deleteThree].style.pointerEvents = "none";
      answerChoices[deleteFour].style.pointerEvents = "none";
      break;
    case answerChoices[2].textContent === rightAnswer:
      const allowedNums2 = [0, 1, 3];
      let deleteFive =
        allowedNums2[Math.floor(Math.random() * allowedNums2.length)];
      let deleteSix;
      do {
        deleteSix =
          allowedNums2[Math.floor(Math.random() * allowedNums2.length)];
      } while (deleteFive === deleteSix);
      answerChoices[deleteFive].style.background = "#121111";
      answerChoices[deleteSix].style.background = "#121111";
      answerChoices[deleteFive].style.pointerEvents = "none";
      answerChoices[deleteSix].style.pointerEvents = "none";
      break;
    case answerChoices[3].textContent === rightAnswer:
      const allowedNums3 = [0, 1, 2];
      let deleteSeven =
        allowedNums3[Math.floor(Math.random() * allowedNums3.length)];
      let deleteEight;
      do {
        deleteEight =
          allowedNums3[Math.floor(Math.random() * allowedNums3.length)];
      } while (deleteSeven === deleteEight);
      answerChoices[deleteSeven].style.background = "#121111";
      answerChoices[deleteEight].style.background = "#121111";
      answerChoices[deleteSeven].style.pointerEvents = "none";
      answerChoices[deleteEight].style.pointerEvents = "none";
      break;
  }
  fifty.style.pointerEvents = "none";
}

function restartScreen() {
    if (localStorage.getItem('CorrectAnswers') !== null) {
        let myNumber = parseInt(localStorage.getItem('CorrectAnswers'));
        myNumber += questionsCorrect;
        localStorage.setItem('CorrectAnswers', myNumber);
      } else {
        localStorage.setItem("CorrectAnswers", questionsCorrect);
      }
  currentNum = 75;
  time = currentTime;
  hearts = 3;
  timesRan = 0;
  onQuestion = 1;
  fiftyUsed = false;
  for (let key in boeingPlanes) {
    if (typeof boeingPlanes[key] === "object") {
      boeingPlanes[key].alreadyUsed = "false";
    }
  }
  for (let key in airbusPlanes) {
    if (typeof airbusPlanes[key] === "object") {
      airbusPlanes[key].alreadyUsed = "false";
    }
  }
  gameDOM.style.display = "none";
  restartScreenEl.style.display = "block";
  restartScreenEl.style.display = "flex";
  restartScreenEl.innerHTML = `
  <h2>${questionsCorrect} Correct Answer(s):</h2>
  <button type="button" id="restartButton">RESTART</button>
  <button type="button" id="mainButton">BACK TO MAIN MENU</button>
  `;
  mainButton = document.getElementById("mainButton");
  mainButton.addEventListener("click", renderMain);
  restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", clearGame)
}

function clearGame() {
    questionsCorrect = 0;
    restartScreenEl.style.display = "none";
    renderGame();
}

// clears localStorage.clear();
function renderStats() {
    startDOM.style.display = "none";
    let allTime;
    if (localStorage.getItem('CorrectAnswers') !== null) {
        allTime = parseInt(localStorage.getItem('CorrectAnswers'));
      } else {
        allTime = 0;
      }
    statEl.innerHTML = `
    <h1>Number of All-Time Correct Answer(s): ${allTime}</h1>
    <button type="button" id="mainButton2">BACK TO MAIN MENU</button>
    `;
    mainButton2 = document.getElementById("mainButton2");
    statEl.style.display = "block";
    statEl.style.display = "flex";
    mainButton2.addEventListener("click", function() {
        statEl.style.display = "none";
        startDOM.style.display = "block";
        startDOM.style.display = "flex";
    });
}

function renderMain() {
    questionsCorrect = 0;
    restartScreenEl.style.display = "none";
    startDOM.style.display = "block";
    startDOM.style.display = "flex";
}

function renderSettings() {
  startDOM.style.display = "none";
  let mode;
  if (localStorage.getItem('mode') !== null) {
      mode = (localStorage.getItem('mode'));
    } else {
      mode = "easy";
    }
  settingsDOM.innerHTML = `
  <button type="button" id="hard">HARD</button>
  <button type="button" id="medium">MEDIUM</button>
  <button type="button" id="easy">EASY</button>
  <button type="button" id="mainButton3">BACK TO MENU</button>
  `;
  let mainButton3 = document.getElementById("mainButton3");
  let hard = document.getElementById("hard");
  let medium = document.getElementById("medium");
  let easy = document.getElementById("easy");
  checkColorForButtons(easy, medium, hard);
  settingsDOM.style.display = "block";
  settingsDOM.style.display = "flex";
  hard.addEventListener("click", function() {
    localStorage.setItem("mode", "hard");
    checkColorForButtons(easy, medium, hard);
  })
  medium.addEventListener("click", function() {
    localStorage.setItem("mode", "medium");
    checkColorForButtons(easy, medium, hard);
  })
  easy.addEventListener("click", function() {
    localStorage.setItem("mode", "easy");
    checkColorForButtons(easy, medium, hard);
  })
  mainButton3.addEventListener("click", function() {
      settingsDOM.style.display = "none";
      startDOM.style.display = "block";
      startDOM.style.display = "flex";
  });
}

function checkColorForButtons(easy, medium, hard) {
  let currentMode = localStorage.getItem("mode");
  switch (true) {
    case currentMode === "easy": 
      easy.style.background = "#84cf6b";
      medium.style.background = "#121111";
      hard.style.background = "#121111";
      break;
    case currentMode === "medium":
      medium.style.background = "#c3cf52";
      easy.style.background = "#121111";
      hard.style.background = "#121111";
      break;
    case currentMode === "hard":
      hard.style.background = "#d64a31";
      easy.style.background = "#121111";
      medium.style.background = "#121111";
      break;
  }
}
