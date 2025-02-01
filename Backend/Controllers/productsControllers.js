const Main = require('../Model/productModel')

const getProduct = async (req, res) => {
    try {

        const data = await Main.find();
        res.json({ data });
    }
    catch
    {
        res.json({ message: "error" });
    }
}

module.exports = { getProduct }