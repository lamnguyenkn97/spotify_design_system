import{R as r}from"./index-B-SYruCi.js";import{d as a}from"./GlobalStyles-Cn10x2UR.js";const d=a.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.background.primary};
`,i=a.thead`
  background-color: ${({theme:e})=>e.colors.background.secondary};
`,s=a.tbody`
  background-color: ${({theme:e})=>e.colors.background.primary};
`,c=a.tr`
  &:hover {
    background-color: ${({theme:e})=>e.colors.background.secondary};
  }
`,m=a.th`
  padding: ${({theme:e})=>e.spacing.md};
  text-align: left;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm}rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.secondary};
  font-weight: 600;
`,y=a.td`
  padding: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm}rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.primary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,p=({data:e,columns:o})=>r.createElement(d,null,r.createElement(i,null,r.createElement("tr",null,o.map(t=>r.createElement(m,{key:t.key,style:{width:t.width}},t.label)))),r.createElement(s,null,e.map((t,l)=>r.createElement(c,{key:l},o.map(n=>r.createElement(y,{key:n.key},n.renderCell?n.renderCell(t):t[n.key]))))));p.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T;
  label: string;
  width?: string; // Optional column width
  renderCell?: (item: T) => React.ReactNode; // Custom cell rendering
}`,signature:{properties:[{key:"key",value:{name:"T",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"width",value:{name:"string",required:!1}},{key:"renderCell",value:{name:"signature",type:"function",raw:"(item: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}}],raw:`{
  key: keyof T;
  label: string;
  width?: string; // Optional column width
  renderCell?: (item: T) => React.ReactNode; // Custom cell rendering
}[]`},description:""}}};export{p as T};
