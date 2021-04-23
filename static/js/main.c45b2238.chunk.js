(this["webpackJsonpgreedy-hunter"]=this["webpackJsonpgreedy-hunter"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(22),i=a.n(c),s=(a(52),a(27)),o=a(8),d=(a(53),a(1));var j=function(e){var t=e.bgMeshLeft,a=e.gameDetails,r=e.bgMeshRight;return Object(d.jsxs)("div",{className:"game-start-page",children:[Object(d.jsx)("div",{className:"bg-mesh bg-mesh-left",children:Object(d.jsx)("img",{src:t,alt:"BG Mesh"})}),a,Object(d.jsx)("div",{className:"bg-mesh bg-mesh-right",children:Object(d.jsx)("img",{src:r,alt:"BG Mesh"})})]})},l=a.p+"static/media/character.2b44b5a6.svg",b=a.p+"static/media/food.e5ffaf99.svg",u={character:l,bgMesh:a.p+"static/media/bg-mesh.d1a2355f.svg",food:b};var m=function(e){var t=e.heading,a=e.gameText,r=e.gameText2,n=e.gameGrid,c=e.startGameButton;return Object(d.jsxs)("div",{className:"game-details",children:[t,a,r,n,c]})};var O=function(e){var t=e.gameTitle;return Object(d.jsx)("h1",{className:"heading-text",children:t})};var g=function(e){var t=e.headingTitle;return Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:u.character,alt:"\ud83e\udd75"})}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{gameTitle:t})})]})};var h=function(e){var t=e.gameText;return Object(d.jsx)("div",{className:"game-text",children:t})};var v=function(e){var t=e.gameGridText;return Object(d.jsx)("div",{className:"game-grid-text",children:t})},x=a(5);var f=function(){var e=Object(x.c)((function(e){return e.minGridValue})),t=Object(x.c)((function(e){return e.maxGridValue})),a=Object(x.c)((function(e){return e.grid})),r=Object(x.b)();return Object(d.jsx)("input",{onChange:function(a){var n=+a.target.value;r({type:"UPDATE_GRID",payload:n}),n>t&&(a.target.value=t+""),n<e&&n>1&&(a.target.value=e+"")},className:"grid-input",type:"number",min:"5",max:"12",defaultValue:a})};var p=function(){return Object(d.jsxs)("div",{className:"game-grid",children:[Object(d.jsx)("div",{children:Object(d.jsx)(v,{gameGridText:"Game grid"})}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{})})]})};var T=function(e){var t=e.buttonText,a=Object(x.b)();return Object(d.jsx)(s.b,{to:"/play",children:Object(d.jsx)("button",{onClick:function(e){a({type:"START_GAME",payload:!0})},className:"button",children:t})})},y=a(17);var M=function(){var e=Object(y.useSpring)({to:{opacity:1,marginTop:0},from:{opacity:0,marginTop:-500}});return Object(d.jsx)(y.animated.div,{style:e,className:"container",children:Object(d.jsx)(j,{bgMeshLeft:u.bgMesh,gameDetails:Object(d.jsx)(m,{heading:Object(d.jsx)(g,{headingTitle:"Greedy Hunter"}),gameText:Object(d.jsx)(h,{gameText:"The aim is to eat all the food in record time"}),gameText2:Object(d.jsx)(h,{gameText:"Configure your game grid below \ud83d\udc47"}),gameGrid:Object(d.jsx)(p,{}),startGameButton:Object(d.jsx)(T,{buttonText:"Start game"})}),bgMeshRight:u.bgMesh})})};var N=function(){var e=Object(x.c)((function(e){return e.timeSpent})),t=Object(x.c)((function(e){return e.foodsEaten})),a=Object(x.c)((function(e){return e.totalFoods})),r=Object(y.useSpring)({to:{opacity:1},from:{opacity:0},delay:500});return Object(d.jsx)(y.animated.div,{style:r,className:"container",children:Object(d.jsx)(j,{bgMeshLeft:u.bgMesh,gameDetails:Object(d.jsx)(m,{heading:Object(d.jsx)(g,{headingTitle:"Game Over!"}),gameText:Object(d.jsx)(h,{gameText:Object(d.jsxs)(d.Fragment,{children:["Total Food: ",Object(d.jsx)("b",{className:"bold",children:"".concat(t,"/").concat(a)})]})}),gameText2:Object(d.jsx)(h,{gameText:Object(d.jsxs)(d.Fragment,{children:["Time spent: ",Object(d.jsx)("b",{className:"bold",children:e})," seconds"]})}),gameGrid:Object(d.jsx)(p,{}),startGameButton:Object(d.jsx)(T,{buttonText:"Start again"})}),bgMeshRight:u.bgMesh})})};var _=function(){var e=Object(x.c)((function(e){return e.timeSpent})),t=Object(y.useSpring)({x:1,to:{opacity:1,transform:"scale(".concat(1,")")},from:{opacity:0,transform:"scale(".concat(0,")")}});return Object(d.jsx)(y.animated.div,{style:t,className:"container",children:Object(d.jsx)(j,{bgMeshLeft:u.bgMesh,gameDetails:Object(d.jsx)(m,{heading:Object(d.jsx)(g,{headingTitle:"Bravo!"}),gameText:Object(d.jsx)(h,{gameText:Object(d.jsxs)(d.Fragment,{children:["Time spent: ",Object(d.jsx)("b",{className:"bold",children:e})," seconds"]})}),gameGrid:Object(d.jsx)(p,{}),startGameButton:Object(d.jsx)(T,{buttonText:"Start again"})}),bgMeshRight:u.bgMesh})})};var S=function(e){var t=e.gameFrame;return Object(d.jsx)(d.Fragment,{children:t})},E=a(18);function G(e){return Array.from({length:(t=2*e-1,a=2*e,Math.abs(Math.floor(Math.random()*(a-t+1)))+t)},(function(){return Array.from({length:2},(function(){return Math.abs(Math.floor(Math.random()*e))}))}));var t,a}function A(e){var t=function(e,t){return Array.from({length:t},(function(){return Array.from({length:t},(function(){return e}))}))}("",e),a=G(e),r=function(e){return[Math.abs(Math.floor(Math.random()*e)),Math.abs(Math.floor(Math.random()*e))]}(e);return t=t.map((function(e,t){if(a.forEach((function(a){if(t===a[0]){var r=Object(E.a)(e);r[a[1]]="F",e=r}})),t===r[0]){var n=Object(E.a)(e);n[r[1]]="C",e=n}return e}))}var I=function(e){new Audio(e).play()};var D=function(e){var t=e.children;return Object(d.jsx)("div",{children:t})};var F=function(){var e=0,t=Object(x.c)((function(e){return e.grid})),a=Object(x.b)(),n=Object(o.g)(),c=0,i=0,s="",j=function(e){e.preventDefault();var t=e.target;if(console.log("previous id",s),console.log("current id",e.currentTarget.id),console.log("position",s),t){if(!function(e,t){var a=t.split("_"),r=e.split("_");return a.shift(),r.shift(),![[+a[0]-1+"",a[1]],[+a[0]+1+"",a[1]],[a[0],+a[1]+1+""],[a[0],+a[1]-1+""]].map((function(e){return JSON.stringify(e)===JSON.stringify(r)})).every((function(e){return!1===e}))||(I("https://freesound.org/data/previews/351/351563_2398403-lq.mp3"),!1)}(e.currentTarget.id,s))return!1;(function(e){var t;return!!(null===(t=document.getElementById(e))||void 0===t?void 0:t.innerHTML)&&(I("https://freesound.org/data/previews/467/467610_9659530-lq.mp3"),!0)})(e.currentTarget.id)&&i++,function(e,t){var a=document.getElementById(e);if(document.getElementById(t).childNodes.length>0&&document.getElementById(t).replaceChildren(),a){var r=document.createElement("img"),n=document.createAttribute("src"),c=document.createAttribute("class");n.value="".concat(u.character),c.value="img",r.setAttributeNode(n),r.setAttributeNode(c),a.replaceChildren(),a.insertAdjacentElement("beforeend",r)}}(e.currentTarget.id,s),s=e.currentTarget.id,c++,console.log("moves",c),console.log("foods",i)}};return Object(r.useEffect)((function(){var r=setInterval((function(){var c=document.getElementById("time-spent"),o=document.getElementById("indicator"),d=Number(null===c||void 0===c?void 0:c.innerHTML),j=(3*t-(d-=1))/(3*t)*100;a({type:"SET_TIME",payload:3*t-d}),(o||c)&&(o.style.width=j+"%",c.innerHTML=d.toString().length<2?d.toString().padStart(2,"0"):d),d<1&&(clearInterval(r),clearInterval(s),n.push("/over"),I("https://freesound.org/data/previews/175/175409_1326576-lq.mp3")),i===e&&(clearInterval(r),clearInterval(s),n.push("/finished"),I("https://freesound.org/data/previews/258/258142_4631294-lq.mp3"))}),1e3),s=setInterval((function(){c===Math.round(t*t/2)&&i!==e&&(clearInterval(r),clearInterval(s),n.push("/over"),I("https://freesound.org/data/previews/175/175409_1326576-lq.mp3")),a({type:"COUNT_MOVES",payload:c}),a({type:"FOODS_EATEN",payload:i})}),300);a({type:"TOTAL_FOODS",payload:e}),console.log(e)})),Object(d.jsx)("div",{children:A(t).map((function(t,a){return Object(d.jsx)("div",{className:"col",children:t.map((function(t,r){return"F"===t?(t=Object(d.jsx)("div",{onClick:j,className:"box",id:"id_".concat(a,"_").concat(r),children:Object(d.jsx)(D,{children:Object(d.jsx)("img",{src:u.food,alt:"food",className:"img"})},"key_".concat(r))},r),e+=1):"C"===t?(s="id_".concat(a,"_").concat(r),t=Object(d.jsx)("div",{onClick:j,className:"box",id:"id_".concat(a,"_").concat(r),children:Object(d.jsx)(D,{children:Object(d.jsx)("img",{src:u.character,alt:"character",className:"img"})},"key_".concat(r))},r)):t=Object(d.jsx)("div",{onClick:j,className:"box",id:"id_".concat(a,"_").concat(r)},r),t}))},a)}))})};var B=function(){return Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(F,{})})};var C=function(){var e=Object(x.c)((function(e){return e.grid}));return Object(d.jsxs)("div",{className:"indicator-frame__div",children:["Grid: \xa0 ",Object(d.jsxs)("strong",{children:[" ",e," x ",e]})]})};var w=function(){return Object(d.jsxs)("div",{className:"indicator-frame__div",id:"heart-box",children:[Object(d.jsxs)("div",{id:"heart",children:[Object(d.jsx)("div",{id:"ellipse"})," ",Object(d.jsx)("div",{id:"ellipse2"})]}),Object(d.jsx)("div",{id:"indicator-box",children:Object(d.jsx)("div",{id:"indicator"})})]})};var L=function(e){e.timeSpent;var t=Object(x.c)((function(e){return e.grid}));return Object(d.jsxs)("div",{className:"indicator-frame__div",children:["Time Spent: \xa0 ",Object(d.jsxs)("strong",{children:[" 00:",Object(d.jsx)("span",{id:"time-spent",children:3*t})," secs"]})]})};var k=function(){return Object(d.jsxs)("div",{className:"frame indicator-frame",children:[Object(d.jsx)(C,{}),Object(d.jsx)(w,{}),Object(d.jsx)(L,{timeSpent:48})]})};var R=function(e){var t=e.numberOfMoves,a=e.moveDescription;return Object(d.jsxs)("div",{className:"moves-frame__div",children:[a,": \xa0 ",Object(d.jsx)("strong",{children:t})]})};var V=function(){var e=Object(x.c)((function(e){return e.grid})),t=Object(x.c)((function(e){return e.totalMoves})),a=Math.round(e*e/2);return Object(d.jsxs)("div",{className:"frame moves-frame",children:[Object(d.jsx)(R,{numberOfMoves:a,moveDescription:"Maximum moves"}),Object(d.jsx)(R,{numberOfMoves:t,moveDescription:"Total moves"})]})};var q=function(){return Object(d.jsxs)("div",{className:"frame game-frame",children:[Object(d.jsx)(k,{}),Object(d.jsx)(B,{}),Object(d.jsx)(V,{})]})};var H=function(){var e=Object(y.useSpring)({to:{opacity:1,marginLeft:0},from:{opacity:0,marginLeft:-1e3},transition:"ease-in",duration:1500});return Object(d.jsx)(y.animated.div,{style:e,className:"game-play",children:Object(d.jsx)(S,{gameFrame:Object(d.jsx)(q,{})})})};var J=function(){var e=Object(x.c)((function(e){return e.startedGame}));return Object(d.jsx)(s.a,{basename:"/",children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/",children:Object(d.jsx)(M,{})}),Object(d.jsx)(o.b,{path:"/play",children:e?Object(d.jsx)(H,{}):Object(d.jsx)(o.a,{to:"/"})}),Object(d.jsx)(o.b,{path:"/over",children:e?Object(d.jsx)(N,{}):Object(d.jsx)(o.a,{to:"/"})}),Object(d.jsx)(o.b,{path:"/finished",children:e?Object(d.jsx)(_,{}):Object(d.jsx)(o.a,{to:"/"})})]})})})},U=a(33),P=a(3),z={grid:5,minGridValue:5,maxGridValue:12,startedGame:!1,timeSpent:0,totalMoves:0,totalFoods:0,foodsEaten:0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_GRID":return Object(P.a)(Object(P.a)({},e),{},{grid:t.payload});case"START_GAME":return Object(P.a)(Object(P.a)({},e),{},{startedGame:t.payload});case"SET_TIME":return Object(P.a)(Object(P.a)({},e),{},{timeSpent:t.payload});case"COUNT_MOVES":return Object(P.a)(Object(P.a)({},e),{},{totalMoves:t.payload});case"TOTAL_FOODS":return Object(P.a)(Object(P.a)({},e),{},{totalFoods:t.payload});case"FOODS_EATEN":return Object(P.a)(Object(P.a)({},e),{},{foodsEaten:t.payload});default:return e}},Q=Object(U.b)(K);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x.a,{store:Q,children:Object(d.jsx)(J,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c45b2238.chunk.js.map