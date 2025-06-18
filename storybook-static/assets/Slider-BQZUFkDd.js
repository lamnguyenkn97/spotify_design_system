import{r as p,R as l}from"./index-B-SYruCi.js";import{m as O,d as c,l as $,f as w}from"./GlobalStyles-Cn10x2UR.js";import{c as r}from"./colors-B2Ab1-XV.js";import{s as d}from"./spacing-D8bLMdSH.js";import{b as N}from"./radius-CVqooa3C.js";const i={xs:{trackHeight:"2px",thumbSize:"12px",fontSize:w.sm,markSize:"4px",containerSpacing:d.xs},sm:{trackHeight:"4px",thumbSize:"16px",fontSize:w.sm,markSize:"6px",containerSpacing:d.sm},md:{trackHeight:"6px",thumbSize:"20px",fontSize:w.md,markSize:"8px",containerSpacing:d.md},lg:{trackHeight:"8px",thumbSize:"24px",fontSize:w.lg,markSize:"10px",containerSpacing:d.lg},xl:{trackHeight:"10px",thumbSize:"28px",fontSize:w.xl,markSize:"12px",containerSpacing:d.xl}},ue={default:{track:r.grey.grey4,activeTrack:r.primary.white,thumb:r.primary.white,thumbBorder:r.grey.grey4,thumbHover:r.grey.grey5,background:r.grey.grey2},primary:{track:r.primary.brand,activeTrack:r.primary.brand,thumb:r.primary.white,thumbBorder:r.primary.brand,thumbHover:r.decorative.evergreen,background:r.grey.grey2},secondary:{track:r.grey.grey4,activeTrack:r.grey.grey5,thumb:r.grey.grey5,thumbBorder:r.grey.grey4,thumbHover:r.primary.white,background:r.grey.grey1},success:{track:r.decorative.evergreen,activeTrack:r.decorative.evergreen,thumb:r.primary.white,thumbBorder:r.decorative.evergreen,thumbHover:"#0f7b3c",background:r.grey.grey2},warning:{track:r.decorative.mellowYellow,activeTrack:r.decorative.mellowYellow,thumb:r.primary.black,thumbBorder:r.decorative.mellowYellow,thumbHover:"#d4ad00",background:r.grey.grey2},error:{track:r.decorative.redRedWine,activeTrack:r.decorative.redRedWine,thumb:r.primary.white,thumbBorder:r.decorative.redRedWine,thumbHover:"#8b1538",background:r.grey.grey2},brand:{track:r.primary.brand,activeTrack:r.primary.brand,thumb:r.primary.white,thumbBorder:r.primary.brand,thumbHover:r.decorative.evergreen,background:r.grey.grey2},gradient:{track:"linear-gradient(90deg, #1db954, #1ed760)",activeTrack:"linear-gradient(90deg, #1db954, #1ed760)",thumb:r.primary.white,thumbBorder:r.primary.brand,thumbHover:r.decorative.evergreen,background:r.grey.grey2}},u={transition:"all 0.2s ease-in-out",thumbScaleHover:"1.2",thumbScaleActive:"1.3",tooltipOffset:"8px",markOffset:"4px",labelSpacing:d.xs,borderWidth:"2px"},s={size:"md",variant:"default",orientation:"horizontal",min:0,max:100,step:1,disabled:!1,loading:!1,showTooltip:!1,showValue:!1,showMarks:!1,animate:!0,required:!1,valueLabelPosition:"top"},de=O`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`,ce=O`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,me=(e,t)=>{const o=i[e],h=parseInt(o.thumbSize),a=parseInt(o.trackHeight),f=Math.max(h,a);return t==="vertical"?$`
      width: ${f}px;
      height: 200px;
      
      input[type="range"] {
        width: 200px;
        height: ${f}px;
        transform: rotate(-90deg);
        transform-origin: center;
      }
    `:$`
    height: ${f}px;
    
    input[type="range"] {
      height: ${f}px;
    }
  `},pe=(e,t,o,h)=>{const a=ue[e];return $`
    /* Track background */
    &::after {
      background: ${h||a.background};
    }
    
    /* Active track */
    &::before {
      background: ${t||a.activeTrack};
    }
    
    /* Thumb styles */
    input[type="range"]::-webkit-slider-thumb {
      background: ${o||a.thumb};
      border: ${u.borderWidth} solid ${a.thumbBorder};
      
      &:hover {
        background: ${a.thumbHover};
        transform: scale(${u.thumbScaleHover});
      }
      
      &:active {
        transform: scale(${u.thumbScaleActive});
      }
    }
    
    input[type="range"]::-moz-range-thumb {
      background: ${o||a.thumb};
      border: ${u.borderWidth} solid ${a.thumbBorder};
      
      &:hover {
        background: ${a.thumbHover};
        transform: scale(${u.thumbScaleHover});
      }
      
      &:active {
        transform: scale(${u.thumbScaleActive});
      }
    }
  `},he=c.div.withConfig({shouldForwardProp:e=>!["orientation","length","disabled"].includes(e)})`
  display: flex;
  flex-direction: ${({orientation:e})=>e==="vertical"?"row":"column"};
  align-items: ${({orientation:e})=>e==="vertical"?"center":"stretch"};
  gap: ${u.labelSpacing};
  width: ${({orientation:e,length:t})=>e==="horizontal"?typeof t=="number"?`${t}px`:t||"100%":"auto"};
  height: ${({orientation:e,length:t})=>e==="vertical"?typeof t=="number"?`${t}px`:t||"200px":"auto"};
  opacity: ${({disabled:e})=>e?.5:1};
  pointer-events: ${({disabled:e})=>e?"none":"auto"};
`,fe=c.label.withConfig({shouldForwardProp:e=>!["size","required","error"].includes(e)})`
  font-size: ${({size:e})=>i[e].fontSize}rem;
  font-weight: 600;
  color: ${({error:e})=>e?r.decorative.redRedWine:r.primary.white};
  
  ${({required:e})=>e&&$`
    &::after {
      content: ' *';
      color: ${r.decorative.redRedWine};
    }
  `}
`,be=c.div.withConfig({shouldForwardProp:e=>!["size","variant","orientation","loading","customTrackColor","customThumbColor","customBackgroundColor"].includes(e)})`
  position: relative;
  width: 100%;
  border-radius: ${N.xl};
  display: flex;
  align-items: center;
  
  ${({size:e,orientation:t})=>me(e,t)}
  ${({variant:e,customTrackColor:t,customThumbColor:o,customBackgroundColor:h})=>pe(e,t,o,h)}
  
  ${({loading:e})=>e&&$`
    animation: ${de} 1.5s infinite;
  `}
  
  /* Track background - centered in container */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: ${({size:e})=>i[e].trackHeight};
    transform: translateY(-50%);
    border-radius: inherit;
    z-index: 0;
  }
  
  /* Active track overlay - centered in container */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: ${({size:e})=>i[e].trackHeight};
    transform: translateY(-50%);
    border-radius: inherit;
    pointer-events: none;
    z-index: 1;
  }
`,ge=c.input.withConfig({shouldForwardProp:e=>!["size","animate"].includes(e)})`
  position: relative;
  width: 100%;
  height: 100%;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  
  /* WebKit Thumb */
  &::-webkit-slider-thumb {
    appearance: none;
    width: ${({size:e})=>i[e].thumbSize};
    height: ${({size:e})=>i[e].thumbSize};
    border-radius: 50%;
    cursor: grab;
    transition: ${({animate:e})=>e?u.transition:"none"};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    /* Center the thumb by calculating offset from input height to track position */
    margin-top: ${({size:e})=>{const t=parseInt(i[e].thumbSize),o=parseInt(i[e].trackHeight),a=Math.max(t,o)/2,f=t/2;return`${a-f}px`}};
    
    &:active {
      cursor: grabbing;
    }
  }
  
  /* Firefox Thumb */
  &::-moz-range-thumb {
    width: ${({size:e})=>i[e].thumbSize};
    height: ${({size:e})=>i[e].thumbSize};
    border-radius: 50%;
    cursor: grab;
    transition: ${({animate:e})=>e?u.transition:"none"};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border: none;
    /* Firefox automatically centers, but ensure no extra margin */
    margin: 0;
    
    &:active {
      cursor: grabbing;
    }
  }
  
  /* WebKit Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${({size:e})=>{const t=parseInt(i[e].thumbSize),o=parseInt(i[e].trackHeight);return`${Math.max(t,o)}px`}};
    background: transparent;
    border-radius: inherit;
    cursor: pointer;
  }
  
  /* Firefox Track */
  &::-moz-range-track {
    width: 100%;
    height: ${({size:e})=>{const t=parseInt(i[e].thumbSize),o=parseInt(i[e].trackHeight);return`${Math.max(t,o)}px`}};
    background: transparent;
    border-radius: inherit;
    border: none;
    cursor: pointer;
  }
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${r.primary.brand};
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    
    &::-webkit-slider-thumb {
      cursor: not-allowed;
    }
    
    &::-moz-range-thumb {
      cursor: not-allowed;
    }
  }
`,ve=c.div.withConfig({shouldForwardProp:e=>!["orientation","size"].includes(e)})`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?"right":"bottom"}: -${u.markOffset};
  ${({orientation:e})=>e==="vertical"?"height":"width"}: 100%;
  display: flex;
  ${({orientation:e})=>e==="vertical"?"flex-direction: column;":""}
  justify-content: space-between;
  align-items: ${({orientation:e})=>e==="vertical"?"flex-start":"center"};
`,ye=c.div.withConfig({shouldForwardProp:e=>!["size","active"].includes(e)})`
  width: ${({size:e})=>i[e].markSize};
  height: ${({size:e})=>i[e].markSize};
  border-radius: 50%;
  background: ${({active:e})=>e?r.primary.brand:r.grey.grey4};
  transition: ${u.transition};
`,ke=c.span.withConfig({shouldForwardProp:e=>!["size","orientation"].includes(e)})`
  font-size: ${({size:e})=>i[e].fontSize}rem;
  color: ${r.grey.grey4};
  margin-${({orientation:e})=>e==="vertical"?"left":"top"}: ${d.xs};
  white-space: nowrap;
`,we=c.div.withConfig({shouldForwardProp:e=>!["size","visible"].includes(e)})`
  position: absolute;
  top: -${u.tooltipOffset};
  transform: translateX(-50%) translateY(-100%);
  background: ${r.primary.black};
  color: ${r.primary.white};
  padding: ${d.xs} ${d.sm};
  border-radius: ${N.sm};
  font-size: ${({size:e})=>i[e].fontSize}rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: ${({visible:e})=>e?1:0};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: ${u.transition};
  animation: ${({visible:e})=>e?ce:"none"} 0.2s ease-out;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${r.primary.black};
  }
`,D=c.div.withConfig({shouldForwardProp:e=>!["size","position"].includes(e)})`
  font-size: ${({size:e})=>i[e].fontSize}rem;
  color: ${r.primary.white};
  font-weight: 600;
  text-align: center;
`,$e=c.div.withConfig({shouldForwardProp:e=>!["size","error"].includes(e)})`
  font-size: ${({size:e})=>i[e].fontSize}rem;
  color: ${({error:e})=>e?r.decorative.redRedWine:r.grey.grey4};
  margin-top: ${d.xs};
`,U=p.forwardRef(({value:e,min:t=s.min,max:o=s.max,step:h=s.step,size:a=s.size,variant:f=s.variant,orientation:m=s.orientation,disabled:v=s.disabled,loading:x=s.loading,showTooltip:y=s.showTooltip,tooltipFormatter:F,showValue:B=s.showValue,valueLabelPosition:S=s.valueLabelPosition,marks:P,showMarks:X=s.showMarks,trackColor:K,thumbColor:_,backgroundColor:j,animate:G=s.animate,length:J,label:q,helperText:H,error:k,required:Q=s.required,onChange:E,onChangeStart:z,onChangeEnd:b,className:Z,testId:R,...ee},re)=>{const[g,M]=p.useState(!1),[te,C]=p.useState(!1),V=(e-t)/(o-t)*100,ae=p.useCallback(n=>{const I=Number(n.target.value);E(I)},[E]),ie=p.useCallback(()=>{v||x||(M(!0),z==null||z(e))},[v,x,z,e]),ne=p.useCallback(()=>{g&&(M(!1),b==null||b(e))},[g,b,e]),oe=p.useCallback(()=>{y&&!v&&C(!0)},[y,v]),se=p.useCallback(()=>{y&&!g&&C(!1)},[y,g]);p.useEffect(()=>{if(g){const n=()=>{M(!1),C(!1),b==null||b(e)};return document.addEventListener("mouseup",n),()=>{document.removeEventListener("mouseup",n)}}},[g,b,e]);const W=n=>F?F(n):n.toString(),Y=P?P.map(n=>typeof n=="number"?{value:n}:n):[],le=n=>(n-t)/(o-t)*100,T=`slider-${R||Math.random().toString(36).substr(2,9)}`,L=`${T}-label`,A=`${T}-helper`;return l.createElement(he,{orientation:m,length:J,disabled:v,className:Z},q&&l.createElement(fe,{id:L,htmlFor:T,size:a,required:Q,error:!!k},q),B&&S==="top"&&l.createElement(D,{size:a,position:S},W(e)),l.createElement(be,{size:a,variant:f,orientation:m,loading:x,customTrackColor:K,customThumbColor:_,customBackgroundColor:j,style:{"--active-width":`${V}%`}},l.createElement("div",{style:{position:"absolute",top:0,left:0,width:`${V}%`,height:"100%",borderRadius:"inherit",zIndex:1,pointerEvents:"none"}}),l.createElement(ge,{ref:re,id:T,type:"range",min:t,max:o,step:h,value:e,size:a,animate:G,disabled:v||x,onChange:ae,onMouseDown:ie,onMouseUp:ne,onMouseEnter:oe,onMouseLeave:se,"aria-labelledby":q?L:void 0,"aria-describedby":H||k?A:void 0,"aria-valuemin":t,"aria-valuemax":o,"aria-valuenow":e,"aria-orientation":m,"data-testid":R,...ee}),y&&l.createElement(we,{size:a,visible:te||g,style:{left:`${V}%`}},W(e)),X&&Y.length>0&&l.createElement(ve,{orientation:m,size:a},Y.map((n,I)=>l.createElement("div",{key:I,style:{position:"absolute",[m==="vertical"?"top":"left"]:`${le(n.value)}%`,transform:m==="vertical"?"translateY(-50%)":"translateX(-50%)",display:"flex",flexDirection:m==="vertical"?"row":"column",alignItems:"center",...n.style}},l.createElement(ye,{size:a,active:n.value<=e}),n.label&&l.createElement(ke,{size:a,orientation:m},n.label))))),B&&S==="bottom"&&l.createElement(D,{size:a,position:S},W(e)),(H||k)&&l.createElement($e,{id:A,size:a,error:!!k},k||H))});U.displayName="Slider";U.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!0,tsType:{name:"number"},description:"Current value of the slider"},min:{required:!1,tsType:{name:"number"},description:`Minimum value
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value  
@default 100`,defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:`Step increment
@default 1`,defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the slider
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'default' 
| 'primary' 
| 'secondary' 
| 'success' 
| 'warning' 
| 'error' 
| 'brand'
| 'gradient'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'gradient'"}]},description:`Visual variant of the slider
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the slider
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the slider is disabled
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the slider is in loading state
@default false`,defaultValue:{value:"false",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:`Whether to show value tooltip on hover/drag
@default false`,defaultValue:{value:"false",computed:!1}},tooltipFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom tooltip formatter"},showValue:{required:!1,tsType:{name:"boolean"},description:`Whether to show current value label
@default false`,defaultValue:{value:"false",computed:!1}},valueLabelPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Position of the value label
@default 'top'`,defaultValue:{value:"'top'",computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"SliderMark[] | number[]",elements:[{name:"Array",elements:[{name:"SliderMark"}],raw:"SliderMark[]"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:"Marks to display on the slider track"},showMarks:{required:!1,tsType:{name:"boolean"},description:`Whether to show marks
@default false`,defaultValue:{value:"false",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"Custom track color (overrides variant)"},thumbColor:{required:!1,tsType:{name:"string"},description:"Custom thumb color (overrides variant)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Custom background color"},animate:{required:!1,tsType:{name:"boolean"},description:`Whether to animate transitions
@default true`,defaultValue:{value:"true",computed:!1}},length:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the slider (for horizontal) or height (for vertical)"},label:{required:!1,tsType:{name:"string"},description:"Label for the slider"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the slider"},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},required:{required:!1,tsType:{name:"boolean"},description:`Whether the slider is required
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},onChangeStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when dragging starts"},onChangeEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when dragging ends"},className:{required:!1,tsType:{name:"string"},description:"Custom className for additional styling"},testId:{required:!1,tsType:{name:"string"},description:"Test ID for automated testing"}},composes:["Omit"]};export{U as S};
