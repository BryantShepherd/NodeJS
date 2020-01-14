const config = require("../config");
var json = JSON.stringify(config);
console.log(json);
console.log(typeof json);

var backToJs = JSON.parse(json);
console.log(backToJs);
console.log(backToJs.bar);
