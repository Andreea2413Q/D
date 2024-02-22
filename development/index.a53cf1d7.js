// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fzxSk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "828aeb24a53cf1d7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3LleC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tltJpg = require("../multimedia/TLT.jpg");
var _tltJpgDefault = parcelHelpers.interopDefault(_tltJpg);
var _tlhJpg = require("../multimedia/TLH.jpg");
var _tlhJpgDefault = parcelHelpers.interopDefault(_tlhJpg);
var _tsomJpg = require("../multimedia/TSOM.jpg");
var _tsomJpgDefault = parcelHelpers.interopDefault(_tsomJpg);
var _ttcJpg = require("../multimedia/TTC.jpg");
var _ttcJpgDefault = parcelHelpers.interopDefault(_ttcJpg);
var _tbotlJpg = require("../multimedia/TBOTL.jpg");
var _tbotlJpgDefault = parcelHelpers.interopDefault(_tbotlJpg);
var _tloJpg = require("../multimedia/TLO.jpg");
var _tloJpgDefault = parcelHelpers.interopDefault(_tloJpg);
var _1984Jpg = require("../multimedia/1984.jpg");
var _1984JpgDefault = parcelHelpers.interopDefault(_1984Jpg);
var _tkamJpg = require("../multimedia/TKAM.jpg");
var _tkamJpgDefault = parcelHelpers.interopDefault(_tkamJpg);
var _tsonJpg = require("../multimedia/TSON.jpg");
var _tsonJpgDefault = parcelHelpers.interopDefault(_tsonJpg);
var _tmoaJpg = require("../multimedia/TMOA.jpg");
var _tmoaJpgDefault = parcelHelpers.interopDefault(_tmoaJpg);
var _thohJpg = require("../multimedia/THOH.jpg");
var _thohJpgDefault = parcelHelpers.interopDefault(_thohJpg);
var _tggJpg = require("../multimedia/TGG.jpg");
var _tggJpgDefault = parcelHelpers.interopDefault(_tggJpg);
var _c22Jpg = require("../multimedia/C22.jpg");
var _c22JpgDefault = parcelHelpers.interopDefault(_c22Jpg);
var _tcitrJpg = require("../multimedia/TCITR.jpg");
var _tcitrJpgDefault = parcelHelpers.interopDefault(_tcitrJpg);
var _bnnJpg = require("../multimedia/BNN.jpg");
var _bnnJpgDefault = parcelHelpers.interopDefault(_bnnJpg);
var _papJpg = require("../multimedia/PAP.jpg");
var _papJpgDefault = parcelHelpers.interopDefault(_papJpg);
var _tlotrJpg = require("../multimedia/TLOTR.jpg");
var _tlotrJpgDefault = parcelHelpers.interopDefault(_tlotrJpg);
var _bJpg = require("../multimedia/B.jpg");
var _bJpgDefault = parcelHelpers.interopDefault(_bJpg);
var _sJpg = require("../multimedia/S.jpg");
var _sJpgDefault = parcelHelpers.interopDefault(_sJpg);
var _jeJpg = require("../multimedia/JE.jpg");
var _jeJpgDefault = parcelHelpers.interopDefault(_jeJpg);
var _tdoafJpg = require("../multimedia/TDOAF.jpg");
var _tdoafJpgDefault = parcelHelpers.interopDefault(_tdoafJpg);
var _icbJpg = require("../multimedia/ICB.jpg");
var _icbJpgDefault = parcelHelpers.interopDefault(_icbJpg);
var _beJpg = require("../multimedia/BE.jpg");
var _beJpgDefault = parcelHelpers.interopDefault(_beJpg);
var _eJpg = require("../multimedia/E.jpg");
var _eJpgDefault = parcelHelpers.interopDefault(_eJpg);
var _itJpg = require("../multimedia/IT.jpg");
var _itJpgDefault = parcelHelpers.interopDefault(_itJpg);
var _dJpg = require("../multimedia/D.jpg");
var _dJpgDefault = parcelHelpers.interopDefault(_dJpg);
var _exJpg = require("../multimedia/EX.jpg");
var _exJpgDefault = parcelHelpers.interopDefault(_exJpg);
var _fJpg = require("../multimedia/F.jpg");
var _fJpgDefault = parcelHelpers.interopDefault(_fJpg);
var _pJpg = require("../multimedia/P.jpg");
var _pJpgDefault = parcelHelpers.interopDefault(_pJpg);
var _hJpg = require("../multimedia/H.jpg");
var _hJpgDefault = parcelHelpers.interopDefault(_hJpg);
var _bookJpg = require("../multimedia/BOOK.jpg");
var _bookJpgDefault = parcelHelpers.interopDefault(_bookJpg);
var _atlwcsJpg = require("../multimedia/ATLWCS.jpg");
var _atlwcsJpgDefault = parcelHelpers.interopDefault(_atlwcsJpg);
var _nJpg = require("../multimedia/N.jpg");
var _nJpgDefault = parcelHelpers.interopDefault(_nJpg);
var _whJpg = require("../multimedia/WH.jpg");
var _whJpgDefault = parcelHelpers.interopDefault(_whJpg);
var _tpoteJpg = require("../multimedia/TPOTE.jpg");
var _tpoteJpgDefault = parcelHelpers.interopDefault(_tpoteJpg);
var _oJpg = require("../multimedia/O.jpg");
var _oJpgDefault = parcelHelpers.interopDefault(_oJpg);
var _gwtwJpg = require("../multimedia/GWTW.jpg");
var _gwtwJpgDefault = parcelHelpers.interopDefault(_gwtwJpg);
var _shJpg = require("../multimedia/SH.jpg");
var _shJpgDefault = parcelHelpers.interopDefault(_shJpg);
var cart = [];
var cartPrice = 0;
var isCartVisible = false;
const books = [
    {
        name: "The Lightning Thief",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src: (0, _tltJpgDefault.default)
    },
    {
        name: "The Sea of Monster",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src: (0, _tsomJpgDefault.default)
    },
    {
        name: "The Titan Curse",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 22,
        src: (0, _ttcJpgDefault.default)
    },
    {
        name: "Battle of The Labirinth",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src: (0, _tbotlJpgDefault.default)
    },
    {
        name: "The Last Olimpyan",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src: (0, _tloJpgDefault.default)
    },
    {
        name: "The Lost Hero",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 18,
        src: (0, _tlhJpgDefault.default)
    },
    {
        name: "The Son of Neptune",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: (0, _tsonJpgDefault.default)
    },
    {
        name: "The Mark of Athena",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: (0, _tmoaJpgDefault.default)
    },
    {
        name: "The House of Hades",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 22,
        src: (0, _thohJpgDefault.default)
    },
    {
        name: "Blood of Olympus",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 25,
        src: (0, _tbotlJpgDefault.default)
    },
    {
        name: "1984",
        series: "",
        category: "fiction",
        price: 15,
        src: (0, _1984JpgDefault.default)
    },
    {
        name: "To Kill a Mockingbird",
        series: "",
        category: "fiction",
        price: 18,
        src: (0, _tkamJpgDefault.default)
    },
    {
        name: "The Great Gatsby",
        series: "",
        category: "fiction",
        price: 20,
        src: (0, _tggJpgDefault.default)
    },
    {
        name: "Catch-22",
        series: "",
        category: "fiction",
        price: 22,
        src: (0, _c22JpgDefault.default)
    },
    {
        name: "The Catcher in the Rye",
        series: "",
        category: "fiction",
        price: 17,
        src: (0, _tcitrJpgDefault.default)
    },
    {
        name: "Brave New World",
        series: "",
        category: "fiction",
        price: 19,
        src: (0, _bnnJpgDefault.default)
    },
    {
        name: "The Lord of the Rings",
        series: "",
        category: "fiction",
        price: 35,
        src: (0, _tlotrJpgDefault.default)
    },
    {
        name: "Pride and Prejudice",
        series: "",
        category: "fiction",
        price: 16,
        src: (0, _papJpgDefault.default)
    },
    {
        name: "Beloved",
        series: "",
        category: "fiction",
        price: 18,
        src: (0, _bJpgDefault.default)
    },
    {
        name: "Jane Eyre",
        series: "",
        category: "fiction",
        price: 20,
        src: (0, _jeJpgDefault.default)
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        series: "",
        category: "non-fiction",
        price: 25,
        src: (0, _sJpgDefault.default)
    },
    {
        name: "Educated",
        series: "",
        category: "non-fiction",
        price: 28,
        src: (0, _eJpgDefault.default)
    },
    {
        name: "The Diary of Anne Frank",
        series: "",
        category: "non-fiction",
        price: 15,
        src: (0, _tdoafJpgDefault.default)
    },
    {
        name: "Becoming",
        series: "",
        category: "non-fiction",
        price: 30,
        src: (0, _beJpgDefault.default)
    },
    {
        name: "In Cold Blood",
        series: "",
        category: "non-fiction",
        price: 20,
        src: (0, _icbJpgDefault.default)
    },
    {
        name: "The Shining",
        series: "",
        category: "horror",
        price: 15,
        src: (0, _shJpgDefault.default)
    },
    {
        name: "It",
        series: "",
        category: "horror",
        price: 18,
        src: (0, _itJpgDefault.default)
    },
    {
        name: "Dracula",
        series: "",
        category: "horror",
        price: 12,
        src: (0, _dJpgDefault.default)
    },
    {
        name: "The Exorcist",
        series: "",
        category: "horror",
        price: 14,
        src: (0, _eJpgDefault.default)
    },
    {
        name: "Frankenstein",
        series: "",
        category: "horror",
        price: 11,
        src: (0, _fJpgDefault.default)
    },
    {
        name: "Pet Sematary",
        series: "",
        category: "horror",
        price: 13,
        src: (0, _pJpgDefault.default)
    },
    {
        name: "The Haunting of Hill House",
        series: "",
        category: "horror",
        price: 16,
        src: (0, _hJpgDefault.default)
    },
    {
        name: "The Book Thief",
        series: "",
        category: "historical fiction",
        price: 14,
        src: (0, _bookJpgDefault.default)
    },
    {
        name: "All the Light We Cannot See",
        series: "",
        category: "historical fiction",
        price: 17,
        src: (0, _atlwcsJpgDefault.default)
    },
    {
        name: "The Nightingale",
        series: "",
        category: "historical fiction",
        price: 16,
        src: (0, _nJpgDefault.default)
    },
    {
        name: "Wolf Hall",
        series: "",
        category: "historical fiction",
        price: 18,
        src: (0, _whJpgDefault.default)
    },
    {
        name: "The Pillars of the Earth",
        series: "",
        category: "historical fiction",
        price: 20,
        src: (0, _tpoteJpgDefault.default)
    },
    {
        name: "Outlander",
        series: "",
        category: "historical fiction",
        price: 15,
        src: (0, _oJpgDefault.default)
    },
    {
        name: "Gone with the Wind",
        series: "",
        category: "historical fiction",
        price: 19,
        src: (0, _gwtwJpgDefault.default)
    }
];
function displayBooks(booksToDisplay) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    booksToDisplay.forEach((book)=>{
        const bookDiv = document.createElement("div");
        bookDiv.className = "container";
        const img = document.createElement("img");
        img.src = book.src;
        img.alt = book.name;
        img.style.zIndex = "-1";
        img.style.width = "220px";
        img.style.height = "400px";
        const series = document.createElement("h4");
        series.textContent = book.series;
        const name = document.createElement("h2");
        name.textContent = book.name;
        const price = document.createElement("h1");
        price.textContent = `$${book.price}`;
        const addToCartButton = document.createElement("button");
        addToCartButton.style.height = "auto";
        addToCartButton.style.width = "200px";
        addToCartButton.innerText = "Adaug\u0103 \xeen co\u0219";
        addToCartButton.onclick = function() {
            addToCart(book);
            cartPrice += book.price;
            console.log(cartPrice);
        };
        bookDiv.appendChild(img);
        bookDiv.appendChild(name);
        bookDiv.appendChild(series);
        bookDiv.appendChild(addToCartButton);
        bookDiv.appendChild(price);
        bookList.appendChild(bookDiv);
    });
}
function addToCart(book) {
    cart.push(book);
    cartPrice += book.price;
    if (isCartVisible) showCartContents();
    updateCartUI();
}
function updateCartUI() {
    console.log(cart);
}
document.addEventListener("DOMContentLoaded", function() {
    displayBooks(books);
    document.getElementById("sort-price-asc").addEventListener("click", function() {
        sortBooks("price-asc");
    });
    document.getElementById("sort-price-desc").addEventListener("click", function() {
        sortBooks("price-desc");
    });
    document.getElementById("sort-name-asc").addEventListener("click", function() {
        sortBooks("name-asc");
    });
    document.getElementById("sort-name-desc").addEventListener("click", function() {
        sortBooks("name-desc");
    });
    const filterButtons = document.querySelectorAll("#filter-menu button");
    filterButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");
            const filteredBooks = books.filter((book)=>book.category.toLowerCase() === category.toLowerCase());
            displayBooks(filteredBooks);
        });
    });
});
function sortBooks(criteria) {
    let sortedBooks = [
        ...books
    ];
    switch(criteria){
        case "price-asc":
            sortedBooks.sort((a, b)=>a.price - b.price);
            break;
        case "price-desc":
            sortedBooks.sort((a, b)=>b.price - a.price);
            break;
        case "name-asc":
            sortedBooks.sort((a, b)=>a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sortedBooks.sort((a, b)=>b.name.localeCompare(a.name));
            break;
    }
    displayBooks(sortedBooks);
}
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("home");
    const filterButtons = document.querySelectorAll("#filter-menu button");
    const sortButtons = document.querySelectorAll(".sort");
    const filtre = document.querySelector("#filtre");
    const categoryButtons = document.querySelectorAll(".category");
    homeButton.addEventListener("click", function() {
        displayBooks(books);
        filterButtons.forEach((button)=>button.classList.remove("button-active"));
        sortButtons.forEach((button)=>button.classList.remove("button-active"));
        homeButton.classList.add("button-active");
        document.querySelector("#filtre").classList.remove("button-active");
    });
    filtre.addEventListener("click", function() {
        displayBooks(books);
        document.querySelector("#home").classList.remove("button-active");
        filterButtons.forEach((button)=>button.classList.remove("button-active"));
        sortButtons.forEach((button)=>button.classList.remove("button-active"));
        filtre.classList.add("button-active");
    });
    filterButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");
            const filteredBooks = books.filter((book)=>book.category.toLowerCase() === category.toLowerCase());
            displayBooks(filteredBooks);
            filterButtons.forEach((btn)=>btn.classList.remove("button-active"));
            this.classList.add("button-active");
            homeButton.classList.remove("button-active");
        });
    });
    sortButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            document.getElementById("home").classList.remove("button-active");
            document.getElementById("filtre").classList.remove("button-active");
            categoryButtons.forEach((btn)=>btn.classList.remove("button-active"));
            sortButtons.forEach((btn)=>btn.classList.remove("button-active"));
            this.classList.add("button-active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keyup", function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredBooks = books.filter((book)=>book.name.toLowerCase().includes(searchText));
        displayBooks(filteredBooks);
    });
});
document.getElementById("cart").addEventListener("click", showCartContents);
function removeFromCart(index) {
    cartPrice -= cart[index].price;
    cart.splice(index, 1);
    if (isCartVisible) showCartContents(); // Actualizează dinamic conținutul coșului după eliminare
    updateCartUI();
}
document.getElementById("cart").addEventListener("click", toggleCartContents);
function toggleCartContents() {
    const cartContentDiv = document.getElementById("cart-content");
    if (isCartVisible) {
        cartContentDiv.innerHTML = "";
        isCartVisible = false;
    } else {
        showCartContents();
        isCartVisible = true;
    }
}
function showCartContents() {
    const cartContentDiv = document.getElementById("cart-content");
    cartContentDiv.innerHTML = "";
    if (!isCartVisible || cart.length === 0) {
        cartContentDiv.style.display = "none";
        return;
    }
    cartContentDiv.style.display = "block";
    let total = 0;
    cart.forEach((book, index)=>{
        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
            <img src="${book.src}" alt="${book.name}" style="width: 100px; height: 150px;">
            <p>${book.name}</p>
            <p>Pre\u{21B}: $${book.price}</p>
        `;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            removeFromCart(index);
        });
        bookElement.appendChild(deleteButton);
        cartContentDiv.appendChild(bookElement);
        total += book.price;
    });
    const totalElement = document.createElement("div");
    totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
    cartContentDiv.appendChild(totalElement);
}
function hideCartContents() {
    const cartContentDiv = document.getElementById("cart-content");
    cartContentDiv.innerHTML = "";
    cartContentDiv.style.display = "none";
}
function toggleCartContents() {
    const cartButton = document.getElementById("cart");
    isCartVisible = !isCartVisible;
    if (isCartVisible) {
        showCartContents();
        cartButton.classList.add("button-active");
    } else {
        hideCartContents();
        cartButton.classList.remove("button-active");
    }
}
function addToCart(book) {
    cart.push(book);
    updateCartUI();
    if (isCartVisible) showCartContents();
}

},{"../multimedia/TLT.jpg":"gmt2F","../multimedia/TLH.jpg":"crZVy","../multimedia/TSOM.jpg":"jogVB","../multimedia/TTC.jpg":"go7cB","../multimedia/TBOTL.jpg":"evxou","../multimedia/TLO.jpg":"573Dw","../multimedia/1984.jpg":"2jqu9","../multimedia/TKAM.jpg":"1hVAb","../multimedia/TSON.jpg":"INxPm","../multimedia/TMOA.jpg":"jU6Vo","../multimedia/THOH.jpg":"h8nte","../multimedia/TGG.jpg":"4pgxu","../multimedia/C22.jpg":"8TLME","../multimedia/TCITR.jpg":"5ZDts","../multimedia/BNN.jpg":"hCRUf","../multimedia/PAP.jpg":"2LI0s","../multimedia/TLOTR.jpg":"kZrB4","../multimedia/B.jpg":"1UlKK","../multimedia/S.jpg":"jyRkE","../multimedia/JE.jpg":"c8iyt","../multimedia/TDOAF.jpg":"lUUk7","../multimedia/ICB.jpg":"4vF8C","../multimedia/BE.jpg":"37SqI","../multimedia/E.jpg":"5cDRc","../multimedia/IT.jpg":"2UyQQ","../multimedia/D.jpg":"992j8","../multimedia/EX.jpg":"eT8pg","../multimedia/F.jpg":"lRPa6","../multimedia/P.jpg":"8szLE","../multimedia/H.jpg":"Jpjo3","../multimedia/BOOK.jpg":"8uM3w","../multimedia/ATLWCS.jpg":"1QuyX","../multimedia/N.jpg":"82b4h","../multimedia/WH.jpg":"1cXXg","../multimedia/TPOTE.jpg":"3Awjc","../multimedia/O.jpg":"7Z8yF","../multimedia/GWTW.jpg":"difFG","../multimedia/SH.jpg":"ajumX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmt2F":[function(require,module,exports) {
module.exports = require("7c18c30dc7b1cca4").getBundleURL("bcShh") + "TLT.f2c34d85.jpg" + "?" + Date.now();

},{"7c18c30dc7b1cca4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"crZVy":[function(require,module,exports) {
module.exports = require("7a7a7615609ca1f8").getBundleURL("bcShh") + "TLH.bc091c7a.jpg" + "?" + Date.now();

},{"7a7a7615609ca1f8":"lgJ39"}],"jogVB":[function(require,module,exports) {
module.exports = require("1ff090f4124a5640").getBundleURL("bcShh") + "TSOM.d51a5622.jpg" + "?" + Date.now();

},{"1ff090f4124a5640":"lgJ39"}],"go7cB":[function(require,module,exports) {
module.exports = require("91ee8c31dfa0991e").getBundleURL("bcShh") + "TTC.4e18e985.jpg" + "?" + Date.now();

},{"91ee8c31dfa0991e":"lgJ39"}],"evxou":[function(require,module,exports) {
module.exports = require("55ff88301ec96e09").getBundleURL("bcShh") + "TBOTL.fbc8f465.jpg" + "?" + Date.now();

},{"55ff88301ec96e09":"lgJ39"}],"573Dw":[function(require,module,exports) {
module.exports = require("5ce7b7bf4dca1806").getBundleURL("bcShh") + "TLO.3a7b4522.jpg" + "?" + Date.now();

},{"5ce7b7bf4dca1806":"lgJ39"}],"2jqu9":[function(require,module,exports) {
module.exports = require("59f3867ffb88fe14").getBundleURL("bcShh") + "1984.2dee35d2.jpg" + "?" + Date.now();

},{"59f3867ffb88fe14":"lgJ39"}],"1hVAb":[function(require,module,exports) {
module.exports = require("faf7e1fee7283fcd").getBundleURL("bcShh") + "TKAM.9a4133aa.jpg" + "?" + Date.now();

},{"faf7e1fee7283fcd":"lgJ39"}],"INxPm":[function(require,module,exports) {
module.exports = require("1b2aefc38e7d3425").getBundleURL("bcShh") + "TSON.176fda75.jpg" + "?" + Date.now();

},{"1b2aefc38e7d3425":"lgJ39"}],"jU6Vo":[function(require,module,exports) {
module.exports = require("a4905ec6f2dcfbe0").getBundleURL("bcShh") + "TMOA.0a465a2d.jpg" + "?" + Date.now();

},{"a4905ec6f2dcfbe0":"lgJ39"}],"h8nte":[function(require,module,exports) {
module.exports = require("ee3965f3c98a953c").getBundleURL("bcShh") + "THOH.ed3af533.jpg" + "?" + Date.now();

},{"ee3965f3c98a953c":"lgJ39"}],"4pgxu":[function(require,module,exports) {
module.exports = require("bd2f23a2d43010cf").getBundleURL("bcShh") + "TGG.7908ca4d.jpg" + "?" + Date.now();

},{"bd2f23a2d43010cf":"lgJ39"}],"8TLME":[function(require,module,exports) {
module.exports = require("981b713b34e457bb").getBundleURL("bcShh") + "C22.049e4fd8.jpg" + "?" + Date.now();

},{"981b713b34e457bb":"lgJ39"}],"5ZDts":[function(require,module,exports) {
module.exports = require("e15a283b3fe77b69").getBundleURL("bcShh") + "TCITR.3f1e991c.jpg" + "?" + Date.now();

},{"e15a283b3fe77b69":"lgJ39"}],"hCRUf":[function(require,module,exports) {
module.exports = require("1641eb4c37c55c4f").getBundleURL("bcShh") + "BNN.2f84b1bc.jpg" + "?" + Date.now();

},{"1641eb4c37c55c4f":"lgJ39"}],"2LI0s":[function(require,module,exports) {
module.exports = require("4c6a856905b30a01").getBundleURL("bcShh") + "PAP.b6a217e2.jpg" + "?" + Date.now();

},{"4c6a856905b30a01":"lgJ39"}],"kZrB4":[function(require,module,exports) {
module.exports = require("770860f3ed00e56f").getBundleURL("bcShh") + "TLOTR.2f7c65bc.jpg" + "?" + Date.now();

},{"770860f3ed00e56f":"lgJ39"}],"1UlKK":[function(require,module,exports) {
module.exports = require("cc7c2b7b72cbf2ed").getBundleURL("bcShh") + "B.804dd510.jpg" + "?" + Date.now();

},{"cc7c2b7b72cbf2ed":"lgJ39"}],"jyRkE":[function(require,module,exports) {
module.exports = require("fb09f1d3e82d6fa2").getBundleURL("bcShh") + "S.e871fc0c.jpg" + "?" + Date.now();

},{"fb09f1d3e82d6fa2":"lgJ39"}],"c8iyt":[function(require,module,exports) {
module.exports = require("e9d328da69d6277d").getBundleURL("bcShh") + "JE.54561845.jpg" + "?" + Date.now();

},{"e9d328da69d6277d":"lgJ39"}],"lUUk7":[function(require,module,exports) {
module.exports = require("75c7e2a6e53f4aa3").getBundleURL("bcShh") + "TDOAF.6f176b91.jpg" + "?" + Date.now();

},{"75c7e2a6e53f4aa3":"lgJ39"}],"4vF8C":[function(require,module,exports) {
module.exports = require("60cfa12018b4e778").getBundleURL("bcShh") + "ICB.e24be2d7.jpg" + "?" + Date.now();

},{"60cfa12018b4e778":"lgJ39"}],"37SqI":[function(require,module,exports) {
module.exports = require("ed8b88506e9caa23").getBundleURL("bcShh") + "BE.c13ae5fb.jpg" + "?" + Date.now();

},{"ed8b88506e9caa23":"lgJ39"}],"5cDRc":[function(require,module,exports) {
module.exports = require("9bdc645d7a9ef060").getBundleURL("bcShh") + "E.77a24716.jpg" + "?" + Date.now();

},{"9bdc645d7a9ef060":"lgJ39"}],"2UyQQ":[function(require,module,exports) {
module.exports = require("f9e604272fa4a9d6").getBundleURL("bcShh") + "IT.d8cef7c7.jpg" + "?" + Date.now();

},{"f9e604272fa4a9d6":"lgJ39"}],"992j8":[function(require,module,exports) {
module.exports = require("30df0f1e85194b1e").getBundleURL("bcShh") + "D.3007a816.jpg" + "?" + Date.now();

},{"30df0f1e85194b1e":"lgJ39"}],"eT8pg":[function(require,module,exports) {
module.exports = require("e917027107ecac55").getBundleURL("bcShh") + "EX.a891da96.jpg" + "?" + Date.now();

},{"e917027107ecac55":"lgJ39"}],"lRPa6":[function(require,module,exports) {
module.exports = require("c2e0342d70addfef").getBundleURL("bcShh") + "F.85b820b3.jpg" + "?" + Date.now();

},{"c2e0342d70addfef":"lgJ39"}],"8szLE":[function(require,module,exports) {
module.exports = require("e357cad8d0d60873").getBundleURL("bcShh") + "P.c7151621.jpg" + "?" + Date.now();

},{"e357cad8d0d60873":"lgJ39"}],"Jpjo3":[function(require,module,exports) {
module.exports = require("1effba4537149c79").getBundleURL("bcShh") + "H.be04b180.jpg" + "?" + Date.now();

},{"1effba4537149c79":"lgJ39"}],"8uM3w":[function(require,module,exports) {
module.exports = require("1d3117068bf860bb").getBundleURL("bcShh") + "BOOK.805a3d04.jpg" + "?" + Date.now();

},{"1d3117068bf860bb":"lgJ39"}],"1QuyX":[function(require,module,exports) {
module.exports = require("79d3df9bc76a59e1").getBundleURL("bcShh") + "ATLWCS.fdd20a7e.jpg" + "?" + Date.now();

},{"79d3df9bc76a59e1":"lgJ39"}],"82b4h":[function(require,module,exports) {
module.exports = require("a54b01f92a636871").getBundleURL("bcShh") + "N.30dc084f.jpg" + "?" + Date.now();

},{"a54b01f92a636871":"lgJ39"}],"1cXXg":[function(require,module,exports) {
module.exports = require("44793e408a4aea03").getBundleURL("bcShh") + "WH.0f394877.jpg" + "?" + Date.now();

},{"44793e408a4aea03":"lgJ39"}],"3Awjc":[function(require,module,exports) {
module.exports = require("5c7d92edda2cf477").getBundleURL("bcShh") + "TPOTE.32f966bd.jpg" + "?" + Date.now();

},{"5c7d92edda2cf477":"lgJ39"}],"7Z8yF":[function(require,module,exports) {
module.exports = require("f72767f96a0a88df").getBundleURL("bcShh") + "O.ec338f8d.jpg" + "?" + Date.now();

},{"f72767f96a0a88df":"lgJ39"}],"difFG":[function(require,module,exports) {
module.exports = require("b60d97a78a98eab4").getBundleURL("bcShh") + "GWTW.ac4d3c10.jpg" + "?" + Date.now();

},{"b60d97a78a98eab4":"lgJ39"}],"ajumX":[function(require,module,exports) {
module.exports = require("7c5fe8d8588d834").getBundleURL("bcShh") + "SH.b54a1206.jpg" + "?" + Date.now();

},{"7c5fe8d8588d834":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fzxSk","3LleC"], "3LleC", "parcelRequiree075")

//# sourceMappingURL=index.a53cf1d7.js.map
