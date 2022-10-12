"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    site: process.env.NEXTAUTH_URL,
    providers: [
        credentials_default()({
            name: "credentials",
            authorize: async (credentials)=>{
                try {
                    const user = await external_axios_default().post('http://143.110.249.208:3000/api/auth/login', {
                        password: credentials.password,
                        email: credentials.username
                    }, {
                        headers: {
                            accept: '*/*',
                            'Content-Type': 'application/json'
                        }
                    });
                    if (user) {
                        return {
                            status: 'success',
                            data: user
                        };
                    }
                } catch (e) {
                    const errorMessage = e;
                    // Redirecting to the login page with error message          in the URL
                    throw new Error(errorMessage + '&email=' + credentials.username + '&password=' + credentials.password);
                }
            }
        }), 
    ],
    callbacks: {
        jwt: ({ token , user  })=>{
            if (user) {
                token.accessToken = user.token;
            }
            return token;
        },
        session: ({ session , token  })=>{
            if (token) {
                session.accessToken = token.accessToken;
            }
            return session;
        }
    },
    secret: 'E4AA615993B61ACA9BD342FAE451D',
    jwt: {
        secret: "E4AA615993B61ACA9BD342FAE451D",
        encryption: true
    },
    pages: {
        signIn: "/",
        error: "/"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(497));
module.exports = __webpack_exports__;

})();