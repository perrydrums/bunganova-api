/**
 * @File productRouter.js
 *
 * Contains all routes for the Product resource
 */

let express = require('express');

let routes = function (Product) {
  let productRouter = express.Router();

  productRouter.route('/')
    .post(function(req, res) {
      let product = new Product(req.body);
      product.save(function (err) {
        if (err) {
          res.status(200).send(err);
        }
        else {
          res.status(201).send(product);
        }
      });
    })
    .get(function(req, res) {
      Product.find({}, function (err, products){
        res.send(products);
      })
    })
    .options(function (req, res) {
      res.header('Allow', 'GET, POST, OPTIONS');
      res.send(200);
    });

  productRouter.route('/:productId')
    .get(function (req, res) {
      Product.find({_id: req.params.productId}, function (err, product) {
        if (err) res.status(200).send(err);
        else if (product) {
          req.product = product;
          res.send(product);
        }
        else res.status(404).send({ error: { message: 'No product found with product ID: ' + req.params.productId, type: 'product_not_found'}});
      });
    });

  return productRouter;
};

module.exports = routes;
