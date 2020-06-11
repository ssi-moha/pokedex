(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{54:function(e,n,t){e.exports=t(87)},59:function(e,n,t){},60:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(22),c=t.n(o),i=(t(59),t(3)),l=(t(60),t(53)),u=t(16),m=t.n(u),s=t(24),p=new(t(88).Pokedex)({protocol:"https",hostName:"pokeapi.co",versionPath:"/api/v2/",cache:!0,timeout:6e4});function d(e){return{type:"POKEMON_LIST_FAILURE",payload:e}}var f=t(18),b=t(4),E=t(17);function g(){var e=Object(i.a)(["\n  color: unset;\n  text-decoration: unset;\n  display: flex;\n  position: relative;\n  height: 500px;\n  padding: 1.25rem;\n  flex-direction: column;\n  transition: box-shadow 0.3s;\n  height: 100%;\n    box-sizing: border-box;\n\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  :hover {\n    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n    background: rgb(248, 248, 255, 0.5);\n    "," img {\n      width: 175px;\n      overflow: visible;\n    }\n  }\n  text-align: center;\n  justify-content: space-between;\n  p {\n    display: inline-block;\n    vertical-align: top;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    max-height: 28px;\n    max-width: 64px;\n  }\n"]);return h=function(){return e},e}function O(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]);return O=function(){return e},e}function k(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  height: 300px;\n  width: 100%;\n  align-self: center;\n  img {\n    transition: width 0.25s;\n    width: 150px;\n  }\n"]);return k=function(){return e},e}var v=b.b.div(k()),x=b.b.div(O()),w=b.b.div(h()),j=Object(b.b)(E.b)(g(),v),y=function(e){var n=e.pokemon;return a.a.createElement(j,{to:"/pokemon/".concat(n.name)},a.a.createElement("div",null,a.a.createElement("p",{style:{float:"left"}},"#",n.id),a.a.createElement("p",{className:"title",style:{float:"right",textTransform:"capitalize"}},n.name)),a.a.createElement(v,null,a.a.createElement("img",{src:"/images/pokemons/".concat(n.id,".svg"),alt:n.name})),a.a.createElement(x,null,a.a.createElement("p",null,"Height: ",(.1*n.height).toFixed(1)," m"),a.a.createElement("p",null,"Weight: ",(.1*n.weight).toFixed(1)," kg")),a.a.createElement(w,null,n.types.map((function(e){return a.a.createElement("img",{src:"/images/types/".concat(e.type.name,".svg"),alt:e.type.name})}))))},_=t(10);function S(){var e=Object(i.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid #5e7ef3;\n  border-right: 2px solid #5e7ef3;\n  border-bottom: 2px solid #5e7ef3;\n  border-left: 2px solid #082db3;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n"]);return S=function(){return e},e}function L(){var e=Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return L=function(){return e},e}var N=Object(b.c)(L()),P=b.b.div(S(),N);function C(){var e=Object(i.a)(["\n  padding: 0.75rem;\n"]);return C=function(){return e},e}var T=Object(b.b)(_.Col)(C()),M=function(e){var n=e.pokemonList;return n?0===n.pokemons.length&&n.loading?a.a.createElement(P,null):n.error?null:a.a.createElement(_.Row,{center:"xs"},n.pokemons.map((function(e){return a.a.createElement(T,{xs:12,sm:4,md:4,lg:4},a.a.createElement(y,{pokemon:e,key:e.id}))})),a.a.createElement(P,null)):null};var U=function(e){function n(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&e()}return Object(r.useEffect)((function(){return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),{}},I=Object(f.b)((function(e){return{pokemon:e.pokemon}}),{fetchPokemonList:function(e,n){return function(){var t=Object(s.a)(m.a.mark((function t(r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"POKEMON_LIST_REQUEST"}),a={limit:e,offset:n},t.prev=2,t.next=5,p.getPokemonsList(a);case 5:t.sent.results.map(function(){var e=Object(s.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getPokemonByName(n.name).then((function(e){r({type:"POKEMON_LIST_SUCCESS",payload:e})})).catch((function(e){return r(d(e))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r(d(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var n=e.fetchPokemonList,t=e.pokemon,o=Object(r.useState)(0),c=Object(l.a)(o,2),i=c[0],u=c[1];return U((function(){u((function(e){return e+21}))})),Object(r.useEffect)((function(){n(21,i>649?649:i)}),[n,i]),a.a.createElement(M,{pokemonList:null===t||void 0===t?void 0:t.pokemonList})})),R=function(){return a.a.createElement(I,null)},K=t(2);function B(){var e=Object(i.a)(["\n  max-width: 100%;\n  position: relative;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n"]);return B=function(){return e},e}function J(){var e=Object(i.a)(["\n  background-color: initial;\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex;\n  padding: 0.75rem;\n"]);return J=function(){return e},e}function F(){var e=Object(i.a)(["\n  padding: 1.5rem;\n"]);return F=function(){return e},e}var z=b.b.div(F()),A=b.b.div(J()),H=b.b.div(B()),Q=function(e){var n=e.title,t=e.children;return a.a.createElement(H,null,a.a.createElement(A,null,a.a.createElement("p",{className:"title"},n)),a.a.createElement(z,null,t))},W=function(e){var n=e.pokemon;return a.a.createElement(Q,{title:"Informations"},a.a.createElement(_.Row,null,a.a.createElement(_.Col,{xs:!0},a.a.createElement("p",{className:"gray"},"Height"),a.a.createElement("p",null,n.height),a.a.createElement("p",{className:"gray"},"Weight"),a.a.createElement("p",null,n.weight)),a.a.createElement(_.Col,{xs:!0},a.a.createElement("p",{className:"gray"},"Abilities"),n.abilities.map((function(e,n){return a.a.createElement("p",{key:n},e.ability.name)})))))};function D(){var e=Object(i.a)(["\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  height: 1rem;\n  padding: 0;\n  border: solid 1px #66c7f4;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n  width: 100%;\n\n\n  &::-webkit-progress-bar {\n    background: #E8E8E8;\n  }\n  &::-webkit-progress-value {\n    background: #66c7f4;\n  }\n  &::-moz-progress-bar {\n    background: #66c7f4;\n  }\n"]);return D=function(){return e},e}var X=b.b.progress.attrs({max:100})(D()),V=function(e){var n=e.pokemon;return a.a.createElement(Q,{title:"Stats"},n.stats.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"gray"},e.stat.name.toUpperCase()),a.a.createElement(X,{value:e.base_stat}))})))},Z=function(e){var n=e.pokemon;return a.a.createElement(_.Row,{center:"xs"},a.a.createElement(_.Col,{xs:12,sm:12,md:12,lg:!0},a.a.createElement(y,{pokemon:n})),a.a.createElement(_.Col,{xs:12,sm:12,md:12,lg:!0},a.a.createElement(W,{pokemon:n}),a.a.createElement(V,{pokemon:n})))},$=Object(f.b)((function(e){return{pokemon:e.pokemon}}),{fetchPokemonObject:function(e){return function(){var n=Object(s.a)(m.a.mark((function n(t){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"POKEMON_OBJECT_REQUEST"}),n.prev=1,n.next=4,p.getPokemonByName(e);case 4:return r=n.sent,t({type:"POKEMON_OBJECT_SUCCESS",payload:r}),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),t({type:"POKEMON_OBJECT_FAILURE",payload:n.t0});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var n,t=e.fetchPokemonObject,o=e.pokemon,c=Object(K.f)().name;return Object(r.useEffect)((function(){t(c)}),[c]),o&&(n=o.pokemonObject.pokemon,0!==Object.keys(n).length||n.constructor!==Object)?(console.log(null===o||void 0===o?void 0:o.pokemonObject),a.a.createElement(Z,{pokemon:o.pokemonObject.pokemon})):null})),q=function(){return a.a.createElement($,null)};function G(){var e=Object(i.a)(["\n  margin: 0 auto;\n\n  @media screen and (min-width: 1088px) {\n    max-width: 960px;\n    width: 960px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-width: 1152px;\n    width: 1152px;\n  }\n\n  @media screen and (min-width: 1472px) {\n    max-width: 1344px;\n    width: 1344px;\n  }\n"]);return G=function(){return e},e}var Y=b.b.div(G()),ee=function(){return a.a.createElement(Y,null,a.a.createElement(K.c,null,a.a.createElement(K.a,{exact:!0,path:"/"},a.a.createElement(R,null)),a.a.createElement(K.a,{exact:!0,path:"/pokemon/:name"},a.a.createElement(q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=t(14),te=t(51),re=t(52),ae=t(31),oe=t(12),ce={pokemonList:{pokemons:[],error:null,loading:!1},pokemonObject:{pokemon:{},error:null,loading:!1}},ie=Object(ne.c)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_LIST_REQUEST":return Object(oe.a)({},e,{pokemonList:{pokemons:Object(ae.a)(e.pokemonList.pokemons),error:null,loading:!0}});case"POKEMON_LIST_SUCCESS":return Object(oe.a)({},e,{pokemonList:{pokemons:[].concat(Object(ae.a)(e.pokemonList.pokemons),[n.payload]),error:null,loading:!1}});case"POKEMON_LIST_FAILURE":return Object(oe.a)({},e,{pokemonList:{pokemons:[],error:n.payload,loading:!1}});case"POKEMON_OBJECT_REQUEST":return Object(oe.a)({},e,{pokemonObject:{pokemon:Object(oe.a)({},e.pokemonObject.pokemon),error:null,loading:!0}});case"POKEMON_OBJECT_SUCCESS":return Object(oe.a)({},e,{pokemonObject:{pokemon:Object(oe.a)({},n.payload),error:null,loading:!1}});case"POKEMON_OBJECT_FAILURE":return Object(oe.a)({},e,{pokemonObject:{pokemon:null,error:n.payload,loading:!1}});default:return e}}}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,ue=function(e){return Object(ne.e)(ie,e,le(Object(ne.a)(te.a,Object(re.createLogger)())))};function me(){var e=Object(i.a)(["\n    body {\n        font-family: Roboto,sans-serif;\n        letter-spacing: 1px;\n        box-sizing: inherit;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n    }\n\n    .gray {\n        color: gray;\n    }\n\n    .title {\n        font-weight: 700\n    }\n\n    h1, h2, h3, h4, h5, p {\n        margin: 0;\n        padding: 0;\n    }\n"]);return me=function(){return e},e}var se=Object(b.a)(me()),pe=ue({});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f.a,{store:pe},a.a.createElement(E.a,null,a.a.createElement(se,null),a.a.createElement(ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.f0e0295a.chunk.js.map