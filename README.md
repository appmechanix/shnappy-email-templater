shnappy-email-templater
=======================

Merges JS objects into HTML templates using handlebars

Installing
==========

```
npm install hooq-reporting --save
```

Setup
=====

Uses config to define the template path. Make sure to set it in your config/default.json file.

Example
=======

```javascript
var templateEngine = require('shnappy-email-templater');

templateEngine.RenderTemplate('templateName', {name:'dwnz'}, function(output){
    console.log(output);
});

```

Methods
=======

RenderTemplate(templateName, model, callback);

Testing
=======

```
npm test
```