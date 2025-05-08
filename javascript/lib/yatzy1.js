"use strict";

class Yatzy {
    constructor(dice1, dice2, dice3, dice4, dice5) {
        this.diceList = [dice1, dice2, dice3, dice4, dice5];

        this.ones = () => this.sumDicesWithValue(1);

        this.twos = () => this.sumDicesWithValue(2);

        this.threes = () => this.sumDicesWithValue(3);

        this.fours = () => this.sumDicesWithValue(4);

        this.fives = () => this.sumDicesWithValue(5);

        this.sixes = () => this.sumDicesWithValue(6);

        this.sumDicesWithValue = function (diceNumber) {
            let sum = 0;
            for (let i = 0; i < this.diceList.length; i++) {
                if (this.diceList[i] == diceNumber) {
                    sum += diceNumber;
                }
            }
            return sum;
        };

        this.scorePair = function (dices) {
            let dicesOcurrencies = this.countDicesOcurrences(dices);
            let hightesPairDiceValue = this.findHighestPairInOcurrencies(dicesOcurrencies);
            let sum = hightesPairDiceValue * 2;
            return sum;
        };

        this.twoPair = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);
            let highestPairValue = new Yatzy().findHighestPairInOcurrencies(ocurrencies);

            let dicesWithoutHighestValue = this.diceList.filter(value => value !== highestPairValue);

            let ocurrenciesWithoutHighestValue = new Yatzy().countDicesOcurrences(dicesWithoutHighestValue);
            let secondHighestPairValue = new Yatzy().findHighestPairInOcurrencies(ocurrenciesWithoutHighestValue);

            if (highestPairValue != 0 && secondHighestPairValue != 0) {
                return (highestPairValue * 2) + (secondHighestPairValue * 2);
            } else {
                return 0;
            }
        };

        this.countDicesOcurrences = function (dices) {
            const counts = Array(6).fill(0);
            for (let dice of dices) {
                counts[dice - 1]++;
            }
            return counts;
        };

        this.findHighestPairInOcurrencies = function (ocurrencies) {
            return this.findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 2 });
        };

        this.findHighestCombinationValueInOcurrencies = function ({ ocurrencies, numberOfEqualDices }) {
            for (let i = 5; i >= 0; i--) {
                if (ocurrencies[i] >= numberOfEqualDices) {
                    return (i + 1);
                }
            }
            return 0;
        };

        this.chance = function () {
            let total = 0;
            for (const dice of this.diceList) {
                total += dice;
            }
            return total;
        };

        this.fourOfAKind = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);

            let valueThatOccursFourTimes = new Yatzy().findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 4 });

            return valueThatOccursFourTimes * 4;
        };

        this.threeOfAKind = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);

            let valueThatOccursThreeTimes = new Yatzy().findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 3 });

            return valueThatOccursThreeTimes * 3;
        };

        this.yatzy = function () {
            let counts = this.countDicesOcurrences(this.diceList);

            for (let i = 0; i != 6; i++) {
                if (counts[i] == 5) {
                    return 50;
                }
            }
            return 0;
        };

        this.smallStraight = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);

            let isThereSmallStraight = true;

            let numberOneOcurrenceIndex = 0;
            let numberFiveOcurrenceIndex = 4;
            for (let i = numberOneOcurrenceIndex; i < numberFiveOcurrenceIndex; i++) {
                let ocurrence = ocurrencies[i];
                isThereSmallStraight = isThereSmallStraight & (ocurrence == 1);

            }

            return isThereSmallStraight ? 15 : 0;
        };

        this.largeStraight = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);

            let isThereSmallStraight = true;

            let numberOneOcurrenceIndex = 1;
            let numberFiveOcurrenceIndex = 5;
            for (let i = numberOneOcurrenceIndex; i < numberFiveOcurrenceIndex; i++) {
                let ocurrence = ocurrencies[i];
                isThereSmallStraight = isThereSmallStraight & (ocurrence == 1);

            }

            return isThereSmallStraight ? 20 : 0;
        };

        this.fullHouse = function () {
            let ocurrencies = new Yatzy().countDicesOcurrences(this.diceList);

            let isThereAPairOfDices = false;
            let isThereAThreesomeOfDices = false;

            let i;
            let pairDiceValue = 0;
            let threesomeDiceValue = 0;

            for (i = 0; i <= ocurrencies.length; i++) {
                if (ocurrencies[i] == 2) {
                    isThereAPairOfDices = true;
                    pairDiceValue = i + 1;
                } else if (ocurrencies[i] == 3) {
                    isThereAThreesomeOfDices = true;
                    threesomeDiceValue = i + 1;
                }
            }

            if (isThereAPairOfDices && isThereAThreesomeOfDices)
                return pairDiceValue * 2 + threesomeDiceValue * 3;

            else
                return 0;
        };
    }
}

module.exports = Yatzy;
