// fetcher.js
const fs = require('fs');
const request = require('request');

// Take in Arguments
const args = process.argv.slice(2);

// a URL & local filepath
const URL = args[0];
const localPath = args[1];


request(`${URL}`, (error, response, body) => {
  let page = {error, response, body};

  fs.writeFile(`${localPath}`, page.body,(error) => {
    const fileSize = page.body.length;
    if (error) {
      console.log(`File write error!`);
      return;
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}.`);
  
  });
});




// ************************************
// METHOD WHERE I
// SPLIT UP THE REQUEST AND FILE WRITING
// **********************************



/*
// Take in Arguments
const args = process.argv.slice(2);
// console.log(args);

// a URL & local filepath
const URL = args[0];
const localPath = args[1];

// http://www.example.edu/  ==> example.edu
const URLCLEAN = (URL.split("/"))[(URL.split("/")).length - 2].split(".").slice(1).join(".");


let page;

const writeFile = (page)=> {
  fs.writeFile(`${localPath}`, page.body,(error) => {

    const fileSize = page.body.length;
    // When a request is aborted - the callback is called with an AbortError
    console.log("Starting to write file");
    if (error) {
      console.log(`File write error!`);
      return;
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}.`);

  });
};


request(`${URL}`, function(error, response, body) {
  page = {error, response, body};
  writeFile(page);
});

 */






// ***************************
//  THE LONGER WAY OF DOING IT
//  USES NET and ON CONN
//  ALSO WORKS
// ***************************

/*
// const net = require('net');
let content;
// http://www.example.edu/  ==> example.edu
const URLCLEAN = (URL.split("/"))[(URL.split("/")).length - 2].split(".").slice(1).join(".");

// const conn = net.createConnection({
//   host: URLCLEAN,
//   port: 80
// });

// conn.setEncoding("utf8");

conn.on('connect', ()=> {
  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: ${URLCLEAN}\r\n`);
  conn.write(`\r\n`);

  // When data is received back
  conn.on('data', (data) => {
    content = data;
    console.log("Starting to write file...");

    // Try to write it to a file
    fs.writeFile(`${localPath}`, content, error => {
      if (error) {
        console.error(error);
        process.exit;
      }
      console.log("File write complete!");

      // Try to read stats from file
      fs.stat(`${localPath}`, (error, stats) => {
        if (error) {
          console.log(`File doesn't exist.`);
        } else {
          fileSize = stats.size;
          printSummary();
        }
      });

    });
    
    conn.end();
  });
});
 */
 


// You need to make an http request and wait for the response.




// print out a message like:
// Downloaded and saved 1235 bytes to ./index.html.




// After the http request is complete,
// you need to take the data you receive and write it to a file in your local filesystem.






// WRITING TO FILE

/*
const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});
 */