import redirect from '../utils/redirect';

export var initialize = function() {
  let application = arguments[0];
  let config = arguments[1];
  var url = config.cordova.emberUrl || 'http://localhost:4200';
  return redirect(url);
};

export default {
  name: 'cordova:in-app-livereload',
  initialize: initialize
};
