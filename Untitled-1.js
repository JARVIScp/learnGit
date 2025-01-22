
const fs = require('fs');

function karanReadsFile(cb)
{   
    fs.readFile("a.txt.txt", "utf-8", function(err, data, cb)
        {
            
            data = data + "karan is here";
            fs.writeFile("a.txt", function()
        {
            cb();
        });   
        });

}

// function onDone(data)
// {
//     console.log(data)
// }
karanReadsFile(function()
{
console.log("function visited");}
);