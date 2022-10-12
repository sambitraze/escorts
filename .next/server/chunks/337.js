"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 9337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Admin)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(3841);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Dropdowns/UserDropdown.js




const UserDropdown = ()=>{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default().useState(false);
    const btnDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const popoverDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const openDropdownPopover = ()=>{
        (0,core_.createPopper)(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "text-blueGray-500 block",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "items-center flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "...",
                            className: "w-full rounded-full align-middle border-none shadow-lg",
                            src: "/img/team-1-800x800.jpg"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Another action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Something else here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>{
                            e.preventDefault();
                            router_default().push('/');
                        },
                        children: "log Out"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Dropdowns_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: ./components/Navbars/AdminNavbar.js




function Navbar() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-white text-sm uppercase hidden lg:inline-block font-semibold",
                    href: "#",
                    onClick: (e)=>e.preventDefault()
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Dropdowns/NotificationDropdown.js



const NotificationDropdown = ()=>{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default().useState(false);
    const btnDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const popoverDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const openDropdownPopover = ()=>{
        (0,core_.createPopper)(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "text-blueGray-500 block py-1 px-3",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-bell"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Another action"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Something else here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-0 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault()
                        ,
                        children: "Seprated link"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Dropdowns_NotificationDropdown = (NotificationDropdown);

;// CONCATENATED MODULE: ./components/Sidebar/Sidebar.js







function Sidebar() {
    const [collapseShow, setCollapseShow] = external_react_default().useState("hidden");
    var [collapse1, setCollapse1] = external_react_default().useState(false);
    var [collapse2, setCollapse2] = external_react_default().useState(false);
    var [collapse3, setCollapse3] = external_react_default().useState(false);
    var [collapse4, setCollapse4] = external_react_default().useState(false);
    var [collapse5, setCollapse5] = external_react_default().useState(false);
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-700 flex flex-wrap items-center justify-between relative md:w-72 z-10 py-4 px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                        type: "button",
                        onClick: ()=>setCollapseShow("bg-blueGray-700 m-2 py-3 px-6")
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/admin/dashboard",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                            children: "ESwRS-BMU"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "md:hidden items-center flex flex-wrap list-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "inline-block relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_NotificationDropdown, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "inline-block relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdowns_UserDropdown, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-6/12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "",
                                                    className: "md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                                                    children: "ESwRS-BMU"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-6/12 flex justify-end",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                                                onClick: ()=>setCollapseShow("hidden")
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-times"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "md:flex-col md:min-w-full flex flex-col list-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/dashboard",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-home mr-2 text-sm " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Dashboard"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("#") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("equipment_configuration") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Equipment Configuration"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/user_configuration",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "/admin/user_configuration",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/user_configuration") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-user mr-2 text-sm opacity-75"
                                                    }),
                                                    " ",
                                                    "User Configuration"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/route_configuration",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/route_configuration") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-road mr-2 text-sm " + (router.pathname.indexOf("/admin/route_configuration") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Route Configuration"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/rake_configuration",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/rake_configuration") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/rake_configuration") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Rake Configuration"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/live_monitoring",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/live_monitoring") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/live_monitoring") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Live Monitoring"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/emergency_live_calls",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/emergency_live_calls") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/emergency_live_calls") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Emergency Live Calls"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/notification",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/notification") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/notification") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    " ",
                                                    "Notification & Alerts"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/station",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/station") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/station") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    "Stations"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/coaches",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/coaches") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/coaches") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    "Coaches"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/admin/train",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block " + (router.pathname.indexOf("/admin/train") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-white hover:text-blueGray-300"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/train") !== -1 ? "opacity-75" : "text-blueGray-300")
                                                    }),
                                                    "Trains"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "items-center",
                                        onClick: react_.signOut,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "text-s py-3 font-bold block text-white hover:text-blueGray-300",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-table mr-2 text-sm text-blueGray-300"
                                                    }),
                                                    " ",
                                                    "Logout"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/Cards/CardStats.js



function CardStats_CardStats({ statSubtitle , statTitle , statArrow , statPercent , statPercentColor , statDescripiron , statIconName , statIconColor ,  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-auto p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full pr-4 max-w-full flex-grow flex-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-blueGray-400 uppercase font-bold text-xs",
                                        children: statSubtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-semibold text-xl text-blueGray-700",
                                        children: statTitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-auto pl-4 flex-initial",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " + statIconColor,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: statIconName
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm text-blueGray-400 mt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: statPercentColor + " mr-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: statArrow === "up" ? "fas fa-arrow-up" : statArrow === "down" ? "fas fa-arrow-down" : ""
                                    }),
                                    " ",
                                    statPercent,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "whitespace-nowrap",
                                children: statDescripiron
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
CardStats_CardStats.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500"
};
CardStats_CardStats.propTypes = {
    statSubtitle: (external_prop_types_default()).string,
    statTitle: (external_prop_types_default()).string,
    statArrow: external_prop_types_default().oneOf([
        "up",
        "down"
    ]),
    statPercent: (external_prop_types_default()).string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: (external_prop_types_default()).string,
    statDescripiron: (external_prop_types_default()).string,
    statIconName: (external_prop_types_default()).string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/Headers/HeaderStats.js


// components

function HeaderStats() {
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "relative bg-blueGray-800 md:pt-32 pb-32 pt-12",
            children: /*#__PURE__*/ _jsx("div", {
                className: "px-4 md:px-10 mx-auto w-full",
                children: /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ _jsx(CardStats, {
                                    statSubtitle: "TRAFFIC",
                                    statTitle: "350,897",
                                    statArrow: "up",
                                    statPercent: "3.48",
                                    statPercentColor: "text-emerald-500",
                                    statDescripiron: "Since last month",
                                    statIconName: "far fa-chart-bar",
                                    statIconColor: "bg-red-500"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ _jsx(CardStats, {
                                    statSubtitle: "NEW USERS",
                                    statTitle: "2,356",
                                    statArrow: "down",
                                    statPercent: "3.48",
                                    statPercentColor: "text-red-500",
                                    statDescripiron: "Since last week",
                                    statIconName: "fas fa-chart-pie",
                                    statIconColor: "bg-orange-500"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ _jsx(CardStats, {
                                    statSubtitle: "SALES",
                                    statTitle: "924",
                                    statArrow: "down",
                                    statPercent: "1.10",
                                    statPercentColor: "text-orange-500",
                                    statDescripiron: "Since yesterday",
                                    statIconName: "fas fa-users",
                                    statIconColor: "bg-pink-500"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "w-full lg:w-6/12 xl:w-3/12 px-4",
                                children: /*#__PURE__*/ _jsx(CardStats, {
                                    statSubtitle: "PERFORMANCE",
                                    statTitle: "49,65%",
                                    statArrow: "up",
                                    statPercent: "12",
                                    statPercentColor: "text-emerald-500",
                                    statDescripiron: "Since last month",
                                    statIconName: "fas fa-percent",
                                    statIconColor: "bg-lightBlue-500"
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Footers/FooterAdmin.js


function FooterAdmin() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "block py-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "mb-4 border-b-1 border-blueGray-200"
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
                                        href: "https://www.creative-tim.com?ref=nnjs-footer-admin",
                                        className: "text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1",
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

;// CONCATENATED MODULE: ./layouts/Admin.js


// components




function Admin({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative md:ml-64 bg-blueGray-100",
                style: {
                    marginTop: "150px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-4 md:px-10 mx-auto w-full -m-24",
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(FooterAdmin, {})
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;