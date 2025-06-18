import{R as m}from"./index-B-SYruCi.js";import{d,l as e,f as a}from"./GlobalStyles-Cn10x2UR.js";import{c as r}from"./colors-B2Ab1-XV.js";const c=d.span`
  ${({variant:t})=>{switch(t){case"h1":return e`
          font-size: ${a["2xl"]}rem;
          font-weight: 700;
        `;case"h2":return e`
          font-size: ${a.xxl}rem;
          font-weight: 700;
        `;case"h3":return e`
          font-size: ${a.xl}rem;
          font-weight: 700;
        `;case"h4":return e`
          font-size: ${a.lg}rem;
          font-weight: 500;
        `;case"h5":return e`
          font-size: ${a.md}rem;
          font-weight: 500;
        `;case"h6":return e`
          font-size: ${a.md}rem;
          font-weight: 500;
        `;case"body1":return e`
          font-size: ${a.md}rem;
          font-weight: 400;
        `;case"body2":return e`
          font-size: ${a.sm}rem;
          font-weight: 400;
        `;case"caption":return e`
          font-size: ${a.sm}rem;
          font-weight: 300;
        `;default:return e`
          font-size: ${a.md}rem;
          font-weight: 400;
        `}}}

  ${({weight:t})=>{switch(t){case"light":return e`
          font-weight: 300;
        `;case"medium":return e`
          font-weight: 500;
        `;case"bold":return e`
          font-weight: 700;
        `;default:return e`
          font-weight: 400;
        `}}}

  ${({color:t})=>{switch(t){case"primary":return e`
          color: ${r.primary.white};
        `;case"secondary":return e`
          color: ${r.grey.grey6};
        `;case"muted":return e`
          color: ${r.grey.grey4};
        `;case"danger":return e`
          color: ${r.decorative.redRedWine};
        `;default:return e`
          color: inherit;
        `}}}
`,f=({variant:t="body1",component:n="span",weight:l="regular",color:i="primary",children:o,className:s=""})=>{const u=n;return m.createElement(c,{as:u,variant:t,weight:l,color:i,className:s},o)};f.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'body1'
| 'body2'
| 'caption'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'regular' | 'medium' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'span'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{f as T};
