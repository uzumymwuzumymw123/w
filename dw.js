const e={drop:35,windmilPut:14,windmilTake:26,ovenTakeBread:12,ovenPutFlour:0,ovenPutWood:17,extPut:9,extTake:1,placeBuild:15,joinTotem:38,angle:19,attack:24,stopAttack:36,chestPut:13,chestTake:27,equip:16,recycle:20,craft:2,revive:33},t=new Image;t.src="https://raw.githubusercontent.com/XmreLoux/images/main/sandstorm.png";const n=new Image;n.src="https://raw.githubusercontent.com/XmreLoux/images/main/blizzard.png";let o,a,i,l,r,s,d,u,c={ColoredSpikes:{enabled:!0},AutoSpike:{key:"Space",enabled:!1},AutoPutRed:{key:"KeyC",enabled:!1},AMB:{enabled:!1,key:"KeyF",a:null,t:null},AutoFeed:{enabled:!0},AutoRespawn:{enabled:!1,key:"NULL"},dropsword:{enabled:!1,key:"KeyV"},AutoCrown:{enabled:!1,key:"KeyZ"},AutoCraft:{enabled:!1,key:"KeyK"},AutoRecycle:{enabled:!1,key:"KeyL"},pathfinder:{enabled:!1,key:"Numpad1",x:null,y:null,pvpordie:{x1:48,y1:48,x2:47,y2:44}},AutoSteal:{enabled:!1,key:"KeyQ",draw:!0},AutoTotem:{enabled:!1,key:"KeyH"},ExtractorInfo:{enabled:!0},ExtractorSteal:{enabled:!1,key:"KeyI"},ExtractorPut:{enabled:!1,key:"KeyP"},AutoFarm:{enabled:!1,water:!1,key:"NONE",keyMode:"press",angle:null,x:0,y:0,xx:0,yy:0,sx:0,sy:0},nows:{autoextractortake:Date.now(),autoextractorput:Date.now(),autobreadtake:Date.now(),autobreadput:Date.now(),autocraft:Date.now(),autorecycle:Date.now(),autosteal:Date.now(),autobuild:Date.now(),autototem:Date.now(),autoseed:Date.now(),autocrown:Date.now(),dropsword:Date.now(),SwordInChest:Date.now(),autospike:Date.now(),autofarm:Date.now()}},y=console.log;unsafeWindow.log=y;let p=Symbol();Object.defineProperty(Object.prototype,"timeout",{get(){return this[p]},set(e){this[p]=e,l||(l=this,unsafeWindow.client=l)}}),Object.defineProperty(Object.prototype,"mapping",{get(){return this[p]},set(e){this[p]=e,r||(r=this,unsafeWindow._this=r)}}),Object.defineProperty(Object.prototype,"buttons",{get(){return this[p]},set(e){this[p]=e,d||(d=this,unsafeWindow.ui=d)}}),Object.defineProperty(Object.prototype,"IDLE",{get(){return this[p]},set(e){this[p]=e,u||(u=this,unsafeWindow.mouse=u)}}),Object.defineProperty(Object.prototype,"opacity",{get(){return this[p]=.5,this[p]},set(e){this[p]=e}}),Object.defineProperty(Screen.prototype,"width",{get:function(){return 3840},set:function(e){this[p]=e}}),Object.defineProperty(Screen.prototype,"height",{get:function(){return 2160},set:function(e){this[p]=e}}),Object.defineProperty(Object.prototype,"mode",{get(){return this[p]},set(e){this[p]=e,i||(i=this,unsafeWindow.world=i)}}),Object.defineProperty(Object.prototype,"control",{get(){return this[p]},set(e){this[p]=e,s||(s=this,unsafeWindow.user=s,function(){let e=document.getElementById("preroll"),t=document.getElementById("trevda"),n=document.createElement("style");e.remove(),t.remove(),n.innerHTML=".grecaptcha-badge { visibility: hidden; }",document.head.appendChild(n)}())}});function f(e){let t=Object.keys(l)[0];l[t].send(JSON.stringify(e))}function h(){let e=Object.keys(i)[4];return i[e]}function k(){const e=Object.values(s)[17];return Object.values(i)[5][e]}function b(){return"inline-block"===document.getElementById("chat_block").style.display||"inline-block"===document.getElementById("commandMainBox").style.display}function w(){const e=Object.values(s)[29];return Object.values(e)[2]}function m(e){const t=Object.values(s)[34],n=Object.values(t)[3];return 0!==n[e]&&void 0!==n[e]?[!0,n[e]]:[!1,void 0]}function A(){let e=Object.keys(s)[10];return s[e]}function S(){let e,t;for(let n in s)for(let o in s[n])switch(o){case"x":e=s[n][o];break;case"y":t=s[n][o]}return[e,t]}let g,x,E,v,W,I;function P(){let e=k();if(e){let t=0;for(let n in e)"number"==typeof e[n]&&(t++,2===t&&(e[n]===s.id?(g=n,clearInterval(x)):(alert("[ERROR] FAILED TO HOOK PID"),clearInterval(x))))}}function M(){let e=k();if(e){let t=0;for(let n in e)"number"==typeof e[n]&&(t++,26===t&&(E=n,clearInterval(v)))}}function j(){let e=k();if(e){let t=0;for(let n in e)"number"==typeof e[n]&&(t++,38===t&&(W=n,clearInterval(I)))}}unsafeWindow.unit=h;let O,T=null;function B(){requestAnimationFrame(B);let t=Date.now(),n=k();c.dropsword.enabled&&t-c.nows.dropsword>20&&(K(n.right)&&f([e.drop,n.right]),c.nows.dropsword=t)}function D(){null!==T&&"null"!==T||[5,12,13,14,20,52,10,15,16,17,21,51,45,46,47,48,49,53].forEach((e=>{if(h()[e].length>0)for(let t in h()[e])for(const n in h()[e][t])"function"==typeof h()[e][t][n]&&(h()[e][t][n].toString().includes("width")?(T=n,clearInterval(O)):clearInterval(O))}))}function C(){const e=k();e&&(c.pathfinder.x=Math.floor(e.x/100),c.pathfinder.y=Math.floor(e.y/100))}function K(e,t){switch(e){case 34:case 18:case 33:case 15:case 14:case 13:case 12:case 16:case 17:return 2;case 57:case 5:case 6:case 30:case 62:case 9:case 0:case 63:case 19:return 1;case 64:case 65:case 66:case 67:case 68:case 70:case 69:return 3;case 94:case 95:case 96:case 97:case 98:case 90:case 99:return 6;case 45:if(t)return 4;case-1:if(t)return 5}return 0}function R(){requestAnimationFrame(R);let e=k();Object.keys(l)[122];if(c.pathfinder.enabled&&e&&null!=c.pathfinder.x&&null!=c.pathfinder.y){const t={x:Math.floor(e.x/100),y:Math.floor(e.y/100)},n=Array.from({length:6},((e,t)=>t+63)),o=Array.from({length:6},((e,t)=>t+10)),a={x:Math.floor(c.pathfinder.x),y:Math.floor(c.pathfinder.y)};n.includes(t.x)&&o.includes(t.y)||function(e,t){if(t.x<=unsafeWindow.wrld.nw&&t.x>=0&&t.y<=unsafeWindow.wrld.nh&&t.y>=0){var n=new PF.Grid(unsafeWindow.wrld.nw,unsafeWindow.wrld.nh);[11,12,13,14,20,52].forEach((e=>{let o=h()[e];for(let e=0;e<o.length;e++)Math.round(o[e].x/100)==t.x&&Math.round(o[e].y/100)==t.y||(n.setWalkableAt(Math.round(o[e].x/100),Math.round(o[e].y/100),!1),n.setWalkableAt(Math.round(o[e].x/100),Math.round(o[e].y/100)+1,!1),n.setWalkableAt(Math.round(o[e].x/100),Math.round(o[e].y/100)-1,!1),n.setWalkableAt(Math.round(o[e].x/100)+1,Math.round(o[e].y/100),!1),n.setWalkableAt(Math.round(o[e].x/100)-1,Math.round(o[e].y/100),!1))})),[[{x:31,y:29},{x:31,y:28},{x:32,y:28},{x:33,y:28},{x:34,y:28},{x:35,y:28},{x:35,y:29},{x:30,y:34},{x:30,y:35},{x:31,y:35},{x:32,y:35},{x:33,y:35},{x:34,y:35},{x:35,y:34}]].forEach((e=>{e.forEach((e=>{let o=Math.round(e.x),a=Math.round(e.y);o===t.x&&a===t.y||(n.setWalkableAt(o,a,!1),n.setWalkableAt(o,a+1,!1),n.setWalkableAt(o,a-1,!1),n.setWalkableAt(o+1,a,!1),n.setWalkableAt(o-1,a,!1))}))}));var o=new PF.AStarFinder({allowDiagonal:!0,dontCrossCorners:!0}).findPath(e.x,e.y,t.x,t.y,n);let a=Object.keys(l)[122];0===o.length?l[a](Math.random()>.5?6:9):o[1]?(o[0][0]==o[1][0]&&o[0][1]+1==o[1][1]&&l[a](4),o[0][0]==o[1][0]&&o[0][1]-1==o[1][1]&&l[a](8),o[0][0]-1==o[1][0]&&o[0][1]==o[1][1]&&l[a](1),o[0][0]+1==o[1][0]&&o[0][1]==o[1][1]&&l[a](2),o[0][0]-1==o[1][0]&&o[0][1]-1==o[1][1]&&l[a](9),o[0][0]-1==o[1][0]&&o[0][1]+1==o[1][1]&&l[a](5),o[0][0]+1==o[1][0]&&o[0][1]-1==o[1][1]&&l[a](10),o[0][0]+1==o[1][0]&&o[0][1]+1==o[1][1]&&l[a](6)):l[a](0)}}(t,a)}}function q(){let t=k();if(!0===A()&&!1===b()&&c.AutoPutRed.enabled){var n=h()[11];for(let i=0;i<n.length;++i)o=t,a=n[i],Math.sqrt((a.x-o.x)*(a.x-o.x)+(a.y-o.y)*(a.y-o.y))<=330&&(f([e.chestPut,202,10,n[i][g],n[i].id]),f([e.chestPut,111,10,n[i][g],n[i].id]))}var o,a}function F(){function t(e){let t,n=0;for(let e in s)if(n++,22===n){t=s[e];break}return e===s.id||(Array.isArray(t)?t.includes(e):void 0)}requestAnimationFrame(F);let n=k();if(c.AMB.enabled&&n&&!0===A()){let i;switch(K(n.right,!0)){case 1:i=n[E]?196.8:157.6;break;case 2:i=n[E]?291.8:227.6;break;case 3:i=620;break;case 4:i=n[E]?140:125;break;case 5:i=85==n.clothe||83==n.clothe?n[E]?120.8:97.6:null;break;default:i=null}if(i){const l=function(e,n){let o=null,a=-1,i=2===K(e.right,!1);for(var l=0,r=null,s=null;l<n.length;++l)if((r=n[l])[g]!==e[g]&&!t(r[g])&&!t(r[g])&&e[E]===r[E]&&!r.ghost){if(s=(e.x-r.x)**2+(e.y-r.y)**2,i&&s<210)continue;(-1===a||s<a)&&(a=s,o=r)}let d=Object.keys(u)[4];return c.AMB.enabled&&null!=c.AMB.a&&(u[d].x=S()[0]+o.x,u[d].y=S()[1]+o.y),o}(n,h()[0]);if(l){const t=(a=l,(o=n)&&a?Math.sqrt((o.x-a.x)**2+(o.y-a.y)**2):null);if(t<=i){c.AMB.a=function(e,t,n){return e&&t?n?Math.atan2(t.r.y-e.r.y,t.r.x-e.r.x):Math.atan2(t.y-e.y,t.x-e.x):null}(n,l,!0),c.AMB.t=l;const o=2*Math.PI,a=Math.floor((c.AMB.a+o)%o*255/o);f([e.angle,a]),c.AMB.a&&t<=i-22&&45!==n.right&&(f([e.attack,a]),f([e.stopAttack]))}else c.AMB.a=null,c.AMB.t=null}else c.AMB.a=null}}var o,a}function L(){let e,t,n=document.createElement("div");n.style.position="absolute",n.id="autoCraftActive",n.innerHTML="",n.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif",n.style.transform="translate(-50%)",n.style.fontSize="38px",n.style.top="84%",n.style.left="50%",n.style.color="#ff0000",n.style.userSelect="none",n.style.fontWeight="bold",n.style.zIndex="9999999999999",n.style.visibility="hidden",document.body.appendChild(n),function o(){if(1==A()){"visible"!==n.style.visibility&&(n.style.visibility="visible");let o=function(){const e=Object.values(s)[29];return Object.values(e)[1]}(),a=performance.now();o!==e&&o>e&&(t=performance.now());let i=Math.round((a-t)/1e3);"number"==typeof i&&i>10&&0==isNaN(i)&&(t=performance.now()),"number"==typeof i&&0==isNaN(i)&&(n.innerHTML=i),e=o}else"hidden"!==n.style.visibility&&(n.style.visibility="hidden",e=void 0,t=void 0);requestAnimationFrame(o)}()}function _(){if(requestAnimationFrame(_),!0===A()&&w()<.6&&!window.AutoEatWait){unsafeWindow.AutoEatWait=!0;const t=[110,117];for(const n of t)m(n)&&f([e.equip,n]);setTimeout((()=>{unsafeWindow.AutoEatWait=!1}),500)}}function z(){let e,o,a,i=0;for(let t in s)if(i++,37===i&&(autofeed=s[t]),47===i&&(o=s[t]),48===i){let n=0;for(let o in s[t])n++,2===n&&(e=s[t],unsafeWindow.blizz1=e,a=[o]);break}requestAnimationFrame(z);var l=-8;const r=document.getElementById("game_canvas").getContext("2d");!0===A()&&e[a]&&(r.save(),r.drawImage(n,autofeed.translate.x,autofeed.translate.y+l),l+=70),!0===A()&&o[a]&&(r.save(),r.drawImage(t,autofeed.translate.x,autofeed.translate.y+l),l+=70)}function N(){requestAnimationFrame(N);try{unsafeWindow.ctx=document.getElementById("game_canvas").getContext("2d")}catch(e){return}let e=22.5;for(hack in c)c[hack].enabled&&c[hack].key&&(ctx.save(),ctx.beginPath(),ctx.lineWidth=6,ctx.fillStyle="red",ctx.strokeStyle="black",ctx.font="22px Baloo Paaji",ctx.strokeText(hack,3,e),ctx.fillText(hack,3,e),ctx.restore(),e+=22.5)}function G(){requestAnimationFrame(G);const t=Date.now();let n=k();if(t-c.nows.autoextractortake>100){[24,25,26,27,28,29].forEach((t=>{var o,a,i=h()[t];if(!0===A()&&!1===b()&&c.ExtractorSteal.enabled)for(let l=0;l<i.length;++l)o=n,a=i[l],Math.sqrt((a.x-o.x)*(a.x-o.x)+(a.y-o.y)*(a.y-o.y))<=330&&f([e.extTake,i[l][g],i[l].id,t])})),c.nows.autoextractortake=t}}function H(){requestAnimationFrame(H);const t=Date.now();let n=k();if(t-c.nows.autoextractorput>100){[24,25,26,27,28,29].forEach((t=>{var o,a,i=h()[t];if(!0===A()&&!1===b()&&c.ExtractorPut.enabled)for(let l=0;l<i.length;++l)o=n,a=i[l],Math.sqrt((a.x-o.x)*(a.x-o.x)+(a.y-o.y)*(a.y-o.y))<=330&&f([e.extPut,68,i[l][g],i[l].id,t])})),c.nows.autoextractorput=t}}function U(){let t=k();if(!0===A()&&!1===b()&&c.AutoSteal.enabled){var n=h()[11];for(let i=0;i<n.length;++i)o=t,a=n[i],Math.sqrt((a.x-o.x)*(a.x-o.x)+(a.y-o.y)*(a.y-o.y))<=330&&f([e.chestTake,n[i][g],n[i].id])}var o,a}function X(){const t=k(),n=document.querySelector("canvas").getContext("2d");requestAnimationFrame(X);const o=h()[29];if(void 0!==o&&void 0!==o.length&&0!==o.length){if(!0===A()&&!1===b()&&c.AutoTotem.enabled)for(let n=0;n<o.length;++n)a=t,i=o[n],Math.sqrt((i.x-a.x)*(i.x-a.x)+(i.y-a.y)*(i.y-a.y))<=300&&f([e.joinTotem,o[n][g],o[n].id]);var a,i;!function(){for(let e=0;e<o.length;++e){const{x:t,y:a,info:i}=o[e];let l=h()[29][e];n.save(),n.lineWidth=8,n.font="26px Baloo Paaji",n.strokeStyle="#000",n.fillStyle=l.info>=16?"red":"lime",n.strokeText(i>=16?"🔒":"🔓",t-20+S()[0],a+S()[1]),n.fillText(i>=16?"🔒":"🔓",t-20+S()[0],a+S()[1]);const r=l.info>=16?"People in totem: "+l.info%16:"People in totem: "+l.info;n.font="16px Baloo Paaji",n.strokeStyle="black",n.fillStyle="white",n.fillText(r,l.x-20+S()[0],l.y+S()[1]-30),n.restore(),n.restore()}}()}}function Y(){requestAnimationFrame(Y);Object.keys(l)[119],Object.keys(l)[103];let t=Object.keys(s)[8],n=k();if(n&&!s[t].enabled&&(c.AutoCrown.last=n.right),!c.AutoCrown.enabled)return;if(!m(79))return;if(!s[t].enabled)return;let o=h()[22];if(o.length<1)return;o.forEach((t=>{var o,a;o=t,a=n,Math.sqrt((a.x-o.x)*(a.x-o.x)+(a.y-o.y)*(a.y-o.y))<=400&&f([e.revive,t[g],t.id])}))}unsafeWindow.sp=D;let J={AutoSpike:!0,AutoFarm:!0,AutoWall:!0,AutoCraft:!0};function V(){if(!1===b()){let t;if(m(219)[0]?t=219:m(123)[0]?t=123:m(170)[0]?t=170:m(169)[0]?t=169:m(168)[0]?t=168:m(162)[0]?t=162:m(113)[0]&&(t=113),c.AutoSpike.enabled&&!0===A()&&void 0!==t&&J.AutoSpike){J.AutoSpike=!1,setTimeout((e=>J.AutoSpike=!0),100);let n=2*Math.PI,o=k(),a=o.angle;c.AMB.a&&c.AMB.enabled&&(a=c.AMB.a),unsafeWindow.wp=o;let i=Math.floor((a+n)%n*255/n);f([e.placeBuild,t,i,0]);for(let n=10;n<30;n+=3)f([e.placeBuild,t,(-n+i)%255,0]),f([e.placeBuild,t,(n+i)%255,0])}}}const Z={initUI:()=>{let e=new guify({title:"Kanima",theme:{name:"Kanima",colors:{panelBackground:"#00000099",componentBackground:"black",componentForeground:"#de00ff",textPrimary:"#de00ff",textSecondary:"#de00ff",textHover:"black "},font:{fontFamily:"Baloo Paaji",fontSize:"20px",fontWeight:"1"}},align:"right",width:550,barMode:"none",panelMode:"none",root:unsafeWindow.container,open:!1});e.Register({type:"folder",label:"Misc",open:!1}),e.Register({type:"folder",label:"Binds",open:!1}),e.Register({type:"folder",label:"PathFinder",open:!1}),e.Register([{type:"checkbox",label:"AutoExtractor Take",object:c.ExtractorSteal,property:"enabled",onChange:e=>{Z.saveSettings()}},{type:"checkbox",label:"AutoRespawn",object:c.AutoRespawn,property:"enabled",onChange:e=>{Z.saveSettings()}},{type:"checkbox",label:"Autocrown",object:c.AutoCrown,property:"enabled",onChange:e=>{Z.saveSettings()}},{type:"checkbox",label:"AutoExtractor Put",object:c.ExtractorPut,property:"enabled",onChange:e=>{Z.saveSettings()}},{type:"checkbox",label:"AutoTotem",object:c.AutoTotem,property:"enabled",onChange:e=>{Z.saveSettings()}},{type:"checkbox",label:"AMB",object:c.AMB,property:"enabled",onChange:e=>{Z.saveSettings()}}],{folder:"Misc"}),e.Register([{type:"button",label:"Set AutoExtractor Put k",action:e=>{Z.controls.setKeyBind("ExtractorPut")}},{type:"display",label:"AutoExtractor Put k:",object:c.ExtractorPut,property:"key"},{type:"button",label:"Set AutoExtractor Take k",action:e=>{Z.controls.setKeyBind("ExtractorSteal")}},{type:"display",label:"AutoExtractor Take k:",object:c.ExtractorSteal,property:"key"},{type:"button",label:"Set AutoTotem k",action:e=>{Z.controls.setKeyBind("AutoTotem")}},{type:"display",label:"AutoTotem k:",object:c.AutoTotem,property:"key"},{type:"button",label:"Set AutoSpike k",action:e=>{Z.controls.setKeyBind("AutoSpike")}},{type:"display",label:"AutoSpike k:",object:c.AutoSpike,property:"key"},{type:"button",label:"Set AutoCraft k",action:e=>{Z.controls.setKeyBind("AutoCraft")}},{type:"display",label:"AutoCraft k:",object:c.AutoCraft,property:"key"},{type:"button",label:"Set AutoRecycle k",action:e=>{Z.controls.setKeyBind("AutoRecycle")}},{type:"display",label:"AutoRecycle k:",object:c.AutoRecycle,property:"key"},{type:"button",label:"Set AutoSteal k",action:e=>{Z.controls.setKeyBind("AutoSteal")}},{type:"display",label:"DropSword Put k:",object:c.dropsword,property:"key"},{type:"button",label:"Set DropSword k",action:e=>{Z.controls.setKeyBind("DropSword")}},{type:"display",label:"AutoSteal k:",object:c.AutoSteal,property:"key"},{type:"button",label:"Set AutoSteaL k",action:e=>{Z.controls.setKeyBind("AutoSteal")}}],{folder:"Binds"}),e.Register([{type:"checkbox",label:"Pathfinder Enabled",folder:"Pathfinder",object:c.pathfinder,property:"enabled",onChange(){Z.saveSettings&&Z.saveSettings()}},{type:"display",label:"Pathfinder Key",folder:"Pathfinder",object:c.pathfinder,property:"key"},{type:"button",label:"Set Pathfinder Key",folder:"Pathfinder",action(){Z.controls.setKeyBind("pathfinder")}},{type:"display",label:"Pathfinder X",folder:"Pathfinder",object:c.pathfinder,property:"x"},{type:"display",label:"Pathfinder Y",folder:"Pathfinder",object:c.pathfinder,property:"y"},{type:"button",label:"Set Current Player Position",folder:"Pathfinder",action(){C&&C()}}],{folder:"PathFinder"})},controls:null,controller:class{setKeyBind(e){c[e].key="Press any key";let t=0;document.addEventListener("keydown",(function n(o){t++,t>=1&&("Escape"==o.code?c[e].key="NONE":c[e].key=o.code,document.removeEventListener("keydown",n),Z.saveSettings())}))}},saveSettings:()=>{for(let e in c)localStorage.setItem(e+"ZMX",JSON.stringify(c[e]))},loadSettings:()=>{for(let e in c){let t=localStorage.getItem(e);t&&(c[e]=JSON.parse(t))}},LoadHack:()=>{Z.loadSettings(),Z.controls=new Z.controller,Z.initUI(),Z.saveSettings()}};let Q,$;function ee(){V(),function(){let t;function n(){if(void 0!==o&&w()<.6&&!window.AutoEatWait){unsafeWindow.AutoEatWait=!0;const t=[110,117];for(const n of t)m(n)&&f([e.equip,n]);setTimeout((()=>{unsafeWindow.AutoEatWait=!1}),500)}else f([e.craft,o])}document.addEventListener("keydown",(function(e){e.code===c.AutoCraft.key&&(0==c.AutoCraft.enabled&&!1===b()?(n(),t=setInterval(n,20),c.AutoCraft.enabled=!0):1==c.AutoCraft.enabled&&(clearInterval(t),c.AutoCraft.enabled=!1))}))}(),function(){let t=Object.keys(l)[95];l[t]=t=>(o=t,f([e.equip,28]),f([e.craft,t]),1)}(),unsafeWindow.tw(),function(){let t;function n(){if(!0===A()&&void 0!==a&&w()<.6&&!window.AutoEatWait){unsafeWindow.AutoEatWait=!0;const t=[110,117];for(const n of t)m(n)&&f([e.equip,n]);setTimeout((()=>{unsafeWindow.AutoEatWait=!1}),500)}else f([e.recycle,a])}document.addEventListener("keydown",(function(e){e.code===c.AutoRecycle.key&&(0==c.AutoRecycle.enabled&&!1===b()?(n(),t=setInterval(n,20),c.AutoRecycle.enabled=!0):1==c.AutoRecycle.enabled&&(clearInterval(t),c.AutoRecycle.enabled=!1))}))}(),_(),Y(),R(),z(),function(){if(!0===A()&&c.ColoredSpikes.enabled){unsafeWindow.ReiditeSpikeAlly=new Image,unsafeWindow.ReiditeSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-reidite-spike-ally.png",unsafeWindow.AmethystSpikeAlly=new Image,unsafeWindow.AmethystSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-amethyst-spike-ally.png",unsafeWindow.DiamondSpikeAlly=new Image,unsafeWindow.DiamondSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-diamond-spike-ally.png",unsafeWindow.GoldSpikeAlly=new Image,unsafeWindow.GoldSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-gold-spike-ally.png",unsafeWindow.StoneSpikeAlly=new Image,unsafeWindow.StoneSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-stone-spike-ally.png",unsafeWindow.WoodSpikeAlly=new Image,unsafeWindow.WoodSpikeAlly.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-wood-spike-ally.png",unsafeWindow.ReiditeSpikeEnemy=new Image,unsafeWindow.ReiditeSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-reidite-spike-enemy.png",unsafeWindow.AmethystSpikeEnemy=new Image,unsafeWindow.AmethystSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-amethyst-spike-enemy.png",unsafeWindow.DiamondSpikeEnemy=new Image,unsafeWindow.DiamondSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-diamond-spike-enemy.png",unsafeWindow.GoldSpikeEnemy=new Image,unsafeWindow.GoldSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-gold-spike-enemy.png",unsafeWindow.StoneSpikeEnemy=new Image,unsafeWindow.StoneSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-stone-spike-enemy.png",unsafeWindow.WoodSpikeEnemy=new Image,unsafeWindow.WoodSpikeEnemy.src="https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-wood-spike-enemy.png";let e={SPIKE:5,STONE_SPIKE:12,GOLD_SPIKE:13,DIAMOND_SPIKE:14,AMETHYST_SPIKE:20,REIDITE_SPIKE:52};unsafeWindow.ITEMS_TO_CHECK={SPIKE:5,STONE_SPIKE:12,GOLD_SPIKE:13,DIAMOND_SPIKE:14,AMETHYST_SPIKE:20,REIDITE_SPIKE:52};let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ_0123456789";for(let a in unsafeWindow)!Array.isArray(unsafeWindow[a])&&t.includes(a[0])||unsafeWindow[a].length>800&&unsafeWindow[a].length<1500&&(unsafeWindow.sprite=unsafeWindow[a]);function n(e){let t,n=0;for(let e in s)if(n++,22===n){t=s[e];break}return e===s.id||(Array.isArray(t)?t.includes(e):void 0)}sprite[1e4]=[WoodSpikeAlly,WoodSpikeAlly],sprite[10001]=[WoodSpikeEnemy,WoodSpikeEnemy],sprite[10002]=[StoneSpikeAlly,StoneSpikeAlly],sprite[10003]=[StoneSpikeEnemy,StoneSpikeEnemy],sprite[10004]=[GoldSpikeAlly,GoldSpikeAlly],sprite[10005]=[GoldSpikeEnemy,GoldSpikeEnemy],sprite[10006]=[DiamondSpikeAlly,DiamondSpikeAlly],sprite[10007]=[DiamondSpikeEnemy,DiamondSpikeEnemy],sprite[10008]=[AmethystSpikeAlly,AmethystSpikeAlly],sprite[10009]=[AmethystSpikeEnemy,AmethystSpikeEnemy],sprite[10010]=[ReiditeSpikeAlly,ReiditeSpikeAlly],sprite[10011]=[ReiditeSpikeEnemy,ReiditeSpikeEnemy];let o=Array.prototype.push;Array.prototype.push=function(t){if(t){let e=Object.keys(t);5==e.length&&e.includes("draw")&&e.includes("in_button")&&32!==t.id&&130!==t.id&&127!==t.id&&4!==t.id&&25!==t.id&&34!==t.id&&87!==t.id&&(unsafeWindow.inventory=this)}if(unsafeWindow.wow=[T],t&&null!=t.type&&null!=t.id&&t.x&&t.y)switch(0===t.type&&g===unsafeWindow.playerID&&(unsafeWindow.player=t),t.type){case e.SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[1e4]):e.apply(this,[10001]):e.apply(this,arguments)};break}case e.STONE_SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[10002]):e.apply(this,[10003]):e.apply(this,arguments)};break}case e.GOLD_SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[10004]):e.apply(this,[10005]):e.apply(this,arguments)};break}case e.DIAMOND_SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[10006]):e.apply(this,[10007]):e.apply(this,arguments)};break}case e.AMETHYST_SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[10008]):e.apply(this,[10009]):e.apply(this,arguments)};break}case e.REIDITE_SPIKE:{t.ally=unsafeWindow.playerID===t[g]||n(t[g]);let e=t[wow];t[wow]=function(n){return c.ColoredSpikes?t.ally?e.apply(this,[10010]):e.apply(this,[10011]):e.apply(this,arguments)};break}case h()[0]:t[wow]}return o.apply(this,arguments)}}}(),F(),G(),H(),function(){const e=document.querySelector("canvas").getContext("2d");!function t(){requestAnimationFrame(t),k(),function(){const t=[24,25,26,27,28];for(let n=0;n<t.length;++n){const o=t[n],a=h()[o];if(!0===A()){for(let t=0;t<a.length;t++){const n=a[t];e.save(),e.lineWidth=8,e.font="26px Baloo Paaji",e.strokeStyle="#000",e.fillStyle=(255&n.info)>0?"lime":"white",e.strokeText(""+(255&n.info),n.x-20+S()[0],n.y+S()[1]),e.fillText(""+(255&n.info),n.x-20+S()[0],n.y+S()[1]),e.restore()}for(let t=0;t<a.length;++t){const n=a[t];e.save(),e.lineWidth=8,e.font="26px Baloo Paaji",e.strokeStyle="#000",e.fillStyle=n.info>>8>0?"yellow":"white",e.strokeText(""+((65280&n.info)>>8),n.x-20+S()[0],n.y+20+S()[1]),e.fillText(""+((65280&n.info)>>8),n.x-20+S()[0],n.y+20+S()[1]),e.restore()}}}}()}()}(),function(){let t=Object.keys(l)[115];l[t]=t=>{a=t,f([e.recycle,t])}}(),X(),function(){let t=Object.keys(l)[119],n=Object.keys(l)[103],o=l[t],a=l[n];l[t]=function(){return c.AutoCrown.attack=!1,o.apply(this,arguments)},l[n]=function(){return c.AutoCrown.enabled&&(f([e.equip,79]),f([e.equip,c.AutoCrown.last])),a.apply(this,arguments)}}(),N(),L(),function(){let e=Object.keys(l)[137],t=Object.keys(l)[136],n=Object.keys(r)[85],o=l[e];l[e]=function(){return c.AutoRespawn.enabled&&(l[t](),r.waiting=!1,r[n]()),o.apply(this,arguments)}}(),B(),function(){let e=Object.values(i)[6],t=Object.values(i)[7];unsafeWindow.wrld={nw:e,nh:t}}(),q()}unsafeWindow.Utils=Z,document.addEventListener("keydown",(e=>{switch(!1===b()&&e.code){case c.AutoSpike.key:c.AutoSpike.enabled=!0;break;case c.AutoPutRed.key:!1===c.AutoPutRed.enabled&&(H(),Q=setInterval(q,100)),c.AutoPutRed.enabled=!0;break;case c.AMB.key:c.AMB.enabled=!c.AMB.enabled;break;case c.AutoSteal.key:!1===c.AutoSteal.enabled&&(U(),$=setInterval(U,100)),c.AutoSteal.enabled=!0;break;case c.AutoTotem.key:c.AutoTotem.enabled=!0;break;case c.dropsword.key:c.dropsword.enabled=!0}})),document.addEventListener("keyup",(e=>{switch(!1===b()&&e.code){case c.AutoSpike.key:c.AutoSpike.enabled=!1;break;case c.AutoPutRed.key:clearInterval(Q),c.AutoPutRed.enabled=!1;break;case c.AutoSteal.key:clearInterval($),c.AutoSteal.enabled=!1;break;case c.AutoTotem.key:c.AutoTotem.enabled=!1;break;case c.dropsword.key:c.dropsword.enabled=!1}}));let te=0;setInterval((function(){try{0===te&&void 0!==s&&void 0!==i&&void 0!==l&&(O=setInterval(D,100),setInterval(V,50),x=setInterval(P,100),v=setInterval(M,100),I=setInterval(j,100),Z.LoadHack(),ee(),unsafeWindow.mp=k(),te++)}catch(e){}}),200);
