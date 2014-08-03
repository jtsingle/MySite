this["JST"] = this["JST"] || {};

this["JST"]["templates/user"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user) {
var jade_indent = [];
buf.push("\n<h1>" + (jade.escape(null == (jade_interp = user) ? "" : jade_interp)) + "</h1>\n<p>Welcome to My Site: " + (jade.escape((jade_interp = user) == null ? '' : jade_interp)) + "</p>");}("user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
};