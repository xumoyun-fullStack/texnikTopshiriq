const path = require("path");
const fs = require("fs/promises");

module.exports = async function(product, count){
    let dbPath = path.join(__dirname, "db.json");
    let db = await fs.readFile(dbPath, "utf-8");
    db = await JSON.parse(db);

    count = Number(count);

    let prd = db.products.find(el => el.name === product.toLowerCase());

    if(prd){
        let curCount = Number(prd.count);
        let prdIndex = db.products.findIndex(el => el.name === prd.name);

        if(curCount >= count){
            curCount -= count;
            prd.count = curCount;

            db.products[prdIndex] = prd;

            await fs.writeFile(dbPath, JSON.stringify(db));
            console.log("Maxsulot muvaffaqiyatli sotildi!");
        }else{
            console.log("Maxsulotlar soni yetarli emas!");
        }
    }else{
        console.log("Bunday maxsulot omborda yo`q!");
    }

}