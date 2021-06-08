const router = require('express').Router();
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not written correctly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(req.body);
    }
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const updatedNotesArray = deleteNote(noteId, notes);
    res.json(updatedNotesArray);
});

module.exports  = router;