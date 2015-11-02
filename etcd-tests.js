Tinytest.add('Etcd - Can create Etcd client', function (test) {
  test.isNotNull(new Etcd(), 'Etcd client creation failed!');
});
