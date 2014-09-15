/* global Pretender, moment */
import Ember from 'ember';
import startApp from '../helpers/start-app';
import postFixtures from '../fixtures/posts';
import categoryFixtures from '../fixtures/categories';

module('验收测试－文章', {
  setup: function () {
    this.app = startApp();
    this.server = new Pretender(function () {
      this.get('/posts', function (request) {
        return [200, { "Content-Type": "application/json" }, postFixtures];
      });

      this.get('/categories', function (request) {
        return [200, { "Content-Type": "application/json" }, categoryFixtures];
      });
    });

    this.server.prepareBody = function (body) {
      return body ? JSON.stringify(body) : '{ "error": "record(s) not found" }';
    };

    this.server.unhandledRequest = function (verb, path, request) {
      console.warn(verb, path, request);
    };
  },
  teardown: function () {
    Ember.run(this.app, 'destroy');
    this.server.shutdown();
  }
});

test('面包屑导航', function () {
  visit('posts');

  andThen(function () {
    var breadcrumb = find('.breadcrumb');
    ok(breadcrumb.text().indexOf('»') === -1, '浏览全部时没有子导航');
  });

  visit('posts/?category=parlor');

  andThen(function () {
    var breadcrumb = find('.breadcrumb');
    ok(breadcrumb.text().indexOf('»') !== -1, '按分类浏览时有子导航');
  });
});

test('列表', function () {
  expect(7);
  visit('/posts');

  andThen(function () {
    var articles = find('._post', '.posts');
    equal(articles.length, 3, '全部文章列出');

    articles.each(function (index, article) {
      var datetime = find('._post-date', article);
      equal(datetime.text().indexOf('日'), 11, '每篇文章都有发表日期');

      var category = find('._post-meta > a', article);
      equal(category.attr('href').indexOf('?'), 6, '每篇文章都有所属分类的链接');
    });
  });
});
