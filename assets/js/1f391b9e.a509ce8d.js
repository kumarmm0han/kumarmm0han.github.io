"use strict";(self.webpackChunkkumarmm_0_han=self.webpackChunkkumarmm_0_han||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7294),l=n(6010),r=n(7574),i=n(3905),s=n(7707),c=n(1575),o=n(2822),m="mdxPageWrapper_eQvw";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,b=n.title,u=n.description,v=n.wrapperClassName,g=n.hide_table_of_contents,f=d.permalink;return t.createElement(r.Z,{title:b,description:u,permalink:f,wrapperClassName:null!=v?v:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(i.Zo,{components:s.Z},t.createElement(a,null))),!g&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(c.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},1575:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),l=n(3366),r=n(7294),i=n(6010),s=n(5002),c="tableOfContents_vrFS",o=["className"];var m=function(e){var a=e.className,n=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",a)},r.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),r=n(7294),i=n(2822),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?r.createElement("ul",{className:l?void 0:n},a.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function o(e){var a=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,b=e.linkActiveClassName,u=void 0===b?void 0:b,v=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,l.Z)(e,s),_=(0,i.LU)(),h=null!=v?v:_.tableOfContents.minHeadingLevel,N=null!=g?g:_.tableOfContents.maxHeadingLevel,k=(0,i.DA)({toc:a,minHeadingLevel:h,maxHeadingLevel:N}),E=(0,r.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:N}}),[d,u,h,N]);return(0,i.Si)(E),r.createElement(c,(0,t.Z)({toc:k,className:o,linkClassName:d},f))}},4110:function(e,a,n){n.d(a,{Z:function(){return Z}});var t=n(7462),l=n(7294),r=n(6010),i=n(5999),s=n(1875),c=n(232),o=n(5350),m=n(2822),d=n(5662),b=n(1839),u=n(3783),v=n(907),g=n(2207),f=n(5537),_=n(4478),h=n(4013),N={toggle:"toggle_iQ2x",navbarHideable:"navbarHideable_Daeo",navbarHidden:"navbarHidden_De9J",navbarSidebarToggle:"navbarSidebarToggle_MTpz"},k="right";function E(){return(0,m.LU)().navbar.items}function p(){var e=(0,m.LU)().colorMode.disableSwitch,a=(0,o.Z)(),n=a.isDarkTheme,t=a.setLightTheme,r=a.setDarkTheme;return{isDarkTheme:n,toggle:(0,l.useCallback)((function(e){return e.target.checked?r():t()}),[t,r]),disabled:e}}function C(e){var a=e.sidebarShown,n=e.toggleSidebar;(0,b.Z)(a);var s=E(),o=p(),d=function(e){var a,n=e.sidebarShown,t=e.toggleSidebar,r=null==(a=(0,m.g8)())?void 0:a({toggleSidebar:t}),i=(0,m.D9)(r),s=(0,l.useState)((function(){return!1})),c=s[0],o=s[1];(0,l.useEffect)((function(){r&&!i&&o(!0)}),[r,i]);var d=!!r;return(0,l.useEffect)((function(){d?n||o(!0):o(!1)}),[n,d]),{shown:c,hide:(0,l.useCallback)((function(){o(!1)}),[]),content:r}}({sidebarShown:a,toggleSidebar:n});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&l.createElement(c.Z,{className:N.navbarSidebarToggle,checked:o.isDarkTheme,onChange:o.toggle}),l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},l.createElement(h.Z,{color:"var(--ifm-color-emphasis-600)",className:N.navbarSidebarCloseSvg}))),l.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},s.map((function(e,a){return l.createElement(g.Z,(0,t.Z)({mobile:!0},e,{onClick:n,key:a}))})))),l.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},l.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}var Z=function(){var e,a=(0,m.LU)().navbar,n=a.hideOnScroll,i=a.style,o=function(){var e=(0,u.Z)(),a="mobile"===e,n=(0,l.useState)(!1),t=n[0],r=n[1];(0,m.Rb)((function(){if(t)return r(!1),!1}));var i=(0,l.useCallback)((function(){r((function(e){return!e}))}),[]);return(0,l.useEffect)((function(){"desktop"===e&&r(!1)}),[e]),{shouldRender:a,toggle:i,shown:t}}(),b=p(),h=(0,v.gA)(),Z=(0,d.Z)(n),S=Z.navbarRef,w=Z.isNavbarVisible,H=E(),L=H.some((function(e){return"search"===e.type})),y=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:k)})),rightItems:e.filter((function(e){var a;return"right"===(null!=(a=e.position)?a:k)}))}}(H),x=y.leftItems,T=y.rightItems;return l.createElement("nav",{ref:S,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":o.shown},e[N.navbarHideable]=n,e[N.navbarHidden]=n&&!w,e))},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},((null==H?void 0:H.length)>0||h)&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},l.createElement(_.Z,null)),l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),x.map((function(e,a){return l.createElement(g.Z,(0,t.Z)({},e,{key:a}))}))),l.createElement("div",{className:"navbar__items navbar__items--right"},T.map((function(e,a){return l.createElement(g.Z,(0,t.Z)({},e,{key:a}))})),!b.disabled&&l.createElement(c.Z,{className:N.toggle,checked:b.isDarkTheme,onChange:b.toggle}),!L&&l.createElement(s.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&l.createElement(C,{sidebarShown:o.shown,toggleSidebar:o.toggle}))}}}]);