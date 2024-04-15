// three buttons yes no unknown
function selectButton(selection) {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
      button.classList.remove('selected');
      if (button.innerText === selection) {
        button.classList.add('selected');
        sendDataToBackend(selection);
      }
    });
  }

  function sendDataToBackend(selection) {
    // Replace the URL with your backend API endpoint
    var url = 'https://example.com/api/submitData';
    var data = { selection: selection };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from backend:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }