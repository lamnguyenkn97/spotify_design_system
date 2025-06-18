import{B as t,a,b as r}from"./Button-DSDk_7mN.js";import{I as n}from"./Icon-pkSkNuYn.js";import{f as le,a as ce,b as me,c as ue,d as pe}from"./index-Cy0hq6F7.js";import{R as e}from"./index-B-SYruCi.js";import"./GlobalStyles-Cn10x2UR.js";import"./colors-B2Ab1-XV.js";import"./spacing-D8bLMdSH.js";import"./radius-CVqooa3C.js";import"./index.es-CQ4XmKgj.js";const he={title:"Atoms/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.values(a)},size:{control:"select",options:Object.values(r)},iconPosition:{control:"select",options:["left","right"]},fullWidth:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"}}},i={args:{text:"Play",variant:a.Primary,size:r.Medium}},o={args:{text:"Follow",variant:a.Secondary,size:r.Medium}},s={args:{text:"Sign up free",variant:a.White,size:r.Medium}},l={args:{text:"Log in",variant:a.FlatWhite,size:r.Medium}},c={args:{text:"Show all",variant:a.Text,size:r.Medium}},m={args:{text:"Play",icon:e.createElement(n,{icon:le,size:"small"}),variant:a.Primary,size:r.Medium}},d={args:{text:"Download",icon:e.createElement(n,{icon:ce,size:"small"}),iconPosition:"right",variant:a.Secondary,size:r.Medium}},u={args:{icon:e.createElement(n,{icon:me,size:"small"}),variant:a.Text,size:r.Small,"aria-label":"Like"}},p={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(t,{text:"Small",size:r.Small}),e.createElement(t,{text:"Medium",size:r.Medium}),e.createElement(t,{text:"Large",size:r.Large}))},g={args:{text:"Loading...",loading:!0,variant:a.Primary}},x={args:{text:"Disabled",disabled:!0,variant:a.Primary}},y={args:{text:"Full Width Button",fullWidth:!0,variant:a.Primary},parameters:{layout:"padded"}},v={render:()=>{const[P,de]=e.useState(!1);return e.createElement(t,{text:P?"Pause":"Play",icon:e.createElement(n,{icon:P?ue:le,size:"small"}),onClick:()=>de(!P),variant:a.Primary})}},B={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:"#121212"}},e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},e.createElement(t,{text:"Primary",variant:a.Primary}),e.createElement(t,{text:"Secondary",variant:a.Secondary}),e.createElement(t,{text:"White",variant:a.White}),e.createElement(t,{text:"Flat White",variant:a.FlatWhite}),e.createElement(t,{text:"Text",variant:a.Text})),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},e.createElement(t,{text:"With Icon",icon:e.createElement(n,{icon:pe,size:"small"}),variant:a.Primary}),e.createElement(t,{text:"Icon Right",icon:e.createElement(n,{icon:ce,size:"small"}),iconPosition:"right",variant:a.Secondary}),e.createElement(t,{icon:e.createElement(n,{icon:me,size:"small"}),variant:a.Text,"aria-label":"Like"})),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},e.createElement(t,{text:"Loading...",loading:!0,variant:a.Primary}),e.createElement(t,{text:"Disabled",disabled:!0,variant:a.Secondary}))),parameters:{layout:"fullscreen"}};var S,z,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: 'Play',
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium
  }
}`,...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var h,W,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'Follow',
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium
  }
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,b,I;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Sign up free',
    variant: ButtonVariant.White,
    size: ButtonSize.Medium
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var M,L,w;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Log in',
    variant: ButtonVariant.FlatWhite,
    size: ButtonSize.Medium
  }
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var F,D,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Show all',
    variant: ButtonVariant.Text,
    size: ButtonSize.Medium
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,R,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Play',
    icon: <Icon icon={faPlay} size="small" />,
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium
  }
}`,...(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var C,A,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Download',
    icon: <Icon icon={faDownload} size="small" />,
    iconPosition: 'right',
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var j,_,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <Icon icon={faHeart} size="small" />,
    variant: ButtonVariant.Text,
    size: ButtonSize.Small,
    'aria-label': 'Like'
  }
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button text="Small" size={ButtonSize.Small} />
      <Button text="Medium" size={ButtonSize.Medium} />
      <Button text="Large" size={ButtonSize.Large} />
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Loading...',
    loading: true,
    variant: ButtonVariant.Primary
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    disabled: true,
    variant: ButtonVariant.Primary
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: 'Full Width Button',
    fullWidth: true,
    variant: ButtonVariant.Primary
  },
  parameters: {
    layout: 'padded'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    return <Button text={isPlaying ? 'Pause' : 'Play'} icon={<Icon icon={isPlaying ? faPause : faPlay} size="small" />} onClick={() => setIsPlaying(!isPlaying)} variant={ButtonVariant.Primary} />;
  }
}`,...(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,oe,se;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#121212'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Button text="Primary" variant={ButtonVariant.Primary} />
        <Button text="Secondary" variant={ButtonVariant.Secondary} />
        <Button text="White" variant={ButtonVariant.White} />
        <Button text="Flat White" variant={ButtonVariant.FlatWhite} />
        <Button text="Text" variant={ButtonVariant.Text} />
      </div>

      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Button text="With Icon" icon={<Icon icon={faPlus} size="small" />} variant={ButtonVariant.Primary} />
        <Button text="Icon Right" icon={<Icon icon={faDownload} size="small" />} iconPosition="right" variant={ButtonVariant.Secondary} />
        <Button icon={<Icon icon={faHeart} size="small" />} variant={ButtonVariant.Text} aria-label="Like" />
      </div>

      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Button text="Loading..." loading variant={ButtonVariant.Primary} />
        <Button text="Disabled" disabled variant={ButtonVariant.Secondary} />
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(se=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const We=["Primary","Secondary","White","FlatWhite","Text","WithIcon","IconRight","IconOnly","Sizes","Loading","Disabled","FullWidth","PlayPause","AllVariants"];export{B as AllVariants,x as Disabled,l as FlatWhite,y as FullWidth,u as IconOnly,d as IconRight,g as Loading,v as PlayPause,i as Primary,o as Secondary,p as Sizes,c as Text,s as White,m as WithIcon,We as __namedExportsOrder,he as default};
