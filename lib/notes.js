const fs = require("fs");
const path = require("path");
const uniqid = require('uniqid');


function createNewNote(body, notesArray) {
    const note = body;
    note.id = uniqid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}


function deleteNote(id, notesArray) {
    const updatedNotesArray = notesArray.filter((note) => {
        return note.id !== id
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updatedNotesArray }, null, 2)
    );
    return updatedNotesArray;
}

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};