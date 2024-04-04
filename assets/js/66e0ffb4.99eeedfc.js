"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[54686],{85162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(67294),n=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var r=t(87462),n=t(67294),o=t(86010),l=t(12466),s=t(16550),i=t(91980),d=t(67392),p=t(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function u(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function c(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function w(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=u(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[i,d]=f({queryString:t,groupId:r}),[m,w]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,p.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),h=(()=>{const e=i??m;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),w(e)}),[d,w,o]),tabValues:o}}var h=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:s,selectValue:i,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),u=e=>{const a=e.currentTarget,t=p.indexOf(a),r=d[t].value;r!==s&&(m(a),i(r))},c=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},d.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>p.push(e),onKeyDown:c,onClick:u},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function v(e){const a=w(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(g,(0,r.Z)({},e,a)),n.createElement(b,(0,r.Z)({},e,a)))}function N(e){const a=(0,h.Z)();return n.createElement(v,(0,r.Z)({key:String(a)},e))}},46300:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(67294),n=t(50012);function o(e){let{path:a}=e;const[t]=(0,n.Nk)("docusaurus.tab.js-ts"),o=a.lastIndexOf("{"),l=a.slice(o+1,a.length-1),[s,i]=l.split(","),d=a.slice(0,o);return r.createElement("code",null,d+("js"===t?s:i))}},48863:(e,a,t)=>{t.d(a,{A:()=>l,v:()=>s});var r=t(67294),n=t(50012),o=t(49875);function l(e){let{children:a}=e;const[t]=(0,n.Nk)("docusaurus.tab.js-ts");return"ts"===t&&r.createElement(o.Z,null,a)}function s(e){let{children:a}=e;const[t]=(0,n.Nk)("docusaurus.tab.js-ts");return"js"===t&&r.createElement(o.Z,null,a)}},904:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=t(87462),n=(t(67294),t(3905)),o=(t(46300),t(85162)),l=t(74866);t(48863);const s={title:"Configuring Middleware"},i=void 0,d={unversionedId:"advanced/middleware-config",id:"version-0.13.1/advanced/middleware-config",title:"Configuring Middleware",description:"Wasp comes with a minimal set of useful Express middleware in every application. While this is good for most users, we realize some may wish to add, modify, or remove some of these choices both globally, or on a per-api/path basis.",source:"@site/versioned_docs/version-0.13.1/advanced/middleware-config.md",sourceDirName:"advanced",slug:"/advanced/middleware-config",permalink:"/docs/advanced/middleware-config",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.1/advanced/middleware-config.md",tags:[],version:"0.13.1",frontMatter:{title:"Configuring Middleware"},sidebar:"docs",previous:{title:"Custom HTTP API Endpoints",permalink:"/docs/advanced/apis"},next:{title:"Type-Safe Links",permalink:"/docs/advanced/links"}},p={},m=[{value:"Default Global Middleware \ud83c\udf0d",id:"default-global-middleware-",level:2},{value:"Customization",id:"customization",level:2},{value:"Default Middleware Definitions",id:"default-middleware-definitions",level:3},{value:"1. Customize Global Middleware",id:"1-customize-global-middleware",level:2},{value:"2. Customize <code>api</code>-specific Middleware",id:"2-customize-api-specific-middleware",level:2},{value:"3. Customize Per-Path Middleware",id:"3-customize-per-path-middleware",level:2}],u={toc:m},c="wrapper";function f(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Wasp comes with a minimal set of useful Express middleware in every application. While this is good for most users, we realize some may wish to add, modify, or remove some of these choices both globally, or on a per-",(0,n.kt)("inlineCode",{parentName:"p"},"api"),"/path basis."),(0,n.kt)("h2",{id:"default-global-middleware-"},"Default Global Middleware \ud83c\udf0d"),(0,n.kt)("p",null,"Wasp's Express server has the following middleware by default:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},"Helmet"),": Helmet helps you secure your Express apps by setting various HTTP headers. ",(0,n.kt)("em",{parentName:"p"},"It's not a silver bullet, but it's a good start."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors#readme"},"CORS"),": CORS is a package for providing a middleware that can be used to enable ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," with various options."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"CORS middleware is required for the frontend to communicate with the backend."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/expressjs/morgan#readme"},"Morgan"),": HTTP request logger middleware.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#express.json"},"express.json")," (which uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/expressjs/body-parser#bodyparserjsonoptions"},"body-parser"),"): parses incoming request bodies in a middleware before your handlers, making the result available under the ",(0,n.kt)("inlineCode",{parentName:"p"},"req.body")," property."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"JSON middleware is required for ",(0,n.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Operations")," to function properly."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#express.urlencoded"},"express.urlencoded")," (which uses ",(0,n.kt)("a",{parentName:"p",href:"https://expressjs.com/en/resources/middleware/body-parser.html#bodyparserurlencodedoptions"},"body-parser"),"): returns middleware that only parses urlencoded bodies and only looks at requests where the ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Type")," header matches the type option.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cookie-parser#readme"},"cookieParser"),": parses Cookie header and populates ",(0,n.kt)("inlineCode",{parentName:"p"},"req.cookies")," with an object keyed by the cookie names."))),(0,n.kt)("h2",{id:"customization"},"Customization"),(0,n.kt)("p",null,"You have three places where you can customize middleware:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#1-customize-global-middleware"},"global"),": here, any changes will apply by default ",(0,n.kt)("em",{parentName:"p"},"to all operations (",(0,n.kt)("inlineCode",{parentName:"em"},"query")," and ",(0,n.kt)("inlineCode",{parentName:"em"},"action"),") and ",(0,n.kt)("inlineCode",{parentName:"em"},"api"),".")," This is helpful if you wanted to add support for multiple domains to CORS, for example."),(0,n.kt)("admonition",{parentName:"li",title:"Modifying global middleware",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please treat modifications to global middleware with extreme care as they will affect all operations and APIs. If you are unsure, use one of the other two options."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#2-customize-api-specific-middleware"},"per-api"),": you can override middleware for a specific api route (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /webhook/callback"),"). This is helpful if you want to disable JSON parsing for some callback, for example.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#3-customize-per-path-middleware"},"per-path"),": this is helpful if you need to customize middleware for all methods under a given path."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'It\'s helpful for things like "complex CORS requests" which may need to apply to both ',(0,n.kt)("inlineCode",{parentName:"li"},"OPTIONS")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"GET"),", or to apply some middleware to a ",(0,n.kt)("em",{parentName:"li"},"set of ",(0,n.kt)("inlineCode",{parentName:"em"},"api")," routes"),".")))),(0,n.kt)("h3",{id:"default-middleware-definitions"},"Default Middleware Definitions"),(0,n.kt)("p",null,"Below is the actual definitions of default middleware which you can override."),(0,n.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const defaultGlobalMiddleware = new Map([\n  ['helmet', helmet()],\n  ['cors', cors({ origin: config.allowedCORSOrigins })],\n  ['logger', logger('dev')],\n  ['express.json', express.json()],\n  ['express.urlencoded', express.urlencoded({ extended: false })],\n  ['cookieParser', cookieParser()]\n])\n"))),(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export type MiddlewareConfig = Map<string, express.RequestHandler>\n\n// Used in the examples below \ud83d\udc47\nexport type MiddlewareConfigFn = (middlewareConfig: MiddlewareConfig) => MiddlewareConfig\n\nconst defaultGlobalMiddleware: MiddlewareConfig = new Map([\n  ['helmet', helmet()],\n  ['cors', cors({ origin: config.allowedCORSOrigins })],\n  ['logger', logger('dev')],\n  ['express.json', express.json()],\n  ['express.urlencoded', express.urlencoded({ extended: false })],\n  ['cookieParser', cookieParser()]\n])\n")))),(0,n.kt)("h2",{id:"1-customize-global-middleware"},"1. Customize Global Middleware"),(0,n.kt)("p",null,"If you would like to modify the middleware for ",(0,n.kt)("em",{parentName:"p"},"all")," operations and APIs, you can do something like:"),(0,n.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{6} title=main.wasp","{6}":!0,title:"main.wasp"},'app todoApp {\n  // ...\n\n  server: {\n    setupFn: import setup from "@src/serverSetup",\n    middlewareConfigFn: import { serverMiddlewareFn } from "@src/serverSetup"\n  },\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/serverSetup.js",title:"src/serverSetup.js"},"import cors from 'cors'\nimport { config } from 'wasp/server'\n\nexport const serverMiddlewareFn = (middlewareConfig) => {\n  // Example of adding extra domains to CORS.\n  middlewareConfig.set('cors', cors({ origin: [config.frontendUrl, 'https://example1.com', 'https://example2.com'] }))\n  return middlewareConfig\n}\n"))),(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{6} title=main.wasp","{6}":!0,title:"main.wasp"},'app todoApp {\n  // ...\n\n  server: {\n    setupFn: import setup from "@src/serverSetup",\n    middlewareConfigFn: import { serverMiddlewareFn } from "@src/serverSetup"\n  },\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/serverSetup.ts",title:"src/serverSetup.ts"},"import cors from 'cors'\nimport { config, type MiddlewareConfigFn } from 'wasp/server'\n\nexport const serverMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {\n  // Example of adding an extra domains to CORS.\n  middlewareConfig.set('cors', cors({ origin: [config.frontendUrl, 'https://example1.com', 'https://example2.com'] }))\n  return middlewareConfig\n}\n")))),(0,n.kt)("h2",{id:"2-customize-api-specific-middleware"},"2. Customize ",(0,n.kt)("inlineCode",{parentName:"h2"},"api"),"-specific Middleware"),(0,n.kt)("p",null,"If you would like to modify the middleware for a single API, you can do something like:"),(0,n.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{5} title=main.wasp","{5}":!0,title:"main.wasp"},'// ...\n\napi webhookCallback {\n  fn: import { webhookCallback } from "@src/apis",\n  middlewareConfigFn: import { webhookCallbackMiddlewareFn } from "@src/apis",\n  httpRoute: (POST, "/webhook/callback"),\n  auth: false\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/apis.js",title:"src/apis.js"},"import express from 'express'\n\nexport const webhookCallback = (req, res, _context) => {\n  res.json({ msg: req.body.length })\n}\n\nexport const webhookCallbackMiddlewareFn = (middlewareConfig) => {\n  console.log('webhookCallbackMiddlewareFn: Swap express.json for express.raw')\n\n  middlewareConfig.delete('express.json')\n  middlewareConfig.set('express.raw', express.raw({ type: '*/*' }))\n\n  return middlewareConfig\n}\n\n"))),(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{5} title=main.wasp","{5}":!0,title:"main.wasp"},'// ...\n\napi webhookCallback {\n  fn: import { webhookCallback } from "@src/apis",\n  middlewareConfigFn: import { webhookCallbackMiddlewareFn } from "@src/apis",\n  httpRoute: (POST, "/webhook/callback"),\n  auth: false\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/apis.ts",title:"src/apis.ts"},"import express from 'express'\nimport { type WebhookCallback } from 'wasp/server/api'\nimport { type MiddlewareConfigFn } from 'wasp/server'\n\nexport const webhookCallback: WebhookCallback = (req, res, _context) => {\n  res.json({ msg: req.body.length })\n}\n\nexport const webhookCallbackMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {\n  console.log('webhookCallbackMiddlewareFn: Swap express.json for express.raw')\n\n  middlewareConfig.delete('express.json')\n  middlewareConfig.set('express.raw', express.raw({ type: '*/*' }))\n\n  return middlewareConfig\n}\n\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This gets installed on a per-method basis. Behind the scenes, this results in code like:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"router.post('/webhook/callback', webhookCallbackMiddleware, ...)\n"))),(0,n.kt)("h2",{id:"3-customize-per-path-middleware"},"3. Customize Per-Path Middleware"),(0,n.kt)("p",null,"If you would like to modify the middleware for all API routes under some common path, you can define a ",(0,n.kt)("inlineCode",{parentName:"p"},"middlewareConfigFn")," on an ",(0,n.kt)("inlineCode",{parentName:"p"},"apiNamespace"),":"),(0,n.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{4} title=main.wasp","{4}":!0,title:"main.wasp"},'// ...\n\napiNamespace fooBar {\n  middlewareConfigFn: import { fooBarNamespaceMiddlewareFn } from "@src/apis",\n  path: "/foo/bar"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/apis.js",title:"src/apis.js"},"export const fooBarNamespaceMiddlewareFn = (middlewareConfig) => {\n  const customMiddleware = (_req, _res, next) => {\n    console.log('fooBarNamespaceMiddlewareFn: custom middleware')\n    next()\n  }\n\n  middlewareConfig.set('custom.middleware', customMiddleware)\n\n  return middlewareConfig\n}\n"))),(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"{4} title=main.wasp","{4}":!0,title:"main.wasp"},'// ...\n\napiNamespace fooBar {\n  middlewareConfigFn: import { fooBarNamespaceMiddlewareFn } from "@src/apis",\n  path: "/foo/bar"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/apis.ts",title:"src/apis.ts"},"import express from 'express'\nimport { type MiddlewareConfigFn } from 'wasp/server'\n\nexport const fooBarNamespaceMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {\n  const customMiddleware: express.RequestHandler = (_req, _res, next) => {\n    console.log('fooBarNamespaceMiddlewareFn: custom middleware')\n    next()\n  }\n\n  middlewareConfig.set('custom.middleware', customMiddleware)\n\n  return middlewareConfig\n}\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This gets installed at the router level for the path. Behind the scenes, this results in something like:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"router.use('/foo/bar', fooBarNamespaceMiddleware)\n"))))}f.isMDXComponent=!0}}]);