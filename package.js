Package.describe({
    'summary': 'Simple and fancy notifications / alerts / errors for Meteor',
    'version': '4.0.0',
    'git': 'https://github.com/Fasal-Tech/meteor-s-alert.git',
    'name': 'mrspark:s-alert'
});

Package.onUse(function (api) {
    api.versionsFrom('3.0.4');
    api.use('mongo');
    api.use('templating@1.4.4');
    api.use('blaze@3.0.0');
    api.use('underscore');
    api.use(['jquery@3.0.2', 'session'], ['client']);
    api.addFiles([
        'client/s-alert.js',
        'client/s-alert-collection.js',
        'client/s-alert-default.css',
        'client/s-alert-template.html',
        'client/s-alert-template.js'
    ], 'client');
    api.export('sAlert', ['client']);
});
Package.onTest(function (api) {
    Npm.depends({ chai: '5.1.2' });
    api.versionsFrom('3.0.4');
    api.use(['jquery@3.0.2'], ['client']);
    api.use([
        'templating@1.4.4',
        'mrspark:s-alert@4.0.0',
        'meteortesting:mocha',
    ]);
    api.addFiles(['tests/s-alert-test.js'], 'client');
});

