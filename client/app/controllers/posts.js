import Ember from 'ember';

var computed = Ember.computed;

export default Ember.ArrayController.extend({
  withBreadCrumb: true,

  queryParams: ['category'],
  category: '',

  currentCategory: computed('category', function () {
    return this.get('model').
      filterBy('urlName', this.get('category')).get('firstObject');
  })
});
