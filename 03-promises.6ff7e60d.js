!function(){var n=document.querySelector(".form"),o={};function e(n,o){var e=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){e?t({position:n,delay:o}):c({position:n,delay:o})}),o)}))}n.addEventListener("submit",(function(t){t.preventDefault(),new FormData(t.currentTarget).forEach((function(n,e){o[e]=Number(n)}));for(var c=o.delay,i=o.amount,a=1;a<=i;a+=1)e(a,c).then((function(n){var o=n.position,e=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(e,"ms"))})).catch((function(n){var o=n.position,e=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(e,"ms"))})),c+=o.step;n.reset()}))}();
//# sourceMappingURL=03-promises.6ff7e60d.js.map