import Ember from 'ember';

export default Ember.View.extend({
  menuIsHidden: true,

  actions: {
    toggleMenu: function () { this.toggleProperty('menuIsHidden'); }
  }
});
