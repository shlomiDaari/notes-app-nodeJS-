const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//add,remove,read,list



//create add command 
yargs.command({
command: 'add',
describe: 'add a new note',
builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe: 'note body',
        demandOption: true,
        type: 'string'

    }
 
},
handler(argv){
   notes.addNotes(argv.title, argv.body)
}

}).argv;

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title to remove',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }


})

//create list command 
yargs.command({
    command: 'list',
    describe: 'crate a list',
    handler(){
        notes.listNotes()
    }

})

//create a read function
yargs.command({
    command: 'read',
    describe: 'read from a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'String'
        }
        

    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.argv;




 





