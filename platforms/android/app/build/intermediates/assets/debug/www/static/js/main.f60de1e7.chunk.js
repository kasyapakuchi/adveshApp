(this.webpackJsonploginforms=this.webpackJsonploginforms||[]).push([[0],{30:function(e,a,t){e.exports=t(62)},35:function(e,a,t){},36:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(26),s=t.n(l),c=(t(35),t(8)),o=(t(36),t(7)),i=t(1),m="http://studioadvesh.azurewebsites.net";var u=Object(i.g)((function(e){var a;return"string"!==typeof(a=e.location.pathname.substring(1,e.location.pathname.length))||(a.charAt(0).toUpperCase(),a.slice(1)),e.location.pathname,n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{class:"navbar-brand",href:"#"},"Navbar"),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{class:"navbar-nav"},n.a.createElement("li",{class:"nav-item active"},n.a.createElement(o.b,{class:"nav-link",to:"/"},"Home")),n.a.createElement("li",{class:"nav-item"},n.a.createElement(o.b,{class:"nav-link",to:"/login"},"Login")),n.a.createElement("li",{class:"nav-item"},n.a.createElement(o.b,{class:"nav-link",to:"/products"},"Products"))),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{className:"row col-12 d-flex justify-content-center text-white"},function(){if("/home"===e.location.pathname)return n.a.createElement("div",{className:"ml-auto"},n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return localStorage.removeItem("login_access_token"),void e.history.push("/login")}},"Logout"))}())))})),d=t(12),p=t(9),g=t(10),E=t.n(g);t(59);var h=Object(i.g)((function(e){var a=Object(r.useState)({email:"",password:"",successMessage:null}),t=Object(c.a)(a,2),l=t[0],s=t[1],o=function(e){var a=e.target,t=a.id,r=a.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t,r))}))},i=function(){e.updateTitle("Home"),e.history.push("/home")};return n.a.createElement("div",{className:"card col-12 col-lg-4 login-card mt-2 hv-center"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:l.email,onChange:o}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l.password,onChange:o})),n.a.createElement("div",{className:"form-check"}),n.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault();var t={email:l.email,password:l.password};E.a.post(m+"/register",t).then((function(a){200===a.status?(s((function(e){return Object(p.a)(Object(p.a)({},e),{},{successMessage:"Login successful. Redirecting to home page.."})})),localStorage.setItem("login_access_token",a.data.token),i(),e.showError(null)):204===a.code?e.showError("Username and password do not match"):e.showError("Username does not exists")})).catch((function(e){console.log(e)}))}},"Submit")),n.a.createElement("div",{className:"alert alert-success mt-2",style:{display:l.successMessage?"block":"none"},role:"alert"},l.successMessage),n.a.createElement("div",{className:"registerMessage"},n.a.createElement("span",null,"Dont have an account? "),n.a.createElement("span",{className:"loginText",onClick:function(){return e.history.push("/register"),void e.updateTitle("Register")}},"Register")))}));t(60);var v=Object(i.g)((function(e){var a=Object(r.useState)({email:"",password:"",confirmPassword:"",successMessage:null}),t=Object(c.a)(a,2),l=t[0],s=t[1],o=function(e){var a=e.target,t=a.id,r=a.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t,r))}))},i=function(){e.updateTitle("Home"),e.history.push("/home")};return n.a.createElement("div",{className:"card col-12 col-lg-4 login-card mt-2 hv-center"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:l.email,onChange:o}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l.password,onChange:o})),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Confirm Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",value:l.confirmPassword,onChange:o})),n.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),l.password===l.confirmPassword?function(){if(l.email.length&&l.password.length){e.showError(null);var a={email:l.email,password:l.password};E.a.post(m+"/user/register",a).then((function(a){200===a.status?(s((function(e){return Object(p.a)(Object(p.a)({},e),{},{successMessage:"Login successful. Redirecting to home page.."})})),localStorage.setItem("login_access_token",a.data.token),i(),e.showError(null)):e.showError("Some error ocurred")})).catch((function(e){console.log(e)}))}else e.showError("Please enter valid username and password")}():e.showError("Passwords do not match")}},"Register")),n.a.createElement("div",{className:"alert alert-success mt-2",style:{display:l.successMessage?"block":"none"},role:"alert"},l.successMessage),n.a.createElement("div",{className:"mt-2"},n.a.createElement("span",null,"Already have an account? "),n.a.createElement("span",{className:"loginText",onClick:function(){return e.updateTitle("Login"),void e.history.push("/login")}},"Login here")))}));var b=Object(i.g)((function(e){return Object(r.useEffect)((function(){})),n.a.createElement("div",{className:"mt-2"},"Home page content")})),f=function(e){var a=e.products;return n.a.createElement("div",null,n.a.createElement("center",null,n.a.createElement("h1",null,"Product List")),a.map((function(e){return n.a.createElement("div",{class:"card-big"},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},e.shortName),n.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},e.longName),n.a.createElement("p",{class:"card-text"},"ID: ",e.productID),n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("img",{class:"img-thumbnail rounded ",src:e.imageUrls,alt:"Italian Trulli"})),n.a.createElement("p",{class:"card-text"},"Price: ",e.price),n.a.createElement("p",{class:"card-text"},"Description: ",e.description),n.a.createElement("p",{class:"card-text"},"Category: ",e.category),n.a.createElement("p",{class:"card-text"},"Sub Category: ",e.subcategory),n.a.createElement("p",{class:"card-text"},"Material: ",e.material),n.a.createElement("p",{class:"card-text"},"Colour: ",e.colour)))})))};var w=Object(i.g)((function(e){var a=Object(r.useState)({successMessage:null,products:[]}),t=Object(c.a)(a,2),l=t[0],s=(t[1],function(){e.updateTitle("Products"),e.history.push("/products")});return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(a){a.preventDefault();var t={products:l.products,successMessage:l.successMessage};E.a.get(m+"/products",t).then((function(a){200===a.status?(console.info(a),l.successMessage="Login successful. Redirecting to home page..",l.products=a.data,localStorage.setItem("login_access_token",a.data.token),s(),e.showError(null)):204===a.code?e.showError("Username and password do not match"):e.showError("Username does not exists")})).catch((function(e){console.log(e)}))}},"list"),n.a.createElement(f,{products:l.products}))})),y=t(29),N=["children"];var x=function(e){var a=e.children,t=Object(y.a)(e,N);return n.a.createElement(i.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("login_access_token")?a:n.a.createElement(i.a,{to:{pathname:"/login",state:{from:t}}})}}))};t(61);var j=function(e){var a=Object(r.useState)("none"),t=Object(c.a)(a,2),l=t[0],s=t[1],o=function(){s("none"),e.hideError(null)};return Object(r.useEffect)((function(){null!==e.errorMessage?s("block"):o()})),n.a.createElement("div",{className:"alert alert-danger alert-dismissable mt-4",role:"alert",id:"alertPopUp",style:{display:l}},n.a.createElement("div",{className:"d-flex alertMessage"},n.a.createElement("span",null,e.errorMessage),n.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return o()}},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))};var O=function(){var e=Object(r.useState)(null),a=Object(c.a)(e,2),t=a[0],l=a[1],s=Object(r.useState)(null),m=Object(c.a)(s,2),d=m[0],p=m[1];return n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(u,{title:t}),n.a.createElement("div",{className:"container d-flex align-items-center flex-column"},n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/",exact:!0},n.a.createElement(b,null)),n.a.createElement(i.b,{path:"/register"},n.a.createElement(v,{showError:p,updateTitle:l})),n.a.createElement(i.b,{path:"/login"},n.a.createElement(h,{showError:p,updateTitle:l})),n.a.createElement(x,{path:"/home"},n.a.createElement(b,null)),n.a.createElement(x,{path:"/products"},n.a.createElement(w,{showError:p,updateTitle:l}))),n.a.createElement(j,{errorMessage:d,hideError:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f60de1e7.chunk.js.map