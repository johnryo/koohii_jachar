const mongoose = require('mongoose');

const KanjiSchema = new mongoose.Schema({
  id: { type: Number },
  literal: { type: String },
  reading: { type: String },
  meaning: { type: String },
  strokes: { type: Number }
});

const Kanji = mongoose.model('Kanji', KanjiSchema);

module.exports = Kanji;