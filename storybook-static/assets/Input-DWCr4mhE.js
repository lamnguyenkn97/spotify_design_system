import{r as v,R as s}from"./index-B-SYruCi.js";import{F as M}from"./index.es-CQ4XmKgj.js";import{q as de,u as ce,v as ue,k as me,w as fe,x as pe,p as ge}from"./index-Cy0hq6F7.js";import{d as m,f as u,l as n}from"./GlobalStyles-Cn10x2UR.js";import{c as r}from"./colors-B2Ab1-XV.js";import{s as a}from"./spacing-D8bLMdSH.js";import{b as he}from"./radius-CVqooa3C.js";const b={xs:{padding:`${a.xs} ${a.sm}`,fontSize:u.sm,height:"2rem",iconSize:"xs"},sm:{padding:`${a.sm} ${a.md}`,fontSize:u.sm,height:"2.5rem",iconSize:"sm"},md:{padding:`${a.sm} ${a.md}`,fontSize:u.md,height:"3rem",iconSize:"sm"},lg:{padding:`${a.md} ${a.lg}`,fontSize:u.lg,height:"3.5rem",iconSize:"lg"},xl:{padding:`${a.lg} ${a.xl}`,fontSize:u.xl,height:"4rem",iconSize:"lg"}},y={default:{border:r.grey.grey2,background:r.grey.grey0,text:r.primary.white,placeholder:r.grey.grey6,icon:r.grey.grey5,focus:r.primary.brand},error:{border:r.decorative.redRedWine,background:r.grey.grey0,text:r.primary.white,placeholder:r.grey.grey6,icon:r.decorative.redRedWine,focus:r.decorative.redRedWine},success:{border:r.decorative.evergreen,background:r.grey.grey0,text:r.primary.white,placeholder:r.grey.grey6,icon:r.decorative.evergreen,focus:r.decorative.evergreen},warning:{border:r.decorative.mellowYellow,background:r.grey.grey0,text:r.primary.white,placeholder:r.grey.grey6,icon:r.decorative.mellowYellow,focus:r.decorative.mellowYellow},disabled:{border:r.grey.grey1,background:r.grey.grey0,text:r.grey.grey4,placeholder:r.grey.grey3,icon:r.grey.grey3,focus:r.grey.grey1}},l={borderWidth:"1px",borderStyle:"solid",borderRadius:he.md,transition:"all 0.2s ease-in-out",iconSpacing:a.sm},c={size:"md",variant:"default",state:"default",iconSize:"sm",fullWidth:!1,clearable:!1,showPasswordToggle:!0,loading:!1},ye=e=>{const t=b[e];return n`
    padding: ${t.padding};
    font-size: ${t.fontSize}rem;
    min-height: ${t.height};
  `},we=e=>{const t=y[e];return n`
    border-color: ${t.border};
    background-color: ${t.background};
    color: ${t.text};

    &::placeholder {
      color: ${t.placeholder};
    }

    &:focus {
      border-color: ${t.focus};
      box-shadow: 0 0 0 2px ${t.focus}25;
      outline: none;
    }

    ${e==="disabled"&&n`
      cursor: not-allowed;
      pointer-events: none;
    `}
  `},ve=m.div.withConfig({shouldForwardProp:e=>!["fullWidth"].includes(e)})`
  display: flex;
  flex-direction: column;
  gap: ${a.xs};
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  max-width: ${({fullWidth:e})=>e?"100%":"320px"};
`,be=m.label`
  font-size: ${u.sm}rem;
  font-weight: 500;
  color: ${r.primary.white};
  margin-bottom: ${a.xs};
`,$e=m.div.withConfig({shouldForwardProp:e=>!["size","state","hasLeftIcon","hasRightIcon"].includes(e)})`
  position: relative;
  display: flex;
  align-items: center;
  border: ${l.borderWidth} ${l.borderStyle};
  border-radius: ${l.borderRadius};
  transition: ${l.transition};

  ${({state:e})=>we(e)};

  ${({hasLeftIcon:e,size:t})=>e&&n`
      padding-left: calc(
        ${b[t].iconSize==="lg"?"1.5rem":"1.25rem"} +
          ${l.iconSpacing}
      );
    `}

  ${({hasRightIcon:e,size:t})=>e&&n`
      padding-right: calc(
        ${b[t].iconSize==="lg"?"1.5rem":"1.25rem"} +
          ${l.iconSpacing}
      );
    `}
  
  &:hover:not(:focus-within) {
    border-color: ${({state:e})=>y[e].focus}66;
  }
`,xe=m.input.withConfig({shouldForwardProp:e=>!["size","state"].includes(e)})`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;

  ${({size:e})=>ye(e)};
  ${({state:e})=>n`
    color: ${y[e].text};

    &::placeholder {
      color: ${y[e].placeholder};
    }
  `}

  &:disabled {
    cursor: not-allowed;
  }
`,_=m.div.withConfig({shouldForwardProp:e=>!["position","size","clickable"].includes(e)})`
  position: absolute;
  ${({position:e})=>e}: ${l.iconSpacing};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${({clickable:e})=>e&&n`
      cursor: pointer;
      transition: ${l.transition};

      &:hover {
        opacity: 0.8;
      }
    `}
`,Se=m.div.withConfig({shouldForwardProp:e=>!["messageType"].includes(e)})`
  font-size: ${u.sm}rem;
  margin-top: ${a.xs};

  ${({messageType:e})=>{switch(e){case"error":return n`
          color: ${r.decorative.redRedWine};
        `;case"success":return n`
          color: ${r.decorative.evergreen};
        `;case"warning":return n`
          color: ${r.decorative.mellowYellow};
        `;case"helper":default:return n`
          color: ${r.grey.grey6};
        `}}}
`,ze=m.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${r.grey.grey3};
  border-top: 2px solid ${r.primary.brand};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Ie={xs:"xs",sm:"sm",md:"1x",lg:"lg",xl:"xl"},Te=(e,t)=>{switch(e){case"password":return t?"text":"password";case"email":return"email";case"number":return"number";case"url":return"url";case"search":default:return"text"}},ke=e=>{switch(e){case"search":return me;case"email":return;default:return}},qe=e=>{switch(e){case"error":return ge;case"success":return pe;case"warning":return fe;default:return}},j=v.forwardRef(({size:e=c.size,variant:t=c.variant,state:H=c.state,label:E,helperText:W,errorMessage:R,successMessage:P,warningMessage:C,leftIcon:O,rightIcon:X,iconSize:D,fullWidth:G=c.fullWidth,clearable:J=c.clearable,onClear:$,onSearch:V,showPasswordToggle:Q=c.showPasswordToggle,loading:U=c.loading,className:Z,value:w,onChange:p,onKeyDown:x,disabled:S,...K},ee)=>{const[re,F]=v.useState(""),[z,te]=v.useState(!1),L=v.useId(),I=w!==void 0?w:re,ae=!!I,d=S?"disabled":H,T=O||ke(t),B=qe(d),k=t==="password"&&Q,q=J&&ae&&!S,ne=!!B,g=U;let o=X;g?o=void 0:ne?o=B:q?o=de:k&&(o=z?ce:ue);let f="",h="helper";d==="error"&&R?(f=R,h="error"):d==="success"&&P?(f=P,h="success"):d==="warning"&&C?(f=C,h="warning"):W&&(f=W,h="helper");const se=i=>{const A=i.target.value;w===void 0&&F(A),p==null||p(i)},ie=i=>{i.key==="Enter"&&t==="search"&&V&&V(I),x==null||x(i)},oe=()=>{if(!g){if(k)te(!z);else if(q){const i="";w===void 0&&F(i),$==null||$(),p&&p({target:{value:i},currentTarget:{value:i}})}}},le=D||b[e].iconSize,N=Ie[le]||"1x",Y=y[d].icon;return s.createElement(ve,{fullWidth:G,className:Z},E&&s.createElement(be,{htmlFor:L},E),s.createElement($e,{size:e,state:d,hasLeftIcon:!!T,hasRightIcon:!!o||g},T&&s.createElement(_,{position:"left",size:e},s.createElement(M,{icon:T,size:N,color:Y})),s.createElement(xe,{ref:ee,id:L,type:Te(t,z),size:e,state:d,value:I,onChange:se,onKeyDown:ie,disabled:S,...K}),(o||g)&&s.createElement(_,{position:"right",size:e,clickable:k||q,onClick:oe},g?s.createElement(ze,null):o?s.createElement(M,{icon:o,size:N,color:Y}):null)),f&&s.createElement(Se,{messageType:h},f))});j.displayName="Input";j.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the input field
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'search' | 'password' | 'number' | 'email' | 'url'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'search'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'email'"},{name:"literal",value:"'url'"}]},description:`Variant of the input field
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success' | 'warning' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'disabled'"}]},description:`Visual state of the input
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for the input"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input"},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},successMessage:{required:!1,tsType:{name:"string"},description:"Success message to display"},warningMessage:{required:!1,tsType:{name:"string"},description:"Warning message to display"},leftIcon:{required:!1,tsType:{name:"IconProp"},description:"Icon to display on the left side"},rightIcon:{required:!1,tsType:{name:"IconProp"},description:"Icon to display on the right side"},iconSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the icons
@default 'sm'`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Whether the input takes full width
@default false`,defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:`Whether to show a clear button (X) when input has value
@default false`,defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when clear button is clicked"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback for search functionality (for search variant)"},showPasswordToggle:{required:!1,tsType:{name:"boolean"},description:`Whether to show password toggle (for password variant)
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for styling"},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{j as I,y as a,b as s};
