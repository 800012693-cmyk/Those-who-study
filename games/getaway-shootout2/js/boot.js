/* No-op CrazyGames SDK stub: the build embeds the official CrazySDK and calls it for
   ads/user data. Without the portal script this keeps every SDK call harmless. */
window.CrazyGames = {
  SDK: {
    init: function(){ return Promise.resolve(); },
    gameplayStart: function(){}, gameplayStop: function(){},
    ad: { requestAd: function(){ return Promise.reject(new Error('ads-unavailable')); } },
    banner: function(type, cb){ try { (cb||function(){})("finished"); } catch(e){} },
    rewardedBanner: function(cb){ try { (cb||function(){})("finished"); } catch(e){} },
    user: { getUser: function(){ return Promise.resolve(null); },
            getToken: function(){ return Promise.resolve(null); },
            getUserAndToken: function(){ return Promise.resolve(null); } },
    data: { clearAllItems: function(){}, deleteItem: function(k){ try{ localStorage.removeItem(k); }catch(e){} },
            getItem: function(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
            setItem: function(k, v){ try{ localStorage.setItem(k, v); }catch(e){} } },
    environment: { getEnvironment: function(){ return Promise.resolve('local'); } },
    game: { sdkGameLoadingStart: function(){}, sdkGameLoadingStop: function(){} },
    hasAllTranslationCached: function(){ return Promise.resolve(true); }
  }
};

function toggleFullscreen() {
  if (document.fullscreenElement) { document.exitFullscreen(); }
  else if (document.documentElement.requestFullscreen) { document.documentElement.requestFullscreen(); }
}
document.getElementById("fsBtn").addEventListener("click", toggleFullscreen);

var B = "Build/";
createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: B + "864872d3e8c17c58e54028c101dae7a5.data",
  frameworkUrl: B + "dbc6f14bf976310a49dda5b1237392f2.js",
  codeUrl: B + "c0f8b2f06ae4c7c89b1e883b3d07ca8f.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "New Eich Games",
  productName: "Getaway Shootout",
  productVersion: "1.2.3",
}, function(p) {
  document.getElementById("ai").textContent = "Loading " + Math.round(p * 100) + "%";
});
