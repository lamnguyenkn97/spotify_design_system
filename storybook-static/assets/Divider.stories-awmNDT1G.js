import{R as e}from"./index-B-SYruCi.js";import{D as n,c as X,s as r}from"./Divider-Xsz0zr5B.js";import{c as s}from"./colors-B2Ab1-XV.js";import"./GlobalStyles-Cn10x2UR.js";import"./spacing-D8bLMdSH.js";const E={display:"flex",alignItems:"center"},t={container:{color:s.primary.white,backgroundColor:s.primary.black},section:{padding:r.sm},label:{color:s.grey.grey6,fontSize:"14px",marginBottom:r.xs},smallLabel:{color:s.grey.grey6,fontSize:"12px"},flexRow:E,flexColumn:{display:"flex",flexDirection:"column",gap:r.lg},centeredContainer:{textAlign:"center"},navigationContainer:{width:"200px",padding:r.md,backgroundColor:s.grey.grey1,color:s.primary.white},headerContainer:{...E,padding:r.md,backgroundColor:s.grey.grey1,color:s.primary.white},showcaseContainer:{padding:r.lg,backgroundColor:s.primary.black,color:s.primary.white}},ie={title:"Atoms/Divider",component:n,parameters:{layout:"padded",docs:{description:{component:"A flexible divider component that supports both horizontal and vertical orientations with customizable styling."}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:"select",options:["solid","dashed","dotted","double"],description:"Line style variant"},color:{control:"select",options:[...Object.keys(X),"custom"],description:"Color from design tokens or custom hex value"},spacing:{control:"select",options:Object.keys(r),description:"Spacing around the divider using design tokens"},thickness:{control:{type:"range",min:1,max:10,step:1},description:"Thickness of the divider line in pixels"},fullSize:{control:"boolean",description:"Whether divider takes full available space"}}},o={args:{}},l={args:{orientation:"horizontal"},render:i=>e.createElement("div",{style:{width:"300px",...t.container}},e.createElement("div",{style:t.section},"Section 1"),e.createElement(n,{...i}),e.createElement("div",{style:t.section},"Section 2"))},d={args:{orientation:"vertical"},render:i=>e.createElement("div",{style:{...t.flexRow,height:"60px",...t.container}},e.createElement("div",{style:{padding:`0 ${r.md}`}},"Left"),e.createElement(n,{...i}),e.createElement("div",{style:{padding:`0 ${r.md}`}},"Right"))},c={render:()=>e.createElement("div",{style:t.flexColumn},Object.entries(X).map(([i,a])=>e.createElement("div",{key:i},e.createElement("div",{style:t.label},i.charAt(0).toUpperCase()+i.slice(1)," (",a,")"),e.createElement(n,{color:i}))),e.createElement("div",null,e.createElement("div",{style:t.label},"Custom Color (#ff0000)"),e.createElement(n,{color:"#ff0000"})))},m={render:()=>{const i=["solid","dashed","dotted","double"];return e.createElement("div",{style:t.flexColumn},i.map(a=>e.createElement("div",{key:a},e.createElement("div",{style:t.label},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement(n,{variant:a}))))}},v={render:()=>{const i=[1,2,4,8];return e.createElement("div",{style:t.flexColumn},i.map(a=>e.createElement("div",{key:a},e.createElement("div",{style:t.label},a,"px ",a===1?"(Default)":""),e.createElement(n,{thickness:a}))))}},y={render:()=>e.createElement("div",{style:t.container},e.createElement("div",null,"Content above"),Object.entries(r).map(([i,a])=>e.createElement(e.Fragment,{key:i},e.createElement("div",{style:t.smallLabel},i.toUpperCase()," (",a,")"),e.createElement(n,{spacing:i}),e.createElement("div",null,"Content below"))))},p={render:()=>e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.centeredContainer},e.createElement("div",{style:t.label},"50% Width"),e.createElement(n,{length:"50%"})),e.createElement("div",{style:t.centeredContainer},e.createElement("div",{style:t.label},"200px Width"),e.createElement(n,{length:200})),e.createElement("div",{style:{...t.flexRow,height:"80px",justifyContent:"center"}},e.createElement("div",{style:{...t.label,marginRight:r.xs}},"50px Height"),e.createElement(n,{orientation:"vertical",length:50}),e.createElement("div",{style:{...t.label,marginLeft:r.xs}},"Vertical")))},g={render:()=>e.createElement("div",{style:t.navigationContainer},e.createElement("div",{style:t.section},"Home"),e.createElement(n,{spacing:"sm"}),e.createElement("div",{style:t.section},"Search"),e.createElement(n,{spacing:"sm"}),e.createElement("div",{style:t.section},"Your Library"),e.createElement(n,{spacing:"md",color:"secondary"}),e.createElement("div",{style:{...t.section,...t.label}},"Playlists"),e.createElement(n,{spacing:"sm"}),e.createElement("div",{style:t.section},"Liked Songs"))},u={render:()=>e.createElement("div",{style:t.headerContainer},e.createElement("div",null,"Premium"),e.createElement(n,{orientation:"vertical",spacing:"md",length:"20px"}),e.createElement("div",null,"Support"),e.createElement(n,{orientation:"vertical",spacing:"md",length:"20px"}),e.createElement("div",null,"Download"))},h={render:()=>e.createElement("div",{style:t.showcaseContainer},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:r.xl}},e.createElement("div",null,e.createElement("h3",{style:{color:s.primary.white,marginBottom:r.md}},"Horizontal Dividers"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:r.md}},e.createElement(n,null),e.createElement(n,{color:"brand",thickness:2}),e.createElement(n,{variant:"dashed",color:"secondary"}),e.createElement(n,{variant:"dotted",color:"primary",thickness:3}))),e.createElement("div",null,e.createElement("h3",{style:{color:s.primary.white,marginBottom:r.md}},"Vertical Dividers"),e.createElement("div",{style:{...t.flexRow,height:"60px"}},e.createElement("div",{style:{padding:`0 ${r.md}`}},"Item 1"),e.createElement(n,{orientation:"vertical"}),e.createElement("div",{style:{padding:`0 ${r.md}`}},"Item 2"),e.createElement(n,{orientation:"vertical",color:"brand",thickness:2}),e.createElement("div",{style:{padding:`0 ${r.md}`}},"Item 3"),e.createElement(n,{orientation:"vertical",variant:"dashed"}),e.createElement("div",{style:{padding:`0 ${r.md}`}},"Item 4"))))),parameters:{layout:"fullscreen"}};var f,x,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,b,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div style={{
    width: '300px',
    ...storyStyles.container
  }}>
      <div style={storyStyles.section}>Section 1</div>
      <Divider {...args} />
      <div style={storyStyles.section}>Section 2</div>
    </div>
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,w,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    ...storyStyles.flexRow,
    height: '60px',
    ...storyStyles.container
  }}>
      <div style={{
      padding: \`0 \${spacingTokens.md}\`
    }}>Left</div>
      <Divider {...args} />
      <div style={{
      padding: \`0 \${spacingTokens.md}\`
    }}>Right</div>
    </div>
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var R,L,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.flexColumn}>
      {Object.entries(colorTokens).map(([colorName, colorValue]) => <div key={colorName}>
          <div style={storyStyles.label}>{colorName.charAt(0).toUpperCase() + colorName.slice(1)} ({colorValue})</div>
          <Divider color={colorName as keyof typeof colorTokens} />
        </div>)}
      <div>
        <div style={storyStyles.label}>Custom Color (#ff0000)</div>
        <Divider color="#ff0000" />
      </div>
    </div>
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var z,V,$;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const variants = ['solid', 'dashed', 'dotted', 'double'] as const;
    return <div style={storyStyles.flexColumn}>
        {variants.map(variant => <div key={variant}>
            <div style={storyStyles.label}>{variant.charAt(0).toUpperCase() + variant.slice(1)}</div>
            <Divider variant={variant} />
          </div>)}
      </div>;
  }
}`,...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,A,j;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const thicknesses = [1, 2, 4, 8];
    return <div style={storyStyles.flexColumn}>
        {thicknesses.map(thickness => <div key={thickness}>
            <div style={storyStyles.label}>{thickness}px {thickness === 1 ? '(Default)' : ''}</div>
            <Divider thickness={thickness} />
          </div>)}
      </div>;
  }
}`,...(j=(A=v.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var O,N,U;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div>Content above</div>
      {Object.entries(spacingTokens).map(([spacingName, spacingValue]) => <React.Fragment key={spacingName}>
          <div style={storyStyles.smallLabel}>{spacingName.toUpperCase()} ({spacingValue})</div>
          <Divider spacing={spacingName as keyof typeof spacingTokens} />
          <div>Content below</div>
        </React.Fragment>)}
    </div>
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var B,F,W;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.flexColumn}>
      <div style={storyStyles.centeredContainer}>
        <div style={storyStyles.label}>50% Width</div>
        <Divider length="50%" />
      </div>
      <div style={storyStyles.centeredContainer}>
        <div style={storyStyles.label}>200px Width</div>
        <Divider length={200} />
      </div>
      <div style={{
      ...storyStyles.flexRow,
      height: '80px',
      justifyContent: 'center'
    }}>
        <div style={{
        ...storyStyles.label,
        marginRight: spacingTokens.xs
      }}>50px Height</div>
        <Divider orientation="vertical" length={50} />
        <div style={{
        ...storyStyles.label,
        marginLeft: spacingTokens.xs
      }}>Vertical</div>
      </div>
    </div>
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var P,Y,_;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.navigationContainer}>
      <div style={storyStyles.section}>Home</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Search</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Your Library</div>
      <Divider spacing="md" color="secondary" />
      <div style={{
      ...storyStyles.section,
      ...storyStyles.label
    }}>Playlists</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Liked Songs</div>
    </div>
}`,...(_=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var q,G,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.headerContainer}>
      <div>Premium</div>
      <Divider orientation="vertical" spacing="md" length="20px" />
      <div>Support</div>
      <Divider orientation="vertical" spacing="md" length="20px" />
      <div>Download</div>
    </div>
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.showcaseContainer}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: spacingTokens.xl
    }}>
        <div>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacingTokens.md
        }}>Horizontal Dividers</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacingTokens.md
        }}>
            <Divider />
            <Divider color="brand" thickness={2} />
            <Divider variant="dashed" color="secondary" />
            <Divider variant="dotted" color="primary" thickness={3} />
          </div>
        </div>
        
        <div>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacingTokens.md
        }}>Vertical Dividers</h3>
          <div style={{
          ...storyStyles.flexRow,
          height: '60px'
        }}>
            <div style={{
            padding: \`0 \${spacingTokens.md}\`
          }}>Item 1</div>
            <Divider orientation="vertical" />
            <div style={{
            padding: \`0 \${spacingTokens.md}\`
          }}>Item 2</div>
            <Divider orientation="vertical" color="brand" thickness={2} />
            <div style={{
            padding: \`0 \${spacingTokens.md}\`
          }}>Item 3</div>
            <Divider orientation="vertical" variant="dashed" />
            <div style={{
            padding: \`0 \${spacingTokens.md}\`
          }}>Item 4</div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(Q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const ae=["Default","Horizontal","Vertical","Colors","Variants","Thickness","Spacing","CustomLength","InNavigation","InHeader","AllFeatures"];export{h as AllFeatures,c as Colors,p as CustomLength,o as Default,l as Horizontal,u as InHeader,g as InNavigation,y as Spacing,v as Thickness,m as Variants,d as Vertical,ae as __namedExportsOrder,ie as default};
