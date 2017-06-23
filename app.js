'use strict'

var initial_lab = require('./initial_lab_results.json');
var new_lab = require('./new_lab_results.json');

function getValues(new_labs, result_id) {
	var tmp = [];
	var patient;
	var name;
	// Get patient id (gather from appropriate json file based on new_labs var)
	for(var i = 0; i < initial_lab.length; i++) {
		if(result_id === initial_lab[i].result_id) {
			patient = initial_lab[i].patient_id;
			name = initial_lab[i].name;
			break;
		}
	}

	// Compare result_id with new lab results
	if(new_labs) {
		new_lab.forEach(function(record) {
			if(record.patient_id === patient && record.name === name) {
				tmp.push(record);
			}
		});
	}

	// Compare result_id with initial lab results
	initial_lab.forEach(function(record) {
		if(record.patient_id === patient && record.name === name) {
			tmp.push(record);
		}
	});

	// Sort in order by date
	tmp.sort(function(a, b) {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// Get top 3 results and return result
	// Get matching results with name
	var idx = tmp.findIndex(function(record) { 
		return record.result_id === result_id 
	});

	return { last_three_values: tmp.slice(idx + 1, idx + 4) };
}

exports.PreviousThree = function() {
	var results = [];
	
	if(typeof arguments[0] === 'boolean') {
		var new_labs = arguments[0];
		for(var k in arguments) {
			if(k !== '0') {
				var prev_three = getValues(arguments[0], arguments[k]);
				prev_three['result_id'] = arguments[k];
				results.push(prev_three);
			}
		}
	} else {
		for(var k in arguments) {
			var prev_three = getValues(false, arguments[k]);
			prev_three['result_id'] = arguments[k];
			results.push(prev_three);
		}
	}
	return results;
}