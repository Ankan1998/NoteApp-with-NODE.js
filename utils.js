const fs = require('fs');

const similarity = function(note,titlex){
    return note.title==titlex
};

const loadNote = function(){
    try{
        const loadedBuffer = fs.readFileSync('notes.json');
        const dataJSON = JSON.parse(loadedBuffer.toString());
        return dataJSON
    } catch(e) {
        return []
    }
};

const saveNote = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
};

module.exports = {
    similarity:similarity,
    loadnote:loadNote,
    savenote: saveNote
};