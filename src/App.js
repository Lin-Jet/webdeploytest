import React, { useEffect } from 'react';
import './App.css';
import Video from './Video';
import Links from './Links';
// import './script.js';
function App() {
  
  useEffect(() => {
    const audio = document.createElement('audio');
    audio.src = './breathing exercise.mp3';
    const button = document.querySelector('button');

    button.addEventListener('click', function() {
      audio.play();
    });



    const moveButton = document.getElementById('move-stars');
    const starsContainer = document.querySelector('.stars');
    const stars = document.querySelectorAll('.stars p');

    moveButton.addEventListener('click', function() {
      starsContainer.classList.add('move');
      setTimeout(function() {
        starsContainer.classList.remove('move');
      }, 100000); // 10000ms = 10s
    });
    stars.forEach(star => {
      star.style.setProperty('--x', `${Math.random() * 200}px`);
      star.style.setProperty('--y', `${Math.random() * 200}px`);
    });

  }, []);

  const startStarMovement = () => {
    const starsContainer = document.querySelector('.stars');
    starsContainer.classList.add('move');
  }

  const stopStarMovement = () => {
    const starsContainer = document.querySelector('.stars');
    starsContainer.classList.remove('move');
  }

  const handleButtonDown = () => {
    setTimeout(startStarMovement, 100000000);
  }

  const handleButtonUp = () => {
    stopStarMovement();
  }
  return (
    <div className="App">
      <Links />
      <Video />
      <button id="move-stars" onMouseDown={handleButtonDown} onMouseUp={handleButtonUp}>Breathing Exercises in a Room Full of Sharp Objects</button>
      
      <div className="stars">
      <p className="stars1">★</p>
      <p className="stars2">★</p>
      <p className="stars3">★</p>
      <p className="stars4">★</p>
      <p className="stars5">★</p>
      <p className="stars6">★</p>
      <p className="stars7">★</p>
      <p className="stars8">★</p>
      <p className="stars9">★</p>
      <p className="stars10">★</p>
      <p className="stars11">★</p>
      <p className="stars12">★</p>
      <p className="stars13">★</p>
      <p className="stars14">★</p>
      <p className="stars15">★</p>
      <p className="stars16">★</p>
      <p className="stars17">★</p>
      <p className="stars18">★</p>
      <p className="stars19">★</p>
      <p className="stars20">★</p>
      <p className="stars21">★</p>
      <p className="stars22">★</p>
      <p className="stars23">★</p>
      <p className="stars24">★</p>
      <p className="stars25">★</p>

      <audio src="./breathing exercise.mp3" id="audio" />
      </div>
    </div>
  );
}

export default App;
