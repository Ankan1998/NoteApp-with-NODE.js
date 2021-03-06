const yargs = require('yargs');
const noteAdder = require('./addnote.js');
const noteremover = require('./removeNote.js');
const getNotes = require('./getNotes.js');
// Customize yargs
yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Content of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        noteAdder.addnote(yargs.argv.title, yargs.argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Delete a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(){
        noteremover.removenote(yargs.argv.title);
    }
});

yargs.command({
    command: 'getAllNotes',
    describe: 'Show all Notes',
    handler: function(){
        getNotes.getallnotes();
    }
});

yargs.command({
    command: 'getNote',
    describe: 'Get a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(){
        getNotes.getnote(yargs.argv.title);
    }
});
yargs.parse();