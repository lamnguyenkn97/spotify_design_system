import{R as e}from"./index-B-SYruCi.js";import{H as t}from"./HorizontalTileCard-CzdNsncz.js";import{S as w}from"./Stack-BpWiWNDN.js";import"./Image-Cs63UF0a.js";import"./index.es-CQ4XmKgj.js";import"./GlobalStyles-Cn10x2UR.js";import"./colors-B2Ab1-XV.js";import"./radius-CVqooa3C.js";import"./index-Cy0hq6F7.js";import"./index-fYcu5K3v.js";import"./Typography-Brz-xasK.js";import"./Slider-BQZUFkDd.js";import"./spacing-D8bLMdSH.js";const V={title:"Molecules/HorizontalTileCard",component:t,parameters:{layout:"centered",docs:{description:{component:"HorizontalTileCard displays content in a horizontal layout with image, title, subtitle, and optional progress bar. Commonly used in Spotify playlists and sidebar navigation."}}},argTypes:{image:{control:"text",description:"Image URL for the card"},title:{control:"text",description:"Main title of the card"},subtitle:{control:"text",description:"Optional subtitle or description"},size:{control:"select",options:["small","large"],description:"Size of the card"},showProgress:{control:"boolean",description:"Whether to show the progress slider"},progressValue:{control:{type:"range",min:0,max:1,step:.01},description:"Progress value between 0 and 1"},isActive:{control:"boolean",description:"Whether the card is currently selected/active"},disabled:{control:"boolean",description:"Whether the card is disabled"},width:{control:"text",description:"Width of the card"},onClick:{action:"clicked",description:"Click handler for the card"}},tags:["autodocs"]},s={args:{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Liked Songs",subtitle:"Playlist • 207 songs",size:"large",width:"400px"}},i={args:{image:"https://i.scdn.co/image/ab6765630000ba8ae24c2a24ccb969befb377b5e",title:"#33 - người lớn đổi thay",subtitle:"Podcast • Giang ơi Radio",showProgress:!0,progressValue:.45,size:"large",width:"400px"}},o={render:()=>e.createElement(w,{direction:"column",spacing:"lg",align:"start"},e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Large Size"),e.createElement(t,{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Liked Songs",subtitle:"Playlist • 207 songs",size:"large",width:"400px"})),e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Small Size"),e.createElement(t,{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Liked Songs",subtitle:"Playlist • 207 songs",size:"small",width:"300px"}))),parameters:{docs:{description:{story:"HorizontalTileCard supports two sizes: small (40px image) and large (60px image)."}}}},r={render:()=>e.createElement(w,{direction:"column",spacing:"md",align:"start"},e.createElement(t,{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Normal State",subtitle:"Default appearance",width:"350px"}),e.createElement(t,{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Active State",subtitle:"Currently selected",isActive:!0,width:"350px"}),e.createElement(t,{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Disabled State",subtitle:"Cannot be interacted with",disabled:!0,width:"350px"})),parameters:{docs:{description:{story:"Different states of the HorizontalTileCard component."}}}},a={args:{image:"https://misc.scdn.co/liked-songs/liked-songs-640.jpg",title:"Your Playlist",subtitle:"Playlist • 42 songs",size:"large",width:"400px",showProgress:!1,progressValue:.3,isActive:!1,disabled:!1},parameters:{docs:{description:{story:"Interactive playground to test different HorizontalTileCard configurations."}}}};var n,l,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
    title: 'Liked Songs',
    subtitle: 'Playlist • 207 songs',
    size: 'large',
    width: '400px'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    image: 'https://i.scdn.co/image/ab6765630000ba8ae24c2a24ccb969befb377b5e',
    title: '#33 - người lớn đổi thay',
    subtitle: 'Podcast • Giang ơi Radio',
    showProgress: true,
    progressValue: 0.45,
    size: 'large',
    width: '400px'
  }
}`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing="lg" align="start">
      <div>
        <h3 style={{
        color: 'white',
        marginBottom: '1rem'
      }}>Large Size</h3>
        <HorizontalTileCard image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg" title="Liked Songs" subtitle="Playlist • 207 songs" size="large" width="400px" />
      </div>
      <div>
        <h3 style={{
        color: 'white',
        marginBottom: '1rem'
      }}>Small Size</h3>
        <HorizontalTileCard image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg" title="Liked Songs" subtitle="Playlist • 207 songs" size="small" width="300px" />
      </div>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'HorizontalTileCard supports two sizes: small (40px image) and large (60px image).'
      }
    }
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,k,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing="md" align="start">
      <HorizontalTileCard image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg" title="Normal State" subtitle="Default appearance" width="350px" />
      <HorizontalTileCard image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg" title="Active State" subtitle="Currently selected" isActive width="350px" />
      <HorizontalTileCard image="https://misc.scdn.co/liked-songs/liked-songs-640.jpg" title="Disabled State" subtitle="Cannot be interacted with" disabled width="350px" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Different states of the HorizontalTileCard component.'
      }
    }
  }
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var z,S,f;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
    title: 'Your Playlist',
    subtitle: 'Playlist • 42 songs',
    size: 'large',
    width: '400px',
    showProgress: false,
    progressValue: 0.3,
    isActive: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different HorizontalTileCard configurations.'
      }
    }
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const B=["Default","WithProgress","AllSizes","States","Playground"];export{o as AllSizes,s as Default,a as Playground,r as States,i as WithProgress,B as __namedExportsOrder,V as default};
