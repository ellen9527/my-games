(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,8,9],{319:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={data:function(){return{scrollY:0,innerWidth:1,innerHeight:1}},mounted:function(){this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop}}}},321:function(t,e,n){"use strict";var r=n(2),o=n(225);r({target:"String",proto:!0,forced:n(226)("link")},{link:function(t){return o(this,"a","href",t)}})},323:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("25a0bcce",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("ada286be",content,!0,{sourceMap:!1})},325:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("74689a33",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";var r=n(2),o=n(225);r({target:"String",proto:!0,forced:n(226)("fixed")},{fixed:function(){return o(this,"tt","","")}})},327:function(t,e,n){"use strict";var r=n(2),o=n(225);r({target:"String",proto:!0,forced:n(226)("small")},{small:function(){return o(this,"small","","")}})},352:function(t,e,n){"use strict";n(323)},353:function(t,e,n){var r=n(87)((function(i){return i[1]}));r.push([t.i,".introduce{height:200vh;position:relative;width:100%}.introduce .wrap{height:100vh;left:0;position:sticky;top:0;width:100%}.introduce .wrap__item{background-color:#fff;color:#101010;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.introduce .wrap__item>div{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center}.introduce .wrap__item.--black{background-color:#000;color:#fff}",""]),r.locals={},t.exports=r},354:function(t,e,n){"use strict";n(324)},355:function(t,e,n){var r=n(87)((function(i){return i[1]}));r.push([t.i,".experience{background-color:#111;height:600vh;width:100%}.experience .wrap{height:100vh;left:0;opacity:0;position:fixed;top:0;transition:opacity .5s}.experience .wrap.visible{opacity:1}.experience .wrap h1{color:#ccc;text-align:center}.experience .wrap__item{margin-left:200px}.experience .wrap h3>div{background-color:#003d79;color:#fff;padding:4px 10px}.experience .wrap h3>div:first-child{background-color:#fff;border-bottom-left-radius:8px;border-top-left-radius:8px;color:#003d79}.experience .wrap h3>div:nth-child(2){border-bottom-right-radius:8px;border-top-right-radius:8px}.experience .wrap .sys__title{border-radius:8px}.experience .wrap .sys__group>div,.experience .wrap .sys__title{background-color:#003d79;color:#fff}.experience .wrap .sys__group>div:first-child{border-bottom-left-radius:8px;border-top-left-radius:8px}.experience .wrap .sys__group>div:nth-child(2){background-color:#fff;border-bottom-right-radius:8px;border-top-right-radius:8px;color:#003d79}.experience .wrap .tech div{background-color:#003d79;border-radius:8px;color:#fff;white-space:nowrap}.experience .wrap .tech div+div{margin-left:6px}.experience .wrap__end{width:200vh}.experience .wrap__end h1{position:fixed}",""]),r.locals={},t.exports=r},356:function(t,e,n){t.exports=n.p+"img/github.9eeb8c1.png"},357:function(t,e,n){t.exports=n.p+"img/github-black.808a33d.png"},358:function(t,e,n){"use strict";n(325)},359:function(t,e,n){var r=n(87)((function(i){return i[1]}));r.push([t.i,".end{background-color:#ccc;height:200vh;position:relative;width:100%}.end .wrap{height:100vh;left:0;position:sticky;top:0;width:100%}.end .wrap__item{background:#000;color:#fff;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.end .wrap__item>div{height:100vh;transform:translateY(25%)}.end .wrap__item.--white{background-color:#fff;color:#101010}.end .wrap__item img{cursor:pointer;height:60px;margin:10px;width:60px}.end .wrap__item--link{display:flex;flex-wrap:wrap;justify-content:space-evenly;transition:all .5s;width:100%}.end .wrap__item--link.--hidden{opacity:0}",""]),r.locals={},t.exports=r},363:function(t,e,n){"use strict";n.r(e);var r={name:"Introduce",data:function(){return{introductions:["歡迎來到我的自介頁面","我叫Ellen，目前是一名Web前端工程師","有10年的開發經驗"]}},mixins:[n(319).a],computed:{progress:function(){return"".concat(Math.max(0,(this.innerHeight-this.scrollY)/this.innerHeight*100),"%")}}},o=(n(352),n(73)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduce"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap__item --black"},[e("div",t._l(t.introductions,(function(n,r){return e("p",{key:r},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",{staticClass:"wrap__item",style:{height:t.progress}},[e("div",t._l(t.introductions,(function(n,r){return e("p",{key:r},[t._v(t._s(n))])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){"use strict";n.r(e);n(34);var r=n(319),o=[{year:"2009",title:"研究所 畢業",content:[{name:"論文系統開發",role:"全端",group:!1,technology:["Flash","ActionScript","PHP","MySQL"]}]},{year:"2010.09",title:"中大網學所",content:[{name:"字詞句學習系統-打字遊戲",role:"全端",group:!1,technology:["Flash","ActionScript3.0","PHP","MySQL"]},{name:"捨棄Flash系統重構",role:"全端",group:!1,technology:["HTML5+CSS3","jQuery","Canvas"]},{name:"主題寫作系統",role:"全端",group:!0,technology:["PHP","MySQL","jQuery"]},{name:"教材編輯與分享",role:"全端",group:!1,technology:["PHP","MySQL","jQuery"]},{name:"學生學習歷程",role:"全端",group:!0,technology:["PHP","MySQL","jQuery","Bootstrap3"]}]},{year:"2018.09",title:"迎廣科技",content:[{name:"公司電商網站",role:"後端",group:!0,technology:["PHP Lavaral","MySQL"]},{name:"公司形象官網",role:"前端",group:!0,technology:["jQuery","Bootstrap4"]}]},{year:"2020.02",title:"順鴻科技",content:[{name:"H5/PC包網",role:"前端",group:!0,technology:["Vue2","TypeScript"]},{name:"PC活動網站",role:"前端",group:!0,technology:["Vue2","TypeScript"]},{name:"H5體育網站",role:"前端",group:!0,technology:["Vue2+Nuxt","Vuetify"]}]}],l={name:"Experience",data:function(){return{experience:o,localWidth:0,localHeight:0}},mixins:[r.a],computed:{isShowExperience:function(){return this.scrollY>1.6*this.innerHeight},isHiddenEnd:function(){return this.scroll>6*this.innerHeight-this.innerWidth},scroll:function(){var t=this.scrollY-(2*this.innerHeight+100);return t<0?0:t},prograssStyle:function(){var t=-this.scroll/this.localHeight*100+"%";return"transform: translateX(".concat(t,")")},endStyle:function(){var t=6*this.innerHeight-1.6*this.innerWidth-100,e=6*this.innerHeight-this.innerWidth,n=Math.floor(this.innerWidth/2);return this.scroll>t&&this.scroll<e&&(n=Math.floor(this.innerWidth/2)+(this.scroll-t)),"transform: translateX(".concat(n,"px)")}},mounted:function(){this.localWidth=this.$refs.expBox.clientWidth,this.localHeight=6*this.innerHeight}},c=(n(354),n(73)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"experience"},[e("div",{ref:"expBox",staticClass:"wrap d-flex align-center justify-center",class:{visible:t.isShowExperience},style:t.prograssStyle},[e("h1",{style:{width:t.innerWidth+"px"}},[t._v("學經歷")]),t._v(" "),t._l(t.experience,(function(n,r){return e("div",{key:r,staticClass:"wrap__item"},[e("h3",{staticClass:"d-flex align-center"},[e("div",[t._v(t._s(n.year))]),t._v(" "),e("div",[t._v(t._s(n.title))])]),t._v(" "),e("div",{staticClass:"mt-2 d-flex"},t._l(n.content,(function(n,r){return e("div",{key:r,staticClass:"sys ml-10"},[e("div",{staticClass:"sys__title px-2 py-1"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"sys__group d-flex align-center mt-2 ml-3"},[e("div",{staticClass:"px-2 py-1"},[t._v(t._s(n.role))]),t._v(" "),e("div",{staticClass:"px-2 py-1"},[t._v(t._s(n.group?"團隊":"個人"))])]),t._v(" "),e("div",{staticClass:"tech d-flex mt-2 ml-6"},t._l(n.technology,(function(n,r){return e("div",{key:r,staticClass:"px-2 py-1"},[t._v(t._s(n))])})),0)])})),0)])})),t._v(" "),e("div",{staticClass:"wrap__end"},[e("h1",{style:t.endStyle},[t._v("Side Project")])])],2)])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var r=n(473),o=n(388),l=(n(34),n(321),{name:"End",data:function(){return{ends:["感謝您的耐心觀看","以下是我自己閒瑕之餘寫的Side Project","雖然並不複雜，但可以使用自己開發的小程式令我感到更加愉悅"],links:[{name:"Bulls & Cows 猜數字",link:"/gameBNC",icon:"mdi-android"},{name:"簡易 Todo List",link:"/list",icon:"mdi-format-list-bulleted-square"},{name:"Jiugongge九宮格",link:"/jiugongge",icon:"mdi-heart"}]}},mixins:[n(319).a],computed:{scroll:function(){var t=this.scrollY-8*this.innerHeight;return t>0?t:0},progress:function(){return"".concat(Math.max(0,(this.innerHeight-this.scroll)/this.innerHeight*100),"%")},isHiddenLink:function(){return this.scroll<this.innerHeight-100}},methods:{handleClick:function(){window.open("https://github.com/ellen9527/games","_blank")}}}),c=(n(358),n(73)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"end"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap__item --white"},[e("div",{staticClass:"d-flex flex-column align-center px-5"},[e("img",{attrs:{src:n(356)},on:{click:t.handleClick}}),t._v(" "),t._l(t.ends,(function(n,r){return e("p",{key:r},[t._v(t._s(n))])})),t._v(" "),e("div",{class:["wrap__item--link","mt-2",{"--hidden":t.isHiddenLink}]},t._l(t.links,(function(n,l){return e(r.a,{key:l,staticClass:"ma-2",attrs:{to:n.link}},[e(o.a,{staticClass:"mr-1"},[t._v(t._s(n.icon))]),t._v("\n            "+t._s(n.name)+"\n          ")],1)})),1)],2)]),t._v(" "),e("div",{staticClass:"wrap__item",style:{height:t.progress}},[e("div",{staticClass:"d-flex flex-column align-center px-5"},[e("img",{attrs:{src:n(357)},on:{click:t.handleClick}}),t._v(" "),t._l(t.ends,(function(n,r){return e("p",{key:r},[t._v(t._s(n))])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var r=n(363),o=n(364),l=n(365),c={name:"Home",components:{Introduce:r.default,Experience:o.default,End:l.default}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("Introduce"),t._v(" "),e("Experience"),t._v(" "),e("End")],1)}),[],!1,null,null,null);e.default=component.exports}}]);