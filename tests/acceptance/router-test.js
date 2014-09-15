import Ember from 'ember';
import startApp from '../helpers/start-app';

module('验收测试－路由', {
  setup: function () {
    this.app = startApp();
  },
  teardown: function () {
    Ember.run(this.app, 'destroy');
  }
});

test('首页', function () {
  expect(2);
  visit('/');

  andThen(function () {
    equal(currentPath(), 'index');
    equal(currentURL(), '/');
  });
});

test('全部文章', function () {
  expect(2);
  visit('/posts');

  andThen(function () {
    equal(currentPath(), 'posts.index');
    equal(currentURL(), '/posts');
  });
});

test('按分类筛选的文章', function () {
  expect(2);
  visit('/posts?category=test');

  andThen(function () {
    equal(currentPath(), 'posts.index');
    equal(currentURL(), '/posts?category=test');
  });
});
