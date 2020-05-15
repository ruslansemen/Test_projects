const fs = require('fs');
fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (!err) {
        const obj = JSON.parse(data);
        console.log(obj.first + " " + obj.second + " " + obj.third);
        obj.third = "THREE";
        console.log(obj);
        fs.writeFile('./data2.json', "[{\"hello\": \"Node JS!\"}]", (err) => {});
        fs.writeFile('./data3.json', JSON.stringify(obj), (err) => {});
    }
});