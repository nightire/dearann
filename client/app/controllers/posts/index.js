import Ember from 'ember';

var computed = Ember.computed;

export default Ember.ArrayController.extend({
  needs: ['posts'],

  posts: computed('controllers.posts.category', function () {
    var posts = this.get('model');
    var category = this.get('controllers.posts.category');
    return category ? posts.filterBy('category.urlName', category) : posts;
  })
});
