const express = require('express');
const path = require('path');

const rootDir = require('../utils/pathUtil')

const hostRouter = express.Router()

hostRouter.get('/host/add-home', (req, res, next) => {
   res.render('addHome', { pageTitle: 'Add Home', currentPage: 'Add Home' });
})

const registeredHomes = [];

hostRouter.post('/host/add-home', (req, res, next) => {
   registeredHomes.push({
      houseName: req.body.houseName,
      price: req.body.price,
      location: req.body.location,
      rating: req.body.rating,
      photoUrl: req.body.photoUrl
   })
   console.log(registeredHomes);
   res.render('homeAdded', { pageTitle: 'Home Added', currentPage: 'Home Added' });
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;