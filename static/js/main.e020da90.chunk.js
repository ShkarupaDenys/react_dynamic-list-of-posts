(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,r,s,a=n(12),o=n.n(a),i=n(5),l=n(2),d=n(4),u=n.n(d),m=n(1),j=(n(18),n(19),n(20),n(3)),b=n.n(j),h=(n(21),n(0)),O=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})};!function(e){e.None="",e.GetUsers="get users",e.GetPosts="get posts",e.GetComments="get comments",e.RemoveComment="remove comments",e.AddComment="add comments"}(c||(c={})),function(e){e.Danger="danger",e.Warning="warning"}(r||(r={})),function(e){e[e.None=0]="None",e[e.Comments=1]="Comments",e[e.Posts=2]="Posts",e[e.AddComment=3]="AddComment"}(s||(s={}));var x={post:{id:0,userId:0,title:"",body:""},error:c.None,loading:s.None,comments:[],setLoading:function(){},setComments:function(){},setError:function(){}},f=Object(m.createContext)(x),v={currentUserId:0,error:c.None},p=Object(m.createContext)(v),g=function(e){var t=e.id,n=e.name,c=e.selectUser,r=Object(m.useContext)(p).currentUserId;return Object(h.jsx)("a",{href:"#user-".concat(t),className:b()("dropdown-item",{"is-active":r===t}),onClick:function(){return c(t)},children:n})},C=function(e){var t=e.users,n=e.selectUser;return Object(h.jsx)("div",{role:"menu",id:"dropdown-menu",className:"dropdown-menu",children:Object(h.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,c=e.name;return Object(h.jsx)(g,{id:t,name:c,selectUser:n},t)}))})})},N=function(e){var t=e.userName,n=e.toggleDropdown,r=Object(m.useContext)(p).error;return Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:n,disabled:r===c.GetUsers,children:[Object(h.jsx)("span",{children:t||"Choose a user"}),Object(h.jsx)("span",{className:"icon is-small",children:Object(h.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})})},y="https://mate.academy/students-api";function w(e){return new Promise((function(t){setTimeout(t,e)}))}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),w(300).then((function(){return fetch(y+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var E=function(e){return k(e)},P=function(e,t){return k(e,"POST",t)},S=function(e){return k(e,"DELETE")},I=function(e){return E("/posts?userId=".concat(e))},U=function(e){var t,n=e.currentUserId,r=e.setError,s=e.handleUserSelect,a=Object(m.useState)([]),o=Object(l.a)(a,2),d=o[0],j=o[1],O=Object(m.useState)(!1),x=Object(l.a)(O,2),f=x[0],v=x[1],p=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("/users");case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(c.GetUsers);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){p()}),[]);var g=Object(m.useCallback)((function(e){var t=e.target.closest(".dropdown-trigger"),n=e.target.matches(".dropdown-item");f&&(t||n||v(!1))}),[f]);Object(m.useEffect)((function(){return document.addEventListener("click",g),function(){document.removeEventListener("click",g)}}),[f]);var y=null===(t=d.find((function(e){return e.id===n})))||void 0===t?void 0:t.name;return Object(h.jsxs)("div",{"data-cy":"UserSelector",className:b()("dropdown",{"is-active":f}),children:[Object(h.jsx)(N,{userName:y||"",toggleDropdown:function(){v((function(e){return!e}))}}),Object(h.jsx)(C,{users:d,selectUser:function(e){s(e),v(!1)}})]})},L=function(e){var t=e.type,n=void 0===t?"warning":t,c=e.text,r=e.dataCy;return Object(h.jsx)("div",{className:"notification is-".concat(n),"data-cy":r,children:c})},F=function(e){var t=e.post,n=e.currentPostId,c=e.getComments;return Object(h.jsxs)("tr",{"data-cy":"Post",children:[Object(h.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(h.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)(z,{type:"button",dataCy:"PostButton",className:b()({"is-light":n!==t.id}),onClick:function(){return c(t)},children:n!==t.id?"Open":"Close"})})]})},T=function(e){var t=e.posts,n=e.currentPostId,c=e.getComments;return Object(h.jsxs)("div",{"data-cy":"PostsList",children:[Object(h.jsx)("p",{className:"title",children:"Posts:"}),Object(h.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"has-background-link-light",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(F,{post:e,currentPostId:n,getComments:c},e.id)}))})]})]})},G=n(6),D=function(e){var t=e.comment,n=e.removeComment;return Object(h.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(h.jsxs)("div",{className:"message-header",children:[Object(h.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(h.jsx)("button",{type:"button","data-cy":"CommentDelete","aria-label":"delete",className:"delete is-small",onClick:function(){return n(t.id)}})]}),Object(h.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},A=function(e){var t=e.isForm,n=e.setIsForm,s=e.removeComment,a=Object(m.useContext)(f),o=a.error,i=a.comments;Object(m.useEffect)((function(){return function(){return n(!1)}}),[]);return Object(h.jsxs)(h.Fragment,{children:[i.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"title is-4",children:"Comments:"}),o===c.RemoveComment&&Object(h.jsx)(L,{type:r.Danger,text:"Something went wrong!"}),i.map((function(e){return Object(h.jsx)(D,{comment:Object(G.a)({},e),removeComment:s},e.id)}))]}):Object(h.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!t&&Object(h.jsx)(z,{dataCy:"WriteCommentButton",onClick:function(){return n(!0)},children:"Write a comment"})]})},B=n(9),M=n(11),_=function(e){var t=e.name,n=e.hasIcon;return e.hasError?Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Body"===t?"Enter some text":"".concat(t," is required")})]}):null},J=function(e){var t=e.icon;return Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-".concat(t)})})},R=function(e){var t=e.id,n=e.icon,c=e.name,r=e.value,s=e.hasError,a=e.placeholder,o=e.onChange;return Object(h.jsxs)("div",{className:"field","data-cy":"".concat(c,"Field"),children:[Object(h.jsx)("label",{className:"label",htmlFor:t,children:"Author ".concat(c)}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{type:"text",name:c.toLowerCase(),id:t,value:r,placeholder:a,className:b()("input",{"is-danger":s}),onChange:function(e){return o(c.toLowerCase(),e.target.value)}}),Object(h.jsx)(J,{icon:n}),Object(h.jsx)(_,{hasIcon:!0,name:c,hasError:s})]})]})},W=function(e){var t=e.id,n=e.name,c=e.value,r=e.hasError,s=e.labelText,a=e.placeholder,o=e.onChange;return Object(h.jsxs)("div",{className:"field","data-cy":"".concat(n,"Field"),children:[Object(h.jsx)("label",{className:"label",htmlFor:t,children:s}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{id:t,value:c,name:n.toLowerCase(),placeholder:a,className:b()("textarea",{"is-danger":r}),onChange:function(e){return o(n.toLowerCase(),e.target.value)}})}),Object(h.jsx)(_,{name:n,hasError:r})]})},q=function(){var e=Object(m.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(m.useState)({name:"",email:"",body:""}),o=Object(l.a)(a,2),d=o[0],j=o[1],b=Object(m.useContext)(f),O=b.post,x=b.loading,v=b.setError,p=b.setLoading,g=b.setComments,C=Object(m.useCallback)((function(e){return Object.entries(e).forEach((function(e){e[1]||r((function(t){return[].concat(Object(M.a)(t),[e[0]])}))})),Object.values(e).some((function(e){return!e.length}))}),[n]),N=Object(m.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!C(d)){e.next=4;break}return e.abrupt("return");case 4:return p(s.AddComment),e.prev=5,e.next=8,r=Object(G.a)(Object(G.a)({},d),{},{postId:(null===O||void 0===O?void 0:O.id)||0}),P("/comments",r);case 8:n=e.sent,g((function(e){return[].concat(Object(M.a)(e),[n])})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),v(c.AddComment);case 15:return e.prev=15,p(s.None),e.finish(15);case 18:j((function(e){return Object(Object(G.a)(Object(G.a)({},e),{},{body:""}))}));case 19:case"end":return e.stop()}var r}),e,null,[[5,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),[n,d]),y=function(e,t){j((function(n){return Object(Object(G.a)(Object(G.a)({},n),{},Object(B.a)({},e,t)))})),n.includes(e)&&r((function(t){return t.filter((function(t){return t!==e}))}))},w=Object(m.useCallback)((function(){j({name:"",email:"",body:""}),r([])}),[d]);return Object(h.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:N,children:[Object(h.jsx)(R,{id:"comment-author-name",name:"Name",icon:"user",value:d.name,placeholder:"Name Surname",hasError:n.includes("name"),onChange:y}),Object(h.jsx)(R,{id:"comment-author-email",name:"Email",icon:"envelope",value:d.email,placeholder:"email@test.com",hasError:n.includes("email"),onChange:y}),Object(h.jsx)(W,{id:"comment-body",name:"Body",value:d.body,labelText:"Enter some text",placeholder:"Type comment here",hasError:n.includes("body"),onChange:y}),Object(h.jsxs)("div",{className:"field is-grouped",children:[Object(h.jsx)("div",{className:"control",children:Object(h.jsx)(z,{type:"submit",loading:x===s.AddComment,children:"Add"})}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)(z,{type:"reset",className:"is-light",onClick:w,children:"Clear"})})]})]})},Y=function(){var e=Object(m.useContext)(f),t=e.post,n=e.error,a=e.loading,o=e.setComments,d=e.setError,j=Object(m.useState)(!1),b=Object(l.a)(j,2),x=b[0],v=b[1],p=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=1,e.next=4,S("/comments/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),d(c.RemoveComment);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(h.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(h.jsx)("div",{className:"block",children:a===s.Comments?Object(h.jsx)(O,{}):Object(h.jsx)(h.Fragment,{children:n===c.GetComments?Object(h.jsx)(L,{type:r.Danger,dataCy:"CommentsError",text:"Something went wrong"}):Object(h.jsx)(A,{isForm:x,setIsForm:v,removeComment:p})})}),x&&t&&Object(h.jsx)(q,{})]})},z=function(e){var t=e.type,n=void 0===t?"button":t,c=e.loading,r=e.dataCy,s=e.className,a=e.disabled,o=void 0!==a&&a,i=e.children,l=e.onClick;return Object(h.jsx)("button",{type:n,"data-cy":r,className:b()("button is-link",s,{"is-loading":c}),onClick:l,disabled:o,children:i})},H=function(){var e=Object(m.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(m.useState)([]),d=Object(l.a)(o,2),j=d[0],x=d[1],v=Object(m.useState)(0),g=Object(l.a)(v,2),C=g[0],N=g[1],y=Object(m.useState)(null),w=Object(l.a)(y,2),k=w[0],P=w[1],S=Object(m.useState)(c.None),F=Object(l.a)(S,2),G=F[0],D=F[1],A=Object(m.useState)(s.None),B=Object(l.a)(A,2),M=B[0],_=B[1],J=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(s.Posts),D(c.None),P(null),e.prev=3,e.next=6,I(t);case 6:n=e.sent,a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),D(c.GetPosts);case 13:return e.prev=13,_(s.None),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}(),R=Object(m.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===k||void 0===k?void 0:k.id)!==t.id){e.next=3;break}return P(null),e.abrupt("return");case 3:return _(s.Comments),P(t),e.prev=5,e.next=8,r=t.id,E("/comments?postId=".concat(r));case 8:n=e.sent,x(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),D(c.GetComments);case 15:return e.prev=15,_(s.None),e.finish(15);case 18:case"end":return e.stop()}var r}),e,null,[[5,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),[G,M,k,j]),W=Object(m.useCallback)((function(e){N(e),J(e)}),[C]),q=Object(m.useMemo)((function(){return Object({error:G,currentUserId:C})}),[G,C]),z=Object(m.useMemo)((function(){return Object({post:k,error:G,loading:M,comments:j,setLoading:_,setComments:x,setError:D})}),[k,G,M,j]),H=Object(m.useMemo)((function(){return!n.length&&!!C&&!M&&!G}),[n,C,M]);return Object(h.jsx)("main",{className:"section","aria-hidden":"true",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"tile is-ancestor",children:[Object(h.jsx)("div",{className:"tile is-parent",children:Object(h.jsxs)("div",{className:"tile is-child box is-success",children:[Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(p.Provider,{value:q,children:Object(h.jsx)(U,{currentUserId:C,setError:D,handleUserSelect:W})})}),Object(h.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!C&&G!==c.GetUsers&&Object(h.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),M===s.Posts&&Object(h.jsx)(O,{}),G===c.GetPosts&&Object(h.jsx)(L,{type:r.Danger,dataCy:"PostsLoadingError",text:"Something went wrong!"}),H&&Object(h.jsx)(L,{dataCy:"NoPostsYet",text:"No posts yet"}),n.length>0&&M!==s.Posts&&Object(h.jsx)(T,{currentPostId:(null===k||void 0===k?void 0:k.id)||0,posts:n,getComments:R})]})]})}),Object(h.jsx)("div",{"data-cy":"Sidebar",className:b()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":!!k}),children:Object(h.jsx)("div",{className:"tile is-child box is-success ",children:!!k&&Object(h.jsx)(f.Provider,{value:z,children:Object(h.jsx)(Y,{})})})})]})})})};o.a.render(Object(h.jsx)(H,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e020da90.chunk.js.map