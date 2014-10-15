import Ember from 'ember';
import Resolver from 'ember/resolver';
import config from './config/environment';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  Resolver: Resolver,
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  ready: function () {
    moment.locale('zh-cn');
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
