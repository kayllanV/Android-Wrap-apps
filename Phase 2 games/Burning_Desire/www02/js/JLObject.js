/*global lobby,window,jQuery,log,console,Notification*/
(function (global, undefined) {

  // creates a dummy JL options object to store the JSNLog configuration
  global.JL = {
    setOptions: function (options) {
      global.JLOptions = options;
    }
  };
}(window));