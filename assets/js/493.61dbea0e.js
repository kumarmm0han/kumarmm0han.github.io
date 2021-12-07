"use strict";(self.webpackChunkkumarmm_0_han=self.webpackChunkkumarmm_0_han||[]).push([[493],{1875:function(e,t){t.Z=function(){return null}},4013:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(3366),o=n(7294),l=["width","height","color","strokeWidth","className"];function c(e){var t=e.width,n=void 0===t?21:t,c=e.height,i=void 0===c?21:c,u=e.color,s=void 0===u?"currentColor":u,m=e.strokeWidth,d=void 0===m?1.2:m,f=(e.className,(0,a.Z)(e,l));return o.createElement("svg",(0,r.Z)({viewBox:"0 0 15 15",width:n,height:i},f),o.createElement("g",{stroke:s,strokeWidth:d},o.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}},541:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a="iconExternalLink_wgqa",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),l=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,u=e.className,s=(0,a.Z)(e,l);return o.createElement("svg",(0,r.Z)({className:u,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},s),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},7574:function(e,t,n){n.d(t,{Z:function(){return Q}});var r=n(7294),a=n(6010),o=n(6775),l=n(5999),c=n(2822),i="skipToContent_OuoZ";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(4013),d="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",h="announcementBarClose_A3A1",v="announcementBarContent_6uhP";var g=function(){var e=(0,c.nT)(),t=e.isActive,n=e.close,o=(0,c.LU)().announcementBar;if(!t)return null;var i=o.content,u=o.backgroundColor,s=o.textColor,g=o.isCloseable;return r.createElement("div",{className:d,style:{backgroundColor:u,color:s},role:"banner"},g&&r.createElement("div",{className:f}),r.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:i}}),g?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",h),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(m.Z,{width:14,height:14,strokeWidth:3.1})):null)},E=n(4110),p=n(7462),k=n(3366),Z=n(9960),b=n(4996),w=n(3919),_="footerLogoLink_SRtH",N=n(9750),C=n(541),y=["to","href","label","prependBaseUrlToHref"];function I(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,k.Z)(e,y),c=(0,b.Z)(t),i=(0,b.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(Z.Z,(0,p.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,w.Z)(n)?r.createElement("span",null,a,r.createElement(C.Z,null)):a)}var T=function(e){var t=e.sources,n=e.alt,a=e.width,o=e.height;return r.createElement(N.Z,{className:"footer__logo",alt:n,sources:t,width:a,height:o})};var L=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,u=void 0===i?{}:i,s={light:(0,b.Z)(u.src),dark:(0,b.Z)(u.srcDark||u.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(I,e))}))):null)}))),(u||n)&&r.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},u.href?r.createElement(Z.Z,{href:u.href,className:_},r.createElement(T,{alt:u.alt,sources:s,width:u.width,height:u.height})):r.createElement(T,{alt:u.alt,sources:s})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},D=n(412),B=(0,c.WA)("theme"),A="light",x="dark",S=function(e){return e===x?x:A},M=function(e){(0,c.WA)("theme").set(S(e))},P=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return D.Z.canUseDOM?S(document.documentElement.getAttribute("data-theme")):S(e)}(t)),l=o[0],i=o[1],u=(0,r.useCallback)((function(){i(A),M(A)}),[]),s=(0,r.useCallback)((function(){i(x),M(x)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",S(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=B.get();null!==e&&i(S(e))}catch(t){console.error(t)}}),[n,i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?x:A)}))}),[n,a]),{isDarkTheme:l===x,setLightTheme:u,setDarkTheme:s}},R=n(2924);var U=function(e){var t=P(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(R.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},H="docusaurus.tab.",W=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(H)){var n=t.substring(H.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},V=(0,r.createContext)(void 0);var z=function(e){var t=W(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(V.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function F(e){var t=e.children;return r.createElement(U,null,r.createElement(c.pl,null,r.createElement(z,null,r.createElement(c.OC,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t))))))}var O=n(2859),G=n(2263);function j(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(O.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var q=n(1217);function J(){var e=(0,G.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(O.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function X(e){var t=e.permalink,n=(0,G.Z)().siteConfig.url,a=function(){var e=(0,G.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,b.Z)(t)}(),l=t?""+n+t:a;return r.createElement(O.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function Y(e){var t=(0,G.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,i=(0,c.LU)(),u=i.metadatas,s=i.image,m=e.title,d=e.description,f=e.image,h=e.keywords,v=e.searchMetadatas,g=(0,b.Z)(n),E=(0,c.pe)(m),k=o,Z=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(O.Z,null,r.createElement("html",{lang:k,dir:Z}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(q.Z,{image:s}),f&&r.createElement(q.Z,{image:f}),r.createElement(q.Z,{description:d,keywords:h}),r.createElement(X,null),r.createElement(J,null),r.createElement(j,(0,p.Z)({tag:c.HX,locale:o},v)),r.createElement(O.Z,null,u.map((function(e,t){return r.createElement("meta",(0,p.Z)({key:"metadata_"+t},e))}))))}var K=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Q=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return K(),r.createElement(F,null,r.createElement(Y,e),r.createElement(s,null),r.createElement(g,null),r.createElement(E.Z,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!n&&r.createElement(L,null))}},5537:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),l=n(9960),c=n(9750),i=n(4996),u=n(2263),s=n(2822),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,d=n.title,f=n.logo,h=void 0===f?{src:""}:f,v=e.imageClassName,g=e.titleClassName,E=(0,a.Z)(e,m),p=(0,i.Z)(h.href||"/"),k={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)},Z=o.createElement(c.Z,{sources:k,height:h.height,width:h.width,alt:h.alt||d||t});return o.createElement(l.Z,(0,r.Z)({to:p},E,h.target&&{target:h.target}),h.src&&(v?o.createElement("div",{className:v},Z):o.createElement(o.Fragment,null,Z)),null!=d&&o.createElement("b",{className:g},d))}},5525:function(e,t,n){n.d(t,{O:function(){return E}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(9960),i=n(4996),u=n(541),s=n(3919),m=n(2822),d=n(2207),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],h=["className","isDropdownItem"],v=["className","isDropdownItem"],g=["mobile","position"];function E(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,d=e.to,h=e.href,v=e.label,g=e.activeClassName,E=void 0===g?"":g,p=e.prependBaseUrlToHref,k=(0,a.Z)(e,f),Z=(0,i.Z)(d),b=(0,i.Z)(n),w=(0,i.Z)(h,{forcePrependBaseUrl:!0}),_=v&&h&&!(0,s.Z)(h),N="dropdown__link--active"===E;return o.createElement(c.Z,(0,r.Z)({},h?{href:p?w:h}:Object.assign({isNavLink:!0,activeClassName:null!=(t=k.className)&&t.includes(E)?"":E,to:Z},n||l?{isActive:function(e,t){return l?(0,m.Fx)(l,t.pathname):t.pathname.startsWith(b)}}:null),k),_?o.createElement("span",null,v,o.createElement(u.Z,N&&{width:12,height:12})):v)}function p(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,a.Z)(e,h),u=o.createElement(E,(0,r.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,u):u}function k(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(E,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,a.Z)(e,g)),i=l?k:p;return o.createElement(i,(0,r.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,d.E)(l)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(6010),u=n(2207),s=n(2822),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,h=e.docsPluginId,v=(0,a.Z)(e,d),g=(0,c.Iw)(h),E=g.activeVersion,p=g.activeDoc,k=(0,s.J)(h).preferredVersion,Z=(0,c.yW)(h),b=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([E,k,Z].filter(Boolean)),n),w=(0,u.E)(v.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===b.sidebar,t)),activeClassName:w,label:null!=f?f:b.id,to:b.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(3154),i=n(907),u=n(2822),s=n(5999),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,h=e.docsPluginId,v=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,E=e.dropdownItemsAfter,p=(0,a.Z)(e,m),k=(0,i.Iw)(h),Z=(0,i.gB)(h),b=(0,i.yW)(h),w=(0,u.J)(h),_=w.preferredVersion,N=w.savePreferredVersionName;var C,y=(C=Z.map((function(e){var t=(null==k?void 0:k.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==k?void 0:k.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(g,C,E)),I=null!=(t=null!=(n=k.activeVersion)?n:_)?t:b,T=f&&y?(0,s.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,L=f&&y?void 0:d(I).path;return y.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:T,to:L,isActive:v?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},p,{mobile:f,label:T,to:L,items:y,isActive:v?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(2822),u=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,m=e.docsPluginId,d=(0,a.Z)(e,u),f=(0,c.zu)(m),h=(0,i.J)(m).preferredVersion,v=(0,c.yW)(m),g=null!=(t=null!=f?f:h)?t:v,E=null!=n?n:g.label,p=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:E,to:p}))}},3154:function(e,t,n){var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(2822),i=n(5525),u=n(2207),s=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!!(0,c.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function h(e){var t,n=e.items,c=e.position,m=e.className,d=(0,a.Z)(e,s),f=(0,o.useRef)(null),h=(0,o.useRef)(null),v=(0,o.useState)(!1),g=v[0],E=v[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":g})},o.createElement(i.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!g))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:h,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(u.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,n=e.items,s=e.className,d=(e.position,(0,a.Z)(e,m)),h=(0,c.be)(),v=f(n,h),g=(0,c.uR)({initialState:function(){return!v}}),E=g.collapsed,p=g.toggleCollapsed,k=g.setCollapsed;return(0,o.useEffect)((function(){v&&k(!v)}),[h,v,k]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":E})},o.createElement(i.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",s)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:E},n.map((function(e,t){return o.createElement(u.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?v:h;return o.createElement(l,r)}},2207:function(e,t,n){n.d(t,{Z:function(){return Z},E:function(){return k}});var r=n(3366),a=n(7294),o=n(5525),l=n(3154),c=n(7462),i=["width","height"],u=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,u=(0,r.Z)(e,i);return a.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},u),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(2263),m=n(2822),d="iconLanguage_EbrZ",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function h(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,r.Z)(e,f),h=(0,s.Z)().i18n,v=h.currentLocale,g=h.locales,E=h.localeConfigs,p=(0,m.l5)();function k(e){return E[e].label}var Z=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:k(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(n,Z,o),w=t?"Languages":k(v);return a.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(u,{className:d}),a.createElement("span",null,w)),items:b}))}var v=n(1875);function g(e){return e.mobile?null:a.createElement(v.Z,null)}var E=["type"],p={default:function(){return o.Z},localeDropdown:function(){return h},search:function(){return g},dropdown:function(){return l.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var k=function(e){return e?"menu__link--active":"navbar__link--active"};function Z(e){var t=e.type,n=(0,r.Z)(e,E),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return a.createElement(l,n)}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},9750:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(2389),i=n(5350),u={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},s=["sources","className","alt"],m=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,h=void 0===f?"":f,v=(0,a.Z)(e,s),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:h,className:(0,l.Z)(u.themedImage,u["themedImage--"+e],d)},v))})))}},232:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2822),l=n(2389),c=n(6010),i={toggle:"toggle_iYfV",toggleScreenReader:"toggleScreenReader_h9qa",toggleDisabled:"toggleDisabled_xj38",toggleTrack:"toggleTrack_t-f2",toggleTrackCheck:"toggleTrackCheck_mk7D",toggleChecked:"toggleChecked_a04y",toggleTrackX:"toggleTrackX_dm8H",toggleTrackThumb:"toggleTrackThumb_W6To",toggleFocused:"toggleFocused_pRSw",toggleIcon:"toggleIcon_pHJ9"},u=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,c.Z)(i.toggleIcon,i.dark),style:n},t)},s=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,c.Z)(i.toggleIcon,i.light),style:n},t)},m=(0,a.memo)((function(e){var t,n=e.className,r=e.icons,o=e.checked,l=e.disabled,u=e.onChange,s=(0,a.useState)(o),m=s[0],d=s[1],f=(0,a.useState)(!1),h=f[0],v=f[1],g=(0,a.useRef)(null);return a.createElement("div",{className:(0,c.Z)(i.toggle,n,(t={},t[i.toggleChecked]=m,t[i.toggleFocused]=h,t[i.toggleDisabled]=l,t))},a.createElement("div",{className:i.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=g.current)?void 0:e.click()}},a.createElement("div",{className:i.toggleTrackCheck},r.checked),a.createElement("div",{className:i.toggleTrackX},r.unchecked),a.createElement("div",{className:i.toggleTrackThumb})),a.createElement("input",{ref:g,checked:m,type:"checkbox",className:i.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:u,onClick:function(){return d(!m)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=g.current)||t.click())}}))}));function d(e){var t=(0,o.LU)().colorMode.switchConfig,n=t.darkIcon,c=t.darkIconStyle,i=t.lightIcon,d=t.lightIconStyle,f=(0,l.Z)();return a.createElement(m,(0,r.Z)({disabled:!f,icons:{checked:a.createElement(u,{icon:n,style:c}),unchecked:a.createElement(s,{icon:i,style:d})}},e))}},5662:function(e,t,n){var r=n(7294),a=n(2822);t.Z=function(e){var t=(0,r.useState)(e),n=t[0],o=t[1],l=(0,r.useRef)(!1),c=(0,r.useRef)(0),i=(0,r.useCallback)((function(e){null!==e&&(c.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)((function(t,n){if(e){var r=t.scrollY;if(r<c.current)o(!0);else if(l.current)l.current=!1;else{var a=null==n?void 0:n.scrollY,i=document.documentElement.scrollHeight-c.current,u=window.innerHeight;a&&r>=a?o(!1):r+u<i&&o(!0)}}})),(0,a.SL)((function(t){if(e)return t.location.hash?(l.current=!0,void o(!1)):void o(!0)})),{navbarRef:i,isNavbarVisible:n}}},1839:function(e,t,n){var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},5350:function(e,t,n){var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);