"use strict";var UWModal=function(){var e=document.querySelectorAll("button.uw-modal");if(1<e.length)for(var t=0;t<e.length;t++)e[t].classList.remove("uw-modal"),e[t].classList.add("uw-modal-"+t),e[t].setAttribute("data-target","#uw-modal-"+t),e[t].parentElement.nextElementSibling.id="uw-modal-"+t,e[t].parentElement.nextElementSibling.setAttribute("aria-labelledby","uw-modal-"+t+"-title"),e[t].parentElement.nextElementSibling.getElementsByClassName("modal-title")[0].id="uw-modal-"+t+"-title";var l=document.querySelectorAll(".modal");if(1<l.length)for(var i=Array.prototype.slice.call(l),n=i.map(function(e){return e.id}),a=i.filter(function(t){return 1<n.filter(function(e){return e===t.id}).length})[0].id,r=0;r<l.length;r++)a===l[r].id&&(l[r].id=a+"-"+r,l[r].previousElementSibling.querySelector("button").classList.remove(a),l[r].previousElementSibling.querySelector("button").classList.add(a+"-"+r),l[r].previousElementSibling.querySelector("button").setAttribute("data-target","#"+a+"-"+r),l[r].setAttribute("aria-labelledby",a+"-"+r+"-title"),l[r].getElementsByClassName("modal-title")[0].id=a+"-"+r+"-title")};new UWModal;