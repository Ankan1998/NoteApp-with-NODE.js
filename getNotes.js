const utils = require('./utils.js');
const chalk = require('chalk');

const getAllNotes = function(){
    console.log(chalk.black.bgGreen.bold("Your Notes"));
    notes = utils.loadnote();
    notes.forEach(element => {
        console.log(element.title);
    });
}

module.exports = {
    getallnotes: getAllNotes
}