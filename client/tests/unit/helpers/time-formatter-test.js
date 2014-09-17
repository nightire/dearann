/* global moment */
import {
  timeFormatter
} from 'dearann/helpers/time-formatter';

module('单元测试－timeFormatterHelper', {
  setup: function () {
    moment.locale('zh-cn');
  },
  teardown: function () {
    moment.locale();
  }
});

test('转换时间字符串为阅读友好格式', function() {
  expect(1);
  var rawTime  = '2014-09-14T09:55:36.792Z';
  var expected = '下午 05:55';
  var result   = timeFormatter(rawTime, 'a hh:mm');
  equal(result, expected, '转换成功');
});
