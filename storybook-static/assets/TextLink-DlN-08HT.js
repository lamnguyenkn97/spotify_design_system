import{R as c}from"./index-B-SYruCi.js";import{d as m,l as t}from"./GlobalStyles-Cn10x2UR.js";import{c as a}from"./colors-B2Ab1-XV.js";const p=m.a`
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  cursor: pointer;

  ${({variant:e})=>{switch(e){case"muted":return t`
          color: ${a.grey.grey4};
        `;case"danger":return t`
          color: ${a.decorative.redRedWine};
        `;default:return t`
          color: ${a.primary.white};
        `}}}

  ${({weight:e})=>{switch(e){case"light":return t`
          font-weight: 300;
        `;case"medium":return t`
          font-weight: 500;
        `;case"bold":return t`
          font-weight: 700;
        `;default:return t`
          font-weight: 400;
        `}}}

  &:hover {
    text-decoration: underline;
  }
`,f=({href:e,component:l=e?"a":"span",variant:n="default",weight:i="regular",underline:u=!1,children:o,className:d=""})=>{const r=e==null?void 0:e.startsWith("http"),s=l;return c.createElement(p,{as:s,href:e,target:r?"_blank":void 0,rel:r?"noopener noreferrer":void 0,variant:n,weight:i,underline:u,className:d},o)};f.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{href:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"href ? 'a' : 'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'regular' | 'medium' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},underline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{f as T};
