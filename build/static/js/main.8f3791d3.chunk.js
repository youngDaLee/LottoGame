(this["webpackJsonpgoldenpig-react"]=this["webpackJsonpgoldenpig-react"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(18),o=n.n(c),i=(n(26),n(27),n(28),n(29),n(4)),s=n(5),l=n(7),u=n(6),j=n(19),A=n(2),b=n(21),f=n(0);function v(){for(var t=[],e=0;e<6;e++){var n=String(Math.floor(44*Math.random()+1));t[e]=n}var a=new Set(t);return t.length!==a.size&&(t=v()),t}var h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={randNum:""},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"auto-inputwrap",children:[Object(f.jsx)("p",{className:"auto-num-title",children:"\uc790\ub3d9 \ucd94\ucca8"}),Object(f.jsxs)("p",{className:"auto-num-info",children:["'\uc790\ub3d9\ucd94\ucca8 \ubc88\ud638 \uc0dd\uc131' \ubc84\ud2bc\uc744 \ub204\ub974\uba74",Object(f.jsx)("br",{})," 6\uc790\ub9ac \ubc88\ud638\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4.",Object(f.jsx)("br",{}),"\uc6d0\ud558\ub294 \ub9cc\ud07c \uc790\ub3d9 \uc0dd\uc131 \uac00\ub2a5 \ud569\ub2c8\ub2e4. "]}),Object(f.jsx)("button",{className:"auto-num-make",onClick:function(t){this.setState({randNum:String(v())})}.bind(this),children:"\uc790\ub3d9 \ubc88\ud638 \uc0dd\uc131"}),Object(f.jsx)("p",{className:"auto-text-field",children:this.state.randNum}),Object(f.jsx)("button",{className:"auto-result-btn",onClick:function(t){var e=[],n=this.state.randNum.split(",");console.log(n);var a,r=Object(b.a)(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;e.push(parseInt(c))}}catch(s){r.e(s)}finally{r.f()}console.log(typeof e);var o=document.createElement("form");o.name="randomNumbers",o.method="post",o.action="/lotto",o.target="_blank";var i=document.createElement("input");i.setAttribute("type","hidden"),i.setAttribute("name","autoNum"),i.setAttribute("value",e),o.appendChild(i),document.body.appendChild(o),o.submit(),window.location.href="showResult.html"}.bind(this),children:"\uc790\ub3d9\ucd94\ucca8"})]})}}]),n}(a.Component),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"title-and-intro",children:[Object(f.jsx)("p",{className:"title",children:"\ud83d\udc51 \ud669\uae08\ub3fc\uc9c0 \uafc8 \ud83d\udc51"}),this.props.content]})}}]),n}(a.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=[];this.props.content.col.forEach((function(e){var n=Object(f.jsx)("th",{children:e},e);t.push(n)}));for(var e=[],n=0;n<this.props.content.totalRanking.length&&n<5;n++){for(var a=[],r=0;r<this.props.content.col.length;r++){var c=Object(f.jsx)("td",{children:this.props.content.totalRanking[n][this.props.content.col[r]]},this.props.content.col[r]);a.push(c)}var o=Object(f.jsx)("tr",{children:a},n);e.push(o)}return console.log("Rank rendered"),Object(f.jsxs)("div",{className:"rank_wrap",children:[Object(f.jsx)("p",{className:"rankmain",children:"\ub85c\ub610 \ub2f9\ucca8 \ub7ad\ud0b9 \ubcf4\uae30"}),Object(f.jsx)("div",{className:"rank_table_here",children:Object(f.jsxs)("table",{id:"rankTable",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:t})}),Object(f.jsx)("tbody",{children:e})]})}),Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"./showTotalRank.html",children:"\ub7ad\ud0b9 \ub354 \ubcf4\uae30"})]})}}]),n}(a.Component),F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"manual-inputwrap",children:[Object(f.jsx)("p",{className:"manual-num-title",children:"\uc218\ub3d9 \ucd94\ucca8"}),Object(f.jsxs)("p",{className:"manual-num-info",children:["1~ 45 \uc911 \uc6d0\ud558\ub294 \uc22b\uc790 6\uc790\ub9ac\ub97c \uc785\ub825\ud558\uc138\uc694.",Object(f.jsx)("br",{}),"(\uc22b\uc790\ub97c \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84 \ud574 \uc8fc\uc138\uc694) "]}),Object(f.jsx)("input",{className:"manual-num",type:"text",placeholder:"6\uc790\ub9ac\uc22b\uc790 \uc785\ub825",name:"manualNum"}),Object(f.jsx)("button",{className:"manual-result-btn",onClick:function(t){var e=document.querySelector(".manual-num"),n=document.querySelector(".warning-sixnum");console.log("manualNum writed");var a=[];a=e.value.split(" ");for(var r=0;r<a.length;r++)a[r]=parseInt(a[r]);var c=a.length===new Set(a).size;6===a.length&&a.every((function(t){return!Number.isNaN(t)}))&&c&&a.every((function(t){return t>=1&&t<=45}))?(console.log(a),function(t){var e=document.createElement("form");e.name="manualNumList",e.method="post",e.action="/lotto";var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","manualNum"),n.setAttribute("value",t),e.appendChild(n),document.body.appendChild(e),e.submit(),window.location.href="showResult.html"}(a)):n.innerText="1 ~ 45 \uc911 \uc11c\ub85c \ub2e4\ub978 6\uac1c\uc758 \uc22b\uc790\ub97c \uc785\ub825 \ud574 \uc8fc\uc138\uc694 ! "}.bind(),children:"\uc218\ub3d9\ucd94\ucca8"}),Object(f.jsx)("p",{className:"warning-sixnum"})]})}}]),n}(a.Component),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"title-and-intro",children:[Object(f.jsx)("p",{className:"title",children:"\ud83d\udc51 \ud669\uae08\ub3fc\uc9c0 \uafc8 \ud83d\udc51"}),Object(f.jsx)("p",{className:"intro",children:"\ub2f9\uc2e0\uc758 \ucd1d \ub2f9\ucca8 \uae08\uc561\uc740 !"}),Object(f.jsx)("p",{className:"sum-of-money"}),Object(f.jsx)("p",{children:"\uc785\ub2c8\ub2e4."})]})}}]),n}(a.Component),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=[];this.props.content.col.forEach((function(e){var n=Object(f.jsx)("th",{children:e},e);t.push(n)}));for(var e=[],n=0;n<this.props.content.totalRanking.length;n++){for(var a=[],r=0;r<this.props.content.col.length;r++){var c=Object(f.jsx)("td",{children:this.props.content.totalRanking[n][this.props.content.col[r]]},this.props.content.col[r]);a.push(c)}var o=Object(f.jsx)("tr",{children:a},n);e.push(o)}return Object(f.jsx)("div",{className:"rank_table_here",children:Object(f.jsxs)("table",{id:"rankTable",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:t})}),Object(f.jsx)("tbody",{children:e})]})})}}]),n}(a.Component),R=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"img_wrap",children:Object(f.jsx)("img",{className:"imghere",src:"data:image/jpeg;base64,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",alt:""})})}}]),n}(a.Component),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"add-name-wrap",children:[Object(f.jsxs)("p",{children:["\uc774\ub984 \uc785\ub825\ud558\uace0 \ub0b4 \ub7ad\ud0b9 \ub4f1\ub85d\ud558\uae30 ",Object(f.jsx)("br",{}),"( \u2022\u0300 .\u032b \u2022\u0301 )\u2727"]}),Object(f.jsxs)("form",{name:"user_name",action:"/rank",method:"GET",children:[Object(f.jsx)("input",{type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."}),Object(f.jsx)("input",{type:"submit",value:"\ub7ad\ud0b9\ub4f1\ub85d"})]})]})}}]),n}(a.Component),K=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={ranks:{totalRanking:[{Rank:"1",Name:"\ubc15\uc815\uc5f0",Money:"100,000,000"},{Rank:"2",Name:"\ubc15\uc815\uc5f0",Money:"100,000,000"},{Rank:"3",Name:"\ubc15\uc815\uc5f0",Money:"100,000,000"},{Rank:"4",Name:"\ubc15\uc815\uc5f0",Money:"100,000,000"},{Rank:"5",Name:"\ubc15\uc815\uc5f0",Money:"100,000,000"},{Rank:"6",Name:"\ud558\ub204\ub9ac",Money:"5,000"}],col:[]},Intro:{main:Object(f.jsxs)("p",{className:"intro",children:["\ud658\uc601\ud569\ub2c8\ub2e4 \\(\uffe3\ufe36\uffe3*\\)) ",Object(f.jsx)("br",{})," \ud669\uae08\ub3fc\uc9c0\uafc8\uc5d0\uc11c \ub85c\ub610 \ucd94\ucca8\uc744 \ud574\uc11c ",Object(f.jsx)("br",{}),"\ub2f9\uc2e0\uc758 \ud589\uc6b4\uc9c0\uc218\ub97c \uc54c\uc544\ubcf4\uc138\uc694."]}),totalRank:Object(f.jsx)("p",{className:"intro",children:"\uc804\uccb4 \ub7ad\ud0b9\uc785\ub2c8\ub2e4."})}},a}return Object(s.a)(n,[{key:"render",value:function(){for(var t=this,e=0;e<this.state.ranks.totalRanking.length;e++)for(var n in this.state.ranks.totalRanking[e])-1===this.state.ranks.col.indexOf(n)&&this.setState({col:this.state.ranks.col.push(n)});return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(A.c,{children:[Object(f.jsx)(A.a,{path:"/index.html",exact:!0,component:function(){return Object(f.jsxs)("div",{className:"index",children:[Object(f.jsxs)("div",{className:"head-wrap",children:[Object(f.jsx)(R,{}),Object(f.jsx)(d,{content:t.state.Intro.main})]}),Object(f.jsxs)("div",{className:"body-wrap",children:[Object(f.jsx)(F,{}),Object(f.jsx)(h,{}),Object(f.jsx)(p,{content:t.state.ranks})]})]})}}),Object(f.jsx)(A.a,{path:"/showResult.html",exact:!0,component:function(){return Object(f.jsxs)("div",{className:"result",children:[Object(f.jsxs)("div",{className:"head-wrap",children:[Object(f.jsx)(R,{}),Object(f.jsx)(m,{})]}),Object(f.jsx)(x,{})]})}}),Object(f.jsx)(A.a,{path:"/showTotalRank.html",exact:!0,component:function(){return Object(f.jsxs)("div",{className:"total-rank",children:[Object(f.jsxs)("div",{className:"head-wrap",children:[Object(f.jsx)(R,{}),Object(f.jsx)(d,{content:t.state.Intro.totalRank})]}),Object(f.jsxs)("div",{className:"body-wrap",children:[Object(f.jsx)(O,{content:t.state.ranks}),Object(f.jsx)("a",{href:"/",children:"\uba54\uc778 \ud654\uba74\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})}})]})})})}}]),n}(a.Component),U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.querySelector(".inner")),U()}},[[36,1,2]]]);
//# sourceMappingURL=main.8f3791d3.chunk.js.map