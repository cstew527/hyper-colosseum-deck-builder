const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const Card = require('./models/cards.js')
const cardInfo = require('./models/cardSeed.js')
// const Deck = require('./models/cards.js')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/cards', (req, res) => {
    Card.find({}, (err, allCards) => {
        res.render('card.ejs', {
            card: allCards
        })
    })
})

// Card.collection.drop()

// Card.create(cardInfo, (err, data) => {
//     if (err) console.log (err.message)
//     console.log("add provided cards data")
// })

app.listen(3000, () => {
    console.log('listening')
})

mongoose.connect('mongodb://localhost:27017/cards', () => {
  console.log('The connection with mongod is established')
})