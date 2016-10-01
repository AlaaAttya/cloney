/**
 * @author Alaa Attya <alaa.attya91@gmail.com>
 */
var expect = require('chai').expect;


describe("#Clone module", function() {
    var clone = require('../index.js');
    
    it("check the cloning of all the properties", function() {
        var obj1 = {foo: 1, bar: 2};
        expect(clone(obj1)).to.deep.equal(obj1);
    });
});