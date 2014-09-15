/* global Pretender */
import Ember from 'ember';
import startApp from '../helpers/start-app';
import postsFixture from '../fixtures/posts';
import categoriesFixture from '../fixtures/categories';

module('验收测试－首页', {
  setup: function () {
    this.app = startApp();
    this.server = new Pretender(function () {
      this.get('/posts', function (request) {
        return [200, { "Content-Type": "application/json" }, postsFixture];
      });

      this.get('/categories', function (request) {
        return [200, { "Content-Type": "application/json" }, categoriesFixture];
      });
    });

    this.server.prepareBody = function (body) {
      return body ? JSON.stringify(body) : '{ "error": "record(s) not found" }';
    };
  },
  teardown: function () {
    Ember.run(this.app, 'destroy');
    this.server.shutdown();
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

test('海报和标语', function () {
  expect(2);
  visit('/');

  andThen(function () {
    var standout = find('section.standout').length;
    var slogan = find('h1.slogan', 'section.standout').text();
    equal(standout, 1, '海报元素存在');
    equal(slogan, 'We Are Living In Shanghai', '标语文字正确');
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
