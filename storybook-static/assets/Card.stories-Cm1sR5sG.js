import{r as P,R as e}from"./index-B-SYruCi.js";import{S as f}from"./Stack-BpWiWNDN.js";import{I as le}from"./Image-Cs63UF0a.js";import{T as b}from"./Typography-Brz-xasK.js";import{I as re}from"./Icon-pkSkNuYn.js";import{i as ie,f as oe}from"./index-Cy0hq6F7.js";import{c as r}from"./colors-B2Ab1-XV.js";import{s as t}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";import"./index-fYcu5K3v.js";const se=i=>{switch(i){case"sm":return"160px";case"lg":return"240px";case"md":default:return"200px"}},a=P.forwardRef(({title:i,subtitle:h,imageUrl:S,size:Z="md",variant:k="default",onPlayClick:v,showPlayButton:$=!0,loading:y=!1,className:ee,...ae},te)=>{const[l,C]=P.useState(!1),w=k==="artist";return e.createElement(f,{ref:te,direction:"column",spacing:"sm",padding:"md",borderRadius:"sm",backgroundColor:l?r.grey.grey3:r.grey.grey1,width:se(Z),className:ee,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),style:{transition:"all 0.3s ease-in-out",cursor:"pointer",textAlign:k==="artist"?"center":"left",transform:l?"translateY(-4px)":"translateY(0)",boxShadow:l?"0 8px 24px rgba(0, 0, 0, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.1)"},...ae},e.createElement(f,{direction:"column",style:{position:"relative",width:"100%",overflow:"hidden",borderRadius:"8px"}},S&&e.createElement(le,{src:S,alt:i,width:"100%",aspectRatio:1,shape:w?"circle":"rounded",style:{transition:"transform 0.3s ease-in-out",transform:l?"scale(1.05)":"scale(1)"}}),$&&v&&e.createElement(re,{icon:y?ie:oe,size:"medium",variant:"rounded",backgroundColor:"brand",color:"primary",clickable:!0,spin:y,disabled:y,onClick:v,"aria-label":"Play",style:{position:"absolute",bottom:t.lg,right:t.sm,opacity:l?1:0,transition:"all 0.3s ease-in-out",transform:l?"translateY(-2px) scale(1.1)":"translateY(8px) scale(1)",zIndex:10,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.4)"}})),e.createElement(f,{direction:"column",spacing:"xs",style:{marginTop:t.xs}},e.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0}},e.createElement(b,{variant:"body1",weight:"bold",color:"primary",component:"h3"},i)),w?e.createElement("div",{style:{margin:0,opacity:.7}},e.createElement(b,{variant:"body2",color:"muted",component:"p"},"Artist")):h&&e.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0,opacity:.7}},e.createElement(b,{variant:"body2",color:"muted",component:"p"},h))))});a.displayName="Card";a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'artist'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'artist'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onPlayClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showPlayButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ke={title:"Molecules/Card",component:a,parameters:{layout:"padded",docs:{description:{component:"A flexible card component for displaying music content like albums, playlists, and artists with hover effects and play buttons."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the card"},variant:{control:"select",options:["default","artist"],description:"Card variant - artist cards have circular images"},title:{control:"text",description:"Main title of the card"},subtitle:{control:"text",description:"Subtitle for default cards"},imageUrl:{control:"text",description:"Cover image URL"},showPlayButton:{control:"boolean",description:"Whether to show the play button on hover"},loading:{control:"boolean",description:"Loading state for the play button"}}},o={args:{title:"Midnights",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"md",variant:"default",onPlayClick:()=>console.log("Play clicked")}},s={args:{title:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"md",variant:"artist",onPlayClick:()=>console.log("Play clicked")}},n={args:{title:"folklore",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"sm",onPlayClick:()=>console.log("Play clicked")}},c={args:{title:"evermore",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"lg",onPlayClick:()=>console.log("Play clicked")}},d={args:{title:"1989 (Taylor's Version)",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",showPlayButton:!1}},m={args:{title:"Lover",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",loading:!0,onPlayClick:()=>console.log("Play clicked")}},p={render:()=>e.createElement("div",{style:{display:"flex",gap:t.lg,backgroundColor:r.primary.black,padding:t.lg}},e.createElement(a,{title:"folklore",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"sm",onPlayClick:()=>console.log("Small card play")}),e.createElement(a,{title:"Midnights",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"md",onPlayClick:()=>console.log("Medium card play")}),e.createElement(a,{title:"evermore",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",size:"lg",onPlayClick:()=>console.log("Large card play")}))},g={render:()=>e.createElement("div",{style:{display:"flex",gap:t.lg,backgroundColor:r.primary.black,padding:t.lg}},e.createElement(a,{title:"1989 (Taylor's Version)",subtitle:"Taylor Swift • 2023",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",variant:"default",onPlayClick:()=>console.log("Album play")}),e.createElement(a,{title:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",variant:"artist",onPlayClick:()=>console.log("Artist play")}))},u={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:t.lg,backgroundColor:r.primary.black,padding:t.lg}},e.createElement(a,{title:"Anti-Hero",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",onPlayClick:()=>console.log("Playing Anti-Hero")}),e.createElement(a,{title:"Taylor Swift Essentials",subtitle:"Spotify • 1,247,582 likes",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",onPlayClick:()=>console.log("Playing playlist")}),e.createElement(a,{title:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",variant:"artist",onPlayClick:()=>console.log("Playing Taylor Swift")}),e.createElement(a,{title:"Lover",subtitle:"Taylor Swift",imageUrl:"https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",onPlayClick:()=>console.log("Playing Lover")}))};var T,x,U;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Midnights',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'md',
    variant: 'default',
    onPlayClick: () => console.log('Play clicked')
  }
}`,...(U=(x=o.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var E,z,A;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'md',
    variant: 'artist',
    onPlayClick: () => console.log('Play clicked')
  }
}`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,M,V;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'folklore',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'sm',
    onPlayClick: () => console.log('Play clicked')
  }
}`,...(V=(M=n.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var q,I,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'evermore',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    size: 'lg',
    onPlayClick: () => console.log('Play clicked')
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var B,H,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '1989 (Taylor\\'s Version)',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    showPlayButton: false
  }
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,_,O;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Lover',
    subtitle: 'Taylor Swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
    loading: true,
    onPlayClick: () => console.log('Play clicked')
  }
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var D,N,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: spacing.lg,
    backgroundColor: colors.primary.black,
    padding: spacing.lg
  }}>
      <Card title="folklore" subtitle="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" size="sm" onPlayClick={() => console.log('Small card play')} />
      <Card title="Midnights" subtitle="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" size="md" onPlayClick={() => console.log('Medium card play')} />
      <Card title="evermore" subtitle="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" size="lg" onPlayClick={() => console.log('Large card play')} />
    </div>
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: spacing.lg,
    backgroundColor: colors.primary.black,
    padding: spacing.lg
  }}>
      <Card title="1989 (Taylor's Version)" subtitle="Taylor Swift • 2023" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" variant="default" onPlayClick={() => console.log('Album play')} />
      <Card title="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" variant="artist" onPlayClick={() => console.log('Artist play')} />
    </div>
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: spacing.lg,
    backgroundColor: colors.primary.black,
    padding: spacing.lg
  }}>
      <Card title="Anti-Hero" subtitle="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" onPlayClick={() => console.log('Playing Anti-Hero')} />
      <Card title="Taylor Swift Essentials" subtitle="Spotify • 1,247,582 likes" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" onPlayClick={() => console.log('Playing playlist')} />
      <Card title="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" variant="artist" onPlayClick={() => console.log('Playing Taylor Swift')} />
      <Card title="Lover" subtitle="Taylor Swift" imageUrl="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33" onPlayClick={() => console.log('Playing Lover')} />
    </div>
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ve=["Default","Artist","SmallCard","LargeCard","WithoutPlayButton","LoadingState","AllSizes","AllVariants","SpotifyExamples"];export{p as AllSizes,g as AllVariants,s as Artist,o as Default,c as LargeCard,m as LoadingState,n as SmallCard,u as SpotifyExamples,d as WithoutPlayButton,ve as __namedExportsOrder,ke as default};
