/* globals cordova */

import config from '../config/environment';
import reloadInitializer from 'ember-cli-cordova/initializers/in-app-livereload';

var inAppReload = reloadInitializer.initialize;

export var initialize = function(application) {
  if(typeof cordova === 'undefined' ||
      config.environment !== 'development' ||
      (config.cordova &&
        (!config.cordova.liveReload || !config.cordova.liveReload.enabled))) {
    return;
  }

  return inAppReload(application, config);
};

export default {
  name: 'cordova:in-app-livereload',
  initialize: initialize
};
