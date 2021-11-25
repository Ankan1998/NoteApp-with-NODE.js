const fs = require('fs');

const loadNote = function(){
    try{
        const loadedBuffer = fs.readFileSync('notes.json');
        const dataJSON = JSON.parse(loadedBuffer.toString());
        return dataJSON
    } catch(e) {
        return []
    }
}