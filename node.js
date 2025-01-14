

const fs = require('fs');

fs.writeFile('newFile.txt', 'Hello world!', function (err) {
    if (err);
    console.log('Saved!');
  });

  fs.readFile('newFile.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('File content:', data);
});


  

