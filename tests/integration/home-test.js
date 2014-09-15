import Ember from 'ember';
import startApp from '../helpers/start-app';
import postsFixture from '../fixtures/posts';
import categoriesFixture from '../fixtures/categories';

var app;
var server;

module('集成测试－首页', {
  setup: function () {
    app = startApp();
    server = new Pretender(function () {
      this.get('/posts', function (request) {
        return [200, { "Content-Type": "application/json" }, postsFixture];
      });

      this.get('/categories', function (request) {
        return [200, { "Content-Type": "application/json" }, categoriesFixture];
      });
    });

    server.prepareBody = function (body) {
      return body ? JSON.stringify(body) : '{ "error": "record(s) not found" }';
    };
  },
  teardown: function () {
    Ember.run(app, 'destroy');
    server.shutdown();
  }
});

test('页首', function () {
  expect(2);
  visit('/');

  andThen(function () {
    var brand = find('a.brand').length;
    var categoriesLinks = find('a', 'nav[role=navigation]').length;
    equal(brand, 1, 'LOGO 元素存在');
    equal(categoriesLinks, 2, '分类导航链接存在');
  });
});

test('页尾', function () {
  expect(1);
  visit('/');

  andThen(function () {
    var poweredBy = find('p.powered-by').length;
    equal(poweredBy, 1, 'Powered By 元素存在');
  });
});
