(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(4),o=r.n(c),s=r(6),l=r(7),i=r(10),u=r(9),d=r(0);function h(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",{autoFocus:!0,autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",id:"search",placeholder:"Artist ..",text:"text",onKeyDown:e.getContent})})}var m=r(20),j=function(e){var t=e.artwork,r=e.previewUrl,a=e.track;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"playlist",onClick:function(){return e.openMedia(r,a)},style:{backgroundImage:"url(".concat(t,")")}})})};function v(e){return Object(d.jsx)(d.Fragment,{children:e.resultdata.map((function(t){return Object(d.jsx)(j,{artwork:t.artworkUrl100,previewUrl:t.previewUrl,track:t.trackCensoredName,openMedia:e.openMedia},t.trackId)}))})}var y=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).artistImage=document.querySelector(".artist"),a.overlay=document.querySelector(".overlay"),a.searchElem=document.querySelector("#search"),a.state={resultdata:[]},a.searchTxtValue="",a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){}},{key:"giveMeData",value:function(e){var t=this,r=new URL("https://itunes.apple.com/search"),a={term:e,media:"musicVideo"};r.search=new URLSearchParams(a);fetch(r,{mode:"cors",method:"POST",headers:{"Content-Type":"application/json",value:"https://abhijeet-avee.github.io/MuiscPlayer3D/"}}).then((function(e){e.json().then((function(e){console.log("Data is ",e),t.setState({resultdata:e.results})})).catch((function(e){console.log("Error in JSON ",e)})),console.log("Response is Coming")})).catch((function(e){console.log("Error From Server")}))}},{key:"listener",value:function(e){var t=e.target.value;this.searchTxtValue=t,console.log("Calling by child ",this.searchTxtValue),"Enter"===e.key&&(this.giveMeData(this.searchTxtValue),document.querySelector("#search").blur())}},{key:"openMedia",value:function(e,t){document.querySelector(".media").innerHTML='<div className="container">\n                <div className="col-xs-12">\n                <video controls autoplay src="'.concat(e,'"></video>\n                </div>\n                <div className="col-xs-12">\n                <p>').concat(t,"</p>\n                </div>\n                </div>"),document.querySelector(".media").classList.remove("hidden"),document.querySelector(".artist").style.background="url(https://i.gifer.com/origin/5e/5e1256a5a34e5f9c6e9b8942ef933de6_w200.gif)",console.log("I am clicked"),this.toggleOverlay()}},{key:"closeMedia",value:function(){document.querySelector(".media").innerHTML="",document.querySelector(".overlay").classList.toggle("blur"),document.querySelectorAll(".playlist").forEach((function(e){return e.classList.toggle("blur")})),document.querySelector(".artist").style.background="none"}},{key:"toggleOverlay",value:function(){document.querySelector(".overlay").classList.toggle("blur"),document.querySelectorAll(".playlist").forEach((function(e){return e.classList.toggle("blur")}))}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h1",{className:"alert-info text-center",children:this.props.title}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h6",{className:"alert-danger text-center",children:["developed by ",this.props.name]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"containerPlay",children:Object(d.jsx)(v,{resultdata:this.state.resultdata,openMedia:this.openMedia.bind(this)})}),Object(d.jsx)("div",{className:"artist"}),Object(d.jsx)("div",{className:"overlay",onClick:this.closeMedia}),Object(d.jsx)(h,{getContent:this.listener.bind(this)}),Object(d.jsx)("div",{className:"media hidden"})]})})}}]),r}(n.a.Component);r(17);function p(){return Object(d.jsx)(y,{title:"MUSIC PLAYER",name:"YASH-AVEE"})}r(18);o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.11bcee33.chunk.js.map