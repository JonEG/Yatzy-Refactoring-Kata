var assert = require("assert");
var {
    Chance, Yatzy,
    Ones, Twos, Threes, Fours, Fives, Sixes,
    Pair, TwoPairs, ThreeOfAKind, FourOfAKind, FullHouse,
    SmallStraight, LargeStraight,
} = require("../lib/yatzy2");

describe('Yatzy', function () {
    it('Chance scores sum of all dice', function () {
        assert.equal(15, Chance.score([2, 3, 4, 5, 1]));
        assert.equal(16, Chance.score([3, 3, 4, 5, 1]));
    });


    it('yatzy_scores_50', function () {
        assert.equal(50, Yatzy.score([4, 4, 4, 4, 4]));
        assert.equal(50, Yatzy.score([6, 6, 6, 6, 6]));
        assert.equal(0, Yatzy.score([6, 6, 6, 6, 3]));
    })


    it('test_1s', function () {
        assert.equal(1, Ones.score([1, 2, 3, 4, 5]));
        assert.equal(2, Ones.score([1, 2, 1, 4, 5]));
        assert.equal(0, Ones.score([6, 2, 2, 4, 5]));
        assert.equal(4, Ones.score([1, 2, 1, 1, 1]));
    })


    it('twos', function () {
        assert.equal(4, Twos.score([1, 2, 3, 2, 6]));
        assert.equal(10, Twos.score([2, 2, 2, 2, 2]));
    })


    it('threes', function () {
        assert.equal(6, Threes.score([1, 2, 3, 2, 3]));
        assert.equal(12, Threes.score([2, 3, 3, 3, 3]));
    })


    it('fours', function () {
        assert.equal(12, Fours.score([4, 4, 4, 5, 5]));
        assert.equal(8, Fours.score([4, 4, 5, 5, 5]));
        assert.equal(4, Fours.score([4, 5, 5, 5, 5]));
    })


    it('fives', function () {
        assert.equal(10, Fives.score([4, 4, 4, 5, 5]));
        assert.equal(15, Fives.score([4, 4, 5, 5, 5]));
        assert.equal(20, Fives.score([4, 5, 5, 5, 5]));
    })


    it('sixes', function () {
        assert.equal(0, Sixes.score([4, 4, 4, 5, 5]));
        assert.equal(6, Sixes.score([4, 4, 6, 5, 5]));
        assert.equal(18, Sixes.score([6, 5, 6, 6, 5]));
    })


    it('pair', function () {
        assert.equal(6, Pair.score([3, 4, 3, 5, 6]));
        assert.equal(10, Pair.score([5, 3, 3, 3, 5]));
        assert.equal(12, Pair.score([5, 3, 6, 6, 5]));
    })


    it('two_pair', function () {
        assert.equal(16, TwoPairs.score([3, 3, 5, 4, 5]));
        assert.equal(16, TwoPairs.score([3, 3, 5, 5, 5]));
    })


    it('three_of_a_kind', function () {
        assert.equal(9, ThreeOfAKind.score([3, 3, 3, 4, 5]));
        assert.equal(15, ThreeOfAKind.score([5, 3, 5, 4, 5]));
        assert.equal(9, ThreeOfAKind.score([3, 3, 3, 3, 5]));
    })


    it('four_of_a_knd', function () {
        assert.equal(12, FourOfAKind.score([3, 3, 3, 3, 5]));
        assert.equal(20, FourOfAKind.score([5, 5, 5, 4, 5]));
        assert.equal(12, FourOfAKind.score([3, 3, 3, 3, 3]));
    })


    it('smallStraight', function () {
        assert.equal(15, SmallStraight.score([1, 2, 3, 4, 5]));
        assert.equal(15, SmallStraight.score([2, 3, 4, 5, 1]));
        assert.equal(0, SmallStraight.score([1, 2, 2, 4, 5]));
    })


    it('largeStraight', function () {
        assert.equal(20, LargeStraight.score([6, 2, 3, 4, 5]));
        assert.equal(20, LargeStraight.score([2, 3, 4, 5, 6]));
        assert.equal(0, LargeStraight.score([1, 2, 2, 4, 5]));
    })


    it('fullHouse', function () {
        assert.equal(18, FullHouse.score([6, 2, 2, 2, 6]));
        assert.equal(0, FullHouse.score([2, 3, 4, 5, 6]));
    })
});