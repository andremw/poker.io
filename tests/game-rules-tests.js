var assert = require('assert');

describe('poker rules', function() {

    var player1 = null,
        player2 = null,
        engine = null;

    beforeEach(function(done) {

        // start engine
        // start p1
        // start p2

        //engine.shuffle();
        //engine.giveHands(player1, player2);

        done();
    });

    it('should be a tie when two players have the same 5 cards', function (done) {

        var player1 = null,
            player2 = null;

        engine.setFlop();
        engine.setTurn();
        engine.setRiver();

        var result = engine.evaluate(player1, player2);

        assert.equal(result.winner, 'tie');

        done();
    });

    it('should have p1 as winner when having high card', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');

        done();
    });

    it('should have p1 as winner when having one pair', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');

        done();
    });

    it('should have p1 as winner when having two pairs', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');

        done();
    });

    it('should have p1 as winner when having a three of a kind', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a straight', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a flush', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a full house', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a four of a kind', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a straight flush', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

    it('should have p1 as winner when having a royal [straight] flush', function(done) {

        var result = engine.evaluate(player1, player2);
        assert.equal(result.winner, 'player1');
        done();
    });

});
