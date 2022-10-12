"use strict";
(() => {
var exports = {};
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 8578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tables)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Cards/UserTable.js




function UserTable({ color  }) {
    const { 0: users , 1: setUsers  } = (0,external_react_.useState)([]);
    const fetchData = ()=>{
        fetch("http://143.110.249.208:3000/api/user/all").then((response)=>response.json()
        ).then((data)=>setUsers(data)
        );
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                marginTop: "3rem",
                padding: "1rem"
            },
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blueGray-700 text-white"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 border-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative w-full px-4 max-w-full flex-grow flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white"),
                                    children: "Site Users"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/admin/add_user",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",
                                            children: "+ Add User"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "items-center w-full bg-transparent border-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Display Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Gender"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Designation"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Options"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: users.length > 0 ? users.map((user)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                    children: user.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: user.email
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: user.phone
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: user.blocked ? "true" : "false"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: user.gender
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: user.designation
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: `/admin/edit_user?Email=${user.email}&id=${user._id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Edit"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ) : null
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
UserTable.defaultProps = {
    color: "light"
};
UserTable.propTypes = {
    color: external_prop_types_default().oneOf([
        "light",
        "dark"
    ])
};

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(9337);
;// CONCATENATED MODULE: ./pages/admin/user_configuration.js






// components
// layout for page

function Tables() {
    const router = (0,router_.useRouter)();
    const { data: session  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (!session) {
            router.push("/");
        }
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-wrap mt-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full mb-12 px-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(UserTable, {})
            })
        })
    }));
};
Tables.layout = Admin/* default */.Z;


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,337], () => (__webpack_exec__(8578)));
module.exports = __webpack_exports__;

})();