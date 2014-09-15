import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:posts/index', '单元测试：PostsIndexController');

test('查询参数', function () {
  var controller = this.subject();
  equal(controller.get('category'), '', 'category 默认是空字符串');
});
