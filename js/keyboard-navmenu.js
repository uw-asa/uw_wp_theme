"use strict";function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(i)throw s}}}}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}!function(o){var e=document.querySelectorAll(".top-level-nav.button");if(e){var t,r=_createForOfIteratorHelper(e);try{var a=function(){var r=t.value,e=r.querySelector("a");e.addEventListener("focusin",function(e){r.classList.add("button-fw")}),e.addEventListener("mouseenter",function(e){r.classList.add("button-fw")}),e.addEventListener("focusout",function(e){r.classList.remove("button-fw")}),e.addEventListener("mouseleave",function(e){r.classList.remove("button-fw")})};for(r.s();!(t=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}}if(document.querySelector("ul.navbar-nav")){var n,s=_createForOfIteratorHelper(document.querySelector("ul.navbar-nav").children);try{for(s.s();!(n=s.n()).done;){var i=n.value,l=i.innerText.toLowerCase().replace(/[^A-Za-z0-9]/g,"");i.querySelector("ul")&&(i.querySelector("a").setAttribute("aria-controls","nav-"+l),i.querySelector("ul").id="nav-"+l)}}catch(e){s.e(e)}finally{s.f()}o(".menu-item").on("keydown",function(e){var r,t=o(this).closest(".top-level-nav"),a=o(e.currentTarget),n=a.closest(".dropdown"),s=a.closest(".dropdown-menu");switch(e.code){case"ArrowDown":case"ArrowRight":r=t.nextAll("li"),e.preventDefault(),e.stopPropagation(),a.hasClass("top-level-nav")&&a.hasClass("show")?n.find("li").first().find("a").first().trigger("focus"):a.hasClass("top-level-nav")?r.first().find("a").first().trigger("focus"):!a.hasClass("top-level-nav")&&a.parents().hasClass("megamenu-nav")?a.parents().hasClass("depth-1")?(a.parent().children("li").last().parent().parent().next("li").find("a").first().trigger("focus"),a.next("li").find("a").trigger("focus")):a.parents().hasClass("depth-0")&&!a.children().hasClass("depth-1")?a.next("li").find("a").trigger("focus"):a.parents().hasClass("depth-0")&&!a.parents().hasClass("depth-1")&&a.find("ul li").first().find("a").trigger("focus"):a.next("li").find("a").trigger("focus");break;case"ArrowUp":case"ArrowLeft":r=t.prevAll("li"),e.preventDefault(),e.stopPropagation(),a.hasClass("top-level-nav")?(r.first().find("a").first().trigger("focus"),o(".dropdown-menu").removeClass("show"),o(".dropdown").removeClass("show")):!a.hasClass("top-level-nav")&&a.parents().hasClass("megamenu-nav")?a.parents().hasClass("depth-1")?(a.parent().children("li").first().parent().parent().find("a").first().trigger("focus"),a.prev("li").find("a").trigger("focus")):a.parents().hasClass("depth-0")&&!a.children().hasClass("depth-1")?a.prev("li").find("a").trigger("focus"):a.parents().hasClass("depth-0")&&!a.parents().hasClass("depth-1")&&a.prev("li").find("a").last().trigger("focus"):a.prev("li").find("a").trigger("focus");break;case"Space":e.preventDefault(),e.stopPropagation(),a.hasClass("top-level-nav")&&a.hasClass("dropdown")?(a.toggleClass("show"),a.find("ul").toggleClass("show"),a.find("ul").hasClass("show")?a.find(".dropdown-toggle").attr("aria-expanded","true"):a.find(".dropdown-toggle").attr("aria-expanded","false")):(a.hasClass("top-level-nav")&&a.hasClass("dropdown"),o("a").removeAttr("aria-current"),a.find("a").first().trigger("focus").attr("aria-current","page"));break;case"Home":e.preventDefault(),e.stopPropagation(),a.hasClass("top-level-nav")?t.parent().children("li").first().find("a").trigger("focus"):a.parents().hasClass("classic-menu-nav")?s.children("li").first().find("a").trigger("focus"):a.parents().hasClass("megamenu-nav")&&s.find(".row").first().find("li").first().find("a").first().trigger("focus");break;case"End":e.preventDefault(),e.stopPropagation(),a.hasClass("top-level-nav")?t.parent().children("li").last().find("a").trigger("focus"):a.parents().hasClass("classic-menu-nav")?s.children("li").last().find("a").trigger("focus"):a.parents().hasClass("megamenu-nav")&&s.find(".row").last().find("li").last().find("a").last().trigger("focus")}})}}(jQuery);