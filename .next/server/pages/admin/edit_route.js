"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit_route)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Cards/RouteEditCard.js



function CardSettings() {
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    const { 0: number , 1: setNumber  } = (0,external_react_.useState)("");
    const { 0: name , 1: setName  } = (0,external_react_.useState)(0);
    const { 0: train , 1: setTrain  } = (0,external_react_.useState)("");
    const { 0: source , 1: setSource  } = (0,external_react_.useState)("");
    const { 0: destination , 1: setDestination  } = (0,external_react_.useState)("");
    const { 0: station , 1: setStation  } = (0,external_react_.useState)("");
    const fetchData = ()=>{
        fetch(`http://143.110.249.208:3000/api/route/${id}`).then((response)=>response.json()
        ).then((data)=>{
            setNumber(data.routeNumber);
            setName(data.routeName);
            setTrain(data.train);
            setSource(data.source);
            setDestination(data.destination);
            setStation(data.station);
        });
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    const submitHandler = (e)=>{
        e.preventDefault();
        fetch(`http://143.110.249.208:3000/api/route/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                routeNumber: parseInt(number),
                routeName: name,
                source: source,
                destination: destination,
                station: station
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
                            children: " Route "
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
                                children: "Add Route"
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
                                                    children: "Route Number"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "number",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: number,
                                                    onChange: (e)=>{
                                                        setNumber(e.target.value);
                                                    }
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
                                                    children: "Route Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "Text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: name,
                                                    onChange: (e)=>{
                                                        setName(e.target.value);
                                                    }
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
                                                    children: "Train"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: train,
                                                    onChange: (e)=>{
                                                        setTrain(e.target.value);
                                                    }
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
                                                    children: "Source"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: source,
                                                    onChange: (e)=>{
                                                        setSource(e.target.value);
                                                    }
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
                                                    children: "Destination"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: destination,
                                                    onChange: (e)=>{
                                                        setDestination(e.target.value);
                                                    }
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
                                                    children: "Stations"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    value: station,
                                                    onChange: (e)=>{
                                                        setStation(e.target.value);
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",
                                type: "submit",
                                children: "Edit Route"
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
;// CONCATENATED MODULE: ./pages/admin/edit_route.js




const add_user = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(CardSettings, {})
    }));
};
/* harmony default export */ const edit_route = (add_user);
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,337], () => (__webpack_exec__(6289)));
module.exports = __webpack_exports__;

})();