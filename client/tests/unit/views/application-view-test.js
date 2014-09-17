import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('view:application', '单元测试－ApplicationView');

test('属性 menuIsHidden', function () {
  expect(3);
  var view = this.subject();
  equal(
    view.get('menuIsHidden'), true,
    '默认值为 true'
  );

  view.send('toggleMenu');
  equal(
    view.get('menuIsHidden'), false,
    '触发 #toggleMenu 改变 menuIsHidden 的值为 false'
  );

  view.send('toggleMenu');
  equal(
    view.get('menuIsHidden'), true,
    '再次触发 #toggleMenu 再次改变 menuIsHidden 的值为 true'
  );
});
