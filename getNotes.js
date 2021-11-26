const utils = require('./utils.js');
const chalk = require('chalk');

const getAllNotes = function(){
    console.log(chalk.black.bgGreen.bold("Your Notes"));
    notes = utils.loadnote();
    notes.forEach(element => {
        console.log(element.title);
    });
}

const getNote = function(title){
    console.log(chalk.black.bgGreen.bold("Notes you Searched"));
    notes = utils.loadnote();
    const match = notes.filter(function (note) {
        return utils.similarity(note, title)
    });
    if(match.length == 1){
        console.log(match[0].title);
        console.log(match[0].body)
    } else {
        console.log(chalk.bgRed.bold("Notes not found")); 
    }
}

module.exports = {
    getallnotes: getAllNotes,
    getnote: getNote
}