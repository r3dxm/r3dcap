import{s as R,n as p}from"../chunks/scheduler.CtbWrGNo.js";import{S as _,i as y,e as c,s as C,c as d,a as x,g,b as L,d as v,f as m,h as k,j as u,l as z}from"../chunks/index.B_V50JHN.js";function D(s){let a,t,e,o="SCRN RCRDR",h,n,b='<svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg>Start Recording',f,w;return{c(){a=c("div"),t=c("div"),e=c("h1"),e.textContent=o,h=C(),n=c("button"),n.innerHTML=b,this.h()},l(r){a=d(r,"DIV",{class:!0});var i=x(a);t=d(i,"DIV",{class:!0});var l=x(t);e=d(l,"H1",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-x3op9a"&&(e.textContent=o),h=L(l),n=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-14rmg0o"&&(n.innerHTML=b),l.forEach(v),i.forEach(v),this.h()},h(){m(e,"class","text-5xl font-bold"),m(n,"class","btn btn-primary rounded-full"),m(t,"class","h-50 hero-content flex flex-col"),m(a,"class","hero min-h-screen")},m(r,i){k(r,a,i),u(a,t),u(t,e),u(t,h),u(t,n),f||(w=z(n,"click",U),f=!0)},p,i:p,o:p,d(r){r&&v(a),f=!1,w()}}}async function M(){return await navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0})}function S(s,a){let t=[];const e=new MediaRecorder(s);return e.ondataavailable=function(o){o.data.size>0&&t.push(o.data)},e.onstop=function(){T(t),t=[]},e.start(200),e}function T(s){const a=new Blob(s,{type:"video/webm"});let t=window.prompt("Enter file name"),e=document.createElement("a");e.href=URL.createObjectURL(a),e.download=`${t}.webm`,document.body.appendChild(e),e.click(),URL.revokeObjectURL(a),document.body.removeChild(e)}async function U(){let s=await M();S(s)}class B extends _{constructor(a){super(),y(this,a,null,D,R,{})}}export{B as component};
