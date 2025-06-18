import{r as R,R as u}from"./index-B-SYruCi.js";import{m as T,d as q,l as a,f as l,a as s}from"./GlobalStyles-Cn10x2UR.js";import{c as r}from"./colors-B2Ab1-XV.js";import{s as t}from"./spacing-D8bLMdSH.js";import{b as S}from"./radius-CVqooa3C.js";var o=(e=>(e.Primary="primary",e.Secondary="secondary",e.White="white",e.FlatWhite="flat-white",e.Text="text",e))(o||{}),i=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(i||{});const E=T`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,M=e=>{switch(e){case i.Small:return a`
        padding: ${t.xs} ${t.sm};
        font-size: ${l.sm}rem;
        font-family: ${s.circular.medium}, sans-serif;
        min-height: 32px;
      `;case i.Large:return a`
        padding: ${t.md} ${t.lg};
        font-size: ${l.lg}rem;
        font-family: ${s.circular.bold}, sans-serif;
        min-height: 48px;
      `;case i.Medium:default:return a`
        padding: ${t.sm} ${t.md};
        font-size: ${l.md}rem;
        font-family: ${s.circular.medium}, sans-serif;
        min-height: 40px;
      `}},z=e=>{switch(e){case o.Secondary:return a`
        background-color: ${r.primary.black};
        color: ${r.grey.grey6};
        border: 1px solid ${r.grey.grey3};
        &:hover:not(:disabled) {
          color: ${r.primary.white};
          border-color: ${r.primary.white};
          background-color: ${r.grey.grey1};
        }
        &:active:not(:disabled) {
          background-color: ${r.grey.grey2};
        }
      `;case o.White:return a`
        background-color: ${r.primary.white};
        color: ${r.primary.black};
        border: 1px solid ${r.primary.white};
        &:hover:not(:disabled) {
          background-color: ${r.grey.grey6};
        }
        &:active:not(:disabled) {
          background-color: ${r.grey.grey5};
        }
      `;case o.FlatWhite:return a`
        background-color: transparent;
        color: ${r.primary.white};
        border: 1px solid ${r.grey.grey6};
        &:hover:not(:disabled) {
          border-color: ${r.primary.white};
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:active:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `;case o.Text:return a`
        background-color: transparent;
        color: ${r.grey.grey6};
        border: none;
        padding: ${t.xs};
        &:hover:not(:disabled) {
          color: ${r.primary.white};
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:active:not(:disabled) {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `;case o.Primary:default:return a`
        background-color: ${r.primary.brand};
        color: ${r.primary.black};
        border: 1px solid ${r.primary.brand};
        &:hover:not(:disabled) {
          background-color: ${r.primary.brandHighlight};
          border-color: ${r.primary.brandHighlight};
        }
        &:active:not(:disabled) {
          background-color: ${r.primary.brand};
          transform: scale(0.98);
        }
      `}},N=q.button`
  ${e=>M(e.size)};
  ${e=>z(e.variant)};

  /* Base styles */
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t.xs};
  border-radius: ${S.xl};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  outline: none;
  position: relative;
  overflow: hidden;

  /* Full width option */
  ${e=>e.fullWidth&&a`
      width: 100%;
    `}

  /* Icon positioning */
  ${e=>e.iconPosition==="right"&&a`
      flex-direction: row-reverse;
    `}
  
  /* Loading state */
  ${e=>e.loading&&a`
      color: transparent;
      pointer-events: none;

      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid currentColor;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: ${E} 0.8s linear infinite;
        color: ${e.variant===o.Primary?r.primary.black:r.primary.white};
      }
    `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${r.primary.brand};
    outline-offset: 2px;
  }

  /* Icon container */
  .icon {
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }
`,p=R.forwardRef(({onClick:e,size:f=i.Medium,text:y,variant:g=o.Primary,icon:d,iconPosition:n="left",fullWidth:b=!1,loading:c=!1,disabled:h=!1,children:$,as:v,...x},w)=>{const k=$||y,m=d&&u.createElement("span",{className:"icon"},d);return u.createElement(N,{ref:w,onClick:e,size:f,variant:g,fullWidth:b,loading:c,iconPosition:n,disabled:h||c,as:v,...x},n==="left"&&m,k,n==="right"&&m)});p.displayName="Button";p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},size:{required:!1,tsType:{name:"ButtonSize"},description:"",defaultValue:{value:"ButtonSize.Medium",computed:!0}},text:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"ButtonVariant"},description:"",defaultValue:{value:"ButtonVariant.Primary",computed:!0}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"keyof React.JSX.IntrinsicElements | React.ComponentType<any>",elements:[{name:"React.JSX.IntrinsicElements"},{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{p as B,o as a,i as b};
