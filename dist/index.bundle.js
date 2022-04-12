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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.inpt_card {\n  position: relative;\n  text-align: left;\n}\n\n.inpt_card input {\n   border: none;\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   -ms-appearance: none;\n   appearance: none;\n   background-color: #f2f2f2;\n   outline: none;\n   height: 35px;\n   width: 80%;\n   padding-left: 15px;\n}\n\n\n/* input {\n  display: block;\n  height: 35px;\n  width: 80%;\n  margin: 10px 0;\n  padding-left: 15px;\n  outline: none;\n  border-radius: 5px 0;\n} */\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  margin-right: 20%;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAIA;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,8CAA8C;EAC9C,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;GACG,YAAY;GACZ,wBAAwB;GACxB,qBAAqB;GACrB,oBAAoB;GACpB,gBAAgB;GAChB,yBAAyB;GACzB,aAAa;GACb,YAAY;GACZ,UAAU;GACV,kBAAkB;AACrB;;;AAGA;;;;;;;;GAQG;;AAEH;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap');\n\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.inpt_card {\n  position: relative;\n  text-align: left;\n}\n\n.inpt_card input {\n   border: none;\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   -ms-appearance: none;\n   appearance: none;\n   background-color: #f2f2f2;\n   outline: none;\n   height: 35px;\n   width: 80%;\n   padding-left: 15px;\n}\n\n\n/* input {\n  display: block;\n  height: 35px;\n  width: 80%;\n  margin: 10px 0;\n  padding-left: 15px;\n  outline: none;\n  border-radius: 5px 0;\n} */\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  margin-right: 20%;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrK0J1YmJsZXMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiBsYXZlbmRlcjtcXG4gIC0taGQtY29sb3I6IHJnYig3NCwgMTM4LCAxMzgpO1xcbiAgLS1oZC1mb250OiAnUnViaWsgQnViYmxlcycsIGN1cnNpdmU7XFxuICAtLUFsLWZvbnQ6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgY29sb3I6ICM1NDU4NjI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLUFsLWZvbnQpO1xcbn1cXG5cXG5tYWluIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0taGQtZm9udCk7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggI2NjYztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNyZWZyZXNoIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjNTQ1ODYyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuI3JlZnJlc2g6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuYXJ0aWNsZSBoMyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZC1mb250KTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctY29sb3IpO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG50Ym9keSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnRoZWFkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG50cixcXG50aCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAzcHggMDtcXG59XFxuXFxudGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAxMzgsIDEzOCwgMC40ODYpO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoMSkgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTFcXFwiO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoMikgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTJcXFwiO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoMykgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTlcXFwiO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoMSkgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSxcXG50Ym9keSB0cjpudGgtY2hpbGQoMikgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSxcXG50Ym9keSB0cjpudGgtY2hpbGQoMykgPiB0ZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaW5wdF9jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5pbnB0X2NhcmQgaW5wdXQge1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xcbiAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gICBvdXRsaW5lOiBub25lO1xcbiAgIGhlaWdodDogMzVweDtcXG4gICB3aWR0aDogODAlO1xcbiAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuXFxuLyogaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDA7XFxufSAqL1xcblxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMjAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYm94X21lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osd0JBQXdCO0dBQ3hCLHFCQUFxQjtHQUNyQixvQkFBb0I7R0FDcEIsZ0JBQWdCO0dBQ2hCLHlCQUF5QjtHQUN6QixhQUFhO0dBQ2IsWUFBWTtHQUNaLFVBQVU7R0FDVixrQkFBa0I7QUFDckI7OztBQUdBOzs7Ozs7OztHQVFHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsrQnViYmxlcyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6IGxhdmVuZGVyO1xcbiAgLS1oZC1jb2xvcjogcmdiKDc0LCAxMzgsIDEzOCk7XFxuICAtLWhkLWZvbnQ6ICdSdWJpayBCdWJibGVzJywgY3Vyc2l2ZTtcXG4gIC0tQWwtZm9udDogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tQWwtZm9udCk7XFxufVxcblxcbm1haW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZC1mb250KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCAjY2NjO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jcmVmcmVzaDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG5hcnRpY2xlIGgzIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhkLWZvbnQpO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRib2R5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxudGhlYWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRyLFxcbnRoIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDNweCAwO1xcbn1cXG5cXG50ZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDEzOCwgMTM4LCAwLjQ4Nik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhMlxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1OVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbnB0X2NhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmlucHRfY2FyZCBpbnB1dCB7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgIG91dGxpbmU6IG5vbmU7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHdpZHRoOiA4MCU7XFxuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5cXG4vKiBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMDtcXG59ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzU0NTg2MjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNib3hfbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0ZGF0YSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lID0gJycsIHVzZXJTY29yZSA9ICcnLCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvTTRqOGlwd2hCTzExS2Y5R2ZHcXIvc2NvcmVzLycpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy51c2VyU2NvcmUgPSB1c2VyU2NvcmU7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgdXNlcjogdGhpcy51c2VyTmFtZSxcbiAgICAgIHNjb3JlOiB0aGlzLnVzZXJTY29yZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgc3VibWl0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpLFxuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb25zKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uLnJlc3VsdC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHZXRkYXRhIGZyb20gJy4vZ2V0RGF0YS5qcyc7XG5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3Jlc19saXN0ID4gdGJvZHknKTtcbmNvbnN0IGJ0blJlZnJlc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaCcpO1xuXG5jb25zdCBzaG93RXJyb3IgPSAobWVzc2FnZSwgdHlwZSA9ICdzdWNjZXNzJykgPT4ge1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJveC5zdHlsZS5jb2xvciA9ICh0eXBlID09PSAnc3VjY2VzcycpID8gJ2dyZWVuJyA6ICdyZWQnO1xuICBib3guaWQgPSAnYm94X21lc3NhZ2UnO1xuICBib3gudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm94KTtcbiAgc2V0VGltZW91dCgoKSA9PiBib3gucmVtb3ZlKCksIDYwMDApO1xufTtcblxuY29uc3QgZGlzcGxheSA9IGFzeW5jICgpID0+IHtcbiAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGRhdGEgPSBuZXcgR2V0ZGF0YSgpO1xuICBjb25zdCBzY29yZXMgPSBhd2FpdCBkYXRhLnJlZnJlc2goKTtcbiAgc2NvcmVzLmZvckVhY2goKHsgdXNlciwgc2NvcmUgfSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBgPHRyPjx0ZD4ke3VzZXJ9OjwvdGQ+PHRkPiR7c2NvcmV9PC90ZD48L3RyPmA7XG4gICAgdGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsaXN0KTtcbiAgfSk7XG59O1xuXG5idG5SZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheSk7XG5cbmRpc3BsYXkoKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgc2hvd0Vycm9yKGVycm9yLCAnZXJyb3InKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlID0gXCJidXR0b25cIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykudmFsdWU7XG4gIGNvbnN0IGRhdGEgPSBuZXcgR2V0ZGF0YShuYW1lLCBzY29yZSk7XG4gIGRhdGEuc3VibWl0KCkudGhlbigoVmFsTWVzc2FnZSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS52YWx1ZSA9ICcnO1xuICAgIHNob3dFcnJvcihWYWxNZXNzYWdlLm1lc3NhZ2UpO1xuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBzaG93RXJyb3IoZXJyb3IsICdlcnJvcicpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9