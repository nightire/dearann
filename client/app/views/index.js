import Ember from 'ember';

export default Ember.View.extend({
  today: moment().format('LLL')
});
