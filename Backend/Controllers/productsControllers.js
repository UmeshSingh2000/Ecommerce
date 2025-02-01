const Main = require('../Model/productModel')

const getProduct = async (req, res) => {
    try {

        const data = await Main.find();
        res.json({ data });
    }
    catch(err)
    {
        res.json({ message: err.message });
    }
}

module.exports = { getProduct }