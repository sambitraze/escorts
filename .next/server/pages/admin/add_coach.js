"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 3332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ add_coach)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Cards/CoachFormCard.js


function CardSettings() {
    const { 0: number , 1: setNumber  } = (0,external_react_.useState)(0);
    const { 0: type , 1: setType  } = (0,external_react_.useState)("");
    const submitHandler = (e)=>{
        e.preventDefault();
        fetch("http://143.110.249.208:3000/api/coach", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                coachNumber: number,
                coachtype: type
            })
        }).then((data)=>{
            if (data.status === 200) {
                window.confirm("Successfully!");
            } else {
                window.confirm("Failed");
            }
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t bg-white mb-0 px-6 py-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center flex justify-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "text-blueGray-700 text-xl font-bold",
                            children: " Coaches "
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-auto px-4 lg:px-10 py-10 pt-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: submitHandler,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase",
                                children: "Add A Coach"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Coach Number"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "Number",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "",
                                                    onChange: (e)=>setNumber(e.target.value)
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Coach Type"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                    class: "form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white :border-blue-600 focus:outline-none",
                                                    "aria-label": "Default select example",
                                                    onChange: (e)=>setType(e.target.value)
                                                    ,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            selected: true,
                                                            value: "#",
                                                            children: "Select Type"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "type1",
                                                            children: "Type-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "type2",
                                                            children: "Type-2"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",
                                type: "submit",
                                children: "Add Train"
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(9337);
;// CONCATENATED MODULE: ./pages/admin/add_coach.js




const add_user = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(CardSettings, {})
    }));
};
/* harmony default export */ const add_coach = (add_user);
add_user.layout = Admin/* default */.Z;


/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,337], () => (__webpack_exec__(3332)));
module.exports = __webpack_exports__;

})();