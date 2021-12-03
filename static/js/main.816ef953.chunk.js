(this["webpackJsonpproductivity-app"]=this["webpackJsonpproductivity-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(7),i=c.n(a),n=c(3),r=c(4),l=c(11),d={ADDTODO:"ADDTODO",TOGGLE:"TOGGLE",DELETE:"DELETE",START:"START",ADDPROJECTS:"ADDPROJECTS",TOGGLE_PROJECT:"TOGGLE_PROJECT",DELETE_PROJECT:"DELETE_PROJECT"},o={tasks:[]},j={projects:[]},p=Object(n.b)({addTodoReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case d.ADDTODO:var a=s.id,i=s.title;return{tasks:[].concat(Object(l.a)(e.tasks),[{title:i,completed:!1,inprogress:!1,id:a}])};case d.TOGGLE:var n=s.id,j=e.tasks.map((function(e){return e.id===n?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed,inprogress:!1}):e}));return{tasks:j};case d.DELETE:var p=s.id,u=e.tasks.filter((function(e){return e.id!==p}));return{tasks:u};case d.START:var O=s.id,b=e.tasks.map((function(e){return e.id===O?Object(r.a)(Object(r.a)({},e),{},{inprogress:!e.inprogress}):e}));return{tasks:b};default:return e}},addProjectsReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case d.ADDPROJECTS:var a=s.title,i=s.id;return{projects:[].concat(Object(l.a)(e.projects),[{title:a,completed:!1,id:i}])};case d.TOGGLE_PROJECT:var n=s.id;console.log(e.projects);var o=e.projects.map((function(e){return e.id===n?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}));return{projects:o};case d.DELETE_PROJECT:var p=s.id,u=e.projects.filter((function(e){return e.id!==p}));return{projects:u};default:return e}}}),u=p,O=c(12),b=Object(n.d)(u,Object(n.c)(Object(n.a)(O.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),m=c(2),h=(c(24),c(5)),f=(c(25),0),v=function(e){return{type:d.ADDTODO,payload:{id:++f,title:e}}},x=0,T=function(e){return{type:d.ADDPROJECTS,payload:{id:++x,title:e}}},N=c(0),E=function(){var e=Object(m.b)(),t=Object(s.useState)(""),c=Object(h.a)(t,2),a=c[0],i=c[1],n=Object(m.c)((function(e){return e.addTodoReducers.tasks})),r=Object(s.useState)(!1),l=Object(h.a)(r,2),o=l[0],j=l[1],p=0;Object(s.useEffect)((function(){var t,c=localStorage.getItem("tasks");c=""!==c?JSON.parse(c):[],console.log(c),null===(t=c)||void 0===t||t.map((function(t){e(v(t.title)),console.log(t.completed),!0===t.completed&&u(t.id),!0===t.inprogress&&b(t.id)}))}),[]);var u=function(t){e(function(e){return{type:d.TOGGLE,payload:{id:e}}}(t))},O=function(t){e(function(e){return{type:d.DELETE,payload:{id:e}}}(t))},b=function(t){console.log("hi"),e(function(e){return{type:d.START,payload:{id:e}}}(t))},f=n.filter((function(e){return e.completed}));console.log(f);return Object(s.useEffect)((function(){""===n&&null===n||localStorage.setItem("tasks",JSON.stringify(n))}),[n]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"dailyTask-container",children:[Object(N.jsxs)("div",{className:"dailyTask-header",children:[Object(N.jsx)("div",{className:"dailyTask-title",children:Object(N.jsx)("div",{className:"title-text",children:"Daily Task"})}),Object(N.jsx)("div",{className:"dailyTask-addTodo-btn",onClick:function(){j(!o)},children:"+"})]}),Object(N.jsx)("div",{className:"dailyTask-list-wrapper",children:Object(N.jsx)("div",{className:"dailyTask-list",children:n.map((function(e){return Object(N.jsxs)("div",{className:"dailyTask-list-item",children:[Object(N.jsxs)("div",{className:"dailyTask-list-caption",children:[Object(N.jsx)("div",{className:"dailyTask-list-caption-no",children:Object(N.jsx)("div",{className:"dailyTask-list-caption-no-text",children:++p})}),Object(N.jsx)("div",{className:e.completed?"dailyTask-list-caption-title line-through":"dailyTask-list-caption-title",children:e.title})]}),Object(N.jsxs)("div",{className:"dailyTask-list-item-btns",children:[Object(N.jsx)("button",{onClick:function(){return e.completed?"":b(e.id)},className:"btn start-btn",children:Object(N.jsx)("i",{className:"fas fa-stopwatch"})}),Object(N.jsx)("button",{onClick:function(){return u(e.id)},className:"btn done-btn",children:Object(N.jsx)("i",{className:"far fa-check-square"})}),Object(N.jsx)("button",{onClick:function(){return O(e.id)},className:"btn delete-btn",children:Object(N.jsx)("i",{className:"far fa-trash-alt"})})]})]},e.id)}))})}),Object(N.jsx)("div",{className:o?"form-wrapper":"form-wrapper-hide",children:Object(N.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==a.trim()&&e(v(a)),i(""),j(!o)},children:[Object(N.jsx)("input",{value:a,onChange:function(e){i(e.target.value)},type:"text"}),Object(N.jsx)("button",{type:"submit",className:"addtask",children:"ADD"})]})})]})})},g=(c(27),function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"header-container",children:[Object(N.jsx)("div",{className:"header-logo-wrapper",children:Object(N.jsx)("div",{className:"header-logo",children:"DODO"})}),Object(N.jsx)("div",{className:"header-avatar-wrapper",children:Object(N.jsx)("div",{className:"header-avatar",children:"P"})})]})})}),k=(c(28),function(){Object(m.b)();var e=Object(m.c)((function(e){return e.addTodoReducers.tasks})).filter((function(e){return e.inprogress}));console.log(e);var t=0;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"inprogress-container",children:[Object(N.jsx)("div",{className:"inprogress-title",children:Object(N.jsx)("div",{className:"inprogress-title-text",children:"In Progress"})}),Object(N.jsx)("div",{className:"inprogress-items-wrapper",children:Object(N.jsx)("div",{className:"inprogress-items-wrapper-2",children:e.map((function(e){return Object(N.jsxs)("div",{className:"inprogress-item",children:[Object(N.jsxs)("div",{className:"inprogress-item-no",children:[++t,"."]}),Object(N.jsx)("div",{className:"inprogress-item-title",children:e.title})]},e.id)}))})})]})})}),y=(c(29),function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.addProjectsReducers.projects})),c=Object(s.useState)(""),a=Object(h.a)(c,2),i=a[0],n=a[1];console.log(t);var r=Object(s.useState)(!1),l=Object(h.a)(r,2),o=l[0],j=l[1],p=0;Object(s.useEffect)((function(){var t=localStorage.getItem("projects");(t=""!==t?JSON.parse(t):[]).map((function(t){e(T(t.title)),1==t.completed&&u(t.id)}))}),[]),Object(s.useEffect)((function(){""===t&&null===t||localStorage.setItem("projects",JSON.stringify(t))}),[t]);var u=function(t){e(function(e){return{type:d.TOGGLE_PROJECT,payload:{id:e}}}(t))},O=function(t){e(function(e){return{type:d.DELETE_PROJECT,payload:{id:e}}}(t))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"projects-container",children:[Object(N.jsxs)("div",{className:"projects-header",children:[Object(N.jsx)("div",{className:"projects-header-title",children:Object(N.jsx)("div",{className:"projects-header-title-text",children:"Projects"})}),Object(N.jsx)("div",{className:"addproject-btn",onClick:function(){j(!o)},children:"+"})]}),Object(N.jsx)("div",{className:"projects-items-wrapper",children:Object(N.jsx)("div",{className:"projects-items-wrapper-2",children:t.map((function(e){return Object(N.jsxs)("div",{className:"project-list-item-wrapper",children:[Object(N.jsx)("div",{className:"counter",children:++p}),Object(N.jsx)("div",{className:e.completed?"project-list-item-title-line-through":"project-list-item-title",children:e.title}),Object(N.jsxs)("div",{className:"project-list-item-btns",children:[Object(N.jsx)("button",{onClick:function(){return u(e.id)},className:"project-item-btn done-btn",children:Object(N.jsx)("i",{className:"far fa-check-square"})}),Object(N.jsx)("button",{onClick:function(){return O(e.id)},className:"project-item-btn delete-btn",children:Object(N.jsx)("i",{className:"far fa-trash-alt"})})]})]},e.id)}))})}),Object(N.jsx)("div",{className:o?"project-form-wrapper":"project-form-wrapper-hide",children:Object(N.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==i.trim()&&e(T(i)),n(""),j(!o)},children:[Object(N.jsx)("input",{value:i,onChange:function(e){n(e.target.value)},type:"text",placeholder:"addTasks here"}),Object(N.jsx)("button",{type:"submit",className:"addtask",children:"ADD"})]})})]})})}),D=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"app-container",children:[Object(N.jsx)("div",{className:"app-header",children:Object(N.jsx)(g,{})}),Object(N.jsx)("div",{className:"app-dailytask",children:Object(N.jsx)(E,{})}),Object(N.jsx)("div",{className:"app-inprogress",children:Object(N.jsx)(k,{})}),Object(N.jsx)("div",{className:"app-projects",children:Object(N.jsx)(y,{})})]})})};i.a.render(Object(N.jsx)(m.a,{store:b,children:Object(N.jsx)(D,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.816ef953.chunk.js.map