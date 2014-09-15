import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      posts: this.store.find('post'),
      categories: this.store.find('category')
    });
  }
});
