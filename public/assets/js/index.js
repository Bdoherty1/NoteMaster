// Define DOM elements
const noteForm = document.querySelector('.note-form');
const listContainer = document.getElementById('list-container');

// Function to create a new note card
const createCard = (note) => {
  // Create card container
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'bg-light', 'p-2');
  cardBody.innerHTML = `
    <h5 class="card-title">${note.title}</h5>
    <p class="card-text">${note.text}</p>
  `;
  
  // Append body to card
  card.appendChild(cardBody);
  
  // Append card to list container
  listContainer.appendChild(card);
};

// Function to fetch notes from the server
const getNotes = () => {
  fetch('/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(notes => notes.forEach(note => createCard(note)))
  .catch(error => console.error('Error:', error));
};

// Function to post a new note to the server
const postNote = (note) => {
  fetch('/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
  .then(response => response.json())
  .then(data => {
    alert(data);
    createCard(note);
  })
  .catch(error => console.error('Error:', error));
};

// Event listener for form submission
noteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('note-title').value;
  const text = document.getElementById('note-text').value;
  const newNote = {
    title: title,
    text: text,
  };
  postNote(newNote);
});

// Fetch notes when the page loads
window.addEventListener('load', () => {
  getNotes();
});
