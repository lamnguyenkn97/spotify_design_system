import{R as e}from"./index-B-SYruCi.js";import{I as a,s as S,c as te}from"./Icon-pkSkNuYn.js";import{c as i}from"./colors-B2Ab1-XV.js";import{s as l}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import{f as le,b as n,e as C,g as s,h as ce,a as h,i as oe,j as ie,k as ne,c as de,l as me,m as ye,n as ve,o as ue,p as be,q as pe}from"./index-Cy0hq6F7.js";import"./index.es-CQ4XmKgj.js";import"./radius-CVqooa3C.js";const r={container:{color:i.primary.white,backgroundColor:i.primary.black,padding:l.lg},section:{marginBottom:l.lg},label:{color:i.grey.grey6,fontSize:"14px",marginBottom:l.lg,display:"block"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:l.md},flexRow:{display:"flex",alignItems:"center",gap:l.md,flexWrap:"wrap"},flexColumn:{display:"flex",flexDirection:"column",gap:l.lg},card:{padding:l.lg,backgroundColor:i.grey.grey1,borderRadius:"8px",textAlign:"center"}},Ie={title:"Atoms/Icon",component:a,parameters:{layout:"padded",docs:{description:{component:"A flexible icon component built on FontAwesome with multiple variants, sizes, and interaction states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:Object.keys(S),description:"Size of the icon using design tokens"},color:{control:"select",options:[...Object.keys(te),"custom"],description:"Color from design tokens or custom hex value"},variant:{control:"select",options:["default","rounded","outlined","filled"],description:"Visual variant of the icon"},clickable:{control:"boolean",description:"Whether the icon is clickable"},disabled:{control:"boolean",description:"Whether the icon is disabled"},spin:{control:"boolean",description:"FontAwesome spin animation"},pulse:{control:"boolean",description:"FontAwesome pulse animation"}}},c={args:{icon:le}},d={args:{icon:n,clickable:!0,color:"error","aria-label":"Like this song"}},m={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexRow},Object.keys(S).map(t=>e.createElement("div",{key:t,style:r.card},e.createElement("div",{style:r.label},t.toUpperCase()),e.createElement(a,{icon:C,size:t})))))},y={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.grid},Object.entries(te).map(([t,o])=>e.createElement("div",{key:t,style:r.card},e.createElement("div",{style:r.label},t.charAt(0).toUpperCase()+t.slice(1)),e.createElement("div",{style:r.label},"(",o,")"),e.createElement(a,{icon:n,color:t,size:"large"}))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Custom"),e.createElement("div",{style:r.label},"(#ff6b6b)"),e.createElement(a,{icon:n,color:"#ff6b6b",size:"large"}))))},v={render:()=>{const t=["default","rounded","outlined","filled"];return e.createElement("div",{style:r.container},e.createElement("div",{style:r.grid},t.map(o=>e.createElement("div",{key:o,style:r.card},e.createElement("div",{style:r.label},o.charAt(0).toUpperCase()+o.slice(1)),e.createElement(a,{icon:s,variant:o,size:"large",backgroundColor:o!=="default"?"brand":void 0})))))}},u={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexColumn},e.createElement("div",null,e.createElement("div",{style:r.label},"Default (Non-clickable)"),e.createElement(a,{icon:ce,size:"large"})),e.createElement("div",null,e.createElement("div",{style:r.label},"Clickable with Hover Color"),e.createElement(a,{icon:n,size:"large",clickable:!0,color:"muted",hoverColor:"error","aria-label":"Like"})),e.createElement("div",null,e.createElement("div",{style:r.label},"Disabled"),e.createElement(a,{icon:h,size:"large",clickable:!0,disabled:!0,"aria-label":"Download (disabled)"}))))},b={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexRow},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Spin"),e.createElement(a,{icon:oe,size:"large",spin:!0})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Pulse"),e.createElement(a,{icon:n,size:"large",pulse:!0,color:"error"})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Rotate 90°"),e.createElement(a,{icon:ie,size:"large",rotate:90})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Flip Horizontal"),e.createElement(a,{icon:ne,size:"large",flip:"horizontal"}))))},p={render:()=>{const[t,o]=e.useState(!1),[E,se]=e.useState(!1);return e.createElement("div",{style:{...r.container,textAlign:"center"}},e.createElement("div",{style:r.label},"Music Player Controls"),e.createElement("div",{style:r.flexRow},e.createElement(a,{icon:t?de:le,size:"small",clickable:!0,variant:"rounded",backgroundColor:"brand",onClick:()=>o(!t),"aria-label":t?"Pause":"Play"}),e.createElement(a,{icon:n,size:"medium",clickable:!0,color:E?"error":"muted",hoverColor:"error",onClick:()=>se(!E),"aria-label":E?"Unlike":"Like"}),e.createElement(a,{icon:h,size:"medium",clickable:!0,color:"muted",hoverColor:"primary","aria-label":"Download"}),e.createElement(a,{icon:me,size:"medium",clickable:!0,color:"muted",hoverColor:"primary","aria-label":"More options"})))}},g={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.label},"Navigation Bar"),e.createElement("div",{style:r.flexRow},e.createElement(a,{icon:ye,size:"medium",clickable:!0,color:"brand","aria-label":"Home"}),e.createElement(a,{icon:ne,size:"medium",clickable:!0,color:"muted",hoverColor:"primary","aria-label":"Search"}),e.createElement(a,{icon:C,size:"medium",clickable:!0,color:"muted",hoverColor:"primary","aria-label":"Your Library"}),e.createElement(a,{icon:ve,size:"medium",clickable:!0,color:"muted",hoverColor:"primary","aria-label":"Podcasts"})))},f={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexRow},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Success"),e.createElement(a,{icon:ue,variant:"rounded",backgroundColor:"success",color:"primary",size:"medium"})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Warning"),e.createElement(a,{icon:be,variant:"rounded",backgroundColor:"warning",color:"primary",size:"medium"})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Error"),e.createElement(a,{icon:pe,variant:"rounded",backgroundColor:"error",color:"primary",size:"medium"})),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Loading"),e.createElement(a,{icon:oe,variant:"rounded",backgroundColor:"brand",color:"primary",size:"medium",spin:!0}))))},k={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexColumn},e.createElement("div",null,e.createElement("h3",{style:{color:i.primary.white,marginBottom:l.md}},"Sizes"),e.createElement("div",{style:r.flexRow},Object.keys(S).map(t=>e.createElement(a,{key:t,icon:C,size:t})))),e.createElement("div",null,e.createElement("h3",{style:{color:i.primary.white,marginBottom:l.md}},"Variants"),e.createElement("div",{style:r.flexRow},e.createElement(a,{icon:s,variant:"default"}),e.createElement(a,{icon:s,variant:"rounded",backgroundColor:"brand"}),e.createElement(a,{icon:s,variant:"outlined",backgroundColor:"secondary"}),e.createElement(a,{icon:s,variant:"filled",backgroundColor:"muted"}))),e.createElement("div",null,e.createElement("h3",{style:{color:i.primary.white,marginBottom:l.md}},"Interactive"),e.createElement("div",{style:r.flexRow},e.createElement(a,{icon:n,clickable:!0,color:"muted",hoverColor:"error"}),e.createElement(a,{icon:h,clickable:!0,variant:"outlined"}),e.createElement(a,{icon:ie,clickable:!0,variant:"filled",backgroundColor:"brand"}))))),parameters:{layout:"fullscreen"}};var z,I,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: faPlay
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var x,P,R;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: faHeart,
    clickable: true,
    color: 'error',
    'aria-label': 'Like this song'
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var L,A,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        {Object.keys(sizeTokens).map(size => <div key={size} style={storyStyles.card}>
            <div style={storyStyles.label}>{size.toUpperCase()}</div>
            <Icon icon={faMusic} size={size as any} />
          </div>)}
      </div>
    </div>
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,M,T;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        {Object.entries(colorTokens).map(([colorName, colorValue]) => <div key={colorName} style={storyStyles.card}>
            <div style={storyStyles.label}>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </div>
            <div style={storyStyles.label}>({colorValue})</div>
            <Icon icon={faHeart} color={colorName as any} size="large" />
          </div>)}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Custom</div>
          <div style={storyStyles.label}>(#ff6b6b)</div>
          <Icon icon={faHeart} color="#ff6b6b" size="large" />
        </div>
      </div>
    </div>
}`,...(T=(M=y.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var B,U,j;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const variants = ['default', 'rounded', 'outlined', 'filled'] as const;
    return <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {variants.map(variant => <div key={variant} style={storyStyles.card}>
              <div style={storyStyles.label}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </div>
              <Icon icon={faCog} variant={variant} size="large" backgroundColor={variant !== 'default' ? 'brand' : undefined} />
            </div>)}
        </div>
      </div>;
  }
}`,...(j=(U=v.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var O,N,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div>
          <div style={storyStyles.label}>Default (Non-clickable)</div>
          <Icon icon={faUser} size="large" />
        </div>

        <div>
          <div style={storyStyles.label}>Clickable with Hover Color</div>
          <Icon icon={faHeart} size="large" clickable color="muted" hoverColor="error" aria-label="Like" />
        </div>

        <div>
          <div style={storyStyles.label}>Disabled</div>
          <Icon icon={faDownload} size="large" clickable disabled aria-label="Download (disabled)" />
        </div>
      </div>
    </div>
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var V,W,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Spin</div>
          <Icon icon={faSpinner} size="large" spin />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Pulse</div>
          <Icon icon={faHeart} size="large" pulse color="error" />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Rotate 90°</div>
          <Icon icon={faShare} size="large" rotate={90} />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Flip Horizontal</div>
          <Icon icon={faSearch} size="large" flip="horizontal" />
        </div>
      </div>
    </div>
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var _,q,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);
    return <div style={{
      ...storyStyles.container,
      textAlign: 'center'
    }}>
        <div style={storyStyles.label}>Music Player Controls</div>
        <div style={storyStyles.flexRow}>
          <Icon icon={isPlaying ? faPause : faPlay} size="small" clickable variant="rounded" backgroundColor="brand" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause' : 'Play'} />
          <Icon icon={faHeart} size="medium" clickable color={isLiked ? 'error' : 'muted'} hoverColor="error" onClick={() => setIsLiked(!isLiked)} aria-label={isLiked ? 'Unlike' : 'Like'} />
          <Icon icon={faDownload} size="medium" clickable color="muted" hoverColor="primary" aria-label="Download" />
          <Icon icon={faEllipsis} size="medium" clickable color="muted" hoverColor="primary" aria-label="More options" />
        </div>
      </div>;
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.label}>Navigation Bar</div>
      <div style={storyStyles.flexRow}>
        <Icon icon={faHome} size="medium" clickable color="brand" aria-label="Home" />
        <Icon icon={faSearch} size="medium" clickable color="muted" hoverColor="primary" aria-label="Search" />
        <Icon icon={faMusic} size="medium" clickable color="muted" hoverColor="primary" aria-label="Your Library" />
        <Icon icon={faMicrophone} size="medium" clickable color="muted" hoverColor="primary" aria-label="Podcasts" />
      </div>
    </div>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Success</div>
          <Icon icon={faCheck} variant="rounded" backgroundColor="success" color="primary" size="medium" />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Warning</div>
          <Icon icon={faExclamationTriangle} variant="rounded" backgroundColor="warning" color="primary" size="medium" />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Error</div>
          <Icon icon={faTimes} variant="rounded" backgroundColor="error" color="primary" size="medium" />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Loading</div>
          <Icon icon={faSpinner} variant="rounded" backgroundColor="brand" color="primary" size="medium" spin />
        </div>
      </div>
    </div>
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>
            Sizes
          </h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(sizeTokens).map(size => <Icon key={size} icon={faMusic} size={size as any} />)}
          </div>
        </div>

        <div>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>
            Variants
          </h3>
          <div style={storyStyles.flexRow}>
            <Icon icon={faCog} variant="default" />
            <Icon icon={faCog} variant="rounded" backgroundColor="brand" />
            <Icon icon={faCog} variant="outlined" backgroundColor="secondary" />
            <Icon icon={faCog} variant="filled" backgroundColor="muted" />
          </div>
        </div>

        <div>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>
            Interactive
          </h3>
          <div style={storyStyles.flexRow}>
            <Icon icon={faHeart} clickable color="muted" hoverColor="error" />
            <Icon icon={faDownload} clickable variant="outlined" />
            <Icon icon={faShare} clickable variant="filled" backgroundColor="brand" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const we=["Default","Clickable","Sizes","Colors","Variants","InteractiveStates","Animations","MusicPlayerControls","NavigationIcons","StatusIcons","AllFeatures"];export{k as AllFeatures,b as Animations,d as Clickable,y as Colors,c as Default,u as InteractiveStates,p as MusicPlayerControls,g as NavigationIcons,m as Sizes,f as StatusIcons,v as Variants,we as __namedExportsOrder,Ie as default};
