const e=document.querySelector(".form");let t={},o=1;function n(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(i){i.preventDefault();new FormData(i.currentTarget).forEach(((e,o)=>{t[o]=Number(e)}));let r=t.delay,s=t.amount;for(let e=1;e<=s;e+=1)o=e,n(o,r).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),r+=t.step;e.reset()}));
//# sourceMappingURL=03-promises.8956732b.js.map