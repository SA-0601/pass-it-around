const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> \n <a href='/98'>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    var {number_of_bottles} = req.params;
    console.log(number_of_bottles);
    if(number_of_bottles != 0){
        res.send(`<h1>${number_of_bottles} Bottles of beer on the wall</h1> <a href='/${number_of_bottles-1}'>take one down, pass it around</a>`)
 
    }else{
        res.send(`<h1>Zero bottles </h1><a href='/'>Game Over, Play Again</a>`)
           
    }
})

//
app.get('*', (req, res) => {
    res.send('<h1>Page not found </h1><a href=/>Go to Home</a>');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})