const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
    deckName: String,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
})

const deckCollection = mongoose.model('Deck', deckSchema)

module.exports = deckCollection