import { setGlobalContext_buildEntry } from "vike/__internal";
/*! virtual:vike:entry:server [vike:pluginModuleBanner] */
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedAtLocation": "/pages/about/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/about", moduleExports: import("./entries/pages_about.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/home",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/home", "definedAtLocation": "/pages/home/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/home", moduleExports: import("./entries/pages_home.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedAtLocation": "/pages/index/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/index", moduleExports: import("./entries/pages_index.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/login",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/login", "definedAtLocation": "/pages/login/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/login", moduleExports: import("./entries/pages_login.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/products",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products", "definedAtLocation": "/pages/products/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/products", moduleExports: import("./entries/pages_products.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/public-products",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/public-products", "definedAtLocation": "/pages/public-products/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/public-products", moduleExports: import("./entries/pages_public-products.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/register",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/register", "definedAtLocation": "/pages/register/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/register", moduleExports: import("./entries/pages_register.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/simple",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/simple", "definedAtLocation": "/pages/simple/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/simple", moduleExports: import("./entries/pages_simple.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/test",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/test", "definedAtLocation": "/pages/test/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/test", moduleExports: import("./entries/pages_test.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/todos",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/todos", "definedAtLocation": "/pages/todos/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/todos", moduleExports: import("./entries/pages_todos.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/vike-app-deploy/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/vike-app-deploy/about", "definedAtLocation": "/vike-app-deploy/pages/about/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/vike-app-deploy/pages/about", moduleExports: import("./entries/vike-app-deploy_pages_about.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/vike-app-deploy/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/vike-app-deploy", "definedAtLocation": "/vike-app-deploy/pages/index/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/vike-app-deploy/pages/index", moduleExports: import("./entries/vike-app-deploy_pages_index.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/products/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products/@id", "definedAtLocation": "/pages/products/@id/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/products/@id", moduleExports: import("./entries/pages_products_-id.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/@id/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "js-serialized",
          value: "/products/@id"
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/products/@id/edit",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products/@id/edit", "definedAtLocation": "/pages/products/@id/edit/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/products/@id/edit", moduleExports: import("./entries/pages_products_-id_edit.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/@id/edit/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "js-serialized",
          value: "/products/@id/edit"
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/products/categories",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products/categories", "definedAtLocation": "/pages/products/categories/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/products/categories", moduleExports: import("./entries/pages_products_categories.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/categories/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "js-serialized",
          value: "/products/categories"
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/products/create",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products/create", "definedAtLocation": "/pages/products/create/" },
    loadConfigLazy: () => ({ moduleId: "virtual:vike:pageConfigLazy:server:/pages/products/create", moduleExports: import("./entries/pages_products_create.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/create/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "js-serialized",
          value: "/products/create"
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:@brillout/vite-plugin-server-entry:serverEntry [vike:pluginModuleBanner] */
{
  const assetsManifest = {
  "_chunk-!~{00i}~.js": {
    "file": "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
    "src": "_chunk-!~{00i}~.js"
  },
  "_chunk-!~{00j}~.js": {
    "file": "assets/static/styles_responsive-wp-d907fb57.Ct82tlqg.css",
    "src": "_chunk-!~{00j}~.js"
  },
  "_chunk-!~{00k}~.js": {
    "file": "assets/static/styles_wordpress-dbc610b1.Dtwm8VMV.css",
    "src": "_chunk-!~{00k}~.js"
  },
  "_chunk-!~{00l}~.js": {
    "file": "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
    "src": "_chunk-!~{00l}~.js"
  },
  "_chunk-D5dLUlHE.js": {
    "file": "assets/chunks/chunk-D5dLUlHE.js",
    "name": "execHook"
  },
  "_chunk-pC8QHr6g.js": {
    "file": "assets/chunks/chunk-pC8QHr6g.js",
    "name": "Loading",
    "imports": [
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "node_modules/vike/dist/esm/client/runtime-client-routing/entry.js": {
    "file": "assets/entries/entry-client-routing.DvGxh-gE.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/runtime-client-routing/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-D5dLUlHE.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigLazy:client:/pages/about",
      "virtual:vike:pageConfigLazy:client:/pages/home",
      "virtual:vike:pageConfigLazy:client:/pages/index",
      "virtual:vike:pageConfigLazy:client:/pages/login",
      "virtual:vike:pageConfigLazy:client:/pages/products",
      "virtual:vike:pageConfigLazy:client:/pages/public-products",
      "virtual:vike:pageConfigLazy:client:/pages/register",
      "virtual:vike:pageConfigLazy:client:/pages/simple",
      "virtual:vike:pageConfigLazy:client:/pages/test",
      "virtual:vike:pageConfigLazy:client:/pages/todos",
      "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/about",
      "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/index",
      "virtual:vike:pageConfigLazy:client:/pages/products/@id",
      "virtual:vike:pageConfigLazy:client:/pages/products/@id/edit",
      "virtual:vike:pageConfigLazy:client:/pages/products/categories",
      "virtual:vike:pageConfigLazy:client:/pages/products/create"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/about": {
    "file": "assets/entries/pages_about.BPfpgEX_.js",
    "name": "entries/pages/about",
    "src": "virtual:vike:pageConfigLazy:client:/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/home": {
    "file": "assets/entries/pages_home.BnTxh8iE.js",
    "name": "entries/pages/home",
    "src": "virtual:vike:pageConfigLazy:client:/pages/home",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/index": {
    "file": "assets/entries/pages_index.BHazWFVo.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigLazy:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/login": {
    "file": "assets/entries/pages_login.DkAmBnEy.js",
    "name": "entries/pages/login",
    "src": "virtual:vike:pageConfigLazy:client:/pages/login",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/styles_wordpress-dbc610b1.Dtwm8VMV.css",
      "assets/static/styles_responsive-wp-d907fb57.Ct82tlqg.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/products": {
    "file": "assets/entries/pages_products.BtHkcwhq.js",
    "name": "entries/pages/products",
    "src": "virtual:vike:pageConfigLazy:client:/pages/products",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/products/@id": {
    "file": "assets/entries/pages_products_-id.Sklx-b6R.js",
    "name": "entries/pages/products/@id",
    "src": "virtual:vike:pageConfigLazy:client:/pages/products/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/products/@id/edit": {
    "file": "assets/entries/pages_products_-id_edit.CE-Ei72K.js",
    "name": "entries/pages/products/@id/edit",
    "src": "virtual:vike:pageConfigLazy:client:/pages/products/@id/edit",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/products/categories": {
    "file": "assets/entries/pages_products_categories.Di7Spe3Z.js",
    "name": "entries/pages/products/categories",
    "src": "virtual:vike:pageConfigLazy:client:/pages/products/categories",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/products/create": {
    "file": "assets/entries/pages_products_create.4-aSiABI.js",
    "name": "entries/pages/products/create",
    "src": "virtual:vike:pageConfigLazy:client:/pages/products/create",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/public-products": {
    "file": "assets/entries/pages_public-products.Dsi5eNRo.js",
    "name": "entries/pages/public-products",
    "src": "virtual:vike:pageConfigLazy:client:/pages/public-products",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/register": {
    "file": "assets/entries/pages_register.DLzlxgMo.js",
    "name": "entries/pages/register",
    "src": "virtual:vike:pageConfigLazy:client:/pages/register",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css",
      "assets/static/styles_wordpress-dbc610b1.Dtwm8VMV.css",
      "assets/static/styles_responsive-wp-d907fb57.Ct82tlqg.css",
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/simple": {
    "file": "assets/entries/pages_simple.D-IX3j34.js",
    "name": "entries/pages/simple",
    "src": "virtual:vike:pageConfigLazy:client:/pages/simple",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/test": {
    "file": "assets/entries/pages_test.BEjEvqFU.js",
    "name": "entries/pages/test",
    "src": "virtual:vike:pageConfigLazy:client:/pages/test",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/pages/todos": {
    "file": "assets/entries/pages_todos.C8ewF-bg.js",
    "name": "entries/pages/todos",
    "src": "virtual:vike:pageConfigLazy:client:/pages/todos",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/about": {
    "file": "assets/entries/vike-app-deploy_pages_about.ZhpIgwM5.js",
    "name": "entries/vike-app-deploy/pages/about",
    "src": "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  },
  "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/index": {
    "file": "assets/entries/vike-app-deploy_pages_index.B2LsUpWB.js",
    "name": "entries/vike-app-deploy/pages/index",
    "src": "virtual:vike:pageConfigLazy:client:/vike-app-deploy/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-pC8QHr6g.js",
      "_chunk-D5dLUlHE.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/styles_responsive-00e563e4.erdLyCz3.css"
    ]
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.235",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "root": "/workspace/vike-app",
      "build": {
        "outDir": "/workspace/vike-app/dist/"
      },
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_buildEntry({
    virtualFileExports,
    assetsManifest,
    buildInfo
  });
}
