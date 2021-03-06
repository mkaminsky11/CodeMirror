// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.themeInfo = [
    {theme: "default", dark: false},
    {theme: "3024-day", dark:false},
    {theme: "3024-night", dark:true},
    {theme: "ambiance", dark:true},
    {theme: "base16-dark", dark:true},
    {theme: "base16-light", dark:false},
    {theme: "blackboard", dark:true},
    {theme: "cobalt", dark:true},
    {theme: "colorforth", dark:true},
    {theme: "dracula", dark:true},
    {theme: "eclipse", dark:false},
    {theme: "elegant", dark:false},
    {theme: "erlang-dark", dark:true},
    {theme: "lesser-dark", dark:true},
    {theme: "liquibyte", dark:true},
    {theme: "material", dark:true},
    {theme: "mbo", dark:true},
    {theme: "mdn-like", dark:false},
    {theme: "midnight", dark:true},
    {theme: "monokai", dark:true},
    {theme: "neat", dark:false},
    {theme: "neo", dark:false},
    {theme: "night", dark:true},
    {theme: "paraiso-dark", dark:true},
    {theme: "paraiso-light", dark:false},
    {theme: "pastel-on-dark", dark:false},
    {theme: "rubyblue", dark:true},
    {theme: "seti", dark:true},
    {theme: "solarized-light", dark:false, file:"solarized.css"},
    {theme: "solarized-dark", dark:true, file:"solarized.css"},  //if file !== theme + ".css"
    {theme: "the-matrix", dark:true},
    {theme: "tomorrow-night-bright", dark:true},
    {theme: "tomorrow-night-eighties", dark:true},
    {theme: "ttcn", dark:false},
    {theme: "twilight", dark:true},
    {theme: "vibrant-ink", dark:true},
    {theme: "xq-dark", dark:true},
    {theme: "xq-light", dark:false},
    {theme: "yeti", dark:false},
    {theme: "zenburn", dark:true}
  ];
  // Set names for all themes
  for (var i = 0; i < CodeMirror.themeInfo.length; i++) {
    var theme = CodeMirror.themeInfo[i].theme;
    var name = theme.split("-");
    for (var j = 0; j < name.length; j++){
        name[j] = name[j].charAt(0).toUpperCase() + name[j].substr(1);
    }
    name = name.join(" ");
    CodeMirror.themeInfo[i].name = name;
    if(!CodeMirror.themeInfo[i].file){
        CodeMirror.themeInfo[i].file = theme + ".css";
    }
  }

  CodeMirror.findThemeByName = function(name) {
    for (var i = 0; i < CodeMirror.themeInfo.length; i++) {
      var info = CodeMirror.themeInfo[i];
      if (info.name == name) return info;
    }
  };

  CodeMirror.findThemeByTheme = function(theme) {
    for (var i = 0; i < CodeMirror.themeInfo.length; i++) {
      var info = CodeMirror.themeInfo[i];
      if (info.theme == theme) return info;
    }
  };
});