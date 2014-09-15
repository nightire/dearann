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

test('全部文章的列表', function () {
  expect(2);
  visit('/posts');

  andThen(function () {
    equal(currentPath(), 'posts.index');
    equal(currentURL(), '/posts');
  });
});

test('按分类筛选的文章列表', function () {
  expect(2);
  visit('/posts?category=test');

  andThen(function () {
    equal(currentPath(), 'posts.index');
    equal(currentURL(), '/posts?category=test');
  });
});

test('单篇文章', function () {
  expect(2);
  visit('/posts/54');

  andThen(function () {
    var post_id = this.app.get('Router.router.state.params.post.post_id');
    equal(post_id, '54');
    equal(currentURL(), '/posts/54');
  }.bind(this));
});
