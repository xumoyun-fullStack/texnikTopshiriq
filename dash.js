const path = require("path");
const fs = require("fs/promises");




module.exports =  async function(){
    let dbPath = path.join(__dirname, "db.json");
    let db = await fs.readFile(dbPath, "utf-8");
    db = await JSON.parse(db);
 
    console.table(db.products);
}