"use strict";
(() => {
var exports = {};
exports.id = 913;
exports.ids = [913];
exports.modules = {

/***/ 2815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ live_monitoring)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(9337);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Cards/LiveMonitoringCard.js

const LiveMonitoringCard = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "live_monitoring",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rake_summary",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Rake Summary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "Rake Group",
                                        children: "Rake Group"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: "Groups ...."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "Rake Links",
                                        children: "Rake Links"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: "Search ....."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: "Search Rake"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "rake_details",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rake_details_header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: " Rake Details"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rake_color_scheme",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "rake_critial rake_dot",
                                                        children: "."
                                                    }),
                                                    " Critial"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "rake_normal rake_dot",
                                                        children: "."
                                                    }),
                                                    " Normal"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "rake_OEM rake_dot",
                                                        children: "."
                                                    }),
                                                    " OEM"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "rake_conflicts rake_dot",
                                                        children: "."
                                                    }),
                                                    " Conflicts"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rake_grid",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rake_detail_grid",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    children: [
                                                        "AUGUST KRANTI ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "live_green",
                                                            children: "(LIVE)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "grid-container-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Mon"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Tue"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Wed"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Thr"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Fri"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Sat"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Sun"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rake_color_code",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_critial",
                                                        children: "12"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_normal",
                                                        children: "0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_OEM",
                                                        children: "6"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_conflicts",
                                                        children: "0"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rake_detail_grid",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                    children: [
                                                        "AUGUST KRANTI ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "live_green",
                                                            children: "(LIVE)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "grid-container-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Mon"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Tue"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Wed"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Thr"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Fri"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Sat"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "grid-item-1 days",
                                                                        children: "Sun"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rake_color_code",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_critial",
                                                        children: "12"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_normal",
                                                        children: "0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_OEM",
                                                        children: "6"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rake_conflicts",
                                                        children: "0"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "coach_details",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Coach Details"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Coaches"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid-container-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1 coaches_red",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1 coaches_red",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1 coaches_red",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1 coaches_red",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1 coaches_red",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "grid-item-1",
                                                        children: [
                                                            "150024 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "coaches_span",
                                                                children: "4"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Equipment"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid-container-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "PIS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "ETU"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "FIRE SYSTEM"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "CCTV"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "RMPU"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "TASI"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "WSPD"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid-item-1 equip_grey",
                                                        children: "OBCMS"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Cards_LiveMonitoringCard = (LiveMonitoringCard);

;// CONCATENATED MODULE: ./pages/admin/live_monitoring.js







const liveMonitoring = ()=>{
    const router = (0,router_.UseRouter)();
    const { data: session  } = (0,react_.UseSession)();
    (0,external_react_.UseEffect)(()=>{
        if (!session) {
            router.push("/");
        }
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            marginTop: "100px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Cards_LiveMonitoringCard, {})
    }));
};
/* harmony default export */ const live_monitoring = (liveMonitoring);
liveMonitoring.layout = Admin/* default */.Z;


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,337], () => (__webpack_exec__(2815)));
module.exports = __webpack_exports__;

})();