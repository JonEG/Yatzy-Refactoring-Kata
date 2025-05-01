"use strict";

var Yatzy = function(dice1, dice2, dice3, dice4, dice5) {
    this.diceList = [dice1, dice2, dice3, dice4, dice5];

    this.fours = () => this.sumDicesWithValue(4)

    this.fives = () => this.sumDicesWithValue(5)

    this.sixes = () => this.sumDicesWithValue(6)

    this.sumDicesWithValue = function (diceNumber){
        let sum = 0;
        for (let i = 0; i < this.diceList.length; i++) {
            if (this.diceList[i] == diceNumber) {
                sum += diceNumber;
            }
        }
        return sum;
    }

    this.sumHighestPair = function(dices)
    {
        let dicesOcurrencies = this.countDicesOcurrences(dices);
        let hightesPairDiceValue = findHighestPairDiceValue(dicesOcurrencies);
        let sum = hightesPairDiceValue * 2;
        return sum;
    }

    this.countDicesOcurrences = function (dices) {
        const counts = Array(6).fill(0);
        for (let dice of dices) {
            counts[dice - 1]++;
        }
        return counts;
    }
    
    function findHighestPairDiceValue(ocurrencies) {
        for (let i = 5; i >= 0; i--) {
            if (ocurrencies[i] >= 2) {
                return (i + 1);
            }
        }
        return 0;
    }

    this.sumAll = function() {
        let total = 0;
        for (const dice of this.diceList) {
            total+= dice;
        }
        return total;
    }
}

Yatzy.yatzy = function() {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die-1]++; }
    for (i = 0; i != 6; i++)
        if (counts[i] == 5)
            return 50;
    return 0;
}

Yatzy.ones = function(d1, d2, d3, d4, d5) {
    var sum = 0;
    if (d1 == 1) sum++;
    if (d2 == 1) sum++;
    if (d3 == 1) sum++;
    if (d4 == 1) sum++;
    if (d5 == 1)
        sum++;

    return sum;
}

Yatzy.twos = function(d1, d2, d3, d4, d5) {
    var sum = 0;
    if (d1 == 2) sum += 2;
    if (d2 == 2) sum += 2;
    if (d3 == 2) sum += 2;
    if (d4 == 2) sum += 2;
    if (d5 == 2) sum += 2;
    return sum;
}

Yatzy.threes = function(d1, d2, d3, d4, d5) {
    var s;
    s = 0;
    if (d1 == 3) s += 3;
    if (d2 == 3) s += 3;
    if (d3 == 3) s += 3;
    if (d4 == 3) s += 3;
    if (d5 == 3) s += 3;
    return s;
}

Yatzy.two_pair = function(d1, d2, d3, d4, d5)
{
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1-1]++;
    counts[d2-1]++
    counts[d3-1]++
    counts[d4-1]++;
    counts[d5-1]++;
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
        if (counts[6-i-1] >= 2) {
            n++;
            score += (6-i);
        }
    if (n == 2)
        return score * 2;
    else
        return 0;
}

Yatzy.four_of_a_kind = function(_1, _2, d3, d4, d5)
{
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0]
    tallies[_1-1]++;
    tallies[_2-1]++;
    tallies[d3-1]++;
    tallies[d4-1]++;
    tallies[d5-1]++;
    for (let i = 0; i < 6; i++)
        if (tallies[i] >= 4)
            return (i+1) * 4;
    return 0;
}

Yatzy.three_of_a_kind = function(d1, d2, d3, d4, d5)
{
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    t[d1-1]++;
    t[d2-1]++;
    t[d3-1]++;
    t[d4-1]++;
    t[d5-1]++;
    for (let i = 0; i < 6; i++)
        if (t[i] >= 3)
            return (i+1) * 3;
    return 0;
}

Yatzy.smallStraight = function(d1, d2, d3, d4, d5)
{
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0]
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;
    if (tallies[0] == 1 &&
        tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1)
        return 15;
    return 0;
}

Yatzy.largeStraight = function(d1, d2, d3, d4, d5)
{
    var tallies;
    tallies = [0, 0, 0, 0,0,0,0,0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;
    if (tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1
        && tallies[5] == 1)
        return 20;
    return 0;
}

Yatzy.fullHouse = function(d1, d2, d3, d4, d5)
{
    var tallies;
    var  _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;




    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 2) {
            _2 = true;
            _2_at = i+1;
        }

    for (i = 0; i != 6; i += 1)
        if (tallies[i] == 3) {
            _3 = true;
            _3_at = i+1;
        }

    if (_2 && _3)
        return _2_at * 2 + _3_at * 3;
    else
        return 0;
}

module.exports = Yatzy;
