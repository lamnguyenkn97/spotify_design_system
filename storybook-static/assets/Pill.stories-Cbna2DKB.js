import{r as Be,R as e}from"./index-B-SYruCi.js";import{q as Oe,e as ke,b as Pe,f as xe,a as ze,y as $e,h as Ie,z as Ue,m as Ge,k as Xe}from"./index-Cy0hq6F7.js";import{F as q}from"./index.es-CQ4XmKgj.js";import{m as A,d as p,l as m,f as g}from"./GlobalStyles-Cn10x2UR.js";import{c as t}from"./colors-B2Ab1-XV.js";import{s as n}from"./spacing-D8bLMdSH.js";import{b as $}from"./radius-CVqooa3C.js";import{S as r}from"./Stack-BpWiWNDN.js";const R={xs:{padding:`${n.xs} ${n.sm}`,fontSize:g.sm,height:"1.5rem",iconSize:"xs",badgeSize:"12px"},sm:{padding:`${n.xs} ${n.md}`,fontSize:g.sm,height:"2rem",iconSize:"xs",badgeSize:"14px"},md:{padding:`${n.sm} ${n.md}`,fontSize:g.md,height:"2.5rem",iconSize:"sm",badgeSize:"16px"},lg:{padding:`${n.sm} ${n.lg}`,fontSize:g.lg,height:"3rem",iconSize:"sm",badgeSize:"18px"},xl:{padding:`${n.md} ${n.xl}`,fontSize:g.xl,height:"3.5rem",iconSize:"lg",badgeSize:"20px"}},je={default:{background:t.grey.grey1,backgroundHover:t.grey.grey2,backgroundActive:t.grey.grey3,backgroundSelected:t.primary.white,text:t.primary.white,textSelected:t.primary.black,border:"transparent",borderHover:t.grey.grey3},primary:{background:t.primary.brand,backgroundHover:t.decorative.evergreen,backgroundActive:"#0f7b3c",backgroundSelected:t.primary.brand,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"},secondary:{background:t.grey.grey2,backgroundHover:t.grey.grey3,backgroundActive:t.grey.grey4,backgroundSelected:t.grey.grey4,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"},success:{background:t.decorative.evergreen,backgroundHover:"#0f7b3c",backgroundActive:"#0f7b3c",backgroundSelected:t.decorative.evergreen,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"},warning:{background:t.decorative.mellowYellow,backgroundHover:"#d4ad00",backgroundActive:"#d4ad00",backgroundSelected:t.decorative.mellowYellow,text:t.primary.black,textSelected:t.primary.black,border:"transparent",borderHover:"transparent"},error:{background:t.decorative.redRedWine,backgroundHover:"#8b1538",backgroundActive:"#8b1538",backgroundSelected:t.decorative.redRedWine,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"},brand:{background:t.primary.brand,backgroundHover:t.decorative.evergreen,backgroundActive:"#0f7b3c",backgroundSelected:t.primary.brand,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"},outline:{background:"transparent",backgroundHover:t.grey.grey1,backgroundActive:t.grey.grey2,backgroundSelected:t.primary.white,text:t.primary.white,textSelected:t.primary.black,border:t.grey.grey4,borderHover:t.primary.white},ghost:{background:"transparent",backgroundHover:t.grey.grey0,backgroundActive:t.grey.grey1,backgroundSelected:t.grey.grey1,text:t.primary.white,textSelected:t.primary.white,border:"transparent",borderHover:"transparent"}},Ye={rounded:$.md,pill:$.xl,square:$.xs},c={transition:"all 0.2s ease-in-out",borderWidth:"1px",fontWeight:"600",iconSpacing:n.xs,badgeOffset:"2px",hoverOpacity:"0.9",activeScale:"0.98",loadingDuration:"1.5s"},o={size:"md",variant:"default",state:"default",shape:"pill",selected:!1,disabled:!1,loading:!1,dismissible:!1,fullWidth:!1,interactive:!0,animate:!1,animationDelay:0,badgePosition:"top-right"},Je=A`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Ke=A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Qe=A`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`,Ze=l=>{const i=R[l];return m`
    padding: ${i.padding};
    font-size: ${i.fontSize}rem;
    height: ${i.height};
  `},ea=(l,i,s,f)=>{const d=je[l];return s?m`
      background-color: ${s};
      color: ${f||t.primary.white};
      border-color: ${s};
    `:m`
    background-color: ${i?d.backgroundSelected:d.background};
    color: ${i?d.textSelected:d.text};
    border-color: ${d.border};
    
    &:hover:not(:disabled) {
      background-color: ${d.backgroundHover};
      border-color: ${d.borderHover};
      opacity: ${c.hoverOpacity};
    }
    
    &:active:not(:disabled) {
      background-color: ${d.backgroundActive};
      transform: scale(${c.activeScale});
    }
  `},aa=l=>m`
  border-radius: ${Ye[l]};
`,ta=(l,i,s)=>i?m`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `:s?m`
      cursor: wait;
      animation: ${Qe} ${c.loadingDuration} infinite;
    `:l==="pressed"?m`
      transform: scale(${c.activeScale});
    `:"",la=(l,i)=>l?m`
    animation: ${Je} 0.3s ease-out ${i}ms both;
  `:"",ra=p.div.withConfig({shouldForwardProp:l=>!["fullWidth","animate","animationDelay"].includes(l)})`
  position: relative;
  display: ${({fullWidth:l})=>l?"block":"inline-block"};
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  
  ${({animate:l,animationDelay:i})=>la(l,i)}
`,ia=p.button.withConfig({shouldForwardProp:l=>!["size","variant","pillState","shape","selected","fullWidth","interactive","customColor","customTextColor","loading"].includes(l)})`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${c.iconSpacing};
  border: ${c.borderWidth} solid;
  font-weight: ${c.fontWeight};
  text-align: center;
  white-space: nowrap;
  user-select: none;
  transition: ${c.transition};
  cursor: ${({interactive:l})=>l?"pointer":"default"};
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  text-decoration: none;
  outline: none;
  
  /* Size styles */
  ${({size:l})=>Ze(l)}
  
  /* Variant styles */
  ${({variant:l,selected:i,customColor:s,customTextColor:f})=>ea(l,i,s,f)}
  
  /* Shape styles */
  ${({shape:l})=>aa(l)}
  
  /* State styles */
  ${({pillState:l,disabled:i,loading:s})=>ta(l,i||!1,s||!1)}
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${t.primary.brand};
    outline-offset: 2px;
  }
  
  /* Ensure proper content alignment */
  & > * {
    flex-shrink: 0;
  }
`,O=p.span.withConfig({shouldForwardProp:l=>!["position","size"].includes(l)})`
  display: flex;
  align-items: center;
  justify-content: center;
`,U=p.div.withConfig({shouldForwardProp:l=>!["position","size"].includes(l)})`
  ${({position:l})=>l==="inline"?m`
        display: inline-flex;
        margin-left: ${n.xs};
      `:m`
      position: absolute;
      ${l.includes("top")?"top":"bottom"}: -${c.badgeOffset};
      ${l.includes("right")?"right":"left"}: -${c.badgeOffset};
      z-index: 1;
    `}
`,G=p.span.withConfig({shouldForwardProp:l=>!["size"].includes(l)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({size:l})=>R[l].badgeSize};
  height: ${({size:l})=>R[l].badgeSize};
  padding: 0 ${n.xs};
  background-color: ${t.decorative.redRedWine};
  color: ${t.primary.white};
  border-radius: ${$.xl};
  font-size: ${g.sm}rem;
  font-weight: 600;
  line-height: 1;
`,na=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  margin-left: ${n.xs};
  opacity: 0.7;
  transition: ${c.transition};
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    opacity: 1;
  }
`,oa=p.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Ke} 1s linear infinite;
`,sa={xs:"xs",sm:"xs",md:"sm",lg:"sm",xl:"lg"},a=Be.forwardRef(({label:l,size:i=o.size,variant:s=o.variant,state:f=o.state,shape:d=o.shape,selected:V=o.selected,disabled:I=o.disabled,loading:u=o.loading,leftIcon:L,rightIcon:_,dismissible:F=o.dismissible,onDismiss:T,badge:z,badgePosition:D=o.badgePosition,fullWidth:N=o.fullWidth,interactive:B=o.interactive,customColor:Te,customTextColor:De,tooltip:We,animate:Ce=o.animate,animationDelay:He=o.animationDelay,children:qe,className:Re,testId:Ae,onClick:W,...Me},Ve)=>{const Le=I?"disabled":u?"loading":V?"selected":f,_e=H=>{H.stopPropagation(),T==null||T()},Fe=H=>{!B||I||u||W==null||W(H)},Ne=qe||l,C=sa[i]||"sm";return e.createElement(ra,{fullWidth:N,animate:Ce,animationDelay:He,className:Re,title:We},e.createElement(ia,{ref:Ve,size:i,variant:s,pillState:Le,shape:d,selected:V,fullWidth:N,interactive:B,customColor:Te,customTextColor:De,disabled:I,loading:u,onClick:Fe,"data-testid":Ae,...Me},L&&!u&&e.createElement(O,{position:"left",size:i},e.createElement(q,{icon:L,size:C})),u&&e.createElement(oa,null),Ne,_&&!F&&!u&&e.createElement(O,{position:"right",size:i},e.createElement(q,{icon:_,size:C})),F&&!u&&e.createElement(na,{onClick:_e,"aria-label":"Remove",tabIndex:-1},e.createElement(q,{icon:Oe,size:C}))),z&&D!=="inline"&&e.createElement(U,{position:D,size:i},e.createElement(G,{size:i},z)),z&&D==="inline"&&e.createElement(U,{position:"inline",size:i},e.createElement(G,{size:i},z)))});a.displayName="Pill";a.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{label:{required:!0,tsType:{name:"string"},description:"Text content of the pill"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the pill
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'default' 
| 'primary' 
| 'secondary' 
| 'success' 
| 'warning' 
| 'error' 
| 'brand' 
| 'outline'
| 'ghost'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:`Visual variant of the pill
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'selected' | 'disabled' | 'loading' | 'pressed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'pressed'"}]},description:`Current state of the pill
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'pill' | 'square'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'pill'"},{name:"literal",value:"'square'"}]},description:`Shape/border radius style
@default 'pill'`,defaultValue:{value:"'pill'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:`Whether the pill is selected
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the pill is disabled
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the pill is in loading state
@default false`,defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"IconProp"},description:"Icon to display on the left side"},rightIcon:{required:!1,tsType:{name:"IconProp"},description:"Icon to display on the right side"},dismissible:{required:!1,tsType:{name:"boolean"},description:`Whether the pill is dismissible (shows X icon)
@default false`,defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when dismiss button is clicked"},badge:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Badge content to display (number or text)"},badgePosition:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'inline'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'inline'"}]},description:`Position of the badge
@default 'top-right'`,defaultValue:{value:"'top-right'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Whether the pill takes full width
@default false`,defaultValue:{value:"false",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`Whether the pill is interactive (clickable)
@default true`,defaultValue:{value:"true",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:"Custom background color (overrides variant)"},customTextColor:{required:!1,tsType:{name:"string"},description:"Custom text color"},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text on hover"},animate:{required:!1,tsType:{name:"boolean"},description:`Whether to animate on mount
@default false`,defaultValue:{value:"false",computed:!1}},animationDelay:{required:!1,tsType:{name:"number"},description:`Animation delay in milliseconds
@default 0`,defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Custom className for additional styling"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (alternative to label)"},testId:{required:!1,tsType:{name:"string"},description:"Test ID for automated testing"}},composes:["Omit"]};const va={title:"Atoms/Pill",component:a,parameters:{docs:{description:{component:"A versatile pill component with multiple variants, sizes, and interactive features."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","brand","outline","ghost"]},state:{control:{type:"select"},options:["default","selected","disabled","loading","pressed"]},shape:{control:{type:"select"},options:["rounded","pill","square"]},badgePosition:{control:{type:"select"},options:["top-right","top-left","inline"]}}},M=l=>e.createElement(a,{...l}),b=M.bind({});b.args={label:"Music"};const v=M.bind({});v.args={label:"All",selected:!0};const h=()=>e.createElement(r,{direction:"column",spacing:"lg"},e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Extra Small",size:"xs"}),e.createElement(a,{label:"Small",size:"sm"}),e.createElement(a,{label:"Medium",size:"md"}),e.createElement(a,{label:"Large",size:"lg"}),e.createElement(a,{label:"Extra Large",size:"xl"})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"XS Selected",size:"xs",selected:!0}),e.createElement(a,{label:"SM Selected",size:"sm",selected:!0}),e.createElement(a,{label:"MD Selected",size:"md",selected:!0}),e.createElement(a,{label:"LG Selected",size:"lg",selected:!0}),e.createElement(a,{label:"XL Selected",size:"xl",selected:!0}))),y=()=>e.createElement(r,{direction:"column",spacing:"lg"},e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Default",variant:"default"}),e.createElement(a,{label:"Primary",variant:"primary"}),e.createElement(a,{label:"Secondary",variant:"secondary"}),e.createElement(a,{label:"Success",variant:"success"}),e.createElement(a,{label:"Warning",variant:"warning"})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Error",variant:"error"}),e.createElement(a,{label:"Brand",variant:"brand"}),e.createElement(a,{label:"Outline",variant:"outline"}),e.createElement(a,{label:"Ghost",variant:"ghost"})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Default Selected",variant:"default",selected:!0}),e.createElement(a,{label:"Primary Selected",variant:"primary",selected:!0}),e.createElement(a,{label:"Outline Selected",variant:"outline",selected:!0}),e.createElement(a,{label:"Ghost Selected",variant:"ghost",selected:!0}))),S=()=>e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Rounded",shape:"rounded"}),e.createElement(a,{label:"Pill",shape:"pill"}),e.createElement(a,{label:"Square",shape:"square"})),E=()=>e.createElement(r,{direction:"column",spacing:"lg"},e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Music",leftIcon:ke}),e.createElement(a,{label:"Favorite",leftIcon:Pe,variant:"error"}),e.createElement(a,{label:"Play",rightIcon:xe,variant:"primary"}),e.createElement(a,{label:"Download",leftIcon:ze,rightIcon:$e,variant:"success"})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"User",leftIcon:Ie,selected:!0}),e.createElement(a,{label:"Tagged",rightIcon:Ue,variant:"outline"}),e.createElement(a,{label:"Home & Search",leftIcon:Ge,rightIcon:Xe,variant:"ghost"}))),w=()=>e.createElement(r,{direction:"column",spacing:"lg"},e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Default"}),e.createElement(a,{label:"Selected",selected:!0}),e.createElement(a,{label:"Disabled",disabled:!0}),e.createElement(a,{label:"Loading",loading:!0})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Dismissible",dismissible:!0,onDismiss:()=>alert("Dismissed!")}),e.createElement(a,{label:"With Badge",badge:"5"}),e.createElement(a,{label:"Inline Badge",badge:"NEW",badgePosition:"inline"}),e.createElement(a,{label:"Non-interactive",interactive:!1}))),k=()=>e.createElement(r,{direction:"column",spacing:"lg"},e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Custom Colors",customColor:"#ff6b35",customTextColor:"#ffffff"}),e.createElement(a,{label:"With Tooltip",tooltip:"This is a helpful tooltip",variant:"primary"}),e.createElement(a,{label:"Animated",animate:!0,variant:"success",leftIcon:$e})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Full Width",fullWidth:!0,variant:"brand",size:"lg"})),e.createElement(r,{direction:"row",spacing:"md",align:"center"},e.createElement(a,{label:"Complex Example",variant:"primary",size:"lg",leftIcon:ke,badge:"3",dismissible:!0,onDismiss:()=>alert("Removed!"),onClick:()=>alert("Clicked!")}))),P=()=>e.createElement(r,{direction:"column",spacing:"xl"},e.createElement(r,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Music Genres"),e.createElement(r,{direction:"row",spacing:"sm",wrap:"wrap"},e.createElement(a,{label:"Pop",variant:"default"}),e.createElement(a,{label:"Rock",variant:"default",selected:!0}),e.createElement(a,{label:"Hip-Hop",variant:"default"}),e.createElement(a,{label:"Electronic",variant:"default"}),e.createElement(a,{label:"Jazz",variant:"default"}),e.createElement(a,{label:"Classical",variant:"default"}))),e.createElement(r,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"User Preferences"),e.createElement(r,{direction:"row",spacing:"sm",wrap:"wrap"},e.createElement(a,{label:"Liked Songs",leftIcon:Pe,variant:"error",badge:"247"}),e.createElement(a,{label:"Recently Played",leftIcon:xe,variant:"success"}),e.createElement(a,{label:"Downloads",leftIcon:ze,variant:"primary",badge:"12"}),e.createElement(a,{label:"My Playlists",leftIcon:Ie,variant:"outline"}))),e.createElement(r,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Active Filters"),e.createElement(r,{direction:"row",spacing:"sm",wrap:"wrap"},e.createElement(a,{label:"2020s",dismissible:!0,variant:"brand",onDismiss:()=>console.log("Remove 2020s filter")}),e.createElement(a,{label:"Upbeat",dismissible:!0,variant:"success",onDismiss:()=>console.log("Remove upbeat filter")}),e.createElement(a,{label:"Popular",dismissible:!0,variant:"warning",badge:"Hot",badgePosition:"inline",onDismiss:()=>console.log("Remove popular filter")}))),e.createElement(r,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Loading Content"),e.createElement(r,{direction:"row",spacing:"sm",wrap:"wrap"},e.createElement(a,{label:"Discovering...",loading:!0,variant:"primary"}),e.createElement(a,{label:"Updating Playlist",loading:!0,variant:"success"}),e.createElement(a,{label:"Syncing",loading:!0,variant:"outline"})))),x=M.bind({});x.args={label:"Interactive Pill",size:"md",variant:"primary",shape:"pill",selected:!1,disabled:!1,loading:!1,dismissible:!1,fullWidth:!1,interactive:!0,animate:!1,badge:"",badgePosition:"top-right",tooltip:"Click me!"};h.__docgenInfo={description:"",methods:[],displayName:"SizeVariations"};y.__docgenInfo={description:"",methods:[],displayName:"VariantShowcase"};S.__docgenInfo={description:"",methods:[],displayName:"ShapeOptions"};E.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};w.__docgenInfo={description:"",methods:[],displayName:"StatesAndInteractions"};k.__docgenInfo={description:"",methods:[],displayName:"AdvancedFeatures"};P.__docgenInfo={description:"",methods:[],displayName:"RealWorldExamples"};var X,j,Y;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Pill {...args} />",...(Y=(j=b.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:"args => <Pill {...args} />",...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Extra Small" size="xs" />
      <Pill label="Small" size="sm" />
      <Pill label="Medium" size="md" />
      <Pill label="Large" size="lg" />
      <Pill label="Extra Large" size="xl" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="XS Selected" size="xs" selected />
      <Pill label="SM Selected" size="sm" selected />
      <Pill label="MD Selected" size="md" selected />
      <Pill label="LG Selected" size="lg" selected />
      <Pill label="XL Selected" size="xl" selected />
    </Stack>
  </Stack>`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`() => <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default" variant="default" />
      <Pill label="Primary" variant="primary" />
      <Pill label="Secondary" variant="secondary" />
      <Pill label="Success" variant="success" />
      <Pill label="Warning" variant="warning" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Error" variant="error" />
      <Pill label="Brand" variant="brand" />
      <Pill label="Outline" variant="outline" />
      <Pill label="Ghost" variant="ghost" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default Selected" variant="default" selected />
      <Pill label="Primary Selected" variant="primary" selected />
      <Pill label="Outline Selected" variant="outline" selected />
      <Pill label="Ghost Selected" variant="ghost" selected />
    </Stack>
  </Stack>`,...(re=(le=y.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ie,ne,oe;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => <Stack direction="row" spacing="md" align="center">
    <Pill label="Rounded" shape="rounded" />
    <Pill label="Pill" shape="pill" />
    <Pill label="Square" shape="square" />
  </Stack>`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ce,de;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`() => <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Music" leftIcon={faMusic} />
      <Pill label="Favorite" leftIcon={faHeart} variant="error" />
      <Pill label="Play" rightIcon={faPlay} variant="primary" />
      <Pill label="Download" leftIcon={faDownload} rightIcon={faStar} variant="success" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="User" leftIcon={faUser} selected />
      <Pill label="Tagged" rightIcon={faTag} variant="outline" />
      <Pill label="Home & Search" leftIcon={faHome} rightIcon={faSearch} variant="ghost" />
    </Stack>
  </Stack>`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`() => <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default" />
      <Pill label="Selected" selected />
      <Pill label="Disabled" disabled />
      <Pill label="Loading" loading />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Dismissible" dismissible onDismiss={() => alert('Dismissed!')} />
      <Pill label="With Badge" badge="5" />
      <Pill label="Inline Badge" badge="NEW" badgePosition="inline" />
      <Pill label="Non-interactive" interactive={false} />
    </Stack>
  </Stack>`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,fe,be;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Custom Colors" customColor="#ff6b35" customTextColor="#ffffff" />
      <Pill label="With Tooltip" tooltip="This is a helpful tooltip" variant="primary" />
      <Pill label="Animated" animate variant="success" leftIcon={faStar} />
    </Stack>
    
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Full Width" fullWidth variant="brand" size="lg" />
    </Stack>
    
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Complex Example" variant="primary" size="lg" leftIcon={faMusic} badge="3" dismissible onDismiss={() => alert('Removed!')} onClick={() => alert('Clicked!')} />
    </Stack>
  </Stack>`,...(be=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ve,he,ye;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`() => <Stack direction="column" spacing="xl">
    {/* Genre Tags */}
    <Stack direction="column" spacing="sm">
      <h4 style={{
      margin: 0,
      color: '#ffffff'
    }}>Music Genres</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Pop" variant="default" />
        <Pill label="Rock" variant="default" selected />
        <Pill label="Hip-Hop" variant="default" />
        <Pill label="Electronic" variant="default" />
        <Pill label="Jazz" variant="default" />
        <Pill label="Classical" variant="default" />
      </Stack>
    </Stack>
    
    {/* User Preferences */}
    <Stack direction="column" spacing="sm">
      <h4 style={{
      margin: 0,
      color: '#ffffff'
    }}>User Preferences</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Liked Songs" leftIcon={faHeart} variant="error" badge="247" />
        <Pill label="Recently Played" leftIcon={faPlay} variant="success" />
        <Pill label="Downloads" leftIcon={faDownload} variant="primary" badge="12" />
        <Pill label="My Playlists" leftIcon={faUser} variant="outline" />
      </Stack>
    </Stack>
    
    {/* Filter Tags */}
    <Stack direction="column" spacing="sm">
      <h4 style={{
      margin: 0,
      color: '#ffffff'
    }}>Active Filters</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="2020s" dismissible variant="brand" onDismiss={() => console.log('Remove 2020s filter')} />
        <Pill label="Upbeat" dismissible variant="success" onDismiss={() => console.log('Remove upbeat filter')} />
        <Pill label="Popular" dismissible variant="warning" badge="Hot" badgePosition="inline" onDismiss={() => console.log('Remove popular filter')} />
      </Stack>
    </Stack>
    
    {/* Loading States */}
    <Stack direction="column" spacing="sm">
      <h4 style={{
      margin: 0,
      color: '#ffffff'
    }}>Loading Content</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Discovering..." loading variant="primary" />
        <Pill label="Updating Playlist" loading variant="success" />
        <Pill label="Syncing" loading variant="outline" />
      </Stack>
    </Stack>
  </Stack>`,...(ye=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Se,Ee,we;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:"args => <Pill {...args} />",...(we=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};const ha=["Default","Selected","SizeVariations","VariantShowcase","ShapeOptions","WithIcons","StatesAndInteractions","AdvancedFeatures","RealWorldExamples","InteractivePlayground"];export{k as AdvancedFeatures,b as Default,x as InteractivePlayground,P as RealWorldExamples,v as Selected,S as ShapeOptions,h as SizeVariations,w as StatesAndInteractions,y as VariantShowcase,E as WithIcons,ha as __namedExportsOrder,va as default};
