!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("bpxeT"),a=o("2TvXO"),l=o("iNWLi"),u=o("gQOBw");function s(){return(s=e(i)(e(a).mark((function n(t){var r,o;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=t.target.email.value,o=t.target.password.value,(0,u.signInWithEmailAndPassword)(l.auth,r,o).then((function(e){var n=e.user;console.log(n)})).catch((function(e){var n=e.code,t=e.message;console.log(n),console.log(t)}));case 4:case"end":return e.stop()}}),n)})))).apply(this,arguments)}document.getElementById("logInForm").addEventListener("submit",(function(e){return s.apply(this,arguments)}))}();
//# sourceMappingURL=login.f91263dd.js.map
