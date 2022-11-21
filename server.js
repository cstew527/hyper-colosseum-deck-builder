const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Card = require('./models/cards.js')
const cardInfo = require('./models/cardSeed.js')
// const Deck = require('./models/cards.js')

// Home page
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Main card gallery page
app.get('/cards', (req, res) => {
    Card.find({}, (err, allCards) => {
        res.render('card.ejs', {
            cards: allCards
        })
    }).sort({
        cardName: 1
    })
})

// Main card detail page
app.get('/cards/:cardNumber', (req, res) => {
    Card.findById(req.params.cardNumber, (err, foundCard) => {
        res.render('show.ejs', {
            card: foundCard
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