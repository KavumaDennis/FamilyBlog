const fs = require('fs');

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log("There was an error creating directory");
        }
        console.log("Folder has been created successfully")
        fs.writeFile('./assets/name.txt', 'Kavuma Dennis Yona', (err) => {
            if(err){
                console.log('An error occurred while writing to the file');
            }
        });
    })
}else{
   if(fs.existsSync('./assets/name.txt')){
    fs.unlink('./assets/name.txt', (err) => {
        console.log(err)
    })
   }

    fs.rmdir('./assets', (err) => {
        console.log(err)
       });
       console.log("Folder has been deleted")
}