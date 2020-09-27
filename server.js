
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'build');
const fontsPath = path.join(__dirname , "src" , "assets" , "fonts")
const port = process.env.PORT || 3000;


app.use(express.static(publicPath));

app.use("/fonts",express.static(fontsPath))
app.get('*', (req, res) => {    
    res.sendFile(path.join(publicPath , 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });