(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{j0rf:function(e,t,a){"use strict";a.r(t);var r,o=a("DaAx"),n=a.n(o),l=a("Bl7J"),i=a("vrFN"),c=a("rkO7"),s=a("nCiN"),d=a("PFS8"),u=a("7Qib"),f=a("Jan8"),m=function(e){var t=e.year,a=f.a[t],r=a.votes,o=a.electorates,l=[];for(var i in r)l.push({name:i,votes:r[i],electorates:o[i]});return l.map((function(e){var t=e.electorates?e.electorates>1?" "+e.electorates+" electorates":" "+e.electorates+" electorate":"";return n.a.createElement(s.a,{container:!0,direction:"row",spacing:2,key:e.name},n.a.createElement(s.a,{item:!0,xs:5},n.a.createElement(d.a,{variant:"body1"},Object(u.a)(e.name))),n.a.createElement(s.a,{container:!0,item:!0,xs:7},n.a.createElement(s.a,{item:!0,xs:5},n.a.createElement(d.a,{variant:"body1"},e.votes.toFixed(1)," %")),n.a.createElement(s.a,{item:!0,xs:7},n.a.createElement(d.a,{variant:"caption"},t))))}))},b=a("DHA7"),p=a("p2uw"),v=a("ID90"),h=(a("tSbI"),a("Q9PI")),g=a("uIog"),w=a("iJMy");function y(){if(r)return r;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function x(e,t){var a=e.scrollLeft;if("rtl"!==t)return a;switch(y()){case"negative":return e.scrollWidth-e.clientWidth+a;case"reverse":return e.scrollWidth-e.clientWidth-a;default:return a}}function E(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var j={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function O(e){var t=e.onChange,a=Object(p.a)(e,["onChange"]),r=o.useRef(),n=o.useRef(null),l=function(){r.current=n.current.offsetHeight-n.current.clientHeight};return o.useEffect((function(){var e=Object(g.a)((function(){var e=r.current;l(),e!==r.current&&t(r.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),o.useEffect((function(){l(),t(r.current)}),[t]),o.createElement("div",Object(b.a)({style:j,ref:n},a))}var C=a("W40M"),S=a("kxRe"),N=o.forwardRef((function(e,t){var a=e.classes,r=e.className,n=e.color,l=e.orientation,i=Object(p.a)(e,["classes","className","color","orientation"]);return o.createElement("span",Object(b.a)({className:Object(h.a)(a.root,a["color".concat(Object(S.a)(n))],r,"vertical"===l&&a.vertical),ref:t},i))})),k=Object(C.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(N),B=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,l=e.color,i=void 0===l?"inherit":l,c=e.component,s=void 0===c?"svg":c,d=e.fontSize,u=void 0===d?"default":d,f=e.htmlColor,m=e.titleAccess,v=e.viewBox,g=void 0===v?"0 0 24 24":v,w=Object(p.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(s,Object(b.a)({className:Object(h.a)(r.root,n,"inherit"!==i&&r["color".concat(Object(S.a)(i))],"default"!==u&&r["fontSize".concat(Object(S.a)(u))]),focusable:"false",viewBox:g,color:f,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},w),a,m?o.createElement("title",null,m):null)}));B.muiName="SvgIcon";var z=Object(C.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(B);function W(e,t){var a=function(t,a){return n.a.createElement(z,Object(b.a)({ref:a},t),e)};return a.muiName=z.muiName,n.a.memo(n.a.forwardRef(a))}var F=W(o.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),I=W(o.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"})),M=a("Qw1P"),R=o.createElement(F,{fontSize:"small"}),L=o.createElement(I,{fontSize:"small"}),A=o.forwardRef((function(e,t){var a=e.classes,r=e.className,n=e.direction,l=e.orientation,i=e.disabled,c=Object(p.a)(e,["classes","className","direction","orientation","disabled"]);return o.createElement(M.a,Object(b.a)({component:"div",className:Object(h.a)(a.root,r,i&&a.disabled,"vertical"===l&&a.vertical),ref:t,role:null,tabIndex:null},c),"left"===n?R:L)})),T=Object(C.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(A),D=a("OivF"),P=a("tAba"),H=o.forwardRef((function(e,t){var a=e["aria-label"],r=e["aria-labelledby"],n=e.action,l=e.centered,i=void 0!==l&&l,c=e.children,s=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,m=e.indicatorColor,j=void 0===m?"secondary":m,C=e.onChange,S=e.orientation,N=void 0===S?"horizontal":S,B=e.ScrollButtonComponent,z=void 0===B?T:B,W=e.scrollButtons,F=void 0===W?"auto":W,I=e.selectionFollowsFocus,M=e.TabIndicatorProps,R=void 0===M?{}:M,L=e.TabScrollButtonProps,A=e.textColor,H=void 0===A?"inherit":A,$=e.value,J=e.variant,q=void 0===J?"standard":J,Q=Object(p.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),V=Object(P.a)(),U="scrollable"===q,X="rtl"===V.direction,G="vertical"===N,K=G?"scrollTop":"scrollLeft",Y=G?"top":"left",Z=G?"bottom":"right",_=G?"clientHeight":"clientWidth",ee=G?"height":"width";var te=o.useState(!1),ae=te[0],re=te[1],oe=o.useState({}),ne=oe[0],le=oe[1],ie=o.useState({start:!1,end:!1}),ce=ie[0],se=ie[1],de=o.useState({overflow:"hidden",marginBottom:null}),ue=de[0],fe=de[1],me=new Map,be=o.useRef(null),pe=o.useRef(null),ve=function(){var e,t,a=be.current;if(a){var r=a.getBoundingClientRect();e={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:x(a,V.direction),scrollWidth:a.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(a&&!1!==$){var o=pe.current.children;if(o.length>0){var n=o[me.get($)];0,t=n?n.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},he=Object(D.a)((function(){var e,t=ve(),a=t.tabsMeta,r=t.tabMeta,o=0;if(r&&a)if(G)o=r.top-a.top+a.scrollTop;else{var n=X?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;o=r.left-a.left+n}var l=(e={},Object(v.a)(e,Y,o),Object(v.a)(e,ee,r?r[ee]:0),e);if(isNaN(ne[Y])||isNaN(ne[ee]))le(l);else{var i=Math.abs(ne[Y]-l[Y]),c=Math.abs(ne[ee]-l[ee]);(i>=1||c>=1)&&le(l)}})),ge=function(e){!function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},n=r.ease,l=void 0===n?E:n,i=r.duration,c=void 0===i?300:i,s=null,d=t[e],u=!1,f=function(){u=!0},m=function r(n){if(u)o(new Error("Animation cancelled"));else{null===s&&(s=n);var i=Math.min(1,(n-s)/c);t[e]=l(i)*(a-d)+d,i>=1?requestAnimationFrame((function(){o(null)})):requestAnimationFrame(r)}};d===a?o(new Error("Element already at target position")):requestAnimationFrame(m)}(K,be.current,e)},we=function(e){var t=be.current[K];G?t+=e:(t+=e*(X?-1:1),t*=X&&"reverse"===y()?-1:1),ge(t)},ye=function(){we(-be.current[_])},xe=function(){we(be.current[_])},Ee=o.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),je=Object(D.a)((function(){var e=ve(),t=e.tabsMeta,a=e.tabMeta;if(a&&t)if(a[Y]<t[Y]){var r=t[K]+(a[Y]-t[Y]);ge(r)}else if(a[Z]>t[Z]){var o=t[K]+(a[Z]-t[Z]);ge(o)}})),Oe=Object(D.a)((function(){if(U&&"off"!==F){var e,t,a=be.current,r=a.scrollTop,o=a.scrollHeight,n=a.clientHeight,l=a.scrollWidth,i=a.clientWidth;if(G)e=r>1,t=r<o-n-1;else{var c=x(be.current,V.direction);e=X?c<l-i-1:c>1,t=X?c>1:c<l-i-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));o.useEffect((function(){var e=Object(g.a)((function(){he(),Oe()})),t=Object(w.a)(be.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[he,Oe]);var Ce=o.useCallback(Object(g.a)((function(){Oe()})));o.useEffect((function(){return function(){Ce.clear()}}),[Ce]),o.useEffect((function(){re(!0)}),[]),o.useEffect((function(){he(),Oe()})),o.useEffect((function(){je()}),[je,ne]),o.useImperativeHandle(n,(function(){return{updateIndicator:he,updateScrollButtons:Oe}}),[he,Oe]);var Se=o.createElement(k,Object(b.a)({className:s.indicator,orientation:N,color:j},R,{style:Object(b.a)({},ne,R.style)})),Ne=0,ke=o.Children.map(c,(function(e){if(!o.isValidElement(e))return null;var t=void 0===e.props.value?Ne:e.props.value;me.set(t,Ne);var a=t===$;return Ne+=1,o.cloneElement(e,{fullWidth:"fullWidth"===q,indicator:a&&!ae&&Se,selected:a,selectionFollowsFocus:I,onChange:C,textColor:H,value:t})})),Be=function(){var e={};e.scrollbarSizeListener=U?o.createElement(O,{className:s.scrollable,onChange:Ee}):null;var t=ce.start||ce.end,a=U&&("auto"===F&&t||"desktop"===F||"on"===F);return e.scrollButtonStart=a?o.createElement(z,Object(b.a)({orientation:N,direction:X?"right":"left",onClick:ye,disabled:!ce.start,className:Object(h.a)(s.scrollButtons,"on"!==F&&s.scrollButtonsDesktop)},L)):null,e.scrollButtonEnd=a?o.createElement(z,Object(b.a)({orientation:N,direction:X?"left":"right",onClick:xe,disabled:!ce.end,className:Object(h.a)(s.scrollButtons,"on"!==F&&s.scrollButtonsDesktop)},L)):null,e}();return o.createElement(f,Object(b.a)({className:Object(h.a)(s.root,d,G&&s.vertical),ref:t},Q),Be.scrollButtonStart,Be.scrollbarSizeListener,o.createElement("div",{className:Object(h.a)(s.scroller,U?s.scrollable:s.fixed),style:ue,ref:be,onScroll:Ce},o.createElement("div",{"aria-label":a,"aria-labelledby":r,className:Object(h.a)(s.flexContainer,G&&s.flexContainerVertical,i&&!U&&s.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var a=null,r="vertical"!==N?"ArrowLeft":"ArrowUp",o="vertical"!==N?"ArrowRight":"ArrowDown";switch("vertical"!==N&&"rtl"===V.direction&&(r="ArrowRight",o="ArrowLeft"),e.key){case r:a=t.previousElementSibling||pe.current.lastChild;break;case o:a=t.nextElementSibling||pe.current.firstChild;break;case"Home":a=pe.current.firstChild;break;case"End":a=pe.current.lastChild}null!==a&&(a.focus(),e.preventDefault())}},ref:pe,role:"tablist"},ke),ae&&Se),Be.scrollButtonEnd)})),$=Object(C.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(v.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(H),J=o.forwardRef((function(e,t){var a=e.classes,r=e.className,n=e.disabled,l=void 0!==n&&n,i=e.disableFocusRipple,c=void 0!==i&&i,s=e.fullWidth,d=e.icon,u=e.indicator,f=e.label,m=e.onChange,v=e.onClick,g=e.onFocus,w=e.selected,y=e.selectionFollowsFocus,x=e.textColor,E=void 0===x?"inherit":x,j=e.value,O=e.wrapped,C=void 0!==O&&O,N=Object(p.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return o.createElement(M.a,Object(b.a)({focusRipple:!c,className:Object(h.a)(a.root,a["textColor".concat(Object(S.a)(E))],r,l&&a.disabled,w&&a.selected,f&&d&&a.labelIcon,s&&a.fullWidth,C&&a.wrapped),ref:t,role:"tab","aria-selected":w,disabled:l,onClick:function(e){m&&m(e,j),v&&v(e)},onFocus:function(e){y&&!w&&m&&m(e,j),g&&g(e)},tabIndex:w?0:-1},N),o.createElement("span",{className:a.wrapper},d,f),u)})),q=Object(C.a)((function(e){var t;return{root:Object(b.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(v.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(v.a)(t,"overflow","hidden"),Object(v.a)(t,"whiteSpace","normal"),Object(v.a)(t,"textAlign","center"),Object(v.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(J),Q=a("lUEA");a("EDuE"),t.default=function(){var e=Object(u.b)(),t=Object(o.useState)(f.b[0]),a=t[0],r=t[1],d=Object(o.useState)(0),b=d[0],p=d[1],v=Object(o.useState)(Object(u.c)(a)),h=v[0],g=v[1],w=Object(Q.a)(),y=w.hideMob,x=w.hideDesktop,E=w.parliament,j=function(e,t){var a=e.target.innerText;g(Object(u.c)(a)),r(a),p(t)},O=function(e){var t=e.years;return n.a.createElement($,{value:b,onChange:j,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on"},t.map((function(e){return n.a.createElement(q,{label:e,key:e},e)})))};return n.a.createElement(l.a,null,n.a.createElement(i.a,{title:"Parliament"}),n.a.createElement(s.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(s.a,{item:!0,xs:12,md:6,className:E},n.a.createElement(c.a,{coordinates:e,seats:h,year:a})),n.a.createElement(s.a,{container:!0,item:!0,spacing:4,xs:12,md:6,justify:"center"},n.a.createElement(s.a,{item:!0,xs:12,className:x},n.a.createElement(O,{years:f.b})),n.a.createElement(s.a,{item:!0,xs:12,sm:10},n.a.createElement(m,{year:a,setSeats:g})))),n.a.createElement(s.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",alignItems:"center",className:y},n.a.createElement(O,{years:f.b})))}}}]);
//# sourceMappingURL=component---src-pages-past-results-js-b51800f1e432119a1c9e.js.map