(this.webpackJsonppizzaorderapp=this.webpackJsonppizzaorderapp||[]).push([[0],{27:function(t,e,a){t.exports=a(45)},32:function(t,e,a){},33:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n,r,c=a(0),l=a.n(c),i=a(23),o=a.n(i),m=(a(32),a(1)),s=a(2),u=a(4),d=a(3),p=a(5),b=(a(33),a(34),a(7)),f=a(11),h=a(12),v=h.a.button(n||(n=Object(f.a)(["\n\tbackground: var(--mainblue);\n\tfont-size: 1.4rem;\n\tfont-family: 'Fredoka One', cursive;\n\tcolor: white;\n\ttext-transform: uppercase;\n\tborder: white 3px;\n    border-radius: 0.4rem;\n    padding: 0.3rem\n\tcursor: pointer;\n\tdisplay: inline-block;\n\ttransition: all 0.4s ease-in-out;\n\t&:hover {\n\t\tbackground: #5555ee;\n\t}\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),E=h.a.nav(r||(r=Object(f.a)(["\n\tbackground: #2a2a72;\n\t/* border-bottom: var(--mainblue) !important; */\n\t.nav-link {\n\t\tcolor: var(--mainwhite) !important;\n\t\tfont-size: 3rem;\n\t\ttext-transform: uppercase;\n\t\tfont-family: 'Fredoka one', cursive;\n\t\t/* font-style: italic; */\n\t}\n\n\t@media (max-width: 576px) {\n\t\t.navbar-nav {\n\t\t\tflex-direction: row !important;\n\t\t}\n\t}\n"]))),g=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(E,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},l.a.createElement(b.b,{to:"/"},l.a.createElement("img",{src:"logo.svg",alt:"Home",className:"navbar-brand",width:"70px",height:"70px"})),l.a.createElement("ul",{className:"navbar-nav align-items-center"},l.a.createElement("li",{className:"nav-item ml-5"},l.a.createElement(b.b,{to:"/",className:"nav-link"},"NGPIZZA"))),l.a.createElement(b.b,{to:"/cart",className:"ml-auto"},l.a.createElement(v,null,"My Cart",l.a.createElement("span",null,l.a.createElement("img",{src:"cart.svg",width:"40px",height:"40px",alt:""})))))}}]),a}(c.Component);function y(t){var e=t.title;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto my-2 text-center"},l.a.createElement("h1",{className:"text-capitalize font-weight-bold"},l.a.createElement("strong",{className:"text-blue"},e))))}var x,z,j=a(10),O=a(17),N=[{id:1,title:"Fresh Veggie",img:"Pizzas/Fresh_Veggie.jpg",price:11,info:"Onion and capsicum",inCart:!1,count:0,total:0},{id:2,title:"Farm House",img:"Pizzas/Farmhouse.jpg",price:12.75,info:"Capsicum, mushroom and tomatoes",inCart:!1,count:0,total:0},{id:3,title:"Cheese N Corn",img:"Pizzas/Corn_&_Cheese.jpg",price:10,info:"Cheese and golden corn",inCart:!1,count:0,total:0},{id:4,title:"Double Cheese Margherita",img:"Pizzas/Double_Cheese_Margherita.jpg",price:8.5,info:"Margherita loaded with extra cheese",inCart:!1,count:0,total:0},{id:5,title:"Indian Tandoori Paneer",img:"Pizzas/IndianTandooriPaneer.jpg",price:14.6,info:"Tandoori paneer with capsicum, red paprika and mint mayo",inCart:!1,count:0,total:0},{id:6,title:"Mexican Green Wave",img:"Pizzas/Mexican_Green_Wave.jpg",price:16,info:"Onion, capsicum, tomatoes and jalapeno with mexican herbs",inCart:!1,count:0,total:0},{id:7,title:"Peppy Paneer",img:"Pizzas/Peppy_Paneer.jpg",price:14,info:"Paneer with crisp capsicum and spicy red paneer",inCart:!1,count:0,total:0},{id:8,title:"Paneer Makhani",img:"Pizzas/Paneer_Makhni.jpg",price:15,info:"Paneer and capsicum on makhani sauce",inCart:!1,count:0,total:0}],k=l.a.createContext(),C=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={pizzas:N,cart:[],cartSubTotal:0,cartTotal:0,cartTax:0},t.setPizzas=function(){var e=[];N.forEach((function(t){var a=Object(O.a)({},t);e=[].concat(Object(j.a)(e),[a])})),t.setState((function(){return{pizzas:e}}),t.checkCartItems)},t.getPizza=function(e){return t.state.pizzas.find((function(t){return t.id===e}))},t.addToCart=function(e){var a=Object(j.a)(t.state.pizzas),n=a.indexOf(t.getPizza(e)),r=a[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,t.setState((function(){return{pizzas:Object(j.a)(a),cart:[].concat(Object(j.a)(t.state.cart),[r])}}),t.addTotals)},t.increment=function(e){var a=Object(j.a)(t.state.cart),n=a.find((function(t){return t.id===e})),r=a.indexOf(n),c=a[r];c.count=c.count+1,c.total=c.count*c.price,t.setState((function(){return{cart:Object(j.a)(a)}}),t.addTotals)},t.decrement=function(e){var a=Object(j.a)(t.state.cart),n=a.find((function(t){return t.id===e})),r=a.indexOf(n),c=a[r];c.count=c.count-1,0===c.count?t.removePizza(e):(c.total=c.count*c.price,t.setState((function(){return{cart:Object(j.a)(a)}}),t.addTotals))},t.getTotals=function(){var e=0;t.state.cart.map((function(t){return e+=t.total}));var a=parseFloat((.1*e).toFixed(2)),n=parseFloat((.05*e).toFixed(2));return{subTotal:e,tax:a,delivery:n,total:e+a}},t.addTotals=function(){var e=t.getTotals();t.setState((function(){return{cartSubTotal:e.subTotal,cartTax:e.tax,cartTotal:e.total,delivery:e.delivery}}),(function(){}))},t.removePizza=function(e){var a=Object(j.a)(t.state.pizzas),n=Object(j.a)(t.state.cart),r=a.indexOf(t.getPizza(e)),c=a[r];c.inCart=!1,c.count=0,c.total=0,n=n.filter((function(t){return t.id!==e})),t.setState((function(){return{cart:Object(j.a)(n),pizzas:Object(j.a)(a)}}),t.addTotals)},t.clearCart=function(){t.setState((function(){return{cart:[]}}),(function(){t.setPizzas(),t.addTotals()}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setPizzas()}},{key:"render",value:function(){return l.a.createElement(k.Provider,{value:Object(O.a)(Object(O.a)({},this.state),{},{addToCart:this.addToCart,increment:this.increment,decrement:this.decrement,removePizza:this.removePizza,clearCart:this.clearCart})},this.props.children)}}]),a}(c.Component),w=k.Consumer,P=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.pizza,e=t.id,a=t.title,n=t.img,r=t.info,c=t.price,i=t.inCart;return l.a.createElement(T,{className:"col-9 mx-auto my-auto col-md-6 col-lg-4"},l.a.createElement("div",{className:"card"},l.a.createElement(w,null,(function(t){return l.a.createElement("div",{className:"img-container p-5"},l.a.createElement("img",{src:n,alt:"pizza",className:"card-img-top"}),l.a.createElement("h3",{className:"pizza-title text-center"},a),l.a.createElement("div",{className:"pizza-info text-center"},r),l.a.createElement("div",{className:"pizza-price"}," $",c),l.a.createElement(b.b,{to:"/"},l.a.createElement(v,{className:"cart-btn",disabled:!!i,onClick:function(){console.log("added to cart"),t.addToCart(e)}},i?l.a.createElement("p",{className:"mb-0",disabled:!0},"in cart"):l.a.createElement("p",{className:"mb-0",disabled:!0},"add to cart"))))}))))}}]),a}(c.Component),T=h.a.div(x||(x=Object(f.a)(["\n\t.card {\n\t\tborder-color: transparent;\n\t\ttransition: all 1s linear;\n\t}\n\n\t/* .card-footer {\n\t\tbackground: transparent;\n\t\tborder-top: transparent;\n\t\ttransition: all 1s linear;\n\t} */\n\n\t&:hover {\n\t\t.card {\n\t\t\tborder: 0.04rem solid rgba(0, 0, 0, 0.2);\n\t\t\tbox-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);\n\t\t}\n\t\t/* .card-footer {\n\t\t\tbackground: rgba(247, 247, 247);\n\t\t} */\n\t}\n\n\t.img-container {\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t}\n\t.card-img-top {\n\t\ttransition: all 0.5s linear;\n\t}\n\t.img-container:hover .card-img-top {\n\t\ttransform: scale(1.06);\n\t}\n\n\t.pizza-price {\n\t\t/* position: absolute; */\n\t\tpadding: 0.3rem 0.6rem;\n\t\tbackground: transparent;\n\t\tfont-size: 1.2rem;\n\t\tborder-radius: 0.7rem;\n\t\ttext-align: center;\n\t\tfont-family: 'fredoka one';\n\t}\n\n\t.cart-btn {\n\t\tposition: absolute;\n\t\tpadding: 0.3rem 0.6rem;\n\t\tbackground: var(--mainblue);\n\t\tfont-size: 1.2rem;\n\t\tborder-radius: 0.7rem;\n\t\ttransition: all 0.5s ease-in-out;\n\t\tborder: none;\n\t\twidth: 76%;\n\t}\n\n\t.img-container:hover .cart-btn {\n\t\ttransform: translate(0, 0);\n\t}\n\t.cart-btn:hover {\n\t\tbackground: #5555ee;\n\t\tcursor: pointer;\n\t}\n"]))),F=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{className:"py-5"},l.a.createElement("div",{className:"container"},l.a.createElement(y,{title:"Our Menu"}),l.a.createElement("div",{className:"row"},l.a.createElement(w,null,(function(t){return t.pizzas.map((function(t){return l.a.createElement(P,{key:t.id,pizza:t})}))}))))))}}]),a}(c.Component),q=h.a.section(z||(z=Object(f.a)([""]))),M=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"home.jpg",alt:"",width:"100%",height:"450rem"}))}}]),a}(c.Component);function S(t){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-uppercase pt-5"},l.a.createElement("h1",{className:"display-3"},"404"),l.a.createElement("h1",null,"error"),l.a.createElement("h2",null,"page not found"),l.a.createElement("h3",null,"the requested URL"," ",l.a.createElement("span",{className:"text-danger"},'"',t.location.pathname,'"')," was not found"))))}var _=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.value,e=t.cartSubTotal,a=t.cartTax,n=t.cartTotal,r=t.cart,c=t.clearCart,i=t.delivery,o=0===r.length;return l.a.createElement(l.a.Fragment,null,!o&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},l.a.createElement(b.b,{to:"/"},l.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){c()}},"clear cart")),l.a.createElement("h5",null,l.a.createElement("span",{className:"text-title"}," subtotal :")," ",l.a.createElement("strong",null,"$ ",e," ")),l.a.createElement("h5",null,l.a.createElement("span",{className:"text-title"}," tax :")," ",l.a.createElement("strong",null,"$ ",a," ")),l.a.createElement("h5",null,l.a.createElement("span",{className:"text-title"}," delivery :")," ",l.a.createElement("strong",null,"$ ",i," ")),l.a.createElement("h5",null,l.a.createElement("span",{className:"text-title"}," total :")," ",l.a.createElement("strong",null,"$ ",n," ")),l.a.createElement(b.b,{to:"/checkout"},l.a.createElement(v,{className:"bg-navy"},"Proceed"))))))}}]),a}(c.Component);function $(){return l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto text-center"},l.a.createElement(y,{title:"Your cart is empty"}))))}var I,D,W=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.item,e=t.id,a=t.title,n=t.img,r=t.price,c=t.total,i=t.count,o=this.props.value,m=o.increment,s=o.decrement,u=o.removePizza;return l.a.createElement("div",{className:"row my-1 text-capitalize text-center"},l.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},l.a.createElement("img",{src:n,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:""})),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},l.a.createElement("span",{className:"d-lg-none"})," ",a),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},l.a.createElement("strong",null,l.a.createElement("span",{className:"d-lg-none"})," $",r)),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0 "},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",null,l.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return s(e)}},"-"),l.a.createElement("span",{className:"btn btn-black mx-1"},i),l.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return m(e)}},"+")))),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},l.a.createElement("div",{className:" cart-icon",onClick:function(){return u(e)}},l.a.createElement("img",{src:"bin.svg",width:"20px",height:"20px",alt:""}))),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},l.a.createElement("strong",null,"$",c," ")))}}]),a}(c.Component),A=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.value,e=this.props.value.cart;return console.log(e),l.a.createElement("div",{className:"container-fluid"},e.map((function(e){return l.a.createElement(W,{key:e.id,item:e,value:t})})))}}]),a}(c.Component),G=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(w,null,(function(t){return t.cart.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{title:"Your Cart"}),l.a.createElement(A,{value:t}),l.a.createElement(_,{value:t})):l.a.createElement($,null)})))}}]),a}(c.Component),Y=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(B,{className:"container"},l.a.createElement("form",{method:"get",className:"details-form text-center"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"name",required:"required"}),l.a.createElement("br",null),l.a.createElement("label",null,"Phone no."),l.a.createElement("input",{type:"tel",className:"phone",required:"required"}),l.a.createElement("br",null),l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"text",className:"address",required:"required"}),l.a.createElement("br",null),l.a.createElement("label",null,"Postcode"),l.a.createElement("input",{type:"text",className:"postcode",required:"required"}),l.a.createElement("br",null),l.a.createElement("label",null,"Email id"),l.a.createElement("input",{type:"email",className:"email",required:"required"}),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"cash",name:"paytype"}),l.a.createElement("label",{htmlFor:"cash",className:"payment"},"Cash on Delivery"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"online",name:"paytype"}),l.a.createElement("label",{htmlFor:"online",className:"payment"},"Online payment"),l.a.createElement("br",null),l.a.createElement(b.b,{to:"/orderplaced"},l.a.createElement("input",{type:"submit",value:"Confirm order"}))))}}]),a}(c.Component),B=h.a.div(I||(I=Object(f.a)(["\n\tlabel {\n\t\tfont-family: 'Fredoka one';\n\t\tfont-size: 1.5rem;\n\t\tmargin-top: 40px;\n\t}\n\n\tinput {\n\t\tborder-radius: 4px;\n\t\tpadding: 10px;\n\t\tmargin-left: 70px;\n\t\twidth: 270px;\n\t\tborder-color: black;\n\t\tborder-width: 0.1rem;\n\t\tfont-family: 'Fredoka-one', cursive;\n\t}\n\n\t.payment {\n\t\tfont-family: 'Fredoka one';\n\t\tfont-size: 20px;\n\t\tmargin: 15px;\n\t\tmargin-left: 0.1rem;\n\t}\n\n\tinput[type='radio'] {\n\t\tdisplay: none;\n\t}\n\n\tinput[type='radio'] + label:before {\n\t\talign-items: center;\n\t\twidth: 1.3rem;\n\t\theight: 1.3rem;\n\t\tborder-radius: 50%;\n\t\tmargin-right: 1.5rem;\n\t\tmargin-top: 0.4rem;\n\t\tposition: relative;\n\t\tbackground-color: #dfdfdf;\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\tvisibility: visible;\n\t\tborder: 2px solid white;\n\t\tcursor: pointer;\n\t}\n\n\tinput[type='radio']:checked + label:before {\n\t\twidth: 1.3rem;\n\t\theight: 1.3rem;\n\t\tborder-radius: 50%;\n\t\tmargin-right: 1.5rem;\n\t\tmargin-top: 0.4rem;\n\t\tposition: relative;\n\t\tbackground-color: #ffa500;\n\t\tcontent: '';\n\t\tdisplay: inline-block;\n\t\tvisibility: visible;\n\t\tborder: 2px solid white;\n\t}\n\n\tinput[type='radio'] + label {\n\t\tmargin-top: 0.4rem;\n\t}\n\n\tinput[type='submit'] {\n\t\tbackground: var(--mainblue);\n\t\tfont-size: 1.4rem;\n\t\tfont-family: 'Fredoka One', cursive;\n\t\tcolor: white;\n\t\ttext-transform: uppercase;\n\t\tborder: white 3px;\n\t\tborder-radius: 0.4rem;\n\t\tpadding: 0.2rem;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t\ttransition: all 0.4s ease-in-out;\n\t\twidth: 26rem;\n\t\t&:hover {\n\t\t\tbackground: #5555ee;\n\t\t}\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n"]))),H=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(J,null,l.a.createElement("h1",null,"Thank you"),l.a.createElement("h3",null,"Your order has been placed"),l.a.createElement(b.b,{to:"/"},l.a.createElement("img",{src:"logo.svg",width:"300px",height:"300px",alt:""})))}}]),a}(c.Component),J=h.a.div(D||(D=Object(f.a)(["\n\th1 {\n\t\tfont-family: cursive;\n\t\tfont-size: 4rem;\n\t\ttext-align: center;\n\t\tmargin-top: 2rem;\n\t\tfont-style: italic;\n\t\tfont-weight: bolder;\n\t\tcolor: #2a2a72;\n\t}\n\n\th3 {\n\t\tfont-family: cursive;\n\t\tfont-size: 3rem;\n\t\ttext-align: center;\n\t\tfont-style: italic;\n\t\tfont-weight: bold;\n\t}\n\timg {\n\t\tmargin-left: 40%;\n\t}\n"]))),V=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,null),l.a.createElement(F,null))}}),l.a.createElement(p.a,{path:"/pizzalist",component:F}),l.a.createElement(p.a,{path:"/cart",component:G}),l.a.createElement(p.a,{path:"/checkout",component:Y}),l.a.createElement(p.a,{path:"/orderplaced",component:H}),l.a.createElement(p.a,{component:S})))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,null,l.a.createElement(b.a,null,l.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.67e0eea1.chunk.js.map