(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{5837:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/edit_station",function(){return a(4725)}])},4725:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(5893),l=a(7294),s=a(1163);function r(){var e=(0,s.useRouter)().query.id,t=(0,l.useState)(""),a=t[0],r=t[1],i=(0,l.useState)(""),o=i[0],u=i[1],c=(0,l.useState)(""),d=c[0],x=c[1];(0,l.useEffect)((function(){fetch("http://143.110.249.208:3000/api/station/".concat(e)).then((function(e){return e.json()})).then((function(e){r(e.name),u(e.city),x(e.state)}))}),[]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0",children:[(0,n.jsx)("div",{className:"rounded-t bg-white mb-0 px-6 py-6",children:(0,n.jsx)("div",{className:"text-center flex justify-between",children:(0,n.jsx)("h6",{className:"text-blueGray-700 text-xl font-bold",children:" Station "})})}),(0,n.jsx)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-0",children:(0,n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("http://143.110.249.208:3000/api/station/update/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,city:o,state:d})}).then((function(e){200===e.status?window.confirm("Successfully!"):window.confirm("Failed")}))},children:[(0,n.jsx)("h6",{className:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase",children:"Add Station"}),(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsx)("div",{className:"w-full lg:w-6/12 px-4",children:(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Station Name"}),(0,n.jsx)("input",{type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",value:a,onChange:function(e){return r(e.target.value)}})]})}),(0,n.jsx)("div",{className:"w-full lg:w-6/12 px-4",children:(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"City"}),(0,n.jsx)("input",{type:"Text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",value:o,onChange:function(e){return u(e.target.value)}})]})}),(0,n.jsx)("div",{className:"w-full lg:w-6/12 px-4",children:(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password",children:"State"}),(0,n.jsx)("input",{type:"text",className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",value:d,onChange:function(e){return x(e.target.value)}})]})})]}),(0,n.jsx)("button",{className:"bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",type:"submit",children:"Update Station"})]})})]})})}var i=a(9337),o=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(r,{})})},u=o;o.layout=i.Z}},function(e){e.O(0,[566,337,774,888,179],(function(){return t=5837,e(e.s=t);var t}));var t=e.O();_N_E=t}]);