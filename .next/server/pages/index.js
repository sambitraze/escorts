"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Navbars/AuthNavbar.js



// components
function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = external_react_default().useState(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
                                    href: "#pablo",
                                    children: "ESwRS-BMU"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "text-white fas fa-bars"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden"),
                        id: "example-navbar-warning"
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Footers/FooterSmall.js


function FooterSmall(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: (props.absolute ? "absolute w-full bottom-0 bg-blueGray-800" : "relative") + " pb-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "mb-6 border-b-1 border-blueGray-600"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap items-center md:justify-between justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:w-4/12 px-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left",
                                children: [
                                    "Copyright \xa9 ",
                                    new Date().getFullYear(),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/auth/login",
                                        className: "text-white hover:text-blueGray-300 text-sm font-semibold py-1",
                                        children: "ESwRS-BMU"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./layouts/Auth.js


// components


function Auth({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                transparent: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "relative w-full h-full py-40 min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full",
                            style: {
                                backgroundImage: "url('/img/trainss.jpg')"
                            }
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterSmall, {
                            absolute: true
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js







// layout for page


function Index() {
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: errMsg , 1: setErrMsg  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const { error  } = router.query;
    const { data: session  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setErrMsg("Invaild Credentials");
        }
        if (session) {
            router.push("/admin/dashboard");
        }
    }, [
        error,
        session
    ]);
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(username, password);
        (0,react_.signIn)("credentials", {
            username,
            password
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mx-auto px-4 h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex content-center items-center justify-center h-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full lg:w-4/12 px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rounded-t mb-0 px-6 py-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center mb-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "text-blueGray-500 text-5xl font-bold",
                                            children: "Sign In"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex-auto px-4 lg:px-10 py-10 pt-0",
                                    children: [
                                        errMsg && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "ErrorText text-center",
                                            children: errMsg
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            autoComplete: "off",
                                            onSubmit: submitHandler,
                                            method: "post",
                                            action: "/api/auth/callback/credentials",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "relative w-full mb-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                            htmlFor: "grid-password",
                                                            children: "UserName"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            onChange: (e)=>setUsername(e.target.value)
                                                            ,
                                                            type: "text",
                                                            className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                            placeholder: "Username"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "relative w-full mb-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                            htmlFor: "grid-password",
                                                            children: "Password"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            onChange: (e)=>setPassword(e.target.value)
                                                            ,
                                                            type: "password",
                                                            className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                            placeholder: "Password"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-center mt-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                                                        type: "submit",
                                                        children: "Sign In"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap mt-6 relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-1/2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            router_default().push("/admin/dashboard");
                                        },
                                        className: "text-blueGray-200"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-1/2 text-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/auth/register",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            className: "text-blueGray-200"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
Index.layout = Auth;


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(7648)));
module.exports = __webpack_exports__;

})();