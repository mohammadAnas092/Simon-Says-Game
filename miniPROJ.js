// 1. I create a simple Simon Says game using JavaScript.
// 2. The game should have a sequence of colors that the user has to repeat.
// 3. The user should be able to click on the colors to repeat the sequence.
// 4. The game should keep track of the user's score or level in which they are and display it on the screen.
// 5. The game should start by pressing any key from the keyboard that resets the game and starts a new sequence.
// 6. The game should end when the user clicks on the wrong color or presses the wrong key.
// 7. The game should display a message when the game is over, including the user's level.
// 8. The game should have a simple and clean design, with colors that are easy to distinguish.
// 9. The game should be easy to play and understand, with clear instructions on how to play.
// 10. The game should be optimized for performance and load quickly.
// 11. The game should be compatible with all modern browsers.
// 12. The game should be modular and organized, with separate files for HTML, CSS, and JavaScript.
// 13. The game should use best practices for coding and follow industry standards.
// 14. The game should be visually appealing, with a clean and modern design.
// 15. The game should be fun and engaging, with a challenging but achievable level of difficulty.
// 16. The game should be a good example of how to use JavaScript to create interactive web applications.

//Simon says Game

//Initialization

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//adding event listener to the document
//when any key is pressed, the game starts
//and the level is increased
//and the sequence is generated

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
})


// function for pop up color when game start

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// function for pop up color when user enter

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// function for increasing level

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); //Adding color in the game sequence
    console.log(gameSeq);
    gameFlash(randBtn); //random btn choose
}

// function for checking the answer for user and game sequence
// if the user sequence is equal to the game sequence
// then the user is correct and the game continues
// if the user sequence is not equal to the game sequence
// then the user is wrong and the game is over
// and the game is reset

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over!Your score was <b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },250)
        reset();
    }
}

// function for adding event listener to the buttons
// when the user clicks on the button
// the user color is added to the user sequence
// and the user color is checked with the game sequence
// if the user color is equal to the game color
// then the user is correct and the game continues

function btnPress() {
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id")
    userSeq.push(usercolor);

    checkAns(userSeq.length - 1)
}

// loop for adding event listener to all the buttons

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}



// function for resetting the game
// when the game is over

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


