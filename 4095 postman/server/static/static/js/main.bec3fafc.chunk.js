(this.webpackJsonppostman=this.webpackJsonppostman||[]).push([[0],[,,,function(e,t,a){e.exports={wrapper:"Form_wrapper__3DZhF",urlWrapper:"Form_urlWrapper__3uKIh",section:"Form_section__1X8Zp",sectionHeader:"Form_sectionHeader__357lq",addMore:"Form_addMore__15P8Z",formDataWrap:"Form_formDataWrap__3PBe2",radioButton:"Form_radioButton__3lPTE",error:"Form_error__21rCy",rawTextarea:"Form_rawTextarea__2QrCu",actionButtons:"Form_actionButtons__yBtOZ"}},,,,function(e,t,a){e.exports={wrapper:"RequestItem_wrapper__1r9Hs",method:"RequestItem_method__2q52S",get:"RequestItem_get__2FqTv",post:"RequestItem_post__G2wrB",url:"RequestItem_url__1Q9hu",iconWrapper:"RequestItem_iconWrapper__3wiqY",icon:"RequestItem_icon__10cfV"}},function(e,t,a){e.exports={select:"Method_select__34Oe-",option:"Method_option__K9BZq"}},function(e,t,a){e.exports={wrapper:"Params_wrapper__3NVNe",icon:"Params_icon__1YJIG",input:"Params_input__HIjQP"}},function(e,t,a){e.exports={list:"Tabs_list__DuFUr",tab:"Tabs_tab__vTSrq",selected:"Tabs_selected__3Gpr6"}},function(e,t,a){e.exports={textarea:"Response_textarea__iCE46",headersWrapper:"Response_headersWrapper__wCxQF",headerName:"Response_headerName___WuOb",errors:"Response_errors__LLYTG"}},,,function(e,t,a){e.exports={wrapper:"RadioButton_wrapper__2_pzt",input:"RadioButton_input__1VHP3",label:"RadioButton_label__3P2IY",labelChecked:"RadioButton_labelChecked__1BoI9"}},,,function(e,t,a){e.exports={input:"URLInput_input__wLYpX"}},function(e,t,a){e.exports={button:"Button_button__1AcOv"}},function(e,t,a){e.exports={wrapper:"UrlList_wrapper__3Fydf"}},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r,n,c=a(0),o=a.n(c),l=a(16),s=a.n(l),u=(a(25),a(13)),i=(a(26),a(27),a(12)),m=a(1),p=a(2),d="params",f="headers",E="body",_=o.a.createContext(),b={list:[],form:(r={},Object(p.a)(r,"method","GET"),Object(p.a)(r,"url",""),Object(p.a)(r,d,[{key:"",value:""}]),Object(p.a)(r,f,[{key:"",value:""}]),Object(p.a)(r,"contentType","application/x-www-form-urlencoded"),Object(p.a)(r,E,[{key:"",value:""}]),Object(p.a)(r,"rawBody",""),r),errors:(n={},Object(p.a)(n,"url",""),Object(p.a)(n,d,""),Object(p.a)(n,f,""),Object(p.a)(n,E,""),n),res:{body:"",headers:[],errors:""}},v=function(e,t){switch(t.type){case"CHANGE_FORM_FIELD":return Object(m.a)({},e,{form:Object(m.a)({},e.form,Object(p.a)({},t.field,t.value))});case"CHANGE_FORM_FIELD_IN_ARRAY":var a=Object(i.a)(e.form[t.field]),r=Object(m.a)({},a[t.index],Object(p.a)({},t.key,t.value));return a.splice(t.index,1,r),Object(m.a)({},e,{form:Object(m.a)({},e.form,Object(p.a)({},t.field,a))});case"ADD_FIELD_TO_ARRAY":var n=Object(i.a)(e.form[t.field]);return n.push(t.item),Object(m.a)({},e,{form:Object(m.a)({},e.form,Object(p.a)({},t.field,n))});case"DELETE_FIELD_FROM_ARRAY":var c=Object(i.a)(e.form[t.field]);return c.length>1?c.splice(t.index,1):c.splice(t.index,1,{key:"",value:""}),Object(m.a)({},e,{form:Object(m.a)({},e.form,Object(p.a)({},t.field,c))});case"RESET_ERRORS":return Object(m.a)({},e,{errors:Object(m.a)({},b.errors)});case"SET_ERROR":return Object(m.a)({},e,{errors:Object(m.a)({},e.errors,Object(p.a)({},t.field,t.error))});case"SET_REQUEST_LIST":return Object(m.a)({},e,{list:t.data});case"ADD_TO_LIST":return Object(m.a)({},e,{list:[].concat(Object(i.a)(e.list),[t.data])});case"SET_REQUEST_TO_FORM":var o;return Object(m.a)({},e,{form:(o={},Object(p.a)(o,"method",t.data.method),Object(p.a)(o,"url",t.data.url),Object(p.a)(o,d,t.data[d].length?t.data[d]:[{key:"",value:""}]),Object(p.a)(o,f,t.data[f].length?t.data[f]:[{key:"",value:""}]),Object(p.a)(o,"contentType",t.data.contentType),Object(p.a)(o,E,t.data[E].length?t.data[E]:[{key:"",value:""}]),Object(p.a)(o,"rawBody",t.data.rawBody),o)});case"SET_RESPONSE":return Object(m.a)({},e,{res:Object(m.a)({},e.res,Object(p.a)({},t.key,t.data))});case"RESET_REQUEST":return Object(m.a)({},e,{form:Object(m.a)({},b.form),res:Object(m.a)({},b.res),errors:Object(m.a)({},b.errors)});case"SET_RESPONSE_ERROR":return Object(m.a)({},e,{res:Object(m.a)({},e.res,{errors:t.errors})});case"RESET_RESPONSE":return Object(m.a)({},e,{res:Object(m.a)({},b.res)});default:return e}},O=a(4),h=a.n(O),j=a(5),y=a(6),w=a.n(y),R=a(8),x=a.n(R),k=function(){var e=Object(c.useContext)(_),t=e.state.form,a=e.dispatch;return o.a.createElement("select",{onChange:function(e){a({type:"CHANGE_FORM_FIELD",field:"method",value:e.target.value})},value:t.method,className:x.a.select},o.a.createElement("option",{value:"GET",className:x.a.option},"GET"),o.a.createElement("option",{value:"POST",className:x.a.option},"POST"),o.a.createElement("option",{value:"PUT",className:x.a.option},"PUT"),o.a.createElement("option",{value:"DELETE",className:x.a.option},"DELETE"))},N=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({url:"/save",method:"POST",body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({url:"/send",method:"POST",body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({url:"/list",method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),e.next=3,g({url:"/deleteItem",method:"POST",body:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(h.a.mark((function e(t){var a,r,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,r=t.method,n=t.body,e.prev=1,e.next=4,fetch("".concat("http://localhost:4095").concat(a),{method:r,body:JSON.stringify(n),headers:{"Content-Type":"application/json;charset=utf-8"}});case 4:return c=e.sent,e.abrupt("return",c.json());case 8:e.prev=8,e.t0=e.catch(1),console.error("Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return{type:"CHANGE_FORM_FIELD",field:e,value:t}},D=function(e){return{type:"SET_REQUEST_LIST",data:e}},I=a(17),L=a.n(I),B=function(){var e=Object(c.useContext)(_),t=e.state.form,a=e.dispatch;return o.a.createElement("input",{className:L.a.input,value:t.url,onChange:function(e){a(F("url",e.target.value))}})},P=function(e){return o.a.createElement("div",{className:e.className,onClick:e.onClick},o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1024 1024"},o.a.createElement("g",null,o.a.createElement("path",{d:"M957,251h-97.8l-30.5,610.5c0,71-57.4,128.5-128.3,128.5H299.6c-70.8,0-128.3-57.5-128.3-128.5L140.9,251H43c-8.9,0-16-7.2-16-16.1v-32.1c0-8.9,7.2-16.1,16-16.1h176.4v-48.2c0-71,57.4-128.5,128.3-128.5h304.6c70.8,0,128.3,57.5,128.3,128.5v48.2H957c8.9,0,16,7.2,16,16.1v32.1C973,243.8,965.8,251,957,251z M716.5,170.7v-32.1c0-35.5-28.7-64.3-64.1-64.3h-32.1H379.8h-32.1c-35.4,0-64.1,28.8-64.1,64.3v32.1v16.1h432.9V170.7L716.5,170.7z M203.4,251l32.1,578.4c0,53.2,43.1,96.4,96.2,96.4h336.7c53.1,0,96.2-43.2,96.2-96.4L796.6,251H203.4z M617,829.5l-32.1-0.4c-8.9-0.1-15.9-7.4-15.8-16.3l6.2-449.8c0.1-8.9,7.4-16,16.2-15.9l32.1,0.4c8.9,0.1,15.9,7.4,15.8,16.3l-6.2,449.8C633.1,822.5,625.8,829.6,617,829.5z M419.4,828.8l-32.1,0.9c-8.9,0.2-16.2-6.7-16.5-15.6l-14.4-449.6c-0.2-8.9,6.7-16.3,15.6-16.5l32.1-0.9c8.9-0.2,16.2,6.7,16.5,15.6L435,812.3C435.3,821.1,428.3,828.5,419.4,828.8z"}))))},A=a(9),M=a.n(A),H=function(e){var t=Object(c.useContext)(_),a=t.state.form,r=t.dispatch,n=e.field,l=e.index,s=function(e){return function(t){r({type:"CHANGE_FORM_FIELD_IN_ARRAY",field:n,index:l,key:e,value:t.target.value})}};return o.a.createElement("div",{className:M.a.wrapper},o.a.createElement("input",{placeholder:"Key",onChange:s("key"),value:a[n][l].key,className:M.a.input}),o.a.createElement("input",{placeholder:"Value",onChange:s("value"),value:a[n][l].value,className:M.a.input}),o.a.createElement(P,{className:M.a.icon,onClick:function(){r(function(e,t){return{type:"DELETE_FIELD_FROM_ARRAY",field:e,index:t}}(n,l))}}))},q=a(3),W=a.n(q),G=a(18),Q=a.n(G),U=function(e){return o.a.createElement("button",{onClick:e.onClick,className:Q.a.button},e.text)},Y=a(14),z=a.n(Y),V=function(e){var t=e.name,a=e.id,r=e.value,n=e.onChange,c=e.checked,l=e.label;return o.a.createElement("div",{className:e.className},o.a.createElement("input",{type:"radio",name:t,id:a,value:r,onChange:n,checked:c,className:z.a.input}),o.a.createElement("label",{htmlFor:a,className:w()(z.a.label,c&&z.a.labelChecked)},l))},Z=a(10),J=a.n(Z),K=function(e){var t=Object(c.useState)(0),a=Object(u.a)(t,2),r=a[0],n=a[1],l=e.children.map((function(e,t){return o.a.createElement("li",{className:w()(J.a.tab,t===r&&J.a.selected),key:t,onClick:function(){return n(t)}},e.props.title)}));return o.a.createElement("div",null,o.a.createElement("ul",{className:J.a.list},l),o.a.createElement("div",{className:J.a.tab},e.children[r]))},X=(a(29),function(e){return o.a.createElement("div",null,e.children)}),$=a(11),ee=a.n($),te=function(e){var t=Object(c.useContext)(_).state.res,a=t.body,r=t.headers,n=t.errors,l=Object.keys(r).map((function(e,t){return o.a.createElement("div",{className:ee.a.headersWrapper,key:t},o.a.createElement("div",{className:ee.a.headerName},e,":"),r[e])}));return a||r.length?o.a.createElement("div",null,o.a.createElement(K,null,o.a.createElement(X,{title:"body"},o.a.createElement("div",{className:ee.a.textarea},a)),o.a.createElement(X,{title:"headers"},l))):n.length?o.a.createElement("div",{className:ee.a.errors},n):null},ae=function(){var e=Object(c.useContext)(_),t=e.state,a=t.form,r=t.errors,n=(t.res,e.dispatch),l=Object(c.useCallback)((function(e){return function(){return n(function(e,t){return{type:"ADD_FIELD_TO_ARRAY",field:e,item:t}}(e,{key:"",value:""}))}}),[n]),s=Object(c.useCallback)((function(e,t){return n(F(e,t))}),[n]),u=Object(c.useCallback)((function(e,t){return n(function(e,t){return{type:"SET_ERROR",field:e,error:t}}(e,t))}),[n]),i=Object(c.useCallback)((function(e){return n(function(e){return{type:"SET_RESPONSE_ERROR",errors:e}}(e))}),[n]),p=Object(c.useCallback)((function(){return n({type:"RESET_ERRORS"})}),[n]),b=Object(c.useCallback)((function(e){return n(function(e){return{type:"ADD_TO_LIST",data:e}}(e))}),[n]),v=Object(c.useCallback)((function(e,t){return n(function(e,t){return{type:"SET_RESPONSE",key:e,data:t}}(e,t))}),[n]),O=Object(c.useCallback)((function(){return n({type:"RESET_REQUEST"})}),[n]),y=a[d].map((function(e,t){return o.a.createElement(H,{index:t,key:t,field:d})})),R=a[f].map((function(e,t){return o.a.createElement(H,{index:t,key:t,field:f})})),x=a[E].map((function(e,t){return o.a.createElement(H,{index:t,key:t,field:E})})),C=function(){var e=a.params.filter((function(e){return e.key.length||e.value.length})),t=a.headers.filter((function(e){return e.key.length||e.value.length})),r=a.body.filter((function(e){return e.key.length||e.value.length}));return Object(m.a)({},a,{params:e,body:r,headers:t})},S=function(e){if(p(),1===e.errorCode){for(var t in e.errorDescription)u(t,e.errorDescription[t]);return!1}return 2!==e.errorCode||(i(e.errorDescription),!1)},g=function(){var e=Object(j.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(),e.next=3,N(t);case 3:a=e.sent,S(a)&&b(a.request);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(),e.next=3,T(t);case 3:a=e.sent,S(a)&&(b(a.request),v(E,a.response),v(f,a.headers));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){s("contentType",e.target.value),"raw"===e.target.value?s(E,[{key:"",value:""}]):s("rawBody","")};return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:W.a.wrapper},o.a.createElement("div",{className:W.a.urlWrapper},o.a.createElement(k,null),o.a.createElement(B,null),o.a.createElement(U,{text:"Save",onClick:g})),r.url.length>0&&o.a.createElement("div",{className:W.a.error},r.url),o.a.createElement("div",{className:W.a.section},o.a.createElement("div",{className:W.a.sectionHeader},"Query Params"),r[d].length>0&&o.a.createElement("div",{className:W.a.error},r[d]),y,o.a.createElement("div",{className:W.a.addMore},o.a.createElement("span",{onClick:l(d)},"add more params"))),o.a.createElement("div",{className:W.a.section},o.a.createElement("div",{className:W.a.sectionHeader},"Headers"),r[f].length>0&&o.a.createElement("div",{className:W.a.error},r[f]),R,o.a.createElement("div",{className:W.a.addMore},o.a.createElement("span",{onClick:l(f)},"add more params"))),o.a.createElement("div",{className:w()(W.a.section,W.a.formDataWrap)},o.a.createElement(V,{className:W.a.radioButton,id:"url-encoded",name:"formData",value:"application/x-www-form-urlencoded",label:"x-www-form-urlencoded",checked:"application/x-www-form-urlencoded"===a.contentType,onChange:I}),o.a.createElement(V,{className:W.a.radioButton,id:"multipart",name:"formData",value:"multipart/form-data",label:"form-data",checked:"multipart/form-data"===a.contentType,onChange:I}),o.a.createElement(V,{id:"raw",name:"formData",value:"raw",label:"raw",checked:"raw"===a.contentType,onChange:I})),o.a.createElement("div",{className:W.a.section},"raw"===a.contentType?o.a.createElement("textarea",{className:W.a.rawTextarea,value:a.rawBody,onChange:function(e){return s("rawBody",e.target.value)}}):o.a.createElement(o.a.Fragment,null,r[E].length>0&&o.a.createElement("div",{className:W.a.error},r[E]),o.a.createElement("div",null,x,o.a.createElement("div",{className:W.a.addMore},o.a.createElement("span",{onClick:l(E)},"add more params"))))),o.a.createElement("div",{className:W.a.actionButtons},o.a.createElement(U,{text:"Send",onClick:D}),o.a.createElement(U,{onClick:O,text:"Reset"})),o.a.createElement("div",{className:W.a.section},o.a.createElement("div",{className:W.a.sectionHeader},"Response"),o.a.createElement(te,null))))},re=a(19),ne=a.n(re),ce=a(7),oe=a.n(ce),le=function(e){var t=Object(c.useContext)(_),a=(t.state.list,t.dispatch),r=Object(c.useCallback)((function(e){return a(D(e))}),[a]),n=Object(c.useCallback)((function(e){return a(function(e){return{type:"SET_REQUEST_TO_FORM",data:e}}(e))}),[a]),l=Object(c.useCallback)((function(){return a({type:"RESET_RESPONSE"})}),[a]),s=function(){var t=Object(j.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S({deleteIndex:e.index});case 2:a=t.sent,r(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:oe.a.wrapper,onClick:function(){l(),n(e)}},o.a.createElement("div",{className:w()(oe.a.method,"post"===e.method.toLowerCase()?oe.a.post:oe.a.get)},e.method),o.a.createElement("div",{className:oe.a.url},e.url),o.a.createElement("div",{className:oe.a.iconWrapper},o.a.createElement(P,{onClick:s,className:oe.a.icon})))},se=function(e){var t=Object(c.useContext)(_),a=t.state.list,r=t.dispatch,n=Object(c.useCallback)((function(e){return r(D(e))}),[r]),l=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){l()}),[]);var s=a.map((function(e,t){return o.a.createElement(le,Object.assign({},e,{key:t,index:t}))}));return o.a.createElement("div",{className:ne.a.wrapper},s)},ue=(o.a.createContext(b),function(){var e=Object(c.useReducer)(v,b),t=Object(u.a)(e,2),a=t[0],r=t[1];return o.a.createElement(_.Provider,{value:{dispatch:r,state:a}},o.a.createElement("div",{className:"wrapper"},o.a.createElement(se,null),o.a.createElement(ae,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.bec3fafc.chunk.js.map