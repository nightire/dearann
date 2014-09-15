import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var promises = [
      this.store.find('post'),
      this.store.find('category')
    ];

    Ember.RSVP.all(promises, '触发每一篇文章去获取所属的分类').
      then(function (data) { data[0].getEach('category'); });

    return Ember.RSVP.hash({
      posts: promises[0],
      categories: promises[1]
    }, '获取所有文章及所有分类');
  }
});
