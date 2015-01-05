var fs = require('fs');
var handlebars = require('handlebars');
var config = require('config');

exports.RenderTemplate = function (templateName, model, callback) {
    var path = process.cwd() + config.Email.TemplatePath + templateName + '.html';

    fs.stat(path, function (err, stat) {
        if (err === null) {
            fs.readFile(path, 'utf8', function (err, data) {
                var template = handlebars.compile(data);
                callback(template(model));
            });

            return;
        }

        throw new Error("Template doesn't exist");
    });
};