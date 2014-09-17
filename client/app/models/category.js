import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name:      attr('string'),
  urlName:   attr('string'),
  posts:     hasMany('post', { async: true }),
  createdAt: attr('date', { defaultValue: moment().format() }),
  updatedAt: attr('date', { defaultValue: moment().format() })
});
