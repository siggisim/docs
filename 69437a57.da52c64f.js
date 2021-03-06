(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(134)),a={id:"config-integrations",title:"Integration Configuration",sidebar_label:"Integrations"},c={unversionedId:"config-integrations",id:"config-integrations",isDocsHomePage:!1,title:"Integration Configuration",description:"Section",source:"@site/docs/config-integrations.md",slug:"/config-integrations",permalink:"/docs/docs/config-integrations",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/config-integrations.md",version:"current",sidebar_label:"Integrations",sidebar:"someSidebar",previous:{title:"Auth Configuration",permalink:"/docs/docs/config-auth"},next:{title:"Organization Configuration",permalink:"/docs/docs/config-org"}},l=[{value:"Section",id:"section",children:[]},{value:"Options",id:"options",children:[]},{value:"Getting a webhook url",id:"getting-a-webhook-url",children:[]},{value:"Example section",id:"example-section",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"section"},"Section"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"integrations:")," A section configuring optional external services BuildBuddy can integrate with, like Slack. ",Object(i.b)("strong",{parentName:"p"},"Optional")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Optional")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"slack:")," A section configuring Slack integration."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"webhook_url")," A webhook url to post build update messages to.")))),Object(i.b)("h2",{id:"getting-a-webhook-url"},"Getting a webhook url"),Object(i.b)("p",null,"For more instructions on how to get a Slack webhook url, see the ",Object(i.b)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks#getting_started"},"Slack webhooks documentation"),"."),Object(i.b)("h2",{id:"example-section"},"Example section"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'integrations:\n  slack:\n    webhook_url: "https://hooks.slack.com/services/AAAAAAAAA/BBBBBBBBB/1D36mNyB5nJFCBiFlIOUsKzkW"\n')))}u.isMDXComponent=!0}}]);