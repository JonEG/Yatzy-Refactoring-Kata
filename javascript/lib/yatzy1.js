"use strict";

var Yatzy = function (dice1, dice2, dice3, dice4, dice5) {
    this.diceList = [dice1, dice2, dice3, dice4, dice5];

    this.ones = () => this.sumDicesWithValue(1)

    this.twos = () => this.sumDicesWithValue(2)

    this.threes = () => this.sumDicesWithValue(3)

    this.fours = () => this.sumDicesWithValue(4)

    this.fives = () => this.sumDicesWithValue(5)

    this.sixes = () => this.sumDicesWithValue(6)

    this.sumDicesWithValue = function (diceNumber) {
        let sum = 0;
        for (let i = 0; i < this.diceList.length; i++) {
            if (this.diceList[i] == diceNumber) {
                sum += diceNumber;
            }
        }
        return sum;
    }

    this.sumHighestPair = function (dices) {
        let dicesOcurrencies = this.countDicesOcurrences(dices);
        let hightesPairDiceValue = this.findHighestPairInOcurrencies(dicesOcurrencies);
        let sum = hightesPairDiceValue * 2;
        return sum;
    }

    this.sumHighestTwoPairs = function () {
        let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList)
        let highestPairValue = new Yatzy().findHighestPairInOcurrencies(ocurrencies);

        let dicesWithoutHighestValue = this.diceList.filter(value => value !== highestPairValue);

        let ocurrenciesWithoutHighestValue = new Yatzy().countDicesOcurrences(dicesWithoutHighestValue)
        let secondHighestPairValue = new Yatzy().findHighestPairInOcurrencies(ocurrenciesWithoutHighestValue);

        if (highestPairValue != 0 && secondHighestPairValue != 0) {
            return (highestPairValue * 2) + (secondHighestPairValue * 2);
        } else {
            return 0;
        }
    }

    this.countDicesOcurrences = function (dices) {
        const counts = Array(6).fill(0);
        for (let dice of dices) {
            counts[dice - 1]++;
        }
        return counts;
    }

    this.findHighestPairInOcurrencies = function (ocurrencies) {
        return this.findHighestCombinationValueInOcurrencies({ocurrencies, numberOfEqualDices: 2})
    }

    this.findHighestCombinationValueInOcurrencies = function ({ocurrencies, numberOfEqualDices}) {
        for (let i = 5; i >= 0; i--) {
            if (ocurrencies[i] >= numberOfEqualDices) {
                return (i + 1);
            }
        }
        return 0;
    }

    this.sumAll = function () {
        let total = 0;
        for (const dice of this.diceList) {
            total += dice;
        }
        return total;
    }

    this.fourOfAKind = function () {
        let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);
    
        let valueThatOccursFourTimes = new Yatzy().findHighestCombinationValueInOcurrencies({ocurrencies, numberOfEqualDices: 4});
    
        return valueThatOccursFourTimes * 4;
    }

    this.threeOfAKind = function () {
        let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);
    
        let valueThatOccursThreeTimes = new Yatzy().findHighestCombinationValueInOcurrencies({ocurrencies, numberOfEqualDices: 3});
    
        return valueThatOccursThreeTimes * 3;
    }

    this.get50PointsWhenAllDicesAreEqual = function () {
        let counts = this.countDicesOcurrences(this.diceList);

        for (let i = 0; i != 6; i++) {
            if (counts[i] == 5) {
                return 50;
            }
        }
        return 0;
    }
}

Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0]
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 &&
        tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1)
        return 15;
    return 0;
}

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1
        && tallies[5] == 1)
        return 20;
    return 0;
}

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;




    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 2) {
            _2 = true;
            _2_at = i + 1;
        }

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 3) {
            _3 = true;
            _3_at = i + 1;
        }

    if (_2 && _3)
        return _2_at * 2 + _3_at * 3;
    else
        return 0;
}

module.exports = Yatzy;
