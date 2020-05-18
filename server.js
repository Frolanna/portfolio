const express = require("express");
let  app = express();
app.get(/^\/[A-Za-z]*$/, function(req, res){
    res.sendfile('index.html', { root: __dirname + "/dist" } );
});
app.use(express.static('dist'));
app.listen(3000,  () => console.log("App listening on port 3000!"));