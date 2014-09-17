import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DearannENV.locationType
});

Router.map(function() {
  this.resource('posts', function () {
    this.route('new');
  });
  this.resource('post', { path: '/posts/:post_id' });
});

export default Router;
