"use strict";

class Yatzy {
    #diceList = [];
    constructor(dice1, dice2, dice3, dice4, dice5) {
        this.#diceList = [dice1, dice2, dice3, dice4, dice5];
    }

    ones = () => this.#sumDicesWithValue(1);

    twos = () => this.#sumDicesWithValue(2);

    threes = () => this.#sumDicesWithValue(3);

    fours = () => this.#sumDicesWithValue(4);

    fives = () => this.#sumDicesWithValue(5);

    sixes = () => this.#sumDicesWithValue(6);

    scorePair = () => {
        let dicesOcurrencies = this.#countDicesOcurrences(this.#diceList);
        let hightesPairDiceValue = this.#findHighestPairInOcurrencies(dicesOcurrencies);
        let sum = hightesPairDiceValue * 2;
        return sum;
    };

    twoPair = () => {
        let ocurrencies = this.#countDicesOcurrences(this.#diceList);
        let highestPairValue = this.#findHighestPairInOcurrencies(ocurrencies);

        let dicesWithoutHighestValue = this.#diceList.filter(value => value !== highestPairValue);

        let ocurrenciesWithoutHighestValue = this.#countDicesOcurrences(dicesWithoutHighestValue);
        let secondHighestPairValue = this.#findHighestPairInOcurrencies(ocurrenciesWithoutHighestValue);

        if (highestPairValue != 0 && secondHighestPairValue != 0) {
            return (highestPairValue * 2) + (secondHighestPairValue * 2);
        } else {
            return 0;
        }
    };

    chance = () => {
        let total = 0;
        for (const dice of this.#diceList) {
            total += dice;
        }
        return total;
    };

    fourOfAKind = () => {
        let ocurrencies = this.#countDicesOcurrences(this.#diceList);

        let valueThatOccursFourTimes = this.#findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 4 });

        return valueThatOccursFourTimes * 4;
    };

    threeOfAKind = () => {
        let ocurrencies = this.#countDicesOcurrences(this.#diceList);

        let valueThatOccursThreeTimes = this.#findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 3 });

        return valueThatOccursThreeTimes * 3;
    };

    yatzy = () => {
        let counts = this.#countDicesOcurrences(this.#diceList);

        for (let i = 0; i != 6; i++) {
            if (counts[i] == 5) {
                return 50;
            }
        }
        return 0;
    };

    smallStraight = () => {
        let ocurrencies = this.#countDicesOcurrences(this.#diceList);

        let isThereSmallStraight = true;

        let numberOneOcurrenceIndex = 0;
        let numberFiveOcurrenceIndex = 4;
        for (let i = numberOneOcurrenceIndex; i < numberFiveOcurrenceIndex; i++) {
            let ocurrence = ocurrencies[i];
            isThereSmallStraight = isThereSmallStraight & (ocurrence == 1);

        }

        return isThereSmallStraight ? 15 : 0;
    };

    largeStraight = () => {
        let ocurrencies = this.#countDicesOcurrences(this.#diceList);

        let isThereSmallStraight = true;

        let numberOneOcurrenceIndex = 1;
        let numberFiveOcurrenceIndex = 5;
        for (let i = numberOneOcurrenceIndex; i < numberFiveOcurrenceIndex; i++) {
            let ocurrence = ocurrencies[i];
            isThereSmallStraight = isThereSmallStraight & (ocurrence == 1);

        }

        return isThereSmallStraight ? 20 : 0;
    };

    fullHouse = () => {
        let ocurrencies =this.#countDicesOcurrences(this.#diceList);

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

    #sumDicesWithValue = (diceNumber) => {
        let sum = 0;
        for (let i = 0; i < this.#diceList.length; i++) {
            if (this.#diceList[i] == diceNumber) {
                sum += diceNumber;
            }
        }
        return sum;
    };

    #countDicesOcurrences = (dices) => {
        const counts = Array(6).fill(0);
        for (let dice of dices) {
            counts[dice - 1]++;
        }
        return counts;
    };

    #findHighestPairInOcurrencies = (ocurrencies) => {
        return this.#findHighestCombinationValueInOcurrencies({ ocurrencies, numberOfEqualDices: 2 });
    };

    #findHighestCombinationValueInOcurrencies = ({ ocurrencies, numberOfEqualDices }) => {
        for (let i = 5; i >= 0; i--) {
            if (ocurrencies[i] >= numberOfEqualDices) {
                return (i + 1);
            }
        }
        return 0;
    };
}

module.exports = Yatzy;
