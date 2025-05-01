var assert = require("assert");
var Yatzy = require("../lib/yatzy1");


describe('sumAll', function() {
    it('scores sum of all dice', function(){
        let expected = 15;
        let actual = new Yatzy(2, 3, 4, 5, 1).sumAll();
        assert.equal(expected, actual);
        assert.equal(16, new Yatzy(3, 3, 4, 5, 1).sumAll());
    });
});

describe("Yatzy", function() {
    it("scores 50", function() {
        assert.equal(50, new Yatzy(4,4,4,4,4).get50PointsWhenAllDicesAreEqual());
        assert.equal(50, new Yatzy(6,6,6,6,6).get50PointsWhenAllDicesAreEqual());
        assert.equal(0, new Yatzy(6,6,6,6,3).get50PointsWhenAllDicesAreEqual());
    });
});

describe("Ones", function() {
    it("score the sum of 1s", function() {
        assert.equal(1, new Yatzy(1,2,3,4,5).ones());
        assert.equal(2, new Yatzy(1,2,1,4,5).ones());
        assert.equal(0, new Yatzy(6,2,2,4,5).ones());
        assert.equal(4, new Yatzy(1,2,1,1,1).ones());
    });
});

describe("Twos", function() {
    it("score the sum of 2s", function() {
        assert.equal(4, new Yatzy(1,2,3,2,6).twos());
        assert.equal(10, new Yatzy(2,2,2,2,2).twos());
    });
});

describe("Threes", function() {
    it("score the sum of 3s", function() {
        assert.equal(6, new Yatzy(1,2,3,2,3).threes());
        assert.equal(12, new Yatzy(2,3,3,3,3).threes());
    });
});

describe("Fours", function() {
    it("score the sum of 4s", function() {
        assert.equal(12, new Yatzy(4,4,4,5,5).fours());
        assert.equal(8, new Yatzy(4,4,5,5,5).fours());
        assert.equal(4, new Yatzy(4,5,5,5,5).fours());
    });
});

describe("Fives", function() {
    it("score the sum of fives", function() {
        assert.equal(10, new Yatzy(4,4,4,5,5).fives());
        assert.equal(15, new Yatzy(4,4,5,5,5).fives());
        assert.equal(20, new Yatzy(4,5,5,5,5).fives());
    });
});

describe("Sixes", function() {
    it("score the sum of sixes", function() {
        assert.equal(0, new Yatzy(4,4,4,5,5).sixes());
        assert.equal(6, new Yatzy(4,4,6,5,5).sixes());
        assert.equal(18, new Yatzy(6,5,6,6,5).sixes());
    });
});

describe("One pair", function() {
    it("scores the sum of the highest pair", function() {
        assert.equal(6, new Yatzy().sumHighestPair([3,4,3,5,6]));
        assert.equal(10, new Yatzy().sumHighestPair([5,3,3,3,5]));
        assert.equal(12, new Yatzy().sumHighestPair([5,3,6,6,5]));
    });
});

describe("Two pair", function() {
    it("scores the sum of the two pairs", function() {
        assert.equal(16, new Yatzy(3,3,5,4,5).sumHighestTwoPairs());
        assert.equal(16, new Yatzy(3,3,5,5,5).sumHighestTwoPairs());
    });
});

describe("Three of a kind", function() {
    it("scores the sum of the three of the kind", function() {
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,4,5));
        assert.equal(15, Yatzy.three_of_a_kind(5,3,5,4,5));
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,3,5));
    });
});

describe("Four of a kind", function() {
    it("scores the sum of the four of the kind", function() {
        assert.equal(12, Yatzy.four_of_a_kind(3,3,3,3,5));
        assert.equal(20, Yatzy.four_of_a_kind(5,5,5,4,5));
        assert.equal(9, Yatzy.three_of_a_kind(3,3,3,3,3));
    });
});

describe("Small straight", function() {
    it("scores 15", function() {
        assert.equal(15, Yatzy.smallStraight(1,2,3,4,5));
        assert.equal(15, Yatzy.smallStraight(2,3,4,5,1));
        assert.equal(0, Yatzy.smallStraight(1,2,2,4,5));
    });
});

describe("Large straight", function() {
    it("scores 20", function() {
        assert.equal(20, Yatzy.largeStraight(6,2,3,4,5));
        assert.equal(20, Yatzy.largeStraight(2,3,4,5,6));
        assert.equal(0, Yatzy.largeStraight(1,2,2,4,5));
    });
});

describe("Full house", function() {
    it("scores the sum of the full house", function() {
        assert.equal(18, Yatzy.fullHouse(6,2,2,2,6));
        assert.equal(0, Yatzy.fullHouse(2,3,4,5,6));
    });
});
