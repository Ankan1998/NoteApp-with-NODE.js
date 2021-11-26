const utils = require('./utils.js');
const chalk = require('chalk');

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
        console.log(chalk.black.bgGreen.bold("Note Added"));
    } else {
        console.log(chalk.bgRed.bold("Note Exist"));
    }

    utils.savenote(notes);

};



module.exports = {
    addnote: addNote
}