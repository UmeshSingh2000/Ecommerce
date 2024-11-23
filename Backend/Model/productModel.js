const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        require:true
    },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    src: { type: String, required: true },
    price: { type: String, required: true },
    stars: { type: String, required: true },
    feature: { type: String, required: true },
})

const mainSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    src: { type: String, required: true },
    title: { type: String, required: true },
    products: [productSchema]
});
const Main = mongoose.model('Main',mainSchema,"products")
module.exports = Main;