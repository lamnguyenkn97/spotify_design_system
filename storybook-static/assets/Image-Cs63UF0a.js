import{r as i,R as o}from"./index-B-SYruCi.js";import{F as X}from"./index.es-CQ4XmKgj.js";import{m as L,d as E,l as r}from"./GlobalStyles-Cn10x2UR.js";import{c as t}from"./colors-B2Ab1-XV.js";import{b as x}from"./radius-CVqooa3C.js";import{h as B,D as G,B as J,E as K,p as Q}from"./index-Cy0hq6F7.js";import{c as Y}from"./index-fYcu5K3v.js";const $={xs:"2rem",sm:"3rem",md:"4rem",lg:"6rem",xl:"8rem",full:"100%"},k={rectangle:x.md,rounded:x.lg,square:x.md,circle:"50%"},d={iconSize:"3x",colors:{default:t.grey.grey4,error:t.decorative.redRedWine,spotify:t.primary.brand}},l={width:"auto",height:"auto",shape:"rectangle",objectFit:"cover",placeholder:"blur",loading:!1,lazy:!0,fallbackSrc:void 0},Z=L`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,ee=L`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`,R=e=>typeof e=="number"?`${e}px`:typeof e=="string"&&e in $?$[e]:e,ae=(e,a)=>{const u=k[e]||k.rectangle;return e==="square"&&!a?r`
      aspect-ratio: 1;
      border-radius: ${u};
    `:e==="circle"?r`
      aspect-ratio: 1;
      border-radius: 50%;
    `:r`
    border-radius: ${u};
    ${a?`aspect-ratio: ${a};`:""}
  `},te=e=>{switch(e){case"blur":return r`
        background: linear-gradient(90deg, ${t.grey.grey2} 25%, ${t.grey.grey3} 50%, ${t.grey.grey2} 75%);
        background-size: 200% 100%;
        animation: ${ee} 2s infinite;
      `;case"skeleton":return r`
        background-color: ${t.grey.grey2};
        animation: ${Z} 1.5s ease-in-out infinite;
      `;case"empty":return r`
        background-color: ${t.grey.grey1};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${t.grey.grey4};
        font-size: 0.875rem;
        
        &::after {
          content: '🖼️';
          font-size: 1.5rem;
        }
      `;case"custom":default:return r`
        background-color: ${t.grey.grey1};
      `}},le=E.div.withConfig({shouldForwardProp:e=>!["width","height","aspectRatio","shape","loading","placeholder"].includes(e)})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  /* Size styles */
  width: ${({width:e})=>R(e)};
  height: ${({height:e})=>R(e)};
  
  /* Shape and aspect ratio styles */
  ${({shape:e,aspectRatio:a})=>ae(e,a)};
  
  /* Loading placeholder styles */
  ${({loading:e,placeholder:a})=>e&&te(a)};
`,re=E.img.withConfig({shouldForwardProp:e=>!["objectFit","isLoading"].includes(e)})`
  width: 100%;
  height: 100%;
  object-fit: ${({objectFit:e})=>e};
  transition: opacity 0.3s ease;
  
  /* Hide image while loading */
  ${({isLoading:e})=>e&&r`
    opacity: 0;
    position: absolute;
  `};
`,z=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t.grey.grey4};
  font-size: 0.875rem;
`,ne={avatar:B,album:G,playlist:J,image:K,broken:Q,spotify:Y},ie=(e="image")=>ne[e],se=(e,a)=>e?d.colors.error:a==="spotify"?d.colors.spotify:d.colors.default,V=i.forwardRef(({src:e,alt:a,width:u=l.width,height:H=l.height,shape:P=l.shape,aspectRatio:C,objectFit:F=l.objectFit,fallbackSrc:f=l.fallbackSrc,placeholder:S=l.placeholder,placeholderContent:T,placeholderType:g="image",placeholderIconSize:j=d.iconSize,loading:N=l.loading,lazy:M=l.lazy,onError:p,onLoad:y,className:A,...W},D)=>{const[v,m]=i.useState(e),[I,n]=i.useState(!!e),[h,s]=i.useState(!1),[b,c]=i.useState(!e);i.useEffect(()=>{e?(m(e),n(!0),s(!1),c(!1)):(m(""),s(!1),n(!1),c(!0))},[e,g]);const O=w=>{n(!1),y==null||y(w)},U=w=>{if(s(!0),n(!1),f&&v!==f){m(f),n(!0),s(!1),c(!1);return}m(""),c(!0),s(!0),n(!1),p==null||p(w)},q=N||I,_=q||h;return o.createElement(le,{width:u,height:H,aspectRatio:C,shape:P,loading:q,placeholder:S,className:A},v&&!b&&o.createElement(re,{ref:D,src:v,alt:a,objectFit:F,isLoading:I,onLoad:O,onError:U,loading:M?"lazy":"eager",...W}),b&&o.createElement(z,null,o.createElement(X,{icon:ie(h?"broken":g),size:j,color:se(h,g)})),_&&S==="custom"&&T&&!b&&o.createElement(z,null,T))});V.displayName="Image";V.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alt text for accessibility"},width:{required:!1,tsType:{name:"union",raw:"ImageSize | string | number",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},{name:"string"},{name:"number"}]},description:"Width of the image - can be preset size or custom value",defaultValue:{value:"'auto'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"ImageSize | string | number",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},{name:"string"},{name:"number"}]},description:"Height of the image - can be preset size or custom value",defaultValue:{value:"'auto'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle' | 'rounded' | 'rectangle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'rectangle'"}]},description:`Predefined shape of the image
@default 'rectangle'`,defaultValue:{value:"'rectangle'",computed:!1}},aspectRatio:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Aspect ratio of the image (e.g., "16/9", "1/1", 1.5)
@default undefined`},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'scale-down'"},{name:"literal",value:"'none'"}]},description:`How the image should fit within its container
@default 'cover'`,defaultValue:{value:"'cover'",computed:!1}},fallbackSrc:{required:!1,tsType:{name:"string"},description:"Fallback image URL if primary src fails",defaultValue:{value:"undefined",computed:!0}},placeholder:{required:!1,tsType:{name:"union",raw:"'blur' | 'empty' | 'skeleton' | 'custom'",elements:[{name:"literal",value:"'blur'"},{name:"literal",value:"'empty'"},{name:"literal",value:"'skeleton'"},{name:"literal",value:"'custom'"}]},description:`Type of placeholder to show while loading
@default 'blur'`,defaultValue:{value:"'blur'",computed:!1}},placeholderContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom placeholder content (for 'custom' placeholder type)"},placeholderType:{required:!1,tsType:{name:"union",raw:"'avatar' | 'album' | 'playlist' | 'image' | 'broken' | 'spotify'",elements:[{name:"literal",value:"'avatar'"},{name:"literal",value:"'album'"},{name:"literal",value:"'playlist'"},{name:"literal",value:"'image'"},{name:"literal",value:"'broken'"},{name:"literal",value:"'spotify'"}]},description:`Type of default placeholder to use for errors/missing images
@default 'image'`,defaultValue:{value:"'image'",computed:!1}},placeholderIconSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'1x'"},{name:"literal",value:"'2x'"},{name:"literal",value:"'3x'"},{name:"literal",value:"'4x'"},{name:"literal",value:"'5x'"},{name:"literal",value:"'6x'"},{name:"literal",value:"'7x'"},{name:"literal",value:"'8x'"},{name:"literal",value:"'9x'"},{name:"literal",value:"'10x'"}]},description:`Size of placeholder icon (FontAwesome size)
@default '3x'`,defaultValue:{value:"'3x'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether to show a loading state
@default false`,defaultValue:{value:"false",computed:!1}},lazy:{required:!1,tsType:{name:"boolean"},description:`Whether the image should be lazy loaded
@default true`,defaultValue:{value:"true",computed:!1}},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"void"}}},description:"Error callback when image fails to load"},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"void"}}},description:"Load callback when image loads successfully"},className:{required:!1,tsType:{name:"string"},description:"Custom className for styling"}},composes:["Omit"]};export{V as I,k as a,$ as s};
