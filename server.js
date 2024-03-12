const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dbFilePath = path.join(__dirname, 'db.json');

const readNotes = () => {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
};

const writeNotes = (notes) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(notes), 'utf8');
};

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = readNotes();
    newNote.id = uuidv4();
    notes.push(newNote);
    writeNotes(notes);
    res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = readNotes();
    const updatedNotes = notes.filter(note => note.id !== noteId);
    writeNotes(updatedNotes);
    res.json({ message: 'Note deleted successfully' });
});

app.put('/api/notes/:id', (req, res) => {
    const updatedNote = req.body;
    const noteId = req.params.id;
    const notes = readNotes();
    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
        notes[noteIndex] = { ...updatedNote, id: noteId };
        writeNotes(notes);
        res.json({ message: 'Note updated successfully' });
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.get('/api/notes/active', (req, res) => {
    // Logic to get the active note
});

app.put('/api/notes/active', (req, res) => {
    // Logic to update the active note
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});