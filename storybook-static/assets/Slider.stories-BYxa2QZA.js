import{r as s,R as e}from"./index-B-SYruCi.js";import{S as l}from"./Slider-BQZUFkDd.js";import{S as u}from"./Stack-BpWiWNDN.js";import"./GlobalStyles-Cn10x2UR.js";import"./colors-B2Ab1-XV.js";import"./spacing-D8bLMdSH.js";import"./radius-CVqooa3C.js";const ve={title:"Atoms/Slider",component:l,parameters:{docs:{description:{component:"A comprehensive slider component with multiple variants, sizes, tooltips, marks, and advanced features."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","brand","gradient"]},orientation:{control:{type:"select"},options:["horizontal","vertical"]},valueLabelPosition:{control:{type:"select"},options:["top","bottom","left","right"]}}},x=r=>{const[n,a]=s.useState(r.value);return e.createElement(l,{...r,value:n,onChange:a})},m=x.bind({});m.args={value:50,min:0,max:100,step:1};const g=x.bind({});g.args={value:30,label:"Volume",helperText:"Adjust the audio volume level"};const p=()=>{const[r,n]=s.useState({xs:20,sm:30,md:50,lg:70,xl:90});return e.createElement(u,{direction:"column",spacing:"xl"},e.createElement(u,{direction:"column",spacing:"lg"},e.createElement(l,{label:"Extra Small",size:"xs",value:r.xs,onChange:a=>n(t=>({...t,xs:a}))}),e.createElement(l,{label:"Small",size:"sm",value:r.sm,onChange:a=>n(t=>({...t,sm:a}))}),e.createElement(l,{label:"Medium",size:"md",value:r.md,onChange:a=>n(t=>({...t,md:a}))}),e.createElement(l,{label:"Large",size:"lg",value:r.lg,onChange:a=>n(t=>({...t,lg:a}))}),e.createElement(l,{label:"Extra Large",size:"xl",value:r.xl,onChange:a=>n(t=>({...t,xl:a}))})))},h=()=>{const[r,n]=s.useState({default:30,primary:40,secondary:50,success:60,warning:70,error:35,brand:80,gradient:90});return e.createElement(u,{direction:"column",spacing:"lg"},e.createElement(l,{label:"Default",variant:"default",value:r.default,onChange:a=>n(t=>({...t,default:a}))}),e.createElement(l,{label:"Primary",variant:"primary",value:r.primary,onChange:a=>n(t=>({...t,primary:a}))}),e.createElement(l,{label:"Secondary",variant:"secondary",value:r.secondary,onChange:a=>n(t=>({...t,secondary:a}))}),e.createElement(l,{label:"Success",variant:"success",value:r.success,onChange:a=>n(t=>({...t,success:a}))}),e.createElement(l,{label:"Warning",variant:"warning",value:r.warning,onChange:a=>n(t=>({...t,warning:a}))}),e.createElement(l,{label:"Error",variant:"error",value:r.error,onChange:a=>n(t=>({...t,error:a}))}),e.createElement(l,{label:"Brand",variant:"brand",value:r.brand,onChange:a=>n(t=>({...t,brand:a}))}),e.createElement(l,{label:"Gradient",variant:"gradient",value:r.gradient,onChange:a=>n(t=>({...t,gradient:a}))}))},S=()=>{const[r,n]=s.useState(65),[a,t]=s.useState(45),[i,c]=s.useState(80);return e.createElement(u,{direction:"column",spacing:"xl"},e.createElement(l,{label:"Basic Tooltip",value:r,onChange:n,showTooltip:!0,variant:"primary"}),e.createElement(l,{label:"Custom Tooltip Formatter",value:a,onChange:t,showTooltip:!0,tooltipFormatter:v=>`${v}%`,variant:"success"}),e.createElement(l,{label:"Advanced Tooltip",value:i,onChange:c,showTooltip:!0,tooltipFormatter:v=>`${v}dB`,variant:"brand",size:"lg"}))},b=()=>{const[r,n]=s.useState(50),[a,t]=s.useState(2),[i,c]=s.useState(75);return e.createElement(u,{direction:"column",spacing:"xl"},e.createElement(l,{label:"Simple Marks",value:r,onChange:n,marks:[0,25,50,75,100],showMarks:!0,variant:"primary"}),e.createElement(l,{label:"Labeled Marks",min:0,max:5,step:1,value:a,onChange:t,marks:[{value:0,label:"Off"},{value:1,label:"Low"},{value:2,label:"Med"},{value:3,label:"High"},{value:4,label:"Max"},{value:5,label:"Boost"}],showMarks:!0,variant:"warning"}),e.createElement(l,{label:"Custom Styled Marks",value:i,onChange:c,marks:[{value:0,label:"0%"},{value:25,label:"25%",style:{color:"#1db954"}},{value:50,label:"50%",style:{color:"#1ed760"}},{value:75,label:"75%",style:{color:"#1db954"}},{value:100,label:"100%"}],showMarks:!0,variant:"gradient",size:"lg"}))},f=()=>{const[r,n]=s.useState(60),[a,t]=s.useState(40),[i,c]=s.useState(85),[v,d]=s.useState(25);return e.createElement(u,{direction:"column",spacing:"xl"},e.createElement(l,{label:"With Value Display",value:r,onChange:n,showValue:!0,showTooltip:!0,variant:"primary",required:!0}),e.createElement(l,{label:"Loading State",value:a,onChange:t,loading:!0,variant:"secondary",helperText:"Processing changes..."}),e.createElement(l,{label:"Custom Colors",value:i,onChange:c,trackColor:"#ff6b35",thumbColor:"#ffffff",backgroundColor:"#333333",showTooltip:!0,tooltipFormatter:o=>`${o}%`}),e.createElement(l,{label:"Error State",value:v,onChange:d,variant:"error",error:"Value too low for optimal performance",required:!0}))},C=()=>{const[r,n]=s.useState(50),[a,t]=s.useState(70),[i,c]=s.useState(30),v=o=>{console.log("Change started:",o)},d=o=>{console.log("Change ended:",o)};return e.createElement(u,{direction:"column",spacing:"lg"},e.createElement(l,{label:"Interactive Slider",value:r,onChange:n,onChangeStart:v,onChangeEnd:d,showTooltip:!0,variant:"primary",helperText:"Drag to adjust value"}),e.createElement(l,{label:"Disabled Slider",value:a,onChange:t,disabled:!0,variant:"secondary",helperText:"This slider is disabled"}),e.createElement(l,{label:"Loading Slider",value:i,onChange:c,loading:!0,variant:"brand",helperText:"Loading state with pulse animation"}))},V=()=>{const[r,n]=s.useState(75),[a,t]=s.useState(60),[i,c]=s.useState(2),[v,d]=s.useState(45);return e.createElement(u,{direction:"column",spacing:"xl"},e.createElement(u,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Audio Controls"),e.createElement(l,{label:"Volume",value:r,onChange:n,min:0,max:100,showTooltip:!0,tooltipFormatter:o=>`${o}%`,variant:"primary",size:"md"}),e.createElement(l,{label:"Bass Boost",min:0,max:5,step:1,value:i,onChange:c,marks:[{value:0,label:"Off"},{value:1,label:"+1"},{value:2,label:"+2"},{value:3,label:"+3"},{value:4,label:"+4"},{value:5,label:"Max"}],showMarks:!0,variant:"success",size:"sm"})),e.createElement(u,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Display Settings"),e.createElement(l,{label:"Brightness",value:a,onChange:t,min:0,max:100,showValue:!0,variant:"warning",tooltipFormatter:o=>`${o}%`,showTooltip:!0})),e.createElement(u,{direction:"column",spacing:"sm"},e.createElement("h4",{style:{margin:0,color:"#ffffff"}},"Track Progress"),e.createElement(l,{label:"Song Progress",value:v,onChange:d,min:0,max:100,variant:"brand",size:"sm",showTooltip:!0,tooltipFormatter:o=>{const E=Math.floor(o/100*180),ae=Math.floor(E/60),te=E%60;return`${ae}:${te.toString().padStart(2,"0")}`},helperText:"Drag to seek through the track"})))},y=x.bind({});y.args={label:"Interactive Slider",value:50,min:0,max:100,step:1,size:"md",variant:"primary",orientation:"horizontal",disabled:!1,loading:!1,showTooltip:!1,showValue:!1,showMarks:!1,animate:!0,required:!1,helperText:"Adjust the value using the slider"};p.__docgenInfo={description:"",methods:[],displayName:"SizeVariations"};h.__docgenInfo={description:"",methods:[],displayName:"VariantShowcase"};S.__docgenInfo={description:"",methods:[],displayName:"WithTooltips"};b.__docgenInfo={description:"",methods:[],displayName:"WithMarks"};f.__docgenInfo={description:"",methods:[],displayName:"AdvancedFeatures"};C.__docgenInfo={description:"",methods:[],displayName:"StatesAndInteractions"};V.__docgenInfo={description:"",methods:[],displayName:"RealWorldExamples"};var k,w,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var M,z,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,L,_;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    xs: 20,
    sm: 30,
    md: 50,
    lg: 70,
    xl: 90
  });
  return <Stack direction="column" spacing="xl">
      <Stack direction="column" spacing="lg">
        <Slider label="Extra Small" size="xs" value={values.xs} onChange={value => setValues(prev => ({
        ...prev,
        xs: value
      }))} />
        <Slider label="Small" size="sm" value={values.sm} onChange={value => setValues(prev => ({
        ...prev,
        sm: value
      }))} />
        <Slider label="Medium" size="md" value={values.md} onChange={value => setValues(prev => ({
        ...prev,
        md: value
      }))} />
        <Slider label="Large" size="lg" value={values.lg} onChange={value => setValues(prev => ({
        ...prev,
        lg: value
      }))} />
        <Slider label="Extra Large" size="xl" value={values.xl} onChange={value => setValues(prev => ({
        ...prev,
        xl: value
      }))} />
      </Stack>
    </Stack>;
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,A,D;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    default: 30,
    primary: 40,
    secondary: 50,
    success: 60,
    warning: 70,
    error: 35,
    brand: 80,
    gradient: 90
  });
  return <Stack direction="column" spacing="lg">
      <Slider label="Default" variant="default" value={values.default} onChange={value => setValues(prev => ({
      ...prev,
      default: value
    }))} />
      <Slider label="Primary" variant="primary" value={values.primary} onChange={value => setValues(prev => ({
      ...prev,
      primary: value
    }))} />
      <Slider label="Secondary" variant="secondary" value={values.secondary} onChange={value => setValues(prev => ({
      ...prev,
      secondary: value
    }))} />
      <Slider label="Success" variant="success" value={values.success} onChange={value => setValues(prev => ({
      ...prev,
      success: value
    }))} />
      <Slider label="Warning" variant="warning" value={values.warning} onChange={value => setValues(prev => ({
      ...prev,
      warning: value
    }))} />
      <Slider label="Error" variant="error" value={values.error} onChange={value => setValues(prev => ({
      ...prev,
      error: value
    }))} />
      <Slider label="Brand" variant="brand" value={values.brand} onChange={value => setValues(prev => ({
      ...prev,
      brand: value
    }))} />
      <Slider label="Gradient" variant="gradient" value={values.gradient} onChange={value => setValues(prev => ({
      ...prev,
      gradient: value
    }))} />
    </Stack>;
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var P,W,$;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [value1, setValue1] = useState(65);
  const [value2, setValue2] = useState(45);
  const [value3, setValue3] = useState(80);
  return <Stack direction="column" spacing="xl">
      <Slider label="Basic Tooltip" value={value1} onChange={setValue1} showTooltip variant="primary" />
      <Slider label="Custom Tooltip Formatter" value={value2} onChange={setValue2} showTooltip tooltipFormatter={val => \`\${val}%\`} variant="success" />
      <Slider label="Advanced Tooltip" value={value3} onChange={setValue3} showTooltip tooltipFormatter={val => \`\${val}dB\`} variant="brand" size="lg" />
    </Stack>;
}`,...($=(W=S.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var N,q,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(75);
  return <Stack direction="column" spacing="xl">
      <Slider label="Simple Marks" value={value1} onChange={setValue1} marks={[0, 25, 50, 75, 100]} showMarks variant="primary" />
      <Slider label="Labeled Marks" min={0} max={5} step={1} value={value2} onChange={setValue2} marks={[{
      value: 0,
      label: 'Off'
    }, {
      value: 1,
      label: 'Low'
    }, {
      value: 2,
      label: 'Med'
    }, {
      value: 3,
      label: 'High'
    }, {
      value: 4,
      label: 'Max'
    }, {
      value: 5,
      label: 'Boost'
    }]} showMarks variant="warning" />
      <Slider label="Custom Styled Marks" value={value3} onChange={setValue3} marks={[{
      value: 0,
      label: '0%'
    }, {
      value: 25,
      label: '25%',
      style: {
        color: '#1db954'
      }
    }, {
      value: 50,
      label: '50%',
      style: {
        color: '#1ed760'
      }
    }, {
      value: 75,
      label: '75%',
      style: {
        color: '#1db954'
      }
    }, {
      value: 100,
      label: '100%'
    }]} showMarks variant="gradient" size="lg" />
    </Stack>;
}`,...(O=(q=b.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,j,G;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value1, setValue1] = useState(60);
  const [value2, setValue2] = useState(40);
  const [value3, setValue3] = useState(85);
  const [value4, setValue4] = useState(25);
  return <Stack direction="column" spacing="xl">
      <Slider label="With Value Display" value={value1} onChange={setValue1} showValue showTooltip variant="primary" required />
      <Slider label="Loading State" value={value2} onChange={setValue2} loading variant="secondary" helperText="Processing changes..." />
      <Slider label="Custom Colors" value={value3} onChange={setValue3} trackColor="#ff6b35" thumbColor="#ffffff" backgroundColor="#333333" showTooltip tooltipFormatter={val => \`\${val}%\`} />
      <Slider label="Error State" value={value4} onChange={setValue4} variant="error" error="Value too low for optimal performance" required />
    </Stack>;
}`,...(G=(j=f.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,J,K;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(70);
  const [value3, setValue3] = useState(30);
  const handleChangeStart = (value: number) => {
    console.log('Change started:', value);
  };
  const handleChangeEnd = (value: number) => {
    console.log('Change ended:', value);
  };
  return <Stack direction="column" spacing="lg">
      <Slider label="Interactive Slider" value={value1} onChange={setValue1} onChangeStart={handleChangeStart} onChangeEnd={handleChangeEnd} showTooltip variant="primary" helperText="Drag to adjust value" />
      <Slider label="Disabled Slider" value={value2} onChange={setValue2} disabled variant="secondary" helperText="This slider is disabled" />
      <Slider label="Loading Slider" value={value3} onChange={setValue3} loading variant="brand" helperText="Loading state with pulse animation" />
    </Stack>;
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(60);
  const [bass, setBass] = useState(2);
  const [progress, setProgress] = useState(45);
  return <Stack direction="column" spacing="xl">
      {/* Audio Controls */}
      <Stack direction="column" spacing="sm">
        <h4 style={{
        margin: 0,
        color: '#ffffff'
      }}>Audio Controls</h4>
        <Slider label="Volume" value={volume} onChange={setVolume} min={0} max={100} showTooltip tooltipFormatter={val => \`\${val}%\`} variant="primary" size="md" />
        <Slider label="Bass Boost" min={0} max={5} step={1} value={bass} onChange={setBass} marks={[{
        value: 0,
        label: 'Off'
      }, {
        value: 1,
        label: '+1'
      }, {
        value: 2,
        label: '+2'
      }, {
        value: 3,
        label: '+3'
      }, {
        value: 4,
        label: '+4'
      }, {
        value: 5,
        label: 'Max'
      }]} showMarks variant="success" size="sm" />
      </Stack>

      {/* Display Settings */}
      <Stack direction="column" spacing="sm">
        <h4 style={{
        margin: 0,
        color: '#ffffff'
      }}>Display Settings</h4>
        <Slider label="Brightness" value={brightness} onChange={setBrightness} min={0} max={100} showValue variant="warning" tooltipFormatter={val => \`\${val}%\`} showTooltip />
      </Stack>

      {/* Progress Indicator */}
      <Stack direction="column" spacing="sm">
        <h4 style={{
        margin: 0,
        color: '#ffffff'
      }}>Track Progress</h4>
        <Slider label="Song Progress" value={progress} onChange={setProgress} min={0} max={100} variant="brand" size="sm" showTooltip tooltipFormatter={val => {
        const totalSeconds = 180; // 3 minutes
        const currentSeconds = Math.floor(val / 100 * totalSeconds);
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        return \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
      }} helperText="Drag to seek through the track" />
      </Stack>
    </Stack>;
}`,...(X=(U=V.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const de=["Default","WithLabel","SizeVariations","VariantShowcase","WithTooltips","WithMarks","AdvancedFeatures","StatesAndInteractions","RealWorldExamples","InteractivePlayground"];export{f as AdvancedFeatures,m as Default,y as InteractivePlayground,V as RealWorldExamples,p as SizeVariations,C as StatesAndInteractions,h as VariantShowcase,g as WithLabel,b as WithMarks,S as WithTooltips,de as __namedExportsOrder,ve as default};
