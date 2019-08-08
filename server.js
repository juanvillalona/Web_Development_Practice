const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs'); //will use this dependency to help output my html file to my sever


app.get('/', (request, response) => {
    fs.readFile('./index.html', null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write('File Not found!');//if file is not found, output this text to the page
        } else {
            response.write(data); //data will be HTML file
        }
        response.end(); //be sure to end the response before falling out of the callback function
    });
});

app.listen(port, (err) => { //this will tell my app to connect to the port specified above.
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});