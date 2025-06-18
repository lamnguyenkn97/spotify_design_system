import{r as C,R as e}from"./index-B-SYruCi.js";import{f as D,a as B,b as M}from"./index-fYcu5K3v.js";import{S as o}from"./Stack-BpWiWNDN.js";import{T as N}from"./Typography-Brz-xasK.js";import{I as R}from"./Icon-pkSkNuYn.js";import{c}from"./colors-B2Ab1-XV.js";import{s as T}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";const V=[{title:"Company",links:[{name:"About",url:"#"},{name:"Jobs",url:"#"},{name:"For the Record",url:"#"}]},{title:"Communities",links:[{name:"For Artists",url:"#"},{name:"Developers",url:"#"},{name:"Advertising",url:"#"},{name:"Investors",url:"#"},{name:"Vendors",url:"#"}]},{title:"Useful Links",links:[{name:"Support",url:"#"},{name:"Free Mobile App",url:"#"}]},{title:"Spotify Plans",links:[{name:"Premium Individual",url:"#"},{name:"Premium Student",url:"#"},{name:"Spotify Free",url:"#"}]}],A=[{icon:D,url:"#"},{icon:B,url:"#"},{icon:M,url:"#"}],L=({name:t,url:m})=>{const[d,r]=C.useState(!1);return e.createElement("a",{href:m,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{color:d?c.primary.white:c.grey.grey6,textDecoration:"none",fontSize:"0.875rem",transition:"color 0.3s ease-in-out",display:"block"}},t)},P=({social:t})=>e.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",textDecoration:"none"}},e.createElement(R,{icon:t.icon,size:"small",color:"primary",hoverColor:"brand",variant:"filled",backgroundColor:"muted",clickable:!0,"aria-label":`Visit our ${t.icon} page`})),n=C.forwardRef(({className:t,...m},d)=>e.createElement(o,{ref:d,as:"footer",direction:"column",spacing:"xl",padding:"xl",backgroundColor:c.primary.black,className:t,style:{color:c.grey.grey6},...m},e.createElement(o,{direction:"row",spacing:"xl",align:"start",justify:"space-between",style:{flexWrap:"wrap"}},V.map((r,p)=>e.createElement(o,{key:p,direction:"column",spacing:"sm",align:"start"},e.createElement(N,{variant:"body1",weight:"bold",color:"primary",component:"h4"},r.title),e.createElement(o,{direction:"column",spacing:"xs"},r.links.map((u,I)=>e.createElement(L,{key:I,name:u.name,url:u.url}))))),e.createElement(o,{direction:"row",spacing:"md",align:"center",style:{marginTop:T.md}},A.map((r,p)=>e.createElement(P,{key:p,social:r}))))));n.displayName="Footer";n.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Molecules/Footer",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Footer component displays company links, social media icons, and other footer content commonly found at the bottom of Spotify pages."}}},argTypes:{className:{control:"text",description:"Additional CSS class names"}},tags:["autodocs"]},s={args:{}},a={args:{className:"custom-footer"},parameters:{docs:{description:{story:"Footer with custom CSS class for additional styling."}}}},i={render:()=>e.createElement("div",{style:{width:"100%"}},e.createElement("div",{style:{marginBottom:"2rem"}},e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Desktop View"),e.createElement("div",{style:{width:"100%",minWidth:"1200px"}},e.createElement(n,null))),e.createElement("div",null,e.createElement("h3",{style:{color:"white",marginBottom:"1rem"}},"Mobile View"),e.createElement("div",{style:{width:"375px"}},e.createElement(n,null)))),parameters:{docs:{description:{story:"Footer component adapts to different screen sizes with responsive design."}}}},l={args:{},parameters:{docs:{description:{story:"Interactive playground to test different Footer configurations."}}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: 'custom-footer'
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom CSS class for additional styling.'
      }
    }
  }
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,E,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>
      <div style={{
      marginBottom: '2rem'
    }}>
        <h3 style={{
        color: 'white',
        marginBottom: '1rem'
      }}>Desktop View</h3>
        <div style={{
        width: '100%',
        minWidth: '1200px'
      }}>
          <Footer />
        </div>
      </div>
      <div>
        <h3 style={{
        color: 'white',
        marginBottom: '1rem'
      }}>Mobile View</h3>
        <div style={{
        width: '375px'
      }}>
          <Footer />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Footer component adapts to different screen sizes with responsive design.'
      }
    }
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var b,F,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different Footer configurations.'
      }
    }
  }
}`,...(x=(F=l.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const K=["Default","WithCustomClass","ResponsiveShowcase","Playground"];export{s as Default,l as Playground,i as ResponsiveShowcase,a as WithCustomClass,K as __namedExportsOrder,G as default};
