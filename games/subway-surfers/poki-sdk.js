// Local no-op Poki SDK stub (replaces remote/portal SDK; game runs fully offline).
window.PokiSDK = (function () {
  var RESOLVED = Promise.resolve();
  function noop() {}
  function resolved() { return RESOLVED; }
  function resolvedFalse() { return Promise.resolve(false); }
  var api = {
    init: resolved,
    initWithVideoHB: resolved,
    customEvent: noop,
    destroyAd: noop,
    getLeaderboard: resolved,
    rewardedBreak: resolvedFalse,
    commercialBreak: resolved,
    setDebug: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    gameLoadingStart: noop,
    gameLoadingFinished: noop,
    gameInteractive: noop,
    gameLoadingProgress: noop,
    happyTime: noop,
    roundStart: noop,
    roundEnd: noop,
    muteAd: noop,
    disableProgrammatic: noop,
    setPlayerAge: noop,
    togglePlayerAdvertisingConsent: noop,
    toggleNonPersonalized: noop,
    setConsentString: noop,
    logError: noop,
    sendHighscore: noop,
    setDebugTouchOverlayController: noop
  };
  return api;
})();
