var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var l=t("2ix2C"),r=t("eyjy7");document.getElementById("logInForm").addEventListener("submit",(async function(e){e.preventDefault();const o=e.target.email.value,n=e.target.password.value;(0,r.signInWithEmailAndPassword)(l.auth,o,n).then((e=>{const o=e.user;console.log(o.auth.currentUser.email)})).catch((e=>{const o=e.code,n=e.message;console.log(o),console.log(n)}))})),console.log(l.auth);for(const e in l.auth)console.log(e);
//# sourceMappingURL=login.c9e2c492.js.map