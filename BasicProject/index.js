const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{

    // ✅ 1) Serve CSS file
    // if(req.url === "/file.css"){
    //     const cssPath = path.join(__dirname,"public","file.css");

    //     fs.readFile(cssPath,(err,data)=>{
    //         if(err){
    //             res.writeHead(500);
    //             res.end("CSS Error");
    //             return;
    //         }

    //         res.writeHead(200,{"Content-Type":"text/css"});
    //         res.end(data);
    //     });
    //     return; // stop further code
    // }

    // ✅ 2) HTML Routing
    let filepath = "";

    if(req.url==='/' || req.url==='/home'){
        filepath = 'home.html';
    }
    else if(req.url==='/about'){
        filepath = 'about.html';
    }
    else if(req.url==='/contact'){
        filepath='contact.html';
    }
    else if(req.url==='/service'){
        filepath='service.html';
    }
    else{
        filepath='404.html';
    }

    const fullpath = path.join(__dirname,'component',filepath);

    fs.readFile(fullpath,(err,data)=>{
        if(err){
            res.writeHead(500);
            res.end("Server error");
            return;
        }

        if(filepath === "404.html"){
            res.writeHead(404,{'Content-Type':'text/html'});
        } else {
            res.writeHead(200,{'Content-Type':'text/html'});
        }

        res.end(data);
    });

});

server.listen(3000,()=>{
    console.log("The server is running on 3000");
});
