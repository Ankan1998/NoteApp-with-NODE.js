const yargs = require('yargs');
const noteAdder = require('./addnote.js');
const noteremover = require('./removeNote.js');
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
yargs.parse();