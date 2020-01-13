const express = require('express');
// const products = require('../products.json')
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);

app.listen(4040, () => console.log('Server running on 4040'));
