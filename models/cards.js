const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    // All cards have these
    cardName: {type: String, required: true},
    cardNumber: {type: String, required: true},
    frameColor: {type: String, required: true},
    cardArt: {type: String, required: true},
    // Digimon specific
    battleType: String,
    evoFuseAppear: String,
    evoReqField: [[String]],
    level: String,
    flavorText: String,
    type: String,
    attribute: String,
    group: String,
    field: [String],
    infoField: [String],
    attacks: [String],
    attackPower: [Number],
    lostPoints: [Number],
    abilitiesField: [String],
    // Option specific
    icon: String,
    capacity: String,
    time: String,
    timeField: [String],
    category: String,
    cost: String,
    requirements: String,
    effectsField: [String],
    limit: String
})


const cardCollection = mongoose.model('Card', cardSchema)

module.exports = cardCollection