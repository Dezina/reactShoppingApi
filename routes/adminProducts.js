const router = require('express').Router();
const AdminProduct = require('../models/adminProducts.model');


//***************************************     READ(GET)     ********************************************

//-------  TO GET ALL THE admin products  -------------
router.route('/').get((req, res) => {
    AdminProduct.find()
        .then(AdminProducts => res.json(AdminProducts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//-------- TO GET ONE admin product WITH ID -----------
router.route('/:id').get((req, res) => {
    AdminProduct.findById(req.params.id)
        .then(AdminProducts => res.json(AdminProducts))
        .catch(err => res.status(400).json('Error : ' + err));
});


//***************************************     CREATE     *********************************************

router.route('/create').post((req, res) => {
    AdminProduct.find({ categoryName: req.body.categoryName })
        .then(AdminProducts => {
            if (AdminProducts.length > 0) {
                res.status(400).json('Product category already exists!')
            }
            else {
                const newProducts = new AdminProduct(req.body);

                newProducts.save()
                    .then(() => res.json('Product added!'))
                    .catch(err => res.status(400).json('Error : ' + err));
            }
        })

});

//***************************************     UPDATE     *********************************************

router.route('/update/:id').patch(async (req, res) => {
    AdminProduct.findById(req.params.id)
        .then(product => {
            // if (product.products.productName === req.body.productName) {
            //     console.log("already exists...")
            //     res.status(400).json('Product already exists in the product category!')
            // }
            // else {
            // products.categoryName = req.body.categoryName;
            product.products = req.body.products;

            product.save()
                .then(() => res.json('Product Updated !'))
                .catch(err => res.status(400).json('Error : ' + err));
            // }

        })
        .catch(err => res.status(400).json('Error : ' + err));
})

//***************************************     DELETE     *********************************************

router.route('/delete/:id').delete(async (req, res) => {
    AdminProduct.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;