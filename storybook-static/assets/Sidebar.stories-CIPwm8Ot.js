import{R as e}from"./index-B-SYruCi.js";import{S as i}from"./Stack-BpWiWNDN.js";import{T as m}from"./Typography-Brz-xasK.js";import{B as n,b as s,a as l}from"./Button-DSDk_7mN.js";import{I as r}from"./Icon-pkSkNuYn.js";import{I as f}from"./Input-DWCr4mhE.js";import{c as b}from"./index-fYcu5K3v.js";import{d as y,A as E,B as S,C as x}from"./index-Cy0hq6F7.js";import{d as a}from"./GlobalStyles-Cn10x2UR.js";import{s as h}from"./spacing-D8bLMdSH.js";import{H as v}from"./HorizontalTileCard-CzdNsncz.js";import"./colors-B2Ab1-XV.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";import"./Image-Cs63UF0a.js";import"./Slider-BQZUFkDd.js";const z=a.aside`
  width: 320px;
  background: #181818;
  color: #fff;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,k=a.div`
  margin-bottom: 24px;
`,w=a.div`
  margin-bottom: 16px;
  display: flex;
  gap: ${h.sm};
  overflow-x: auto;
`,C=a.div`
  margin-bottom: 16px;
`,I=a.div`
  margin-bottom: 16px;
`,B=a.div`
  margin-bottom: 8px;
`,L=["Playlists","Artists","Albums","Podcasts & Shows"],P=[{image:"https://misc.scdn.co/liked-songs/liked-songs-640.png",title:"Liked Songs",subtitle:"Playlist • 213 songs",type:"playlist",pinned:!0},{image:"https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2",title:"Daily Mix 2",subtitle:"Playlist • Spotify",type:"playlist",pinned:!0}],c=()=>e.createElement(z,null,e.createElement(k,null,e.createElement(i,{direction:"row",align:"center",spacing:"md"},e.createElement(r,{icon:b,size:"large"}))),e.createElement(C,null,e.createElement(m,{variant:"h4",weight:"bold"},"Your Library")),e.createElement(w,null,L.map(t=>e.createElement(n,{key:t,text:t,size:s.Small,variant:l.Secondary,onClick:()=>{}})),e.createElement(n,{icon:e.createElement(r,{icon:y,size:"small"}),size:s.Small,variant:l.Secondary,text:"",onClick:()=>{}}),e.createElement(n,{icon:e.createElement(r,{icon:E,size:"small"}),size:s.Small,variant:l.Secondary,text:"",onClick:()=>{}})),e.createElement(I,null,e.createElement(f,{variant:"search",placeholder:"Search in Your Library",size:"sm",clearable:!0})),e.createElement(B,null,e.createElement(i,{direction:"row",align:"center",justify:"space-between"},e.createElement(m,{variant:"body2",color:"secondary"},"Recents"),e.createElement(i,{direction:"row",spacing:"xs"},e.createElement(r,{icon:S,size:"small"}),e.createElement(r,{icon:x,size:"small"})))),e.createElement(i,{justify:"space-evenly"},P.map((t,g)=>e.createElement(v,{key:g,image:t.image,title:t.title,subtitle:t.subtitle,width:"100%",onClick:()=>{},size:"small"}))));c.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};const q={title:"Organisms/Sidebar",component:c},o={render:()=>e.createElement(c,null)};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Sidebar />
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,q as default};
