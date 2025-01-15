
// const fs = require('fs');

// fs.writeFile('newFile.txt', 'Hello world!', function (err) {
//     if (err);
//         console.log('Saved!');
//   });

// fs.readFile('newFile.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.error(error);
//         return;
//     }
//     console.log('File content:', data);
// });






// //      CREATE OPERATION
// // 1. read data from file
// // 2. update data
// // 3. write data on the file

// import fs from 'fs';
// function createStudent(student) {
//     // 1
//     const json = fs.readFileSync('example.json', 'utf-8')
//     const data = JSON.parse(json);

//     // 2 
//     data.push(student);

//     // 3 
//     fs.writeFileSync('example.json', JSON.stringify(data))
// }
// createStudent({name : "bat", seatNumb    er : "2A"})




//     //DELETE OPERATION
// // 1. read data from file
// // 2. delete student from data
// // 3. write data to the file

// function deleteStudent(seatNumber){

//     // 1
//     const json = fs.readFileSync('example.json', 'utf-8');
//     const data = JSON.parse(json);

//     // 2 
//     const filteredData = data.filter(function(student){
//         return student.seatNumber != seatNumber
//     });

//     // 3
//     fs.writeFileSync('example.json', JSON.stringify(filteredData))

// }
// deleteStudent("1A")



//     //READ FUNCTION
// import fs from 'fs';
    
// function readStudents(){
// const json = fs.readFileSync('example.json', 'utf-8');
// const data = JSON.stringify(json)
// console.log(data);
// }
// readStudents()




    //UPDATE FUNCTION

import fs, { writeFileSync } from 'fs';

function updateStudents(id){

    const json = fs.readFileSync('example.json', 'utf-8');
    const data = JSON.parse(json);


}
updateStudents()

