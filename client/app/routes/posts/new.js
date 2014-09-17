import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('post');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    this.controllerFor('posts').set('withBreadCrumb', false);
    controller.set('categories', this.modelFor('application').categories);
  },

  actions: {
    willTransition: function (transition) {
      if (this.currentModel.get('isNew')) {
        if (confirm('确定要放弃尚未保存的新文章吗？')) {
          this.currentModel.destroyRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
