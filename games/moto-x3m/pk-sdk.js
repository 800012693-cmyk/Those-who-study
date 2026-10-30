// Local no-op PokiSDK stub so the game code's PokiSDK.init() path resolves offline.
window.PokiSDK = {
  init: function(){ return Promise.resolve(); },
  gameLoadingStart: function(){}, gameLoadingFinished: function(){},
  gameplayStart: function(){}, gameplayStop: function(){},
  commercialBreak: function(){ return Promise.resolve(); },
  happyTime: function(){}, customEvent: function(){}, setDebug: function(){},
  destroy: function(){}
};
