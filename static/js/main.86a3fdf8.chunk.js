(this["webpackJsonpgrid-battle"]=this["webpackJsonpgrid-battle"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/warrior.d8b023eb.png"},function(e,t,a){e.exports=a.p+"static/media/goblin_regular.a22efcb7.png"},,,,function(e,t,a){e.exports=a.p+"static/media/Lora-Regular.cdd6b0bc.eot"},function(e,t,a){e.exports=a.p+"static/media/Lora-Bold.629f4d40.eot"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Lora-Regular.e822d6a7.svg"},function(e,t,a){e.exports=a.p+"static/media/Lora-Regular.1caccfd9.woff"},function(e,t,a){e.exports=a.p+"static/media/Lora-Regular.62c96966.woff2"},function(e,t,a){e.exports=a.p+"static/media/Lora-Bold.06107996.svg"},function(e,t,a){e.exports=a.p+"static/media/Lora-Bold.5d77e2a2.woff"},function(e,t,a){e.exports=a.p+"static/media/Lora-Bold.3b866411.woff2"},,,function(e,t,a){e.exports=a.p+"static/media/ground.a82d3ec6.jpeg"},function(e,t,a){e.exports=a.p+"static/media/click.69dc2c64.mp3"},function(e,t,a){e.exports=a.p+"static/media/warrior.c5a6cb27.mp3"},function(e,t,a){e.exports=a.p+"static/media/theme_song1.87226504.mp3"},function(e,t,a){e.exports=a.p+"static/media/walking.2e9c4de9.mp3"},,function(e,t,a){e.exports=a.p+"static/media/tree.f7e58740.png"},,,,function(e,t,a){e.exports=a(61)},,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"updateGrid",(function(){return me})),a.d(n,"createGrid",(function(){return he})),a.d(n,"destroyGrid",(function(){return fe}));var r={};a.r(r),a.d(r,"startTurn",(function(){return ge})),a.d(r,"nextMove",(function(){return be})),a.d(r,"resetTurn",(function(){return xe}));var l=a(0),i=a.n(l),o=a(4),s=a(16),c=a.n(s),d=a(13),p=a(11),u=a(1),m=a(22),h=a.n(m),f=a(31),g=a.n(f),b=a(32),x=a.n(b),y=a(33),w=a.n(y),C=a(23),E=a.n(C),v=a(34),k=a.n(v),I=a(35),R=a.n(I),T=a(36),S=a.n(T),j=u.b`
  @font-face {
      font-family: "Lora-bold";
      src: url(${E.a});
      src: url("${E.a}?#iefix") format("embedded-opentype"),
          url(${S.a}) format("woff2"),
          url(${R.a}) format("woff"),
          url("${k.a}#Lora-Bold") format("svg");
      font-weight: bold;
      font-style: normal;
  }
    
  @font-face {
      font-family: 'Lora';
      src: url(${h.a});
      src: url('${h.a}?#iefix') format('embedded-opentype'),
          url(${w.a}) format('woff2'),
          url(${x.a}) format('woff'),
          url('${g.a}#Lora-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
  }
`,_=a(39);const O=a.n(_).a,$={black:"#252525",white:"#fff",whiteTransparent:"rgba(255, 255, 255, 0.8)",blue:"#007ce0",navy:"#004175",gray:"#5c5c5c50",greenTransparent:"rgba(0, 155, 26, 0.6)",glassTransparent:"rgba(190,255,247, 0.6)",glass:"rgba(190,255,247, 0.8)",redTransparent:"rgba(255, 0, 0, 0.6)"},G={standard:"2px 1px 5px 2px rgba(0, 0, 0, 0.4)",large:"5px 0px 10px 5px rgba(0, 0, 0, 0.8)",standardInset:"inset 1px 1px 5px -2px rgba(0, 0, 0, 0.8)",largeInset:"inset 1px 1px 20px -4px rgba(0, 0, 0, 0.8)"},N="6px",q="20px",L=["425px"];L.sm=L[0];const P={small:`(min-width: ${L[0]})`},M="Lora",A="Lora-Bold";var B={colors:$,breakpoints:L,boxShadow:G};const D=u.c.div.withConfig({displayName:"PageWrapperStyle__Wrapper",componentId:"sc-1ro2fmk-0"})(["min-height:100vh;display:flex;flex-direction:column;background:url(",") center center/cover no-repeat;overflow:hidden;"],O),H=u.c.div.withConfig({displayName:"PageWrapperStyle__FooterWrapper",componentId:"sc-1ro2fmk-1"})(["margin-top:auto;background-color:",";box-shadow:",";border-radius:",";height:50px;padding:5px 20px;display:flex;position:relative;top:27px;font-size:14px;justify-content:center;"],$.whiteTransparent,G.standard,q);var J=a(40),z=a.n(J),W=a(41),U=a.n(W),X=a(42),V=a.n(X),Y=a(43),F=a.n(Y),K={click:z.a,warrior:U.a,theme_song1:V.a,walking:F.a},Q=a(2),Z=a.n(Q);Element.propTypes={url:Z.a.string.isRequired,loop:Z.a.bool},Element.defaultProps={loop:!0};var ee=Object(o.b)(e=>({muted:e.ConfigReducer.muted}),e=>({}))(e=>{const{url:t,loop:a,muted:n}=e,r=new Audio(t);return r.loop=a,r.muted=n,Object(l.useEffect)(()=>(r.play(),()=>{r.pause()}),[r]),null});const te=u.c.div.withConfig({displayName:"styledHeader__HeaderWrapper",componentId:"sc-1100p2l-0"})(["box-shadow:",";border-radius:",";position:relative;top:-20px;padding:30px 10px 10px 10px;background-color:",";max-height:142px;padding-bottom:0;@media ","{max-height:96px;padding-bottom:10px;}"],G.large,q,$.whiteTransparent,P.small),ae=u.c.ul.withConfig({displayName:"styledHeader__HeaderList",componentId:"sc-1100p2l-1"})(["display:flex;justify-content:space-around;flex-wrap:wrap;@media ","{flex-wrap:nowrap;}"],P.small),ne=u.c.div.withConfig({displayName:"StyledContainer",componentId:"sc-29a629-0"})(["max-width:1000px;margin:auto;padding:10px;width:100%;"]),re=u.c.li.withConfig({displayName:"StyledLink",componentId:"sc-1c6zjzj-0"})(["padding:10px 40px;background-color:",";min-width:100px;border-radius:",";box-shadow:",",0 0 0 rgba(255,255,255,0);transition:all 300ms ease-in-out;cursor:",";margin-bottom:10px;background-color:",";"," @media ","{margin-bottom:0;}"],$.white,N,G.standardInset,e=>e.selected?"default":"pointer",e=>e.selected?$.gray:"",e=>e.selected?"":`  &:hover {\n    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${G.standard};\n  }`,P.small);var le={home:"/",battle:"/battle",about:"/about"};var ie=e=>{let t=Object(p.f)().pathname;return i.a.createElement(te,null,i.a.createElement(ne,null,i.a.createElement("nav",null,i.a.createElement(ae,null,i.a.createElement(d.b,{to:le.home},i.a.createElement(re,{selected:t===le.home},"Home")),i.a.createElement(d.b,{to:le.battle},i.a.createElement(re,{selected:t===le.battle},"Battle")),i.a.createElement(d.b,{to:le.about},i.a.createElement(re,{selected:t===le.about},"About"))))))};var oe=Object(o.b)(e=>({}),e=>({}))(e=>{const[t,a]=Object(l.useState)(!1);return i.a.createElement(D,{onClick:()=>{!t&&a(!0)}},t&&i.a.createElement(ee,{url:K.theme_song1,loop:!0}),i.a.createElement(ie,null),e.children,i.a.createElement(H,null,"Created by - Stefan Deak"))});const se=u.c.div.withConfig({displayName:"StyledHome",componentId:"l871od-0"})(["min-height:calc(100vh - 200px);background-color:",";border-radius:",";box-shadow:",";display:flex;flex-direction:column;padding-bottom:40px;margin-bottom:-12px;h1{margin-top:80px;font-size:42px;text-align:center;width:100%;font-family:",";margin-bottom:40px;}p{margin-top:20px;font-size:22px;font-family:",";}"],$.whiteTransparent,q,G.standard,A,A);var ce=e=>i.a.createElement(ne,null,i.a.createElement(se,null,i.a.createElement("h1",null,"React.js Grid Battle"),i.a.createElement("p",null,"Welcome!"),i.a.createElement("p",null,"Battle AI in procedurally generated maps.")));var de=e=>i.a.createElement("div",null,i.a.createElement("h1",null,"Help page"));const pe=u.c.div.withConfig({displayName:"styledGrid__StyledGrid",componentId:"sc-1idlluh-0"})(["display:flex;flex-wrap:wrap;width:66.66%;box-shadow:",";border-radius:",";background-color:",";padding-top:",";overflow:hidden;"],G.standard,N,e=>e.empty?$.glassTransparent:"transparent",e=>e.empty?"66.66%":"0"),ue=u.c.div.withConfig({displayName:"styledGrid__StyledGridWrapper",componentId:"sc-1idlluh-1"})(["display:flex;flex-wrap:wrap;"]),me=e=>({type:"UPDATE_GRID",grid:e}),he=e=>({type:"CREATE_GRID",settings:e}),fe=()=>({type:"DESTROY_GRID"}),ge=e=>({type:"START_TURN",grid:e}),be=e=>({type:"NEXT_MOVE",grid:e}),xe=()=>({type:"RESET_TURN"});var ye=a(10);function we(e,t){return Math.floor(Math.random()*(t-e)+e)}const Ce=(e,t,a)=>{let n=JSON.parse(JSON.stringify(e));return((e,t,a)=>{const n=[2,3,4,5,6,7,92,93,94,95,95,96,97,15,25,35,45,55,65,75,85];let r=[];for(let l=0;l<t.obstacles();++l){let e=we(0,a*a-1);n.includes(e)?--l:r.push(e)}return console.log(r),r})(0,t,a).forEach(e=>{n[e].fill="X",n[e].image="tree",n[e].terrain="grass"}),t.characters.forEach(e=>{n[e.index].fill=e.fill,n[e.index].image=e.image,n[e.index].stats=e}),n},Ee=(e,t)=>{const a=((e,t)=>{const a=we(1,20),n=e.attack+a;return{isHit:n>=t.ac,attack:n,attackRoll:a,attackBonus:e.attack,defenderAC:t.ac}})(e,t);return{attackResult:a,damageResult:!!a.isHit&&((e,t)=>{const a=we(e.damage[0],e.damage[1]),n=t.hp-a;return{isDead:n<=0,damage:a,hp:n}})(e,t)}},ve=e=>e.map(e=>(e.path=0,e.direction=null,e)),ke={makeGrid:({rows:e,columns:t,fill:a})=>{let n=[];for(let r=0;r<e;++r)for(let e=0;e<t;++e)n.push({index:r*t+e,fill:"",adjecent:[],visited:0,path:0,image:"",terrain:"grass",animation:null,direction:null,sound:"click"});return n=((e,t,a)=>{let n=JSON.parse(JSON.stringify(e));return n.forEach((e,t)=>{let r=[],l=t-a;l>-1&&r.push({index:l,direction:"up"});let i=t+a;i<n.length&&r.push({index:i,direction:"down"});let o=t-1;o>=0&&t%a!==0&&r.push({index:o,direction:"left"});let s=t+1;s<n.length&&s%a!==0&&r.push({index:s,direction:"right"}),e.adjecent=r}),n})(n,0,t),n=Ce(n,a,e),Object(ye.a)(n)},startSearch:(e,t,a,n)=>{let r=e,l=r.toJS();const i=l[t].stats,o=l[a].stats&&l[a].stats.player!==i.player;if(r.get(a).fill&&!o||!t&&0!==t)return null;let s,c=((e,t,a)=>{let n,r=e.toJS(),l=[[r[t]]];const i=()=>{const e=[];return l.forEach(t=>{t[t.length-1].adjecent.forEach(l=>{if(r[l.index].index===a)n=t,r[l.index].direction=l.direction,n.push(r[l.index]);else if(0===r[l.index].visited&&!r[l.index].fill){r[l.index].visited=1;const a=JSON.parse(JSON.stringify(t));a.push(r[l.index]),a[a.length-1].direction=l.direction,e.push(a)}})}),e};let o=0;do{if(++o>299&&console.log("time out!"),l=i(),n)return n;if(0===l.length)return console.log("path impossible!"),!1}while(!n&&o<300)})(e,t,a),d=n.speed;return o&&c&&c.length<=n.speed+1&&(d=c.length>n.speed?n.speed:c.length-1,s=Ee(i,l[a].stats)),c?(r=((e,t)=>{return ve(e).withMutations(e=>{t.forEach(t=>{e.setIn([t.index,"path"],1)})})})(e,c=c.splice(0,d)),{grid:Object(ye.a)(r),result:c,attackResult:s}):null},clearPath:ve,moveCharacter:(e,t,a)=>e.setIn([t.index,"fill"],"").setIn([t.index,"image"],"").setIn([t.index,"stats"],"").setIn([a.index,"image"],t.image).setIn([a.index,"fill"],t.fill).setIn([a.index,"stats"],t).setIn([a.index,"stats","index"],a.index),clearTile:(e,t)=>e.setIn([t,"image"],"").setIn([t,"stats"],"").setIn([t,"fill"],"").setIn([t,"sound"],"click"),updateCharacter:(e,t)=>e.setIn([t.index,"stats"],t.stats)},Ie={up:"down",down:"up",left:"right",right:"left"},Re={moveAnimationBuilder:(e,t,a)=>{const n=a.attackResult;let r=" 0% {\n      top: 0%;\n      left: 0%;\n    }\n  ";const l=n?100/(e.length+3):100/e.length;let i,o=0,s=0;if(e.forEach((t,a)=>{i=e.length-1!==a||n?l*a:100,"up"===t.direction?o-=100:"down"===t.direction?o+=100:"left"===t.direction?s-=100:"right"===t.direction&&(s+=100),0!==a&&(r+=`\n        ${i}% {\n          top: ${o}%;\n          left: ${s}%;\n      }`)}),n){const t=e[e.length-1].adjecent.find(e=>e.index===a.defender.index).direction,n=Ie[t],c=o,d=s;"up"===n?o-=50:"down"===n?o+=50:"left"===n?s-=50:"right"===n&&(s+=50),r+=`\n      ${i+=2*l}% {\n        top: ${o}%;\n        left: ${s}%;\n      }`,r+=`\n      ${i+=l/4}% {\n        top: ${o}%;\n        left: ${s}%;\n      }`,"up"===t?o-=90:"down"===t?o+=90:"left"===t?s-=90:"right"===t&&(s+=90),r+=`\n    ${i+=l/3}% {\n      top: ${o}%;\n      left: ${s}%;\n    }`,r+=`\n      100% {\n        top: ${c}%;\n        left: ${d}%;\n      }\n    `}return{animation:Object(u.d)(["",""],r),time:n?t*(e.length+3):t*(e.length-1)}},selected:Object(u.d)(["0%{transform:rotate(0deg);}33.2%{transform:rotate(-16deg);}83.18%{transform:rotate(8deg);}100%{transform:rotate(0deg);}"])},Te=e=>{let t=JSON.parse(JSON.stringify(e));const a=t.shift();return[...t,a]},Se={sortCharacters:(e,t="initiative")=>{return JSON.parse(JSON.stringify(e)).sort((e,a)=>a[t]-e[t])},setNextCharacter:Te,findCharacters:e=>{const t=e.filter((e,t)=>"C"===e.fill).map(e=>e.stats),a=t.filter(e=>"human"===e.player),n=t.filter(e=>"ai"===e.player);return{allCharacters:t.toJS(),humanCharacters:a.toJS(),aiCharacters:n.toJS()}},updateCharacters:(e,t)=>{let a=Te(e.turnInfo.get("allCharacters"));const{allCharacters:n,humanCharacters:r,aiCharacters:l}=Se.findCharacters(t),i=n.map(e=>e.id);return{allCharacters:a=(a=a.filter(e=>i.includes(e.id))).map(e=>{const t=n.find(t=>t.id===e.id);return e=t}),aiCharacters:l,humanCharacters:r,activeCharacter:a[0]}}};const je=(e,t)=>e-t>0?100:-50,_e=(e,t)=>e-t<=0?200:0,Oe=e=>10-e>0?20*(10-e):0,$e=(e,t)=>10*(e+t),Ge=(e,t,a)=>{let n=[],r=!1;return a.forEach(a=>{const l=ke.startSearch(e,t.index,a.index,t);l&&(n.push({result:l,index:a.index,target:a,stats:t}),!r&&l.attackResult&&(console.log("inininin"),r=!0))}),r&&(n=n.filter(e=>e.result.attackResult)),(e=>{return e.map(e=>{const t=e.stats,a=e.target;let n=0,r={},l=0;const i=je(t.attack,a.ac);l+=i,r.toHitChance=i;const o=Oe(a.hp);l+=o,r.remainingHP=o;const s=_e(a.hp,t.damage[1]);l+=s,r.canKill=s;const c=$e(a.attack,a.damage[1]);return l+=c,r.threatLevel=c,n+=l,{...e,weight:l,calculatedWeight:n,weightBreakdown:r}})})(n)},Ne=e=>{const t=function(e,t){return Math.floor(Math.random()*(t-e)+e)}(0,e[e.length-1].calculatedWeight);for(let a=0;a<e.length;a++)if(t-e[a].calculatedWeight<=0)return e[a].index},qe=(e,t,a)=>{const n=Ge(e,t,a);return n.length>0?Ne(n):null},Le=u.c.div.withConfig({displayName:"styledCell__StyledCell",componentId:"sc-4x2wvu-0"})(["display:flex;position:relative;background:",";flex-basis:",";padding-top:",";cursor:",";box-shadow:",";"],$.glassTransparent,e=>e.basis,e=>e.basis,e=>"brown"===e.fill?"not-allowed":"pointer",G.standardInset),Pe=u.c.div.withConfig({displayName:"styledCell__StyledCellContent",componentId:"sc-4x2wvu-1"})(["justify-content:center;align-items:center;display:flex;position:absolute;width:100%;height:100%;top:0;left:0;transition:all 400ms ease;background:",";&:hover{box-shadow:",";}"],e=>e.path?"rgba(255, 192, 203, 0.3)":"transparent",G.largeInset);var Me=a(17),Ae=a.n(Me),Be=a(45),De=a.n(Be),He=a(18),Je=a.n(He);const ze={warrior:Ae.a,tree:De.a,goblin:Je.a},We={human:$.greenTransparent,ai:$.redTransparent},Ue=(e,t)=>t&&t.animation?[t.animation,`${t.time}ms linear forwards`]:e?[Re.selected,"2s linear infinite"]:"",Xe=u.c.div.withConfig({displayName:"styledCellContent__StyledCellContentWrapper",componentId:"nfkiq9-0"})(["position:relative;z-index:",";width:100%;height:100%;animation:"," ",";"],e=>e.animation?"200":"100",e=>Ue(e.selected,e.animation)[0],e=>Ue(e.selected,e.animation)[1]),Ve=u.c.div.withConfig({displayName:"styledCellContent__StyledCellContent",componentId:"nfkiq9-1"})(["position:relative;z-index:100;width:100%;height:100%;border-radius:50%;display:flex;justify-content:center;align-items:center;background:url(",") center center/cover no-repeat;box-shadow:",";transform:",";"],e=>ze[e.image],e=>e.player?G.standard:"",e=>e.player?"scale(0.9)":""),Ye=u.c.div.withConfig({displayName:"styledCellContent__StyledIndicator",componentId:"nfkiq9-2"})(["width:90%;height:90%;left:5%;top:5%;position:absolute;border-radius:50%;background-color:",";"],e=>e.player?We[e.player]:"");Element.propTypes={cell:Z.a.object.isRequired},Element.defaultProps={};var Fe=Object(o.b)(e=>({grid:e.GridReducer.grid}),e=>({updateGrid:t=>e(n.updateGrid(t))}))(e=>{const{cell:t,selected:a,grid:n,updateGrid:r}=e,{index:l,stats:o}=t,s=(o&&o.hp&&o.hp,o&&o.player);if(t.attack){let e=n;setTimeout(()=>{e=e.setIn([l,"attack"],!1),r(e)},500)}return i.a.createElement(Xe,{selected:a,animation:t.animation},i.a.createElement(Ve,{selected:a,image:t.image,attack:t.attack,player:s}),i.a.createElement(Ye,{player:s}))});Element.propTypes={cell:Z.a.object,columns:Z.a.number.isRequired},Element.defaultProps={cell:{}};var Ke=Object(o.b)(e=>({columns:e.ConfigReducer.settings.columns}),e=>({}))(e=>{const{columns:t,cell:a,selected:n,onClick:r,onMouseEnter:o}=e,[s,c]=Object(l.useState)(!1),d=a.stats?a.stats.sound:"",p=100/t+"%";let u="";return"S"===a.fill?u="lightgreen":"X"===a.fill&&(u="brown"),i.a.createElement(Le,{basis:p,fill:u,image:a.terrain},s&&d&&n&&i.a.createElement(ee,{url:K[d]}),i.a.createElement(Pe,{onClick:()=>{r(),c(!0)},selected:n,onMouseEnter:o,path:a.path},i.a.createElement(Fe,{cell:a,selected:n})))});var Qe=u.c.div.withConfig({displayName:"styledConsole__StyledConsole",componentId:"sc-13143ig-0"})(["display:flex;flex-direction:column;flex-wrap:nowrap;width:100%;height:calc(50% - 10px);max-height:50vh;padding:4px 8px;margin-top:10px;text-align:left;font-size:14px;overflow-y:scroll;box-shadow:",";border-radius:",";background-color:",";&::-webkit-scrollbar{-webkit-appearance:none;width:7px !important;}&::-webkit-scrollbar-thumb{border-radius:4px;background-color:",";box-shadow:",";}"],G.standard,N,$.glassTransparent,$.gray,G.standard);Element.propTypes={action:Z.a.object.isRequired},Element.defaultProps={};var Ze=e=>{const{action:t}=e,[a,n]=Object(l.useState)([]);return Object(l.useEffect)(()=>{if(t){let e="";const r=t.selected.stats,l=t.selected.index,i=t.path,o=t.defender?t.defender.stats:null,s=t.defender?t.defender.index:null,c=t.attackResult?t.attackResult.attackResult:null,d=t.attackResult?t.attackResult.damageResult:null;e+=`<span style='color: purple;'>${r.name}</span>(speed:${r.speed-1}) moved for ${i.length-1} tiles from tile-${l} to tile-${i[i.length-1].index}`,t.defender&&(e+=`<span style='color: purple;'>${r.name}</span> attacked <span style='color: teal;'>${o.name}</span> at tile-${s}<br>`,e+=`${r.name} rolled ${c.attack} 1d20(${c.attackRoll}) + ${c.attackBonus} vs. AC:${c.defenderAC} and ${c.isHit?`<span style='color: red;'>${d.isDead?"KILLED!":"HIT!"} for ${d.damage} damage.</span>`:"<span style='color: red;'>MISSED!</span>"}`),n([e+="<br><br>",...a])}},[t]),i.a.createElement(Qe,null,a.map((e,t)=>i.a.createElement("p",{key:t,dangerouslySetInnerHTML:{__html:e}})))};var et=u.c.div.withConfig({displayName:"styledSidebarInfo__StyledSidebarInfo",componentId:"sc-18el9y4-0"})(["display:flex;width:100%;height:50%;box-shadow:",";border-radius:",";background-color:",";padding:4px 8px;"],G.standard,N,$.glass);Element.propTypes={},Element.defaultProps={};var tt=e=>i.a.createElement(et,null,"Selected/Hover Info");var at=u.c.div.withConfig({displayName:"styledSidebar__StyledSidebar",componentId:"bobnt5-0"})(["display:flex;flex-direction:column;flex-wrap:nowrap;width:33.3%;padding-left:10px;"]);Element.propTypes={action:Z.a.object.isRequired},Element.defaultProps={};var nt=e=>{const{action:t}=e;return i.a.createElement(at,null,i.a.createElement(tt,null),i.a.createElement(Ze,{action:t}))};const rt={warrior:Ae.a,goblin:Je.a},lt={human:"2px solid gold",ai:"2px solid red"},it=u.c.div.withConfig({displayName:"styledInfoBar__StyledInfoBar",componentId:"sc-1vtf4wl-0"})(["display:flex;border:1px solid darkgray;width:100%;align-items:center;min-height:50px;"]),ot=u.c.div.withConfig({displayName:"styledInfoBar__StyledPortrait",componentId:"sc-1vtf4wl-1"})(["display:flex;flex-direction:column;height:100px;width:100px;margin-left:5px;border-radius:50%;background:url(",") center center/cover no-repeat;border:",";p{margin-top:auto;color:rgba(230,230,230);font-size:14px;}"],e=>rt[e.image],e=>e.player?lt[e.player]:""),st=e=>{const{allCharacters:t}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Turn order:"),i.a.createElement(it,null,(e=>{if(e)return e.map((e,t)=>i.a.createElement(ot,{key:t,image:e.image,player:e.player},i.a.createElement("p",{style:{backgroundColor:"rgba(94, 94, 94, 0.6)"}},"name: ",e.name,i.a.createElement("br",null),"init: ",e.initiative,i.a.createElement("br",null),"hp: ",e.hp,i.a.createElement("br",null),"att: ",e.attack,i.a.createElement("br",null),"dmg: ",e.damage[0],"-",e.damage[1])))})(t)))};st.propTypes={grid:Z.a.object.isRequired,allCharacters:Z.a.array},st.defaultProps={allCharacters:[]};Object(o.b)(e=>({allCharacters:e.TurnReducer.turnInfo.get("allCharacters")}),e=>({}))(st);const ct=e=>{let{grid:t,updateGrid:a,settings:n,createGrid:r,destroyGrid:o,activeCharacter:s,allCharacters:c,startTurn:d,nextMove:p,resetTurn:u,humanCharacters:m,aiCharacters:h}=e;const[f,g]=Object(l.useState)(),[b,x]=Object(l.useState)(!1),[y,w]=Object(l.useState)({}),[C,E]=Object(l.useState)(!1),[v,k]=Object(l.useState)(!1),[I,R]=Object(l.useState)(),T=Object(l.useRef)(!1);Object(l.useEffect)(()=>{c.length>0&&(h.length<1&&(alert("You win!"),_()),m.length<1&&(alert("You lose!"),_()))},[c]),Object(l.useEffect)(()=>{s&&s.name&&$(t.get(s.index))},[s]),Object(l.useEffect)(()=>{0===c.length&&t.size>0&&d(t)},[t]),Object(l.useEffect)(()=>{if("ai"===s.player&&y&&f){const e=qe(t,s,m);if(e){const a=q(t.get(e));a.path.length>0&&setTimeout(()=>{N(a.path,a.attackResult,a.defenderIndex)},300)}else setTimeout(()=>{j(t)},500)}},[y]);const S=e=>{T.current&&a(e)},j=e=>{T.current&&p(e)},_=()=>{T.current=!1,o(),u()},O=()=>{x(!1),g(null),w({}),S(ke.clearPath(t))},$=e=>{x(!0),g(e.index),w(e.stats),S(ke.clearPath(t))},G=e=>new Promise(t=>{setTimeout(()=>{t()},e)});async function N(e,a,n){const r=a&&a.attackResult.isHit;k(!0),E(!0),S(t.setIn([f,"animation"],Re.moveAnimationBuilder(e,300,{attackResult:a,defender:t.getIn([n])})));const l=a?900:0;await G(300*e.length+l),O(),k(!1);let i=t;i=ke.moveCharacter(i,y,i.get(e[e.length-1].index));let o=a?i.getIn([n]):null;o&&(i=i.setIn([o.index,"attack"],!0)),r&&(o.stats.hp=a.damageResult.hp,i=o.stats.hp>0?ke.updateCharacter(i,o):ke.clearTile(i,n)),R({selected:t.getIn([f]),path:e,attackResult:a,defender:o}),S(i),await G(a?500:0),E(!1),j(i)}const q=e=>{const a=ke.startSearch(t,f,e.index,y);let n=!1,r=[],l=!1;return a&&a.grid&&(S(a.grid),r=a.result,l=a.attackResult,n=!0),{moveAllowed:n,path:r,attackResult:l,defenderIndex:e.index}};return i.a.createElement(ue,null,i.a.createElement(pe,{empty:0===c.length},v&&i.a.createElement(ee,{url:K.walking}),c.length>0?t.map(e=>{const t=e.index===f;return i.a.createElement(Ke,{key:e.index,cell:e,selected:t,onClick:()=>{(e=>{if(console.log("cell",e),!b||C||"ai"===s.player){if("C"!==e.fill);}else{const t=q(e);"X"!==e.fill&&t.path.length>0&&t.moveAllowed&&N(t.path,t.attackResult,t.defenderIndex)}})(e)},onMouseEnter:()=>{b&&!C&&"ai"!==s.player&&q(e)}})}):null),i.a.createElement(nt,{action:I}),i.a.createElement("div",null,i.a.createElement("button",{onClick:()=>{_()}},"END GAME"),i.a.createElement("button",{onClick:()=>{"ai"!==s.player&&j(t)}},"SKIP TURN"),i.a.createElement("button",{onClick:()=>{T.current=!0,r(n)}},"START")))};ct.propTypes={updateGrid:Z.a.func.isRequired,grid:Z.a.object.isRequired,settings:Z.a.object.isRequired,createGrid:Z.a.func.isRequired,destroyGrid:Z.a.func.isRequired,activeCharacter:Z.a.object,allCharacters:Z.a.array.isRequired,startTurn:Z.a.func.isRequired,nextMove:Z.a.func.isRequired,resetTurn:Z.a.func.isRequired},ct.defaultProps={activeCharacter:null};var dt=Object(o.b)(e=>({grid:e.GridReducer.grid,settings:e.ConfigReducer.settings,turnInfo:e.TurnReducer.turnInfo,activeCharacter:e.TurnReducer.turnInfo.get("activeCharacter"),allCharacters:e.TurnReducer.turnInfo.get("allCharacters"),humanCharacters:e.TurnReducer.turnInfo.get("humanCharacters"),aiCharacters:e.TurnReducer.turnInfo.get("aiCharacters")}),e=>({updateGrid:t=>e(n.updateGrid(t)),createGrid:t=>e(n.createGrid(t)),destroyGrid:()=>e(n.destroyGrid()),startTurn:t=>e(r.startTurn(t)),nextMove:t=>e(r.nextMove(t)),resetTurn:()=>e(r.resetTurn())}))(ct);var pt=e=>i.a.createElement(ne,null,i.a.createElement(dt,null));const ut=u.b`
    body {
        text-align: center;
        color: ${$.black};
        font-family: ${M};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a,
    a:visited,
    a:focus,
    a:hover {
        text-decoration: none;
        color: inherit;
    }
`;var mt=function(){return i.a.createElement(d.a,{basename:""},i.a.createElement(d.a,null,i.a.createElement(u.a,{theme:B},i.a.createElement(j,null),i.a.createElement(ut,null),i.a.createElement(oe,null,i.a.createElement(p.c,null,i.a.createElement(p.a,{path:le.about,component:de}),i.a.createElement(p.a,{path:le.battle,component:pt}),i.a.createElement(p.a,{exact:!0,path:le.home,component:ce}),i.a.createElement(p.a,null,i.a.createElement("h1",null,"Page not found")))))))},ht=a(12),ft=a(46),gt=a.n(ft);const bt={grid:new ye.a([])};var xt=(e=bt,t)=>{switch(t.type){case"UPDATE_GRID":return{...e,grid:t.grid};case"CREATE_GRID":return{...e,grid:ke.makeGrid(t.settings)};case"DESTROY_GRID":return{...e,grid:new ye.a([])};default:return e}};const yt={muted:!0,settings:{rows:10,columns:10,fill:{rows:10,obstacles(){return Math.round(this.rows*(this.rows/2.5)-1.5*this.rows)},characters:[{id:1,name:"Victor",type:"hero",speed:6,image:"warrior",index:4,fill:"C",sound:"warrior",hp:4,attack:2,ac:0,damage:[2,6],player:"human",initiative:24},{id:2,name:"Victor S",type:"hero",speed:6,image:"warrior",index:5,fill:"C",sound:"warrior",hp:4,attack:2,ac:15,damage:[2,6],player:"human",initiative:10},{id:3,name:"Goblin",type:"enemy",speed:5,image:"goblin",index:96,fill:"C",sound:"goblin",hp:6,attack:0,ac:8,damage:[1,4],player:"ai",initiative:18},{id:4,name:"Goblin F",type:"enemy",speed:6,image:"goblin",index:93,fill:"C",sound:"goblin",hp:6,attack:0,ac:8,damage:[1,4],player:"ai",initiative:13},{id:5,name:"Goblin",type:"enemy",speed:7,image:"goblin",index:94,fill:"C",sound:"goblin",hp:6,attack:0,ac:8,damage:[1,4],player:"ai",initiative:18},{id:6,name:"Goblin",type:"enemy",speed:5,image:"goblin",index:95,fill:"C",sound:"goblin",hp:6,attack:0,ac:8,damage:[1,4],player:"ai",initiative:18}]}}};var wt=(e=yt,t)=>{switch(t.type){case"TOGGLE_SOUND":return{...e,muted:t.muted};default:return e}};const Ct={turnInfo:new ye.b({currentPlayer:null,activeCharacter:{},turnOrder:[],allCharacters:[],humanCharacters:[],aiCharacters:[]})};var Et=(e=Ct,t)=>{switch(t.type){case"START_TURN":{let{allCharacters:a,humanCharacters:n,aiCharacters:r}=Se.findCharacters(t.grid);a=Se.sortCharacters(a);let l=e.turnInfo;return l=l.setIn(["allCharacters"],a).setIn(["humanCharacters"],n).setIn(["aiCharacters"],r).setIn(["activeCharacter"],a[0]),{...e,turnInfo:l}}case"NEXT_MOVE":{let{allCharacters:a,humanCharacters:n,aiCharacters:r,activeCharacter:l}=Se.updateCharacters(e,t.grid),i=e.turnInfo;return i=i.setIn(["allCharacters"],a).setIn(["humanCharacters"],n).setIn(["aiCharacters"],r).setIn(["activeCharacter"],l),{...e,turnInfo:i}}case"RESET_TURN":{const t=new ye.b({currentPlayer:null,activeCharacter:{},turnOrder:[],allCharacters:[],humanCharacters:[],aiCharacters:[]});return{...e,turnInfo:t}}default:return e}},vt=Object(ht.c)({GridReducer:xt,ConfigReducer:wt,TurnReducer:Et});const kt=Object(ht.d)(vt,Object(ht.a)(gt.a));c.a.render(i.a.createElement(o.a,{store:kt},i.a.createElement(mt,null)),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.86a3fdf8.chunk.js.map