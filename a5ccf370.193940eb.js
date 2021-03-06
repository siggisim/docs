(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),i=(n(0),n(134)),l={id:"rbe-setup",title:"RBE Setup",sidebar_label:"Remote Build Execution Setup"},r={unversionedId:"rbe-setup",id:"rbe-setup",isDocsHomePage:!1,title:"RBE Setup",description:"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood.",source:"@site/docs/rbe-setup.md",slug:"/rbe-setup",permalink:"/buildbuddy/docs/rbe-setup",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/rbe-setup.md",version:"current",sidebar_label:"Remote Build Execution Setup",sidebar:"someSidebar",previous:{title:"Remote Build Execution",permalink:"/buildbuddy/docs/remote-build-execution"},next:{title:"RBE Platforms",permalink:"/buildbuddy/docs/rbe-platforms"}},c=[{value:"The basics",id:"the-basics",children:[]},{value:"Configuring your workspace",id:"configuring-your-workspace",children:[]},{value:"Platforms",id:"platforms",children:[]},{value:"Toolchains",id:"toolchains",children:[{value:"C toolchain",id:"c-toolchain",children:[]},{value:"Java toolchain",id:"java-toolchain",children:[]}]},{value:"Putting it all together",id:"putting-it-all-together",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Configuration options",id:"configuration-options",children:[{value:"--jobs",id:"--jobs",children:[]},{value:"--remote_timeout",id:"--remote_timeout",children:[]},{value:"--remote_download_minimal",id:"--remote_download_minimal",children:[]},{value:"--remote_instance_name",id:"--remote_instance_name",children:[]},{value:"--disk_cache",id:"--disk_cache",children:[]},{value:"--incompatible_strict_action_env",id:"--incompatible_strict_action_env",children:[]},{value:"--action_env",id:"--action_env",children:[]}]},{value:"--define",id:"--define",children:[]},{value:"--spawn_strategy",id:"--spawn_strategy",children:[]},{value:"--strategy",id:"--strategy",children:[]},{value:"--experimental_inmemory_dotd_files",id:"--experimental_inmemory_dotd_files",children:[]},{value:"--experimental_inmemory_jdeps_files",id:"--experimental_inmemory_jdeps_files",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Advanced configuration",id:"advanced-configuration",children:[]}],b={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Getting started with Remote Build Execution (RBE) is less daunting than it may seem. We've put together a guide that not only helps you get started with BuildBuddy RBE, but also helps you understand what is going on under the hood."),Object(i.b)("p",null,"This guide assumes you're using ",Object(i.b)("a",{parentName:"p",href:"/buildbuddy/docs/cloud"},"BuildBuddy Cloud")," or ",Object(i.b)("a",{parentName:"p",href:"/buildbuddy/docs/enterprise"},"BuildBuddy Enterprise on-prem"),"."),Object(i.b)("h2",{id:"the-basics"},"The basics"),Object(i.b)("p",null,"The very simplest Bazel command needed to enable RBE is the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"bazel build //... --remote_executor=grpcs://cloud.buildbuddy.io\n")),Object(i.b)("p",null,"This points Bazel at BuildBuddy Cloud as a remote executor. A simple repo that has C/C++/CGO or Java dependencies will build just fine like this. Most interesting repos have some dependencies on C/C++/CGO or Java - so we'll need to tell our remote executors where to find tools like gcc or the JRE. We do this with ",Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/platforms.html"},"platforms")," and ",Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/toolchains.html"},"toolchains"),"."),Object(i.b)("h2",{id:"configuring-your-workspace"},"Configuring your workspace"),Object(i.b)("p",null,"There are several options for configuring your platforms and toolchains, the most fully features of which being ",Object(i.b)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains"),". It comes with an ",Object(i.b)("inlineCode",{parentName:"p"},"rbe_autoconfig")," rule that works nicely with BuildBuddy."),Object(i.b)("p",null,"Unfortunately, bazel-toolchains has a dependency on Docker and can take quite some time to start up in a clean workspace, so we provide a simple and easy-to-use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/toolchain"},"BuildBuddy toolchain")," that enables you to get up and running quickly, and works for most use cases."),Object(i.b)("p",null,"To get started with the BuildBuddy Toolchain, add the following lines to your ",Object(i.b)("inlineCode",{parentName:"p"},"WORKSPACE")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'http_archive(\n    name = "io_buildbuddy_buildbuddy_toolchain",\n    sha256 = "9055a3e6f45773cd61931eba7b7cf35d6477ab6ad8fb2f18bf9815271fc682fe",\n    strip_prefix = "buildbuddy-toolchain-52aa5d2cc6c9ba7ee4063de35987be7d1b75f8e2",\n    urls = ["https://github.com/buildbuddy-io/buildbuddy-toolchain/archive/52aa5d2cc6c9ba7ee4063de35987be7d1b75f8e2.tar.gz"],\n)\n\nload("@io_buildbuddy_buildbuddy_toolchain//:deps.bzl", "buildbuddy_deps")\n\nbuildbuddy_deps()\n\nload("@io_buildbuddy_buildbuddy_toolchain//:rules.bzl", "buildbuddy")\n\nbuildbuddy(name = "buildbuddy_toolchain")\n')),Object(i.b)("h2",{id:"platforms"},"Platforms"),Object(i.b)("p",null,"The first thing you'll want to do is tell BuildBuddy RBE in what environment you'll want to run your build actions. This is tools can be found in different locations on different platforms. This is done with the ",Object(i.b)("inlineCode",{parentName:"p"},"--host_platform"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--platforms"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"--extra_execution_platforms")," flags."),Object(i.b)("p",null,"BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. We can specify this platform with the ",Object(i.b)("inlineCode",{parentName:"p"},"--host_platform"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--platforms"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"--extra_execution_platforms")," flags:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--host_platform=@buildbuddy_toolchain//:platform\n--platforms=@buildbuddy_toolchain//:platform\n--extra_execution_platforms=@buildbuddy_toolchain//:platform\n")),Object(i.b)("p",null,"If you want to use a different environment, you can specify a custom Docker container image to use. More information on how to do this can be found in our ",Object(i.b)("a",{parentName:"p",href:"/buildbuddy/docs/rbe-platforms"},"platforms documentation"),"."),Object(i.b)("h2",{id:"toolchains"},"Toolchains"),Object(i.b)("p",null,"Toolchains sound complicated (and they can be) - but the concept is simple. We're telling our remote executors where to find tools that are needed to build our code."),Object(i.b)("h3",{id:"c-toolchain"},"C toolchain"),Object(i.b)("p",null,"The first toolchain you'll likely run into the need for is a C/C++ compiler. Even if your code isn't written in one of these languages, it's likely that one of your dependencies is - or calls some C code with something like ",Object(i.b)("a",{parentName:"p",href:"https://golang.org/cmd/cgo/"},"cgo"),"."),Object(i.b)("p",null,"You'll know you need a C toolchain when you see an error for a missing gcc or clang that looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'exec: "/usr/bin/gcc": stat /usr/bin/gcc: no such file or directory\n')),Object(i.b)("p",null,"To use BuildBuddy's default C toolchain, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--crosstool_top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--extra_toolchains")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--crosstool_top=@buildbuddy_toolchain//:toolchain\n--extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\n")),Object(i.b)("h3",{id:"java-toolchain"},"Java toolchain"),Object(i.b)("p",null,"If your project depends on Java code, you'll need 4 more flags to tell the executors where to look for Java tools."),Object(i.b)("p",null,"Using BuildBuddy's default Java 8 config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--javabase=@buildbuddy_toolchain//:javabase_jdk8\n--host_javabase=@buildbuddy_toolchain//:javabase_jdk8\n--java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n--host_java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n")),Object(i.b)("p",null,"If you need a different version of Java, we recommend using ",Object(i.b)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains")," for now."),Object(i.b)("h2",{id:"putting-it-all-together"},"Putting it all together"),Object(i.b)("p",null,"This can be a lot of flags to tack onto each bazel build, so instead you can move these to your ",Object(i.b)("inlineCode",{parentName:"p"},".bazelrc")," file under the ",Object(i.b)("inlineCode",{parentName:"p"},"remote")," config block:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"build:remote --remote_executor=grpcs://cloud.buildbuddy.io\nbuild:remote --host_platform=@buildbuddy_toolchain//:platform\nbuild:remote --platforms=@buildbuddy_toolchain//:platform\nbuild:remote --extra_execution_platforms=@buildbuddy_toolchain//:platform\nbuild:remote --crosstool_top=@buildbuddy_toolchain//:toolchain\nbuild:remote --extra_toolchains=@buildbuddy_toolchain//:cc_toolchain\nbuild:remote --javabase=@buildbuddy_toolchain//:javabase_jdk8\nbuild:remote --host_javabase=@buildbuddy_toolchain//:javabase_jdk8\nbuild:remote --java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\nbuild:remote --host_java_toolchain=@buildbuddy_toolchain//:toolchain_jdk8\n")),Object(i.b)("p",null,"And running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"bazel build //... --config=remote\n")),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"You'll want to authenticate your RBE builds with either API key or certificate based auth. For more info on how to set this up, see our ",Object(i.b)("a",{parentName:"p",href:"/buildbuddy/docs/guide-auth"},"authentication guide"),"."),Object(i.b)("h2",{id:"configuration-options"},"Configuration options"),Object(i.b)("h3",{id:"--jobs"},"--jobs"),Object(i.b)("p",null,"This determines the number of parallel actions Bazel will remotely execute at once. If this flag is not set, Bazel will use a heuristic based on the number of cores on your local machine. Your builds & tests can likely be parallelized much more aggressively when executing remotely. We recommend starting with ",Object(i.b)("inlineCode",{parentName:"p"},"50")," and working your way up."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--jobs=50\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--jobs"},"Bazel docs")),Object(i.b)("h3",{id:"--remote_timeout"},"--remote_timeout"),Object(i.b)("p",null,"This determines the maximum time Bazel will spend on any single remote call, including cache writes. The default value is 60s. We recommend setting this high to avoid timeouts when uploading large cache artifacts."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--remote_timeout=600\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"Bazel docs")),Object(i.b)("h3",{id:"--remote_download_minimal"},"--remote_download_minimal"),Object(i.b)("p",null,"By default, bazel will download intermediate results of remote executions - so in case an artifact isn't found in the remote cache, it can be re-uploaded. This can slow down builds in networks constrained environments."),Object(i.b)("p",null,"This can be turned off with the flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--remote_download_minimal\n")),Object(i.b)("p",null,"While this flag can speed up your build, it makes them more sensitive to caching issues - and likely shouldn't be used in production yet."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_download_minimal"},"Bazel docs")),Object(i.b)("h3",{id:"--remote_instance_name"},"--remote_instance_name"),Object(i.b)("p",null,"If you'd like separate remote caches, whether it's for CI builds vs local builds or other reasons, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"remote_instance_name")," flag to namespace your cache artifacts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--remote_instance_name=buildbuddy-io/buildbuddy/ci\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_instance_name"},"Bazel docs")),Object(i.b)("h3",{id:"--disk_cache"},"--disk_cache"),Object(i.b)("p",null,"While setting a local disk cache can speed up your builds, when used in conjunction with remote execution - your local and remote state has the opportunity to get out of sync. If you suspect you're running into this problem, you can disable your local disk cache by setting this to an empty value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--disk_cache=\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--disk_cache"},"Bazel docs")),Object(i.b)("h3",{id:"--incompatible_strict_action_env"},"--incompatible_strict_action_env"),Object(i.b)("p",null,"Some rules (like protobuf) are particularly sensitive to changes in environment variables and will frequently be rebuilt due to resulting cache misses. To mitigate this, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"incompatible_strict_action_env")," which sets a static value for ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--incompatible_strict_action_env\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--incompatible_strict_action_env"},"Bazel docs")),Object(i.b)("h3",{id:"--action_env"},"--action_env"),Object(i.b)("p",null,"You can set environment variables that are available to actions with the ",Object(i.b)("inlineCode",{parentName:"p"},"--action_env")," flag. This is commonly used to set ",Object(i.b)("inlineCode",{parentName:"p"},"BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN")," which tells bazel not to auto-detect the C++ toolchain."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define"},"Bazel docs")),Object(i.b)("h2",{id:"--define"},"--define"),Object(i.b)("p",null,"Define allows you to assign build variables. This is commonly use to set ",Object(i.b)("inlineCode",{parentName:"p"},"EXECUTOR")," to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazel/issues/7254"},"compile singlejar and ijar from source"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--define=EXECUTOR=remote\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--define"},"Bazel docs")),Object(i.b)("h2",{id:"--spawn_strategy"},"--spawn_strategy"),Object(i.b)("p",null,"Sets the list of strategies in priority order from highest to lowest. Each action picks the highest priority strategy that it can execute. The default value is ",Object(i.b)("inlineCode",{parentName:"p"},"remote,worker,sandboxed,local"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--strategy=remote,local\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--spawn_strategy"},"Bazel docs")),Object(i.b)("h2",{id:"--strategy"},"--strategy"),Object(i.b)("p",null,"Explicitly setting strategies should ",Object(i.b)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazel/issues/7480"},"no longer be needed")," for Bazel versions post 0.27.0. It can be used to force certain bazel mnemonics to be build remotely."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--strategy=Scalac=remote\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--strategy"},"Bazel docs")),Object(i.b)("h2",{id:"--experimental_inmemory_dotd_files"},"--experimental_inmemory_dotd_files"),Object(i.b)("p",null,"If enabled, C++ .d files will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",Object(i.b)("inlineCode",{parentName:"p"},"--remote_download_minimal"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--experimental_inmemory_dotd_files\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_dotd_files"},"Bazel docs")),Object(i.b)("h2",{id:"--experimental_inmemory_jdeps_files"},"--experimental_inmemory_jdeps_files"),Object(i.b)("p",null,"If enabled, .jdeps files generated from Java compilations will be passed through in memory directly from the remote build nodes instead of being written to disk. This flag is automatically set when using ",Object(i.b)("inlineCode",{parentName:"p"},"--remote_download_minimal"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"--experimental_inmemory_jdeps_files\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_inmemory_jdeps_files"},"Bazel docs")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelrc#L23"},"buildbuddy-io/buildbuddy .bazelrc --config=remote")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/graknlabs/grakn/blob/master/.bazelrc#L6"},"graknlabs/grakn .bazelrc --config=rbe")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wix/exodus/blob/master/.bazelrc.remote#L8"},"wix/exodus .bazlerc.remote"))),Object(i.b)("h2",{id:"advanced-configuration"},"Advanced configuration"),Object(i.b)("p",null,"If you need a more advanced configuration than provided by the basic BuildBuddy toolchain, we recommend exploring Bazel's ",Object(i.b)("a",{parentName:"p",href:"https://releases.bazel.build/bazel-toolchains.html"},"bazel-toolchains")," repo. Its ",Object(i.b)("inlineCode",{parentName:"p"},"rbe_autoconfig")," rule is highly configurable and works nicely with BuildBuddy."),Object(i.b)("p",null,"Here's a quick snippet you can add to your ",Object(i.b)("inlineCode",{parentName:"p"},"WORKSPACE")," file if using bazel 3.6.0:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")\n\nhttp_archive(\n    name = "bazel_toolchains",\n    sha256 = "4fb3ceea08101ec41208e3df9e56ec72b69f3d11c56629d6477c0ff88d711cf7",\n    strip_prefix = "bazel-toolchains-3.6.0",\n    urls = [\n        "https://github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n        "https://mirror.bazel.build/github.com/bazelbuild/bazel-toolchains/releases/download/3.6.0/bazel-toolchains-3.6.0.tar.gz",\n    ],\n)\n\nload("@bazel_toolchains//rules:rbe_repo.bzl", "rbe_autoconfig")\n\n# Creates a default toolchain config for RBE.\n# Use this as is if you are using the rbe_ubuntu16_04 container,\n# otherwise refer to RBE docs.\nrbe_autoconfig(name = "rbe_default")\n')),Object(i.b)("p",null,"And to your ",Object(i.b)("inlineCode",{parentName:"p"},".bazelrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'# Depending on how many machines are in the remote execution instance, setting\n# this higher can make builds faster by allowing more jobs to run in parallel.\n# Setting it too high can result in jobs that timeout, however, while waiting\n# for a remote machine to execute them.\nbuild:remote --jobs=50\n\n# Set several flags related to specifying the platform, toolchain and java\n# properties.\n# These flags should only be used as is for the rbe-ubuntu16-04 container\n# and need to be adapted to work with other toolchain containers.\nbuild:remote --host_javabase=@rbe_default//java:jdk\nbuild:remote --javabase=@rbe_default//java:jdk\nbuild:remote --host_java_toolchain=@bazel_tools//tools/jdk:toolchain_hostjdk8\nbuild:remote --java_toolchain=@bazel_tools//tools/jdk:toolchain_hostjdk8\nbuild:remote --crosstool_top=@rbe_default//cc:toolchain\nbuild:remote --action_env=BAZEL_DO_NOT_DETECT_CPP_TOOLCHAIN=1\n# Platform flags:\n# The toolchain container used for execution is defined in the target indicated\n# by "extra_execution_platforms", "host_platform" and "platforms".\n# More about platforms: https://docs.bazel.build/versions/master/platforms.html\nbuild:remote --extra_toolchains=@rbe_default//config:cc-toolchain\nbuild:remote --extra_execution_platforms=@rbe_default//config:platform\nbuild:remote --host_platform=@rbe_default//config:platform\nbuild:remote --platforms=@rbe_default//config:platform\n\n# Starting with Bazel 0.27.0 strategies do not need to be explicitly\n# defined. See https://github.com/bazelbuild/bazel/issues/7480\nbuild:remote --define=EXECUTOR=remote\n\n# Enable remote execution so actions are performed on the remote systems.\nbuild:remote --remote_executor=grpcs://cloud.buildbuddy.io\n\n# Enforce stricter environment rules, which eliminates some non-hermetic\n# behavior and therefore improves both the remote cache hit rate and the\n# correctness and repeatability of the build.\nbuild:remote --incompatible_strict_action_env=true\n\n# Set a higher timeout value, just in case.\nbuild:remote --remote_timeout=3600\n')),Object(i.b)("p",null,"And then run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"bazel build //... --config=remote\n")))}d.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=o,m=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return n?a.a.createElement(m,r(r({ref:t},b),{},{components:n})):a.a.createElement(m,r({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);