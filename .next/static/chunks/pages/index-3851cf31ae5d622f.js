(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7648)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(i){s=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,o=(l=r(7294))&&l.__esModule?l:{default:l},s=r(6273),i=r(387),u=r(7190);var c={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),l=o.default.useMemo((function(){var t=a(s.resolveHref(n,e.href,!0),2),r=t[0],l=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):l||r}}),[n,e.href,e.as]),d=l.href,p=l.as,h=e.children,m=e.replace,b=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,g=a(u.useIntersection({rootMargin:"200px"}),2),w=g[0],j=g[1],N=o.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);o.default.useEffect((function(){var e=j&&r&&s.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,a=c[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,j,y,r,n]);var S={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,l,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](r,n,{shallow:l,locale:i,scroll:o}))}(e,n,d,p,m,b,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&s.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);S.href=k||s.addBasePath(s.addLocale(p,E,n&&n.defaultLocale))}return o.default.cloneElement(t,S)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(i){s=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,u=l.useRef(),c=a(l.useState(!1),2),f=c[0],d=c[1],p=a(l.useState(t?t.current:null),2),h=p[0],m=p[1],b=l.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,l=n.observer,o=n.elements;return o.set(e,t),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return l.useEffect((function(){if(!s&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),l.useEffect((function(){t&&m(t.current)}),[t]),[b,f]};var l=r(7294),o=r(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map},7648:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),a=r(7294),l=r(1664),o=r(1163),s=r(3299);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(i){s=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=u(a.useState(!1),2),r=t[0],o=t[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",children:(0,n.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[(0,n.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[(0,n.jsx)(l.default,{href:"/",children:(0,n.jsx)("a",{className:"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",href:"#pablo",children:"ESwRS-BMU"})}),(0,n.jsx)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return o(!r)},children:(0,n.jsx)("i",{className:"text-white fas fa-bars"})})]}),(0,n.jsx)("div",{className:"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"+(r?" block rounded shadow-lg":" hidden"),id:"example-navbar-warning"})]})})})}function f(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:(e.absolute?"absolute w-full bottom-0 bg-blueGray-800":"relative")+" pb-6",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsx)("hr",{className:"mb-6 border-b-1 border-blueGray-600"}),(0,n.jsx)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:(0,n.jsx)("div",{className:"w-full md:w-4/12 px-4",children:(0,n.jsxs)("div",{className:"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left",children:["Copyright \xa9 ",(new Date).getFullYear()," ",(0,n.jsx)("a",{href:"/auth/login",className:"text-white hover:text-blueGray-300 text-sm font-semibold py-1",children:"ESwRS-BMU"})]})})})]})})})}function d(){var e=(0,a.useState)(""),t=e[0],r=e[1],i=(0,a.useState)(""),u=i[0],c=i[1],f=(0,a.useState)(""),d=f[0],p=f[1],h=(0,o.useRouter)(),m=h.query.error,b=(0,s.useSession)().data;(0,a.useEffect)((function(){m&&p("Invaild Credentials"),b&&h.push("/admin/dashboard")}),[m,b]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container mx-auto px-4 h-full",children:(0,n.jsx)("div",{className:"flex content-center items-center justify-center h-full",children:(0,n.jsxs)("div",{className:"w-full lg:w-4/12 px-4",children:[(0,n.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0",children:[(0,n.jsx)("div",{className:"rounded-t mb-0 px-6 py-6",children:(0,n.jsx)("div",{className:"text-center mb-3",children:(0,n.jsx)("h6",{className:"text-blueGray-500 text-5xl font-bold",children:"Sign In"})})}),(0,n.jsxs)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-0",children:[d&&(0,n.jsx)("div",{className:"ErrorText text-center",children:d}),(0,n.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),console.log(t,u),(0,s.signIn)("credentials",{username:t,password:u})},method:"post",action:"/api/auth/callback/credentials",children:[(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"UserName"}),(0,n.jsx)("input",{onChange:function(e){return r(e.target.value)},type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Username"})]}),(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Password"}),(0,n.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"password",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Password"})]}),(0,n.jsx)("div",{className:"text-center mt-6",children:(0,n.jsx)("button",{className:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",type:"submit",children:"Sign In"})})]})]})]}),(0,n.jsxs)("div",{className:"flex flex-wrap mt-6 relative",children:[(0,n.jsx)("div",{className:"w-1/2",children:(0,n.jsx)("a",{href:"#pablo",onClick:function(e){e.preventDefault(),o.default.push("/admin/dashboard")},className:"text-blueGray-200"})}),(0,n.jsx)("div",{className:"w-1/2 text-right",children:(0,n.jsx)(l.default,{href:"/auth/register",children:(0,n.jsx)("a",{href:"#pablo",className:"text-blueGray-200"})})})]})]})})})})}d.layout=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{transparent:!0}),(0,n.jsx)("main",{children:(0,n.jsxs)("section",{className:"relative w-full h-full py-40 min-h-screen",children:[(0,n.jsx)("div",{className:"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full",style:{backgroundImage:"url('/img/trainss.jpg')"}}),t,(0,n.jsx)(f,{absolute:!0})]})})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);