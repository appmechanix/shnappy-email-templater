const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const config = require('config');

exports.RenderTemplate = function(templateName, model, callback) {
    var templatePath = path.join(process.cwd(), config.Email.TemplatePath, templateName + '.html');

    if (model.isTest) {
        model = JSON.parse(fs.readFileSync(path.join(process.cwd(), config.Email.TemplatePath, 'test', templateName + '.json')));
    }

    fs.stat(templatePath, function(err, stat) {
        if (err === null) {
            fs.readFile(templatePath, 'utf8', function(err, data) {
                var template = handlebars.compile(data);
                callback(template(model));
            });

            return;
        }

        throw new Error("Template doesn't exist");
    });
};