const mongoose = require('mongoose');

const KanaSchema = new mongoose.Schema({
  id: { type: Number },
  hiragana: { type: String },
  katakana: { type: String },
  roman: { type: String },
  hg_utf16: { type: String },
  kk_utf16: { type: String }
});

const Kana = mongoose.model('Kana', KanaSchema);

module.exports = Kana;