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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/models/contact.js":
/*!*******************************!*\
  !*** ./src/models/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contactSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    message: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamp: true\n});\nconst Contact = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Contact) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Contact\", contactSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUNyQztJQUNJRyxVQUFVO1FBQ05DLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNsQjtJQUNBQyxPQUFPO1FBQ0hILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNsQjtJQUNBRSxTQUFTO1FBQ0xKLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNsQjtBQUNKLEdBQ0E7SUFDSUcsV0FBVyxJQUFJO0FBQ25CO0FBRUosTUFBTUMsVUFBVVYsZ0VBQXVCLElBQUlBLHFEQUFjLENBQUMsV0FBV0M7QUFFckUsaUVBQWdCUyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby1zdGFydGVyLWNvZGUvLi9zcmMvbW9kZWxzL2NvbnRhY3QuanM/NDE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbnRhY3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aW1lc3RhbXA6IHRydWUsXG4gICAgfSlcblxuY29uc3QgQ29udGFjdCA9IG1vbmdvb3NlLm1vZGVscy5Db250YWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdDb250YWN0JywgY29udGFjdFNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgIENvbnRhY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29udGFjdFNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiQ29udGFjdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/models/contact.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/contact.js":
/*!**********************************!*\
  !*** ./src/pages/api/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/contact */ \"(api)/./src/models/contact.js\");\n\nconst database = __webpack_require__(/*! ../../utils/connectDB */ \"(api)/./src/utils/connectDB.js\");\nasync function handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            await database.connect();\n            await _models_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(JSON.parse(req.body));\n            return res.status(200).json({\n                message: \"Message sent successfully!\"\n            });\n        } else {\n            // Handle any other HTTP method\n            console.log(\"other req than post\");\n        }\n    } catch (e) {\n        console.log(e);\n        return res.status(500).json({\n            message: \"Server error, please try again!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFDM0MsTUFBTUMsV0FBV0MsbUJBQU9BLENBQUMsNkRBQXVCO0FBRWpDLGVBQWVDLFFBQVNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLElBQUk7UUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtZQUN2QixNQUFNTCxTQUFTTSxPQUFPO1lBQ3RCLE1BQU1QLDhEQUFjLENBQUNTLEtBQUtDLEtBQUssQ0FBQ04sSUFBSU8sSUFBSTtZQUN4QyxPQUFPTixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUN4QkMsU0FBUTtZQUNaO1FBQ0YsT0FBTztZQUNMLCtCQUErQjtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUVQLEVBQUUsT0FBT0MsR0FBRztRQUNSRixRQUFRQyxHQUFHLENBQUNDO1FBQ1osT0FBT1osSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FDdkI7WUFBRUMsU0FBUztRQUFrQztJQUVyRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy9wYWdlcy9hcGkvY29udGFjdC5qcz9iY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9tb2RlbHMvY29udGFjdFwiO1xuY29uc3QgZGF0YWJhc2UgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvY29ubmVjdERCXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuICAgICAgICAgICAgYXdhaXQgQ29udGFjdC5jcmVhdGUoSlNPTi5wYXJzZShyZXEuYm9keSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvdGhlciByZXEgdGhhbiBwb3N0XCIpXG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihcbiAgICAgICAgICAgIHsgbWVzc2FnZTogXCJTZXJ2ZXIgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4hXCIgfSxcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJkYXRhYmFzZSIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29ubmVjdCIsImNyZWF0ZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

/***/ }),

/***/ "(api)/./src/utils/connectDB.js":
/*!********************************!*\
  !*** ./src/utils/connectDB.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    if (!process.env.MONGODB_URL) {\n        console.error(\"❌ MONGODB_URL is not defined in environment variables\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {\n        console.log(\"✅ Using existing database connection\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 5000,\n            socketTimeoutMS: 45000\n        });\n        console.log(\"✅ MongoDB Connected\");\n    } catch (error) {\n        console.error(\"❌ MongoDB connection error:\", error);\n        // Exit process with failure\n        process.exit(1);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxVQUFVLFVBQVk7SUFDakMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtRQUM1QkMsUUFBUUMsS0FBSyxDQUFDO1FBQ2Q7SUFDRixDQUFDO0lBRUQsSUFBSU4sdUVBQThCLElBQUksR0FBRztRQUN2Q0ssUUFBUUksR0FBRyxDQUFDO1FBQ1o7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1ULHVEQUFnQixDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q00saUJBQWlCLElBQUk7WUFDckJDLG9CQUFvQixJQUFJO1lBQ3hCQywwQkFBMEI7WUFDMUJDLGlCQUFpQjtRQUNuQjtRQUNBUixRQUFRSSxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9ILE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsNEJBQTRCO1FBQzVCSixRQUFRWSxJQUFJLENBQUM7SUFDZjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy91dGlscy9jb25uZWN0REIuanM/ZWE4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBNT05HT0RCX1VSTCBpcyBub3QgZGVmaW5lZCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgY29uc29sZS5sb2coXCLinIUgVXNpbmcgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvblwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogNTAwMCwgLy8gVGltZW91dCBhZnRlciA1cyBpbnN0ZWFkIG9mIDMwc1xuICAgICAgc29ja2V0VGltZW91dE1TOiA0NTAwMCwgLy8gQ2xvc2Ugc29ja2V0cyBhZnRlciA0NSBzZWNvbmRzIG9mIGluYWN0aXZpdHlcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIuKchSBNb25nb0RCIENvbm5lY3RlZFwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIE1vbmdvREIgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIC8vIEV4aXQgcHJvY2VzcyB3aXRoIGZhaWx1cmVcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbn07XG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJjb25zb2xlIiwiZXJyb3IiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImxvZyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/utils/connectDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/contact.js"));
module.exports = __webpack_exports__;

})();