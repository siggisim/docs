(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var i=a(3),n=a(7),o=(a(0),a(134)),r={id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},l={unversionedId:"guide-metadata",id:"guide-metadata",isDocsHomePage:!1,title:"Build Metadata Guide",description:"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build.",source:"@site/docs/guide-metadata.md",slug:"/guide-metadata",permalink:"/buildbuddy/docs/guide-metadata",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/guide-metadata.md",version:"current",sidebar_label:"Build Metadata Guide",sidebar:"someSidebar",previous:{title:"Authentication Guide",permalink:"/buildbuddy/docs/guide-auth"},next:{title:"Remote Build Execution",permalink:"/buildbuddy/docs/remote-build-execution"}},d=[{value:"Repository URL",id:"repository-url",children:[{value:"Build metadata",id:"build-metadata",children:[]},{value:"Workspace info",id:"workspace-info",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]},{value:"Commit SHA",id:"commit-sha",children:[{value:"Build metadata",id:"build-metadata-1",children:[]},{value:"Workspace info",id:"workspace-info-1",children:[]},{value:"Environment variables",id:"environment-variables-1",children:[]}]},{value:"Role",id:"role",children:[]},{value:"Test groups",id:"test-groups",children:[]},{value:"Visibility",id:"visibility",children:[]},{value:"User",id:"user",children:[{value:"Build metadata",id:"build-metadata-2",children:[]},{value:"Workspace info",id:"workspace-info-2",children:[]}]},{value:"Host",id:"host",children:[{value:"Build metadata",id:"build-metadata-3",children:[]},{value:"Workspace info",id:"workspace-info-3",children:[]},{value:"Custom Links",id:"custom-links",children:[]}]},{value:"Environment variable redacting",id:"environment-variable-redacting",children:[{value:"Examples",id:"examples",children:[]}]}],b={toc:d};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build."),Object(o.b)("h2",{id:"repository-url"},"Repository URL"),Object(o.b)("p",null,"BuildBuddy allows you to group invocations by the repository on which they were run. In order to perform this grouping, BuildBuddy needs the repository's git url. There are three ways of providing this information to BuildBuddy:"),Object(o.b)("h3",{id:"build-metadata"},"Build metadata"),Object(o.b)("p",null,"The first method is simple - just provide the repo URL with Bazel's build_metadata flag with the key ",Object(o.b)("inlineCode",{parentName:"p"},"REPO_URL"),". You can do this by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=REPO_URL=https://github.com/buildbuddy-io/buildbuddy.git\n")),Object(o.b)("h3",{id:"workspace-info"},"Workspace info"),Object(o.b)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),Object(o.b)("p",null,"First, you'll need to point your ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),Object(o.b)("p",null,"Then you'll need to add a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, commit sha, and other build metadata automatically for every invocation."),Object(o.b)("h3",{id:"environment-variables"},"Environment variables"),Object(o.b)("p",null,"BuildBuddy will automatically pull your repo URL from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CIRCLE_REPOSITORY_URL"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TRAVIS_REPO_SLUG"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CI_REPOSITORY_URL"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"BUILDKITE_REPO"),"."),Object(o.b)("h2",{id:"commit-sha"},"Commit SHA"),Object(o.b)("h3",{id:"build-metadata-1"},"Build metadata"),Object(o.b)("p",null,"You can provide the current commit SHA with Bazel's build_metadata flag with the key ",Object(o.b)("inlineCode",{parentName:"p"},"COMMIT_SHA"),". You can do this by adding the flag to your bazel invocations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"--build_metadata=COMMIT_SHA=$(git rev-parse HEAD)\n")),Object(o.b)("p",null,"Note: you cannot add this particular flag to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc")," file because it does not support parameter substitution. If you're looking for a solution that supports your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc")," file, try the Workspace info method below."),Object(o.b)("h3",{id:"workspace-info-1"},"Workspace info"),Object(o.b)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),Object(o.b)("p",null,"First, you'll need to point your ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),Object(o.b)("p",null,"Then you'll need to add a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, commit sha, and other build metadata automatically for every invocation."),Object(o.b)("h3",{id:"environment-variables-1"},"Environment variables"),Object(o.b)("p",null,"BuildBuddy will automatically pull your commit SHA from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CIRCLE_SHA1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TRAVIS_COMMIT"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_COMMIT"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CI_COMMIT_SHA"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"BUILDKITE_COMMIT"),"."),Object(o.b)("h2",{id:"role"},"Role"),Object(o.b)("p",null,"The role metadata field allows you to specify whether this invocation was done on behalf of a CI (continuous integration) system. If set, this enables features like Github commit status reporting (if a Github account is linked)."),Object(o.b)("p",null,"For CI builds, you can add the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc")," and run your CI builds with the ",Object(o.b)("inlineCode",{parentName:"p"},"--config=ci")," flag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build:ci --build_metadata=ROLE=CI\n")),Object(o.b)("p",null,"This role will automatically be populated if the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"CI")," is set, which it is in most CI systems like Github Actions, CircleCI, Travis, Gitlab CI, BuildKite, and others."),Object(o.b)("h2",{id:"test-groups"},"Test groups"),Object(o.b)("p",null,"If using Github commit status reporting, you can use the test groups metadata field to specify how tests are grouped in your Github commit statuses. Test groups are specified as a comma separated list of test path prefixes that should be grouped together."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=TEST_GROUPS=//foo/bar,//foo/baz\n")),Object(o.b)("h2",{id:"visibility"},"Visibility"),Object(o.b)("p",null,"The visibility metadata field determines who is allowed to view your build results. By default, unauthenticated builds are publicly visible to anyone with a link, while authenticated builds are only available to members of your organization."),Object(o.b)("p",null,"You can override these default settings and make authenticated builds visible to anyone with a link by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=VISIBILITY=PUBLIC\n")),Object(o.b)("h2",{id:"user"},"User"),Object(o.b)("p",null,"By default a build's user is determined by the system on which Bazel is run."),Object(o.b)("p",null,"You can override this using build metadata or workspace info."),Object(o.b)("h3",{id:"build-metadata-2"},"Build metadata"),Object(o.b)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",Object(o.b)("inlineCode",{parentName:"p"},"USER"),". You can do this by adding the flag to your bazel invocations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"--build_metadata=USER=yourname\n")),Object(o.b)("h3",{id:"workspace-info-2"},"Workspace info"),Object(o.b)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),Object(o.b)("p",null,"First, you'll need to point your ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),Object(o.b)("p",null,"Then you'll need to add a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",Object(o.b)("inlineCode",{parentName:"p"},"USER yourname"),"."),Object(o.b)("h2",{id:"host"},"Host"),Object(o.b)("p",null,"By default a build's host is determined by the system on which Bazel is run."),Object(o.b)("p",null,"You can override this using build metadata or workspace info."),Object(o.b)("h3",{id:"build-metadata-3"},"Build metadata"),Object(o.b)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",Object(o.b)("inlineCode",{parentName:"p"},"HOST"),". You can do this by adding the flag to your bazel invocations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"--build_metadata=HOST=yourhost\n")),Object(o.b)("h3",{id:"workspace-info-3"},"Workspace info"),Object(o.b)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),Object(o.b)("p",null,"First, you'll need to point your ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),Object(o.b)("p",null,"Then you'll need to add a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",Object(o.b)("inlineCode",{parentName:"p"},"HOST yourhost"),"."),Object(o.b)("h3",{id:"custom-links"},"Custom Links"),Object(o.b)("p",null,"You can add custom links to the BuildBuddy overview page using the ",Object(o.b)("inlineCode",{parentName:"p"},"BUILDBUDDY_LINKS")," build metadata flag. These links must be comma separated, and in the form ",Object(o.b)("a",{parentName:"p",href:"https://linkurl.com"},"link text"),". Urls must begin with either ",Object(o.b)("inlineCode",{parentName:"p"},"http://")," or ",Object(o.b)("inlineCode",{parentName:"p"},"https://"),"."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'--build_metadata=BUILDBUDDY_LINKS="[Search Github](https://github.com/search),[GCP Dashboard](https://console.cloud.google.com/home/dashboard)"\n')),Object(o.b)("h2",{id:"environment-variable-redacting"},"Environment variable redacting"),Object(o.b)("p",null,"By default, all environment variables are redacted by BuildBuddy except for ",Object(o.b)("inlineCode",{parentName:"p"},"USER"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_ACTOR"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GITHUB_RUN_ID")," which are displayed in the BuildBuddy UI."),Object(o.b)("p",null,"Redacted environment variables are displayed in the BuildBuddy UI as ",Object(o.b)("inlineCode",{parentName:"p"},"<REDACTED>"),"."),Object(o.b)("p",null,"You can optionally allow other environment variables to be displayed using the ",Object(o.b)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata flag."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata param accepts a comma separated list of allowed environment variables and supports trailing wildcards."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Don't redact the ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH\n")),Object(o.b)("p",null,"Don't redact the ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," environment or any environment variable beginning with ",Object(o.b)("inlineCode",{parentName:"p"},"BAZEL_")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH,BAZEL_*\n")),Object(o.b)("p",null,"Don't redact any environment variables."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=*\n")))}u.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),c=u(a),s=i,m=c["".concat(r,".").concat(s)]||c[s]||p[s]||o;return a?n.a.createElement(m,l(l({ref:t},b),{},{components:a})):n.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var b=2;b<o;b++)r[b]=a[b];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);