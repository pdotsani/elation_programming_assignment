var assert = require('assert');

var sample_1 = require('./sample_expectations_rd1.json');
var sample_2 = require('./sample_expectations_rd2.json');

var App = require('./app.js');

var a = App.PreviousThree(126, 10540, 1245);
console.log("*** Test for Initial Lab Results ***");
console.log(JSON.stringify(a, null, ' '));

var b = App.PreviousThree(true, 1245, 119);
console.log("*** Test for New Lab Results ***");
console.log(JSON.stringify(b, null, ' '));

describe('Elation Programming Assessment', function() {
  describe('Initial Lab Results', function() {
    it('should match the sample expectations', function() {
      assert.equal(sample_1[0]['last_three_values'][0]['result_id'], a[0]['last_three_values'][0]['result_id']);
      assert.equal(sample_1[0]['last_three_values'][1]['result_id'], a[0]['last_three_values'][1]['result_id']);
      assert.equal(sample_1[0]['last_three_values'][2]['result_id'], a[0]['last_three_values'][2]['result_id']);

      assert.equal(sample_1[1]['last_three_values'][0]['result_id'], a[1]['last_three_values'][0]['result_id']);
      assert.equal(sample_1[1]['last_three_values'][1]['result_id'], a[1]['last_three_values'][1]['result_id']);
      assert.equal(sample_1[1]['last_three_values'][2]['result_id'], a[1]['last_three_values'][2]['result_id']);

      assert.equal(sample_1[2]['last_three_values'][0]['result_id'], a[2]['last_three_values'][0]['result_id']);
      assert.equal(sample_1[2]['last_three_values'][1]['result_id'], a[2]['last_three_values'][1]['result_id']);
      assert.equal(sample_1[2]['last_three_values'][2]['result_id'], a[2]['last_three_values'][2]['result_id']);
    });
    it('should all have the same name', function() {
    	assert.equal("HDL", a[0]['last_three_values'][0]['name']);
    	assert.equal("HDL", a[0]['last_three_values'][1]['name']);
    	assert.equal("HDL", a[0]['last_three_values'][2]['name']);

    	assert.equal("Triglycerides", a[1]['last_three_values'][0]['name']);
    	assert.equal("Triglycerides", a[1]['last_three_values'][1]['name']);
    	assert.equal("Triglycerides", a[1]['last_three_values'][2]['name']);

    	assert.equal("HDL", a[2]['last_three_values'][0]['name']);
    	assert.equal("HDL", a[2]['last_three_values'][1]['name']);
    	assert.equal("HDL", a[2]['last_three_values'][2]['name']);
    });
    it('should return the given search id', function() {
    	assert.equal(sample_1[0]['result_id'], 126);
    	assert.equal(sample_1[1]['result_id'], 10540);
    	assert.equal(sample_1[2]['result_id'], 1245);
    });
  });
  describe('New Lab Results', function() {
    it('should match the sample expectations', function() {
      assert.equal(sample_2[0]['last_three_values'][0]['result_id'], b[0]['last_three_values'][0]['result_id']);
      assert.equal(sample_2[0]['last_three_values'][1]['result_id'], b[0]['last_three_values'][1]['result_id']);
      assert.equal(sample_2[0]['last_three_values'][2]['result_id'], b[0]['last_three_values'][2]['result_id']);

      assert.equal(sample_2[1]['last_three_values'][0]['result_id'], b[1]['last_three_values'][0]['result_id']);
      assert.equal(sample_2[1]['last_three_values'][1]['result_id'], b[1]['last_three_values'][1]['result_id']);
      assert.equal(sample_2[1]['last_three_values'][2]['result_id'], b[1]['last_three_values'][2]['result_id']);
    });
    it('should all have the same name', function() {
    	assert.equal("HDL", b[0]['last_three_values'][0]['name']);
    	assert.equal("HDL", b[0]['last_three_values'][1]['name']);
    	assert.equal("HDL", b[0]['last_three_values'][2]['name']);

    	assert.equal("HDL", b[1]['last_three_values'][0]['name']);
    	assert.equal("HDL", b[1]['last_three_values'][1]['name']);
    	assert.equal("HDL", b[1]['last_three_values'][2]['name']);
    });
    it('should return the given search id', function() {
    	assert.equal(sample_2[0]['result_id'], 1245);
    	assert.equal(sample_2[1]['result_id'], 119);
    });
  });
});
