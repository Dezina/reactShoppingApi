const mongoose = require('mongoose');

const adminProductsSchema = mongoose.Schema({
    categoryName: { type: String },
    products: [
        {
            productName: { type: String }
        }
    ]
})

module.exports = mongoose.model('adminProducts', adminProductsSchema);
