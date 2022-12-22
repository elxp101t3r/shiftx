"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMongoose\": () => (/* binding */ initMongoose)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function initMongoose() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDLGVBQWU7SUFDbkMsSUFBSUQsdUVBQThCLEtBQUssR0FBRztRQUN4QyxPQUFPQSxvRUFBNkI7SUFDdEMsQ0FBQztJQUNELE9BQU8sTUFBTUEsdURBQWdCLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUN2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpZnR4Ly4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdE1vbmdvb3NlKCkge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImluaXRNb25nb29zZSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    description: String,\n    price: Number,\n    category: String,\n    picture: String\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsTUFBTUcsZ0JBQWdCLElBQUlELDRDQUFNQSxDQUFDO0lBQy9CRSxNQUFNQztJQUNOQyxhQUFhRDtJQUNiRSxPQUFPQztJQUNQQyxVQUFVSjtJQUNWSyxTQUFTTDtBQUNYO0FBRUEsTUFBTU0sVUFBVVYsNENBQU1BLEVBQUVVLFdBQVdYLCtDQUFLQSxDQUFDLFdBQVdHO0FBRXBELGlFQUFlUSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpZnR4Ly4vbW9kZWxzL1Byb2R1Y3QuanM/MDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBwcmljZTogTnVtYmVyLFxuICBjYXRlZ29yeTogU3RyaW5nLFxuICBwaWN0dXJlOiBTdHJpbmcsXG59KTtcblxuY29uc3QgUHJvZHVjdCA9IG1vZGVscz8uUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlByb2R1Y3RTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsImNhdGVnb3J5IiwicGljdHVyZSIsIlByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle),\n/* harmony export */   \"findAllProducts\": () => (/* binding */ findAllProducts)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function findAllProducts() {\n    return _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().exec();\n}\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.initMongoose)();\n    const { ids  } = req.query;\n    if (ids) {\n        const idsArray = ids.split(\",\");\n        res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            \"_id\": {\n                $in: idsArray\n            }\n        }).exec());\n    } else {\n        res.json(await findAllProducts());\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNQO0FBRXBDLGVBQWVFLGtCQUFpQjtJQUNuQyxPQUFPRCw0REFBWSxHQUFHRyxJQUFJO0FBQzlCLENBQUM7QUFFYyxlQUFlQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUMxQyxNQUFNUCwyREFBWUE7SUFDbEIsTUFBTSxFQUFDUSxJQUFHLEVBQUMsR0FBR0YsSUFBSUcsS0FBSztJQUN2QixJQUFHRCxLQUFJO1FBQ0gsTUFBTUUsV0FBV0YsSUFBSUcsS0FBSyxDQUFDO1FBQzNCSixJQUFJSyxJQUFJLENBQ0osTUFBTVgsNERBQVksQ0FBQztZQUNmLE9BQU07Z0JBQUNZLEtBQUlIO1lBQVE7UUFDdkIsR0FBR04sSUFBSTtJQUVmLE9BQUs7UUFDREcsSUFBSUssSUFBSSxDQUFDLE1BQU1WO0lBQ25CLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpZnR4Ly4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzPzQ5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdE1vbmdvb3NlIH0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb29zZVwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kQWxsUHJvZHVjdHMoKXtcbiAgICByZXR1cm4gUHJvZHVjdC5maW5kKCkuZXhlYygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcyl7XG4gICAgYXdhaXQgaW5pdE1vbmdvb3NlKCk7XG4gICAgY29uc3Qge2lkc30gPSByZXEucXVlcnk7XG4gICAgaWYoaWRzKXtcbiAgICAgICAgY29uc3QgaWRzQXJyYXkgPSBpZHMuc3BsaXQoJywnKTtcbiAgICAgICAgcmVzLmpzb24oXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmZpbmQoe1xuICAgICAgICAgICAgICAgICdfaWQnOnskaW46aWRzQXJyYXl9XG4gICAgICAgICAgICB9KS5leGVjKClcbiAgICAgICAgKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmVzLmpzb24oYXdhaXQgZmluZEFsbFByb2R1Y3RzKCkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiaW5pdE1vbmdvb3NlIiwiUHJvZHVjdCIsImZpbmRBbGxQcm9kdWN0cyIsImZpbmQiLCJleGVjIiwiaGFuZGxlIiwicmVxIiwicmVzIiwiaWRzIiwicXVlcnkiLCJpZHNBcnJheSIsInNwbGl0IiwianNvbiIsIiRpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();