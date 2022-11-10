// resutrn text through a json file (this bc we need to write a http file )
// need to access data through a server in order to retrive(read) a JSON file 
// ex have to test through a local server 

"use strict";

fetch ("resume.json")
    .then (function(resp){
        return resp. json (); // reciving the text and then converting it 
    }
    ) 

    .then (function(data) {
        console.log (data);
    }
    ); 