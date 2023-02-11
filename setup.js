const env = require('dotenv').config();
const axios = require('axios');

let token = '';

function getProduct(product_id, t) {
  let product = null;

  axios
    .get(`https://api.irroba.com.br/v1/product/${product_id}`, {
      headers: {
        'Authorization': t
      }
    })
    .then((p) => {
      product = p.data.data[0];

      let { product_description, price, sku } = product;

      axios
        .post('http://localhost:3000/products', {
          name: product_description[0].name,
          price,
          sku
        }).then((res) => {
          if (res) console.log(`Product '${product_description[0].name}' added with success!`);
        });
    });
}


axios
  .post('https://api.irroba.com.br/v1/getToken', {
    "username": "integree_testedev",
    "password": "jPy2jEbSSK43jz0E7wTlqOC1tCFQNHM7puNqJ5R"
  }).then((res) => {
    token = res.data.data.authorization;

    getProduct(4569, token);
    getProduct(4559, token);
    getProduct(4552, token);
  });

