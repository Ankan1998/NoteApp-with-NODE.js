const fs = require('fs');
const utils = require('./utils.js');
const chalk = require('chalk');

const removeNote = function(title){
    notes = utils.loadnote();
    const matched_element = notes.findIndex(function (note) {
        return utils.similarity(note, title)
    });
    if(matched_element>-1){
        notes.splice(matched_element,1);
        utils.savenote(notes);
        console.log(chalk.black.bgGreen.bold("Note Deleted with title " + title ));
    } else {
        console.log(chalk.bgRed.bold("Note doesn't exist"));
    }

}

module.exports = {
    removenote: removeNote
}