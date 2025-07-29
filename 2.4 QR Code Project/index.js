import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app =express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/front.html");
});
app.post("/submit",(req,res)=>{
  const url = req.body.url;
  if(!url){
    return res.send("<h1>error</h1>");
  }
  const qr_png = qr.image(url,{type:"png"});
  qr_png.pipe(fs.createWriteStream("qr_img.png"));
  fs.writeFile("URL.txt",url,(err)=>{
    if(err) throw err;
    console.log("file has been saved");
    res.sendFile(__dirname+"/qr_img.png");
  })
});
app.listen(port,()=>{
  console.log(`listning on the port ${port}`);
});