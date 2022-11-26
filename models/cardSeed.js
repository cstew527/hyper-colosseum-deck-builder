module.exports = [
    {
        cardName: 'Agumon',
        cardNumber: 'St-1',
        frameColor: 'blue',
        cardArt: 'https://i.imgur.com/9UE74K2.jpg',
        battleType: 'A',
        evoFuseAppear: 'evolution',
        evoReqField: [
            ["{{LV3}}"]
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
            "Guard (A→0)"
        ],
        attackPower: [
            360, 230, 160
        ],
        lostPoints: [
            10, 10, 10, 10
        ]
    }, {
        cardName: "MetalGreymon",
        cardNumber: "Bo-1",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/NbmVqPR.jpg",
        battleType: "C",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Greymon",
                "Devimon"
            ],
            [
                "Winning Percentage: 40%!",
                "Winning Percentage: 40%!"
            ]
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
            "Guard (A→0)"
        ],
        attackPower: [
            490, 440, 170
        ],
        lostPoints: [
            30, 20, 10, 10
        ],
        abilitiesField: [
            "◎ Has the ability \"sky\"."
        ]
    }, {
        cardName: "WarGreymon",
        cardNumber: "St-61",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/Fc0G7HT.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "MetalGreymon",
                "BigMamemon"
            ],
            [
                "Winning Percentage: 60%!",
                "Winning Percentage: 60%!"
            ]
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
            "Guard (A→0)"
        ],
        attackPower: [
            570, 500, 320
        ],
        lostPoints: [
            40, 30, 20, 20
        ],
        abilitiesField: [
            "◎ Has the ability \"sky\".",
            "◎ Regain 30 points when you evolve into this Digimon."
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
    }, {
        cardName: "Greymon",
        cardNumber: "St-2",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/btaTAMo.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            ["Agumon"],
            ["OO"]
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
            "Guard (A→0)"
        ],
        attackPower: [
            440, 340, 200
        ],
        lostPoints: [
            20, 10, 10, 10
        ]
    }, {
        cardName: "Omegamon",
        cardNumber: "St-994",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/e/ed/St-994.jpg",
        battleType: "B",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Omegamon (Red Frame)",
                "WarGreymon (Blue Frame)"
            ],
            [
                "X-Eraser",
                "Metal Garurumon (Blue Frame)"
            ]
        ],
        level: "Ultimate",
        flavorText: "It wields the finishing sword of destruction, a holy knight who has reached its limits!",
        type: "Holy Knight",
        attribute: "Vaccine",
        group: "Royal Knights",
        field: [
            "Virus Busters"
        ],
        infoField: [
            "The evolution requirements cannot be ignored.",
            "■ When the opponent is a red frame Digimon, add 610 to the attack power of your Ultimate level."
        ],
        attacks: [
            "Grey Sword",
            "Garuru Cannon",
            "Guard (A→0)"
        ],
        attackPower: [
            900, 770, 640
        ],
        lostPoints: [
            40, 40, 30, 30
        ],
        abilitiesField: [
            "◎ Has the ability \"proud\".",
            "◎ When there is a red frame Digimon on the opponent's sheet, add 400 to your attack power.",
            "◎ Cannot receive the effects of the opponent's Option cards."
        ],
    }
]