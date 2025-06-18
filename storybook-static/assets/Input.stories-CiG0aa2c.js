import{R as e,r as E}from"./index-B-SYruCi.js";import{I as l,s as te,a as re}from"./Input-DWCr4mhE.js";import{c as i}from"./colors-B2Ab1-XV.js";import{s}from"./spacing-D8bLMdSH.js";import"./GlobalStyles-Cn10x2UR.js";import{h as ae,b as se,r as C,s as le,t as I}from"./index-Cy0hq6F7.js";import"./index.es-CQ4XmKgj.js";import"./radius-CVqooa3C.js";const t={container:{color:i.primary.white,backgroundColor:i.primary.black,padding:s.lg,minHeight:"100vh"},section:{marginBottom:s.xl},label:{color:i.grey.grey6,fontSize:"14px",marginBottom:s.sm,display:"block"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:s.lg},flexRow:{display:"flex",alignItems:"flex-start",gap:s.lg,flexWrap:"wrap"},flexColumn:{display:"flex",flexDirection:"column",gap:s.lg},demoContainer:{display:"flex",flexDirection:"column",gap:s.sm}},ye={title:"Atoms/Input",component:l,parameters:{layout:"padded",docs:{description:{component:"A flexible input component with multiple variants, sizes, states, and FontAwesome icon integration."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:Object.keys(te),description:"Size of the input field"},variant:{control:"select",options:["default","search","password","number","email","url"],description:"Type variant of the input"},state:{control:"select",options:Object.keys(re),description:"Visual state of the input"},label:{control:"text",description:"Label text for the input"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text below the input"},errorMessage:{control:"text",description:"Error message to display"},fullWidth:{control:"boolean",description:"Whether input takes full width"},clearable:{control:"boolean",description:"Whether to show clear button"},loading:{control:"boolean",description:"Loading state"},disabled:{control:"boolean",description:"Disabled state"}}},p={args:{placeholder:"Enter text...",label:"Default Input",helperText:"This is a helper text"}},u={args:{variant:"search",placeholder:"Search for songs, artists, or playlists...",label:"Search",onSearch:a=>console.log("Searching for:",a)}},y={args:{variant:"password",placeholder:"Enter your password",label:"Password",helperText:"Password must be at least 8 characters"}},h={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Input Sizes"),e.createElement("div",{style:t.flexColumn},Object.keys(te).map(a=>e.createElement("div",{key:a,style:t.demoContainer},e.createElement("div",{style:t.label},a.toUpperCase()),e.createElement(l,{size:a,placeholder:`${a} input`,label:`${a.charAt(0).toUpperCase()+a.slice(1)} Input`}))))))},v={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Input States"),e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Default"),e.createElement(l,{placeholder:"Default state",label:"Default Input",helperText:"This is normal helper text"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Error"),e.createElement(l,{state:"error",placeholder:"Error state",label:"Error Input",errorMessage:"This field is required",value:"Invalid input"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Success"),e.createElement(l,{state:"success",placeholder:"Success state",label:"Success Input",successMessage:"Input validated successfully",value:"Valid input"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Warning"),e.createElement(l,{state:"warning",placeholder:"Warning state",label:"Warning Input",warningMessage:"Please double-check this value",value:"Check this"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Disabled"),e.createElement(l,{disabled:!0,placeholder:"Disabled state",label:"Disabled Input",value:"Cannot edit this"})))))},g={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Input Variants"),e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Search (with automatic search icon)"),e.createElement(l,{variant:"search",placeholder:"Search Spotify...",label:"Search",onSearch:a=>console.log("Searching:",a)})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Password (with toggle visibility)"),e.createElement(l,{variant:"password",placeholder:"Enter password",label:"Password"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Email"),e.createElement(l,{variant:"email",placeholder:"user@spotify.com",label:"Email Address"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Number"),e.createElement(l,{variant:"number",placeholder:"42",label:"Favorite Number"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"URL"),e.createElement(l,{variant:"url",placeholder:"https://spotify.com",label:"Website URL"})))))},f={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Icons & Features"),e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Left Icon"),e.createElement(l,{leftIcon:ae,placeholder:"Username",label:"Username"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Right Icon"),e.createElement(l,{rightIcon:se,placeholder:"Favorite song",label:"Favorite Song"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Both Icons"),e.createElement(l,{leftIcon:C,rightIcon:le,placeholder:"email@domain.com",label:"Email with Domain"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Clearable Input"),e.createElement(l,{clearable:!0,placeholder:"Type something to see clear button",label:"Clearable Input",helperText:"Clear button appears when you type"})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Loading State"),e.createElement(l,{loading:!0,placeholder:"Loading...",label:"Loading Input",value:"Processing..."})))))},b={render:()=>{const[a,c]=E.useState(""),[r,o]=E.useState(""),[n,m]=E.useState("");return e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Interactive Examples"),e.createElement("div",{style:t.flexColumn},e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Controlled Search Input"),e.createElement(l,{variant:"search",value:a,onChange:d=>c(d.target.value),onSearch:d=>alert(`Searching for: "${d}"`),placeholder:"Search and press Enter",label:"Search Songs",clearable:!0,onClear:()=>c("")})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Password with Validation"),e.createElement(l,{variant:"password",value:r,onChange:d=>o(d.target.value),placeholder:"Enter secure password",label:"Password",state:r.length>0&&r.length<8?"error":"default",errorMessage:r.length>0&&r.length<8?"Password must be at least 8 characters":"",successMessage:r.length>=8?"Strong password!":""})),e.createElement("div",{style:t.demoContainer},e.createElement("div",{style:t.label},"Email with Validation"),e.createElement(l,{variant:"email",value:n,onChange:d=>m(d.target.value),placeholder:"your@email.com",label:"Email",state:n&&!n.includes("@")?"error":n&&n.includes("@")?"success":"default",errorMessage:n&&!n.includes("@")?"Please enter a valid email":"",successMessage:n&&n.includes("@")?"Valid email format":"",leftIcon:C,clearable:!0,onClear:()=>m("")})))))}},w={render:()=>e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Full Width Examples"),e.createElement("div",{style:t.flexColumn},e.createElement(l,{fullWidth:!0,variant:"search",placeholder:"Full width search input",label:"Search Everything",size:"lg"}),e.createElement(l,{fullWidth:!0,placeholder:"Full width text input",label:"Description",helperText:"This input takes the full width of its container"}))))},S={render:()=>{const[a,c]=E.useState({username:"",email:"",password:"",confirmPassword:"",website:""}),r=(o,n)=>{c(m=>({...m,[o]:n}))};return e.createElement("div",{style:t.container},e.createElement("div",{style:t.section},e.createElement("h3",{style:{color:i.primary.white,marginBottom:s.md}},"Spotify Artist Registration Form"),e.createElement("div",{style:{maxWidth:"400px",...t.flexColumn}},e.createElement(l,{leftIcon:ae,value:a.username,onChange:o=>r("username",o.target.value),placeholder:"Artist name",label:"Artist Name",clearable:!0,onClear:()=>r("username","")}),e.createElement(l,{variant:"email",leftIcon:C,value:a.email,onChange:o=>r("email",o.target.value),placeholder:"artist@email.com",label:"Email Address",state:a.email&&!a.email.includes("@")?"error":a.email&&a.email.includes("@")?"success":"default",errorMessage:a.email&&!a.email.includes("@")?"Please enter a valid email":"",clearable:!0,onClear:()=>r("email","")}),e.createElement(l,{variant:"password",leftIcon:I,value:a.password,onChange:o=>r("password",o.target.value),placeholder:"Secure password",label:"Password",state:a.password.length>0&&a.password.length<8?"error":"default",errorMessage:a.password.length>0&&a.password.length<8?"Password must be at least 8 characters":""}),e.createElement(l,{variant:"password",leftIcon:I,value:a.confirmPassword,onChange:o=>r("confirmPassword",o.target.value),placeholder:"Confirm password",label:"Confirm Password",state:a.confirmPassword&&a.password!==a.confirmPassword?"error":a.confirmPassword&&a.password===a.confirmPassword?"success":"default",errorMessage:a.confirmPassword&&a.password!==a.confirmPassword?"Passwords do not match":"",successMessage:a.confirmPassword&&a.password===a.confirmPassword?"Passwords match":""}),e.createElement(l,{variant:"url",leftIcon:le,value:a.website,onChange:o=>r("website",o.target.value),placeholder:"https://yourwebsite.com",label:"Website (Optional)",helperText:"Your official website or social media profile",clearable:!0,onClear:()=>r("website","")}))))}};var x,P,D;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input',
    helperText: 'This is a helper text'
  }
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,F,T;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    placeholder: 'Search for songs, artists, or playlists...',
    label: 'Search',
    onSearch: value => console.log('Searching for:', value)
  }
}`,...(T=(F=u.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var W,M,k;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    helperText: 'Password must be at least 8 characters'
  }
}`,...(k=(M=y.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var B,L,z;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Input Sizes</h3>
        <div style={storyStyles.flexColumn}>
          {Object.keys(sizeTokens).map(size => <div key={size} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{size.toUpperCase()}</div>
              <Input size={size as any} placeholder={\`\${size} input\`} label={\`\${size.charAt(0).toUpperCase() + size.slice(1)} Input\`} />
            </div>)}
        </div>
      </div>
    </div>
}`,...(z=(L=h.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,U,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Input States</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Default</div>
            <Input placeholder="Default state" label="Default Input" helperText="This is normal helper text" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Error</div>
            <Input state="error" placeholder="Error state" label="Error Input" errorMessage="This field is required" value="Invalid input" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Success</div>
            <Input state="success" placeholder="Success state" label="Success Input" successMessage="Input validated successfully" value="Valid input" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Warning</div>
            <Input state="warning" placeholder="Warning state" label="Warning Input" warningMessage="Please double-check this value" value="Check this" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Disabled</div>
            <Input disabled placeholder="Disabled state" label="Disabled Input" value="Cannot edit this" />
          </div>
        </div>
      </div>
    </div>
}`,...(R=(U=v.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var O,N,$;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Input Variants</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Search (with automatic search icon)</div>
            <Input variant="search" placeholder="Search Spotify..." label="Search" onSearch={value => console.log('Searching:', value)} />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Password (with toggle visibility)</div>
            <Input variant="password" placeholder="Enter password" label="Password" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Email</div>
            <Input variant="email" placeholder="user@spotify.com" label="Email Address" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Number</div>
            <Input variant="number" placeholder="42" label="Favorite Number" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>URL</div>
            <Input variant="url" placeholder="https://spotify.com" label="Website URL" />
          </div>
        </div>
      </div>
    </div>
}`,...($=(N=g.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,H,G;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Icons & Features</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Left Icon</div>
            <Input leftIcon={faUser} placeholder="Username" label="Username" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Right Icon</div>
            <Input rightIcon={faHeart} placeholder="Favorite song" label="Favorite Song" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Both Icons</div>
            <Input leftIcon={faEnvelope} rightIcon={faGlobe} placeholder="email@domain.com" label="Email with Domain" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Clearable Input</div>
            <Input clearable placeholder="Type something to see clear button" label="Clearable Input" helperText="Clear button appears when you type" />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Loading State</div>
            <Input loading placeholder="Loading..." label="Loading Input" value="Processing..." />
          </div>
        </div>
      </div>
    </div>
}`,...(G=(H=f.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var q,Y,_;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    return <div style={storyStyles.container}>
        <div style={storyStyles.section}>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>Interactive Examples</h3>
          <div style={storyStyles.flexColumn}>
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Controlled Search Input</div>
              <Input variant="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} onSearch={value => alert(\`Searching for: "\${value}"\`)} placeholder="Search and press Enter" label="Search Songs" clearable onClear={() => setSearchValue('')} />
            </div>
            
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Password with Validation</div>
              <Input variant="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} placeholder="Enter secure password" label="Password" state={passwordValue.length > 0 && passwordValue.length < 8 ? 'error' : 'default'} errorMessage={passwordValue.length > 0 && passwordValue.length < 8 ? 'Password must be at least 8 characters' : ''} successMessage={passwordValue.length >= 8 ? 'Strong password!' : ''} />
            </div>
            
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Email with Validation</div>
              <Input variant="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="your@email.com" label="Email" state={emailValue && !emailValue.includes('@') ? 'error' : emailValue && emailValue.includes('@') ? 'success' : 'default'} errorMessage={emailValue && !emailValue.includes('@') ? 'Please enter a valid email' : ''} successMessage={emailValue && emailValue.includes('@') ? 'Valid email format' : ''} leftIcon={faEnvelope} clearable onClear={() => setEmailValue('')} />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(_=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{
        color: colors.primary.white,
        marginBottom: spacing.md
      }}>Full Width Examples</h3>
        <div style={storyStyles.flexColumn}>
          <Input fullWidth variant="search" placeholder="Full width search input" label="Search Everything" size="lg" />
          
          <Input fullWidth placeholder="Full width text input" label="Description" helperText="This input takes the full width of its container" />
        </div>
      </div>
    </div>
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      website: ''
    });
    const updateField = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };
    return <div style={storyStyles.container}>
        <div style={storyStyles.section}>
          <h3 style={{
          color: colors.primary.white,
          marginBottom: spacing.md
        }}>Spotify Artist Registration Form</h3>
          <div style={{
          maxWidth: '400px',
          ...storyStyles.flexColumn
        }}>
            <Input leftIcon={faUser} value={formData.username} onChange={e => updateField('username', e.target.value)} placeholder="Artist name" label="Artist Name" clearable onClear={() => updateField('username', '')} />
            
            <Input variant="email" leftIcon={faEnvelope} value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="artist@email.com" label="Email Address" state={formData.email && !formData.email.includes('@') ? 'error' : formData.email && formData.email.includes('@') ? 'success' : 'default'} errorMessage={formData.email && !formData.email.includes('@') ? 'Please enter a valid email' : ''} clearable onClear={() => updateField('email', '')} />
            
            <Input variant="password" leftIcon={faLock} value={formData.password} onChange={e => updateField('password', e.target.value)} placeholder="Secure password" label="Password" state={formData.password.length > 0 && formData.password.length < 8 ? 'error' : 'default'} errorMessage={formData.password.length > 0 && formData.password.length < 8 ? 'Password must be at least 8 characters' : ''} />
            
            <Input variant="password" leftIcon={faLock} value={formData.confirmPassword} onChange={e => updateField('confirmPassword', e.target.value)} placeholder="Confirm password" label="Confirm Password" state={formData.confirmPassword && formData.password !== formData.confirmPassword ? 'error' : formData.confirmPassword && formData.password === formData.confirmPassword ? 'success' : 'default'} errorMessage={formData.confirmPassword && formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''} successMessage={formData.confirmPassword && formData.password === formData.confirmPassword ? 'Passwords match' : ''} />
            
            <Input variant="url" leftIcon={faGlobe} value={formData.website} onChange={e => updateField('website', e.target.value)} placeholder="https://yourwebsite.com" label="Website (Optional)" helperText="Your official website or social media profile" clearable onClear={() => updateField('website', '')} />
          </div>
        </div>
      </div>;
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const he=["Default","Search","Password","Sizes","States","Variants","WithIcons","Interactive","FullWidth","RealWorldForm"];export{p as Default,w as FullWidth,b as Interactive,y as Password,S as RealWorldForm,u as Search,h as Sizes,v as States,g as Variants,f as WithIcons,he as __namedExportsOrder,ye as default};
