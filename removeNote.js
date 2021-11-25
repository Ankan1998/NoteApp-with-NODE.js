const fs = require('fs');
const utils = require('./utils.js');
const removeNote = function(title){
    notes = utils.loadnote();
    const matched_element = notes.findIndex(function (note) {
        return utils.similarity(note, title)
    });
    if(matched_element>-1){
        notes.splice(matched_element,1);
        utils.savenote(notes);
        console.log("deleted :" + title);
    } else {
        console.log("Note doesnt exist");
    }

}

module.exports = {
    removenote: removeNote
}