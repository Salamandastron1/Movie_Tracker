(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/popcorn.58c63aa0.png"},24:function(e,t,a){},31:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(25),o=a.n(s),i=a(8),c=a(26),u=a(57),p=a(27),l=a(6),m=a(21),f=Object(i.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOST_RECENT":return Object(m.a)(e).concat(Object(m.a)(t.movies));case"TOGGLE_FAVORITE":return e.map(function(e){return e.id!==t.id?e:Object.assign({},e,{favorited:!e.favorited})});case"LOG_OUT":return e.map(function(e){return Object.assign({},e,{favorited:!1})});default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ID":return t.id;case"LOG_OUT":return 0;default:return e}},name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NAME":return t.name;case"LOG_OUT":return"";default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR_RECEIVED":return t.error;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL";switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_ALL":return"SHOW_ALL";case"SHOW_FAVORITES":return"SHOW_FAVORITES";default:return e}}}),v=(a(39),a(9)),d=a(10),h=a(12),b=a(11),E=a(13),O=a(59),w=a(51),g=a(58),_=a(2),j=a.n(_),y=a(5),N=function(e){return{type:"SET_MOST_RECENT",movies:e}},k=function(){var e=Object(y.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("d4e6b557fe6d947099279f94de866258","&language=en-US&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",x(a));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),x=function(e){return e.results.map(function(e){return{title:e.title,poster_path:e.poster_path,overview:e.overview,release_date:e.release_date,favorited:!1,id:e.id,vote_average:e.vote_average}})},S=function(e){var t;if(e.name){var a=e.email,r=e.password,n=e.name;t={method:"POST",body:JSON.stringify({name:n,password:r,email:a}),headers:{"Content-Type":"application/json"}}}else{var s=e.email,o=e.password;t={method:"POST",body:JSON.stringify({password:o,email:s}),headers:{"Content-Type":"application/json"}}}return t},T=function(){var e=Object(y.a)(j.a.mark(function e(t){var a,r,n,s,o,i;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/api/users",a=S(t),e.next=4,fetch("http://localhost:3000/api/users",a);case 4:if(!(r=e.sent).ok){e.next=13;break}return e.next=8,r.json();case 8:return n=e.sent,s=n.data,o=s.name,i=s.id,e.abrupt("return",{name:o,id:i});case 13:throw new Error("Email and Password do not match.");case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(y.a)(j.a.mark(function e(t){var a,r,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/api/users/new",a=S(t),e.next=4,fetch("http://localhost:3000/api/users/new",a);case 4:if(!(r=e.sent).ok){e.next=12;break}return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",{name:t.name,id:n.id});case 12:throw new Error("Email has already been used.");case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(y.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.name){e.next=6;break}return e.next=3,C(t);case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,T(t);case 8:a=e.sent;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(j.a.mark(function e(t){var a,r,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://localhost:3000/api/users/".concat(t,"/favorites"),e.next=3,fetch(a);case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.data);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),R=function(e){return{type:"TOGGLE_FAVORITE",id:e}},U=function(e){return{type:"ERROR_RECEIVED",error:e}},F=a(20),I=a.n(F),V=(a(43),Object(l.b)(function(e){return{user_id:e.id}},function(e){return{postFavorites:function(t,a,r){e(function(e,t,a){var r,n;if(!a&&e)r="http://localhost:3000/api/users/favorites/new",n={method:"POST",body:JSON.stringify({movie_id:t.id,user_id:e,title:t.title,poster_path:t.poster_path,release_date:t.release_date,vote_average:t.vote_average,overview:t.overview}),headers:{"Content-Type":"application/json"}};else{if(!e)return function(){alert("Please log in to favorite a movie.")};r="http://localhost:3000/api/users/".concat(e,"/favorites/").concat(t.id),n={method:"DELETE"}}return function(){var e=Object(y.a)(j.a.mark(function e(a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,n);case 2:e.sent.ok?a(R(t.id)):a(U("Favorite not added, 500 error"));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}(t,a,r))}}})(function(e){var t=e.title,a=e.id,r=e.postFavorites,s=e.poster_path,o=e.release_date,i=e.overview,c=e.user_id,u=e.vote_average,p=e.favorited,l={title:t,id:a,poster_path:s,release_date:o,overview:i,vote_average:u};return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"movie-title "+(p?"has-color":"")},n.a.createElement("img",{className:"popcorn-"+(p?"show":"hide"),src:I.a,alt:"Pixel popcorn. It indicates that this movie has been favorited."}),n.a.createElement("h1",{className:"soda-pop"},t),n.a.createElement("img",{className:"popcorn-"+(p?"show":"hide"),src:I.a,alt:"Pixel popcorn. It indicates that this movie has been favorited."})),n.a.createElement("div",{className:"jello",onClick:function(){return r(c,l,p)}},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+s,alt:'This is the poster for the movie "'.concat(t,'" in theaters ').concat(o,".")})),n.a.createElement("p",{className:"overview"},i),n.a.createElement("p",{className:"release_date"},o))})),G=(a(45),function(e){function t(){var e,a;Object(v.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=Object(y.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return t=e.sent,a.props.onload(t),e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),Error(e.t0.message);case 11:case"end":return e.stop()}},e,this,[[0,8]])})),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.movies;switch(t.location.pathname){case"/":e=a.map(function(e){return n.a.createElement(V,Object.assign({key:e.id},e))});break;case"/favorites":e=a.filter(function(e){return e.favorited}).map(function(e){return n.a.createElement(V,Object.assign({key:e.id},e))});break;default:e=a.map(function(e){return n.a.createElement(V,Object.assign({key:e.id},e))})}return n.a.createElement("section",{className:"card-container"},e)}}]),t}(r.Component)),W=Object(l.b)(function(e){return{movies:e.movies}},function(e){return{onload:function(t){return e(N(t))}}})(G),D=(a(24),a(15)),H=function(e){return{type:"GET_ID",id:e}},M=function(e){return{type:"GET_NAME",name:e}},P=(a(49),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).updateValue=function(e){var t=e.target,r=t.value,n=t.name;a.setState(Object(D.a)({},n,r))},a.submitNewUser=function(){var e=Object(y.a)(j.a.mark(function e(t){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L(a.state);case 4:r=e.sent,a.props.loginUser(r.id,r.name),a.props.setError(""),a.props.history.push("/"),a.setState({name:"",email:"",password:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a.props.setError(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",email:"",password:""},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,r=e.password,s=this.props.error;return n.a.createElement("form",{className:"sign-up-form",onSubmit:this.submitNewUser},""!==s&&n.a.createElement("h2",{className:"error"},s),n.a.createElement("input",{className:"name",onChange:this.updateValue,name:"name",value:t,placeholder:"Enter your name"}),n.a.createElement("input",{className:"email",onChange:this.updateValue,name:"email",value:a,placeholder:"Enter your email"}),n.a.createElement("input",{className:"password",onChange:this.updateValue,name:"password",value:r,type:"password",placeholder:"Enter your password"}),n.a.createElement("input",{className:"submit",type:"submit",value:"Sign Up"}),n.a.createElement(O.a,{className:"sign-in",to:"/login"},"Sign In"))}}]),t}(r.Component)),J=Object(l.b)(function(e){return{error:e.error}},function(e){return{loginUser:function(t,a){e(H(t)),e(M(a))},setError:function(t){e(U(t))}}})(P),B=(a(53),function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).updateValue=function(t){var a=t.target,r=a.value,n=a.name;e.setState(Object(D.a)({},n,r))},e.loginUser=function(){var t=Object(y.a)(j.a.mark(function t(a){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,L(e.state);case 4:return r=t.sent,e.props.loginUser(r.id,r.name),t.next=8,A(r.id);case 8:t.sent.forEach(function(t){if(e.props.movies.some(function(e){return e.id===t.movie_id}))e.props.updateFavorite(t.movie_id);else{var a={title:t.title,poster_path:t.poster_path,overview:t.overview,release_date:t.release_date,favorited:!0,id:t.movie_id,vote_average:t.vote_average};e.props.pushFavorite([a])}}),e.props.setError(""),e.props.history.push("/"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.props.setError(t.t0.message);case 17:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:""},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,r=this.props.error;return n.a.createElement("form",{className:"sign-in-form",onSubmit:this.loginUser},""!==r&&n.a.createElement("h2",{className:"error"}," ",r," "),n.a.createElement("input",{className:"email",onChange:this.updateValue,name:"email",value:t,placeholder:"Enter your email"}),n.a.createElement("input",{className:"password",onChange:this.updateValue,name:"password",value:a,type:"password",placeholder:"Enter your password"}),n.a.createElement("input",{className:"submit",type:"submit",value:"Sign In"}),n.a.createElement(O.a,{className:"sign-up",to:"/signup"},"Sign up"))}}]),t}(r.Component)),q=Object(l.b)(function(e){return{error:e.error,movies:e.movies}},function(e){return{loginUser:function(t,a){e(H(t)),e(M(a))},setError:function(t){e(U(t))},updateFavorite:function(t){e(R(t))},pushFavorite:function(t){e(N(t))}}})(B),z=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,r=e.logoutUser,s=e.showFavorites,o=e.favorites,i=e.showAll;return n.a.createElement("main",{className:"App"},n.a.createElement("header",null,n.a.createElement(O.a,{className:"title",to:"/",onClick:i},"Movie Tracker"),t?n.a.createElement("h2",{className:"welcome"},"Welcome, ".concat(a,"!")):null,t?n.a.createElement(O.a,{className:"log-out",to:"/",onClick:r},"Sign Out",n.a.createElement("i",{className:"fas fa-sign-in-alt"})):n.a.createElement(O.a,{className:"log-link",to:"/login"},"Login",n.a.createElement("i",{className:"fas fa-sign-in-alt"})),t&&"SHOW_ALL"===o?n.a.createElement(O.a,{to:"/favorites",onClick:s,className:"favorites"},"Favorites"):null,n.a.createElement(w.a,{exact:!0,path:"/login",component:q}),n.a.createElement(w.a,{exact:!0,path:"/signup",component:J})),n.a.createElement(w.a,{path:"/",component:W}))}}]),t}(r.Component),K=Object(g.a)(Object(l.b)(function(e){return{id:e.id,name:e.name,favorites:e.favorites}},function(e){return{logoutUser:function(){return e({type:"LOG_OUT"})},showFavorites:function(){return e({type:"SHOW_FAVORITES"})},showAll:function(){return e({type:"SHOW_ALL"})}}})(z)),Q=Object(i.createStore)(f,Object(p.composeWithDevTools)(Object(i.applyMiddleware)(c.a)));o.a.render(n.a.createElement(l.a,{store:Q},n.a.createElement(u.a,null,n.a.createElement(K,null))),document.getElementById("root"))}},[[31,2,1]]]);
//# sourceMappingURL=main.13578785.chunk.js.map