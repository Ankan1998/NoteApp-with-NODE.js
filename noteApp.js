const yargs = require('yargs');
const noteAdder = require('./addnote.js');
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
yargs.parse();