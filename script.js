



// JS code --------------------------------------------------------------------- 1 start
function toggleSecondOwnerFields(selection) {
    var secondOwnerFields = document.getElementById('second_owner_fields');
    secondOwnerFields.style.display = selection === 'YES' ? 'block' : 'none';

    var buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.toggle('selected', button.innerText === selection);
        if (button.innerText === selection) sendDataToBackend(selection);
    });
}

function sendDataToBackend(selection) {
    var url = 'https://example.com/api/submitData';
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({selection})
    })
    .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
    .then(data => console.log('Response from backend:', data))
    .catch(error => console.error('Problem with fetch operation:', error));
}

// JS code - 1 end 




// Js code --------------------------------------------------------------------- 2 start
function toggleSelection(selectedButton) {
    var buttons = document.querySelectorAll('.custom-button');
    buttons.forEach((button, index) => button.classList.toggle('selected', index + 1 === selectedButton));
}
// Js code - 2 end




// js code ---------------------------------------------------------------------- 3 start
document.getElementById('selectIssue').addEventListener('change', function() {
    var selectElement = this;
    var otherTextBox = document.getElementById('otherTextBox');
    otherTextBox.style.display = (selectElement.value === 'Other Job Related Overhead' || selectElement.value === 'Other issue') ? 'block' : 'none';
    if (otherTextBox.style.display === 'block') otherTextBox.focus();
    else otherTextBox.value = ''; // Clear the text box if it was previously filled
});
// js code - 3 end