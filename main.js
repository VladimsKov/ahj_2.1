(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{let e=function(){const e=document.createElement("div");document.body.prepend(e),e.classList.add("field");for(let t=1;t<=16;t+=1){const t=document.createElement("div");t.classList.add("field-item"),e.append(t)}const t=Math.floor(16*Math.random());return e.children[t].classList.add("field-item_active"),t}();const t=setInterval((()=>{e=function(e){const t=Math.floor(15*Math.random()),i=document.querySelector(".field");return t!==e?(i.children[e].classList.toggle("field-item_active"),i.children[t].classList.toggle("field-item_active"),t):(i.children[e].classList.toggle("field-item_active"),i.children[t+1].classList.toggle("field-item_active"),t+1)}(e)}),500);setTimeout((()=>clearInterval(t)),5e3)}))})();