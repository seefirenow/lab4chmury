let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let usersSchema = require('../Models/Users');
// CREATE Student
router.route('/create-user').post((req, res, next) => {
  usersSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Useers 
router.route('/').get((req, res) => {
    usersSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Users
router.route('/edit-user/:id').get((req, res) => {
    usersSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-user/:id').put((req, res, next) => {
    usersSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})
// Delete Users
router.route('/delete-user/:id').delete((req, res, next) => {
    usersSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;