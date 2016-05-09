var assert = require('assert'),
    cricket = require('../cricket');

describe('cricket', function() {
    it('should return current temperature depending on the number of cricket chirps per 15s', function() {
        assert.equal(cricket(13), 23);
    });
});
