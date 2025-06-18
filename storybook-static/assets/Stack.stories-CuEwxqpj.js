import{R as e}from"./index-B-SYruCi.js";import{S as n,s as b,b as P}from"./Stack-BpWiWNDN.js";import{c as r}from"./colors-B2Ab1-XV.js";import{s as i}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import"./radius-CVqooa3C.js";const a={container:{color:r.primary.white,backgroundColor:r.primary.black,padding:i.lg,minHeight:"100vh"},section:{marginBottom:i.xl},label:{color:r.grey.grey6,fontSize:"14px",marginBottom:i.sm,display:"block"},demoItem:{backgroundColor:r.primary.brand,color:r.primary.white,padding:i.sm,borderRadius:"4px",textAlign:"center",fontSize:"14px",fontWeight:"500"},demoItemSecondary:{backgroundColor:r.decorative.redRedWine,color:r.primary.white,padding:i.sm,borderRadius:"4px",textAlign:"center",fontSize:"14px",fontWeight:"500"},demoItemTertiary:{backgroundColor:r.decorative.evergreen,color:r.primary.white,padding:i.sm,borderRadius:"4px",textAlign:"center",fontSize:"14px",fontWeight:"500"},containerDemo:{border:`1px dashed ${r.grey.grey4}`,backgroundColor:r.grey.grey0,minHeight:"200px"}},t=({children:o,variant:l="primary"})=>e.createElement("div",{style:l==="secondary"?a.demoItemSecondary:l==="tertiary"?a.demoItemTertiary:a.demoItem},o),Y={title:"Atoms/Layout/Stack",component:n,parameters:{layout:"padded",docs:{description:{component:"A flexible layout component built on CSS Flexbox with comprehensive design token integration. Perfect for creating consistent spacing and alignment patterns."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"Flex direction"},spacing:{control:"select",options:Object.keys(b),description:"Spacing between items using design tokens"},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"Cross-axis alignment"},justify:{control:"select",options:["start","center","end","space-between","space-around","space-evenly","stretch"],description:"Main-axis justification"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Flex wrap behavior"},grow:{control:"boolean",description:"Whether to grow to fill available space"},shrink:{control:"boolean",description:"Whether to shrink when needed"},scrollable:{control:"boolean",description:"Enable scrolling with custom scrollbars"},centered:{control:"boolean",description:"Center the stack within its container"},padding:{control:"select",options:Object.keys(b),description:"Padding around the stack"},margin:{control:"select",options:Object.keys(b),description:"Margin around the stack"},backgroundColor:{control:"color",description:"Background color"},borderRadius:{control:"select",options:Object.keys(P),description:"Border radius using design tokens"}}},m={args:{children:e.createElement(e.Fragment,null,e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"),e.createElement(t,{variant:"tertiary"},"Item 3"))}},c={args:{direction:"row",spacing:"md",children:e.createElement(e.Fragment,null,e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"),e.createElement(t,{variant:"tertiary"},"Item 3"))}},d={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Spacing Variations"),e.createElement(n,{spacing:"lg"},Object.entries(b).map(([o,l])=>e.createElement("div",{key:o},e.createElement("div",{style:a.label},o.toUpperCase()," (",l,")"),e.createElement(n,{direction:"row",spacing:o,padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"),e.createElement(t,{variant:"tertiary"},"Item 3")))))))},s={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Alignment Options"),e.createElement(n,{spacing:"lg"},["start","center","end","stretch","baseline"].map(o=>e.createElement("div",{key:o},e.createElement("div",{style:a.label},'align="',o,'"'),e.createElement(n,{direction:"row",align:o,spacing:"md",padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md",style:a.containerDemo},e.createElement(t,null,"Short"),e.createElement(t,{variant:"secondary"},"Medium content"),e.createElement(t,{variant:"tertiary"},"This is a longer content item")))))))},y={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Justification Options"),e.createElement(n,{spacing:"lg"},["start","center","end","space-between","space-around","space-evenly"].map(o=>e.createElement("div",{key:o},e.createElement("div",{style:a.label},'justify="',o,'"'),e.createElement(n,{direction:"row",justify:o,padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md",width:"full"},e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"),e.createElement(t,{variant:"tertiary"},"Item 3")))))))},g={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Size Constraints"),e.createElement(n,{spacing:"lg"},e.createElement("div",null,e.createElement("div",{style:a.label},"Fixed Width (300px)"),e.createElement(n,{direction:"row",spacing:"md",width:"300px",padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"))),e.createElement("div",null,e.createElement("div",{style:a.label},"Max Width (200px) with Wrap"),e.createElement(n,{direction:"row",spacing:"md",wrap:"wrap",maxWidth:"200px",padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"),e.createElement(t,{variant:"tertiary"},"Item 3"))),e.createElement("div",null,e.createElement("div",{style:a.label},"Full Width"),e.createElement(n,{direction:"row",spacing:"md",width:"full",padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Item 1"),e.createElement(t,{variant:"secondary"},"Item 2"))))))},p={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Advanced Features"),e.createElement(n,{spacing:"lg"},e.createElement("div",null,e.createElement("div",{style:a.label},"Scrollable Container (height: 150px)"),e.createElement(n,{spacing:"md",padding:"md",backgroundColor:r.grey.grey1,borderRadius:"md",height:"150px",scrollable:!0},Array.from({length:10},(o,l)=>e.createElement(t,{key:l,variant:l%3===0?"primary":l%3===1?"secondary":"tertiary"},"Scrollable Item ",l+1)))),e.createElement("div",null,e.createElement("div",{style:a.label},"Centered Stack"),e.createElement("div",{style:{backgroundColor:r.grey.grey1,padding:i.lg,borderRadius:"8px"}},e.createElement(n,{centered:!0,width:"200px",spacing:"sm",backgroundColor:r.primary.brand,padding:"md",borderRadius:"md"},e.createElement(t,null,"Centered Item 1"),e.createElement(t,{variant:"secondary"},"Centered Item 2")))),e.createElement("div",null,e.createElement("div",{style:a.label},"Grow/Shrink Behavior"),e.createElement(n,{direction:"row",spacing:"md",padding:"sm",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Fixed"),e.createElement("div",{style:{...a.demoItemSecondary,flexGrow:1}},"Grows to fill space"),e.createElement(t,{variant:"tertiary"},"Fixed"))))))},v={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Semantic HTML"),e.createElement(n,{spacing:"lg"},e.createElement("div",null,e.createElement("div",{style:a.label},'Navigation (as="nav")'),e.createElement(n,{as:"nav",direction:"row",spacing:"lg",padding:"md",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Home"),e.createElement(t,{variant:"secondary"},"About"),e.createElement(t,{variant:"tertiary"},"Contact"))),e.createElement("div",null,e.createElement("div",{style:a.label},'Article (as="article")'),e.createElement(n,{as:"article",spacing:"md",padding:"lg",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement(t,null,"Article Title"),e.createElement(t,{variant:"secondary"},"Article Content"),e.createElement(t,{variant:"tertiary"},"Article Footer"))),e.createElement("div",null,e.createElement("div",{style:a.label},'List (as="ul")'),e.createElement(n,{as:"ul",spacing:"sm",padding:"md",backgroundColor:r.grey.grey1,borderRadius:"md"},e.createElement("li",null,e.createElement(t,null,"List Item 1")),e.createElement("li",null,e.createElement(t,{variant:"secondary"},"List Item 2")),e.createElement("li",null,e.createElement(t,{variant:"tertiary"},"List Item 3")))))))},u={render:()=>e.createElement("div",{style:a.container},e.createElement("div",{style:a.section},e.createElement("h3",{style:{color:r.primary.white,marginBottom:i.md}},"Real-World Examples"),e.createElement(n,{spacing:"xl"},e.createElement("div",null,e.createElement("div",{style:a.label},"Card Layout"),e.createElement(n,{spacing:"md",padding:"lg",backgroundColor:r.grey.grey1,borderRadius:"lg",maxWidth:"400px"},e.createElement(t,null,"Card Header"),e.createElement(n,{direction:"row",spacing:"md",justify:"space-between"},e.createElement(t,{variant:"secondary"},"Left Content"),e.createElement(t,{variant:"tertiary"},"Right Content")),e.createElement(t,null,"Card Footer"))),e.createElement("div",null,e.createElement("div",{style:a.label},"Sidebar Layout"),e.createElement(n,{direction:"row",spacing:"md",height:"300px"},e.createElement(n,{spacing:"sm",padding:"md",backgroundColor:r.grey.grey2,borderRadius:"md",width:"200px",scrollable:!0},Array.from({length:8},(o,l)=>e.createElement(t,{key:l},"Sidebar Item ",l+1))),e.createElement(n,{spacing:"md",padding:"lg",backgroundColor:r.grey.grey1,borderRadius:"md",grow:!0},e.createElement(t,null,"Main Content Header"),e.createElement(t,{variant:"secondary"},"Main Content Body"),e.createElement(t,{variant:"tertiary"},"Main Content Footer")))))))};var I,E,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <>
        <DemoItem>Item 1</DemoItem>
        <DemoItem variant="secondary">Item 2</DemoItem>
        <DemoItem variant="tertiary">Item 3</DemoItem>
      </>
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var k,h,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    spacing: 'md',
    children: <>
        <DemoItem>Item 1</DemoItem>
        <DemoItem variant="secondary">Item 2</DemoItem>
        <DemoItem variant="tertiary">Item 3</DemoItem>
      </>
  }
}`,...(D=(h=c.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var w,C,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Spacing Variations</h3>
        <Stack spacing="lg">
          {Object.entries(spacingTokens).map(([spacingName, spacingValue]) => <div key={spacingName}>
              <div style={storyStyles.label}>{spacingName.toUpperCase()} ({spacingValue})</div>
              <Stack direction="row" spacing={spacingName as any} padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
                <DemoItem>Item 1</DemoItem>
                <DemoItem variant="secondary">Item 2</DemoItem>
                <DemoItem variant="tertiary">Item 3</DemoItem>
              </Stack>
            </div>)}
        </Stack>
      </div>
    </div>
}`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var R,f,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Alignment Options</h3>
        <Stack spacing="lg">
          {['start', 'center', 'end', 'stretch', 'baseline'].map(alignment => <div key={alignment}>
              <div style={storyStyles.label}>align="{alignment}"</div>
              <Stack direction="row" align={alignment as any} spacing="md" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md" style={storyStyles.containerDemo}>
                <DemoItem>Short</DemoItem>
                <DemoItem variant="secondary">Medium content</DemoItem>
                <DemoItem variant="tertiary">This is a longer content item</DemoItem>
              </Stack>
            </div>)}
        </Stack>
      </div>
    </div>
}`,...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var F,B,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Justification Options</h3>
        <Stack spacing="lg">
          {['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].map(justification => <div key={justification}>
              <div style={storyStyles.label}>justify="{justification}"</div>
              <Stack direction="row" justify={justification as any} padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md" width="full">
                <DemoItem>Item 1</DemoItem>
                <DemoItem variant="secondary">Item 2</DemoItem>
                <DemoItem variant="tertiary">Item 3</DemoItem>
              </Stack>
            </div>)}
        </Stack>
      </div>
    </div>
}`,...(W=(B=y.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var L,j,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Size Constraints</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Fixed Width (300px)</div>
            <Stack direction="row" spacing="md" width="300px" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Max Width (200px) with Wrap</div>
            <Stack direction="row" spacing="md" wrap="wrap" maxWidth="200px" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
              <DemoItem variant="tertiary">Item 3</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Full Width</div>
            <Stack direction="row" spacing="md" width="full" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
}`,...(M=(j=g.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var O,T,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Advanced Features</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Scrollable Container (height: 150px)</div>
            <Stack spacing="md" padding="md" backgroundColor={colors.grey.grey1} borderRadius="md" height="150px" scrollable>
              {Array.from({
              length: 10
            }, (_, i) => <DemoItem key={i} variant={i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'tertiary'}>
                  Scrollable Item {i + 1}
                </DemoItem>)}
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Centered Stack</div>
            <div style={{
            backgroundColor: colors.grey.grey1,
            padding: spacing.lg,
            borderRadius: '8px'
          }}>
              <Stack centered width="200px" spacing="sm" backgroundColor={colors.primary.brand} padding="md" borderRadius="md">
                <DemoItem>Centered Item 1</DemoItem>
                <DemoItem variant="secondary">Centered Item 2</DemoItem>
              </Stack>
            </div>
          </div>
          
          <div>
            <div style={storyStyles.label}>Grow/Shrink Behavior</div>
            <Stack direction="row" spacing="md" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Fixed</DemoItem>
              <div style={{
              ...storyStyles.demoItemSecondary,
              flexGrow: 1
            }}>Grows to fill space</div>
              <DemoItem variant="tertiary">Fixed</DemoItem>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
}`,...(H=(T=p.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var z,G,V;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Semantic HTML</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Navigation (as="nav")</div>
            <Stack as="nav" direction="row" spacing="lg" padding="md" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Home</DemoItem>
              <DemoItem variant="secondary">About</DemoItem>
              <DemoItem variant="tertiary">Contact</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Article (as="article")</div>
            <Stack as="article" spacing="md" padding="lg" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Article Title</DemoItem>
              <DemoItem variant="secondary">Article Content</DemoItem>
              <DemoItem variant="tertiary">Article Footer</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>List (as="ul")</div>
            <Stack as="ul" spacing="sm" padding="md" backgroundColor={colors.grey.grey1} borderRadius="md">
              <li><DemoItem>List Item 1</DemoItem></li>
              <li><DemoItem variant="secondary">List Item 2</DemoItem></li>
              <li><DemoItem variant="tertiary">List Item 3</DemoItem></li>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
}`,...(V=(G=v.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var _,J,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Real-World Examples</h3>
        <Stack spacing="xl">
          <div>
            <div style={storyStyles.label}>Card Layout</div>
            <Stack spacing="md" padding="lg" backgroundColor={colors.grey.grey1} borderRadius="lg" maxWidth="400px">
              <DemoItem>Card Header</DemoItem>
              <Stack direction="row" spacing="md" justify="space-between">
                <DemoItem variant="secondary">Left Content</DemoItem>
                <DemoItem variant="tertiary">Right Content</DemoItem>
              </Stack>
              <DemoItem>Card Footer</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Sidebar Layout</div>
            <Stack direction="row" spacing="md" height="300px">
              <Stack spacing="sm" padding="md" backgroundColor={colors.grey.grey2} borderRadius="md" width="200px" scrollable>
                {Array.from({
                length: 8
              }, (_, i) => <DemoItem key={i}>Sidebar Item {i + 1}</DemoItem>)}
              </Stack>
              
              <Stack spacing="md" padding="lg" backgroundColor={colors.grey.grey1} borderRadius="md" grow>
                <DemoItem>Main Content Header</DemoItem>
                <DemoItem variant="secondary">Main Content Body</DemoItem>
                <DemoItem variant="tertiary">Main Content Footer</DemoItem>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
}`,...(N=(J=u.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const Z=["Default","Row","SpacingVariations","AlignmentOptions","JustificationOptions","SizeConstraints","AdvancedFeatures","SemanticHTML","RealWorldExamples"];export{p as AdvancedFeatures,s as AlignmentOptions,m as Default,y as JustificationOptions,u as RealWorldExamples,c as Row,v as SemanticHTML,g as SizeConstraints,d as SpacingVariations,Z as __namedExportsOrder,Y as default};
