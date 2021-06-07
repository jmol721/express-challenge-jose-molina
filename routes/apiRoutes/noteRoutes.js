const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote, validateNote } = require('../../lib/notes');

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

module.exports  = router;