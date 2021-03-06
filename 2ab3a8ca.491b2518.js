(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,m=b["".concat(u,".").concat(p)]||b[p]||s[p]||o;return r?i.a.createElement(m,a(a({ref:t},l),{},{components:r})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var l=2;l<o;l++)u[l]=r[l];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),o=(r(0),r(134)),u={id:"remote-build-execution",title:"Remote Build Execution",sidebar_label:"Remote Build Execution"},a={unversionedId:"remote-build-execution",id:"remote-build-execution",isDocsHomePage:!1,title:"Remote Build Execution",description:"BuildBuddy provides a highly scalable remote build execution service. It's available both as a fully managed cloud service or on-prem.",source:"@site/docs/remote-build-execution.md",slug:"/remote-build-execution",permalink:"/buildbuddy/docs/remote-build-execution",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/remote-build-execution.md",version:"current",sidebar_label:"Remote Build Execution",sidebar:"someSidebar",previous:{title:"Build Metadata Guide",permalink:"/buildbuddy/docs/guide-metadata"},next:{title:"RBE Setup",permalink:"/buildbuddy/docs/rbe-setup"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Features",id:"features",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BuildBuddy provides a highly scalable remote build execution service. It's available both as a fully managed cloud service or on-prem."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"To get started with BuildBuddy Cloud Remote Build Execution, check out our ",Object(o.b)("a",{parentName:"p",href:"/buildbuddy/docs/rbe-setup"},"getting started docs"),"."),Object(o.b)("p",null,"If you're interested in BuildBuddy On-prem Remote Build Execution, ",Object(o.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/request-quote"},"request a quote"),"."),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("p",null,"Supported features include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Custom Docker image support"),Object(o.b)("li",{parentName:"ul"},"Three-tier artifact caching"),Object(o.b)("li",{parentName:"ul"},"Stateless, horizontally scalable architecture"),Object(o.b)("li",{parentName:"ul"},"Automatic executor scaling"),Object(o.b)("li",{parentName:"ul"},"mTLS authentication"),Object(o.b)("li",{parentName:"ul"},"Build without bytes")))}d.isMDXComponent=!0}}]);