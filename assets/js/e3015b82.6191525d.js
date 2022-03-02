"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3974],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2788:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},c=void 0,u={unversionedId:"ox_inventory/Functions/External/Client/Interface/Keyboard",id:"ox_inventory/Functions/External/Client/Interface/Keyboard",title:"Keyboard",description:"Opens a keyboard input dialog.",source:"@site/docs/ox_inventory/Functions/External/Client/Interface/Keyboard.md",sourceDirName:"ox_inventory/Functions/External/Client/Interface",slug:"/ox_inventory/Functions/External/Client/Interface/Keyboard",permalink:"/docs/ox_inventory/Functions/External/Client/Interface/Keyboard",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/External/Client/Interface/Keyboard.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"useSlot",permalink:"/docs/ox_inventory/Functions/External/Client/useSlot"},next:{title:"Progress",permalink:"/docs/ox_inventory/Functions/External/Client/Interface/Progress"}},s={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Opens a keyboard input dialog."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rows")," param takes a table of strings where each string entry will represent\na single row."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- header: string\n-- rows: table\nexports.ox_inventory:Keyboard(header, rows)\n")),(0,a.kt)("p",null,"Returns a table of strings where the first index is going to be the first row of the dialog,\nthe second index the second row and so on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local input = exports.ox_inventory:Keyboard('Money transfer', {'Player name', 'Amount'})\n\nif input then\n    local playerName = input[1]\n    local amount = tonumber(input[2])\n\n    if not playerName or not amount then return end\nend\n")))}d.isMDXComponent=!0}}]);