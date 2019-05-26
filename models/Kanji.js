const mongoose = require('mongoose');

const KanjiSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true
  },

  literal: {
    type: String,
    trim: true
  },

  reading: {
    type: String,
    trim: true
  },

  meaning: {
    type: String,
    trim: true
  },

  strokes: {
    type: String,
    trim: true
  }
});

const Kanji = mongoose.model('Kanji', KanjiSchema);

module.exports = Kanji;