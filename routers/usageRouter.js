/**
 * @File usageRouter.js
 *
 * Contains all routes for the Usage resource
 */

let express = require('express');

let routes = function (Usage) {
  let usageRouter = express.Router();

  usageRouter.route('/')
    .post(function(req, res) {
      let usage = new Usage(req.body);
      usage.save(function (err) {
        if (err) {
          res.status(200).send(err);
        }
        else {
          res.status(201).send(usage);
        }
      });
    })
    .get(function(req, res) {
      Usage.find({}, function (err, usages) {
        res.send(usages);
      })
    })
    .options(function (req, res) {
      res.header('Allow', 'GET, POST, OPTIONS');
      res.send(200);
    });

  usageRouter.route('/usage/:usageId')
    .get(function (req, res) {
      Usage.find({_id: req.params.usageId}, function (err, usage) {
        if (err) res.status(200).send(err);
        else if (usage) {
          req.usage = usage;
          res.send(usage);
        }
        else res.status(404).send({ error: { message: 'No usage found with usage ID: ' + req.params.usageId, type: 'usage_not_found'}});
      });
    });

  usageRouter.route('/user/:userId')
    .get(function (req, res) {
      Usage.find({user_id: req.params.userId}, function (err, usage) {
        if (err) res.status(200).send(err);
        else if (usage) {
          if (usage.length === 0) {
            res.status(400).send({ error: { message: 'No user with usage found with user ID: ' + req.params.userId, type: 'usage_user_not_found'}});
            return;
          }

          let allUsages = {};
          // Create one response item with all counts added up per product.
          usage.forEach(function (item, index) {
            let productId = item.product_id;

            // Add counts and prices together
            if (allUsages[productId]) {
              allUsages[productId] += item.count;
            } else {
              allUsages[productId] = item.count;
            }
          });

          const response = {
            user_id: req.params.userId,
            usages: allUsages,
          };

          res.send(response);
        }
        else res.status(404).send({ error: { message: 'No user with usage found with user ID: ' + req.params.userId, type: 'usage_user_not_found'}});
      });
    });

  return usageRouter;
};

module.exports = routes;
