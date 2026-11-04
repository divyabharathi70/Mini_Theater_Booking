import fs from 'fs';

fs.writeFile("index.jsx","this is react",()=>{
    console.log("File written successfully");
})



fs.readFile("index.jsx","utf-8",(error,data)=>{
 console.log(data);
})



fs.appendFile("index.jsx","this no change text",()=>{
    console.log("File appended successfully");
})

fs.readFile("index.jsx","utf-8",(error,data)=>{
 console.log(data);
})

