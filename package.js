Package.describe({
  name: 'greyarch:etcd',
  version: '0.1.0',
  summary: 'A nodejs library for etcd. This is a wrapper for the node-etcd NPM package.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('etcd.js');
  api.export('Etcd', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('greyarch:etcd');
  api.addFiles('etcd-tests.js', 'server');
});

Npm.depends({"node-etcd": "4.2.1"});
