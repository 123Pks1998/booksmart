
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    types: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

}, { timestamp: true })
mongoose.models = {}
module.exports = mongoose.model('products', productSchema)