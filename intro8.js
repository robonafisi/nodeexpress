//Async Fs module
const {readFile, writeFile} = require('fs');

readFile('./content/subfolder/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const first = result
        writeFile('./content/result-sync.txt', 
        'Strangest text ever', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }   
        console.log(result);
        })
    })
})