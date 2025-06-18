import{R as e}from"./index-B-SYruCi.js";import{I as l,s as w,a as k}from"./Image-Cs63UF0a.js";import{c as o}from"./colors-B2Ab1-XV.js";import{s}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import"./index.es-CQ4XmKgj.js";import"./radius-CVqooa3C.js";import"./index-Cy0hq6F7.js";import"./index-fYcu5K3v.js";const r={portrait:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",landscape:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",square:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",album:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",fallback:"https://via.placeholder.com/400x400/1db954/ffffff?text=Spotify",broken:"https://this-url-does-not-exist-for-demo.jpg"},t={container:{color:o.primary.white,backgroundColor:o.primary.black,padding:s.lg},section:{marginBottom:s.xl},label:{color:o.grey.grey6,fontSize:"14px",marginBottom:s.sm,display:"block"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:s.lg},flexRow:{display:"flex",alignItems:"center",gap:s.lg,flexWrap:"wrap"},flexColumn:{display:"flex",flexDirection:"column",gap:s.lg},card:{padding:s.md,backgroundColor:o.grey.grey1,borderRadius:"8px",textAlign:"center"},demoContainer:{display:"flex",flexDirection:"column",alignItems:"center",gap:s.sm}},we={title:"Atoms/Image",component:l,parameters:{layout:"padded",docs:{description:{component:"A flexible image component with multiple shapes, sizes, loading states, and FontAwesome icon placeholders for error handling."}}},tags:["autodocs"],argTypes:{width:{control:"select",options:[...Object.keys(w),"auto","200px"],description:"Width using size tokens or custom value"},height:{control:"select",options:[...Object.keys(w),"auto","200px"],description:"Height using size tokens or custom value"},shape:{control:"select",options:Object.keys(k),description:"Shape variant of the image"},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"],description:"How the image fits within its container"},placeholder:{control:"select",options:["blur","empty","skeleton","custom"],description:"Type of placeholder while loading"},placeholderType:{control:"select",options:["avatar","album","playlist","image","broken","spotify"],description:"Type of placeholder for errors/missing images"},placeholderIconSize:{control:"select",options:["xs","sm","lg","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],description:"Size of the FontAwesome placeholder icon"},lazy:{control:"boolean",description:"Whether to lazy load the image"}}},n={args:{src:r.landscape,alt:"Beautiful landscape",width:"lg",height:"md"}},d={args:{src:r.portrait,alt:"Profile picture",shape:"circle",width:"lg"}},c={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.grid},Object.keys(w).filter(a=>a!=="full").map(a=>e.createElement("div",{key:a,style:t.demoContainer},e.createElement("div",{style:t.label},a.toUpperCase()),e.createElement(l,{src:r.square,alt:`${a} image`,width:a,height:a,shape:"rounded"})))))},m={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.flexRow},Object.keys(k).map(a=>e.createElement("div",{key:a,style:t.demoContainer},e.createElement("div",{style:t.label},a.charAt(0).toUpperCase()+a.slice(1)),e.createElement(l,{src:r.portrait,alt:`${a} image`,shape:a,width:"lg",height:"lg"})))))},p={render:()=>{const a=["cover","contain","fill","scale-down"];return e.createElement("div",{style:t.container},e.createElement("div",{style:t.grid},a.map(i=>e.createElement("div",{key:i,style:t.demoContainer},e.createElement("div",{style:t.label},i.toUpperCase()),e.createElement(l,{src:r.landscape,alt:`${i} example`,objectFit:i,width:"md",height:"md",shape:"rounded"})))))}},y={render:()=>{const a=[{ratio:"16/9",label:"16:9 (Video)"},{ratio:"4/3",label:"4:3 (Standard)"},{ratio:"1/1",label:"1:1 (Square)"},{ratio:"3/4",label:"3:4 (Portrait)"}];return e.createElement("div",{style:t.container},e.createElement("div",{style:t.grid},a.map(({ratio:i,label:I})=>e.createElement("div",{key:i,style:t.demoContainer},e.createElement("div",{style:t.label},I),e.createElement(l,{src:r.landscape,alt:`${I} aspect ratio`,aspectRatio:i,width:"full",height:"auto",shape:"rounded"})))))}},h={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.grid},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Blur Placeholder"),e.createElement(l,{src:r.album,alt:"Blur loading",width:"lg",height:"lg",placeholder:"blur",loading:!0})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Skeleton Placeholder"),e.createElement(l,{src:r.album,alt:"Skeleton loading",width:"lg",height:"lg",placeholder:"skeleton",loading:!0})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Empty Placeholder"),e.createElement(l,{src:r.album,alt:"Empty loading",width:"lg",height:"lg",placeholder:"empty",loading:!0})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Custom Placeholder"),e.createElement(l,{src:r.album,alt:"Custom loading",width:"lg",height:"lg",placeholder:"custom",placeholderContent:e.createElement("div",{style:{color:o.primary.brand}},"🎵 Loading..."),loading:!0}))))},g={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"Error Handling"),e.createElement("div",{style:t.grid},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"No URL (FontAwesome Default)"),e.createElement(l,{src:"",alt:"No image",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Broken URL (FontAwesome Error)"),e.createElement(l,{src:r.broken,alt:"Broken image",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"With Fallback URL"),e.createElement(l,{src:r.broken,alt:"Image with fallback",fallbackSrc:r.fallback,width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Working Image"),e.createElement(l,{src:r.portrait,alt:"Working image",width:"lg",height:"lg",shape:"rounded"})))))},v={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"Placeholder Icon Sizes"),e.createElement("div",{style:t.flexRow},["1x","2x","3x","4x","5x"].map(a=>e.createElement("div",{key:a,style:t.demoContainer},e.createElement("div",{style:t.label},a),e.createElement(l,{src:"",alt:`${a} placeholder`,placeholderType:"album",placeholderIconSize:a,width:"lg",height:"lg",shape:"rounded"}))))))},u={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"FontAwesome Placeholder Types"),e.createElement("div",{style:t.grid},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Avatar (faUser)"),e.createElement(l,{src:"",alt:"Avatar placeholder",placeholderType:"avatar",width:"lg",height:"lg",shape:"circle"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Album (faCompactDisc)"),e.createElement(l,{src:"",alt:"Album placeholder",placeholderType:"album",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Playlist (faList)"),e.createElement(l,{src:"",alt:"Playlist placeholder",placeholderType:"playlist",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Image (faImage)"),e.createElement(l,{src:"",alt:"Generic image placeholder",placeholderType:"image",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Broken (faExclamationTriangle)"),e.createElement(l,{src:"",alt:"Broken image placeholder",placeholderType:"broken",width:"lg",height:"lg",shape:"rounded"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Spotify (faSpotify)"),e.createElement(l,{src:"",alt:"Spotify placeholder",placeholderType:"spotify",width:"lg",height:"lg",shape:"rounded"})))))},b={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.label},"Album Covers"),e.createElement("div",{style:t.flexRow},e.createElement(l,{src:r.album,alt:"Album cover",placeholderType:"album",shape:"rounded",width:"lg",height:"lg"}),e.createElement(l,{src:"",alt:"No album cover",placeholderType:"album",shape:"rounded",width:"md",height:"md"}),e.createElement(l,{src:r.broken,alt:"Broken album cover",placeholderType:"album",shape:"rounded",width:"sm",height:"sm"})))},f={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.label},"User Profile Pictures"),e.createElement("div",{style:t.flexRow},e.createElement(l,{src:r.portrait,alt:"User profile",placeholderType:"avatar",shape:"circle",width:"xl",height:"xl"}),e.createElement(l,{src:r.square,alt:"User profile",placeholderType:"avatar",shape:"circle",width:"lg",height:"lg"}),e.createElement(l,{src:"",alt:"No avatar",placeholderType:"avatar",shape:"circle",width:"md",height:"md"}),e.createElement(l,{src:r.broken,alt:"Broken avatar",placeholderType:"avatar",shape:"circle",width:"sm",height:"sm"})))},E={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.label},"Playlist Covers"),e.createElement("div",{style:t.grid},e.createElement(l,{src:r.landscape,alt:"Playlist cover",placeholderType:"playlist",aspectRatio:"1/1",width:"full",shape:"rounded"}),e.createElement(l,{src:"",alt:"No playlist cover",placeholderType:"playlist",aspectRatio:"1/1",width:"full",shape:"rounded"}),e.createElement(l,{src:r.album,alt:"Playlist cover",placeholderType:"playlist",aspectRatio:"1/1",width:"full",shape:"rounded"}),e.createElement(l,{src:r.broken,alt:"Broken playlist cover",placeholderType:"playlist",aspectRatio:"1/1",width:"full",shape:"rounded"})))},S={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"Sizes"),e.createElement("div",{style:t.flexRow},Object.keys(w).filter(a=>a!=="full").map(a=>e.createElement(l,{key:a,src:r.square,alt:`${a} image`,width:a,height:a,shape:"rounded"})))),e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"Shapes"),e.createElement("div",{style:t.flexRow},Object.keys(k).map(a=>e.createElement(l,{key:a,src:r.portrait,alt:`${a} image`,shape:a,width:"lg",height:"lg"})))),e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:o.primary.white,marginBottom:s.md}},"Real World Examples"),e.createElement("div",{style:t.flexRow},e.createElement(l,{src:r.album,alt:"Album",shape:"rounded",width:"lg",height:"lg"}),e.createElement(l,{src:r.portrait,alt:"Profile",shape:"circle",width:"lg",height:"lg"}),e.createElement(l,{src:r.landscape,alt:"Banner",aspectRatio:"16/9",width:"200px",shape:"rounded"}))))),parameters:{layout:"fullscreen"}};var x,C,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: sampleImages.landscape,
    alt: 'Beautiful landscape',
    width: 'lg',
    height: 'md'
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var P,R,B;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    src: sampleImages.portrait,
    alt: 'Profile picture',
    shape: 'circle',
    width: 'lg'
  }
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var A,z,U;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        {Object.keys(sizeTokens).filter(size => size !== 'full').map(size => <div key={size} style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>{size.toUpperCase()}</div>
            <Image src={sampleImages.square} alt={\`\${size} image\`} width={size as any} height={size as any} shape="rounded" />
          </div>)}
      </div>
    </div>
}`,...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var j,F,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        {Object.keys(shapeTokens).map(shape => <div key={shape} style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</div>
            <Image src={sampleImages.portrait} alt={\`\${shape} image\`} shape={shape as any} width="lg" height="lg" />
          </div>)}
      </div>
    </div>
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var $,L,W;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const fits = ['cover', 'contain', 'fill', 'scale-down'] as const;
    return <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {fits.map(fit => <div key={fit} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{fit.toUpperCase()}</div>
              <Image src={sampleImages.landscape} alt={\`\${fit} example\`} objectFit={fit} width="md" height="md" shape="rounded" />
            </div>)}
        </div>
      </div>;
  }
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var N,q,D;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const ratios = [{
      ratio: '16/9',
      label: '16:9 (Video)'
    }, {
      ratio: '4/3',
      label: '4:3 (Standard)'
    }, {
      ratio: '1/1',
      label: '1:1 (Square)'
    }, {
      ratio: '3/4',
      label: '3:4 (Portrait)'
    }];
    return <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {ratios.map(({
          ratio,
          label
        }) => <div key={ratio} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{label}</div>
              <Image src={sampleImages.landscape} alt={\`\${label} aspect ratio\`} aspectRatio={ratio} width="full" height="auto" shape="rounded" />
            </div>)}
        </div>
      </div>;
  }
}`,...(D=(q=y.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var H,G,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Blur Placeholder</div>
          <Image src={sampleImages.album} alt="Blur loading" width="lg" height="lg" placeholder="blur" loading />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Skeleton Placeholder</div>
          <Image src={sampleImages.album} alt="Skeleton loading" width="lg" height="lg" placeholder="skeleton" loading />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Empty Placeholder</div>
          <Image src={sampleImages.album} alt="Empty loading" width="lg" height="lg" placeholder="empty" loading />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Custom Placeholder</div>
          <Image src={sampleImages.album} alt="Custom loading" width="lg" height="lg" placeholder="custom" placeholderContent={<div style={{
          color: colors.primary.brand
        }}>🎵 Loading...</div>} loading />
        </div>
      </div>
    </div>
}`,...(M=(G=h.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,_,J;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Error Handling</h3>
        <div style={storyStyles.grid}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>No URL (FontAwesome Default)</div>
            <Image src="" alt="No image" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Broken URL (FontAwesome Error)</div>
            <Image src={sampleImages.broken} alt="Broken image" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>With Fallback URL</div>
            <Image src={sampleImages.broken} alt="Image with fallback" fallbackSrc={sampleImages.fallback} width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Working Image</div>
            <Image src={sampleImages.portrait} alt="Working image" width="lg" height="lg" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
}`,...(J=(_=g.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Placeholder Icon Sizes</h3>
        <div style={storyStyles.flexRow}>
          {['1x', '2x', '3x', '4x', '5x'].map(size => <div key={size} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{size}</div>
              <Image src="" alt={\`\${size} placeholder\`} placeholderType="album" placeholderIconSize={size as any} width="lg" height="lg" shape="rounded" />
            </div>)}
        </div>
      </div>
    </div>
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>FontAwesome Placeholder Types</h3>
        <div style={storyStyles.grid}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Avatar (faUser)</div>
            <Image src="" alt="Avatar placeholder" placeholderType="avatar" width="lg" height="lg" shape="circle" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Album (faCompactDisc)</div>
            <Image src="" alt="Album placeholder" placeholderType="album" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Playlist (faList)</div>
            <Image src="" alt="Playlist placeholder" placeholderType="playlist" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Image (faImage)</div>
            <Image src="" alt="Generic image placeholder" placeholderType="image" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Broken (faExclamationTriangle)</div>
            <Image src="" alt="Broken image placeholder" placeholderType="broken" width="lg" height="lg" shape="rounded" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Spotify (faSpotify)</div>
            <Image src="" alt="Spotify placeholder" placeholderType="spotify" width="lg" height="lg" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.label}>Album Covers</div>
      <div style={storyStyles.flexRow}>
        <Image src={sampleImages.album} alt="Album cover" placeholderType="album" shape="rounded" width="lg" height="lg" />
        <Image src="" alt="No album cover" placeholderType="album" shape="rounded" width="md" height="md" />
        <Image src={sampleImages.broken} alt="Broken album cover" placeholderType="album" shape="rounded" width="sm" height="sm" />
      </div>
    </div>
}`,...(ae=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var re,se,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.label}>User Profile Pictures</div>
      <div style={storyStyles.flexRow}>
        <Image src={sampleImages.portrait} alt="User profile" placeholderType="avatar" shape="circle" width="xl" height="xl" />
        <Image src={sampleImages.square} alt="User profile" placeholderType="avatar" shape="circle" width="lg" height="lg" />
        <Image src="" alt="No avatar" placeholderType="avatar" shape="circle" width="md" height="md" />
        <Image src={sampleImages.broken} alt="Broken avatar" placeholderType="avatar" shape="circle" width="sm" height="sm" />
      </div>
    </div>
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ne,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.label}>Playlist Covers</div>
      <div style={storyStyles.grid}>
        <Image src={sampleImages.landscape} alt="Playlist cover" placeholderType="playlist" aspectRatio="1/1" width="full" shape="rounded" />
        <Image src="" alt="No playlist cover" placeholderType="playlist" aspectRatio="1/1" width="full" shape="rounded" />
        <Image src={sampleImages.album} alt="Playlist cover" placeholderType="playlist" aspectRatio="1/1" width="full" shape="rounded" />
        <Image src={sampleImages.broken} alt="Broken playlist cover" placeholderType="playlist" aspectRatio="1/1" width="full" shape="rounded" />
      </div>
    </div>
}`,...(de=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ce,me,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div style={storyStyles.section}>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>Sizes</h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(sizeTokens).filter(size => size !== 'full').map(size => <Image key={size} src={sampleImages.square} alt={\`\${size} image\`} width={size as any} height={size as any} shape="rounded" />)}
          </div>
        </div>
        
        <div style={storyStyles.section}>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>Shapes</h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(shapeTokens).map(shape => <Image key={shape} src={sampleImages.portrait} alt={\`\${shape} image\`} shape={shape as any} width="lg" height="lg" />)}
          </div>
        </div>
        
        <div style={storyStyles.section}>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>Real World Examples</h3>
          <div style={storyStyles.flexRow}>
            <Image src={sampleImages.album} alt="Album" shape="rounded" width="lg" height="lg" />
            <Image src={sampleImages.portrait} alt="Profile" shape="circle" width="lg" height="lg" />
            <Image src={sampleImages.landscape} alt="Banner" aspectRatio="16/9" width="200px" shape="rounded" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const ke=["Default","Circle","Sizes","Shapes","ObjectFit","AspectRatios","LoadingStates","ErrorHandling","PlaceholderIconSizes","PlaceholderTypes","MusicAlbumCovers","UserProfiles","PlaylistCovers","AllFeatures"];export{S as AllFeatures,y as AspectRatios,d as Circle,n as Default,g as ErrorHandling,h as LoadingStates,b as MusicAlbumCovers,p as ObjectFit,v as PlaceholderIconSizes,u as PlaceholderTypes,E as PlaylistCovers,m as Shapes,c as Sizes,f as UserProfiles,ke as __namedExportsOrder,we as default};
