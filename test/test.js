var templateEngine = require('../lib/index');

exports.Test_That_Name_Gets_Replaces_When_Has_Model = function (test) {
	templateEngine.RenderTemplate('test', { name: 'Daniel' }, function (renderedHTML) {
		test.equal('Hey Daniel', renderedHTML);
		test.done();
	});
}

exports.Test_That_Name_Is_Empty_When_Not_In_Model = function (test) {
	templateEngine.RenderTemplate('test', {}, function (renderedHTML) {
		test.equal('Hey ', renderedHTML);
		test.done();
	});
}

exports.Test_That_Testing_Model_Is_Loaded = function(test){
	templateEngine.RenderTemplate('test2', {isTest: true}, function (renderedHTML) {
		test.equal('Hello Test', renderedHTML);
		test.done();
	});
}