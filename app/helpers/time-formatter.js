import Ember from 'ember';

function timeFormatter(value, format) {
  return moment(value).format(format);
}

export {
  timeFormatter
};

export default Ember.Handlebars.makeBoundHelper(timeFormatter);
