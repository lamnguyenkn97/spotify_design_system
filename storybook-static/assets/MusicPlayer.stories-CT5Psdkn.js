import{R as e,r as m}from"./index-B-SYruCi.js";import{S as i}from"./Stack-BpWiWNDN.js";import{B as C,b as E,a as S}from"./Button-DSDk_7mN.js";import{I as x}from"./Icon-pkSkNuYn.js";import{F as me,c as de,f as pe,G as ge,H as ye,I as fe,J as ve}from"./index-Cy0hq6F7.js";import{S as se}from"./Slider-BQZUFkDd.js";import{T as V}from"./Typography-Brz-xasK.js";import{I as he}from"./Image-Cs63UF0a.js";import{c as U}from"./colors-B2Ab1-XV.js";import"./GlobalStyles-Cn10x2UR.js";import"./spacing-D8bLMdSH.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";import"./index-fYcu5K3v.js";const q=({isPlaying:r,onPlayPause:a,onNext:t,onPrevious:n})=>e.createElement(i,{direction:"row",spacing:"md",align:"center"},e.createElement(C,{onClick:n,size:E.Small,variant:S.Secondary,icon:e.createElement(x,{icon:me,size:"small"}),text:"","aria-label":"Previous track"}),e.createElement(C,{onClick:a,size:E.Medium,variant:S.White,icon:e.createElement(x,{icon:r?de:pe,size:"medium"}),text:"","aria-label":r?"Pause":"Play"}),e.createElement(C,{onClick:t,size:E.Small,variant:S.Secondary,icon:e.createElement(x,{icon:ge,size:"small"}),text:"","aria-label":"Next track"}));q.__docgenInfo={description:"",methods:[],displayName:"PlayerControls",props:{isPlaying:{required:!0,tsType:{name:"boolean"},description:"Whether the player is currently playing"},onPlayPause:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when play/pause is clicked"},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when next track is clicked"},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when previous track is clicked"}}};const M=({currentTime:r,duration:a,onSeek:t})=>{const n=s=>{const c=Math.floor(s/60),u=Math.floor(s%60);return`${c}:${u.toString().padStart(2,"0")}`};return e.createElement(i,{direction:"column",spacing:"xs",style:{width:"100%",maxWidth:500}},e.createElement(se,{value:r,min:0,max:a,step:1,onChange:t,"aria-label":`Seek to position: ${n(r)} of ${n(a)}`}),e.createElement(i,{direction:"row",justify:"space-between",style:{width:"100%"}},e.createElement(V,{variant:"caption",color:"secondary"},n(r)),e.createElement(V,{variant:"caption",color:"secondary"},n(a))))};M.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{currentTime:{required:!0,tsType:{name:"number"},description:"Current playback time in seconds"},duration:{required:!0,tsType:{name:"number"},description:"Total track duration in seconds"},onSeek:{required:!0,tsType:{name:"signature",type:"function",raw:"(time: number) => void",signature:{arguments:[{type:{name:"number"},name:"time"}],return:{name:"void"}}},description:"Callback when seeking to a specific time"}}};const B=({volume:r,onVolumeChange:a})=>{const[t,n]=m.useState(!1),[s,c]=m.useState(r),u=()=>{t?(a(s),n(!1)):(c(r),a(0),n(!0))},y=()=>t||r===0?ye:r<50?fe:ve,p=()=>t||r===0?"Unmute":"Mute";return e.createElement(i,{direction:"row",spacing:"sm",align:"center",style:{minWidth:180}},e.createElement(C,{onClick:u,size:E.Small,variant:S.Secondary,icon:e.createElement(x,{icon:y(),size:"small"}),text:"","aria-label":p()}),e.createElement(se,{value:t?0:r,min:0,max:100,step:1,onChange:g=>{a(g),t&&g>0&&n(!1)},"aria-label":`Volume: ${t?0:r}%`}))};B.__docgenInfo={description:"",methods:[],displayName:"VolumeControl",props:{volume:{required:!0,tsType:{name:"number"},description:"Volume level (0-100)"},onVolumeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(volume: number) => void",signature:{arguments:[{type:{name:"number"},name:"volume"}],return:{name:"void"}}},description:"Callback when volume is changed"}}};const _=({title:r="Not Playing",artist:a="Unknown Artist",coverUrl:t="https://via.placeholder.com/56"})=>e.createElement(i,{direction:"row",spacing:"md",align:"center",style:{minWidth:180}},e.createElement(he,{src:t,alt:`${r} album cover`,width:56,height:56,shape:"rounded"}),e.createElement(i,{direction:"column",spacing:"xs",style:{minWidth:0}},e.createElement(i,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}},e.createElement(V,{variant:"body1",weight:"medium",color:"primary"},r)),e.createElement(i,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}},e.createElement(V,{variant:"body2",weight:"regular",color:"secondary"},a))));_.__docgenInfo={description:"",methods:[],displayName:"NowPlaying",props:{title:{required:!1,tsType:{name:"string"},description:"Track title",defaultValue:{value:"'Not Playing'",computed:!1}},artist:{required:!1,tsType:{name:"string"},description:"Artist name",defaultValue:{value:"'Unknown Artist'",computed:!1}},coverUrl:{required:!1,tsType:{name:"string"},description:"Album cover URL",defaultValue:{value:"'https://via.placeholder.com/56'",computed:!1}}}};const N=()=>{},W=r=>{},I=m.forwardRef(({currentTrack:r,isPlaying:a=!1,currentTime:t=0,duration:n=0,volume:s=100,onPlayPause:c=N,onNext:u=N,onPrevious:y=N,onSeek:p=W,onVolumeChange:g=W,className:l,"data-testid":le,...ce},ue)=>e.createElement(i,{ref:ue,direction:"row",spacing:"md",align:"center",justify:"space-between",padding:"md",backgroundColor:U.primary.black,className:l,"data-testid":le,style:{position:"fixed",bottom:0,left:0,right:0,height:"80px",borderTop:`1px solid ${U.grey.grey3}`,zIndex:1e3,width:"100%"},...ce},e.createElement(_,{title:r==null?void 0:r.title,artist:r==null?void 0:r.artist,coverUrl:r==null?void 0:r.coverUrl}),e.createElement(i,{direction:"column",spacing:"sm",align:"center",style:{flex:1,maxWidth:600}},e.createElement(q,{isPlaying:a,onPlayPause:c,onNext:u,onPrevious:y}),e.createElement(M,{currentTime:t,duration:n,onSeek:p})),e.createElement(B,{volume:s,onVolumeChange:g})));I.displayName="MusicPlayer";I.__docgenInfo={description:"",methods:[],displayName:"MusicPlayer",props:{currentTrack:{required:!1,tsType:{name:"Track"},description:"Current track information"},isPlaying:{required:!1,tsType:{name:"boolean"},description:"Whether the player is currently playing",defaultValue:{value:"false",computed:!1}},currentTime:{required:!1,tsType:{name:"number"},description:"Current playback time in seconds",defaultValue:{value:"0",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Total track duration in seconds",defaultValue:{value:"0",computed:!1}},volume:{required:!1,tsType:{name:"number"},description:"Volume level (0-100)",defaultValue:{value:"100",computed:!1}},onPlayPause:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when play/pause is clicked",defaultValue:{value:"() => {}",computed:!1}},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when next track is clicked",defaultValue:{value:"() => {}",computed:!1}},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when previous track is clicked",defaultValue:{value:"() => {}",computed:!1}},onSeek:{required:!1,tsType:{name:"signature",type:"function",raw:"(time: number) => void",signature:{arguments:[{type:{name:"number"},name:"time"}],return:{name:"void"}}},description:"Callback when seeking to a specific time",defaultValue:{value:"(_: number) => {}",computed:!1}},onVolumeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(volume: number) => void",signature:{arguments:[{type:{name:"number"},name:"volume"}],return:{name:"void"}}},description:"Callback when volume is changed",defaultValue:{value:"(_: number) => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for styling"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"}}};const Be={title:"Molecules/MusicPlayer",component:I,parameters:{layout:"fullscreen",docs:{description:{component:"MusicPlayer is a comprehensive audio player component that displays current track information, playback controls, progress bar, and volume control. It follows Spotify's design patterns."}}},argTypes:{currentTrack:{control:"object",description:"Current track information"},isPlaying:{control:"boolean",description:"Whether the player is currently playing"},currentTime:{control:{type:"range",min:0,max:300,step:1},description:"Current playback time in seconds"},duration:{control:{type:"range",min:0,max:300,step:1},description:"Total track duration in seconds"},volume:{control:{type:"range",min:0,max:100,step:1},description:"Volume level (0-100)"},onPlayPause:{action:"play-pause",description:"Callback when play/pause is clicked"},onNext:{action:"next",description:"Callback when next track is clicked"},onPrevious:{action:"previous",description:"Callback when previous track is clicked"},onSeek:{action:"seek",description:"Callback when seeking to a specific time"},onVolumeChange:{action:"volume-change",description:"Callback when volume is changed"}},tags:["autodocs"]},o=[{title:"Blinding Lights",artist:"The Weeknd",album:"After Hours",coverUrl:"https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"},{title:"Anti-Hero",artist:"Taylor Swift",album:"Midnights",coverUrl:"https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"},{title:"As It Was",artist:"Harry Styles",album:"Harry's House",coverUrl:"https://i.scdn.co/image/ab67616d0000b273daaa68c8a5b6b0e8c9b91f7e"}],d=r=>{const[a,t]=m.useState(r.isPlaying||!1),[n,s]=m.useState(r.currentTime||0),[c,u]=m.useState(r.volume||100),[y,p]=m.useState(0),g=r.currentTrack||o[y];return e.createElement("div",{style:{height:"100vh",position:"relative"}},e.createElement(I,{...r,currentTrack:g,isPlaying:a,currentTime:n,volume:c,onPlayPause:()=>t(!a),onNext:()=>{p(l=>(l+1)%o.length),s(0),t(!0)},onPrevious:()=>{p(l=>(l-1+o.length)%o.length),s(0),t(!0)},onSeek:l=>s(l),onVolumeChange:l=>u(l)}))},f={render:d,args:{currentTrack:o[0],isPlaying:!1,currentTime:0,duration:180,volume:100}},v={render:d,args:{currentTrack:o[0],isPlaying:!0,currentTime:45,duration:180,volume:80}},h={render:d,args:{currentTrack:o[1],isPlaying:!1,currentTime:90,duration:210,volume:60}},k={render:d,args:{currentTrack:o[2],isPlaying:!0,currentTime:30,duration:165,volume:15}},T={render:d,args:{currentTrack:o[0],isPlaying:!0,currentTime:120,duration:180,volume:0}},b={render:d,args:{currentTrack:void 0,isPlaying:!1,currentTime:0,duration:0,volume:100}},P={render:()=>e.createElement("div",{style:{padding:"2rem",backgroundColor:"#121212",minHeight:"100vh"}},e.createElement(i,{direction:"column",spacing:"xl",align:"start"},e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Player Controls"),e.createElement(q,{isPlaying:!0,onPlayPause:()=>{},onNext:()=>{},onPrevious:()=>{}})),e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Now Playing"),e.createElement(_,{...o[0]})),e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Progress Bar"),e.createElement(M,{currentTime:75,duration:180,onSeek:()=>{}})),e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Volume Control"),e.createElement(B,{volume:65,onVolumeChange:()=>{}})))),parameters:{docs:{description:{story:"Individual components that make up the MusicPlayer."}}}},w={render:d,args:{currentTrack:o[0],isPlaying:!1,currentTime:0,duration:180,volume:100},parameters:{docs:{description:{story:"Interactive playground to test different MusicPlayer configurations."}}}};var z,A,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    volume: 100
  }
}`,...(H=(A=f.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var $,L,D;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: true,
    currentTime: 45,
    duration: 180,
    volume: 80
  }
}`,...(D=(L=v.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var R,j,O;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[1],
    isPlaying: false,
    currentTime: 90,
    duration: 210,
    volume: 60
  }
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var F,G,J;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[2],
    isPlaying: true,
    currentTime: 30,
    duration: 165,
    volume: 15
  }
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: true,
    currentTime: 120,
    duration: 180,
    volume: 0
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: undefined,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 100
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ae;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    backgroundColor: '#121212',
    minHeight: '100vh'
  }}>
      <Stack direction="column" spacing="xl" align="start">
        <div>
          <h3 style={{
          color: 'white',
          marginBottom: '1rem'
        }}>Player Controls</h3>
          <PlayerControls isPlaying={true} onPlayPause={() => {}} onNext={() => {}} onPrevious={() => {}} />
        </div>
        
        <div>
          <h3 style={{
          color: 'white',
          marginBottom: '1rem'
        }}>Now Playing</h3>
          <NowPlaying {...sampleTracks[0]} />
        </div>
        
        <div>
          <h3 style={{
          color: 'white',
          marginBottom: '1rem'
        }}>Progress Bar</h3>
          <ProgressBar currentTime={75} duration={180} onSeek={() => {}} />
        </div>
        
        <div>
          <h3 style={{
          color: 'white',
          marginBottom: '1rem'
        }}>Volume Control</h3>
          <VolumeControl volume={65} onVolumeChange={() => {}} />
        </div>
      </Stack>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Individual components that make up the MusicPlayer.'
      }
    }
  }
}`,...(ae=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ie,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    currentTrack: sampleTracks[0],
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    volume: 100
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different MusicPlayer configurations.'
      }
    }
  }
}`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const _e=["Default","Playing","Paused","LowVolume","Muted","NoTrack","ComponentShowcase","Playground"];export{P as ComponentShowcase,f as Default,k as LowVolume,T as Muted,b as NoTrack,h as Paused,w as Playground,v as Playing,_e as __namedExportsOrder,Be as default};
