import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=Date.now()){m.error({title:"Please choose a date in the future",position:"topRight"}),e.setAttribute("disabled","");return}i=t[0],e.removeAttribute("disabled")}};l("#datetime-picker",b);const e=document.querySelector("button[data-start]");e.setAttribute("disabled","");e.addEventListener("click",f);document.querySelector(".value");let i;function f(){e.setAttribute("disabled",""),document.querySelector("#datetime-picker").setAttribute("disabled","");let t=setInterval(()=>{const r=Date.now(),o=i-r;if(o<=0){clearInterval(t),document.querySelector("#datetime-picker").removeAttribute("disabled"),e.setAttribute("disabled","");return}let n=h(o);y(n)},1e3)}function h(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),s=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:c,seconds:s}}function a(t){return String(t).padStart(2,"0")}function y({days:t,hours:r,minutes:o,seconds:n}){document.querySelector("[data-days]").textContent=a(t),document.querySelector("[data-hours]").textContent=a(r),document.querySelector("[data-minutes]").textContent=a(o),document.querySelector("[data-seconds]").textContent=a(n)}
//# sourceMappingURL=commonHelpers.js.map
