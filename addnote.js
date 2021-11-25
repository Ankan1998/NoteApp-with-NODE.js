const fs = require('fs');

const addNote = function(title, body){
    notes = loadNote();
    notes.push(
        {
            title:title,
            body:body
        }
    );
    saveNote(notes);

};

const saveNote = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
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

module.exports = {
    addnote: addNote
}