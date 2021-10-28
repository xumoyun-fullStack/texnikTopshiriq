let dash = require("./dash.js");
let dep = require("./dep.js");
let sell = require("./sell.js");
let ter = process.argv;

let product = ter[3];
let count = ter[4];
    
if(ter[2] == "--dep" && ter[3] && ter[4]){
    

    dep(product, count);
}else if(ter[2] == "--sell" && ter[3] && ter[4]){
    sell(product, count);
}else{
     dash();
    
}

    
