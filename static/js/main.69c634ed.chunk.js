(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3q4yr",Modal:"Modal_Modal__jcL_H",Img:"Modal_Img__39aa-"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__KpgRB",text:"ImageGallery_text__fo2i2"}},17:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1oHqA",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__kXvQ3"}},19:function(e,t,a){e.exports={load_more:"Button_load_more__1CTFi",Button:"Button_Button__2ObI5"}},32:function(e,t,a){e.exports={Loader:"Loader_Loader__14zLn"}},39:function(e,t,a){},42:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__kZZBw",SearchForm:"Searchbar_SearchForm__1mHC8",SearchForm__button:"Searchbar_SearchForm__button__1ZhEk",SearchForm__button__label:"Searchbar_SearchForm__button__label__3wiiv",SearchForm__input:"Searchbar_SearchForm__input__2RB6R"}},83:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),o=a.n(c),s=(a(39),a(10)),i=a(11),u=a(34),l=a(33),h=a(13),m=(a(40),a(4)),_=a(5),b=a.n(_),g=a(1),j=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(m.a)(a,2),c=n[0],o=n[1];return Object(g.jsx)("header",{className:b.a.Searchbar,children:Object(g.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438!")},children:[Object(g.jsx)("button",{type:"submit",className:b.a.SearchForm__button,children:Object(g.jsx)("span",{className:b.a.SearchForm__button__label,children:"Search"})}),Object(g.jsx)("input",{className:b.a.SearchForm__input,value:c,type:"text",placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},f=(a(42),a(20)),d=a(17),p=a.n(d),O=function(e){var t=e.searchResult,a=e.onImageClick;return t.map((function(e){return Object(g.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:e.webformatURL,alt:e.tags,className:p.a.ImageGalleryItem__image,onClick:a})},e.id)}))},y=a(18),x=a.n(y),I=a(29),S=a(30),v=a.n(S),k=function(){function e(){Object(s.a)(this,e),this.base_url="https://pixabay.com/api/",this.api_key="22572278-f825929a97bc5f7e53341dcc7",this._searchQuery="",this._page=1,this._perPage=12}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchImages",value:function(){var e=Object(I.a)(x.a.mark((function e(){var t,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.base_url,"?q=").concat(this._searchQuery,"&page=").concat(this.page,"&key=").concat(this.api_key,"&image_type=photo&orientation=horizontal&per_page=").concat(this._perPage),e.prev=1,e.next=4,v.a.get(t);case 4:return a=e.sent,r=a.data.hits,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),w=a(19),N=a.n(w),F=function(e){var t=e.onClick;return Object(g.jsx)("div",{className:N.a.load_more,children:Object(g.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:"Load more"})})},C=(a(62),a(31)),G=a.n(C),L=a(32),B=a.n(L),M=function(){return Object(g.jsx)(G.a,{className:B.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},E=a(14),R=a.n(E),P=function(e){var t=e.toggleModal,a=e.bigImg;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(g.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&t()},className:R.a.Overlay,children:Object(g.jsx)("div",{className:R.a.Modal,children:Object(g.jsx)("img",{className:R.a.Img,src:a.largeImageURL,alt:a.tags})})})},Q=a(15),H=a.n(Q),T=new k,q=function(e){var t=e.searchImageName,a=e.scroll,n=Object(r.useState)([]),c=Object(m.a)(n,2),o=c[0],s=c[1],i=Object(r.useState)("idle"),u=Object(m.a)(i,2),l=u[0],h=u[1],_=Object(r.useState)(null),b=Object(m.a)(_,2),j=b[0],d=b[1],p=Object(r.useState)(!1),y=Object(m.a)(p,2),x=y[0],I=y[1];Object(r.useEffect)((function(){t.trim()&&(h("pending"),T.resetPage(),T.searchQuery=t,T.searchImages().then((function(e){h("success"),s(e)})).catch((function(e){h("error")})))}),[t,s]);var S=function(){I(!x)};return"idle"===l?Object(g.jsx)("p",{className:H.a.text,children:"Hello! Enter the name of the picture"}):"pending"===l?Object(g.jsx)(M,{}):"success"===l?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:H.a.ImageGallery,children:Object(g.jsx)(O,{searchResult:o,onImageClick:function(e){e.preventDefault();var t=e.target.src;d(o.find((function(e){return e.webformatURL===t}))),S()}})}),Object(g.jsx)(F,{onClick:function(){T.page=1,T.searchImages().then((function(e){s((function(t){return[].concat(Object(f.a)(t),Object(f.a)(e))})),h("success"),a()})).catch((function(e){h("error")}))}}),x&&Object(g.jsx)(P,{toggleModal:S,bigImg:j})]}):"error"===l?Object(g.jsx)("p",{className:H.a.text,children:"Something went wrong"}):void 0},U=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchImageName:"",showModal:!1},e.handleSearchbarSubmit=function(t){e.setState({searchImageName:t})},e}return Object(i.a)(a,[{key:"onPageScroll",value:function(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j,{onSubmit:this.handleSearchbarSubmit}),Object(g.jsx)(q,{searchImageName:this.state.searchImageName,scroll:this.onPageScroll}),Object(g.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.69c634ed.chunk.js.map