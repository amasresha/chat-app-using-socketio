var path = require("path");
var express =require("express");
const app =express();

var publiPath = path.join(__dirname, '../public')
const port =process.env.PORT || 2750;
// console.log(publicDir);

 // app.get(`/`, (req,res)=>{
 //   res.render (`${publicDir}`);
 // })
app.use (express.static(publiPath));

app.listen(port, ()=>{
  console.log(`You express server is running on ${port}`);
});
