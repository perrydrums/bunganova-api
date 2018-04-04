/**
 * @File userRouter.js
 *
 * Contains all routes for the User resource
 */

let express = require('express');

let routes = function (User) {
  let userRouter = express.Router();

  userRouter.route('/')
    .post(function(req, res) {
      let user = new User(req.body);
      user.save(function (err) {
        if (err) {
          res.status(406).send(err);
        }
        else {
          res.status(201).send(user);
        }
      });
    })
    .get(function(req, res) {
      res.send('You can only get individual users by fetching /api/users/{username}');
    })
    .options(function (req, res) {
      res.header('Allow', 'GET, POST, OPTIONS');
      res.send(200);
    });

  userRouter.route('/:username')
    .get(function (req, res) {
      User.find({username: req.params.username}, function (err, user) {
        if (err) res.status(406).send(err);
        else if (user) {
          req.user = user;
          res.send(user);
        }
        else res.status(404).send('No user found with username: ' + req.params.username);
      });
    });

  return userRouter;
};

module.exports = routes;
