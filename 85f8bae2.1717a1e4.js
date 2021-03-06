(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,f=d["".concat(i,".").concat(s)]||d[s]||b[s]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(134)),i={id:"config-app",title:"App Configuration",sidebar_label:"App"},c={unversionedId:"config-app",id:"config-app",isDocsHomePage:!1,title:"App Configuration",description:"Section",source:"@site/docs/config-app.md",slug:"/config-app",permalink:"/buildbuddy/docs/config-app",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/config-app.md",version:"current",sidebar_label:"App",sidebar:"someSidebar",previous:{title:"Sample Configuration Files",permalink:"/buildbuddy/docs/config-samples"},next:{title:"Database Configuration",permalink:"/buildbuddy/docs/config-database"}},p=[{value:"Section",id:"section",children:[]},{value:"Options",id:"options",children:[]},{value:"Example section",id:"example-section",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"section"},"Section"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"app:")," The app section contains app-level options. ",Object(a.b)("strong",{parentName:"p"},"Required")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Required")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"build_buddy_url")," Configures the external URL where your BuildBuddy instance can be found. (Does not actually change the server address or port, see ",Object(a.b)("a",{parentName:"li",href:"/buildbuddy/docs/config-flags"},"flags docs")," for information on how to configure ports)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Optional")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"events_api_url")," Overrides the default build event protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"cache_api_url")," Overrides the default remote cache protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"remote_execution_api_url")," Overrides the default remote execution protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"default_to_dense_mode")," Enables Dense UI mode by default."))),Object(a.b)("h2",{id:"example-section"},"Example section"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://buildbuddy.acme.corp"\n')))}u.isMDXComponent=!0}}]);