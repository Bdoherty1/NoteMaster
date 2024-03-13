// Function to handle saving a new note
const saveNote = () => {
    // Get the title and text of the note from the input fields
    const title = document.getElementById('note-title').value;
    const text = document.getElementById('note-text').value;
  
    // Create a data object to send to the server
    const data = { title, text };
  
    // Make a POST request to the server to save the new note
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(hello);
        alert(result);
        // Optionally, you can reload the page to see the updated list of notes
        // window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Display an error message to the user
        alert('An error occurred. Please try again.');
      });
  };
  
  // Function to clear the form fields
  const clearForm = () => {
    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
  };
  
  // Add event listeners to the buttons
  document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the Save Note button
    document.getElementById('save-note').addEventListener('click', saveNote);
    // Add event listener for the Clear Form button
    document.getElementById('clear-btn').addEventListener('click', clearForm);
  });