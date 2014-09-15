import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  title:     attr('string'),
  content:   attr('string'),
  createdAt: attr('string'),
  updatedAt: attr('string'),
  category:  belongsTo('category', { async: true }),
  isEvent:   attr('boolean', { defaultValue: false }),
  openAt:    attr('string',  { defaultValue: null }),
  closeAt:   attr('string',  { defaultValue: null })
});
