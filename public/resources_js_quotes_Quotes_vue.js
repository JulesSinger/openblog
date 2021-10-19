"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_quotes_Quotes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'Quote',\n  props: {\n    quote: {\n      type: Object,\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/quotes/Quote.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_Flag_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/Flag.vue */ \"./resources/js/helpers/Flag.vue\");\n/* harmony import */ var _Quote_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quote.vue */ \"./resources/js/quotes/Quote.vue\");\n/* harmony import */ var _header_Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/Header.vue */ \"./resources/js/header/Header.vue\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'Quotes',\n  components: {\n    Quote: _Quote_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Flag: _helpers_Flag_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Header: _header_Header_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      quote: {\n        author: \"Jean Cocteau\",\n        content: \"Il faut faire aujourd'hui ce que tout le monde fera demain\",\n        createdDate: \"vendredi 18 juin 2021\"\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/quotes/Quotes.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  \"class\": \"quote container\"\n};\nvar _hoisted_2 = {\n  \"class\": \"quote-header\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  \"class\": \"btn btn-light\"\n}, \"COPIER\", -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = {\n  \"class\": \"quote-container\"\n};\nvar _hoisted_5 = {\n  id: \"quote-text\"\n};\nvar _hoisted_6 = {\n  id: \"quote-author\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Posté le \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quote.createdDate), 1\n  /* TEXT */\n  ), _hoisted_3]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", _hoisted_5, \"\\\"\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quote.content) + \"\\\"\", 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quote.author), 1\n  /* TEXT */\n  )])]);\n}\n\n//# sourceURL=webpack:///./resources/js/quotes/Quote.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  id: \"quotes-page\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Header\");\n\n  var _component_Flag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Flag\");\n\n  var _component_Quote = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Quote\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Flag, {\n    title: \"CITATIONS\",\n    subtitle: \"“Aucun de nous ne sait ce que nous savons tous, ensemble”\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Quote, {\n    quote: $data.quote\n  }, null, 8\n  /* PROPS */\n  , [\"quote\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Quote, {\n    quote: $data.quote\n  }, null, 8\n  /* PROPS */\n  , [\"quote\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Quote, {\n    quote: $data.quote\n  }, null, 8\n  /* PROPS */\n  , [\"quote\"])])]);\n}\n\n//# sourceURL=webpack:///./resources/js/quotes/Quotes.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./resources/js/quotes/Quote.vue":
/*!***************************************!*\
  !*** ./resources/js/quotes/Quote.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Quote_vue_vue_type_template_id_2ecd4542__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quote.vue?vue&type=template&id=2ecd4542 */ \"./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542\");\n/* harmony import */ var _Quote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quote.vue?vue&type=script&lang=js */ \"./resources/js/quotes/Quote.vue?vue&type=script&lang=js\");\n/* harmony import */ var D_laragon_www_openblog_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_laragon_www_openblog_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Quote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Quote_vue_vue_type_template_id_2ecd4542__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"resources/js/quotes/Quote.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./resources/js/quotes/Quote.vue?");

/***/ }),

/***/ "./resources/js/quotes/Quotes.vue":
/*!****************************************!*\
  !*** ./resources/js/quotes/Quotes.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Quotes_vue_vue_type_template_id_a2f1f7be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quotes.vue?vue&type=template&id=a2f1f7be */ \"./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be\");\n/* harmony import */ var _Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quotes.vue?vue&type=script&lang=js */ \"./resources/js/quotes/Quotes.vue?vue&type=script&lang=js\");\n/* harmony import */ var D_laragon_www_openblog_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_laragon_www_openblog_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Quotes_vue_vue_type_template_id_a2f1f7be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"resources/js/quotes/Quotes.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./resources/js/quotes/Quotes.vue?");

/***/ }),

/***/ "./resources/js/quotes/Quote.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/quotes/Quote.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Quote.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./resources/js/quotes/Quote.vue?");

/***/ }),

/***/ "./resources/js/quotes/Quotes.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/quotes/Quotes.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quotes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Quotes.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./resources/js/quotes/Quotes.vue?");

/***/ }),

/***/ "./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542":
/*!*********************************************************************!*\
  !*** ./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quote_vue_vue_type_template_id_2ecd4542__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quote_vue_vue_type_template_id_2ecd4542__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Quote.vue?vue&type=template&id=2ecd4542 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quote.vue?vue&type=template&id=2ecd4542\");\n\n\n//# sourceURL=webpack:///./resources/js/quotes/Quote.vue?");

/***/ }),

/***/ "./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be":
/*!**********************************************************************!*\
  !*** ./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quotes_vue_vue_type_template_id_a2f1f7be__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Quotes_vue_vue_type_template_id_a2f1f7be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Quotes.vue?vue&type=template&id=a2f1f7be */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./resources/js/quotes/Quotes.vue?vue&type=template&id=a2f1f7be\");\n\n\n//# sourceURL=webpack:///./resources/js/quotes/Quotes.vue?");

/***/ })

}]);