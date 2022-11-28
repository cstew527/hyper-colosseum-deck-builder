const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Card = require('./models/cards.js')
const cardInfo = require('./models/cardSeed.js')
const Deck = require('./models/decks.js')

// Card.collection.drop()

// Card.collection.deleteMany({})

// Card.create(cardInfo, (err, data) => {
//     if (err) console.log (err.message)
//     console.log("add provided cards data")
// })


// Home page
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// Main card gallery page
app.get('/cards', (req, res) => {
    const escapeRegex = (text) => {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    console.log(req.query.cardName)
    if (req.query) {
        const query = req.query
        const conditions = {}
        if (req.query.cardName) {
            const regex = new RegExp(escapeRegex(req.query.cardName), 'gi')
            if (regex) {
                conditions.cardName = regex
            } else {
                console.log(regex)
            }
        }
        
        if (query.frameColor) {
            conditions.frameColor = query.frameColor
        }

        if (query.cardType) {
            if (query.cardType == 'digimon') {
                conditions.battleType = {$ne: null}
            } else if (query.cardType == 'option') {
                conditions.icon = {$ne: null}
            }
        }

        if (query.level) {
            conditions.level = query.level
        }

        if (query.type) {
            conditions.type = query.type
        }

        console.log(conditions)

        Card.find(
            conditions
        , (err, allCards) => {
            res.render('./cardGallery.ejs', {
                cards: allCards
            })
        }).sort({
            cardName: 1
        })
    }
    else {
        Card.find({}, (err, allCards) => {
            res.render('./cardGallery.ejs', {
                cards: allCards
            })
        }).sort({
            cardName: 1
        })
    }
})



// Main card detail page
app.get('/cards/:_id', (req, res) => {
    Card.findById(req.params._id, (err, foundCard) => {
        res.render('showCard.ejs', {
            cards: foundCard
        })
    })
})

// Create card page
app.get('/new_card', (req, res) => {
    res.render('newCard.ejs')
})

// Edit card page
app.get('/cards/:_id/edit', (req, res) => {
    Card.findById(req.params._id, (err, foundCard) => {
        res.render('editCard.ejs', {
            cards: foundCard
        })
    })
})

// Card put route
app.put('/:_id', (req, res) => {
    Card.findByIdAndUpdate(req.params._id, req.body, () => {
        res.redirect('/cards')
    })
})

app.listen(3000, () => {
    console.log('listening')
})

mongoose.connect('mongodb://localhost:27017/cards', () => {
  console.log('The connection with mongod is established')
})