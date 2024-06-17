document.addEventListener('DOMContentLoaded', function() {
  
    
    
    
    
    const balloonImg = document.getElementById('balloon-img');
    const clickCount = document.getElementById('clicks');
    const timerDisplay = document.getElementById('time');
    const container = document.getElementById('container');
    const popSound = document.getElementById('pop-sound'); 
    let clicks = 0;
    let balloonSize = 500; 
    let timer = 0;
    let intervalId = null;
    let gameStarted = false;
  
   
   
   
   
   
    // Function to handle balloon click
    
    function handleClick() {
      if (!gameStarted) {
        startGame();
      }
      clicks++;
      clickCount.textContent = clicks;
      balloonSize += 10; // Increase balloon size by 10px per click
      balloonImg.style.width = `${balloonSize}px`;
  
      
      if (balloonSize >= 800) {
        endGame();
      }
    }
  
   
    // Function to start the game
    function startGame() {
      gameStarted = true;
      startTimer();
    }
  
   
   
    // Function to start the timer
   
   
    function startTimer() {
      intervalId = setInterval(function() {
        timer++;
        timerDisplay.textContent = timer;
      }, 1000); 
    }
  
   
   
    // Function to end the game
    function endGame() {
      clearInterval(intervalId); 
      container.classList.add('game-over');
      showPopImage();
      playPopSound(); // Play pop sound effect
      setTimeout(showCongratulation, 500); // Shows congratulatory message after 0.5 seconds
      setTimeout(restartGame, 2500); // Restarts the game after 2.5 seconds
    }
  
    // Function to play popping sound
    //adding the popping sound favourite was a design desicion that was necressy as balloons do make a popping sound when that pop.
    
    
    function playPopSound() {
      popSound.currentTime = 0; 
      popSound.play();
    }
    
    
    
    // Function to show balloon pop image
    function showPopImage() {
      balloonImg.src = 'balloon-pop.png'; // Change to a pop image, was orinigally going to leave it with just the message, felt design wise it was nessacery to add a pop image to add more character to the simple game. 
      balloonImg.alt = 'Balloon Pop';
      balloonImg.style.width = '500px'; 
    }
  
   
    // Function to display congratulatory message
   
   // the congratulatory message is displayed using the alert function after the balloon has been "popped". By adding the congratultory message it give's users explicit acknowledgment creating satisfaction and encouraging reply.


    function showCongratulation() {
      const message = `Congratulations! You popped the balloon in ${clicks} clicks and ${timer} seconds.`;
      alert(message);
    }
  
   
   
    // Function to restart the game
   
   
   
    function restartGame() {
      clicks = 0;
      balloonSize = 500;
      timer = 0;
      clickCount.textContent = clicks;
      timerDisplay.textContent = timer;
      balloonImg.src = 'balloon.png';
      balloonImg.alt = 'Balloon';
      balloonImg.style.width = '500px'; 
      container.classList.remove('game-over');
      gameStarted = false;
    }
  
    
    
    
    
    // Event listener for balloon click
    balloonImg.addEventListener('click', handleClick);
  });