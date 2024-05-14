document.addEventListener("DOMContentLoaded", function() {
    const words = [
        { word: "hangman", hint: "A game to guess words" },
        { word: "javascript", hint: "A programming language for web development" },
        { word: "openai", hint: "An artificial intelligence research lab" }
    ];

    let selectedWord, hint, remainingAttempts, guessedLetters, canvas, ctx;

    const wordDisplay = document.getElementById("word-display");
    const hintDisplay = document.getElementById("hint");
    const messageDisplay = document.getElementById("message");
    const keyboard = document.getElementById("keyboard");

    function init() {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        hint = selectedWord.hint;
        remainingAttempts = 6;
        guessedLetters = new Set();
        canvas = document.getElementById("hangman-canvas");
        ctx = canvas.getContext("2d");

        displayWord();
        displayHint();
        drawHangman();
        displayKeyboard();

        messageDisplay.innerText = "";
    }

    function displayWord() {
        const wordArray = selectedWord.word.split("");
        const wordHTML = wordArray.map(letter => {
            if (guessedLetters.has(letter)) {
                return letter;
            } else {
                return "_";
            }
        }).join(" ");

        wordDisplay.innerText = wordHTML;
    }

    function displayHint() {
        hintDisplay.innerText = `Hint: ${hint}`;
    }

    function drawHangman() {
        // Draw hangman based on remaining attempts
        // Implement your drawing logic here
    }

    function displayKeyboard() {
        keyboard.innerHTML = "";
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i);
            const button = document.createElement("button");
            button.textContent = letter;
            button.classList.add("button");
            button.addEventListener("click", () => handleGuess(letter));
            keyboard.appendChild(button);
        }
    }

    function handleGuess(letter) {
        if (!guessedLetters.has(letter)) {
            guessedLetters.add(letter);
            if (!selectedWord.word.includes(letter)) {
                remainingAttempts--;
                drawHangman();
            }
            displayWord();
            checkGameStatus();
        }
    }

    function checkGameStatus() {
        if (remainingAttempts === 0) {
            messageDisplay.innerText = "You lose! The word was: " + selectedWord.word;
        } else if (!wordDisplay.innerText.includes("_")) {
            messageDisplay.innerText = "Congratulations! You win!";
        }
    }

    init();
});
