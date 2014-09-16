import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('rich-editor', '单元测试－RichEditorComponent');

test('创建与渲染', function() {
  expect(1);

  var component = this.subject();
  equal(component._state, 'preRender');

  /* 因为 CKEDITOR 作为外部依赖，所以无法进行单元测试
  this.append();
  equal(component._state, 'inDOM');
  */
});
