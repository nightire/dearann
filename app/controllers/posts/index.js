import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: '',

  currentCategory: computed('category', function () {
    return this.get('model.categories').
      filterBy('urlName', this.get('category')).get('firstObject');
  }),

  posts: computed('category', function () {
    var posts = this.get('model.posts');
    var category = this.get('category');
    return category ? posts.filterBy('category.urlName', category) : posts;
  })
});
