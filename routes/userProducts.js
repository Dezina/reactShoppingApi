const router = require('express').Router();
const UserProduct = require('../models/userProducts.model');


//***************************************     READ(GET)     ********************************************

//-------  TO GET ALL THE admin products  -------------
router.route('/').get((req, res) => {
    UserProduct.find()
        .then(UserProducts => res.json(UserProducts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//-------- TO GET ONE admin product WITH ID -----------
router.route('/:id').get((req, res) => {
    UserProduct.findById(req.params.id)
        .then(UserProducts => res.json(UserProducts))
        .catch(err => res.status(400).json('Error : ' + err));
});


//***************************************     CREATE     *********************************************

router.route('/create').post((req, res) => {

    const newProducts = new UserProduct(req.body);

    newProducts.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error : ' + err));

});

//***************************************     UPDATE     *********************************************

router.route('/update/:id').patch(async (req, res) => {
    UserProduct.findById(req.params.id)
        .then(product => {

            // products.categoryName = req.body.categoryName;
            product.productName = req.body.productName;

            product.save()
                .then(() => res.json('Product Updated !'))
                .catch(err => res.status(400).json('Error : ' + err));


        })
        .catch(err => res.status(400).json('Error : ' + err));
})

//***************************************     DELETE     *********************************************

router.route('/delete/:id').delete(async (req, res) => {
    UserProduct.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;