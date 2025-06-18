import{r as R,R as y}from"./index-B-SYruCi.js";import{F as D}from"./index.es-CQ4XmKgj.js";import{d as E,f as u,l}from"./GlobalStyles-Cn10x2UR.js";import{c as n}from"./colors-B2Ab1-XV.js";import{s as i}from"./spacing-D8bLMdSH.js";import{b as v}from"./radius-CVqooa3C.js";const p={xs:{dimension:i.sm,fontSize:u.sm,padding:i.sm},small:{dimension:i.md,fontSize:u.md,padding:i.md},medium:{dimension:i.lg,fontSize:u.lg,padding:i.md},large:{dimension:i.xl,fontSize:u.xl,padding:i.lg},xl:{dimension:"2rem",fontSize:u.xl,padding:i.lg}},N={primary:n.primary.white,secondary:n.grey.grey6,muted:n.grey.grey3,brand:n.primary.brand,error:n.decorative.redRedWine,warning:n.decorative.mellowYellow,success:n.decorative.evergreen,inherit:"currentColor"},s={size:"medium",color:"inherit",variant:"default",clickable:!1,spin:!1,pulse:!1,disabled:!1},m=e=>N[e]||e,P=e=>{const a=p[e]||p.medium;return l`
    width: ${a.dimension};
    height: ${a.dimension};
    font-size: ${a.fontSize}rem;
  `},W=(e,a,r="medium")=>{const o=p[r]||p.medium;switch(e){case"rounded":return l`
        background-color: ${a?m(a):n.grey.grey2};
        border-radius: 50%;
        padding: ${o.padding};
      `;case"outlined":return l`
        border: 1px solid
          ${a?m(a):n.grey.grey3};
        border-radius: ${v.sm};
        padding: ${o.padding};
      `;case"filled":return l`
        background-color: ${a?m(a):n.grey.grey2};
        border-radius: ${v.sm};
        padding: ${o.padding};
      `;case"default":default:return l`
        /* No additional styles for default variant */
      `}},B=(e,a,r)=>a?l`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `:e?l`
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: ${r?m(r):n.primary.brand};
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.95);
      }

      &:focus-visible {
        outline: 2px solid ${n.primary.brand};
        outline-offset: 2px;
        border-radius: ${v.xs};
      }
    `:l`
    /* No interactive styles */
  `,C=E.span.withConfig({shouldForwardProp:e=>!["size","color","hoverColor","variant","backgroundColor","clickable","disabled"].includes(e)})`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;

  /* Size styles */
  ${({size:e})=>P(e)};

  /* Color styles */
  color: ${({color:e})=>m(e)};

  /* Variant styles */
  ${({variant:e,backgroundColor:a,size:r})=>W(e,a,r)};

  /* Interactive styles */
  ${({clickable:e,disabled:a,hoverColor:r})=>B(e,a,r)};

  /* FontAwesome icon container */
  svg {
    width: 1em;
    height: 1em;
  }
`,g={xs:"xs",small:"sm",medium:"1x",large:"lg",xl:"2x"},h=R.forwardRef(({icon:e,size:a=s.size,color:r=s.color,hoverColor:o,variant:w=s.variant,backgroundColor:b,clickable:t=s.clickable,spin:x=s.spin,pulse:z=s.pulse,flip:$,rotate:S,disabled:d=s.disabled,onClick:c,"aria-label":T,...I},q)=>{const A=g[a]||g.medium,F={role:t?"button":void 0,tabIndex:t&&!d?0:void 0,"aria-label":T||(t?"Icon button":void 0),"aria-disabled":d||void 0},V=f=>{t&&!d&&(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),c==null||c(f))};return y.createElement(C,{ref:q,size:a,color:r,hoverColor:o,variant:w,backgroundColor:b,clickable:t,disabled:d,onClick:t&&!d?c:void 0,onKeyDown:t?V:void 0,...F,...I},y.createElement(D,{icon:e,size:A,spin:x,pulse:z,flip:$,rotation:S}))});h.displayName="Icon";h.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"FontAwesomeIconProps['icon']",raw:"FontAwesomeIconProps['icon']"},description:"FontAwesome icon definition"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'small' | 'medium' | 'large' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xl'"}]},description:`Size of the icon
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'brand' | 'error' | 'warning' | 'success' | 'inherit' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'inherit'"},{name:"string"}]},description:`Color of the icon - can be theme color or custom value
@default 'inherit'`,defaultValue:{value:"'inherit'",computed:!1}},hoverColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'brand' | 'error' | 'warning' | 'success' | 'inherit' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'inherit'"},{name:"string"}]},description:"Color on hover state"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'rounded' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:`Visual variant of the icon
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'brand' | 'error' | 'warning' | 'success' | 'inherit' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'inherit'"},{name:"string"}]},description:"Background color when using filled or rounded variants"},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether the icon is clickable
@default false`,defaultValue:{value:"false",computed:!1}},spin:{required:!1,tsType:{name:"boolean"},description:`FontAwesome spin animation
@default false`,defaultValue:{value:"false",computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:`FontAwesome pulse animation
@default false`,defaultValue:{value:"false",computed:!1}},flip:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'both'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'both'"}]},description:"FontAwesome flip transformation"},rotate:{required:!1,tsType:{name:"union",raw:"90 | 180 | 270",elements:[{name:"literal",value:"90"},{name:"literal",value:"180"},{name:"literal",value:"270"}]},description:"FontAwesome rotation"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the icon is disabled
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"}},composes:["Omit"]};export{h as I,N as c,p as s};
