'use strict';

PhonicsApp.service('Storage', ['$localStorage', function Storage($localStorage) {
  var storageKey = 'SwaggerEditorCache';
  var changeListeners = [];

  function setSpecs(specs){
    $localStorage[storageKey] = specs;
    changeListeners.forEach(function (fn) {
      fn(specs);
    });
  }

  this.save = function (specs){
    setSpecs(specs);
  };

  this.reset = function () {
    setSpecs(null);
  };

  this.load = function (){
    return $localStorage[storageKey];
  };

  this.addChangeListener = function (fn) {
    if (typeof fn === 'function') {
      changeListeners.push(fn);
    }
  };
}]);