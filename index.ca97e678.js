var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o.register("45PXY",(function(e,n){var t,i,r,d;t=e.exports,i="monitorAuthState",r=function(){return f},Object.defineProperty(t,i,{get:r,set:d,enumerable:!0,configurable:!0});var l=o("2ix2C"),a=o("eyjy7");const u=document.querySelector(".loginState"),s=document.querySelector(".login-signup"),c=document.getElementById("logout");async function f(){(0,a.onAuthStateChanged)(l.auth,(e=>{e?(s.classList.add("hidden"),c.classList.remove("hidden"),function(e){u.innerHTML=`\n  <p><b>email:</b> ${e.email}</p>`}(e)):(s.classList.remove("hidden"),c.classList.add("hidden"),u.innerHTML="<p><b>You are not logged in.</b></p>")}))}}));
//# sourceMappingURL=index.ca97e678.js.map