(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(t,e,n){"use strict";n.r(e);var a=n(9),r=(n(0),n(212)),i=n(210);e.default=function(){return Object(a.b)(r.a,null,Object(a.b)(i.a,{title:"404: Not found"}),Object(a.b)("h1",null,"NOT FOUND"),Object(a.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},205:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(9),r=n(0),i=n.n(r),o=n(74),c=n.n(o);n.d(e,"a",function(){return c.a});n(206),n(11).default.enqueue;var l=i.a.createContext({});function s(t){var e=t.staticQueryData,n=t.data,r=t.query,o=t.render,c=n?n.data:e[r]&&e[r].data;return Object(a.b)(i.a.Fragment,null,c&&o(c),!c&&Object(a.b)("div",null,"Loading (StaticQuery)"))}var u=function(t){var e=t.data,n=t.query,r=t.render,i=t.children;return Object(a.b)(l.Consumer,null,function(t){return Object(a.b)(s,{data:e,query:n,render:r||i,staticQueryData:t})})}},206:function(t,e,n){var a;t.exports=(a=n(209))&&a.default||a},208:function(t){t.exports={data:{site:{siteMetadata:{title:"Shimi Razilov"}}}}},209:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(100);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},210:function(t,e,n){"use strict";var a=n(9),r=n(211),i=(n(0),n(213)),o=n.n(i);function c(t){var e=t.description,n=t.lang,i=t.meta,c=t.keywords,l=t.title,s=r.data.site,u=e||s.siteMetadata.description;return Object(a.b)(o.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},e.a=c},211:function(t){t.exports={data:{site:{siteMetadata:{title:"Shimi Razilov",description:"A personal website blog and portfolio",author:"@shim2k"}}}}},212:function(t,e,n){"use strict";var a=n(207),r=n(9),i=n(208),o=n(0),c=n.n(o),l=n(205),s=n(214),u=Object(a.a)("div",{target:"e2i1wbd0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),b=Object(a.a)(l.a,{target:"e2i1wbd1"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),d=Object(a.a)(b,{target:"e2i1wbd2"})({name:"qbubgm",styles:"margin-left:0;"}),m=Object(a.a)("header",{target:"e2i1wbd3"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"}),f=function(t){var e=t.siteTitle;return Object(r.b)(m,null,Object(r.b)(u,null,Object(r.b)("p",null,Object(r.b)(d,{to:"/"},e),Object(r.b)(b,{to:"/blog"},"Blog"),Object(r.b)(b,{to:"/projects"},"Projects"))))};f.defaultProps={siteTitle:""};var g=f,p=(n(199),Object(a.a)("div",{target:"e1ehxxwc0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),j=Object(a.a)("a",{target:"e1ehxxwc1"})({name:"1kww263",styles:"margin-right:10px;margin-left:10px;"}),O=Object(a.a)("div",{target:"e1ehxxwc2"})({name:"kn10ez",styles:"display:flex;color:gray;justify-content:center;border:0;"}),w=Object(a.a)("footer",{target:"e1ehxxwc3"})({name:"auvvzw",styles:"display:flex;flex-direction:column;justify-content:center;margin-bottom:15px;"}),h=Object(a.a)("div",{target:"e1ehxxwc4"})({name:"vwgzg9",styles:"display:flex;flex-direction:row;justify-content:center;font-size:30px;"});e.a=function(t){var e=t.children,n=Object(o.useState)(!1),a=n[0],u=n[1],b=Object(o.useState)(!1),d=b[0],m=b[1],f=Object(o.useRef)(null);function y(){var t=document.createRange();t.selectNode(f.current),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),m(!0)}return Object(r.b)(l.b,{query:"755544856",render:function(t){return Object(r.b)(c.a.Fragment,null,Object(r.b)(g,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(p,null,Object(r.b)("main",null,e)),Object(r.b)(w,null,Object(r.b)(h,null,Object(r.b)(j,{onClick:function(){return u(function(t){return t||m(!1),!t})}},Object(r.b)(s.a,null)),Object(r.b)(j,{href:"https://github.com/shim2k"},Object(r.b)(s.b,null)),Object(r.b)(j,{href:"https://twitter.com/shim2k"},Object(r.b)(s.c,null))),a?Object(r.b)(O,{onClick:y,ref:f},"shim2k@gmail.com"," ",d?" Copied!":null):null))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-404-js-e2f54b950a43d7ff9a2c.js.map