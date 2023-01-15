const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let usersSchema = new Schema({
  user: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  czy_tekst: {
    type: Boolean
  },
  czy_audio: {
    type: Boolean
  },
  czy_video: {
    type: Boolean
  },
  rozmiar_tekstu: {
    type: String
  },
   kontrast: {
    type: Number
  }
}, {
    collection: 'users'
  })
module.exports = mongoose.model('Users', usersSchema)