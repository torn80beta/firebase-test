var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("2ix2C"),l=t("eyjy7");document.getElementById("logInForm").addEventListener("submit",(async function(e){e.preventDefault();const n=e.target.email.value,o=e.target.password.value;(0,l.signInWithEmailAndPassword)(r.auth,n,o).then((e=>{const n=e.user;console.log(n)})).catch((e=>{const n=e.code,o=e.message;console.log(n),console.log(o)}))}));
//# sourceMappingURL=login.bb39afd5.js.map
