const mongoose = require('mongoose');

const KanaSchema = new mongoose.Schema({
  hiragana: {
    type: String,
    trim: true
  },

  katakana: {
    type: String,
    trim: true
  },

  roman: {
    type: String,
    trim: true
  },

  hg_utf16: {
    type: String
  },

  kk_utf16: {
    type: String
  }
});

const Kana = mongoose.model('Kana', KanaSchema);

module.exports = Kana;