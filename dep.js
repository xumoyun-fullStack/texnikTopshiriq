const path = require("path");
const fs = require("fs/promises");


module.exports = async function(product, count){

        let dbPath = path.join(__dirname, "db.json");
        let db = await fs.readFile(dbPath, "utf-8");
        db = await JSON.parse(db);

        count = Number(count);
        let prd = db.products.find(el => el.name === product.toLowerCase());
        
        if(prd){
            let prdIndex = db.products.findIndex(el => el.name === product.toLowerCase());
            let curCount = Number(prd.count);
            curCount += count;
            prd.count = curCount;
            
            db.products[prdIndex] = prd;
            await fs.writeFile(dbPath, JSON.stringify(db));
            console.log("Maxsulot muvaffaqiyatli o`zgartirildi!");
        }else{
           
            let newPrd = {
                name: product,
                count: count
            }

            db.products.push(newPrd);

            await fs.writeFile(dbPath, JSON.stringify(db));

            console.log("Maxsulot muvaffaqiyatli qo`shildi!");

        }

    
}
