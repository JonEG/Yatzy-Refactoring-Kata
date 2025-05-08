class YatzyHand {
    static diceValues = [6, 5, 4, 3, 2, 1];

    constructor() {
        if (this.constructor === YatzyHand) {
            throw new Error("Abstract class cannot be instantiated.");
        }
    }

    static score(dice) {
        // Calculate dice frequencies
        const diceFrequencies = this.calculateDiceFrequencies(dice);
        const total = this.calculate(dice, diceFrequencies);
        return total;
    }

    calculate(dice, diceFrequencies) {
        throw new Error("Method 'calculate()' must be implemented.");
    }

    static calculateDiceFrequencies(dice) {
        const diceFrequencies = {};
        for (const i of this.diceValues) {
            diceFrequencies[i] = 0;
        }
        for (const die of dice) {
            diceFrequencies[die] = (diceFrequencies[die] || 0) + 1;
        }
        return diceFrequencies;
    }
}

class Chance extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return dice.reduce((acc, die) => acc + die, 0);
    }
}

class Yatzy extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // Score for Yatzy if all dice are the same
        let yatzyResult = 0;
        if (Object.values(diceFrequencies).includes(5)) {
            yatzyResult = 50;
        }
        return yatzyResult;
    }
}

class Ones extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[1];
    }
}

class Twos extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[2] * 2;
    }
}

class Threes extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[3] * 3;
    }
}

class Fours extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[4] * 4;
    }
}

class Fives extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[5] * 5;
    }
}

class Sixes extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        return diceFrequencies[6] * 6;
    }
}

class Pair extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // score pair if two dice are the same
        let pairResult = 0;
        // score highest pair if there is more than one
        for (const i of this.diceValues) {
            if (diceFrequencies[i] >= 2) {
                pairResult = i * 2;
                break;
            }
        }
        return pairResult;
    }
}

class ThreeOfAKind extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // score if three dice are the same
        let threeKindResult = 0;
        for (const i of this.diceValues) {
            if (diceFrequencies[i] >= 3) {
                threeKindResult = i * 3;
                break;
            }
        }
        return threeKindResult;
    }
}

class FourOfAKind extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        let fourKindResult = 0;
        for (const i of this.diceValues) {
            if (diceFrequencies[i] >= 4) {
                fourKindResult = i * 4;
                break;
            }
        }
        return fourKindResult;
    }
}

class SmallStraight extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // score if dice contains 1,2,3,4,5
        let smallStraightResult = 0;
        let count = 0;
        for (const frequency of Object.values(diceFrequencies)) {
            if (frequency === 1) {
                count++;
            }
        }
        if (count === 5 && diceFrequencies[6] === 0) {
            for (const die of dice) {
                smallStraightResult += die;
            }
        }
        return smallStraightResult;
    }
}

class LargeStraight extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        let largeStraightResult = 0;
        let straightCount = 0;
        for (const frequency of Object.values(diceFrequencies)) {
            if (frequency === 1) {
                straightCount++;
            }
        }
        if (straightCount === 5 && diceFrequencies[1] === 0) {
            for (const die of dice) {
                largeStraightResult += die;
            }
        }
        return largeStraightResult;
    }
}

class TwoPairs extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // score if there are two pairs
        let twoPairResult = 0;
        let pairCount = 0;
        for (const frequency of Object.values(diceFrequencies)) {
            if (frequency >= 2) {
                pairCount++;
            }
        }
        if (pairCount === 2) {
            for (const i of this.diceValues) {
                if (diceFrequencies[i] >= 2) {
                    twoPairResult += i * 2;
                }
            }
        }
        return twoPairResult;
    }
}

class FullHouse extends YatzyHand {
    static calculate(dice, diceFrequencies) {
        // score if there is a pair as well as three of a kind
        let fullHouseResult = 0;
        if (Object.values(diceFrequencies).includes(2) &&
            Object.values(diceFrequencies).includes(3)) {
            for (const die of dice) {
                fullHouseResult += die;
            }
        }
        return fullHouseResult;
    }
}

module.exports = {
    Chance, Yatzy,
    Ones, Twos, Threes, Fours, Fives, Sixes,
    Pair, TwoPairs, ThreeOfAKind, FourOfAKind, FullHouse,
    SmallStraight, LargeStraight,
};