const express = require('express');
const router = express.Router();
const Kanji = require('../models/Kanji');

// Routing
router.get('/', (req, res) => {
  res.render('home', { user: 'John', title: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

router.get('/kanji', (req, res) => {

  const q = req.query;

  if (q.literal) {

    Kanji.find({ literal: { $eq: q.literal } })

    .then(kanjis => {
      
      res.render('kanji', { title: 'Kanji Data', kanjis: kanjis });

      // res.json({
      //   confirmation: 'Success!',
      //   data: kanjis
      // });
    })
    
    .catch(err => {
      res.send({ confirmation: 'Failure!', message: err.message });
    });

  } else if (q.reading) {

    Kanji.find({ reading: { $regex: q.reading } })
    
    .then(kanjis => {
    
      res.render('kanji', { title: 'Kanji Data', kanjis: kanjis });

    })
    
    .catch(err => {
      res.send({
        confirmation: 'Failure!',
        message: err.message
      });
    });

  } else if (q.meaning) {

    Kanji.find({ meaning: { $regex: q.meaning } })
    
    .then(kanjis => {

      res.render('kanji', { title: 'Kanji Data', kanjis: kanjis });

    })
    
    .catch(err => {
      res.send({
        confirmation: 'Failure!',
        message: err.message
      });
    });

  } else if (q.strokes) {

    Kanji.find({ strokes: { $eq: q.strokes } })
    
    .then(kanjis => {

      res.render('kanji', { title: 'Kanji Data', kanjis: kanjis });

    })
    
    .catch(err => {
      res.send({
        confirmation: 'Failure!',
        message: err.message
      });
    });

  } else {

    res.render('kanji', { title: 'Kanji Data' });
  
  }
});

router.get('/kana', (req, res) => {
  res.render('kana', {
    title: 'Kana Main'
  });
});

module.exports = router;
