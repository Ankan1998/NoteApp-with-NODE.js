const fs = require('fs');
const utils = require('./utils.js');

const addNote = function (title, body) {
    notes = utils.loadnote();
    const duplicate = notes.filter(function (note) {
        return utils.similarity(note, title)
    });
    if (duplicate.length == 0) {
        notes.push({
            title: title,
            body: body
        });
    } else {
        console.log("Note Exist");
    }

    saveNote(notes);

};

const saveNote = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
};


module.exports = {
    addnote: addNote
}