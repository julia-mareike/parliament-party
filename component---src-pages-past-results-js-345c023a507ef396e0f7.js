(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{j0rf:function(e,t,a){"use strict";a.r(t);var r,n=a("DaAx"),o=a.n(n),l=a("Bl7J"),i=a("vrFN"),c=a("rkO7"),s=a("nCiN"),d=a("PFS8"),u=a("7Qib"),f=a("Jan8"),b=function(e){var t=e.year,a=f.b[t],r=a.votes,n=a.electorates,l=[];for(var i in r)l.push({name:i,votes:r[i],electorates:n[i]});return l.map((function(e){var t=e.electorates?e.electorates>1?" "+e.electorates+" electorates":" "+e.electorates+" electorate":"";return o.a.createElement(s.a,{container:!0,direction:"row",spacing:2,key:e.name},o.a.createElement(s.a,{item:!0,xs:5},o.a.createElement(d.a,{variant:"body1"},Object(u.a)(e.name))),o.a.createElement(s.a,{container:!0,item:!0,xs:7},o.a.createElement(s.a,{item:!0,xs:5},o.a.createElement(d.a,{variant:"body1"},e.votes.toFixed(1)," %")),o.a.createElement(s.a,{item:!0,xs:7},o.a.createElement(d.a,{variant:"caption"},t))))}))},m=a("DHA7"),p=a("p2uw"),v=a("ID90"),h=(a("tSbI"),a("Q9PI")),g=a("uIog"),w=a("iJMy");function y(){if(r)return r;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function x(e,t){var a=e.scrollLeft;if("rtl"!==t)return a;switch(y()){case"negative":return e.scrollWidth-e.clientWidth+a;case"reverse":return e.scrollWidth-e.clientWidth-a;default:return a}}function j(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var E={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function O(e){var t=e.onChange,a=Object(p.a)(e,["onChange"]),r=n.useRef(),o=n.useRef(null),l=function(){r.current=o.current.offsetHeight-o.current.clientHeight};return n.useEffect((function(){var e=Object(g.a)((function(){var e=r.current;l(),e!==r.current&&t(r.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),n.useEffect((function(){l(),t(r.current)}),[t]),n.createElement("div",Object(m.a)({style:E,ref:o},a))}var C=a("W40M"),S=a("kxRe"),k=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,l=e.orientation,i=Object(p.a)(e,["classes","className","color","orientation"]);return n.createElement("span",Object(m.a)({className:Object(h.a)(a.root,a["color".concat(Object(S.a)(o))],r,"vertical"===l&&a.vertical),ref:t},i))})),N=Object(C.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(k),B=a("t5A8"),W=Object(B.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),F=Object(B.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),L=a("Qw1P"),M=n.createElement(W,{fontSize:"small"}),A=n.createElement(F,{fontSize:"small"}),I=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.direction,l=e.orientation,i=e.disabled,c=Object(p.a)(e,["classes","className","direction","orientation","disabled"]);return n.createElement(L.a,Object(m.a)({component:"div",className:Object(h.a)(a.root,r,i&&a.disabled,"vertical"===l&&a.vertical),ref:t,role:null,tabIndex:null},c),"left"===o?M:A)})),R=Object(C.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(I),T=a("OivF"),z=a("tAba"),D=n.forwardRef((function(e,t){var a=e["aria-label"],r=e["aria-labelledby"],o=e.action,l=e.centered,i=void 0!==l&&l,c=e.children,s=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,b=e.indicatorColor,E=void 0===b?"secondary":b,C=e.onChange,S=e.orientation,k=void 0===S?"horizontal":S,B=e.ScrollButtonComponent,W=void 0===B?R:B,F=e.scrollButtons,L=void 0===F?"auto":F,M=e.selectionFollowsFocus,A=e.TabIndicatorProps,I=void 0===A?{}:A,D=e.TabScrollButtonProps,P=e.textColor,H=void 0===P?"inherit":P,$=e.value,J=e.variant,q=void 0===J?"standard":J,K=Object(p.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),Q=Object(z.a)(),V="scrollable"===q,X="rtl"===Q.direction,G="vertical"===k,U=G?"scrollTop":"scrollLeft",Y=G?"top":"left",Z=G?"bottom":"right",_=G?"clientHeight":"clientWidth",ee=G?"height":"width";var te=n.useState(!1),ae=te[0],re=te[1],ne=n.useState({}),oe=ne[0],le=ne[1],ie=n.useState({start:!1,end:!1}),ce=ie[0],se=ie[1],de=n.useState({overflow:"hidden",marginBottom:null}),ue=de[0],fe=de[1],be=new Map,me=n.useRef(null),pe=n.useRef(null),ve=function(){var e,t,a=me.current;if(a){var r=a.getBoundingClientRect();e={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:x(a,Q.direction),scrollWidth:a.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(a&&!1!==$){var n=pe.current.children;if(n.length>0){var o=n[be.get($)];0,t=o?o.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},he=Object(T.a)((function(){var e,t=ve(),a=t.tabsMeta,r=t.tabMeta,n=0;if(r&&a)if(G)n=r.top-a.top+a.scrollTop;else{var o=X?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;n=r.left-a.left+o}var l=(e={},Object(v.a)(e,Y,n),Object(v.a)(e,ee,r?r[ee]:0),e);if(isNaN(oe[Y])||isNaN(oe[ee]))le(l);else{var i=Math.abs(oe[Y]-l[Y]),c=Math.abs(oe[ee]-l[ee]);(i>=1||c>=1)&&le(l)}})),ge=function(e){!function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=r.ease,l=void 0===o?j:o,i=r.duration,c=void 0===i?300:i,s=null,d=t[e],u=!1,f=function(){u=!0},b=function r(o){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=o);var i=Math.min(1,(o-s)/c);t[e]=l(i)*(a-d)+d,i>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}};d===a?n(new Error("Element already at target position")):requestAnimationFrame(b)}(U,me.current,e)},we=function(e){var t=me.current[U];G?t+=e:(t+=e*(X?-1:1),t*=X&&"reverse"===y()?-1:1),ge(t)},ye=function(){we(-me.current[_])},xe=function(){we(me.current[_])},je=n.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),Ee=Object(T.a)((function(){var e=ve(),t=e.tabsMeta,a=e.tabMeta;if(a&&t)if(a[Y]<t[Y]){var r=t[U]+(a[Y]-t[Y]);ge(r)}else if(a[Z]>t[Z]){var n=t[U]+(a[Z]-t[Z]);ge(n)}})),Oe=Object(T.a)((function(){if(V&&"off"!==L){var e,t,a=me.current,r=a.scrollTop,n=a.scrollHeight,o=a.clientHeight,l=a.scrollWidth,i=a.clientWidth;if(G)e=r>1,t=r<n-o-1;else{var c=x(me.current,Q.direction);e=X?c<l-i-1:c>1,t=X?c>1:c<l-i-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));n.useEffect((function(){var e=Object(g.a)((function(){he(),Oe()})),t=Object(w.a)(me.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[he,Oe]);var Ce=n.useCallback(Object(g.a)((function(){Oe()})));n.useEffect((function(){return function(){Ce.clear()}}),[Ce]),n.useEffect((function(){re(!0)}),[]),n.useEffect((function(){he(),Oe()})),n.useEffect((function(){Ee()}),[Ee,oe]),n.useImperativeHandle(o,(function(){return{updateIndicator:he,updateScrollButtons:Oe}}),[he,Oe]);var Se=n.createElement(N,Object(m.a)({className:s.indicator,orientation:k,color:E},I,{style:Object(m.a)({},oe,I.style)})),ke=0,Ne=n.Children.map(c,(function(e){if(!n.isValidElement(e))return null;var t=void 0===e.props.value?ke:e.props.value;be.set(t,ke);var a=t===$;return ke+=1,n.cloneElement(e,{fullWidth:"fullWidth"===q,indicator:a&&!ae&&Se,selected:a,selectionFollowsFocus:M,onChange:C,textColor:H,value:t})})),Be=function(){var e={};e.scrollbarSizeListener=V?n.createElement(O,{className:s.scrollable,onChange:je}):null;var t=ce.start||ce.end,a=V&&("auto"===L&&t||"desktop"===L||"on"===L);return e.scrollButtonStart=a?n.createElement(W,Object(m.a)({orientation:k,direction:X?"right":"left",onClick:ye,disabled:!ce.start,className:Object(h.a)(s.scrollButtons,"on"!==L&&s.scrollButtonsDesktop)},D)):null,e.scrollButtonEnd=a?n.createElement(W,Object(m.a)({orientation:k,direction:X?"left":"right",onClick:xe,disabled:!ce.end,className:Object(h.a)(s.scrollButtons,"on"!==L&&s.scrollButtonsDesktop)},D)):null,e}();return n.createElement(f,Object(m.a)({className:Object(h.a)(s.root,d,G&&s.vertical),ref:t},K),Be.scrollButtonStart,Be.scrollbarSizeListener,n.createElement("div",{className:Object(h.a)(s.scroller,V?s.scrollable:s.fixed),style:ue,ref:me,onScroll:Ce},n.createElement("div",{"aria-label":a,"aria-labelledby":r,className:Object(h.a)(s.flexContainer,G&&s.flexContainerVertical,i&&!V&&s.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var a=null,r="vertical"!==k?"ArrowLeft":"ArrowUp",n="vertical"!==k?"ArrowRight":"ArrowDown";switch("vertical"!==k&&"rtl"===Q.direction&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:a=t.previousElementSibling||pe.current.lastChild;break;case n:a=t.nextElementSibling||pe.current.firstChild;break;case"Home":a=pe.current.firstChild;break;case"End":a=pe.current.lastChild}null!==a&&(a.focus(),e.preventDefault())}},ref:pe,role:"tablist"},Ne),ae&&Se),Be.scrollButtonEnd)})),P=Object(C.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(v.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(D),H=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.disabled,l=void 0!==o&&o,i=e.disableFocusRipple,c=void 0!==i&&i,s=e.fullWidth,d=e.icon,u=e.indicator,f=e.label,b=e.onChange,v=e.onClick,g=e.onFocus,w=e.selected,y=e.selectionFollowsFocus,x=e.textColor,j=void 0===x?"inherit":x,E=e.value,O=e.wrapped,C=void 0!==O&&O,k=Object(p.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return n.createElement(L.a,Object(m.a)({focusRipple:!c,className:Object(h.a)(a.root,a["textColor".concat(Object(S.a)(j))],r,l&&a.disabled,w&&a.selected,f&&d&&a.labelIcon,s&&a.fullWidth,C&&a.wrapped),ref:t,role:"tab","aria-selected":w,disabled:l,onClick:function(e){b&&b(e,E),v&&v(e)},onFocus:function(e){y&&!w&&b&&b(e,E),g&&g(e)},tabIndex:w?0:-1},k),n.createElement("span",{className:a.wrapper},d,f),u)})),$=Object(C.a)((function(e){var t;return{root:Object(m.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(v.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(v.a)(t,"overflow","hidden"),Object(v.a)(t,"whiteSpace","normal"),Object(v.a)(t,"textAlign","center"),Object(v.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(H);t.default=function(){var e=Object(u.b)(),t=Object(n.useState)(f.c[0]),a=t[0],r=t[1],d=Object(n.useState)(0),m=d[0],p=d[1],v=Object(n.useState)(Object(u.c)(a)),h=v[0],g=v[1],w=Object(u.e)(),y=w.hideMob,x=w.hideDesktop,j=w.parliament,E=function(e,t){var a=e.target.innerText;g(Object(u.c)(a)),r(a),p(t)},O=function(e){var t=e.years;return o.a.createElement(P,{value:m,onChange:E,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on"},t.map((function(e){return o.a.createElement($,{label:e,key:e},e)})))};return o.a.createElement(l.a,null,o.a.createElement(i.a,{title:"Parliament"}),o.a.createElement(s.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(s.a,{item:!0,xs:12,md:6,className:j},o.a.createElement(c.a,{coordinates:e,seats:h,year:a})),o.a.createElement(s.a,{container:!0,item:!0,spacing:1,xs:12,md:6,justify:"center"},o.a.createElement(s.a,{item:!0,xs:12,className:x},o.a.createElement(O,{years:f.c})),o.a.createElement(s.a,{item:!0,xs:12,sm:10},o.a.createElement(b,{year:a,setSeats:g})))),o.a.createElement(s.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",alignItems:"center",className:y},o.a.createElement(O,{years:f.c})))}}}]);
//# sourceMappingURL=component---src-pages-past-results-js-345c023a507ef396e0f7.js.map