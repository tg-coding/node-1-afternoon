const products = require('../products.json');

const getProduct = (req, res) => {
    const {id} = req.params;
    const item = products.find(val => val.id === +id);
    if (!item) {
        return res.status(500).send('Item not in list');
    }
    res.status(200).send(item);
}

module.exports = getProduct;