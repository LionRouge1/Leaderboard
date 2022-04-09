/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\ninput {\n  display: block;\n  height: 35px;\n  width: 80%;\n  margin: 10px 0;\n  padding-left: 15px;\n  outline: none;\n  border-radius: 5px 0;\n}\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  margin-right: 20%;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAIA;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,8CAA8C;EAC9C,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap');\n\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\ninput {\n  display: block;\n  height: 35px;\n  width: 80%;\n  margin: 10px 0;\n  padding-left: 15px;\n  outline: none;\n  border-radius: 5px 0;\n}\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  margin-right: 20%;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Getdata)
/* harmony export */ });
class Getdata {
  constructor(userName = '', userScore = '', url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4j8ipwhBO11Kf9GfGqr/scores/') {
    this.url = url;
    this.userName = userName;
    this.userScore = userScore;
    this.data = {
      user: this.userName,
      score: this.userScore,
    };
  }

  async submit() {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.data),
    };

    const response = await fetch(this.url, options);
    const json = await response.json();
    return json;
  }

  async refresh() {
    const response = await fetch(this.url);
    const json = await response.json();
    return json.result.sort((a, b) => b.score - a.score);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ "./src/getData.js");



const table = document.querySelector('#scores_list > tbody');
const btnRefresh = document.getElementById('refresh');

const showError = (message, type = 'success') => {
  const box = document.createElement('span');
  box.style.color = (type === 'success') ? 'green' : 'red';
  box.id = 'box_message';
  box.textContent = message;
  document.querySelector('body').appendChild(box);
  setTimeout(() => box.remove(), 6000);
};

const display = async () => {
  table.innerHTML = '';
  const data = new _getData_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const scores = await data.refresh();
  scores.forEach(({ user, score }) => {
    const list = `<tr><td>${user}:</td><td>${score}</td></tr>`;
    table.insertAdjacentHTML('beforeend', list);
  });
};

btnRefresh.addEventListener('click', display);

display().catch((error) => {
  showError(error, 'error');
});

document.querySelector('input[type = "button"]').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const data = new _getData_js__WEBPACK_IMPORTED_MODULE_1__["default"](name, score);
  data.submit().then((ValMessage) => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    showError(ValMessage.message);
  }).catch((error) => {
    showError(error, 'error');
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2M7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFPO0FBQzFCO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsNEJBQTRCLEtBQUssWUFBWSxNQUFNO0FBQ25EO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsrQnViYmxlcyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6IGxhdmVuZGVyO1xcbiAgLS1oZC1jb2xvcjogcmdiKDc0LCAxMzgsIDEzOCk7XFxuICAtLWhkLWZvbnQ6ICdSdWJpayBCdWJibGVzJywgY3Vyc2l2ZTtcXG4gIC0tQWwtZm9udDogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tQWwtZm9udCk7XFxufVxcblxcbm1haW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZC1mb250KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCAjY2NjO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jcmVmcmVzaDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG5hcnRpY2xlIGgzIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhkLWZvbnQpO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRib2R5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxudGhlYWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRyLFxcbnRoIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDNweCAwO1xcbn1cXG5cXG50ZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDEzOCwgMTM4LCAwLjQ4Nik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhMlxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1OVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjNTQ1ODYyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2JveF9tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBSUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpaytCdWJibGVzJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogbGF2ZW5kZXI7XFxuICAtLWhkLWNvbG9yOiByZ2IoNzQsIDEzOCwgMTM4KTtcXG4gIC0taGQtZm9udDogJ1J1YmlrIEJ1YmJsZXMnLCBjdXJzaXZlO1xcbiAgLS1BbC1mb250OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1BbC1mb250KTtcXG59XFxuXFxubWFpbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhkLWZvbnQpO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4ICNjY2M7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jcmVmcmVzaCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzU0NTg2MjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbiNyZWZyZXNoOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmFydGljbGUge1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbmFydGljbGUgaDMge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0taGQtZm9udCk7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudGJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG50aGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudHIsXFxudGgge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4IDA7XFxufVxcblxcbnRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTM4LCAxMzgsIDAuNDg2KTtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDEpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkxXFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDIpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWEyXFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDMpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTU5XFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDEpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXFxudGJvZHkgdHI6bnRoLWNoaWxkKDIpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXFxudGJvZHkgdHI6bnRoLWNoaWxkKDMpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbmZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYm94X21lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldGRhdGEge1xuICBjb25zdHJ1Y3Rvcih1c2VyTmFtZSA9ICcnLCB1c2VyU2NvcmUgPSAnJywgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL000ajhpcHdoQk8xMUtmOUdmR3FyL3Njb3Jlcy8nKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgIHRoaXMudXNlclNjb3JlID0gdXNlclNjb3JlO1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHVzZXI6IHRoaXMudXNlck5hbWUsXG4gICAgICBzY29yZTogdGhpcy51c2VyU2NvcmUsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCwgb3B0aW9ucyk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbi5yZXN1bHQuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2V0ZGF0YSBmcm9tICcuL2dldERhdGEuanMnO1xuXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZXNfbGlzdCA+IHRib2R5Jyk7XG5jb25zdCBidG5SZWZyZXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2gnKTtcblxuY29uc3Qgc2hvd0Vycm9yID0gKG1lc3NhZ2UsIHR5cGUgPSAnc3VjY2VzcycpID0+IHtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBib3guc3R5bGUuY29sb3IgPSAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSA/ICdncmVlbicgOiAncmVkJztcbiAgYm94LmlkID0gJ2JveF9tZXNzYWdlJztcbiAgYm94LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGJveCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gYm94LnJlbW92ZSgpLCA2MDAwKTtcbn07XG5cbmNvbnN0IGRpc3BsYXkgPSBhc3luYyAoKSA9PiB7XG4gIHRhYmxlLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBkYXRhID0gbmV3IEdldGRhdGEoKTtcbiAgY29uc3Qgc2NvcmVzID0gYXdhaXQgZGF0YS5yZWZyZXNoKCk7XG4gIHNjb3Jlcy5mb3JFYWNoKCh7IHVzZXIsIHNjb3JlIH0pID0+IHtcbiAgICBjb25zdCBsaXN0ID0gYDx0cj48dGQ+JHt1c2VyfTo8L3RkPjx0ZD4ke3Njb3JlfTwvdGQ+PC90cj5gO1xuICAgIHRhYmxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGlzdCk7XG4gIH0pO1xufTtcblxuYnRuUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkpO1xuXG5kaXNwbGF5KCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIHNob3dFcnJvcihlcnJvciwgJ2Vycm9yJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZSA9IFwiYnV0dG9uXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlO1xuICBjb25zdCBkYXRhID0gbmV3IEdldGRhdGEobmFtZSwgc2NvcmUpO1xuICBkYXRhLnN1Ym1pdCgpLnRoZW4oKFZhbE1lc3NhZ2UpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykudmFsdWUgPSAnJztcbiAgICBzaG93RXJyb3IoVmFsTWVzc2FnZS5tZXNzYWdlKTtcbiAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgc2hvd0Vycm9yKGVycm9yLCAnZXJyb3InKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==