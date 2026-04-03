import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import destr from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestURL, setResponseStatus, getResponseHeader, setResponseHeaders, send, getRequestHeader, removeResponseHeader, createError, appendResponseHeader, setResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/nitropack/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/scule/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/radix3/dist/index.mjs';
import _fciYwLdwkxpFAgTUHmhj2ER4_PEFJtkD77Z4XNT3RU from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/vinxi/lib/app-fetch.js';
import _4Q9ppfXhKNHQfOjyWKVxlMa3CAwMa7MHPFWiriQ_rI from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/pathe/dist/index.mjs';
import { parseSetCookie } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/cookie-es/dist/index.mjs';
import { sharedConfig, lazy, createComponent, createUniqueId, useContext, createMemo, createRenderEffect, onCleanup, createContext, createSignal, on as on$1, runWithOwner, getOwner, startTransition, resetErrorBoundaries, batch, untrack, catchError, ErrorBoundary, Suspense, children, Show, createRoot } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/dist/server.js';
import { renderToString, isServer, getRequestEvent, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, useAssets, spread, renderToStream, ssrHydrationKey, NoHydration, Hydration, ssrAttribute, HydrationScript, delegateEvents } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/dist/server.js';
import { provideRequestEvent } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-js/web/storage/dist/storage.js';
import { eventHandler as eventHandler$1, H3Event, getRequestIP, parseCookies, getResponseStatus, getResponseStatusText, getCookie, setCookie, getResponseHeader as getResponseHeader$1, setResponseHeader as setResponseHeader$1, removeResponseHeader as removeResponseHeader$1, getResponseHeaders, getRequestURL as getRequestURL$1, getRequestWebStream, setResponseStatus as setResponseStatus$1, appendResponseHeader as appendResponseHeader$1, setHeader, sendRedirect as sendRedirect$1 } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/h3/dist/index.mjs';
import { fromJSON, Feature, crossSerializeStream, getCrossReferenceHeader, toCrossJSONStream } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/seroval/dist/esm/production/index.mjs';
import { AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import { Transition } from 'file:///home/engr_luis/Projects/kahitsan-web/node_modules/solid-transition-group/dist/index.js';

const serverAssets = [{"baseName":"server","dir":"/home/engr_luis/Projects/kahitsan-web/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/engr_luis/Projects/kahitsan-web"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/engr_luis/Projects/kahitsan-web"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/engr_luis/Projects/kahitsan-web/.vinxi"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/engr_luis/Projects/kahitsan-web/.vinxi/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/home/engr_luis/Projects/kahitsan-web","order":0,"outDir":"/home/engr_luis/Projects/kahitsan-web/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/home/engr_luis/Projects/kahitsan-web","base":"/","outDir":"/home/engr_luis/Projects/kahitsan-web/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/home/engr_luis/Projects/kahitsan-web","outDir":"/home/engr_luis/Projects/kahitsan-web/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/home/engr_luis/Projects/kahitsan-web","outDir":"/home/engr_luis/Projects/kahitsan-web/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"preset":"static","prerender":{"crawlLinks":false}},"root":"/home/engr_luis/Projects/kahitsan-web"};
					const buildManifest = {"ssr":{"_Footer-CPIJvVmb.js":{"file":"assets/Footer-CPIJvVmb.js","name":"Footer","imports":["_logo-Cs-eLjvO.js","_index-CUlIpO6q.js"]},"_SpacesPage-S-kbonjK.js":{"file":"assets/SpacesPage-S-kbonjK.js","name":"SpacesPage","imports":["_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js","_community-D90lgNVx.js","_index-CUlIpO6q.js"],"assets":["assets/floor_plan-C949cxep.png","assets/entrance-area-DlJ8ZC0U.jpg","assets/inner-area-KwJ-83rv.jpg","assets/call-booth-CiM7-ken.jpg","assets/all-access-membership-BCsCfAKe.jpg","assets/whole-inner-area-C8o0b5-2.jpg"]},"_calendar-BfZAJgXw.js":{"file":"assets/calendar-BfZAJgXw.js","name":"calendar","imports":["_Footer-CPIJvVmb.js"]},"_community-D90lgNVx.js":{"file":"assets/community-D90lgNVx.js","name":"community","imports":["_Footer-CPIJvVmb.js"],"assets":["assets/Ateneo-igR-QvHb.png","assets/UAPSA BISCAST Logo-Dhc_imaZ.png","assets/ACES_LOGO-Qblo5ZdB.png","assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"]},"_index-CUlIpO6q.js":{"file":"assets/index-CUlIpO6q.js","name":"index"},"_instagram-Cc2CVwdv.js":{"file":"assets/instagram-Cc2CVwdv.js","name":"instagram","imports":["_Footer-CPIJvVmb.js"]},"_logo-0h1gzDHo.css":{"file":"assets/logo-0h1gzDHo.css","src":"_logo-0h1gzDHo.css"},"_logo-Cs-eLjvO.js":{"file":"assets/logo-Cs-eLjvO.js","name":"logo","css":["assets/logo-0h1gzDHo.css"],"assets":["assets/logo-DwX9Dwwm.png"]},"src/assets/floor_plan.png":{"file":"assets/floor_plan-C949cxep.png","src":"src/assets/floor_plan.png"},"src/assets/images/community/ACES_LOGO.png":{"file":"assets/ACES_LOGO-Qblo5ZdB.png","src":"src/assets/images/community/ACES_LOGO.png"},"src/assets/images/community/Ateneo.png":{"file":"assets/Ateneo-igR-QvHb.png","src":"src/assets/images/community/Ateneo.png"},"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png":{"file":"assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png","src":"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png"},"src/assets/images/community/UAPSA BISCAST Logo.png":{"file":"assets/UAPSA BISCAST Logo-Dhc_imaZ.png","src":"src/assets/images/community/UAPSA BISCAST Logo.png"},"src/assets/images/panganiban/all-access-membership.jpg":{"file":"assets/all-access-membership-BCsCfAKe.jpg","src":"src/assets/images/panganiban/all-access-membership.jpg"},"src/assets/images/panganiban/call-booth.jpg":{"file":"assets/call-booth-CiM7-ken.jpg","src":"src/assets/images/panganiban/call-booth.jpg"},"src/assets/images/panganiban/entrance-area.jpg":{"file":"assets/entrance-area-DlJ8ZC0U.jpg","src":"src/assets/images/panganiban/entrance-area.jpg"},"src/assets/images/panganiban/inner-area.jpg":{"file":"assets/inner-area-KwJ-83rv.jpg","src":"src/assets/images/panganiban/inner-area.jpg"},"src/assets/images/panganiban/whole-inner-area.jpg":{"file":"assets/whole-inner-area-C8o0b5-2.jpg","src":"src/assets/images/panganiban/whole-inner-area.jpg"},"src/assets/logo.png":{"file":"assets/logo-DwX9Dwwm.png","src":"src/assets/logo.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_logo-Cs-eLjvO.js"]},"src/routes/[spaceName].tsx?pick=default&pick=$css":{"file":"_spaceName_.js","name":"_spaceName_","src":"src/routes/[spaceName].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_SpacesPage-S-kbonjK.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js","_community-D90lgNVx.js"]},"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css":{"file":"pricing.js","name":"pricing","src":"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_SpacesPage-S-kbonjK.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js","_community-D90lgNVx.js"]},"src/routes/account.tsx?pick=default&pick=$css":{"file":"account.js","name":"account","src":"src/routes/account.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js"]},"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css":{"file":"pricing-update-nov-2025.js","name":"pricing-update-nov-2025","src":"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js"]},"src/routes/announcements.tsx?pick=default&pick=$css":{"file":"announcements.js","name":"announcements","src":"src/routes/announcements.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_Footer-CPIJvVmb.js","_calendar-BfZAJgXw.js","_logo-Cs-eLjvO.js"]},"src/routes/community.tsx?pick=default&pick=$css":{"file":"community.js","name":"community","src":"src/routes/community.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_Footer-CPIJvVmb.js","_calendar-BfZAJgXw.js","_instagram-Cc2CVwdv.js","_community-D90lgNVx.js","_logo-Cs-eLjvO.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js","_instagram-Cc2CVwdv.js"]},"src/routes/spaces.tsx?pick=default&pick=$css":{"file":"spaces.js","name":"spaces","src":"src/routes/spaces.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-CUlIpO6q.js","_SpacesPage-S-kbonjK.js","_Footer-CPIJvVmb.js","_logo-Cs-eLjvO.js","_community-D90lgNVx.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_index-CUlIpO6q.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","src/routes/[spaceName].tsx?pick=default&pick=$css","src/routes/[spaceName].tsx?pick=default&pick=$css","src/routes/account.tsx?pick=default&pick=$css","src/routes/account.tsx?pick=default&pick=$css","src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","src/routes/announcements.tsx?pick=default&pick=$css","src/routes/announcements.tsx?pick=default&pick=$css","src/routes/community.tsx?pick=default&pick=$css","src/routes/community.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/spaces.tsx?pick=default&pick=$css","src/routes/spaces.tsx?pick=default&pick=$css"],"css":["assets/ssr-5QkkXWGl.css"]}},"client":{"_Footer-BhFr0w3E.js":{"file":"assets/Footer-BhFr0w3E.js","name":"Footer","imports":["_index-cq83Qfr1.js","_logo-DmBn6DhI.js"]},"_SpacesPage-BOVo3ttG.js":{"file":"assets/SpacesPage-BOVo3ttG.js","name":"SpacesPage","imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js","_community-DMBtx2EA.js"],"assets":["assets/floor_plan-C949cxep.png","assets/entrance-area-DlJ8ZC0U.jpg","assets/inner-area-KwJ-83rv.jpg","assets/call-booth-CiM7-ken.jpg","assets/all-access-membership-BCsCfAKe.jpg","assets/whole-inner-area-C8o0b5-2.jpg"]},"_calendar-CtZSN154.js":{"file":"assets/calendar-CtZSN154.js","name":"calendar","imports":["_Footer-BhFr0w3E.js","_index-cq83Qfr1.js"]},"_community-DMBtx2EA.js":{"file":"assets/community-DMBtx2EA.js","name":"community","imports":["_Footer-BhFr0w3E.js","_index-cq83Qfr1.js"],"assets":["assets/Ateneo-igR-QvHb.png","assets/UAPSA BISCAST Logo-Dhc_imaZ.png","assets/ACES_LOGO-Qblo5ZdB.png","assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"]},"_index-cq83Qfr1.js":{"file":"assets/index-cq83Qfr1.js","name":"index"},"_instagram-Cb4K_Hf-.js":{"file":"assets/instagram-Cb4K_Hf-.js","name":"instagram","imports":["_Footer-BhFr0w3E.js","_index-cq83Qfr1.js"]},"_logo-0h1gzDHo.css":{"file":"assets/logo-0h1gzDHo.css","src":"_logo-0h1gzDHo.css"},"_logo-DmBn6DhI.js":{"file":"assets/logo-DmBn6DhI.js","name":"logo","imports":["_index-cq83Qfr1.js"],"css":["assets/logo-0h1gzDHo.css"],"assets":["assets/logo-DwX9Dwwm.png"]},"src/assets/floor_plan.png":{"file":"assets/floor_plan-C949cxep.png","src":"src/assets/floor_plan.png"},"src/assets/images/community/ACES_LOGO.png":{"file":"assets/ACES_LOGO-Qblo5ZdB.png","src":"src/assets/images/community/ACES_LOGO.png"},"src/assets/images/community/Ateneo.png":{"file":"assets/Ateneo-igR-QvHb.png","src":"src/assets/images/community/Ateneo.png"},"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png":{"file":"assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png","src":"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png"},"src/assets/images/community/UAPSA BISCAST Logo.png":{"file":"assets/UAPSA BISCAST Logo-Dhc_imaZ.png","src":"src/assets/images/community/UAPSA BISCAST Logo.png"},"src/assets/images/panganiban/all-access-membership.jpg":{"file":"assets/all-access-membership-BCsCfAKe.jpg","src":"src/assets/images/panganiban/all-access-membership.jpg"},"src/assets/images/panganiban/call-booth.jpg":{"file":"assets/call-booth-CiM7-ken.jpg","src":"src/assets/images/panganiban/call-booth.jpg"},"src/assets/images/panganiban/entrance-area.jpg":{"file":"assets/entrance-area-DlJ8ZC0U.jpg","src":"src/assets/images/panganiban/entrance-area.jpg"},"src/assets/images/panganiban/inner-area.jpg":{"file":"assets/inner-area-KwJ-83rv.jpg","src":"src/assets/images/panganiban/inner-area.jpg"},"src/assets/images/panganiban/whole-inner-area.jpg":{"file":"assets/whole-inner-area-C8o0b5-2.jpg","src":"src/assets/images/panganiban/whole-inner-area.jpg"},"src/assets/logo.png":{"file":"assets/logo-DwX9Dwwm.png","src":"src/assets/logo.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-CaMlLXcB.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_logo-DmBn6DhI.js"]},"src/routes/[spaceName].tsx?pick=default&pick=$css":{"file":"assets/_spaceName_-B-pmlU8y.js","name":"_spaceName_","src":"src/routes/[spaceName].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_SpacesPage-BOVo3ttG.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js","_community-DMBtx2EA.js"]},"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css":{"file":"assets/pricing-BuS9enPl.js","name":"pricing","src":"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_SpacesPage-BOVo3ttG.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js","_community-DMBtx2EA.js"]},"src/routes/account.tsx?pick=default&pick=$css":{"file":"assets/account-CKGe0ZZq.js","name":"account","src":"src/routes/account.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js"]},"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css":{"file":"assets/pricing-update-nov-2025-HrFDWHT7.js","name":"pricing-update-nov-2025","src":"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js"]},"src/routes/announcements.tsx?pick=default&pick=$css":{"file":"assets/announcements-CBJsu3XX.js","name":"announcements","src":"src/routes/announcements.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_calendar-CtZSN154.js","_logo-DmBn6DhI.js"]},"src/routes/community.tsx?pick=default&pick=$css":{"file":"assets/community-B6GjdaS3.js","name":"community","src":"src/routes/community.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_calendar-CtZSN154.js","_instagram-Cb4K_Hf-.js","_community-DMBtx2EA.js","_logo-DmBn6DhI.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-DqI7E14A.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js","_instagram-Cb4K_Hf-.js"]},"src/routes/spaces.tsx?pick=default&pick=$css":{"file":"assets/spaces-BBf9pkhm.js","name":"spaces","src":"src/routes/spaces.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_index-cq83Qfr1.js","_SpacesPage-BOVo3ttG.js","_Footer-BhFr0w3E.js","_logo-DmBn6DhI.js","_community-DMBtx2EA.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-Dq8k8N4k.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_index-cq83Qfr1.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","src/routes/[spaceName].tsx?pick=default&pick=$css","src/routes/account.tsx?pick=default&pick=$css","src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","src/routes/announcements.tsx?pick=default&pick=$css","src/routes/community.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/spaces.tsx?pick=default&pick=$css"],"css":["assets/client-5QkkXWGl.css"]}},"server-fns":{"_Footer-C8XgOVG9.js":{"file":"assets/Footer-C8XgOVG9.js","name":"Footer","imports":["_logo-U6xfzMsi.js","_routing-CzLrmEq0.js"]},"_SpacesPage-BWaAZEZx.js":{"file":"assets/SpacesPage-BWaAZEZx.js","name":"SpacesPage","imports":["_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js","_community-D45MwejX.js","_routing-CzLrmEq0.js"],"assets":["assets/floor_plan-C949cxep.png","assets/entrance-area-DlJ8ZC0U.jpg","assets/inner-area-KwJ-83rv.jpg","assets/call-booth-CiM7-ken.jpg","assets/all-access-membership-BCsCfAKe.jpg","assets/whole-inner-area-C8o0b5-2.jpg"]},"_calendar-7hsxYScx.js":{"file":"assets/calendar-7hsxYScx.js","name":"calendar","imports":["_Footer-C8XgOVG9.js"]},"_community-D45MwejX.js":{"file":"assets/community-D45MwejX.js","name":"community","imports":["_Footer-C8XgOVG9.js"],"assets":["assets/Ateneo-igR-QvHb.png","assets/UAPSA BISCAST Logo-Dhc_imaZ.png","assets/ACES_LOGO-Qblo5ZdB.png","assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"]},"_instagram-BqAhxGL9.js":{"file":"assets/instagram-BqAhxGL9.js","name":"instagram","imports":["_Footer-C8XgOVG9.js"]},"_logo-0h1gzDHo.css":{"file":"assets/logo-0h1gzDHo.css","src":"_logo-0h1gzDHo.css"},"_logo-U6xfzMsi.js":{"file":"assets/logo-U6xfzMsi.js","name":"logo","css":["assets/logo-0h1gzDHo.css"],"assets":["assets/logo-DwX9Dwwm.png"]},"_routing-CzLrmEq0.js":{"file":"assets/routing-CzLrmEq0.js","name":"routing"},"_server-fns-DIHrMG9W.js":{"file":"assets/server-fns-DIHrMG9W.js","name":"server-fns","dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","src/routes/[spaceName].tsx?pick=default&pick=$css","src/routes/[spaceName].tsx?pick=default&pick=$css","src/routes/account.tsx?pick=default&pick=$css","src/routes/account.tsx?pick=default&pick=$css","src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","src/routes/announcements.tsx?pick=default&pick=$css","src/routes/announcements.tsx?pick=default&pick=$css","src/routes/community.tsx?pick=default&pick=$css","src/routes/community.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/spaces.tsx?pick=default&pick=$css","src/routes/spaces.tsx?pick=default&pick=$css","src/app.tsx"]},"src/app.tsx":{"file":"assets/app-y4vWxsUm.js","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns-DIHrMG9W.js","_routing-CzLrmEq0.js"],"css":["assets/app-5QkkXWGl.css"]},"src/assets/floor_plan.png":{"file":"assets/floor_plan-C949cxep.png","src":"src/assets/floor_plan.png"},"src/assets/images/community/ACES_LOGO.png":{"file":"assets/ACES_LOGO-Qblo5ZdB.png","src":"src/assets/images/community/ACES_LOGO.png"},"src/assets/images/community/Ateneo.png":{"file":"assets/Ateneo-igR-QvHb.png","src":"src/assets/images/community/Ateneo.png"},"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png":{"file":"assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png","src":"src/assets/images/community/UAPGA CAMARINES-TERM LOGO.png"},"src/assets/images/community/UAPSA BISCAST Logo.png":{"file":"assets/UAPSA BISCAST Logo-Dhc_imaZ.png","src":"src/assets/images/community/UAPSA BISCAST Logo.png"},"src/assets/images/panganiban/all-access-membership.jpg":{"file":"assets/all-access-membership-BCsCfAKe.jpg","src":"src/assets/images/panganiban/all-access-membership.jpg"},"src/assets/images/panganiban/call-booth.jpg":{"file":"assets/call-booth-CiM7-ken.jpg","src":"src/assets/images/panganiban/call-booth.jpg"},"src/assets/images/panganiban/entrance-area.jpg":{"file":"assets/entrance-area-DlJ8ZC0U.jpg","src":"src/assets/images/panganiban/entrance-area.jpg"},"src/assets/images/panganiban/inner-area.jpg":{"file":"assets/inner-area-KwJ-83rv.jpg","src":"src/assets/images/panganiban/inner-area.jpg"},"src/assets/images/panganiban/whole-inner-area.jpg":{"file":"assets/whole-inner-area-C8o0b5-2.jpg","src":"src/assets/images/panganiban/whole-inner-area.jpg"},"src/assets/logo.png":{"file":"assets/logo-DwX9Dwwm.png","src":"src/assets/logo.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_logo-U6xfzMsi.js"]},"src/routes/[spaceName].tsx?pick=default&pick=$css":{"file":"_spaceName_.js","name":"_spaceName_","src":"src/routes/[spaceName].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_SpacesPage-BWaAZEZx.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js","_community-D45MwejX.js"]},"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css":{"file":"pricing.js","name":"pricing","src":"src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_SpacesPage-BWaAZEZx.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js","_community-D45MwejX.js"]},"src/routes/account.tsx?pick=default&pick=$css":{"file":"account.js","name":"account","src":"src/routes/account.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js"]},"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css":{"file":"pricing-update-nov-2025.js","name":"pricing-update-nov-2025","src":"src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js"]},"src/routes/announcements.tsx?pick=default&pick=$css":{"file":"announcements.js","name":"announcements","src":"src/routes/announcements.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_Footer-C8XgOVG9.js","_calendar-7hsxYScx.js","_logo-U6xfzMsi.js"]},"src/routes/community.tsx?pick=default&pick=$css":{"file":"community.js","name":"community","src":"src/routes/community.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_Footer-C8XgOVG9.js","_calendar-7hsxYScx.js","_instagram-BqAhxGL9.js","_community-D45MwejX.js","_logo-U6xfzMsi.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js","_instagram-BqAhxGL9.js"]},"src/routes/spaces.tsx?pick=default&pick=$css":{"file":"spaces.js","name":"spaces","src":"src/routes/spaces.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_routing-CzLrmEq0.js","_SpacesPage-BWaAZEZx.js","_Footer-C8XgOVG9.js","_logo-U6xfzMsi.js","_community-D45MwejX.js"]},"virtual:$vinxi/handler/server-fns":{"file":"server-fns.js","name":"server-fns","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns-DIHrMG9W.js"]}}};

					const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_fciYwLdwkxpFAgTUHmhj2ER4_PEFJtkD77Z4XNT3RU,
_4Q9ppfXhKNHQfOjyWKVxlMa3CAwMa7MHPFWiriQ_rI,
app
];

const assets = {
  "/_headers": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"259-LX6IFiYsTtLNI94V1Jqp1zr8W2U\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 601,
    "path": "../../.output/public/_headers"
  },
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"c4-2Nhgc7RTzGV64VtKRvxScmCOQRs\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 196,
    "path": "../../.output/public/_redirects"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"170-79axB/lRLNSoWJ8Ky5BEGqn6iB8\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 368,
    "path": "../../.output/public/favicon/favicon-16x16.png"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"32cf-NQ7Bfi3A7z+SS2+qtWyIjt4KMQk\"",
    "mtime": "2026-04-03T19:12:03.418Z",
    "size": 13007,
    "path": "../../.output/public/favicon/android-chrome-192x192.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"352-Ajecty173Z4RFKdH//j2gNErSB4\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 850,
    "path": "../../.output/public/favicon/favicon-32x32.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"2ce0-fpouTL3vULgNj1BORkzahVzQ8Bk\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 11488,
    "path": "../../.output/public/favicon/apple-touch-icon.png"
  },
  "/favicon/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"107-vzG6+RvdL83iSkXj8qG+M3M8b2k\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 263,
    "path": "../../.output/public/favicon/site.webmanifest"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"10610-6p32DcT0xKDT6gcuW/6odYYrAig\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 67088,
    "path": "../../.output/public/favicon/android-chrome-512x512.png"
  },
  "/assets/Ateneo-igR-QvHb.png": {
    "type": "image/png",
    "etag": "\"37e91-Q6MUHreR4MynljTDe/8wceObJJE\"",
    "mtime": "2026-04-03T19:12:03.428Z",
    "size": 229009,
    "path": "../../.output/public/assets/Ateneo-igR-QvHb.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-+LTb8ASIxGYTIg55q0QSqjvCG54\"",
    "mtime": "2026-04-03T19:12:03.419Z",
    "size": 15406,
    "path": "../../.output/public/favicon/favicon.ico"
  },
  "/assets/all-access-membership-BCsCfAKe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cf31-gAFwuTyOl+hJlh+Pm5g6faq1XxE\"",
    "mtime": "2026-04-03T19:12:03.428Z",
    "size": 118577,
    "path": "../../.output/public/assets/all-access-membership-BCsCfAKe.jpg"
  },
  "/assets/call-booth-CiM7-ken.jpg": {
    "type": "image/jpeg",
    "etag": "\"208cc-qFGp+6UPO3bHr6RwB1MKlW8hanY\"",
    "mtime": "2026-04-03T19:12:03.428Z",
    "size": 133324,
    "path": "../../.output/public/assets/call-booth-CiM7-ken.jpg"
  },
  "/assets/logo-0h1gzDHo.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"a9d-jRPS/cgkH0wyaszxoypwDOAC+LE\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 2717,
    "path": "../../.output/public/assets/logo-0h1gzDHo.css"
  },
  "/assets/logo-0h1gzDHo.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ad-r+Z4oDJYVlHB8GOncXrLw+pG/YU\"",
    "mtime": "2026-04-03T19:12:03.499Z",
    "size": 685,
    "path": "../../.output/public/assets/logo-0h1gzDHo.css.br"
  },
  "/assets/logo-0h1gzDHo.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"329-H2vzfG5ZgKxyvhCKiPA25/8MoNw\"",
    "mtime": "2026-04-03T19:12:03.494Z",
    "size": 809,
    "path": "../../.output/public/assets/logo-0h1gzDHo.css.gz"
  },
  "/assets/logo-DwX9Dwwm.png": {
    "type": "image/png",
    "etag": "\"16144-RKP/8f+sL0ued4vaS0Eq0KDEb1U\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 90436,
    "path": "../../.output/public/assets/logo-DwX9Dwwm.png"
  },
  "/assets/inner-area-KwJ-83rv.jpg": {
    "type": "image/jpeg",
    "etag": "\"29012-PqT+dyQSBWWcwmFbdNw8+3B5eWc\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 167954,
    "path": "../../.output/public/assets/inner-area-KwJ-83rv.jpg"
  },
  "/assets/ssr-5QkkXWGl.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1999-44NDcEsL8huYDZEZoIn70/nVPFM\"",
    "mtime": "2026-04-03T19:12:03.604Z",
    "size": 6553,
    "path": "../../.output/public/assets/ssr-5QkkXWGl.css.br"
  },
  "/assets/ssr-5QkkXWGl.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"b30d-WbRO0MQUPKJf9Q1PMIyz0W2G7/g\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 45837,
    "path": "../../.output/public/assets/ssr-5QkkXWGl.css"
  },
  "/assets/ssr-5QkkXWGl.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1e01-SUse2yYDeknog/pu35gDXSPO/7E\"",
    "mtime": "2026-04-03T19:12:03.499Z",
    "size": 7681,
    "path": "../../.output/public/assets/ssr-5QkkXWGl.css.gz"
  },
  "/assets/ACES_LOGO-Qblo5ZdB.png": {
    "type": "image/png",
    "etag": "\"ea1ea-hlWxk0GNFGkqzxYwApINkt5fpeI\"",
    "mtime": "2026-04-03T19:12:03.428Z",
    "size": 958954,
    "path": "../../.output/public/assets/ACES_LOGO-Qblo5ZdB.png"
  },
  "/assets/floor_plan-C949cxep.png": {
    "type": "image/png",
    "etag": "\"a699f-g/+8rL2220UR1gEUAxlY52HA4FQ\"",
    "mtime": "2026-04-03T19:12:03.430Z",
    "size": 682399,
    "path": "../../.output/public/assets/floor_plan-C949cxep.png"
  },
  "/assets/entrance-area-DlJ8ZC0U.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3698-41dGonenhcXYHssFX1dFusSCWh4\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 734872,
    "path": "../../.output/public/assets/entrance-area-DlJ8ZC0U.jpg"
  },
  "/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png": {
    "type": "image/png",
    "etag": "\"13d32c-Jnbvr1Ez0n2VCZyx8CHUpKZluZY\"",
    "mtime": "2026-04-03T19:12:03.428Z",
    "size": 1299244,
    "path": "../../.output/public/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"
  },
  "/assets/UAPSA BISCAST Logo-Dhc_imaZ.png": {
    "type": "image/png",
    "etag": "\"18cc44-IbHzFVSKFrXUfxaso52E5rfdqEU\"",
    "mtime": "2026-04-03T19:12:03.429Z",
    "size": 1625156,
    "path": "../../.output/public/assets/UAPSA BISCAST Logo-Dhc_imaZ.png"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "encoding": null,
    "etag": "\"1f59-Ng1GL1fqljKCNz9OkENSdT+YNKY\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 8025,
    "path": "../../.output/public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"436-ZSq2ottE2M3emmfmK1AoxtXAxNk\"",
    "mtime": "2026-04-03T19:12:03.528Z",
    "size": 1078,
    "path": "../../.output/public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"4a5-hh/HJibtv5OVX3neaxYBv2E4vpY\"",
    "mtime": "2026-04-03T19:12:03.526Z",
    "size": 1189,
    "path": "../../.output/public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/Footer-BhFr0w3E.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1b8c-UDt6Lee+zDmT7P6ZBqOK+WAS9T8\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 7052,
    "path": "../../.output/public/_build/assets/Footer-BhFr0w3E.js"
  },
  "/_build/assets/Footer-BhFr0w3E.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a7c-JZ7yVuEN4rNoql1O2w9K3Z+U85U\"",
    "mtime": "2026-04-03T19:12:03.528Z",
    "size": 2684,
    "path": "../../.output/public/_build/assets/Footer-BhFr0w3E.js.br"
  },
  "/_build/assets/Footer-BhFr0w3E.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"be0-AlGNSitdDh9lumE1V6u0UUbq4yQ\"",
    "mtime": "2026-04-03T19:12:03.528Z",
    "size": 3040,
    "path": "../../.output/public/_build/assets/Footer-BhFr0w3E.js.gz"
  },
  "/_build/assets/SpacesPage-BOVo3ttG.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"6bcc-MIDa1CaE8CMYA+klqTJQdZnfaLE\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 27596,
    "path": "../../.output/public/_build/assets/SpacesPage-BOVo3ttG.js"
  },
  "/_build/assets/SpacesPage-BOVo3ttG.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1ce1-835M1PTWimUNGzYjJ8XtlS12ids\"",
    "mtime": "2026-04-03T19:12:03.603Z",
    "size": 7393,
    "path": "../../.output/public/_build/assets/SpacesPage-BOVo3ttG.js.br"
  },
  "/_build/assets/SpacesPage-BOVo3ttG.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"216d-4T65Ie7nJvV6h1ZeIfRWc1wMmNo\"",
    "mtime": "2026-04-03T19:12:03.528Z",
    "size": 8557,
    "path": "../../.output/public/_build/assets/SpacesPage-BOVo3ttG.js.gz"
  },
  "/assets/whole-inner-area-C8o0b5-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"48e06-+uXsWp1WAZCEyGDF5S5+B5vZk/E\"",
    "mtime": "2026-04-03T19:12:03.430Z",
    "size": 298502,
    "path": "../../.output/public/assets/whole-inner-area-C8o0b5-2.jpg"
  },
  "/_build/assets/Ateneo-igR-QvHb.png": {
    "type": "image/png",
    "etag": "\"37e91-Q6MUHreR4MynljTDe/8wceObJJE\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 229009,
    "path": "../../.output/public/_build/assets/Ateneo-igR-QvHb.png"
  },
  "/_build/assets/_...404_-CaMlLXcB.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"6e2-Om5fODt+aGBuKC838bN4sOBg62I\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 1762,
    "path": "../../.output/public/_build/assets/_...404_-CaMlLXcB.js"
  },
  "/_build/assets/_...404_-CaMlLXcB.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"318-G4e7bNsf/e5zyP2oz2wj/8FYI6A\"",
    "mtime": "2026-04-03T19:12:03.534Z",
    "size": 792,
    "path": "../../.output/public/_build/assets/_...404_-CaMlLXcB.js.br"
  },
  "/_build/assets/_...404_-CaMlLXcB.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"396-pHy5TVhcvS1HIgtw8Rfrd/VsLQM\"",
    "mtime": "2026-04-03T19:12:03.534Z",
    "size": 918,
    "path": "../../.output/public/_build/assets/_...404_-CaMlLXcB.js.gz"
  },
  "/_build/assets/_spaceName_-B-pmlU8y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"205-+52GRg3LNgzcDg6FIJHtLlBmlhg\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 517,
    "path": "../../.output/public/_build/assets/_spaceName_-B-pmlU8y.js"
  },
  "/_build/assets/account-CKGe0ZZq.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"b5f-Xi0I1hGeSRtaBumSbrJdnnrQzAQ\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 2911,
    "path": "../../.output/public/_build/assets/account-CKGe0ZZq.js"
  },
  "/_build/assets/account-CKGe0ZZq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4b1-FyA0UMlqF9Kg0ajFw4WqxfCKpbU\"",
    "mtime": "2026-04-03T19:12:03.547Z",
    "size": 1201,
    "path": "../../.output/public/_build/assets/account-CKGe0ZZq.js.br"
  },
  "/_build/assets/account-CKGe0ZZq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"592-ZjCCLMLChkdciNG/UrRzvtHMiIw\"",
    "mtime": "2026-04-03T19:12:03.544Z",
    "size": 1426,
    "path": "../../.output/public/_build/assets/account-CKGe0ZZq.js.gz"
  },
  "/_build/assets/ACES_LOGO-Qblo5ZdB.png": {
    "type": "image/png",
    "etag": "\"ea1ea-hlWxk0GNFGkqzxYwApINkt5fpeI\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 958954,
    "path": "../../.output/public/_build/assets/ACES_LOGO-Qblo5ZdB.png"
  },
  "/_build/assets/announcements-CBJsu3XX.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1199-VYdI67sT9slVCSPIryzPDpYAsng\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 4505,
    "path": "../../.output/public/_build/assets/announcements-CBJsu3XX.js"
  },
  "/_build/assets/all-access-membership-BCsCfAKe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cf31-gAFwuTyOl+hJlh+Pm5g6faq1XxE\"",
    "mtime": "2026-04-03T19:12:03.442Z",
    "size": 118577,
    "path": "../../.output/public/_build/assets/all-access-membership-BCsCfAKe.jpg"
  },
  "/_build/assets/announcements-CBJsu3XX.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6a8-SiVA1hlMinkKN4wHI3ALY3GEzhk\"",
    "mtime": "2026-04-03T19:12:03.549Z",
    "size": 1704,
    "path": "../../.output/public/_build/assets/announcements-CBJsu3XX.js.br"
  },
  "/_build/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png": {
    "type": "image/png",
    "etag": "\"13d32c-Jnbvr1Ez0n2VCZyx8CHUpKZluZY\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 1299244,
    "path": "../../.output/public/_build/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"
  },
  "/_build/assets/UAPSA BISCAST Logo-Dhc_imaZ.png": {
    "type": "image/png",
    "etag": "\"18cc44-IbHzFVSKFrXUfxaso52E5rfdqEU\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 1625156,
    "path": "../../.output/public/_build/assets/UAPSA BISCAST Logo-Dhc_imaZ.png"
  },
  "/_build/assets/announcements-CBJsu3XX.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7ae-skTUBlPSFn5tcw32Zkmavg9gQ44\"",
    "mtime": "2026-04-03T19:12:03.547Z",
    "size": 1966,
    "path": "../../.output/public/_build/assets/announcements-CBJsu3XX.js.gz"
  },
  "/_build/assets/calendar-CtZSN154.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"149-0XLoikgCYyK7Uzz5/dZHTMpkVKw\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 329,
    "path": "../../.output/public/_build/assets/calendar-CtZSN154.js"
  },
  "/_build/assets/client-5QkkXWGl.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1999-44NDcEsL8huYDZEZoIn70/nVPFM\"",
    "mtime": "2026-04-03T19:12:03.653Z",
    "size": 6553,
    "path": "../../.output/public/_build/assets/client-5QkkXWGl.css.br"
  },
  "/_build/assets/client-5QkkXWGl.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"b30d-WbRO0MQUPKJf9Q1PMIyz0W2G7/g\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 45837,
    "path": "../../.output/public/_build/assets/client-5QkkXWGl.css"
  },
  "/_build/assets/client-5QkkXWGl.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1e01-SUse2yYDeknog/pu35gDXSPO/7E\"",
    "mtime": "2026-04-03T19:12:03.549Z",
    "size": 7681,
    "path": "../../.output/public/_build/assets/client-5QkkXWGl.css.gz"
  },
  "/_build/assets/client-Dq8k8N4k.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1a3e-DVIYzhmXaezaHzKa+2iknxRB/hk\"",
    "mtime": "2026-04-03T19:12:03.604Z",
    "size": 6718,
    "path": "../../.output/public/_build/assets/client-Dq8k8N4k.js.br"
  },
  "/_build/assets/client-Dq8k8N4k.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"50db-Anttm2ILwavBns/iiiDNpitgpo8\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 20699,
    "path": "../../.output/public/_build/assets/client-Dq8k8N4k.js"
  },
  "/_build/assets/client-Dq8k8N4k.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1d40-zxjtI7h3dfbeuAdNAElFPpAzMAM\"",
    "mtime": "2026-04-03T19:12:03.603Z",
    "size": 7488,
    "path": "../../.output/public/_build/assets/client-Dq8k8N4k.js.gz"
  },
  "/_build/assets/community-B6GjdaS3.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"dc0-+Fg8xoVHiZgcUNj1TDVHmE92B70\"",
    "mtime": "2026-04-03T19:12:03.604Z",
    "size": 3520,
    "path": "../../.output/public/_build/assets/community-B6GjdaS3.js.gz"
  },
  "/_build/assets/community-B6GjdaS3.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"bf6-0Ua8pXAv/auVW0slR5ZaUOluAqo\"",
    "mtime": "2026-04-03T19:12:03.616Z",
    "size": 3062,
    "path": "../../.output/public/_build/assets/community-B6GjdaS3.js.br"
  },
  "/_build/assets/community-DMBtx2EA.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"be3-V5WyGG/aPbzKLFEOclUSBqcSLNI\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 3043,
    "path": "../../.output/public/_build/assets/community-DMBtx2EA.js"
  },
  "/_build/assets/community-B6GjdaS3.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"2cad-cH+zB7u7ZLmhXI2ODCKIhWG9Xgg\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 11437,
    "path": "../../.output/public/_build/assets/community-B6GjdaS3.js"
  },
  "/_build/assets/call-booth-CiM7-ken.jpg": {
    "type": "image/jpeg",
    "etag": "\"208cc-qFGp+6UPO3bHr6RwB1MKlW8hanY\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 133324,
    "path": "../../.output/public/_build/assets/call-booth-CiM7-ken.jpg"
  },
  "/_build/assets/community-DMBtx2EA.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"497-AWaElcy0b2UC2pdKfkQO57HsXvY\"",
    "mtime": "2026-04-03T19:12:03.616Z",
    "size": 1175,
    "path": "../../.output/public/_build/assets/community-DMBtx2EA.js.br"
  },
  "/_build/assets/community-DMBtx2EA.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5ab-BJnB+WGNziluikr5W0nWWGbCOOg\"",
    "mtime": "2026-04-03T19:12:03.604Z",
    "size": 1451,
    "path": "../../.output/public/_build/assets/community-DMBtx2EA.js.gz"
  },
  "/_build/assets/index-DqI7E14A.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"2853-rQotoCLeSsRBtlgP3Vm7Wb5GA7A\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 10323,
    "path": "../../.output/public/_build/assets/index-DqI7E14A.js"
  },
  "/_build/assets/index-DqI7E14A.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"bfc-99qoLSLCvlF7NGnRPa/lIWArU64\"",
    "mtime": "2026-04-03T19:12:03.630Z",
    "size": 3068,
    "path": "../../.output/public/_build/assets/index-DqI7E14A.js.br"
  },
  "/_build/assets/index-DqI7E14A.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e22-uy58+nqi4GB6PDVGORfBMnwt7YI\"",
    "mtime": "2026-04-03T19:12:03.616Z",
    "size": 3618,
    "path": "../../.output/public/_build/assets/index-DqI7E14A.js.gz"
  },
  "/_build/assets/index-cq83Qfr1.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"343d-qVKLt5pe9AkBFksvX1HgPWAR1uM\"",
    "mtime": "2026-04-03T19:12:03.695Z",
    "size": 13373,
    "path": "../../.output/public/_build/assets/index-cq83Qfr1.js.br"
  },
  "/_build/assets/index-cq83Qfr1.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"92c7-9ozv2vom9I4ZBXFs7oMrNA0d8aU\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 37575,
    "path": "../../.output/public/_build/assets/index-cq83Qfr1.js"
  },
  "/_build/assets/entrance-area-DlJ8ZC0U.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3698-41dGonenhcXYHssFX1dFusSCWh4\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 734872,
    "path": "../../.output/public/_build/assets/entrance-area-DlJ8ZC0U.jpg"
  },
  "/_build/assets/floor_plan-C949cxep.png": {
    "type": "image/png",
    "etag": "\"a699f-g/+8rL2220UR1gEUAxlY52HA4FQ\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 682399,
    "path": "../../.output/public/_build/assets/floor_plan-C949cxep.png"
  },
  "/_build/assets/index-cq83Qfr1.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"394f-cMjQE+TSYFnFD215PtPZ/pWKsbk\"",
    "mtime": "2026-04-03T19:12:03.616Z",
    "size": 14671,
    "path": "../../.output/public/_build/assets/index-cq83Qfr1.js.gz"
  },
  "/_build/assets/inner-area-KwJ-83rv.jpg": {
    "type": "image/jpeg",
    "etag": "\"29012-PqT+dyQSBWWcwmFbdNw8+3B5eWc\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 167954,
    "path": "../../.output/public/_build/assets/inner-area-KwJ-83rv.jpg"
  },
  "/_build/assets/instagram-Cb4K_Hf-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20e-eMx+uJqjpWayB5p2kFpSTpSnGNg\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 526,
    "path": "../../.output/public/_build/assets/instagram-Cb4K_Hf-.js"
  },
  "/_build/assets/logo-0h1gzDHo.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"a9d-jRPS/cgkH0wyaszxoypwDOAC+LE\"",
    "mtime": "2026-04-03T19:12:03.443Z",
    "size": 2717,
    "path": "../../.output/public/_build/assets/logo-0h1gzDHo.css"
  },
  "/_build/assets/logo-0h1gzDHo.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ad-r+Z4oDJYVlHB8GOncXrLw+pG/YU\"",
    "mtime": "2026-04-03T19:12:03.629Z",
    "size": 685,
    "path": "../../.output/public/_build/assets/logo-0h1gzDHo.css.br"
  },
  "/_build/assets/logo-0h1gzDHo.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"329-H2vzfG5ZgKxyvhCKiPA25/8MoNw\"",
    "mtime": "2026-04-03T19:12:03.629Z",
    "size": 809,
    "path": "../../.output/public/_build/assets/logo-0h1gzDHo.css.gz"
  },
  "/_build/assets/logo-DmBn6DhI.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"73a-SLp01Rz2aWqdqiJ2cFEiuiRBEMM\"",
    "mtime": "2026-04-03T19:12:03.635Z",
    "size": 1850,
    "path": "../../.output/public/_build/assets/logo-DmBn6DhI.js.br"
  },
  "/_build/assets/logo-DmBn6DhI.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1643-Wz7DTxTrZcE+1yjxhmI5uhoW9YM\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 5699,
    "path": "../../.output/public/_build/assets/logo-DmBn6DhI.js"
  },
  "/_build/assets/pricing-BuS9enPl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"210-+Yh27xG/5s83UF95+V/LnQPVAxE\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 528,
    "path": "../../.output/public/_build/assets/pricing-BuS9enPl.js"
  },
  "/_build/assets/pricing-update-nov-2025-HrFDWHT7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"a2b-Bn4fF9UIp+97hWq8RJjdrerh02A\"",
    "mtime": "2026-04-03T19:12:03.654Z",
    "size": 2603,
    "path": "../../.output/public/_build/assets/pricing-update-nov-2025-HrFDWHT7.js.br"
  },
  "/_build/assets/pricing-update-nov-2025-HrFDWHT7.js": {
    "type": "text/javascript; charset=utf-8",
    "encoding": null,
    "etag": "\"1ffb-xgGx5/6v17YTDX8p4qq6pdg02C4\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 8187,
    "path": "../../.output/public/_build/assets/pricing-update-nov-2025-HrFDWHT7.js"
  },
  "/_build/assets/pricing-update-nov-2025-HrFDWHT7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c45-B2Hc5XfY+rhkCN3oZKXb4cQFcbo\"",
    "mtime": "2026-04-03T19:12:03.635Z",
    "size": 3141,
    "path": "../../.output/public/_build/assets/pricing-update-nov-2025-HrFDWHT7.js.gz"
  },
  "/_build/assets/logo-DmBn6DhI.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"81d-uRTLrFppjvv381ho63lHGmUINWI\"",
    "mtime": "2026-04-03T19:12:03.630Z",
    "size": 2077,
    "path": "../../.output/public/_build/assets/logo-DmBn6DhI.js.gz"
  },
  "/_build/assets/logo-DwX9Dwwm.png": {
    "type": "image/png",
    "etag": "\"16144-RKP/8f+sL0ued4vaS0Eq0KDEb1U\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 90436,
    "path": "../../.output/public/_build/assets/logo-DwX9Dwwm.png"
  },
  "/_build/assets/spaces-BBf9pkhm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b0-1Y/mteoEdsjEMMPu5dKMkpTbKuU\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 688,
    "path": "../../.output/public/_build/assets/spaces-BBf9pkhm.js"
  },
  "/_server/assets/Ateneo-igR-QvHb.png": {
    "type": "image/png",
    "etag": "\"37e91-Q6MUHreR4MynljTDe/8wceObJJE\"",
    "mtime": "2026-04-03T19:12:03.451Z",
    "size": 229009,
    "path": "../../.output/public/_server/assets/Ateneo-igR-QvHb.png"
  },
  "/_build/assets/whole-inner-area-C8o0b5-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"48e06-+uXsWp1WAZCEyGDF5S5+B5vZk/E\"",
    "mtime": "2026-04-03T19:12:03.444Z",
    "size": 298502,
    "path": "../../.output/public/_build/assets/whole-inner-area-C8o0b5-2.jpg"
  },
  "/_server/assets/all-access-membership-BCsCfAKe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cf31-gAFwuTyOl+hJlh+Pm5g6faq1XxE\"",
    "mtime": "2026-04-03T19:12:03.452Z",
    "size": 118577,
    "path": "../../.output/public/_server/assets/all-access-membership-BCsCfAKe.jpg"
  },
  "/_server/assets/app-5QkkXWGl.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"b30d-WbRO0MQUPKJf9Q1PMIyz0W2G7/g\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 45837,
    "path": "../../.output/public/_server/assets/app-5QkkXWGl.css"
  },
  "/_server/assets/app-5QkkXWGl.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1999-44NDcEsL8huYDZEZoIn70/nVPFM\"",
    "mtime": "2026-04-03T19:12:03.748Z",
    "size": 6553,
    "path": "../../.output/public/_server/assets/app-5QkkXWGl.css.br"
  },
  "/_server/assets/app-5QkkXWGl.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1e01-SUse2yYDeknog/pu35gDXSPO/7E\"",
    "mtime": "2026-04-03T19:12:03.654Z",
    "size": 7681,
    "path": "../../.output/public/_server/assets/app-5QkkXWGl.css.gz"
  },
  "/_server/assets/ACES_LOGO-Qblo5ZdB.png": {
    "type": "image/png",
    "etag": "\"ea1ea-hlWxk0GNFGkqzxYwApINkt5fpeI\"",
    "mtime": "2026-04-03T19:12:03.452Z",
    "size": 958954,
    "path": "../../.output/public/_server/assets/ACES_LOGO-Qblo5ZdB.png"
  },
  "/_server/assets/call-booth-CiM7-ken.jpg": {
    "type": "image/jpeg",
    "etag": "\"208cc-qFGp+6UPO3bHr6RwB1MKlW8hanY\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 133324,
    "path": "../../.output/public/_server/assets/call-booth-CiM7-ken.jpg"
  },
  "/_server/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png": {
    "type": "image/png",
    "etag": "\"13d32c-Jnbvr1Ez0n2VCZyx8CHUpKZluZY\"",
    "mtime": "2026-04-03T19:12:03.452Z",
    "size": 1299244,
    "path": "../../.output/public/_server/assets/UAPGA CAMARINES-TERM LOGO-CjtKkGpx.png"
  },
  "/_server/assets/entrance-area-DlJ8ZC0U.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3698-41dGonenhcXYHssFX1dFusSCWh4\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 734872,
    "path": "../../.output/public/_server/assets/entrance-area-DlJ8ZC0U.jpg"
  },
  "/_server/assets/logo-0h1gzDHo.css": {
    "type": "text/css; charset=utf-8",
    "encoding": null,
    "etag": "\"a9d-jRPS/cgkH0wyaszxoypwDOAC+LE\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 2717,
    "path": "../../.output/public/_server/assets/logo-0h1gzDHo.css"
  },
  "/_server/assets/logo-0h1gzDHo.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ad-r+Z4oDJYVlHB8GOncXrLw+pG/YU\"",
    "mtime": "2026-04-03T19:12:03.683Z",
    "size": 685,
    "path": "../../.output/public/_server/assets/logo-0h1gzDHo.css.br"
  },
  "/_server/assets/logo-0h1gzDHo.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"329-H2vzfG5ZgKxyvhCKiPA25/8MoNw\"",
    "mtime": "2026-04-03T19:12:03.683Z",
    "size": 809,
    "path": "../../.output/public/_server/assets/logo-0h1gzDHo.css.gz"
  },
  "/_server/assets/inner-area-KwJ-83rv.jpg": {
    "type": "image/jpeg",
    "etag": "\"29012-PqT+dyQSBWWcwmFbdNw8+3B5eWc\"",
    "mtime": "2026-04-03T19:12:03.452Z",
    "size": 167954,
    "path": "../../.output/public/_server/assets/inner-area-KwJ-83rv.jpg"
  },
  "/_server/assets/logo-DwX9Dwwm.png": {
    "type": "image/png",
    "etag": "\"16144-RKP/8f+sL0ued4vaS0Eq0KDEb1U\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 90436,
    "path": "../../.output/public/_server/assets/logo-DwX9Dwwm.png"
  },
  "/_server/assets/whole-inner-area-C8o0b5-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"48e06-+uXsWp1WAZCEyGDF5S5+B5vZk/E\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 298502,
    "path": "../../.output/public/_server/assets/whole-inner-area-C8o0b5-2.jpg"
  },
  "/_server/assets/floor_plan-C949cxep.png": {
    "type": "image/png",
    "etag": "\"a699f-g/+8rL2220UR1gEUAxlY52HA4FQ\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 682399,
    "path": "../../.output/public/_server/assets/floor_plan-C949cxep.png"
  },
  "/_server/assets/UAPSA BISCAST Logo-Dhc_imaZ.png": {
    "type": "image/png",
    "etag": "\"18cc44-IbHzFVSKFrXUfxaso52E5rfdqEU\"",
    "mtime": "2026-04-03T19:12:03.453Z",
    "size": 1625156,
    "path": "../../.output/public/_server/assets/UAPSA BISCAST Logo-Dhc_imaZ.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _StSe1I = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
function je(e) {
  let s;
  const t = j(e), n = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(t, { ...n, body: e.node.req.body }) : new Request(t, { ...n, get body() {
    return s || (s = Ge(e), s);
  } });
}
function Ne$1(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: je(e), url: j(e) }, e.web.request;
}
function Ue$1() {
  return Qe$1();
}
const O$1 = /* @__PURE__ */ Symbol("$HTTPEvent");
function Me$1(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[O$1]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function u(e) {
  return function(...s) {
    var _a;
    let t = s[0];
    if (Me$1(t)) s[0] = t instanceof H3Event || t.__is_event__ ? t : t[O$1];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (t = Ue$1(), !t) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      s.unshift(t);
    }
    return e(...s);
  };
}
const j = u(getRequestURL$1), De$1 = u(getRequestIP), S = u(setResponseStatus$1), T = u(getResponseStatus), We$1 = u(getResponseStatusText), R = u(getResponseHeaders), E$1 = u(getResponseHeader$1), Be$1 = u(setResponseHeader$1), N = u(appendResponseHeader$1), ze$1 = u(parseCookies), Je$1 = u(getCookie), Xe = u(setCookie), h = u(setHeader), Ge = u(getRequestWebStream), Ke$1 = u(removeResponseHeader$1), Ve$1 = u(Ne$1);
function Ze$1() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Qe$1() {
  return Ze$1().use().event;
}
const w = "Invariant Violation", { setPrototypeOf: Ye$1 = function(e, s) {
  return e.__proto__ = s, e;
} } = Object;
class v extends Error {
  constructor(s = w) {
    super(typeof s == "number" ? `${w}: ${s} (see https://github.com/apollographql/invariant-packages)` : s);
    __publicField$1(this, "framesToPop", 1);
    __publicField$1(this, "name", w);
    Ye$1(this, v.prototype);
  }
}
function et$1(e, s) {
  if (!e) throw new v(s);
}
const $$1 = "solidFetchEvent";
function tt$1(e) {
  return { request: Ve$1(e), response: ot$2(e), clientAddress: De$1(e), locals: {}, nativeEvent: e };
}
function st$2(e) {
  return { ...e };
}
function rt$2(e) {
  if (!e.context[$$1]) {
    const s = tt$1(e);
    e.context[$$1] = s;
  }
  return e.context[$$1];
}
function q$1(e, s) {
  for (const [t, n] of s.entries()) N(e, t, n);
}
let nt$2 = class nt {
  constructor(s) {
    __publicField$1(this, "event");
    this.event = s;
  }
  get(s) {
    const t = E$1(this.event, s);
    return Array.isArray(t) ? t.join(", ") : t || null;
  }
  has(s) {
    return this.get(s) !== null;
  }
  set(s, t) {
    return Be$1(this.event, s, t);
  }
  delete(s) {
    return Ke$1(this.event, s);
  }
  append(s, t) {
    N(this.event, s, t);
  }
  getSetCookie() {
    const s = E$1(this.event, "Set-Cookie");
    return Array.isArray(s) ? s : [s];
  }
  forEach(s) {
    return Object.entries(R(this.event)).forEach(([t, n]) => s(Array.isArray(n) ? n.join(", ") : n, t, this));
  }
  entries() {
    return Object.entries(R(this.event)).map(([s, t]) => [s, Array.isArray(t) ? t.join(", ") : t])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(R(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(R(this.event)).map((s) => Array.isArray(s) ? s.join(", ") : s)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
};
function ot$2(e) {
  return { get status() {
    return T(e);
  }, set status(s) {
    S(e, s);
  }, get statusText() {
    return We$1(e);
  }, set statusText(s) {
    S(e, T(e), s);
  }, headers: new nt$2(e) };
}
const U$1 = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('../build/_...404_.mjs'), import: () => import('../build/_...404_.mjs') }, path: "/*404", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css", build: () => import('../build/pricing.mjs'), import: () => import('../build/pricing.mjs') }, path: "/:spaceName/pricing", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[spaceName]/pricing.tsx" }, { page: true, $component: { src: "src/routes/[spaceName].tsx?pick=default&pick=$css", build: () => import('../build/_spaceName_.mjs'), import: () => import('../build/_spaceName_.mjs') }, path: "/:spaceName", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[spaceName].tsx" }, { page: true, $component: { src: "src/routes/account.tsx?pick=default&pick=$css", build: () => import('../build/account.mjs'), import: () => import('../build/account.mjs') }, path: "/account", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/account.tsx" }, { page: true, $component: { src: "src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css", build: () => import('../build/pricing-update-nov-2025.mjs'), import: () => import('../build/pricing-update-nov-2025.mjs') }, path: "/announcement/pricing-update-nov-2025", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/announcement/pricing-update-nov-2025.tsx" }, { page: true, $component: { src: "src/routes/announcements.tsx?pick=default&pick=$css", build: () => import('../build/announcements.mjs'), import: () => import('../build/announcements.mjs') }, path: "/announcements", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/announcements.tsx" }, { page: true, $component: { src: "src/routes/community.tsx?pick=default&pick=$css", build: () => import('../build/community.mjs'), import: () => import('../build/community.mjs') }, path: "/community", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/community.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index.mjs'), import: () => import('../build/index.mjs') }, path: "/", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/spaces.tsx?pick=default&pick=$css", build: () => import('../build/spaces.mjs'), import: () => import('../build/spaces.mjs') }, path: "/spaces", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/spaces.tsx" }], at$2 = it$2(U$1.filter((e) => e.page));
function it$2(e) {
  function s(t, n, o, a) {
    const i = Object.values(t).find((c) => o.startsWith(c.id + "/"));
    return i ? (s(i.children || (i.children = []), n, o.slice(i.id.length)), t) : (t.push({ ...n, id: o, path: o.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), t);
  }
  return e.sort((t, n) => t.path.length - n.path.length).reduce((t, n) => s(t, n, n.path, n.path), []);
}
function ct$2(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
createRouter({ routes: U$1.reduce((e, s) => {
  if (!ct$2(s)) return e;
  let t = s.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (n, o) => `**:${o}`).split("/").map((n) => n.startsWith(":") || n.startsWith("*") ? n : encodeURIComponent(n)).join("/");
  if (/:[^/]*\?/g.test(t)) throw new Error(`Optional parameters are not supported in API routes: ${t}`);
  if (e[t]) throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${s.path}"`);
  return e[t] = { route: s }, e;
}, {}) });
var pt$1 = " ";
const lt$2 = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(pt$1), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function dt$1(e, s) {
  let { tag: t, attrs: { key: n, ...o } = { key: void 0 }, children: a } = e;
  return lt$2[t]({ attrs: { ...o, nonce: s }, key: n, children: a });
}
function ft$1(e, s, t, n = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[n], c = (await ((_a = s.inputs) == null ? void 0 : _a[e.src].assets())).filter((p) => p.tag === "style" || p.attrs.rel === "stylesheet");
      return { default: (p) => [...c.map((m) => dt$1(m)), createComponent(a, p)] };
    }
  });
}
function M() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, info: { ...t.$$route ? t.$$route.require().route.info : {}, filesystem: true }, component: t.$component && ft$1(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return at$2.map(e);
}
let H$2;
const _t$1 = isServer ? () => getRequestEvent().routes : () => H$2 || (H$2 = M());
function ht$1(e) {
  const s = Je$1(e.nativeEvent, "flash");
  if (s) try {
    let t = JSON.parse(s);
    if (!t || !t.result) return;
    const n = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])], o = t.error ? new Error(t.result) : t.result;
    return { input: n, url: t.url, pending: false, result: t.thrown ? void 0 : o, error: t.thrown ? o : void 0 };
  } catch (t) {
    console.error(t);
  } finally {
    Xe(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function mt$1(e) {
  const s = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await s.json(), assets: [...await s.inputs[s.handler].assets()], router: { submission: ht$1(e) }, routes: M(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const gt$1 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function yt$1(e) {
  return e.status && gt$1.has(e.status) ? e.status : 302;
}
const Rt$1 = {}, P$1 = [AbortSignalPlugin, CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], St$1 = 64, D$1 = Feature.RegExp;
function W$2(e) {
  const s = new TextEncoder().encode(e), t = s.length, n = t.toString(16), o = "00000000".substring(0, 8 - n.length) + n, a = new TextEncoder().encode(`;0x${o};`), i = new Uint8Array(12 + t);
  return i.set(a), i.set(s, 12), i;
}
function A(e, s) {
  return new ReadableStream({ start(t) {
    crossSerializeStream(s, { scopeId: e, plugins: P$1, onSerialize(n, o) {
      t.enqueue(W$2(o ? `(${getCrossReferenceHeader(e)},${n})` : n));
    }, onDone() {
      t.close();
    }, onError(n) {
      t.error(n);
    } });
  } });
}
function bt$1(e) {
  return new ReadableStream({ start(s) {
    toCrossJSONStream(e, { disabledFeatures: D$1, depthLimit: St$1, plugins: P$1, onParse(t) {
      s.enqueue(W$2(JSON.stringify(t)));
    }, onDone() {
      s.close();
    }, onError(t) {
      s.error(t);
    } });
  } });
}
async function C(e) {
  return fromJSON(JSON.parse(e), { plugins: P$1, disabledFeatures: D$1 });
}
async function wt$1(e) {
  const s = rt$2(e), t = s.request, n = t.headers.get("X-Server-Id"), o = t.headers.get("X-Server-Instance"), a = t.headers.has("X-Single-Flight"), i = new URL(t.url);
  let c, d;
  if (n) et$1(typeof n == "string", "Invalid server function"), [c, d] = decodeURIComponent(n).split("#");
  else if (c = i.searchParams.get("id"), d = i.searchParams.get("name"), !c || !d) return new Response(null, { status: 404 });
  const p = Rt$1[c];
  let m;
  if (!p) return new Response(null, { status: 404 });
  m = await p.importer();
  const B = m[p.functionName];
  let f = [];
  if (!o || e.method === "GET") {
    const r = i.searchParams.get("args");
    if (r) {
      const l = await C(r);
      for (const g of l) f.push(g);
    }
  }
  if (e.method === "POST") {
    const r = t.headers.get("content-type"), l = e.node.req, g = l instanceof ReadableStream, z = l.body instanceof ReadableStream, J = g && l.locked || z && l.body.locked, X = g ? l : l.body, b = J ? t : new Request(t, { ...t, body: X });
    t.headers.get("x-serialized") ? f = await C(await b.text()) : (r == null ? void 0 : r.startsWith("multipart/form-data")) || (r == null ? void 0 : r.startsWith("application/x-www-form-urlencoded")) ? f.push(await b.formData()) : (r == null ? void 0 : r.startsWith("application/json")) && (f = await b.json());
  }
  try {
    let r = await provideRequestEvent(s, async () => (sharedConfig.context = { event: s }, s.locals.serverFunctionMeta = { id: c + "#" + d }, B(...f)));
    if (a && o && (r = await F$1(s, r)), r instanceof Response) {
      if (r.headers && r.headers.has("X-Content-Raw")) return r;
      o && (r.headers && q$1(e, r.headers), r.status && (r.status < 300 || r.status >= 400) && S(e, r.status), r.customBody ? r = await r.customBody() : r.body == null && (r = null));
    }
    if (!o) return _$1(r, t, f);
    return h(e, "x-serialized", "true"), h(e, "content-type", "text/javascript"), A(o, r);
    return bt$1(r);
  } catch (r) {
    if (r instanceof Response) a && o && (r = await F$1(s, r)), r.headers && q$1(e, r.headers), r.status && (!o || r.status < 300 || r.status >= 400) && S(e, r.status), r.customBody ? r = r.customBody() : r.body == null && (r = null), h(e, "X-Error", "true");
    else if (o) {
      const l = r instanceof Error ? r.message : typeof r == "string" ? r : "true";
      h(e, "X-Error", l.replace(/[\r\n]+/g, ""));
    } else r = _$1(r, t, f, true);
    return o ? (h(e, "x-serialized", "true"), h(e, "content-type", "text/javascript"), A(o, r)) : r;
  }
}
function _$1(e, s, t, n) {
  const o = new URL(s.url), a = e instanceof Error;
  let i = 302, c;
  return e instanceof Response ? (c = new Headers(e.headers), e.headers.has("Location") && (c.set("Location", new URL(e.headers.get("Location"), o.origin + "").toString()), i = yt$1(e))) : c = new Headers({ Location: new URL(s.headers.get("referer")).toString() }), e && c.append("Set-Cookie", `flash=${encodeURIComponent(JSON.stringify({ url: o.pathname + o.search, result: a ? e.message : e, thrown: n, error: a, input: [...t.slice(0, -1), [...t[t.length - 1].entries()]] }))}; Secure; HttpOnly;`), new Response(null, { status: i, headers: c });
}
let k;
function $t$1(e) {
  var _a;
  const s = new Headers(e.request.headers), t = ze$1(e.nativeEvent), n = e.response.headers.getSetCookie();
  s.delete("cookie");
  let o = false;
  return ((_a = e.nativeEvent.node) == null ? void 0 : _a.req) && (o = true, e.nativeEvent.node.req.headers.cookie = ""), n.forEach((a) => {
    if (!a) return;
    const { maxAge: i, expires: c, name: d, value: p } = parseSetCookie(a);
    if (i != null && i <= 0) {
      delete t[d];
      return;
    }
    if (c != null && c.getTime() <= Date.now()) {
      delete t[d];
      return;
    }
    t[d] = p;
  }), Object.entries(t).forEach(([a, i]) => {
    s.append("cookie", `${a}=${i}`), o && (e.nativeEvent.node.req.headers.cookie += `${a}=${i};`);
  }), s;
}
async function F$1(e, s) {
  let t, n = new URL(e.request.headers.get("referer")).toString();
  s instanceof Response && (s.headers.has("X-Revalidate") && (t = s.headers.get("X-Revalidate").split(",")), s.headers.has("Location") && (n = new URL(s.headers.get("Location"), new URL(e.request.url).origin + "").toString()));
  const o = st$2(e);
  return o.request = new Request(n, { headers: $t$1(e) }), await provideRequestEvent(o, async () => {
    await mt$1(o), k || (k = (await import('../build/app-y4vWxsUm.mjs')).default), o.router.dataOnly = t || true, o.router.previousUrl = e.request.headers.get("referer");
    try {
      renderToString(() => {
        sharedConfig.context.event = o, k();
      });
    } catch (c) {
      console.log(c);
    }
    const a = o.router.data;
    if (!a) return s;
    let i = false;
    for (const c in a) a[c] === void 0 ? delete a[c] : i = true;
    return i && (s instanceof Response ? s.customBody && (a._$value = s.customBody()) : (a._$value = s, s = new Response(null, { status: 200 })), s.customBody = () => a, s.headers.set("X-Single-Flight", "true")), s;
  });
}
const Ft$1 = eventHandler$1(wt$1);

function Se() {
  let n = /* @__PURE__ */ new Set();
  function t(o) {
    return n.add(o), () => n.delete(o);
  }
  let e = false;
  function r(o, s) {
    if (e) return !(e = false);
    const a = { to: o, options: s, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
    for (const i of n) i.listener({ ...a, from: i.location, retry: (d) => {
      d && (e = true), i.navigate(o, { ...s, resolve: false });
    } });
    return !a.defaultPrevented;
  }
  return { subscribe: t, confirm: r };
}
let W$1;
function re$1() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), W$1 = window.history.state._depth;
}
isServer || re$1();
function Qe(n) {
  return { ...n, _depth: window.history.state && window.history.state._depth };
}
function Ye(n, t) {
  let e = false;
  return () => {
    const r = W$1;
    re$1();
    const o = r == null ? null : W$1 - r;
    if (e) {
      e = false;
      return;
    }
    o && t(o) ? (e = true, window.history.go(-o)) : n();
  };
}
const Te = /^(?:[a-z0-9]+:)?\/\//i, Le = /^\/+|(\/)\/+$/g, Ne = "http://sr";
function E(n, t = false) {
  const e = n.replace(Le, "$1");
  return e ? t || /^[?#]/.test(e) ? e : "/" + e : "";
}
function q(n, t, e) {
  if (Te.test(t)) return;
  const r = E(n), o = e && E(e);
  let s = "";
  return !o || t.startsWith("/") ? s = r : o.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? s = r + o : s = o, (s || "/") + E(t, !s);
}
function Me(n, t) {
  if (n == null) throw new Error(t);
  return n;
}
function qe(n, t) {
  return E(n).replace(/\/*(\*.*)?$/g, "") + E(t);
}
function oe(n) {
  const t = {};
  return n.searchParams.forEach((e, r) => {
    r in t ? Array.isArray(t[r]) ? t[r].push(e) : t[r] = [t[r], e] : t[r] = e;
  }), t;
}
function Fe(n, t, e) {
  const [r, o] = n.split("/*", 2), s = r.split("/").filter(Boolean), a = s.length;
  return (i) => {
    const d = i.split("/").filter(Boolean), f = d.length - a;
    if (f < 0 || f > 0 && o === void 0 && !t) return null;
    const l = { path: a ? "" : "/", params: {} }, m = (p) => e === void 0 ? void 0 : e[p];
    for (let p = 0; p < a; p++) {
      const h = s[p], y = h[0] === ":", w = y ? d[p] : d[p].toLowerCase(), O = y ? h.slice(1) : h.toLowerCase();
      if (y && B$1(w, m(O))) l.params[O] = w;
      else if (y || !B$1(w, O)) return null;
      l.path += `/${w}`;
    }
    if (o) {
      const p = f ? d.slice(-f).join("/") : "";
      if (B$1(p, m(o))) l.params[o] = p;
      else return null;
    }
    return l;
  };
}
function B$1(n, t) {
  const e = (r) => r === n;
  return t === void 0 ? true : typeof t == "string" ? e(t) : typeof t == "function" ? t(n) : Array.isArray(t) ? t.some(e) : t instanceof RegExp ? t.test(n) : false;
}
function _e(n) {
  const [t, e] = n.pattern.split("/*", 2), r = t.split("/").filter(Boolean);
  return r.reduce((o, s) => o + (s.startsWith(":") ? 2 : 3), r.length - (e === void 0 ? 0 : 1));
}
function se$1(n) {
  const t = /* @__PURE__ */ new Map(), e = getOwner();
  return new Proxy({}, { get(r, o) {
    return t.has(o) || runWithOwner(e, () => t.set(o, createMemo(() => n()[o]))), t.get(o)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(n());
  }, has(r, o) {
    return o in n();
  } });
}
function ae(n) {
  let t = /(\/?\:[^\/]+)\?/.exec(n);
  if (!t) return [n];
  let e = n.slice(0, t.index), r = n.slice(t.index + t[0].length);
  const o = [e, e += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(r); ) o.push(e += t[1]), r = r.slice(t[0].length);
  return ae(r).reduce((s, a) => [...s, ...o.map((i) => i + a)], []);
}
const Be = 100, Ie = createContext(), ie = createContext(), $ = () => Me(useContext(Ie), "<A> and 'use' router primitives can be only used inside a Route."), We = () => useContext(ie) || $().base, Ze = (n) => {
  const t = We();
  return createMemo(() => t.resolvePath(n()));
}, et = (n) => {
  const t = $();
  return createMemo(() => {
    const e = n();
    return e !== void 0 ? t.renderPath(e) : e;
  });
}, tt = () => $().navigatorFactory(), nt$1 = () => $().location, rt$1 = () => $().params;
function Ke(n, t = "") {
  const { component: e, preload: r, load: o, children: s, info: a } = n, i = !s || Array.isArray(s) && !s.length, d = { key: n, component: e, preload: r || o, info: a };
  return ce(n.path).reduce((f, l) => {
    for (const m of ae(l)) {
      const p = qe(t, m);
      let h = i ? p : p.split("/*", 1)[0];
      h = h.split("/").map((y) => y.startsWith(":") || y.startsWith("*") ? y : encodeURIComponent(y)).join("/"), f.push({ ...d, originalPath: l, pattern: h, matcher: Fe(h, !i, n.matchFilters) });
    }
    return f;
  }, []);
}
function Ue(n, t = 0) {
  return { routes: n, score: _e(n[n.length - 1]) * 1e4 - t, matcher(e) {
    const r = [];
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o], a = s.matcher(e);
      if (!a) return null;
      r.unshift({ ...a, route: s });
    }
    return r;
  } };
}
function ce(n) {
  return Array.isArray(n) ? n : [n];
}
function ke(n, t = "", e = [], r = []) {
  const o = ce(n);
  for (let s = 0, a = o.length; s < a; s++) {
    const i = o[s];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const d = Ke(i, t);
      for (const f of d) {
        e.push(f);
        const l = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !l) ke(i.children, f.pattern, e, r);
        else {
          const m = Ue([...e], r.length);
          r.push(m);
        }
        e.pop();
      }
    }
  }
  return e.length ? r : r.sort((s, a) => a.score - s.score);
}
function I$1(n, t) {
  for (let e = 0, r = n.length; e < r; e++) {
    const o = n[e].matcher(t);
    if (o) return o;
  }
  return [];
}
function He(n, t, e) {
  const r = new URL(Ne), o = createMemo((l) => {
    const m = n();
    try {
      return new URL(m, r);
    } catch {
      return console.error(`Invalid path ${m}`), l;
    }
  }, r, { equals: (l, m) => l.href === m.href }), s = createMemo(() => o().pathname), a = createMemo(() => o().search, true), i = createMemo(() => o().hash), d = () => "", f = on$1(a, () => oe(o()));
  return { get pathname() {
    return s();
  }, get search() {
    return a();
  }, get hash() {
    return i();
  }, get state() {
    return t();
  }, get key() {
    return d();
  }, query: e ? e(f) : se$1(f) };
}
let P;
function ot$1() {
  return P;
}
function st$1(n, t, e, r = {}) {
  const { signal: [o, s], utils: a = {} } = n, i = a.parsePath || ((c) => c), d = a.renderPath || ((c) => c), f = a.beforeLeave || Se(), l = q("", r.base || "");
  if (l === void 0) throw new Error(`${l} is not a valid base path`);
  l && !o().value && s({ value: l, replace: true, scroll: false });
  const [m, p] = createSignal(false);
  let h;
  const y = (c, u) => {
    u.value === w() && u.state === j() || (h === void 0 && p(true), P = c, h = u, startTransition(() => {
      h === u && (O(h.value), fe(h.state), resetErrorBoundaries(), isServer || z[1]((g) => g.filter((x) => x.pending)));
    }).finally(() => {
      h === u && batch(() => {
        P = void 0, c === "navigate" && me(h), p(false), h = void 0;
      });
    }));
  }, [w, O] = createSignal(o().value), [j, fe] = createSignal(o().state), S = He(w, j, a.queryWrapper), T = [], z = createSignal(isServer ? ye() : []), D = createMemo(() => typeof r.transformUrl == "function" ? I$1(t(), r.transformUrl(S.pathname)) : I$1(t(), S.pathname)), J = () => {
    const c = D(), u = {};
    for (let g = 0; g < c.length; g++) Object.assign(u, c[g].params);
    return u;
  }, de = a.paramsWrapper ? a.paramsWrapper(J, t) : se$1(J), V = { pattern: l, path: () => l, outlet: () => null, resolvePath(c) {
    return q(l, c);
  } };
  return createRenderEffect(on$1(o, (c) => y("native", c), { defer: true })), { base: V, location: S, params: de, isRouting: m, renderPath: d, parsePath: i, navigatorFactory: pe, matches: D, beforeLeave: f, preloadRoute: ge, singleFlight: r.singleFlight === void 0 ? true : r.singleFlight, submissions: z };
  function he(c, u, g) {
    untrack(() => {
      if (typeof u == "number") {
        u && (a.go ? a.go(u) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const x = !u || u[0] === "?", { replace: L, resolve: R, scroll: N, state: b } = { replace: false, resolve: !x, scroll: true, ...g }, C = R ? c.resolvePath(u) : q(x && S.pathname || "", u);
      if (C === void 0) throw new Error(`Path '${u}' is not a routable path`);
      if (T.length >= Be) throw new Error("Too many redirects");
      const X = w();
      if (C !== X || b !== j()) if (isServer) {
        const G = getRequestEvent();
        G && (G.response = { status: 302, headers: new Headers({ Location: C }) }), s({ value: C, replace: L, scroll: N, state: b });
      } else f.confirm(C, g) && (T.push({ value: X, replace: L, scroll: N, state: j() }), y("navigate", { value: C, state: b }));
    });
  }
  function pe(c) {
    return c = c || useContext(ie) || V, (u, g) => he(c, u, g);
  }
  function me(c) {
    const u = T[0];
    u && (s({ ...c, replace: u.replace, scroll: u.scroll }), T.length = 0);
  }
  function ge(c, u) {
    const g = I$1(t(), c.pathname), x = P;
    P = "preload";
    for (let L in g) {
      const { route: R, params: N } = g[L];
      R.component && R.component.preload && R.component.preload();
      const { preload: b } = R;
      u && b && runWithOwner(e(), () => b({ params: N, location: { pathname: c.pathname, search: c.search, hash: c.hash, query: oe(c), state: null, key: "" }, intent: "preload" }));
    }
    P = x;
  }
  function ye() {
    const c = getRequestEvent();
    return c && c.router && c.router.submission ? [c.router.submission] : [];
  }
}
function at$1(n, t, e, r) {
  const { base: o, location: s, params: a } = n, { pattern: i, component: d, preload: f } = r().route, l = createMemo(() => r().path);
  d && d.preload && d.preload();
  const m = f ? f({ params: a, location: s, intent: P || "initial" }) : void 0;
  return { parent: t, pattern: i, path: l, outlet: () => d ? createComponent(d, { params: a, location: s, data: m, get children() {
    return e();
  } }) : e(), resolvePath(h) {
    return q(o.path(), h, l());
  } };
}
const le = createContext(), ue = ["title", "meta"], K$1 = [], U = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]), F = (n, t) => {
  const e = Object.fromEntries(Object.entries(n.props).filter(([r]) => t.includes(r)).sort());
  return (Object.hasOwn(e, "name") || Object.hasOwn(e, "property")) && (e.name = e.name || e.property, delete e.property), n.tag + JSON.stringify(e);
};
function ze() {
  if (!sharedConfig.context) {
    const e = document.head.querySelectorAll("[data-sm]");
    Array.prototype.forEach.call(e, (r) => r.parentNode.removeChild(r));
  }
  const n = /* @__PURE__ */ new Map();
  function t(e) {
    if (e.ref) return e.ref;
    let r = document.querySelector(`[data-sm="${e.id}"]`);
    return r ? (r.tagName.toLowerCase() !== e.tag && (r.parentNode && r.parentNode.removeChild(r), r = document.createElement(e.tag)), r.removeAttribute("data-sm")) : r = document.createElement(e.tag), r;
  }
  return { addTag(e) {
    if (ue.indexOf(e.tag) !== -1) {
      const s = e.tag === "title" ? K$1 : U, a = F(e, s);
      n.has(a) || n.set(a, []);
      let i = n.get(a), d = i.length;
      i = [...i, e], n.set(a, i);
      let f = t(e);
      e.ref = f, spread(f, e.props);
      let l = null;
      for (var r = d - 1; r >= 0; r--) if (i[r] != null) {
        l = i[r];
        break;
      }
      return f.parentNode != document.head && document.head.appendChild(f), l && l.ref && l.ref.parentNode && document.head.removeChild(l.ref), d;
    }
    let o = t(e);
    return e.ref = o, spread(o, e.props), o.parentNode != document.head && document.head.appendChild(o), -1;
  }, removeTag(e, r) {
    const o = e.tag === "title" ? K$1 : U, s = F(e, o);
    if (e.ref) {
      const a = n.get(s);
      if (a) {
        if (e.ref.parentNode) {
          e.ref.parentNode.removeChild(e.ref);
          for (let i = r - 1; i >= 0; i--) a[i] != null && document.head.appendChild(a[i].ref);
        }
        a[r] = null, n.set(s, a);
      } else e.ref.parentNode && e.ref.parentNode.removeChild(e.ref);
    }
  } };
}
function De() {
  const n = [];
  return useAssets(() => ssr(Ve(n))), { addTag(t) {
    if (ue.indexOf(t.tag) !== -1) {
      const e = t.tag === "title" ? K$1 : U, r = F(t, e), o = n.findIndex((s) => s.tag === t.tag && F(s, e) === r);
      o !== -1 && n.splice(o, 1);
    }
    return n.push(t), n.length;
  }, removeTag(t, e) {
  } };
}
const it$1 = (n) => {
  const t = isServer ? De() : ze();
  return createComponent$1(le.Provider, { value: t, get children() {
    return n.children;
  } });
}, H$1 = (n, t, e) => (Je({ tag: n, props: t, setting: e, id: createUniqueId(), get name() {
  return t.name || t.property;
} }), null);
function Je(n) {
  const t = useContext(le);
  if (!t) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const e = t.addTag(n);
    onCleanup(() => t.removeTag(n, e));
  });
}
function Ve(n) {
  return n.map((t) => {
    var _a, _b;
    const r = Object.keys(t.props).map((s) => s === "children" ? "" : ` ${s}="${escape(t.props[s], true)}"`).join("");
    let o = t.props.children;
    return Array.isArray(o) && (o = o.join("")), ((_a = t.setting) == null ? void 0 : _a.close) ? `<${t.tag} data-sm="${t.id}"${r}>${((_b = t.setting) == null ? void 0 : _b.escape) ? escape(o) : o || ""}</${t.tag}>` : `<${t.tag} data-sm="${t.id}"${r}/>`;
  }).join("");
}
const ct$1 = (n) => H$1("title", n, { escape: true, close: true }), lt$1 = (n) => H$1("meta", n), ut$1 = (n) => H$1("link", n);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function nt(e) {
  let t;
  const n = Z(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...s, body: e.node.req.body }) : new Request(n, { ...s, get body() {
    return t || (t = ht(e), t);
  } });
}
function rt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: nt(e), url: Z(e) }, e.web.request;
}
function st() {
  return yt();
}
const X = /* @__PURE__ */ Symbol("$HTTPEvent");
function ot(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[X]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function g(e) {
  return function(...t) {
    var _a;
    let n = t[0];
    if (ot(n)) t[0] = n instanceof H3Event || n.__is_event__ ? n : n[X];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = st(), !n) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const Z = g(getRequestURL$1), at = g(getRequestIP), _ = g(setResponseStatus$1), D = g(getResponseStatus), it = g(getResponseStatusText), L = g(getResponseHeaders), B = g(getResponseHeader$1), ct = g(setResponseHeader$1), ut = g(appendResponseHeader$1), W = g(sendRedirect$1), lt = g(getCookie), pt = g(setCookie), dt = g(setHeader), ht = g(getRequestWebStream), mt = g(removeResponseHeader$1), ft = g(rt);
function gt() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function yt() {
  return gt().use().event;
}
const ee = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('../build/_...404_2.mjs'), import: () => import('../build/_...404_2.mjs') }, path: "/*404", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/[spaceName]/pricing.tsx?pick=default&pick=$css", build: () => import('../build/pricing2.mjs'), import: () => import('../build/pricing2.mjs') }, path: "/:spaceName/pricing", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[spaceName]/pricing.tsx" }, { page: true, $component: { src: "src/routes/[spaceName].tsx?pick=default&pick=$css", build: () => import('../build/_spaceName_2.mjs'), import: () => import('../build/_spaceName_2.mjs') }, path: "/:spaceName", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/[spaceName].tsx" }, { page: true, $component: { src: "src/routes/account.tsx?pick=default&pick=$css", build: () => import('../build/account2.mjs'), import: () => import('../build/account2.mjs') }, path: "/account", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/account.tsx" }, { page: true, $component: { src: "src/routes/announcement/pricing-update-nov-2025.tsx?pick=default&pick=$css", build: () => import('../build/pricing-update-nov-20252.mjs'), import: () => import('../build/pricing-update-nov-20252.mjs') }, path: "/announcement/pricing-update-nov-2025", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/announcement/pricing-update-nov-2025.tsx" }, { page: true, $component: { src: "src/routes/announcements.tsx?pick=default&pick=$css", build: () => import('../build/announcements2.mjs'), import: () => import('../build/announcements2.mjs') }, path: "/announcements", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/announcements.tsx" }, { page: true, $component: { src: "src/routes/community.tsx?pick=default&pick=$css", build: () => import('../build/community2.mjs'), import: () => import('../build/community2.mjs') }, path: "/community", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/community.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('../build/index2.mjs'), import: () => import('../build/index2.mjs') }, path: "/", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/spaces.tsx?pick=default&pick=$css", build: () => import('../build/spaces2.mjs'), import: () => import('../build/spaces2.mjs') }, path: "/spaces", filePath: "/home/engr_luis/Projects/kahitsan-web/src/routes/spaces.tsx" }], wt = bt(ee.filter((e) => e.page));
function bt(e) {
  function t(n, s, r, o) {
    const a = Object.values(n).find((i) => r.startsWith(i.id + "/"));
    return a ? (t(a.children || (a.children = []), s, r.slice(a.id.length)), n) : (n.push({ ...s, id: r, path: r.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/") }), n);
  }
  return e.sort((n, s) => n.path.length - s.path.length).reduce((n, s) => t(n, s, s.path, s.path), []);
}
function vt(e, t) {
  const n = $t.lookup(e);
  if (n && n.route) {
    const s = n.route, r = t === "HEAD" ? s.$HEAD || s.$GET : s[`$${t}`];
    if (r === void 0) return;
    const o = s.page === true && s.$component !== void 0;
    return { handler: r, params: n.params, isPage: o };
  }
}
function Rt(e) {
  return e.$HEAD || e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const $t = createRouter({ routes: ee.reduce((e, t) => {
  if (!Rt(t)) return e;
  let n = t.path.replace(/\([^)/]+\)/g, "").replace(/\/+/g, "/").replace(/\*([^/]*)/g, (s, r) => `**:${r}`).split("/").map((s) => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
  if (/:[^/]*\?/g.test(n)) throw new Error(`Optional parameters are not supported in API routes: ${n}`);
  if (e[n]) throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);
  return e[n] = { route: t }, e;
}, {}) }), H = "solidFetchEvent";
function St(e) {
  return { request: ft(e), response: At(e), clientAddress: at(e), locals: {}, nativeEvent: e };
}
function Et(e) {
  if (!e.context[H]) {
    const t = St(e);
    e.context[H] = t;
  }
  return e.context[H];
}
class kt {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = B(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== null;
  }
  set(t, n) {
    return ct(this.event, t, n);
  }
  delete(t) {
    return mt(this.event, t);
  }
  append(t, n) {
    ut(this.event, t, n);
  }
  getSetCookie() {
    const t = B(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(L(this.event)).forEach(([n, s]) => t(Array.isArray(s) ? s.join(", ") : s, n, this));
  }
  entries() {
    return Object.entries(L(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(L(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(L(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function At(e) {
  return { get status() {
    return D(e);
  }, set status(t) {
    _(e, t);
  }, get statusText() {
    return it(e);
  }, set statusText(t) {
    _(e, D(e), t);
  }, headers: new kt(e) };
}
var Tt = " ";
const Pt = { style: (e) => ssrElement("style", e.attrs, () => e.children, true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(Tt), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function O(e, t) {
  let { tag: n, attrs: { key: s, ...r } = { key: void 0 }, children: o } = e;
  return Pt[n]({ attrs: { ...r, nonce: t }, key: s, children: o });
}
function Ct(e, t, n, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const o = (await e.import())[s], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((l) => l.tag === "style" || l.attrs.rel === "stylesheet");
      return { default: (l) => [...i.map((w) => O(w)), createComponent(o, l)] };
    }
  });
}
function te() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, info: { ...n.$$route ? n.$$route.require().route.info : {}, filesystem: true }, component: n.$component && Ct(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return wt.map(e);
}
let z;
const Lt = isServer ? () => getRequestEvent().routes : () => z || (z = te());
function Ht(e) {
  const t = lt(e.nativeEvent, "flash");
  if (t) try {
    let n = JSON.parse(t);
    if (!n || !n.result) return;
    const s = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])], r = n.error ? new Error(n.result) : n.result;
    return { input: s, url: n.url, pending: false, result: n.thrown ? void 0 : r, error: n.thrown ? r : void 0 };
  } catch (n) {
    console.error(n);
  } finally {
    pt(e.nativeEvent, "flash", "", { maxAge: 0 });
  }
}
async function qt(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: Ht(e) }, routes: te(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const _t = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function I(e) {
  return e.status && _t.has(e.status) ? e.status : 302;
}
function Ot(e, t, n = {}, s) {
  return eventHandler$1({ handler: (r) => {
    const o = Et(r);
    return provideRequestEvent(o, async () => {
      const a = vt(new URL(o.request.url).pathname, o.request.method);
      if (a) {
        const m = await a.handler.import(), y = o.request.method === "HEAD" ? m.HEAD || m.GET : m[o.request.method];
        o.params = a.params || {}, sharedConfig.context = { event: o };
        const c = await y(o);
        if (c !== void 0) return c;
        if (o.request.method !== "GET") throw new Error(`API handler for ${o.request.method} "${o.request.url}" did not return a response.`);
        if (!a.isPage) return;
      }
      const i = await t(o), u = typeof n == "function" ? await n(i) : { ...n }, l = u.mode || "stream";
      if (u.nonce && (i.nonce = u.nonce), l === "sync") {
        const m = renderToString(() => (sharedConfig.context.event = i, e(i)), u);
        if (i.complete = true, i.response && i.response.headers.get("Location")) {
          const y = I(i.response);
          return W(r, i.response.headers.get("Location"), y);
        }
        return m;
      }
      if (u.onCompleteAll) {
        const m = u.onCompleteAll;
        u.onCompleteAll = (y) => {
          G(i)(y), m(y);
        };
      } else u.onCompleteAll = G(i);
      if (u.onCompleteShell) {
        const m = u.onCompleteShell;
        u.onCompleteShell = (y) => {
          K(i, r)(), m(y);
        };
      } else u.onCompleteShell = K(i, r);
      const w = renderToStream(() => (sharedConfig.context.event = i, e(i)), u);
      if (i.response && i.response.headers.get("Location")) {
        const m = I(i.response);
        return W(r, i.response.headers.get("Location"), m);
      }
      if (l === "async") return w;
      const { writable: S, readable: R } = new TransformStream();
      return w.pipeTo(S), R;
    });
  } });
}
function K(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const n = I(e.response);
      _(t, n), dt(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function G(e) {
  return ({ write: t }) => {
    e.complete = true;
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function It(e, t, n) {
  return Ot(e, qt, t);
}
const ne = (e) => (t) => {
  const { base: n } = t, s = children(() => t.children), r = createMemo(() => ke(s(), t.base || ""));
  let o;
  const a = st$1(e, r, () => o, { base: n, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(a), createComponent$1(Ie.Provider, { value: a, get children() {
    return createComponent$1(Nt, { routerState: a, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(o = getOwner()) && null, createComponent$1(jt, { routerState: a, get branches() {
        return r();
      } })];
    } });
  } });
};
function Nt(e) {
  const t = e.routerState.location, n = e.routerState.params, s = createMemo(() => e.preload && untrack(() => {
    e.preload({ params: n, location: t, intent: ot$1() || "initial" });
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (r) => createComponent$1(r, { params: n, location: t, get data() {
    return s();
  }, get children() {
    return e.children;
  } }) });
}
function jt(e) {
  if (isServer) {
    const r = getRequestEvent();
    if (r && r.router && r.router.dataOnly) {
      Ft(r, e.routerState, e.branches);
      return;
    }
    r && ((r.router || (r.router = {})).matches || (r.router.matches = e.routerState.matches().map(({ route: o, path: a, params: i }) => ({ path: o.originalPath, pattern: o.pattern, match: a, params: i, info: o.info }))));
  }
  const t = [];
  let n;
  const s = createMemo(on$1(e.routerState.matches, (r, o, a) => {
    let i = o && r.length === o.length;
    const u = [];
    for (let l = 0, w = r.length; l < w; l++) {
      const S = o && o[l], R = r[l];
      a && S && R.route.key === S.route.key ? u[l] = a[l] : (i = false, t[l] && t[l](), createRoot((m) => {
        t[l] = m, u[l] = at$1(e.routerState, u[l - 1] || e.routerState.base, J(() => s()[l + 1]), () => {
          var _a;
          const y = e.routerState.matches();
          return (_a = y[l]) != null ? _a : y[0];
        });
      }));
    }
    return t.splice(r.length).forEach((l) => l()), a && i ? a : (n = u[0], u);
  }));
  return J(() => s() && n)();
}
const J = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(ie.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function Ft(e, t, n) {
  const s = new URL(e.request.url), r = I$1(n, new URL(e.router.previousUrl || e.request.url).pathname), o = I$1(n, s.pathname);
  for (let a = 0; a < o.length; a++) {
    (!r[a] || o[a].route !== r[a].route) && (e.router.dataOnly = true);
    const { route: i, params: u } = o[a];
    i.preload && i.preload({ params: u, location: t.location, intent: "preload" });
  }
}
function Ut([e, t], n, s) {
  return [e, s ? (r) => t(s(r)) : t];
}
function Mt(e) {
  let t = false;
  const n = (r) => typeof r == "string" ? { value: r } : r, s = Ut(createSignal(n(e.get()), { equals: (r, o) => r.value === o.value && r.state === o.state }), void 0, (r) => (!t && e.set(r), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), r));
  return e.init && onCleanup(e.init((r = e.get()) => {
    t = true, s[1](n(r)), t = false;
  })), ne({ signal: s, create: e.create, utils: e.utils });
}
function Dt(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function Bt(e, t) {
  const n = e && document.getElementById(e);
  n ? n.scrollIntoView() : t && window.scrollTo(0, 0);
}
function Wt(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function zt(e) {
  let t;
  const n = { value: e.url || (t = getRequestEvent()) && Wt(t.request.url) || "" };
  return ne({ signal: [() => n, (s) => Object.assign(n, s)] })(e);
}
const Kt = /* @__PURE__ */ new Map();
function Gt({ preload: e = true, explicitLinks: t = false, actionBase: n = "/_server", transformUrl: s } = {}) {
  return (r) => {
    const o = r.base.path(), a = r.navigatorFactory(r.base);
    let i, u;
    function l(c) {
      return c.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function w(c) {
      if (c.defaultPrevented || c.button !== 0 || c.metaKey || c.altKey || c.ctrlKey || c.shiftKey) return;
      const p = c.composedPath().find((U) => U instanceof Node && U.nodeName.toUpperCase() === "A");
      if (!p || t && !p.hasAttribute("link")) return;
      const f = l(p), h = f ? p.href.baseVal : p.href;
      if ((f ? p.target.baseVal : p.target) || !h && !p.hasAttribute("state")) return;
      const k = (p.getAttribute("rel") || "").split(/\s+/);
      if (p.hasAttribute("download") || k && k.includes("external")) return;
      const T = f ? new URL(h, document.baseURI) : new URL(h);
      if (!(T.origin !== window.location.origin || o && T.pathname && !T.pathname.toLowerCase().startsWith(o.toLowerCase()))) return [p, T];
    }
    function S(c) {
      const p = w(c);
      if (!p) return;
      const [f, h] = p, F = r.parsePath(h.pathname + h.search + h.hash), k = f.getAttribute("state");
      c.preventDefault(), a(F, { resolve: false, replace: f.hasAttribute("replace"), scroll: !f.hasAttribute("noscroll"), state: k ? JSON.parse(k) : void 0 });
    }
    function R(c) {
      const p = w(c);
      if (!p) return;
      const [f, h] = p;
      s && (h.pathname = s(h.pathname)), r.preloadRoute(h, f.getAttribute("preload") !== "false");
    }
    function m(c) {
      clearTimeout(i);
      const p = w(c);
      if (!p) return u = null;
      const [f, h] = p;
      u !== f && (s && (h.pathname = s(h.pathname)), i = setTimeout(() => {
        r.preloadRoute(h, f.getAttribute("preload") !== "false"), u = f;
      }, 20));
    }
    function y(c) {
      if (c.defaultPrevented) return;
      let p = c.submitter && c.submitter.hasAttribute("formaction") ? c.submitter.getAttribute("formaction") : c.target.getAttribute("action");
      if (!p) return;
      if (!p.startsWith("https://action/")) {
        const h = new URL(p, Ne);
        if (p = r.parsePath(h.pathname + h.search), !p.startsWith(n)) return;
      }
      if (c.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
      const f = Kt.get(p);
      if (f) {
        c.preventDefault();
        const h = new FormData(c.target, c.submitter);
        f.call({ r, f: c.target }, c.target.enctype === "multipart/form-data" ? h : new URLSearchParams(h));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", S), e && (document.addEventListener("mousemove", m, { passive: true }), document.addEventListener("focusin", R, { passive: true }), document.addEventListener("touchstart", R, { passive: true })), document.addEventListener("submit", y), onCleanup(() => {
      document.removeEventListener("click", S), e && (document.removeEventListener("mousemove", m), document.removeEventListener("focusin", R), document.removeEventListener("touchstart", R)), document.removeEventListener("submit", y);
    });
  };
}
function Jt(e) {
  if (isServer) return zt(e);
  const t = () => {
    const s = window.location.pathname.replace(/^\/+/, "/") + window.location.search, r = window.history.state && window.history.state._depth && Object.keys(window.history.state).length === 1 ? void 0 : window.history.state;
    return { value: s + window.location.hash, state: r };
  }, n = Se();
  return Mt({ get: t, set({ value: s, replace: r, scroll: o, state: a }) {
    r ? window.history.replaceState(Qe(a), "", s) : window.history.pushState(a, "", s), Bt(decodeURIComponent(window.location.hash.slice(1)), o), re$1();
  }, init: (s) => Dt(window, "popstate", Ye(s, (r) => {
    if (r) return !n.confirm(r);
    {
      const o = t();
      return !n.confirm(o.value, { state: o.state });
    }
  })), create: Gt({ preload: e.preload, explicitLinks: e.explicitLinks, actionBase: e.actionBase, transformUrl: e.transformUrl }), utils: { go: (s) => window.history.go(s), beforeLeave: n } })(e);
}
var Vt = ["<div", ' class="page-transition-container relative min-h-screen">', "</div>"];
function Yt(e) {
  return ssr(Vt, ssrHydrationKey(), escape(createComponent$1(Transition, { name: "slide-up", mode: "outin", get children() {
    return createComponent$1(Suspense, { get children() {
      return e.children;
    } });
  } })));
}
function Qt() {
  return createComponent$1(it$1, { get children() {
    return createComponent$1(Jt, { root: Yt, get children() {
      return createComponent$1(Lt, {});
    } });
  } });
}
const re = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var Xt = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], Zt = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const en = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (n) => (console.error(n), [ssr(Xt, ssrHydrationKey(), escape(t)), createComponent$1(re, { code: 500 })]), get children() {
    return e.children;
  } });
}, tn = (e) => {
  let t = false;
  const n = catchError(() => e.children, (s) => {
    console.error(s), t = !!s;
  });
  return t ? [ssr(Zt, ssrHydrationKey()), createComponent$1(re, { code: 500 })] : n;
};
var V = ["<script", ">", "<\/script>"], nn = ["<script", ' type="module"', " async", "><\/script>"], rn = ["<script", ' type="module" async', "><\/script>"];
const sn = ssr("<!DOCTYPE html>");
function se(e, t, n = []) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (r.path !== e[0].path) continue;
    let o = [...n, r];
    if (r.children) {
      const a = e.slice(1);
      if (a.length === 0 || (o = se(a, r.children, o), !o)) continue;
    }
    return o;
  }
}
function on(e) {
  const t = getRequestEvent(), n = t.nonce;
  let s = [];
  return Promise.resolve().then(async () => {
    let r = [];
    if (t.router && t.router.matches) {
      const o = [...t.router.matches];
      for (; o.length && (!o[0].info || !o[0].info.filesystem); ) o.shift();
      const a = o.length && se(o, t.routes);
      if (a) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let u = 0; u < a.length; u++) {
          const l = a[u], w = i[l.$component.src];
          r.push(w.assets());
        }
      }
    }
    s = await Promise.all(r).then((o) => [...new Map(o.flat().map((a) => [a.attrs.key, a])).values()].filter((a) => a.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === a.attrs.key)));
  }), useAssets(() => s.length ? s.map((r) => O(r)) : void 0), createComponent$1(NoHydration, { get children() {
    return [sn, createComponent$1(tn, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((r) => O(r, n))];
      }, get scripts() {
        return n ? [ssr(V, ssrHydrationKey() + ssrAttribute("nonce", escape(n, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(nn, ssrHydrationKey(), ssrAttribute("nonce", escape(n, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(V, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(rn, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(en, { get children() {
            return createComponent$1(Qt, {});
          } });
        } });
      } });
    } })];
  } });
}
var an = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest">', "</head>"], cn = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const wn = It(() => createComponent$1(on, { document: ({ assets: e, children: t, scripts: n }) => ssr(cn, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(an, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _StSe1I, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Ft$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: wn, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { E, Ze as Z, _t$1 as _, closePrerenderer as a, localFetch as b, ct$1 as c, et as e, lt$1 as l, nt$1 as n, rt$1 as r, tt as t, ut$1 as u };
//# sourceMappingURL=nitro.mjs.map
