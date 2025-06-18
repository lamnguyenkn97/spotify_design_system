import{r as y,R as b}from"./index-B-SYruCi.js";import{d as x,l as p}from"./GlobalStyles-Cn10x2UR.js";import{c as m}from"./colors-B2Ab1-XV.js";import{s as u}from"./spacing-D8bLMdSH.js";const T={primary:m.primary.white,secondary:m.grey.grey6,muted:m.grey.grey3,brand:m.primary.brand},f={none:"0",xs:u.xs,sm:u.sm,md:u.md,lg:u.lg,xl:u.xl},r={thickness:1,color:"muted",variant:"solid",spacing:"md",orientation:"horizontal",length:"100%",fullSize:!0},$=e=>T[e]||e,w=e=>f[e]||f.md,V=(e,a,l,i,t,n,o)=>{const s=typeof t=="number"?`${t}px`:t,d=p`
    border: none;
    padding: 0;
    background: none;
    flex-shrink: 0;
  `;return e==="vertical"?p`
      ${d};
      width: ${a}px;
      height: ${n?"100%":s};
      border-left: ${a}px ${l} ${i};
      margin: 0 ${o};
      display: inline-block;
      vertical-align: top;
    `:p`
    ${d};
    width: ${n?"100%":s};
    height: ${a}px;
    border-top: ${a}px ${l} ${i};
    margin: ${o} 0;
    display: block;
  `},S=x.hr.withConfig({shouldForwardProp:e=>!["orientation","thickness","color","variant","spacing","customSpacing","length","fullSize"].includes(e)})`
  /* Apply orientation-specific styles */
  ${({orientation:e,thickness:a,variant:l,color:i,length:t,fullSize:n,spacing:o,customSpacing:s})=>{const d=$(i),c=s||w(o);return V(e,a,l,d,t,n,c)}};

  /* Accessibility and focus states */
  &:focus {
    outline: none;
  }

  /* Ensure proper behavior in flex containers */
  &[aria-orientation='vertical'] {
    align-self: stretch;
  }
`,h=y.forwardRef(({orientation:e=r.orientation,thickness:a=r.thickness,color:l=r.color,variant:i=r.variant,spacing:t=r.spacing,customSpacing:n,length:o=r.length,fullSize:s=r.fullSize,role:d="separator","aria-orientation":c,...v},g)=>b.createElement(S,{ref:g,orientation:e,thickness:a,color:l,variant:i,spacing:t,customSpacing:n,length:o,fullSize:s,role:d,"aria-orientation":c||e,...v}));h.displayName="Divider";h.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The orientation of the divider
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:`The thickness of the divider line in pixels
@default 1`,defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'brand' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'brand'"},{name:"string"}]},description:`The color of the divider. Can use preset colors or custom hex/rgb values
@default 'muted'`,defaultValue:{value:"'muted'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted' | 'double'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"},{name:"literal",value:"'double'"}]},description:`The style variant of the divider line
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`The spacing around the divider
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},customSpacing:{required:!1,tsType:{name:"string"},description:"Custom spacing override (CSS value)"},length:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`The length of the divider (width for horizontal, height for vertical)
@default '100%'`,defaultValue:{value:"'100%'",computed:!1}},fullSize:{required:!1,tsType:{name:"boolean"},description:`Whether the divider should be full width/height
@default true`,defaultValue:{value:"true",computed:!1}},role:{defaultValue:{value:"'separator'",computed:!1},required:!1}},composes:["Omit"]};export{h as D,T as c,f as s};
