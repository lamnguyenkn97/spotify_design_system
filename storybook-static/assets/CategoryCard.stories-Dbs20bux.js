import{r as p,R as e}from"./index-B-SYruCi.js";import{S as o}from"./Stack-BpWiWNDN.js";import{c as t}from"./colors-B2Ab1-XV.js";import"./GlobalStyles-Cn10x2UR.js";import{I as H}from"./Image-Cs63UF0a.js";import{T as N}from"./Typography-Brz-xasK.js";import{s as b}from"./spacing-D8bLMdSH.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";import"./index-Cy0hq6F7.js";import"./index-fYcu5K3v.js";const L=r=>{switch(r){case"sm":return{width:"200px",height:"100px"};case"lg":return{width:"300px",height:"140px"};case"md":default:return{width:"250px",height:"120px"}}},a=p.forwardRef(({title:r,backgroundColor:I=t.decorative.blueMoon,image:T,size:D="md",onClick:l,className:P,...W},Y)=>{const[q,m]=p.useState(!1),g=L(D);return e.createElement(o,{ref:Y,direction:"column",justify:"start",align:"start",padding:"md",borderRadius:"md",backgroundColor:I,width:g.width,height:g.height,className:P,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onClick:l,style:{position:"relative",overflow:"hidden",cursor:l?"pointer":"default",transition:"transform 0.2s ease-in-out",transform:q?"scale(1.05)":"scale(1)",color:t.primary.white},...W},e.createElement(o,{style:{zIndex:2,position:"relative",maxWidth:"60%"}},e.createElement(N,{variant:"h4",weight:"bold",component:"h3"},r)),e.createElement(H,{src:T,alt:r,width:"50%",height:"auto",shape:"rounded",style:{position:"absolute",bottom:`-${b.sm}`,right:`-${b.sm}`,maxWidth:"80px",aspectRatio:"1 / 1",transform:"rotate(25deg)",zIndex:1,objectFit:"cover"}}))});a.displayName="CategoryCard";a.__docgenInfo={description:"",methods:[],displayName:"CategoryCard",props:{title:{required:!0,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#649AED'",computed:!1}},image:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Molecules/CategoryCard",component:a,parameters:{layout:"centered",docs:{description:{component:"CategoryCard displays music categories with colorful backgrounds and rotated images, commonly used in Spotify's browse section."}}},argTypes:{title:{control:"text",description:"The category title"},backgroundColor:{control:"color",description:"Background color of the card"},image:{control:"text",description:"URL of the category image"},size:{control:"select",options:["sm","md","lg"],description:"Size of the category card"},onClick:{action:"clicked",description:"Callback when card is clicked"}},tags:["autodocs"]},c={args:{title:"Podcast Charts",backgroundColor:t.decorative.blueMoon,image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",size:"md"}},s={render:()=>e.createElement(o,{direction:"row",spacing:"lg",align:"center"},e.createElement(a,{title:"Small",backgroundColor:t.decorative.redRedWine,image:"https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7",size:"sm"}),e.createElement(a,{title:"Medium",backgroundColor:t.decorative.blueMoon,image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",size:"md"}),e.createElement(a,{title:"Large",backgroundColor:t.decorative.mellowYellow,image:"https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b",size:"lg"})),parameters:{docs:{description:{story:"CategoryCard supports three sizes: small (200x100), medium (250x120), and large (300x140)."}}}},i={render:()=>e.createElement(o,{direction:"row",spacing:"md",wrap:"wrap"},e.createElement(a,{title:"Pop",backgroundColor:t.decorative.pinkMoon,image:"https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b"}),e.createElement(a,{title:"Rock",backgroundColor:t.decorative.redRedWine,image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"}),e.createElement(a,{title:"Jazz",backgroundColor:t.decorative.blueMoon,image:"https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"}),e.createElement(a,{title:"Classical",backgroundColor:t.decorative.evergreen,image:"https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b"}),e.createElement(a,{title:"Hip Hop",backgroundColor:t.decorative.mellowYellow,image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"}),e.createElement(a,{title:"Electronic",backgroundColor:t.decorative.prettyInPink,image:"https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"})),parameters:{docs:{description:{story:"CategoryCard supports various background colors from the design system's decorative color palette."}}}},d={render:()=>e.createElement(o,{direction:"column",spacing:"lg"},e.createElement(o,{direction:"row",spacing:"md",wrap:"wrap"},e.createElement(a,{title:"Made For You",backgroundColor:"#8400e7",image:"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"}),e.createElement(a,{title:"Charts",backgroundColor:"#8d67ab",image:"https://t.scdn.co/images/adfadd6165904766ac98d5be7fcae452"}),e.createElement(a,{title:"New Releases",backgroundColor:"#e8115b",image:"https://t.scdn.co/images/72c546b4b3b54c5b8e1c8b8b8b8b8b8b"})),e.createElement(o,{direction:"row",spacing:"md",wrap:"wrap"},e.createElement(a,{title:"Discover Weekly",backgroundColor:"#1e3264",image:"https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785"}),e.createElement(a,{title:"Release Radar",backgroundColor:"#0d72ea",image:"https://t.scdn.co/images/6bacbcdd83a64ec581a8b0bc68d24ee5"}),e.createElement(a,{title:"Daily Mix",backgroundColor:"#ba5d07",image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"}))),parameters:{docs:{description:{story:"Real-world examples of CategoryCard as used in Spotify's browse section."}}}},n={args:{title:"Your Category",backgroundColor:t.decorative.blueMoon,image:"https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",size:"md"},parameters:{docs:{description:{story:"Interactive playground to test different CategoryCard configurations."}}}};var u,f,C;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Podcast Charts',
    backgroundColor: colors.decorative.blueMoon,
    image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    size: 'md'
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,h,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing="lg" align="center">
      <CategoryCard title="Small" backgroundColor={colors.decorative.redRedWine} image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7" size="sm" />
      <CategoryCard title="Medium" backgroundColor={colors.decorative.blueMoon} image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" size="md" />
      <CategoryCard title="Large" backgroundColor={colors.decorative.mellowYellow} image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b" size="lg" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'CategoryCard supports three sizes: small (200x100), medium (250x120), and large (300x140).'
      }
    }
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,v,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing="md" wrap="wrap">
      <CategoryCard title="Pop" backgroundColor={colors.decorative.pinkMoon} image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b" />
      <CategoryCard title="Rock" backgroundColor={colors.decorative.redRedWine} image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" />
      <CategoryCard title="Jazz" backgroundColor={colors.decorative.blueMoon} image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7" />
      <CategoryCard title="Classical" backgroundColor={colors.decorative.evergreen} image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b" />
      <CategoryCard title="Hip Hop" backgroundColor={colors.decorative.mellowYellow} image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" />
      <CategoryCard title="Electronic" backgroundColor={colors.decorative.prettyInPink} image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "CategoryCard supports various background colors from the design system's decorative color palette."
      }
    }
  }
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var x,S,z;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing="lg">
      <Stack direction="row" spacing="md" wrap="wrap">
        <CategoryCard title="Made For You" backgroundColor="#8400e7" image="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe" />
        <CategoryCard title="Charts" backgroundColor="#8d67ab" image="https://t.scdn.co/images/adfadd6165904766ac98d5be7fcae452" />
        <CategoryCard title="New Releases" backgroundColor="#e8115b" image="https://t.scdn.co/images/72c546b4b3b54c5b8e1c8b8b8b8b8b8b" />
      </Stack>
      <Stack direction="row" spacing="md" wrap="wrap">
        <CategoryCard title="Discover Weekly" backgroundColor="#1e3264" image="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785" />
        <CategoryCard title="Release Radar" backgroundColor="#0d72ea" image="https://t.scdn.co/images/6bacbcdd83a64ec581a8b0bc68d24ee5" />
        <CategoryCard title="Daily Mix" backgroundColor="#ba5d07" image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" />
      </Stack>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "Real-world examples of CategoryCard as used in Spotify's browse section."
      }
    }
  }
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,R,j;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Your Category',
    backgroundColor: colors.decorative.blueMoon,
    image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different CategoryCard configurations.'
      }
    }
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const X=["Default","AllSizes","ColorVariants","SpotifyExamples","Playground"];export{s as AllSizes,i as ColorVariants,c as Default,n as Playground,d as SpotifyExamples,X as __namedExportsOrder,Q as default};
