(this.webpackJsonptask6=this.webpackJsonptask6||[]).push([[0],{110:function(e,t,n){e.exports=n(239)},192:function(e,t,n){},193:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},194:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t),n.d(t,"rerenderEntireTree",(function(){return H}));var a=n(45),o=n(46),r=n(101),l=function(){return r.get("https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employees").then((function(e){return e.data}))},m={employees:[],id:null},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMPLOYEES":return Object(o.a)({},e,{employees:Object(a.a)(t.employees),id:t.employees.length});case"ADD_EMPLOYEE":var n=t.employee_name;return Object(o.a)({},e,{employees:[].concat(Object(a.a)(e.employees),[{id:e.id+1,employee_name:n}]),id:e.id+1});case"DELETE_EMPLOYEE":return Object(o.a)({},e,{employees:Object(a.a)(t.employees),id:e.id});default:return e}},i=n(5),s=n(102),p=n(242),u=Object(i.c)({employees:c,form:p.a}),d=Object(i.e)(u,Object(i.a)(s.a));window.store=d;var E=d,y=n(0),f=n.n(y),h=n(40),b=n.n(h),_=(n(192),n(193),n(194),n(19)),v=n(6),O=n(43),g=n.n(O);function j(){return f.a.createElement("header",{className:g.a.header},f.a.createElement(_.b,{to:"/",className:g.a.headerItem},"Main"),f.a.createElement(_.b,{to:"/employees",className:g.a.headerItem},"Employees"))}var k=n(105),w=n(106),D=n(107),N=n(108),S=n(16),L=n(24),M=n.n(L),x=function(e){return f.a.createElement("div",{className:M.a.employeeContainer},e.employees.map((function(t){return f.a.createElement("div",{key:t.id,className:M.a.employee},f.a.createElement("p",null,t.employee_name),f.a.createElement("button",{onClick:function(){e.deleteEmployees(t.id,e.employees)},className:M.a.delete},"Delete"))})))},C=n(241),I=n(240),P=Object(I.a)({form:"addEmployee"})((function(e){return f.a.createElement("form",{onSubmit:e.handleSubmit,className:M.a.addEmployeeForm},f.a.createElement("p",null,"Add employee"),f.a.createElement("div",null,f.a.createElement("label",null,"Name"),f.a.createElement(C.a,{component:"input",name:"employee_name",type:"text",placeholder:"Name"})),f.a.createElement("div",null,f.a.createElement("button",{type:"submit",disabled:e.pristine||e.submitting},"Add"),f.a.createElement("button",{type:"button",disabled:e.pristine||e.submitting,onClick:e.reset},"Clear Values")))})),Y=function(e){Object(N.a)(n,e);var t=Object(D.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.getEmployees()}},{key:"render",value:function(){var e=this;return f.a.createElement("div",null,f.a.createElement(x,{employees:this.props.employees,deleteEmployees:this.props.deleteEmployees}),f.a.createElement(P,{onSubmit:function(t){e.props.addEmployee(t.employee_name)}}))}}]),n}(f.a.Component),A=Object(i.d)(Object(S.b)((function(e){return{employees:e.employees.employees}}),{getEmployees:function(){return function(e){l().then((function(t){e({type:"SET_EMPLOYEES",employees:t.data})}))}},addEmployee:function(e){return{type:"ADD_EMPLOYEE",employee_name:e}},deleteEmployees:function(e,t){return function(n){var a=t.map((function(e){return e.id})).indexOf(e);~a&&t.splice(a,1),n(function(e){return{type:"DELETE_EMPLOYEE",employees:e}}(t))}}}))(Y);var T=function(){return f.a.createElement(_.a,null,f.a.createElement(j,null),f.a.createElement("div",null,f.a.createElement(v.a,{path:"/employees",render:function(){return f.a.createElement(A,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){b.a.render(f.a.createElement(_.a,null,f.a.createElement(S.a,{store:E},f.a.createElement(T,null))),document.getElementById("root"))};H(E.getState()),E.subscribe((function(){var e=E.getState();H(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){e.exports={employeeContainer:"Employee_employeeContainer__2zm2H",employee:"Employee_employee__1ehm6",delete:"Employee_delete__3QA6n",addEmployeeForm:"Employee_addEmployeeForm__gRk3K"}},43:function(e,t,n){e.exports={header:"Header_header__hs6kH",headerItem:"Header_headerItem__3IODu"}}},[[110,1,2]]]);
//# sourceMappingURL=main.d462f44c.chunk.js.map