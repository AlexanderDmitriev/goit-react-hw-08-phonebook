(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[365],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5365:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return K}});var r=t(2791),n=t(3366),i=t(7462),a=t(8182),c=t(4419),s=t(7630),l=t(1046),u=t(4036),d=t(703),p=t(1217),f=t(5878);function m(e){return(0,p.Z)("MuiAppBar",e)}(0,f.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var v=t(184),g=["className","color","enableColorOnDark","position"],h=(0,s.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["position".concat((0,u.Z)(t.position))],o["color".concat((0,u.Z)(t.color))]]}})((function(e){var o=e.theme,t=e.ownerState,r="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,i.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:r,color:o.palette.getContrastText(r)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===o.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,i.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"}))})),Z=r.forwardRef((function(e,o){var t=(0,l.Z)({props:e,name:"MuiAppBar"}),r=t.className,s=t.color,d=void 0===s?"primary":s,p=t.enableColorOnDark,f=void 0!==p&&p,Z=t.position,b=void 0===Z?"fixed":Z,x=(0,n.Z)(t,g),y=(0,i.Z)({},t,{color:d,position:b,enableColorOnDark:f}),k=function(e){var o=e.color,t=e.position,r=e.classes,n={root:["root","color".concat((0,u.Z)(o)),"position".concat((0,u.Z)(t))]};return(0,c.Z)(n,m,r)}(y);return(0,v.jsx)(h,(0,i.Z)({square:!0,component:"header",ownerState:y,elevation:4,className:(0,a.Z)(k.root,r,"fixed"===b&&"mui-fixed"),ref:o},x))})),b=t(4554),x=t(4942);function y(e){return(0,p.Z)("MuiToolbar",e)}(0,f.Z)("MuiToolbar",["root","gutters","regular","dense"]);var k=["className","component","disableGutters","variant"],z=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,!t.disableGutters&&o.gutters,o[t.variant]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,x.Z)({paddingLeft:o.spacing(2),paddingRight:o.spacing(2)},o.breakpoints.up("sm"),{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(e){var o=e.theme;return"regular"===e.ownerState.variant&&o.mixins.toolbar})),w=r.forwardRef((function(e,o){var t=(0,l.Z)({props:e,name:"MuiToolbar"}),r=t.className,s=t.component,u=void 0===s?"div":s,d=t.disableGutters,p=void 0!==d&&d,f=t.variant,m=void 0===f?"regular":f,g=(0,n.Z)(t,k),h=(0,i.Z)({},t,{component:u,disableGutters:p,variant:m}),Z=function(e){var o=e.classes,t={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(t,y,o)}(h);return(0,v.jsx)(z,(0,i.Z)({as:u,className:(0,a.Z)(Z.root,r),ref:o,ownerState:h},g))})),M=t(890),R=t(6151),C=t(2065),S=t(3701);function j(e){return(0,p.Z)("MuiIconButton",e)}var I=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),F=["edge","children","className","color","disabled","disableFocusRipple","size"],N=(0,s.ZP)(S.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,"default"!==t.color&&o["color".concat((0,u.Z)(t.color))],t.edge&&o["edge".concat((0,u.Z)(t.edge))],o["size".concat((0,u.Z)(t.size))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.active," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,C.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var o=e.theme,t=e.ownerState;return(0,i.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,i.Z)({color:(o.vars||o).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[t.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,C.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,x.Z)({},"&.".concat(I.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),T=r.forwardRef((function(e,o){var t=(0,l.Z)({props:e,name:"MuiIconButton"}),r=t.edge,s=void 0!==r&&r,d=t.children,p=t.className,f=t.color,m=void 0===f?"default":f,g=t.disabled,h=void 0!==g&&g,Z=t.disableFocusRipple,b=void 0!==Z&&Z,x=t.size,y=void 0===x?"medium":x,k=(0,n.Z)(t,F),z=(0,i.Z)({},t,{edge:s,color:m,disabled:h,disableFocusRipple:b,size:y}),w=function(e){var o=e.classes,t=e.disabled,r=e.color,n=e.edge,i=e.size,a={root:["root",t&&"disabled","default"!==r&&"color".concat((0,u.Z)(r)),n&&"edge".concat((0,u.Z)(n)),"size".concat((0,u.Z)(i))]};return(0,c.Z)(a,j,o)}(z);return(0,v.jsx)(N,(0,i.Z)({className:(0,a.Z)(w.root,p),centerRipple:!0,focusRipple:!b,disabled:h,ref:o,ownerState:z},k,{children:d}))})),D=t(4773),B=t(838),_=t(2982),L=t(885),A=t(8529),G=t(3031),P=t(2071);function O(e){return(0,p.Z)("MuiLink",e)}var V=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},H=(0,s.ZP)(M.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["underline".concat((0,u.Z)(t.underline))],"button"===t.component&&o.button]}})((function(e){var o=e.theme,t=e.ownerState,r=(0,A.D)(o,"palette.".concat(function(e){return E[e]||e}(t.color)))||t.color;return(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,C.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&(0,x.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(V.focusVisible),{outline:"auto"}))})),U=r.forwardRef((function(e,o){var t=(0,l.Z)({props:e,name:"MuiLink"}),s=t.className,d=t.color,p=void 0===d?"primary":d,f=t.component,m=void 0===f?"a":f,g=t.onBlur,h=t.onFocus,Z=t.TypographyClasses,b=t.underline,x=void 0===b?"always":b,y=t.variant,k=void 0===y?"inherit":y,z=t.sx,w=(0,n.Z)(t,q),M=(0,G.Z)(),R=M.isFocusVisibleRef,C=M.onBlur,S=M.onFocus,j=M.ref,I=r.useState(!1),F=(0,L.Z)(I,2),N=F[0],T=F[1],D=(0,P.Z)(o,j),B=(0,i.Z)({},t,{color:p,component:m,focusVisible:N,underline:x,variant:k}),A=function(e){var o=e.classes,t=e.component,r=e.focusVisible,n=e.underline,i={root:["root","underline".concat((0,u.Z)(n)),"button"===t&&"button",r&&"focusVisible"]};return(0,c.Z)(i,O,o)}(B);return(0,v.jsx)(H,(0,i.Z)({color:p,className:(0,a.Z)(A.root,s),classes:Z,component:m,onBlur:function(e){C(e),!1===R.current&&T(!1),g&&g(e)},onFocus:function(e){S(e),!0===R.current&&T(!0),h&&h(e)},ref:D,ownerState:B,variant:k,sx:[].concat((0,_.Z)(Object.keys(E).includes(p)?[]:[{color:p}]),(0,_.Z)(Array.isArray(z)?z:[z]))},w))})),W=t(3504),Y=t(5048),J=t(9372),K=function(e){var o=e.isDark,t=void 0!==o&&o,r=e.changeTheme,n=(0,Y.I0)(),i=(0,Y.v9)((function(e){return e.authification.isLoggedIn})),a=(0,Y.v9)((function(e){return e.authification.user.name})),c=i?"/contacts":"/";return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(b.Z,{sx:{flexGrow:1},children:(0,v.jsx)(Z,{position:"static",children:(0,v.jsxs)(w,{children:[(0,v.jsx)(U,{component:W.rU,to:c,color:"secondary",variant:"h3",underline:"none",sx:{flexGrow:1},children:"My contacts"}),!i&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(R.Z,{component:W.rU,to:"/register",color:"inherit",children:"Registration"}),(0,v.jsx)(R.Z,{component:W.rU,to:"/login",color:"inherit",children:"Login"})]}),i&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(M.Z,{variant:"subtitle1",component:"p",align:"right",sx:{flexGrow:1},children:["Hello, ",a]}),(0,v.jsx)(R.Z,{color:"inherit",onClick:function(){n(J.Z.logoutUser())},children:"Logout"})]}),(0,v.jsx)(T,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{m:2},onClick:function(){r()},children:t?(0,v.jsx)(D.Z,{}):(0,v.jsx)(B.Z,{})})]})})})})}},838:function(e,o,t){"use strict";var r=t(5318);o.Z=void 0;var n=r(t(5649)),i=t(184),a=(0,n.default)((0,i.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode");o.Z=a},4773:function(e,o,t){"use strict";var r=t(5318);o.Z=void 0;var n=r(t(5649)),i=t(184),a=(0,n.default)((0,i.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode");o.Z=a},5649:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(e,o,t){"use strict";t.r(o),t.d(o,{capitalize:function(){return n.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v},unsupportedProp:function(){return g},useControlled:function(){return h.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var r=t(5902),n=t(4036),i=t(8949).Z,a=t(9201),c=t(3199);var s=function(e,o){return function(){return null}},l=t(9103),u=t(8301),d=t(7602);t(7462);var p=function(e,o){return function(){return null}},f=t(2971).Z,m=t(162),v=t(6248).Z;var g=function(e,o,t,r,n){return null},h=t(8744),Z=t(9683),b=t(2071),x=t(3031),y={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=365.7ca272ef.chunk.js.map