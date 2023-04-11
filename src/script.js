window.onload = function() {
    const moveButton = document.getElementById('move-stars');
    const starsContainer = document.querySelector('.stars');
    moveButton.addEventListener('click', function() {
      starsContainer.classList.add('move');
    });
  }

  