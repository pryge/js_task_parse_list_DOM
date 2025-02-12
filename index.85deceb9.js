document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.querySelector("ul"),r=Array.from(e.querySelectorAll("li"));function t(e){return Number(e.replace(/[$,]/g,""))}r.sort(function(e,r){return t(r.dataset.salary)-t(e.dataset.salary)}),r.forEach(function(r){return e.appendChild(r)})}()});
//# sourceMappingURL=index.85deceb9.js.map
