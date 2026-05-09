const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 20000 }
];

let cart = [];

app.get('/', (req, res) => {
  res.send('Welcome to Node.js E-Commerce App');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/cart', (req, res) => {
  const product = products.find(p => p.id === req.body.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  cart.push(product);
  res.json({ message: 'Product added to cart', cart });
});

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
