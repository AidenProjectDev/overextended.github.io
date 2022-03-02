"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7309],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),m=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=m(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6630:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return u},toc:function(){return s},default:function(){return p}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},l="Command",m={unversionedId:"ox_lib/Server/addCommand",id:"ox_lib/Server/addCommand",title:"Command",description:"",source:"@site/docs/ox_lib/Server/addCommand.md",sourceDirName:"ox_lib/Server",slug:"/ox_lib/Server/addCommand",permalink:"/docs/ox_lib/Server/addCommand",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Server/addCommand.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Permissions",permalink:"/docs/ox_lib/Server/acl"},next:{title:"Callbacks",permalink:"/docs/ox_lib/Server/callback"}},u={},s=[],d={toc:s};function p(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- principal: string or false\n-- command: string\n-- callback: function\n-- parameters: table (optional)\n-- help: string (optional)\nlib.addCommand(principal, command, callback, parameters, help)\n\nlib.addCommand('group.admin', {'additem', 'giveitem'}, function(source, args)\n    args.item = Items(args.item)\n    if args.item and args.count > 0 then\n        Inventory.AddItem(args.target, args.item.name, args.count, args.metatype)\n    end\nend, {'target:number', 'item:string', 'count:number', 'metatype:?string'})\n")))}p.isMDXComponent=!0}}]);