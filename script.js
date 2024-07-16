function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let resultText = `You chose ${userChoice}, Computer chose ${computerChoice}. `;
    
    if (userChoice === computerChoice) {
        resultText += "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        resultText += "You win!";
    } else {
        resultText += "Computer wins!";
    }
    
    document.getElementById('result').innerText = resultText;
    document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
    document.getElementById('result').innerText = '';
    document.getElementById('play-again').style.display = 'none';
}
