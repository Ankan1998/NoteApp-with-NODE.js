const fs = require('fs');
const utils = require('./utils.js');
const removeNote = function(title){
    notes = utils.loadnote();
    const matched_element = notes.findIndex(function (note) {
        return utils.similarity(note, title)
    });
    notes.splice(matched_element,1);
    utils.savenote(notes);
}

module.exports = {
    removenote: removeNote
}