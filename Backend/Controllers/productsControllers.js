const Main = require('../Model/productModel')

const getProduct = async(req, res) => {
    const data = await Main.find();
    res.json({data});
}

module.exports={getProduct}