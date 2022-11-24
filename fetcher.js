///TERMINAL INPUT: node fetcher.js http://www.example.edu/ ./index.html

const URL = process.argv[2];  // Grab varaibles: Index 0 = website, index 1 = filepath
const filePath = process.argv[3];
const fs = require('fs');
const request = require('request');
//downloading website



request(URL, (error, response, body) => {
  let data = error + response + body;
    
  fs.writeFile(filePath, data, (err) => {
      
    if (err)
      console.log(err);
  
    else {
      fs.readFile(filePath, 'utf8', (error, data) => {
        if (!error) {
          console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
        }
      });
    }
  });
});




//  OUTPUT: Downloaded and saved 1275 bytes to ./index.html


// const fileSize = function(input) {
//   let stats = fs.stat(filename);
//   let fileSizeBytes = stats.size;
//   return fileSizeBytes;
// };


// Take above data and write to a file .txt
// How to write to file and where to put it


// how to get size of file//


// return size of file + file location (paramater above)

// const fs = require('fs');
// fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // CHANGE: Pass data into callback instead of returning it directly
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });


  
//   const fs = require('fs');
  
// let data = "This is a file containing a collection of books.";
  
// fs.writeFile("books.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFileSync("books.txt", "utf8"));
//   }
// });