var http = require('http');
const fs = require('fs');

// var music = http.createServer(function (req,res)
// {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("My Favourite Songs !!!");
//     res.end();
// });
// music.listen(8080,'127.0.0.1')

fs.readFile('./songs.json','utf-8',(err,jsonString)=>{
    if(err){
        console.log('Error ');
    }
    else{
        console.log(jsonString);
    }
});
