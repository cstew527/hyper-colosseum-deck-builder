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
        effectsField: [
            "◎ During battle, your attack becomes A regardless of the opponent's battle type.",
            "◎ At the end of the turn during which this card was used, send it to the Dark Area."
        ]
    }, {
        cardName: "Defense Plug-In C",
        cardNumber: "St-50",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/Vg2sXEf.jpg",
        icon: "item",
        capacity: "+50",
        time: "Battle Phase",
        effectsField: [
            "◎ During battle, your attack becomes C regardless of the opponent's battle type.",
            "◎ At the end of the turn during which this card was used, send it to the Dark Area."
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
            "◎ When you lose the battle, send the top 3 cards of the opponent's Net Ocean to the Dark Area.",
            "◎ At the end of the Battle Phase of the turn during which this card was played, send it to the Dark Area."
        ]
    }, {
        cardName: "Just a Little Metal Enhancement",
        cardNumber: "St-53",
        frameColor: "blue",
        cardArt: "https://i.imgur.com/3NpKI3E.jpg",
        icon: "program",
        capacity: "+40",
        time: "Battle Phase",
        timeField: [
            "Choose one card from your hand and send it to the Dark Area."
        ],
        effectsField: [
            "◎ Add 50 to your attack power.",
            "◎ At the end of the turn during which this card was used, send it to the Dark Area."
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
            ["●●"]
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
    }, {
        cardName: "Piyomon",
        cardNumber: "St-3",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/6/68/St-3.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            ["{{LV3}}"]
        ],
        level: "Level III",
        flavorText: "It's very pretty when it's flying!",
        type: "Chick",
        attribute: "Vaccine",
        field: [
            "Wind Guardians"
        ],
        attacks: [
            "Magical Fire",
            "Hard Beak",
            "{{grd}}"
        ],
        attackPower: [
            360, 240, 130
        ],
        lostPoints: [
            10, 10, 10, 10
        ],
        abilitiesField: [
            "◎Has the ability \"sky\"."
        ]
    }, {
        cardName: "Birdramon",
        cardNumber: "St-4",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/7/72/St-4.jpg",
        battleType: "B",
        evoFuseAppear: "evolution",
        evoReqField: [
            ["Piyomon"],
            ["●●"]
        ],
        level: "Level IV",
        flavorText: "This Giant Bird Digimon is protected by fire!",
        type: "Giant Bird",
        attribute: "Data",
        field: [
            "Wind Guardians"
        ],
        attacks: [
            "Meteor Wing",
            "Fire Flap",
            "Guard (A→0)"
        ],
        attackPower: [
            410, 360, 200
        ],
        lostPoints: [
            20, 10, 10, 10
        ],
        abilitiesField: [
            "◎Has the ability \"sky\"."
        ]
    }, {
        cardName: "Gabumon",
        cardNumber: "St-5",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/d/db/St-5.jpg",
        battleType: "B",
        evoFuseAppear: "evolution",
        evoReqField: [
            ["Unless this Digimon is replaced with another Level III Digimon, it cannot be sent to the Dark Area."]
        ],
        level: "Level III",
        flavorText: "This shy guy covers itself with a fur coat!",
        type: "Reptile",
        attribute: "Data",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Petit Fire",
            "Horn Attack",
            "Guard (A→0)"
        ],
        attackPower: [
            350, 240, 150
        ],
        lostPoints: [
            10, 10, 10, 10
        ]
    }, {
        cardName: "Garurumon",
        cardNumber: "St-6",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/4/49/St-6.jpg",
        battleType: "B",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Gabumon",
                "Bakumon"
            ],
            [
                "✕✕",
                "✕"
            ]
        ],
        level: "Level IV",
        flavorText: "Its fur is as hard as mythril!",
        type: "Beast",
        attribute: "Data",
        field: [
            "Nightmare Soldiers"
        ],
        attacks: [
            "Fox Fire",
            "Body Blow",
            "Guard (A→0)"
        ],
        attackPower: [
            410, 330, 180
        ],
        lostPoints: [
            20, 10, 10, 10
        ]
    }, {
        cardName: "Tentomon",
        cardNumber: "St-7",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/2/25/St-7.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Unless this Digimon is replaced with another Level III Digimon, it cannot be sent to the Dark Area."
            ]
        ],
        level: "Level III",
        flavorText: "The knowledgeable professor of the Digital World!",
        type: "Insect",
        attribute: "Vaccine",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Petit Thunder",
            "Hard Claw",
            "Guard (A→0)"
        ],
        attackPower: [
            320, 250, 120
        ],
        lostPoints: [
            10, 10, 10, 10
        ],
        abilitiesField: [
            "◎Has the ability \"sky\"."
        ]
    }, {
        cardName: "Kabuterimon",
        cardNumber: "St-8",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/d/da/St-8.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Tentomon",
                "Gabumon"
            ],
            [
                "●●",
                "●●"
            ]
        ],
        level: "Level IV",
        flavorText: "It has an iron defense! It attacks with its great horn!",
        type: "Insect",
        attribute: "Vaccine",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Mega Blaster",
            "Beet Horn",
            "Guard (A→0)"
        ],
        attackPower: [
            420, 340, 190
        ],
        lostPoints: [
            20, 10, 10, 10
        ],
        abilitiesField: [
            "◎Has the ability \"sky\"."
        ]
    }, {
        cardName: "Palmon",
        cardNumber: "St-10",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/e/eb/St-9.jpg",
        battleType: "A",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Unless this Digimon is replaced with another Level III Digimon, it cannot be sent to the Dark Area."
            ]
        ],
        level: "Level III",
        flavorText: "The flower on its head is pink. It drives enemies away with its stench!",
        type: "Plant",
        attribute: "Data",
        field: [
            "Nature Spirits"
        ],
        attacks: [
            "Poison Ivy",
            "Stinky Stench",
            "Guard (A→0)"
        ],
        attackPower: [
            350, 350, 150
        ],
        lostPoints: [
            10, 10, 10, 10
        ]
    }, {
        cardName: "Togemon",
        cardNumber: "St-10",
        frameColor: "blue",
        cardArt: "https://wikimon.net/images/8/8b/St-10.jpg",
        battleType: "C",
        evoFuseAppear: "evolution",
        evoReqField: [
            [
                "Palmon",
                "Agumon"
            ],
            [
                "●●",
                "●●"
            ]
        ],
        level: "Level IV",
        flavorText: "Beware of its needles, it hurts if you touch them!",
        type: "Plant",
        attribute: "Virus",
        field: [
            "Wind Guardians"
        ],
        attacks: [
            "Chikuchiku Bang Bang",
            "Mach Jab",
            "Guard (A→0)"
        ],
        attackPower: [
            380, 300, 180
        ],
        lostPoints: [
            20, 10, 10, 10
        ]
    }
]