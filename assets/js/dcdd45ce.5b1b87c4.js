"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7882],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,v=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},u=void 0,l={unversionedId:"ox_inventory/Functions/External/Server/Inventory/GetItemSlots",id:"ox_inventory/Functions/External/Server/Inventory/GetItemSlots",title:"GetItemSlots",description:"Returns the number of slots the specified item is in, the item's total count and the remaining empty slots.",source:"@site/docs/ox_inventory/Functions/External/Server/Inventory/GetItemSlots.md",sourceDirName:"ox_inventory/Functions/External/Server/Inventory",slug:"/ox_inventory/Functions/External/Server/Inventory/GetItemSlots",permalink:"/docs/ox_inventory/Functions/External/Server/Inventory/GetItemSlots",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/External/Server/Inventory/GetItemSlots.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GetItem",permalink:"/docs/ox_inventory/Functions/External/Server/Inventory/GetItem"},next:{title:"GetSlot",permalink:"/docs/ox_inventory/Functions/External/Server/Inventory/GetSlot"}},s={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the number of slots the specified item is in, the item's total count and the remaining empty slots."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- item: table or string\n-- metadata: table (optional)\nexports.ox_inventory:GetItemSlots(inv, item, metadata)\n")))}f.isMDXComponent=!0}}]);