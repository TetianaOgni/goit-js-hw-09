const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.bodyEl.style.backgroundColor=e}),1e3),n(!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),n(!1)}));let e=null;function n(e){t.startBtn.disabled=e,t.stopBtn.disabled=!e}
//# sourceMappingURL=01-color-switcher.6765032c.js.map
