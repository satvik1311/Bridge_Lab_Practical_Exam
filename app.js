const { log } = require("console");
const fs = require("fs");

fs.readFile("input.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error Reading File",err.message);
        return;
        
    }
    const lines = data.split("\n").filter (line => line.trim() !== "").length;
    const words = data.split(/\s+/).filter(word => word.length > 0).length;

    const result = `Total lines: ${lines} and total words: ${words}`;

    fs.writeFile("output.txt",result,(err)=> {
        if(err){
            console.log("Error Writing File:", err.message);
            return;
            
        }
        console.log("Result is written");
        
    });
});