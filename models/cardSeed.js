module.exports = [
    {
        cardName: 'Agumon',
        cardNumber: 'St-1',
        frameColor: 'blue',
        cardArt: 'https://i.imgur.com/9UE74K2.jpg',
        battleType: 'A',
        evoFuseAppear: 'evolution',
        evoReqField1: [
            "{{LV3}}"
        ],
        level: "Level III",
        flavorText: "It loves battle! Bully!",
        type: "Reptile",
        attribute: "Vaccine",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Baby Flame",
            "Sharp Claws",
            "{{grd}}"
        ],
        attackPower: [
            360, 230, 160
        ],
        lostPoints: [
            10, 10, 10, 10
        ]
    }, {
        cardName: "Greymon",
        cardNumber: "St-2",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/btaTAMo.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField1: [
            "Agumon"
        ],
        evoReqField2: [
            "OO"
        ],
        level: "Level IV",
        flavorText: "It looks scary, but it's very intelligent!",
        type: "Dinosaur",
        attribute: "Vaccine",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Mega Flame",
            "Great Antler",
            "{{grd}}"
        ],
        attackPower: [
            440, 340, 200
        ],
        lostPoints: [
            20, 10, 10, 10
        ]
    }, {
        cardName: "MetalGreymon",
        cardNumber: "Bo-1",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/NbmVqPR.jpg",
        battleType: "C",
        evoFuseAppear: "evolution",
        evoReqField1: [
            "Greymon",
            "Devimon"
        ],
        evoReqField2: [
            "{{WP40}}",
            "{{WP40}}"
        ],
        level: "Perfect",
        flavorText: "The strongest metal evolution! Fire the missiles!",
        type: "Cyborg",
        attribute: "Virus",
        field: [
            "Metal Empire"
        ],
        attacks: [
            "Giga Destroyer",
            "Enhanced Claw",
            "{{grd}}"
        ],
        attackPower: [
            490, 440, 170
        ],
        lostPoints: [
            30, 20, 10, 10
        ],
        abilitiesField: [
            "{{SKY}}"
        ]
    }, {
        cardName: "WarGreymon",
        cardNumber: "St-61",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/Fc0G7HT.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField1: [
            "MetalGreymon",
            "BigMamemon"
        ],
        evoReqField2: [
            "{{WP60}}",
            "{{WP60}}"
        ],
        level: "Ultimate",
        flavorText: "The Ultimate form of the Greymon-species Digimon!!",
        type: "Dragon Man",
        attribute: "Vaccine",
        field: [
            "Metal Empire"
        ],
        attacks: [
            "Gaia Force",
            "Dramon Killer",
            "{{grd}}"
        ],
        attackPower: [
            570, 500, 320
        ],
        lostPoints: [
            40, 30, 20, 20
        ],
        abilitiesField: [
            "{{SKY}}",
            "Regain 30 points when you evolve into this Digimon."
        ]
    }, {
        cardName: "Offense Plug-In A",
        cardNumber: "St-49",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/FqSB8fO.jpg",
        icon: "item",
        capacity: "+30",
        time: "Battle Phase",
        effects: [
            "During battle, your attack becomes A regardless of the opponent's battle type.",
            "At the end of the turn during which this card was used, send it to the Dark Area."
        ]
    }, {
        cardName: "Defense Plug-In C",
        cardNumber: "St-50",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/Vg2sXEf.jpg",
        icon: "item",
        capacity: "+50",
        time: "Battle Phase",
        effects: [
            "During battle, your attack becomes C regardless of the opponent's battle type.",
            "At the end of the turn during which this card was used, send it to the Dark Area."
        ]
    }, {
        cardName: "If I Lose I'm Taking You with Me!",
        cardNumber: "St-52",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/X4wmqwB.jpg",
        icon: "program",
        capacity: "+30",
        time: "Battle Phase",
        timeField: [
            "Send out this card face-up."
        ],
        effectsField: [
            "When you lose the battle, send the top 3 cards of the opponent's Net Ocean to the Dark Area.",
            "At the end of the Battle Phase of the turn during which this card was played, send it to the Dark Area."
        ]
    }, {
        cardName: "Just a Little Metal Enhancement",
        cardNumber: "St-53",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/3NpKI3E.jpg",
        icon: "Program",
        capacity: "+40",
        time: "Battle Phase",
        timeField: [
            "Choose one card from your hand and send it to the Dark Area."
        ],
        effectsField: [
            "Add 50 to your attack power.",
            "At the end of the turn during which this card was used, send it to the Dark Area."
        ]
    }
]