import{R as e}from"./index-B-SYruCi.js";import{T as a}from"./Typography-Brz-xasK.js";import{c as o}from"./colors-B2Ab1-XV.js";import{s}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import{S as l}from"./Stack-BpWiWNDN.js";import"./radius-CVqooa3C.js";const r={container:{color:o.primary.white,backgroundColor:o.primary.black,padding:s.lg},section:{marginBottom:s.xl},label:{color:o.grey.grey6,fontSize:"12px",marginBottom:s.sm,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.5px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:s.lg},flexRow:{display:"flex",alignItems:"baseline",gap:s.lg,flexWrap:"wrap"},flexColumn:{display:"flex",flexDirection:"column",gap:s.md},card:{padding:s.lg,backgroundColor:o.grey.grey1,borderRadius:"8px",border:`1px solid ${o.grey.grey2}`},hierarchy:{backgroundColor:o.grey.grey1,padding:s.xl,borderRadius:"12px",border:`1px solid ${o.grey.grey2}`}},Sr={title:"Atoms/Typography/Text",component:a,parameters:{layout:"padded",docs:{description:{component:"A flexible typography component that provides consistent text styling across the design system with support for multiple variants, weights, colors, and semantic HTML elements."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","caption"],description:"Typography variant defining size and styling"},weight:{control:"select",options:["light","regular","medium","bold"],description:"Font weight from design tokens"},color:{control:"select",options:["primary","secondary","muted","danger"],description:"Text color from design tokens"},component:{control:"text",description:"HTML element to render (h1, p, span, etc.)"}}},c={args:{children:"The quick brown fox jumps over the lazy dog",variant:"body1"}},d={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.hierarchy},e.createElement(l,{direction:"column",spacing:"lg"},e.createElement(a,{variant:"h1"},"The Music Never Stops"),e.createElement(a,{variant:"h2"},"Discover Your Sound"),e.createElement(a,{variant:"h3"},"Featured Playlists"),e.createElement(a,{variant:"h4"},"Recently Played"),e.createElement(a,{variant:"h5"},"Quick Actions"),e.createElement(a,{variant:"h6"},"Settings"),e.createElement(a,{variant:"body1"},"Stream millions of songs and podcasts for free. Get the music you love, discover new tracks, and create your perfect playlists."),e.createElement(a,{variant:"body2"},"Enjoy unlimited access to your favorite artists, albums, and playlists across all your devices."),e.createElement(a,{variant:"caption"},"*Premium features require subscription"))))},y={render:()=>{const i=["h1","h2","h3","h4","h5","h6","body1","body2","caption"];return e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexColumn},i.map(n=>e.createElement("div",{key:n,style:r.card},e.createElement("div",{style:r.label},n.toUpperCase()),e.createElement(a,{variant:n},"The quick brown fox jumps over the lazy dog")))))}},p={render:()=>{const i=["light","regular","medium","bold"];return e.createElement("div",{style:r.container},e.createElement("div",{style:r.grid},i.map(n=>e.createElement("div",{key:n,style:r.card},e.createElement("div",{style:r.label},n," (body1)"),e.createElement(a,{variant:"body1",weight:n},"The quick brown fox jumps over the lazy dog")))))}},m={render:()=>{const i=["primary","secondary","muted","danger"];return e.createElement("div",{style:r.container},e.createElement("div",{style:r.grid},i.map(n=>e.createElement("div",{key:n,style:r.card},e.createElement("div",{style:r.label},n," color"),e.createElement(a,{variant:"body1",color:n},"The quick brown fox jumps over the lazy dog")))))}},g={render:()=>e.createElement("div",{style:r.container},e.createElement("div",{style:r.flexColumn},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"H1 style as <p> element"),e.createElement(a,{variant:"h1",component:"p"},"Visually H1, semantically paragraph")),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Body style as <h2> element"),e.createElement(a,{variant:"body1",component:"h2"},"Visually body text, semantically H2 heading")),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Caption as <figcaption>"),e.createElement(a,{variant:"caption",component:"figcaption"},"Image caption text with proper semantic meaning"))))},h={render:()=>e.createElement("div",{style:r.container},e.createElement(l,{direction:"column",spacing:"xl"},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Song Card"),e.createElement(l,{direction:"column",spacing:"xs"},e.createElement(a,{variant:"body1",weight:"medium"},"Blinding Lights"),e.createElement(a,{variant:"body2",color:"muted"},"The Weeknd"),e.createElement(a,{variant:"caption",color:"muted"},"After Hours • 2020"))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Playlist Header"),e.createElement(l,{direction:"column",spacing:"sm"},e.createElement(a,{variant:"caption",color:"muted"},"PLAYLIST"),e.createElement(a,{variant:"h1",weight:"bold"},"Today's Top Hits"),e.createElement(a,{variant:"body1",color:"secondary"},"The most played songs right now."),e.createElement(a,{variant:"caption",color:"muted"},"Spotify • 2,847,582 likes • 50 songs, about 2 hr 30 min"))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Artist Profile"),e.createElement(l,{direction:"column",spacing:"sm"},e.createElement(a,{variant:"caption",color:"muted"},"ARTIST"),e.createElement(a,{variant:"h1",weight:"bold"},"The Weeknd"),e.createElement(a,{variant:"body1",color:"secondary"},"85,234,567 monthly listeners")))))},v={render:()=>{const[i,n]=e.useState("h1"),[A,ir]=e.useState("regular"),[j,lr]=e.useState("primary"),cr=["h1","h2","h3","h4","h5","h6","body1","body2","caption"],dr=["light","regular","medium","bold"],yr=["primary","secondary","muted","danger"];return e.createElement("div",{style:r.container},e.createElement(l,{direction:"column",spacing:"xl"},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Interactive Playground"),e.createElement(l,{direction:"column",spacing:"md"},e.createElement("div",null,e.createElement("label",{style:r.label},"Variant:"),e.createElement("select",{value:i,onChange:t=>n(t.target.value),style:{padding:"8px",marginLeft:"8px",backgroundColor:o.grey.grey2,color:o.primary.white,border:"none",borderRadius:"4px"}},cr.map(t=>e.createElement("option",{key:t,value:t},t)))),e.createElement("div",null,e.createElement("label",{style:r.label},"Weight:"),e.createElement("select",{value:A,onChange:t=>ir(t.target.value),style:{padding:"8px",marginLeft:"8px",backgroundColor:o.grey.grey2,color:o.primary.white,border:"none",borderRadius:"4px"}},dr.map(t=>e.createElement("option",{key:t,value:t},t)))),e.createElement("div",null,e.createElement("label",{style:r.label},"Color:"),e.createElement("select",{value:j,onChange:t=>lr(t.target.value),style:{padding:"8px",marginLeft:"8px",backgroundColor:o.grey.grey2,color:o.primary.white,border:"none",borderRadius:"4px"}},yr.map(t=>e.createElement("option",{key:t,value:t},t)))))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Result: ",i," / ",A," / ",j),e.createElement(a,{variant:i,weight:A,color:j},"The quick brown fox jumps over the lazy dog"))))}},u={render:()=>e.createElement("div",{style:r.container},e.createElement(l,{direction:"column",spacing:"lg"},e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Basic Usage"),e.createElement("pre",{style:{fontFamily:"monospace",fontSize:"12px",color:o.grey.grey4,margin:0,whiteSpace:"pre-wrap"}},`<Typography variant="h1">
  Page Title
</Typography>`),e.createElement("div",{style:{marginTop:s.md}},e.createElement(a,{variant:"h1"},"Page Title"))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"With Custom Component"),e.createElement("pre",{style:{fontFamily:"monospace",fontSize:"12px",color:o.grey.grey4,margin:0,whiteSpace:"pre-wrap"}},`<Typography variant="h2" component="p">
  Looks like H2, but semantic P
</Typography>`),e.createElement("div",{style:{marginTop:s.md}},e.createElement(a,{variant:"h2",component:"p"},"Looks like H2, but semantic P"))),e.createElement("div",{style:r.card},e.createElement("div",{style:r.label},"Weight & Color Combinations"),e.createElement("pre",{style:{fontFamily:"monospace",fontSize:"12px",color:o.grey.grey4,margin:0,whiteSpace:"pre-wrap"}},`<Typography variant="body1" weight="bold" color="danger">
  Error message
</Typography>`),e.createElement("div",{style:{marginTop:s.md}},e.createElement(a,{variant:"body1",weight:"bold",color:"danger"},"Error message")))))},b={args:{variant:"h1",children:"Heading 1"}},S={args:{variant:"h2",children:"Heading 2"}},T={args:{variant:"h3",children:"Heading 3"}},E={args:{variant:"h4",children:"Heading 4"}},x={args:{variant:"h5",children:"Heading 5"}},f={args:{variant:"h6",children:"Heading 6"}},C={args:{variant:"body1",children:"Body text large"}},w={args:{variant:"body2",children:"Body text small"}},k={args:{variant:"caption",children:"Caption text"}},H={args:{variant:"body1",weight:"light",children:"Light Text (300)"}},P={args:{variant:"body1",weight:"regular",children:"Regular Text (400)"}},R={args:{variant:"body1",weight:"medium",children:"Medium Text (500)"}},W={args:{variant:"body1",weight:"bold",children:"Bold Text (700)"}},V={args:{variant:"body1",color:"primary",children:"Primary Color"}},L={args:{variant:"body1",color:"secondary",children:"Secondary Color"}},B={args:{variant:"body1",color:"muted",children:"Muted Color"}},z={args:{variant:"body1",color:"danger",children:"Danger Color"}};var q,F,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body1'
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var I,D,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.hierarchy}>
        <Stack direction="column" spacing="lg">
          <Typography variant="h1">The Music Never Stops</Typography>
          <Typography variant="h2">Discover Your Sound</Typography>
          <Typography variant="h3">Featured Playlists</Typography>
          <Typography variant="h4">Recently Played</Typography>
          <Typography variant="h5">Quick Actions</Typography>
          <Typography variant="h6">Settings</Typography>
          <Typography variant="body1">
            Stream millions of songs and podcasts for free. Get the music you love, 
            discover new tracks, and create your perfect playlists.
          </Typography>
          <Typography variant="body2">
            Enjoy unlimited access to your favorite artists, albums, and playlists 
            across all your devices.
          </Typography>
          <Typography variant="caption">
            *Premium features require subscription
          </Typography>
        </Stack>
      </div>
    </div>
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var O,Y,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'];
    return <div style={storyStyles.container}>
        <div style={storyStyles.flexColumn}>
          {variants.map(variant => <div key={variant} style={storyStyles.card}>
              <div style={storyStyles.label}>{variant.toUpperCase()}</div>
              <Typography variant={variant}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>)}
        </div>
      </div>;
  }
}`,...(G=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var N,Q,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const weights: TypographyWeight[] = ['light', 'regular', 'medium', 'bold'];
    return <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {weights.map(weight => <div key={weight} style={storyStyles.card}>
              <div style={storyStyles.label}>{weight} (body1)</div>
              <Typography variant="body1" weight={weight}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>)}
        </div>
      </div>;
  }
}`,...(_=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var $,J,K;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const colorVariants: TypographyColor[] = ['primary', 'secondary', 'muted', 'danger'];
    return <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {colorVariants.map(color => <div key={color} style={storyStyles.card}>
              <div style={storyStyles.label}>{color} color</div>
              <Typography variant="body1" color={color}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>)}
        </div>
      </div>;
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>H1 style as &lt;p&gt; element</div>
          <Typography variant="h1" component="p">
            Visually H1, semantically paragraph
          </Typography>
        </div>
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Body style as &lt;h2&gt; element</div>
          <Typography variant="body1" component="h2">
            Visually body text, semantically H2 heading
          </Typography>
        </div>
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Caption as &lt;figcaption&gt;</div>
          <Typography variant="caption" component="figcaption">
            Image caption text with proper semantic meaning
          </Typography>
        </div>
      </div>
    </div>
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <Stack direction="column" spacing="xl">
        
        {/* Song Card Example */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Song Card</div>
          <Stack direction="column" spacing="xs">
            <Typography variant="body1" weight="medium">
              Blinding Lights
            </Typography>
            <Typography variant="body2" color="muted">
              The Weeknd
            </Typography>
            <Typography variant="caption" color="muted">
              After Hours • 2020
            </Typography>
          </Stack>
        </div>

        {/* Playlist Header */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Playlist Header</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" color="muted">
              PLAYLIST
            </Typography>
            <Typography variant="h1" weight="bold">
              Today's Top Hits
            </Typography>
            <Typography variant="body1" color="secondary">
              The most played songs right now.
            </Typography>
            <Typography variant="caption" color="muted">
              Spotify • 2,847,582 likes • 50 songs, about 2 hr 30 min
            </Typography>
          </Stack>
        </div>

        {/* Artist Profile */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Artist Profile</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" color="muted">
              ARTIST
            </Typography>
            <Typography variant="h1" weight="bold">
              The Weeknd
            </Typography>
            <Typography variant="body1" color="secondary">
              85,234,567 monthly listeners
            </Typography>
          </Stack>
        </div>

      </Stack>
    </div>
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,se;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<TypographyVariant>('h1');
    const [selectedWeight, setSelectedWeight] = React.useState<TypographyWeight>('regular');
    const [selectedColor, setSelectedColor] = React.useState<TypographyColor>('primary');
    const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'];
    const weights: TypographyWeight[] = ['light', 'regular', 'medium', 'bold'];
    const colorOptions: TypographyColor[] = ['primary', 'secondary', 'muted', 'danger'];
    return <div style={storyStyles.container}>
        <Stack direction="column" spacing="xl">
          
          {/* Controls */}
          <div style={storyStyles.card}>
            <div style={storyStyles.label}>Interactive Playground</div>
            <Stack direction="column" spacing="md">
              
              <div>
                <label style={storyStyles.label}>Variant:</label>
                <select value={selectedVariant} onChange={e => setSelectedVariant(e.target.value as TypographyVariant)} style={{
                padding: '8px',
                marginLeft: '8px',
                backgroundColor: colors.grey.grey2,
                color: colors.primary.white,
                border: 'none',
                borderRadius: '4px'
              }}>
                  {variants.map(variant => <option key={variant} value={variant}>{variant}</option>)}
                </select>
              </div>
              
              <div>
                <label style={storyStyles.label}>Weight:</label>
                <select value={selectedWeight} onChange={e => setSelectedWeight(e.target.value as TypographyWeight)} style={{
                padding: '8px',
                marginLeft: '8px',
                backgroundColor: colors.grey.grey2,
                color: colors.primary.white,
                border: 'none',
                borderRadius: '4px'
              }}>
                  {weights.map(weight => <option key={weight} value={weight}>{weight}</option>)}
                </select>
              </div>
              
              <div>
                <label style={storyStyles.label}>Color:</label>
                <select value={selectedColor} onChange={e => setSelectedColor(e.target.value as TypographyColor)} style={{
                padding: '8px',
                marginLeft: '8px',
                backgroundColor: colors.grey.grey2,
                color: colors.primary.white,
                border: 'none',
                borderRadius: '4px'
              }}>
                  {colorOptions.map(color => <option key={color} value={color}>{color}</option>)}
                </select>
              </div>
              
            </Stack>
          </div>

          {/* Result */}
          <div style={storyStyles.card}>
            <div style={storyStyles.label}>
              Result: {selectedVariant} / {selectedWeight} / {selectedColor}
            </div>
            <Typography variant={selectedVariant} weight={selectedWeight} color={selectedColor}>
              The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
          
        </Stack>
      </div>;
  }
}`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,ce;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Basic Usage</div>
          <pre style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: colors.grey.grey4,
          margin: 0,
          whiteSpace: 'pre-wrap'
        }}>
          {\`<Typography variant="h1">
  Page Title
</Typography>\`}
          </pre>
          <div style={{
          marginTop: spacing.md
        }}>
            <Typography variant="h1">Page Title</Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>With Custom Component</div>
          <pre style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: colors.grey.grey4,
          margin: 0,
          whiteSpace: 'pre-wrap'
        }}>
          {\`<Typography variant="h2" component="p">
  Looks like H2, but semantic P
</Typography>\`}
          </pre>
          <div style={{
          marginTop: spacing.md
        }}>
            <Typography variant="h2" component="p">
              Looks like H2, but semantic P
            </Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Weight & Color Combinations</div>
          <pre style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: colors.grey.grey4,
          margin: 0,
          whiteSpace: 'pre-wrap'
        }}>
          {\`<Typography variant="body1" weight="bold" color="danger">
  Error message
</Typography>\`}
          </pre>
          <div style={{
          marginTop: spacing.md
        }}>
            <Typography variant="body1" weight="bold" color="danger">
              Error message
            </Typography>
          </div>
        </div>

      </Stack>
    </div>
}`,...(ce=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ye,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
}`,...(pe=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var me,ge,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,ue,be;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Heading 3'
  }
}`,...(be=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var Se,Te,Ee;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'Heading 4'
  }
}`,...(Ee=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var xe,fe,Ce;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Heading 5'
  }
}`,...(Ce=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var we,ke,He;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    variant: 'h6',
    children: 'Heading 6'
  }
}`,...(He=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var Pe,Re,We;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: 'Body text large'
  }
}`,...(We=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var Ve,Le,Be;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    variant: 'body2',
    children: 'Body text small'
  }
}`,...(Be=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var ze,Ae,je;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'Caption text'
  }
}`,...(je=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var qe,Fe,Me;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    weight: 'light',
    children: 'Light Text (300)'
  }
}`,...(Me=(Fe=H.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ie,De,Ue;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    weight: 'regular',
    children: 'Regular Text (400)'
  }
}`,...(Ue=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Ue.source}}};var Oe,Ye,Ge;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    weight: 'medium',
    children: 'Medium Text (500)'
  }
}`,...(Ge=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Ne,Qe,_e;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    weight: 'bold',
    children: 'Bold Text (700)'
  }
}`,...(_e=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var $e,Je,Ke;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    color: 'primary',
    children: 'Primary Color'
  }
}`,...(Ke=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Xe,Ze,er;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    color: 'secondary',
    children: 'Secondary Color'
  }
}`,...(er=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,ar,tr;B.parameters={...B.parameters,docs:{...(rr=B.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    color: 'muted',
    children: 'Muted Color'
  }
}`,...(tr=(ar=B.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var or,nr,sr;z.parameters={...z.parameters,docs:{...(or=z.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    color: 'danger',
    children: 'Danger Color'
  }
}`,...(sr=(nr=z.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};const Tr=["Default","Hierarchy","AllVariants","FontWeights","Colors","SemanticComponents","SpotifyExamples","InteractiveCombinations","UsageExamples","H1","H2","H3","H4","H5","H6","Body1","Body2","Caption","Light","Regular","Medium","Bold","PrimaryColor","SecondaryColor","MutedColor","DangerColor"];export{y as AllVariants,C as Body1,w as Body2,W as Bold,k as Caption,m as Colors,z as DangerColor,c as Default,p as FontWeights,b as H1,S as H2,T as H3,E as H4,x as H5,f as H6,d as Hierarchy,v as InteractiveCombinations,H as Light,R as Medium,B as MutedColor,V as PrimaryColor,P as Regular,L as SecondaryColor,g as SemanticComponents,h as SpotifyExamples,u as UsageExamples,Tr as __namedExportsOrder,Sr as default};
