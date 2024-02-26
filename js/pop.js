window.addEventListener('load', function() {
    document.getElementById('popup-form').style.display = 'block'; // Show the popup
  
    document.querySelector('.close-button').addEventListener('click', function() {
      document.getElementById('popup-form').style.display = 'none'; // Hide the popup
    });
  });
  