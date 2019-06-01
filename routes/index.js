const express = require('express');
const router = express.Router();
const Kanji = require('../models/Kanji');
const Kana = require('../models/Kana');

// Routing (endpoints)
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
      res.render('kanji', {
        title: 'Kanji',
        userQuery: q.literal,
        kanjis: kanjis
      });
      // res.json({
      //   confirmation: 'Success!',
      //   data: kanjis
      // });
    })
    .catch(err => {
      res.send({ confirmation: 'Failure!', message: err.message });
    });
  } else if (q.reading) {
    Kanji.find({ reading: { $regex: q.reading } }).sort({ strokes: 1 })
    .then(kanjis => {
      res.render('kanji', {
        title: 'Kanji',
        userQuery: q.reading,
        kanjis: kanjis
      });
    })
    .catch(err => {
      res.send({ confirmation: 'Failure!', message: err.message });
    });
  } else if (q.meaning) {
    Kanji.find({ meaning: { $regex: q.meaning } }).sort({ strokes: 1 })
    .then(kanjis => {
      res.render('kanji', {
        title: 'Kanji',
        userQuery: q.meaning,
        kanjis: kanjis
      });
    })
    .catch(err => {
      res.send({ confirmation: 'Failure!', message: err.message });
    });
  } else if (q.strokes) {
    Kanji.find({ strokes: { $eq: q.strokes } }).sort({ id: 1 })
    .then(kanjis => {
      res.render('kanji', {
        title: 'Kanji',
        userQuery: q.strokes,
        kanjis: kanjis
      });
    })
    .catch(err => {
      res.send({ confirmation: 'Failure!', message: err.message });
    });
  } else {
    res.render('kanji', { title: 'Kanji' });
  }
});

router.get('/kana', (req, res) => {
  Kana.find().sort({ id: 1 })
  .then(kanas => {
    res.render('kana', {
      title: 'Kana',
      kanas: kanas
    });
    // res.send({
    //   confirmation: 'Success!',
    //   data: kanas
    // });
  })
  .catch(err => {
    res.send({ confirmation: 'Failure!', message: err.message });
  });
});

module.exports = router;
