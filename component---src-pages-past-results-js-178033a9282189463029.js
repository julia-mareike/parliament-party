(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{j0rf:function(e,t,a){"use strict";a.r(t);var r,n=a("DaAx"),o=a.n(n),l=a("Bl7J"),i=a("vrFN"),c=a("rkO7"),s=a("nCiN"),d=a("PFS8"),u=a("7Qib"),f=a("Jan8"),m=function(e){var t=e.year,a=f.b[t],r=a.votes,n=a.electorates,l=[];for(var i in r)l.push({name:i,votes:r[i],electorates:n[i]});return l.map((function(e){return o.a.createElement(s.a,{container:!0,direction:"row",spacing:2,key:e.name},o.a.createElement(s.a,{item:!0,xs:5},o.a.createElement(d.a,{variant:"body1"},Object(u.a)(e.name))),o.a.createElement(s.a,{container:!0,item:!0,xs:7},o.a.createElement(s.a,{item:!0,xs:8},o.a.createElement(d.a,{variant:"body1"},e.votes)),o.a.createElement(s.a,{item:!0,xs:4},o.a.createElement(d.a,{variant:"body1"},e.electorates))))}))},b=a("DHA7"),p=a("p2uw"),v=a("ID90"),h=(a("tSbI"),a("Q9PI")),g=a("uIog"),y=a("iJMy");function w(){if(r)return r;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function x(e,t){var a=e.scrollLeft;if("rtl"!==t)return a;switch(w()){case"negative":return e.scrollWidth-e.clientWidth+a;case"reverse":return e.scrollWidth-e.clientWidth-a;default:return a}}function E(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var j={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function O(e){var t=e.onChange,a=Object(p.a)(e,["onChange"]),r=n.useRef(),o=n.useRef(null),l=function(){r.current=o.current.offsetHeight-o.current.clientHeight};return n.useEffect((function(){var e=Object(g.a)((function(){var e=r.current;l(),e!==r.current&&t(r.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),n.useEffect((function(){l(),t(r.current)}),[t]),n.createElement("div",Object(b.a)({style:j,ref:o},a))}var C=a("W40M"),S=a("kxRe"),N=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,l=e.orientation,i=Object(p.a)(e,["classes","className","color","orientation"]);return n.createElement("span",Object(b.a)({className:Object(h.a)(a.root,a["color".concat(Object(S.a)(o))],r,"vertical"===l&&a.vertical),ref:t},i))})),k=Object(C.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(N),B=n.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,l=e.color,i=void 0===l?"inherit":l,c=e.component,s=void 0===c?"svg":c,d=e.fontSize,u=void 0===d?"default":d,f=e.htmlColor,m=e.titleAccess,v=e.viewBox,g=void 0===v?"0 0 24 24":v,y=Object(p.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return n.createElement(s,Object(b.a)({className:Object(h.a)(r.root,o,"inherit"!==i&&r["color".concat(Object(S.a)(i))],"default"!==u&&r["fontSize".concat(Object(S.a)(u))]),focusable:"false",viewBox:g,color:f,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},y),a,m?n.createElement("title",null,m):null)}));B.muiName="SvgIcon";var z=Object(C.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(B);function W(e,t){var a=function(t,a){return o.a.createElement(z,Object(b.a)({ref:a},t),e)};return a.muiName=z.muiName,o.a.memo(o.a.forwardRef(a))}var I=W(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),M=W(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"})),R=a("Qw1P"),F=n.createElement(I,{fontSize:"small"}),L=n.createElement(M,{fontSize:"small"}),A=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.direction,l=e.orientation,i=e.disabled,c=Object(p.a)(e,["classes","className","direction","orientation","disabled"]);return n.createElement(R.a,Object(b.a)({component:"div",className:Object(h.a)(a.root,r,i&&a.disabled,"vertical"===l&&a.vertical),ref:t,role:null,tabIndex:null},c),"left"===o?F:L)})),T=Object(C.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(A),D=a("OivF"),P=a("tAba"),H=n.forwardRef((function(e,t){var a=e["aria-label"],r=e["aria-labelledby"],o=e.action,l=e.centered,i=void 0!==l&&l,c=e.children,s=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,m=e.indicatorColor,j=void 0===m?"secondary":m,C=e.onChange,S=e.orientation,N=void 0===S?"horizontal":S,B=e.ScrollButtonComponent,z=void 0===B?T:B,W=e.scrollButtons,I=void 0===W?"auto":W,M=e.selectionFollowsFocus,R=e.TabIndicatorProps,F=void 0===R?{}:R,L=e.TabScrollButtonProps,A=e.textColor,H=void 0===A?"inherit":A,$=e.value,J=e.variant,q=void 0===J?"standard":J,Q=Object(p.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),V=Object(P.a)(),U="scrollable"===q,X="rtl"===V.direction,G="vertical"===N,K=G?"scrollTop":"scrollLeft",Y=G?"top":"left",Z=G?"bottom":"right",_=G?"clientHeight":"clientWidth",ee=G?"height":"width";var te=n.useState(!1),ae=te[0],re=te[1],ne=n.useState({}),oe=ne[0],le=ne[1],ie=n.useState({start:!1,end:!1}),ce=ie[0],se=ie[1],de=n.useState({overflow:"hidden",marginBottom:null}),ue=de[0],fe=de[1],me=new Map,be=n.useRef(null),pe=n.useRef(null),ve=function(){var e,t,a=be.current;if(a){var r=a.getBoundingClientRect();e={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:x(a,V.direction),scrollWidth:a.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(a&&!1!==$){var n=pe.current.children;if(n.length>0){var o=n[me.get($)];0,t=o?o.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},he=Object(D.a)((function(){var e,t=ve(),a=t.tabsMeta,r=t.tabMeta,n=0;if(r&&a)if(G)n=r.top-a.top+a.scrollTop;else{var o=X?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;n=r.left-a.left+o}var l=(e={},Object(v.a)(e,Y,n),Object(v.a)(e,ee,r?r[ee]:0),e);if(isNaN(oe[Y])||isNaN(oe[ee]))le(l);else{var i=Math.abs(oe[Y]-l[Y]),c=Math.abs(oe[ee]-l[ee]);(i>=1||c>=1)&&le(l)}})),ge=function(e){!function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=r.ease,l=void 0===o?E:o,i=r.duration,c=void 0===i?300:i,s=null,d=t[e],u=!1,f=function(){u=!0},m=function r(o){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=o);var i=Math.min(1,(o-s)/c);t[e]=l(i)*(a-d)+d,i>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}};d===a?n(new Error("Element already at target position")):requestAnimationFrame(m)}(K,be.current,e)},ye=function(e){var t=be.current[K];G?t+=e:(t+=e*(X?-1:1),t*=X&&"reverse"===w()?-1:1),ge(t)},we=function(){ye(-be.current[_])},xe=function(){ye(be.current[_])},Ee=n.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),je=Object(D.a)((function(){var e=ve(),t=e.tabsMeta,a=e.tabMeta;if(a&&t)if(a[Y]<t[Y]){var r=t[K]+(a[Y]-t[Y]);ge(r)}else if(a[Z]>t[Z]){var n=t[K]+(a[Z]-t[Z]);ge(n)}})),Oe=Object(D.a)((function(){if(U&&"off"!==I){var e,t,a=be.current,r=a.scrollTop,n=a.scrollHeight,o=a.clientHeight,l=a.scrollWidth,i=a.clientWidth;if(G)e=r>1,t=r<n-o-1;else{var c=x(be.current,V.direction);e=X?c<l-i-1:c>1,t=X?c>1:c<l-i-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));n.useEffect((function(){var e=Object(g.a)((function(){he(),Oe()})),t=Object(y.a)(be.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[he,Oe]);var Ce=n.useCallback(Object(g.a)((function(){Oe()})));n.useEffect((function(){return function(){Ce.clear()}}),[Ce]),n.useEffect((function(){re(!0)}),[]),n.useEffect((function(){he(),Oe()})),n.useEffect((function(){je()}),[je,oe]),n.useImperativeHandle(o,(function(){return{updateIndicator:he,updateScrollButtons:Oe}}),[he,Oe]);var Se=n.createElement(k,Object(b.a)({className:s.indicator,orientation:N,color:j},F,{style:Object(b.a)({},oe,F.style)})),Ne=0,ke=n.Children.map(c,(function(e){if(!n.isValidElement(e))return null;var t=void 0===e.props.value?Ne:e.props.value;me.set(t,Ne);var a=t===$;return Ne+=1,n.cloneElement(e,{fullWidth:"fullWidth"===q,indicator:a&&!ae&&Se,selected:a,selectionFollowsFocus:M,onChange:C,textColor:H,value:t})})),Be=function(){var e={};e.scrollbarSizeListener=U?n.createElement(O,{className:s.scrollable,onChange:Ee}):null;var t=ce.start||ce.end,a=U&&("auto"===I&&t||"desktop"===I||"on"===I);return e.scrollButtonStart=a?n.createElement(z,Object(b.a)({orientation:N,direction:X?"right":"left",onClick:we,disabled:!ce.start,className:Object(h.a)(s.scrollButtons,"on"!==I&&s.scrollButtonsDesktop)},L)):null,e.scrollButtonEnd=a?n.createElement(z,Object(b.a)({orientation:N,direction:X?"left":"right",onClick:xe,disabled:!ce.end,className:Object(h.a)(s.scrollButtons,"on"!==I&&s.scrollButtonsDesktop)},L)):null,e}();return n.createElement(f,Object(b.a)({className:Object(h.a)(s.root,d,G&&s.vertical),ref:t},Q),Be.scrollButtonStart,Be.scrollbarSizeListener,n.createElement("div",{className:Object(h.a)(s.scroller,U?s.scrollable:s.fixed),style:ue,ref:be,onScroll:Ce},n.createElement("div",{"aria-label":a,"aria-labelledby":r,className:Object(h.a)(s.flexContainer,G&&s.flexContainerVertical,i&&!U&&s.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var a=null,r="vertical"!==N?"ArrowLeft":"ArrowUp",n="vertical"!==N?"ArrowRight":"ArrowDown";switch("vertical"!==N&&"rtl"===V.direction&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:a=t.previousElementSibling||pe.current.lastChild;break;case n:a=t.nextElementSibling||pe.current.firstChild;break;case"Home":a=pe.current.firstChild;break;case"End":a=pe.current.lastChild}null!==a&&(a.focus(),e.preventDefault())}},ref:pe,role:"tablist"},ke),ae&&Se),Be.scrollButtonEnd)})),$=Object(C.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(v.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(H),J=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.disabled,l=void 0!==o&&o,i=e.disableFocusRipple,c=void 0!==i&&i,s=e.fullWidth,d=e.icon,u=e.indicator,f=e.label,m=e.onChange,v=e.onClick,g=e.onFocus,y=e.selected,w=e.selectionFollowsFocus,x=e.textColor,E=void 0===x?"inherit":x,j=e.value,O=e.wrapped,C=void 0!==O&&O,N=Object(p.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return n.createElement(R.a,Object(b.a)({focusRipple:!c,className:Object(h.a)(a.root,a["textColor".concat(Object(S.a)(E))],r,l&&a.disabled,y&&a.selected,f&&d&&a.labelIcon,s&&a.fullWidth,C&&a.wrapped),ref:t,role:"tab","aria-selected":y,disabled:l,onClick:function(e){m&&m(e,j),v&&v(e)},onFocus:function(e){w&&!y&&m&&m(e,j),g&&g(e)},tabIndex:y?0:-1},N),n.createElement("span",{className:a.wrapper},d,f),u)})),q=Object(C.a)((function(e){var t;return{root:Object(b.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(v.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(v.a)(t,"overflow","hidden"),Object(v.a)(t,"whiteSpace","normal"),Object(v.a)(t,"textAlign","center"),Object(v.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(J),Q=a("lUEA");a("EDuE"),t.default=function(){var e=Object(u.b)(),t=Object(n.useState)(f.c[0]),a=t[0],r=t[1],d=Object(n.useState)(0),b=d[0],p=d[1],v=Object(n.useState)(Object(u.c)(a)),h=v[0],g=v[1],y=Object(Q.a)(),w=y.hideMob,x=y.hideDesktop,E=y.parliament,j=function(e,t){var a=e.target.innerText;g(Object(u.c)(a)),r(a),p(t)},O=function(e){var t=e.years;return o.a.createElement($,{value:b,onChange:j,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on"},t.map((function(e){return o.a.createElement(q,{label:e,key:e},e)})))};return o.a.createElement(l.a,null,o.a.createElement(i.a,{title:"Parliament"}),o.a.createElement(s.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(s.a,{item:!0,xs:12,md:6,className:E},o.a.createElement(c.a,{coordinates:e,seats:h,year:a})),o.a.createElement(s.a,{container:!0,item:!0,spacing:4,xs:12,md:6,justify:"center"},o.a.createElement(s.a,{item:!0,xs:12,className:x},o.a.createElement(O,{years:f.c})),o.a.createElement(s.a,{item:!0,xs:12,sm:10},o.a.createElement(m,{year:a,setSeats:g})))),o.a.createElement(s.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",alignItems:"center",className:w},o.a.createElement(O,{years:f.c})))}}}]);
//# sourceMappingURL=component---src-pages-past-results-js-178033a9282189463029.js.map