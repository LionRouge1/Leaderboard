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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.inpt_card {\n  position: relative;\n  text-align: left;\n  margin: 20px 0;\n}\n\n.inpt_card input {\n   border: none;\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   -ms-appearance: none;\n   appearance: none;\n   outline: none;\n   height: 35px;\n   width: 100%;\n   padding-left: 15px;\n   font-size: 14px;\n   border-top-left-radius: 3px;\n   border-top-right-radius: 3px;\n   background:\n     linear-gradient(90deg, var(--hd-color), var(--hd-color)) center bottom/0 0.15em no-repeat,\n     linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,\n     linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;\n   transition: background-size 0.3s ease;\n}\n\n.inpt_card label {\n   position: absolute;\n   left: 15px;\n   top: 9px;\n   width: calc(100% - (30px));\n   overflow: hidden;\n   color: #aaa;\n   transition: all 0.3s ease;\n}\n\n.inpt_card input.dirty + label,\n.inpt_card input:focus + label,\n.inpt_card input:not(:placeholder-shown) + label {\n  top: -10px;\n  font-size: 12px;\n  color: var(--hd-color);\n}\n\n.inpt_card input.dirty,\n.inpt_card input:not(:placeholder-shown),\n.inpt_card input:focus {\n  background-size: 100% 0.15em, 100% 0.1em, 100%;\n}\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAIA;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8CAA8C;EAC9C,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;EACjC,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,8CAA8C;EAC9C,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;GACG,YAAY;GACZ,wBAAwB;GACxB,qBAAqB;GACrB,oBAAoB;GACpB,gBAAgB;GAChB,aAAa;GACb,YAAY;GACZ,WAAW;GACX,kBAAkB;GAClB,eAAe;GACf,2BAA2B;GAC3B,4BAA4B;GAC5B;;;wEAGqE;GACrE,qCAAqC;AACxC;;AAEA;GACG,kBAAkB;GAClB,UAAU;GACV,QAAQ;GACR,0BAA0B;GAC1B,gBAAgB;GAChB,WAAW;GACX,yBAAyB;AAC5B;;AAEA;;;EAGE,UAAU;EACV,eAAe;EACf,sBAAsB;AACxB;;AAEA;;;EAGE,8CAA8C;AAChD;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap');\n\n:root {\n  --bg-color: lavender;\n  --hd-color: rgb(74, 138, 138);\n  --hd-font: 'Rubik Bubbles', cursive;\n  --Al-font: 'Nunito Sans', sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Courier New', Courier, monospace;\n  color: #545862;\n}\n\nbody {\n  background-color: var(--bg-color);\n  font-family: var(--Al-font);\n}\n\nmain {\n  text-align: center;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\nsection {\n  display: grid;\n  grid-template-columns: auto auto;\n  width: 70%;\n  margin: 50px auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 60px #ccc;\n  padding: 20px;\n}\n\n#refresh {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\n#refresh:hover {\n  box-shadow: none;\n  border: none;\n}\n\narticle {\n  margin: 0 20px;\n}\n\narticle h3 {\n  text-align: left;\n  color: var(--hd-color);\n  font-family: var(--hd-font);\n}\n\ntable {\n  border: 2px solid var(--bg-color);\n  margin: 20px 0;\n  max-width: 500px;\n  min-width: 350px;\n  display: block;\n}\n\ntbody {\n  display: block;\n  height: 400px;\n  overflow-y: scroll;\n  margin: 0;\n}\n\nthead {\n  display: block;\n}\n\ntr,\nth {\n  height: 30px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 3px 0;\n}\n\ntd {\n  display: flex;\n  justify-content: space-around;\n  width: 100px;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: rgba(74, 138, 138, 0.486);\n}\n\ntbody tr:nth-child(even) {\n  background-color: var(--bg-color);\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before {\n  content: \"\\f091\";\n}\n\ntbody tr:nth-child(2) > td:nth-child(1)::before {\n  content: \"\\f5a2\";\n}\n\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  content: \"\\f559\";\n}\n\ntbody tr:nth-child(1) > td:nth-child(1)::before,\ntbody tr:nth-child(2) > td:nth-child(1)::before,\ntbody tr:nth-child(3) > td:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  display: inline-block;\n  width: 60px;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n  color: yellow;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.inpt_card {\n  position: relative;\n  text-align: left;\n  margin: 20px 0;\n}\n\n.inpt_card input {\n   border: none;\n   -webkit-appearance: none;\n   -moz-appearance: none;\n   -ms-appearance: none;\n   appearance: none;\n   outline: none;\n   height: 35px;\n   width: 100%;\n   padding-left: 15px;\n   font-size: 14px;\n   border-top-left-radius: 3px;\n   border-top-right-radius: 3px;\n   background:\n     linear-gradient(90deg, var(--hd-color), var(--hd-color)) center bottom/0 0.15em no-repeat,\n     linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,\n     linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;\n   transition: background-size 0.3s ease;\n}\n\n.inpt_card label {\n   position: absolute;\n   left: 15px;\n   top: 9px;\n   width: calc(100% - (30px));\n   overflow: hidden;\n   color: #aaa;\n   transition: all 0.3s ease;\n}\n\n.inpt_card input.dirty + label,\n.inpt_card input:focus + label,\n.inpt_card input:not(:placeholder-shown) + label {\n  top: -10px;\n  font-size: 12px;\n  color: var(--hd-color);\n}\n\n.inpt_card input.dirty,\n.inpt_card input:not(:placeholder-shown),\n.inpt_card input:focus {\n  background-size: 100% 0.15em, 100% 0.1em, 100%;\n}\n\ninput[type=\"button\"] {\n  width: 100px;\n  float: right;\n  border-radius: 5px;\n  border: 1px solid white;\n  height: 30px;\n  font-size: 14px;\n  box-shadow: 0 0 6px #545862;\n  transition: 0.3s;\n}\n\ninput[type=\"button\"]:hover {\n  box-shadow: none;\n  border: none;\n}\n\n#box_message {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  font-size: 20px;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQU87QUFDMUI7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyw0QkFBNEIsS0FBSyxZQUFZLE1BQU07QUFDbkQ7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpaytCdWJibGVzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogbGF2ZW5kZXI7XFxuICAtLWhkLWNvbG9yOiByZ2IoNzQsIDEzOCwgMTM4KTtcXG4gIC0taGQtZm9udDogJ1J1YmlrIEJ1YmJsZXMnLCBjdXJzaXZlO1xcbiAgLS1BbC1mb250OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1BbC1mb250KTtcXG59XFxuXFxubWFpbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhkLWZvbnQpO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4ICNjY2M7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jcmVmcmVzaCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggIzU0NTg2MjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbiNyZWZyZXNoOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmFydGljbGUge1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbmFydGljbGUgaDMge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0taGQtZm9udCk7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudGJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG50aGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudHIsXFxudGgge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4IDA7XFxufVxcblxcbnRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTM4LCAxMzgsIDAuNDg2KTtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDEpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkxXFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDIpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWEyXFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDMpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTU5XFxcIjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKDEpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXFxudGJvZHkgdHI6bnRoLWNoaWxkKDIpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXFxudGJvZHkgdHI6bnRoLWNoaWxkKDMpID4gdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbmZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmlucHRfY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5pbnB0X2NhcmQgaW5wdXQge1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xcbiAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgb3V0bGluZTogbm9uZTtcXG4gICBoZWlnaHQ6IDM1cHg7XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXG4gICBiYWNrZ3JvdW5kOlxcbiAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1oZC1jb2xvciksIHZhcigtLWhkLWNvbG9yKSkgY2VudGVyIGJvdHRvbS8wIDAuMTVlbSBuby1yZXBlYXQsXFxuICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNjY2MsICNjY2MpIGxlZnQgYm90dG9tLzEwMCUgMC4xNWVtIG5vLXJlcGVhdCxcXG4gICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhZmFmYSwgI2ZhZmFmYSkgbGVmdCBib3R0b20vMTAwJSBuby1yZXBlYXQ7XFxuICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXG59XFxuXFxuLmlucHRfY2FyZCBsYWJlbCB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGxlZnQ6IDE1cHg7XFxuICAgdG9wOiA5cHg7XFxuICAgd2lkdGg6IGNhbGMoMTAwJSAtICgzMHB4KSk7XFxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICBjb2xvcjogI2FhYTtcXG4gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaW5wdF9jYXJkIGlucHV0LmRpcnR5ICsgbGFiZWwsXFxuLmlucHRfY2FyZCBpbnB1dDpmb2N1cyArIGxhYmVsLFxcbi5pbnB0X2NhcmQgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XFxuICB0b3A6IC0xMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG59XFxuXFxuLmlucHRfY2FyZCBpbnB1dC5kaXJ0eSxcXG4uaW5wdF9jYXJkIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pLFxcbi5pbnB0X2NhcmQgaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMTVlbSwgMTAwJSAwLjFlbSwgMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYm94X21lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtHQUNHLFlBQVk7R0FDWix3QkFBd0I7R0FDeEIscUJBQXFCO0dBQ3JCLG9CQUFvQjtHQUNwQixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLFlBQVk7R0FDWixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZiwyQkFBMkI7R0FDM0IsNEJBQTRCO0dBQzVCOzs7d0VBR3FFO0dBQ3JFLHFDQUFxQztBQUN4Qzs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsUUFBUTtHQUNSLDBCQUEwQjtHQUMxQixnQkFBZ0I7R0FDaEIsV0FBVztHQUNYLHlCQUF5QjtBQUM1Qjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsrQnViYmxlcyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6IGxhdmVuZGVyO1xcbiAgLS1oZC1jb2xvcjogcmdiKDc0LCAxMzgsIDEzOCk7XFxuICAtLWhkLWZvbnQ6ICdSdWJpayBCdWJibGVzJywgY3Vyc2l2ZTtcXG4gIC0tQWwtZm9udDogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tQWwtZm9udCk7XFxufVxcblxcbm1haW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZC1mb250KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgNjBweCAjY2NjO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4ICM1NDU4NjI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jcmVmcmVzaDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG5hcnRpY2xlIGgzIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhkLWZvbnQpO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRib2R5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxudGhlYWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnRyLFxcbnRoIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDNweCAwO1xcbn1cXG5cXG50ZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDEzOCwgMTM4LCAwLjQ4Nik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhMlxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1OVxcXCI7XFxufVxcblxcbnRib2R5IHRyOm50aC1jaGlsZCgxKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgyKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxcbnRib2R5IHRyOm50aC1jaGlsZCgzKSA+IHRkOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbnB0X2NhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uaW5wdF9jYXJkIGlucHV0IHtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcXG4gICBhcHBlYXJhbmNlOiBub25lO1xcbiAgIG91dGxpbmU6IG5vbmU7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICBmb250LXNpemU6IDE0cHg7XFxuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxuICAgYmFja2dyb3VuZDpcXG4gICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taGQtY29sb3IpLCB2YXIoLS1oZC1jb2xvcikpIGNlbnRlciBib3R0b20vMCAwLjE1ZW0gbm8tcmVwZWF0LFxcbiAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjY2NjLCAjY2NjKSBsZWZ0IGJvdHRvbS8xMDAlIDAuMTVlbSBuby1yZXBlYXQsXFxuICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYWZhZmEsICNmYWZhZmEpIGxlZnQgYm90dG9tLzEwMCUgbm8tcmVwZWF0O1xcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxufVxcblxcbi5pbnB0X2NhcmQgbGFiZWwge1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBsZWZ0OiAxNXB4O1xcbiAgIHRvcDogOXB4O1xcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoMzBweCkpO1xcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgY29sb3I6ICNhYWE7XFxuICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmlucHRfY2FyZCBpbnB1dC5kaXJ0eSArIGxhYmVsLFxcbi5pbnB0X2NhcmQgaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcXG4uaW5wdF9jYXJkIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwge1xcbiAgdG9wOiAtMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxufVxcblxcbi5pbnB0X2NhcmQgaW5wdXQuZGlydHksXFxuLmlucHRfY2FyZCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSxcXG4uaW5wdF9jYXJkIGlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjE1ZW0sIDEwMCUgMC4xZW0sIDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjNTQ1ODYyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2JveF9tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHZXRkYXRhIHtcbiAgY29uc3RydWN0b3IodXNlck5hbWUgPSAnJywgdXNlclNjb3JlID0gJycsIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9NNGo4aXB3aEJPMTFLZjlHZkdxci9zY29yZXMvJykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICB0aGlzLnVzZXJTY29yZSA9IHVzZXJTY29yZTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICB1c2VyOiB0aGlzLnVzZXJOYW1lLFxuICAgICAgc2NvcmU6IHRoaXMudXNlclNjb3JlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc3luYyByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb24ucmVzdWx0LnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEdldGRhdGEgZnJvbSAnLi9nZXREYXRhLmpzJztcblxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmVzX2xpc3QgPiB0Ym9keScpO1xuY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoJyk7XG5cbmNvbnN0IHNob3dFcnJvciA9IChtZXNzYWdlLCB0eXBlID0gJ3N1Y2Nlc3MnKSA9PiB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYm94LnN0eWxlLmNvbG9yID0gKHR5cGUgPT09ICdzdWNjZXNzJykgPyAnZ3JlZW4nIDogJ3JlZCc7XG4gIGJveC5pZCA9ICdib3hfbWVzc2FnZSc7XG4gIGJveC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChib3gpO1xuICBzZXRUaW1lb3V0KCgpID0+IGJveC5yZW1vdmUoKSwgNjAwMCk7XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICB0YWJsZS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgZGF0YSA9IG5ldyBHZXRkYXRhKCk7XG4gIGNvbnN0IHNjb3JlcyA9IGF3YWl0IGRhdGEucmVmcmVzaCgpO1xuICBzY29yZXMuZm9yRWFjaCgoeyB1c2VyLCBzY29yZSB9KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGA8dHI+PHRkPiR7dXNlcn06PC90ZD48dGQ+JHtzY29yZX08L3RkPjwvdHI+YDtcbiAgICB0YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxpc3QpO1xuICB9KTtcbn07XG5cbmJ0blJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5KTtcblxuZGlzcGxheSgpLmNhdGNoKChlcnJvcikgPT4ge1xuICBzaG93RXJyb3IoZXJyb3IsICdlcnJvcicpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGUgPSBcImJ1dHRvblwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS52YWx1ZTtcbiAgY29uc3QgZGF0YSA9IG5ldyBHZXRkYXRhKG5hbWUsIHNjb3JlKTtcbiAgZGF0YS5zdWJtaXQoKS50aGVuKChWYWxNZXNzYWdlKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlID0gJyc7XG4gICAgc2hvd0Vycm9yKFZhbE1lc3NhZ2UubWVzc2FnZSk7XG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIHNob3dFcnJvcihlcnJvciwgJ2Vycm9yJyk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=