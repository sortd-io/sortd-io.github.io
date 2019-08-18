(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(e,t,a){"use strict";a.r(t);a(53),a(54),a(26),a(121),a(28);var n=a(0),o=a.n(n),r=a(300),p=(a(128),a(130),a(123),a(86),a(84),a(222),a(234)),i=a.n(p),l=(a(223),a(235)),c=a.n(l),s=(a(12),a(511),a(129),a(512),a(528)),u=a.n(s),m=(a(214),a(191)),d=a.n(m),f=(a(514),a(275),a(134),a(135),a(132),a(258),a(284)),h=a.n(f),g=a(206),v=a(42),b=a.n(v),E=a(184),y=a.n(E),w=a(686),k=a(282),x=a.n(k),S=(a(516),a(525)),C=a.n(S),N=a(202),O=a(363),M=a.n(O),_=a(520),j=a.n(_),I=(a(239),a(233)),A=a.n(I),D=function(e){var t=e.title,a=e.filename,n=e.sourcePath,r=void 0===n?"https://github.com/sortd-io/sortd-website/edit/master":n;return o.a.createElement(A.a,{title:t},o.a.createElement("a",{className:"edit-button",target:"_blank",rel:"noopener noreferrer",href:""+r+a},o.a.createElement(d.a,{type:"edit"})))},L=(a(522),a(524)),z=a.n(L);var P=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.avatarList,t=void 0===e?[]:e;return t?o.a.createElement("div",{className:"doc-avatar-list"},t.map(function(e){return o.a.createElement("a",{className:"href-box",target:"_blank",rel:"noopener noreferrer",href:"http://github.com"+e.href},o.a.createElement(A.a,{title:e.text},o.a.createElement(z.a,{src:e.src,alt:e.text,size:"small"})))})):null},n}(o.a.Component);var T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.delegation=j()(this.node,".resource-card","click",function(e){window.ga&&window.ga("send","event","Download","resource",e.delegateTarget.href)},!1)},r.componentWillUnmount=function(){clearTimeout(this.pingTimer),this.delegation&&this.delegation.destroy()},r.render=function(){var e=this,t=this.props.content,a=t.meta,n=a.title,r=a.subtitle,p=a.path,i=a.modifiedTime,l=a.avatarList,c=this.context.intl.locale;return o.a.createElement(M.a,{title:(n[c]||n)+" - Sortd"},o.a.createElement(o.a.Fragment,null,o.a.createElement("article",{className:"markdown",ref:function(t){e.node=t}},o.a.createElement("h1",null,n[c]||n,r&&"en-US"!==c?o.a.createElement("span",{className:"subtitle"},r):null,o.a.createElement(D,{title:o.a.createElement(N.a,{id:"app.content.edit-page"}),filename:p})),o.a.createElement("div",{className:"modifiedTime"},o.a.createElement(P,{avatarList:l}),o.a.createElement(N.a,{id:"app.content.modifiedTime"}),x()(i).format("YYYY-MM-DD HH:mm:SS")),!t.toc||t.toc.length<=1||!1===a.toc?null:o.a.createElement(C.a,{className:"toc-affix",offsetTop:16},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.toc.replace(/<ul>/g,'<ul class="toc">').replace(/\/#/g,"#")}})),o.a.createElement("section",{className:"markdown api-container",dangerouslySetInnerHTML:{__html:t.content}}))))},n}(o.a.PureComponent);T.contextTypes={intl:b.a.object.isRequired};var q=a(200);function U(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var H=h.a.SubMenu;function F(e){var t=e.menuList,a=Object(q.d)(e.location.pathname)?"zh-CN":"en-US";return t.filter(function(e){var t=e.filename;return!!t&&(!t.includes("zh-CN")&&!t.includes("en-US")||t.includes(a))})}function V(e){return"topLevel"!==e}var K=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).getSideBarOpenKeys=function(e){var t=e.location.pathname,a=F(e).find(function(e){var a=e.slug;return t.includes(a)});return a?[a.type]:[]},a.handleMenuOpenChange=function(e){a.setState({openKeys:e})},a.convertFilename=function(e){var t=a.props.location.pathname;return Object(q.d)(t)&&!e.includes("-cn")?e+"-cn":e},a.generateMenuItem=function(e,t){var n=e.before,r=void 0===n?null:n,p=e.after,i=void 0===p?null:p;if(!t.title)return null;var l=a.context.intl.locale,c=[o.a.createElement("span",{key:"english"},t.title[l]||t.title),o.a.createElement("span",{className:"chinese",key:"chinese"},"zh-CN"===l&&t.subtitle)],s=t.disabled,m=t.link?o.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"menu-item-link-outside"},r,c," ",o.a.createElement(d.a,{type:"export"}),i):o.a.createElement(g.a,{to:a.convertFilename(t.filename)},r,c,i);return o.a.createElement(h.a.Item,{key:a.convertFilename(t.filename),disabled:s},t.important?o.a.createElement(u.a,{dot:t.important},m):m)},a.generateSubMenuItems=function(e,t){void 0===t&&(t={});var n=a.context.intl.locale;if(!e)return[];var r=(e.topLevel||[]).map(a.generateMenuItem.bind(R(a),t)),p=Object.keys(e).filter(V).map(function(r){var p=e[r].sort(function(e,t){return"time"in e&&"time"in t?x()(t.time).valueOf()-x()(e.time).valueOf():"order"in e&&"order"in t?e.order-t.order:e.title[n].charCodeAt(0)-t.title[n].charCodeAt(0)}).map(a.generateMenuItem.bind(R(a),t));return o.a.createElement(H,{title:r,key:r},p)});return[].concat(U(r),U(p))},a.getMenuItems=function(e){void 0===e&&(e={});var t=F(a.props),n=a.context.intl.locale,o=Object(q.b)(t,n)||{};return U(a.generateSubMenuItems(o.topLevel,e)||[]).filter(function(e){return e.key})},a.getPreAndNext=function(e){var t=a.props.localizedPageData.meta.filename,n=e.length&&!e[0].props.children.length?e:Object.keys(e).reduce(function(t,a){return t.concat(e[a].props.children)},[]),o=n.findIndex(function(e){return e.key===t||e.key===t+"-cn"});return-1===o?{}:{prev:n[o-1],next:n[o+1]}},a.state={openKeys:a.getSideBarOpenKeys(t)||[]},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.componentDidUpdate()},r.componentWillReceiveProps=function(e){var t=this.getSideBarOpenKeys(e);t&&this.setState({openKeys:t})},r.componentDidUpdate=function(){if(window.location.hash){var e=document.getElementById(decodeURIComponent(window.location.hash.replace("#","")));setTimeout(function(){e&&e.scrollIntoView(!0)},100)}},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){var e,t,a=this.props,n=a.localizedPageData,r=a.isMobile,p=(e=this.props,(t=e.location.pathname).endsWith("/")?t.substring(0,t.length-1):t),l=this.getMenuItems(),s=this.getPreAndNext(l),u=s.prev,m=s.next,f=y()("main-container",{}),g=this.state.openKeys,v=o.a.createElement(h.a,{inlineIndent:16,className:"aside-container",mode:"inline",openKeys:g,selectedKeys:[p],onOpenChange:this.handleMenuOpenChange},l);return o.a.createElement("div",{className:"main-wrapper"},o.a.createElement(i.a,null,r?o.a.createElement(w.a,{iconChild:[o.a.createElement(d.a,{type:"menu-unfold"}),o.a.createElement(d.a,{type:"menu-fold"})],key:"mobile-menu",wrapperClassName:"drawer-wrapper"},v):o.a.createElement(c.a,{xxl:4,xl:5,lg:6,md:24,sm:24,xs:24,className:"main-menu"},v),o.a.createElement(c.a,{xxl:20,xl:19,lg:18,md:24,sm:24,xs:24},o.a.createElement("div",{className:f},o.a.createElement(T,Object.assign({},this.props,{content:n}))))),o.a.createElement(i.a,null,o.a.createElement(c.a,{lg:{span:20,offset:4},md:24,sm:24,xs:24},o.a.createElement("section",{className:"prev-next-nav"},u?o.a.createElement("a",{className:"prev-page"},o.a.createElement(d.a,{className:"footer-nav-icon-before",type:"left"}),u.props.children):null,m?o.a.createElement("a",{className:"next-page"},m.props.children,o.a.createElement(d.a,{className:"footer-nav-icon-after",type:"right"})):null))))},n}(o.a.PureComponent);function B(e){var t=e.data,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["data"]),n=t.markdownRemark,p=t.allMarkdownRemark,i=n.frontmatter,l=n.fields,c=n.html,s=n.tableOfContents,u=p.edges.map(function(e){var t=e.node,a=Object(q.e)(t.frontmatter);return Object.assign({slug:t.fields.slug,meta:Object.assign({},a,{slug:t.fields.slug,filename:t.fields.slug})},a,{filename:t.fields.path})});return o.a.createElement(r.a,a,o.a.createElement(K,Object.assign({},a,{localizedPageData:{meta:Object.assign({},Object(q.e)(i),{},l,{filename:l.slug,path:l.path}),toc:s,content:c},menuList:u})))}K.contextTypes={intl:b.a.object.isRequired},a.d(t,"default",function(){return B}),a.d(t,"pageQuery",function(){return G});var G="301361928"},200:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return p}),a.d(t,"e",function(){return i});a(28),a(129),a(132),a(12),a(238);function n(e){return"/"===e?"undefined"!=typeof window&&"zh-CN"===(localStorage?localStorage.getItem("locale"):"en-US"):/-cn/.test(e)}function o(e,t){var a=e.startsWith("/")?e:"/"+e;return"/"===(a=a.replace("-cn",""))||"/index"===a?t?"/index-cn":"/":t?a.endsWith("/")?a.substring(0,a.length-1)+"-cn":a+"-cn":""+a}function r(e,t){var a=e.map(function(e){return e.meta}),n={topLevel:{}};return a.sort(function(e,t){return(e.order||0)-(t.order||0)}).forEach(function(e){var a=e.category&&e.category[t]||e.category||"topLevel";n[a]||(n[a]={});var o=e.type||"topLevel";n[a][o]||(n[a][o]=[]),n[a][o].push(e)}),n}function p(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(t){return!1}}var i=function(e){var t=e.title;return Object.assign({},e,{title:{"zh-CN":t.zh_CN,"en-US":t.en_US}})}},206:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(60),p=a.n(r);a.d(t,"a",function(){return p.a});a(224),a(7).default.enqueue,o.a.createContext({})},224:function(e,t,a){var n;e.exports=(n=a(259))&&n.default||n},259:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),o=a.n(n),r=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},260:function(e,t,a){e.exports=a.p+"static/full-logo-2493686f19cb222ed1486649dc1e4777.png"},300:function(e,t,a){"use strict";a(53),a(54),a(26),a(121),a(304);var n=a(281),o=a.n(n),r=(a(28),a(0)),p=a.n(r),i=a(202),l=a(362),c=a.n(l),s=a(302),u=a(315),m={locale:"en-US",data:a.n(u).a,messages:{"app.header.search":"Search...","app.header.search.all":"Search in Google: ","app.header.search.doc":"Docs","app.header.search.component":"Components","app.header.menu.home":"Home","app.header.menu.docs":"Docs","app.header.menu.components":"Components","app.header.menu.resource":"Resources","app.header.lang":"中文","app.content.edit-page":"Edit this page on GitHub!","app.content.modifiedTime":"Last updated on ","app.content.edit-demo":"Edit this demo on GitHub!","app.component.examples":"Examples","app.component.refer.title":"Usage:","app.component.refer.desc":"Learning more to visit: ","app.component.refer.link":"Using Pro Components Alone","app.demo.copy":"Copy code","app.demo.copied":"Copied!","app.demo.codepen":"Open in CodePen","app.demo.riddle":"Open in Riddle","app.demo.codesandbox":"Open in CodeSandbox","app.home.slogan":"Collaborative Organisational Change Management Platform","app.home.preview":"Preview","app.home.start":"Getting Started","app.home.download":"Download","app.home.letspro":"Being the first to know always feels great! Sign up below to get early access to our platform.","app.home.selectpro":"Select Ant Design Pro","app.home.selectlanguage":"Select language you use","app.home.openbrowser":"open browser and visit","app.home.needhelp":"Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.","app.home.docs":"documentation","app.home.faq":"faq","app.home.ask":"ask questions","app.footer.repo":"GitHub Repository","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"China Mirror 🇨🇳","app.footer.primary-color-changed":"Change primary color successfully!","app.footer.scaffold":"Scaffold","app.footer.kitchen":"Sketch Toolkit","app.footer.landing":"Landing Templates","app.footer.scaffolds":"Scaffold Market","app.footer.dev-tools":"Developer Tools","app.footer.dva":"Framework","app.footer.resources":"Resources","app.footer.data-vis":"Data Visualization","app.footer.eggjs":"Enterprise Node Framework","app.footer.motion":"Motion Solution","app.footer.antd-library":"Axure library","app.footer.design-platform":"Ant Financial Design Platform","app.footer.antux":"Sitemap Template","app.footer.community":"Community","app.footer.help":"Help","app.footer.change-log":"Change Log","app.footer.faq":"FAQ","app.footer.feedback":"Feedback","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"Chat Room (English)","app.footer.discuss-cn":"Chat Room (中文)","app.footer.bug-report":"Bug Report","app.footer.issues":"Issues","app.footer.version":"Version: ","app.footer.author":"Created by AFX","app.footer.work_with_us":"Work with Us","app.footer.more-product":"More Products","app.footer.company":"Sortd","app.footer.quicklinks":"Quick Links","app.footer.aboutus":"About Us","app.footer.ant-design":"UI Design Language","app.footer.yuque":"YuQue","app.footer.yuque.slogan":"Write your document as a team","app.footer.fengdie":"FengDie","app.footer.fengdie.slogan":"Mobile web app builder","app.footer.zhihu":"Zhihu","app.footer.zhihu.xtech":"Experience Cloud Blog","app.footer.seeconf":"Seeking Experience & Engineering Conference","app.footer.xcloud":"Ant Experience Cloud","app.publish.title":"Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉","app.publish.greeting":"Hello, ","app.publish.intro":"has been released","app.publish.tips":", welcome to upgrade and experience. ","app.publish.url":"https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95","app.publish.old-version-guide":"If you need documentation of older version, please visit ","app.publish.old-version-tips":",It can also be viewed by clicking on the v1 menu in the top right corner of the page."}},d=a(316),f={locale:"zh-CN",data:a.n(d).a,messages:{"app.header.search":"搜索...","app.header.search.all":"全文本搜索：","app.header.search.doc":"文档","app.header.search.component":"组件","app.header.menu.home":"首页","app.header.menu.docs":"文档","app.header.menu.components":"组件","app.header.menu.resource":"资源","app.header.lang":"English","app.content.edit-page":"在 Github 上编辑此页！","app.content.modifiedTime":"上次修改时间：","app.content.edit-demo":"在 Github 上编辑此示例！","app.component.examples":"代码演示","app.component.refer.title":"引用方式：","app.component.refer.desc":"详细使用方式请参照：","app.component.refer.link":"独立使用 pro 组件","app.demo.copy":"复制代码","app.demo.copied":"复制成功","app.demo.codepen":"在 CodePen 中打开","app.demo.riddle":"在 Riddle 中打开","app.demo.codesandbox":"在 CodeSandbox 中打开","app.home.slogan":"开箱即用的中台前端/设计解决方案","app.home.preview":"预览","app.home.start":"开始使用","app.home.download":"下载","app.home.letspro":"命令行运行下列命令，快速启动开发服务：","app.home.selectpro":"选择 Ant Design Pro","app.home.selectlanguage":"选择你使用的语言","app.home.openbrowser":"打开浏览器访问","app.home.needhelp":"需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。","app.home.docs":"开发文档","app.home.faq":"常见问题","app.home.ask":"进行提问","app.footer.repo":"GitHub 仓库","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"国内镜像站点 🇨🇳","app.footer.primary-color-changed":"修改主题色成功！","app.footer.kitchen":"Sketch 工具集","app.footer.landing":"Landing 模板集","app.footer.scaffold":"脚手架","app.footer.scaffolds":"脚手架市场","app.footer.dev-tools":"开发工具","app.footer.dva":"应用框架","app.footer.resources":"相关资源","app.footer.data-vis":"数据可视化","app.footer.eggjs":"企业级 Node 开发框架","app.footer.motion":"设计动效","app.footer.antd-library":"Axure 部件库","app.footer.design-platform":"蚂蚁金服设计平台","app.footer.antux":"页面逻辑素材","app.footer.community":"社区","app.footer.help":"帮助","app.footer.change-log":"更新记录","app.footer.faq":"常见问题","app.footer.feedback":"反馈和建议","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"在线讨论 (English)","app.footer.discuss-cn":"在线讨论 (中文)","app.footer.bug-report":"报告 Bug","app.footer.issues":"讨论列表","app.footer.version":"文档版本：","app.footer.author":"蚂蚁金服体验技术部出品 @ AFX","app.footer.work_with_us":"加入我们","app.footer.more-product":"更多产品","app.footer.company":"AFX","app.footer.ant-design":"蚂蚁 UI 体系","app.footer.yuque":"语雀","app.footer.yuque.slogan":"知识创作·协作平台","app.footer.fengdie":"云凤蝶","app.footer.fengdie.slogan":"移动建站平台","app.footer.zhihu":"知乎专栏","app.footer.zhihu.xtech":"体验科技专栏","app.footer.seeconf":"蚂蚁体验科技大会","app.footer.xcloud":"蚂蚁体验云","app.publish.title":"Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉","app.publish.greeting":"你好，","app.publish.intro":" 已正式发布","app.publish.tips":"，欢迎升级和体验。","app.publish.url":"https://www.yuque.com/ant-design/ant-design-pro/gg1e9a","app.publish.old-version-guide":"如果您还需要使用旧版，请查阅 ","app.publish.old-version-tips":"，也可通过点击页面右上角的 v1 菜单查看。"}},h=a(200),g=(a(317),a(318),a(319),a(320),a(222),a(234)),v=a.n(g),b=(a(223),a(235)),E=a.n(b),y=(a(321),a(354)),w=a.n(y),k=(a(214),a(191)),x=a.n(k),S=(a(258),a(284)),C=a.n(S),N=(a(59),a(12),a(322),a(349)),O=a.n(N),M=(a(323),a(324)),_=a.n(M),j=a(206),I=a(260),A=a.n(I);_.a.Option;var D="antd-pro@2.0.0-notification-sent",L=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={menuVisible:!1,menuMode:"horizontal"},t.setMenuMode=function(e){t.setState({menuMode:e?"inline":"horizontal"})},t.handleHideMenu=function(){t.setState({menuVisible:!1})},t.handleShowMenu=function(){t.setState({menuVisible:!0})},t.onMenuVisibleChange=function(e){t.setState({menuVisible:e})},t.handleSelect=function(e){window.location.href=e},t.infoNewVersion=function(){var e=t.props.intl.formatMessage;O.a.info({title:e({id:"app.publish.title"}),content:p.a.createElement("div",null,p.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),p.a.createElement("p",null,e({id:"app.publish.greeting"}),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e({id:"app.publish.url"})},"Ant Desgin Pro ",e({id:"app.publish.intro"})),e({id:"app.publish.tips"}),e({id:"app.publish.old-version-guide"}),p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://v1.pro.ant.design"},"v1.pro.ant.design"),e({id:"app.publish.old-version-tips"}))),okText:"OK",onOk:function(){return localStorage.setItem(D,"true")},className:"new-version-info-modal",width:470})},t.handleLangChange=function(){var e=t.props.location.pathname,a=window.location.protocol+"//",n=window.location.href.substr(a.length);h.c()&&localStorage.setItem("locale",h.d(e)?"en-US":"zh-CN"),window.location.href=a+n.replace(window.location.pathname,h.a(e,!h.d(e)))},t.onVersionChange=function(e){"v1"===e&&window.open("https://v1.pro.ant.design/"),"v2"===e&&window.open("https://v2-pro.ant.design/")},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this.searchInput;this.props.intl;document.addEventListener("keyup",function(t){83===t.keyCode&&t.target===document.body&&e&&e.focus()}),"true"!==localStorage.getItem(D)&&Date.now()<new Date("2018/9/5").getTime()&&this.infoNewVersion();this.props.intl.locale},o.componentDidUpdate=function(e){var t=this.props.isMobile;t!==e.isMobile&&this.setMenuMode(t)},o.render=function(){var e=this.state,t=e.menuMode,a=e.menuVisible,n=this.props,o=n.location,r=n.intl,l=o.pathname,c=o.pathname.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/")||"home";/^blog/.test(l)?c="blog":/docs/.test(l)?c="docs":"/"===l&&(c="home");var s="zh-CN"===r.locale,u=[p.a.createElement(C.a,{mode:t,selectedKeys:[c],id:"nav",key:"nav"},p.a.createElement(C.a.Item,{key:"home"},p.a.createElement(j.a,{to:h.a("/",s)},p.a.createElement(i.a,{id:"app.header.menu.home"}))),p.a.createElement(C.a.Item,{key:"docs"},p.a.createElement(j.a,{to:h.a("/docs/introduction",s)},p.a.createElement(i.a,{id:"app.header.menu.docs"}))),p.a.createElement(C.a.Item,{key:"blog"},p.a.createElement(j.a,{to:h.a("/blog/",s)},"Blog")),"inline"===t&&p.a.createElement(C.a.Item,{key:"preview"},p.a.createElement("a",{target:"_blank",href:"http://preview.pro.ant.design/",rel:"noopener noreferrer"},p.a.createElement(i.a,{id:"app.home.preview"}))))];return p.a.createElement("div",{id:"header",className:"header"},"inline"===t?p.a.createElement(w.a,{overlayClassName:"popover-menu",placement:"bottomRight",content:u,trigger:"click",visible:a,arrowPointAtCenter:!0,onVisibleChange:this.onMenuVisibleChange},p.a.createElement(x.a,{className:"nav-phone-icon",type:"menu",onClick:this.handleShowMenu})):null,p.a.createElement(v.a,null,p.a.createElement(E.a,{xxl:4,xl:5,lg:8,md:8,sm:24,xs:24},p.a.createElement(j.a,{id:"logo",to:"/"},p.a.createElement("img",{src:A.a,alt:"Sortd"}))),p.a.createElement(E.a,{xxl:20,xl:19,lg:16,md:16,sm:0,xs:0},p.a.createElement("div",{className:"header-meta"},p.a.createElement("div",{className:"right-header"}),"horizontal"===t?p.a.createElement("div",{id:"menu"},u):null))))},n}(p.a.Component),z=Object(i.d)(L),P=a(361);var T=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleLangChange=function(){var e=t.props.location.pathname,a=window.location.protocol+"//",n=window.location.href.substr(a.length);h.c()&&localStorage.setItem("locale",h.d(e)?"en-US":"zh-CN"),window.location.href=a+n.replace(window.location.pathname,h.a(e,!h.d(e)))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return p.a.createElement("footer",{id:"footer"},p.a.createElement("div",{className:"footer-wrap"},p.a.createElement(v.a,null,p.a.createElement(E.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement(i.a,{id:"app.footer.quicklinks"})),p.a.createElement("div",null,p.a.createElement(j.a,{to:"/"},"Home")),p.a.createElement("div",null,p.a.createElement(j.a,{to:"/docs"},"Documentation")),p.a.createElement("div",null,p.a.createElement(j.a,{to:"/blog"},"Blog")),p.a.createElement("div",null,p.a.createElement(P.OutboundLink,{href:"https://www.linkedin.com/company/sortdio",target:"_blank"},p.a.createElement("span",null,p.a.createElement("img",{width:14,src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"})),"  LinkedIn")))),p.a.createElement(E.a,{md:6,sm:24,xs:24},p.a.createElement("div",{className:"footer-center"},p.a.createElement("h2",null,p.a.createElement(i.a,{id:"app.footer.aboutus"})),p.a.createElement("div",null,p.a.createElement("b",null,"Sortd.io")," (ABN: 18633413313)",p.a.createElement("br",null),"2/397 Riley Street ",p.a.createElement("br",null),"Surry Hills 2010",p.a.createElement("br",null),"NSW",p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement("a",{href:"mailto:info@sortd.io"},"info@sortd.io")))))),p.a.createElement("div",{className:"bottom-bar"},"Made for you with ",p.a.createElement("span",{className:"heart"},"❤")," by",p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/afx/blog"},p.a.createElement(i.a,{id:"app.footer.company"}))))},n}(p.a.Component);var q=function(e){var t,a;function n(t){var a;a=e.call(this,t)||this;var n=t.location.pathname,o=h.d(n)?f:m;return Object(i.c)(o.data),a.state={appLocale:o},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["children","location"]),r=a.pathname,l=this.state.appLocale;return p.a.createElement(i.b,{locale:l.locale,messages:l.messages},p.a.createElement(o.a,{locale:c.a},p.a.createElement("div",{className:"page-wrapper "+(("/"===r||"index-cn"===r)&&"index-page-wrapper")},p.a.createElement(z,Object.assign({},n,{location:a})),p.a.cloneElement(t,Object.assign({},t.props,{isMobile:n.isMobile})),p.a.createElement(T,Object.assign({},n,{location:a})))))},n}(p.a.Component);t.a=function(e){return p.a.createElement(s.a,{query:"(max-width: 996px)"},function(t){var a="undefined"==typeof window;return p.a.createElement(q,Object.assign({},e,{isMobile:t&&!a}))})}},307:function(e,t){},311:function(e,t){},312:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-docs-tsx-6993667d0f6e49d9d7dc.js.map