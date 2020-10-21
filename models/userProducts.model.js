const mongoose = require('mongoose');

const userProductsSchema = mongoose.Schema({
    userMobile: { type: String },
    productName: { type: String }

})

module.exports = mongoose.model('userProducts', userProductsSchema);
