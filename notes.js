const fs = require('fs')
const chalk = require('chalk')




const addNotes = (title,body) => {
    const notes = loadNotes() // check if there is notes like that
    const duplicateNote = notes.find( (notes) => notes.title === title ) // find() - if true it does not check the remaining values

    if(!duplicateNote){ // when duplicateNote is undifind it is true
        notes.push({  // create note by useing the push command 
            title: title,
            body: body
        })
    
        saveNotes(notes)  //save  this notes
        console.log(chalk.green("new note added!"))

        }else{  
            console.log(chalk.red("the Title is taken already! try another one."))
        }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) //Convert a JavaScript object into a string with JSON.stringify().
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)   //return it as an a object
    }
    catch(e){   //if doesnt exist so it return empty Array
      return[]
    }
}

const removeNotes = (title) => {    
        const notes = loadNotes() // check if there is note with this title

        const notesToKeep = notes.filter( (notes) => notes.title !== title) // if it is true so save it in notesToKeep.!

        if(notes.length!== notesToKeep.length){
            console.log(chalk.green("Note removed!"))
        }else{
            console.log(chalk.red("No note found!"))
        }
        
        
       
        saveNotes(notesToKeep)
}

const listNotes = () => {
   const notes = loadNotes()  
   console.log(chalk.bold.blue("Your notes"))
   notes.forEach(note => { 
       console.log(note.title)
   }); 
}

const readNote = (title) => {
    const notes = loadNotes()  

    const noteToRead = notes.find((note) => note.title===title)
    
    if(noteToRead){
        console.log(chalk.underline(noteToRead.title))
        console.log(noteToRead.body) 
    }
    else{ console.log(chalk.red("no note found!"))}

    
    

}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}