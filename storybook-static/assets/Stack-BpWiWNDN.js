import{r as z,R as B}from"./index-B-SYruCi.js";import{d as E,l as n}from"./GlobalStyles-Cn10x2UR.js";import{c as t}from"./colors-B2Ab1-XV.js";import{s as r}from"./spacing-D8bLMdSH.js";import{b as i}from"./radius-CVqooa3C.js";const o={none:"0",xs:r.xs,sm:r.sm,md:r.md,lg:r.lg,xl:r.xl,xxl:"48px"},W={none:"0",xs:i.xs,sm:i.sm,md:i.md,lg:i.lg,xl:i.xl,full:"50%"},F={auto:"auto",full:"100%",fit:"fit-content",min:"min-content",max:"max-content"},H={transition:"all 0.2s ease-in-out"},a={direction:"column",spacing:"md",align:"stretch",justify:"start",wrap:"nowrap",grow:!1,shrink:!0,centered:!1,scrollable:!1},s=e=>e?o[e]||e:o.md,u=e=>e===void 0?"auto":typeof e=="number"?`${e}px`:F[e]||e,I=e=>e?W[e]||e:"0",_=(e,l)=>n`
  flex-grow: ${e?1:0};
  flex-shrink: ${l?1:0};
`,D=e=>e?n`
    margin-left: auto;
    margin-right: auto;
  `:"",J=e=>e?n`
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: ${t.grey.grey4} ${t.grey.grey1};
    
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${t.grey.grey1};
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${t.grey.grey4};
      border-radius: 3px;
      
      &:hover {
        background: ${t.grey.grey5};
      }
    }
  `:"",L=E.div.withConfig({shouldForwardProp:e=>!["direction","spacing","align","justify","wrap","width","height","grow","shrink","minWidth","maxWidth","minHeight","maxHeight","scrollable","padding","margin","centered","backgroundColor","borderRadius"].includes(e)})`
  /* Base flex layout */
  display: flex;
  flex-direction: ${({direction:e})=>e||a.direction};
  align-items: ${({align:e})=>e||a.align};
  justify-content: ${({justify:e})=>e||a.justify};
  flex-wrap: ${({wrap:e})=>e||a.wrap};
  gap: ${({spacing:e})=>s(e)};
  
  /* Size constraints */
  width: ${({width:e})=>u(e)};
  height: ${({height:e})=>u(e)};
  
  ${({minWidth:e})=>e&&n`min-width: ${typeof e=="number"?`${e}px`:e};`}
  ${({maxWidth:e})=>e&&n`max-width: ${typeof e=="number"?`${e}px`:e};`}
  ${({minHeight:e})=>e&&n`min-height: ${typeof e=="number"?`${e}px`:e};`}
  ${({maxHeight:e})=>e&&n`max-height: ${typeof e=="number"?`${e}px`:e};`}
  
  /* Flex behavior */
  ${({grow:e=a.grow,shrink:l=a.shrink})=>_(e,l)}
  
  /* Spacing */
  ${({padding:e})=>e&&n`padding: ${s(e)};`}
  ${({margin:e})=>e&&n`margin: ${s(e)};`}
  
  /* Centering */
  ${({centered:e=a.centered})=>D(e)}
  
  /* Background and border */
  ${({backgroundColor:e})=>e&&n`background-color: ${e};`}
  ${({borderRadius:e})=>e&&n`border-radius: ${I(e)};`}
  
  /* Scrollable behavior */
  ${({scrollable:e=a.scrollable})=>J(e)}
  
  /* Smooth transitions for interactive elements */
  transition: ${H.transition};
  
  /* Ensure proper box-sizing */
  box-sizing: border-box;
  
  /* Handle edge cases */
  min-width: 0; /* Prevent flex items from overflowing */
  min-height: 0; /* Prevent flex items from overflowing */
`,m=z.forwardRef(({direction:e=a.direction,spacing:l=a.spacing,align:d=a.align,justify:c=a.justify,wrap:f=a.wrap,as:g="div",width:p,height:v,grow:h=a.grow,shrink:x=a.shrink,minWidth:w,maxWidth:b,minHeight:y,maxHeight:$,scrollable:k=a.scrollable,padding:T,margin:S,centered:q=a.centered,backgroundColor:R,borderRadius:V,children:j,className:C,...M},N)=>B.createElement(L,{ref:N,as:g,direction:e,spacing:l,align:d,justify:c,wrap:f,width:p,height:v,grow:h,shrink:x,minWidth:w,maxWidth:b,minHeight:y,maxHeight:$,scrollable:k,padding:T,margin:S,centered:q,backgroundColor:R,borderRadius:V,className:C,...M},j));m.displayName="Stack";m.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}]},description:`The direction of the flex layout
@default 'column'`,defaultValue:{value:"'column'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:`The spacing between stack items using design tokens
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:`How to align items along the cross axis
@default 'stretch'`,defaultValue:{value:"'stretch'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:`| 'start' 
| 'center' 
| 'end' 
| 'space-between' 
| 'space-around' 
| 'space-evenly'
| 'stretch'`,elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'stretch'"}]},description:`How to justify items along the main axis
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:`Whether items should wrap
@default 'nowrap'`,defaultValue:{value:"'nowrap'",computed:!1}},as:{required:!1,tsType:{name:"React.JSX.IntrinsicElements"},description:`The HTML element to render as
@default 'div'`,defaultValue:{value:"'div'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"StackSize | string | number",elements:[{name:"union",raw:"'auto' | 'full' | 'fit' | 'min' | 'max'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'full'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'min'"},{name:"literal",value:"'max'"}]},{name:"string"},{name:"number"}]},description:`Width sizing behavior
@default 'auto'`},height:{required:!1,tsType:{name:"union",raw:"StackSize | string | number",elements:[{name:"union",raw:"'auto' | 'full' | 'fit' | 'min' | 'max'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'full'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'min'"},{name:"literal",value:"'max'"}]},{name:"string"},{name:"number"}]},description:`Height sizing behavior
@default 'auto'`},grow:{required:!1,tsType:{name:"boolean"},description:`Whether to grow to fill available space
@default false`,defaultValue:{value:"false",computed:!1}},shrink:{required:!1,tsType:{name:"boolean"},description:`Whether to shrink when needed
@default true`,defaultValue:{value:"true",computed:!1}},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Minimum width constraint"},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum width constraint"},minHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Minimum height constraint"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height constraint"},scrollable:{required:!1,tsType:{name:"boolean"},description:`Whether to create a scrollable container
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"StackSpacing | string",elements:[{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},{name:"string"}]},description:"Padding around the entire stack"},margin:{required:!1,tsType:{name:"union",raw:"StackSpacing | string",elements:[{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},{name:"string"}]},description:"Margin around the entire stack"},centered:{required:!1,tsType:{name:"boolean"},description:`Whether to center the stack within its container
@default false`,defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color (design token or custom)"},borderRadius:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"},{name:"string"}]},description:"Border radius using design tokens or custom value"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements"},className:{required:!1,tsType:{name:"string"},description:"Custom className for additional styling"}},composes:["Omit"]};export{m as S,W as b,o as s};
