"use strict";(self.webpackChunkkumarmm_0_han=self.webpackChunkkumarmm_0_han||[]).push([[578],{4608:function(e,a,t){t.r(a);var n=t(7294),r=t(7574),l=t(5999);a.default=function(){return n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4110:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(7462),r=t(7294),l=t(6010),i=t(5999),o=t(1875),s=t(232),c=t(5350),m=t(2822),b=t(5662),d=t(1839),u=t(3783),g=t(907),v=t(2207),h=t(5537),f=t(4478),_=t(4013),E={toggle:"toggle_iQ2x",navbarHideable:"navbarHideable_Daeo",navbarHidden:"navbarHidden_De9J",navbarSidebarToggle:"navbarSidebarToggle_MTpz"},k="right";function p(){return(0,m.LU)().navbar.items}function N(){var e=(0,m.LU)().colorMode.disableSwitch,a=(0,c.Z)(),t=a.isDarkTheme,n=a.setLightTheme,l=a.setDarkTheme;return{isDarkTheme:t,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function Z(e){var a=e.sidebarShown,t=e.toggleSidebar;(0,d.Z)(a);var o=p(),c=N(),b=function(e){var a,t=e.sidebarShown,n=e.toggleSidebar,l=null==(a=(0,m.g8)())?void 0:a({toggleSidebar:n}),i=(0,m.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],c=o[1];(0,r.useEffect)((function(){l&&!i&&c(!0)}),[l,i]);var b=!!l;return(0,r.useEffect)((function(){b?t||c(!0):c(!1)}),[t,b]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:a,toggleSidebar:t});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(s.Z,{className:E.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:t},r.createElement(_.Z,{color:"var(--ifm-color-emphasis-600)",className:E.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":b.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,a){return r.createElement(v.Z,(0,n.Z)({mobile:!0},e,{onClick:t,key:a}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:b.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),b.content)))}var w=function(){var e,a=(0,m.LU)().navbar,t=a.hideOnScroll,i=a.style,c=function(){var e=(0,u.Z)(),a="mobile"===e,t=(0,r.useState)(!1),n=t[0],l=t[1];(0,m.Rb)((function(){if(n)return l(!1),!1}));var i=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:a,toggle:i,shown:n}}(),d=N(),_=(0,g.gA)(),w=(0,b.Z)(t),S=w.navbarRef,y=w.isNavbarVisible,C=p(),T=C.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:k)})),rightItems:e.filter((function(e){var a;return"right"===(null!=(a=e.position)?a:k)}))}}(C),F=D.leftItems,H=D.rightItems;return r.createElement("nav",{ref:S,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":c.shown},e[E.navbarHideable]=t,e[E.navbarHidden]=t&&!y,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==C?void 0:C.length)>0||_)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(f.Z,null)),r.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),F.map((function(e,a){return r.createElement(v.Z,(0,n.Z)({},e,{key:a}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},H.map((function(e,a){return r.createElement(v.Z,(0,n.Z)({},e,{key:a}))})),!d.disabled&&r.createElement(s.Z,{className:E.toggle,checked:d.isDarkTheme,onChange:d.toggle}),!T&&r.createElement(o.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(Z,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}}}]);