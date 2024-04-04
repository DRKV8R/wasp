"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[85185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var y=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(50012);function i(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[s,l]=o.split(","),u=t.slice(0,i);return n.createElement("code",null,u+("js"===a?s:l))}},39832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=(a(46300),a(85162)),o=a(74866);const s={title:"Entities"},l=void 0,u={unversionedId:"data-model/entities",id:"version-0.13.1/data-model/entities",title:"Entities",description:"Entities are the foundation of your app's data model. In short, an Entity defines a model in your database.",source:"@site/versioned_docs/version-0.13.1/data-model/entities.md",sourceDirName:"data-model",slug:"/data-model/entities",permalink:"/docs/data-model/entities",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.1/data-model/entities.md",tags:[],version:"0.13.1",frontMatter:{title:"Entities"},sidebar:"docs",previous:{title:"7. Adding Authentication",permalink:"/docs/tutorial/auth"},next:{title:"Overview",permalink:"/docs/data-model/operations/overview"}},c={},p=[{value:"Defining an Entity",id:"defining-an-entity",level:2},{value:"Working with Entities",id:"working-with-entities",level:3},{value:"Using Entities in Operations",id:"using-entities-in-operations",level:4},{value:"Using Entities directly",id:"using-entities-directly",level:4},{value:"Next steps",id:"next-steps",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Entities are the foundation of your app's data model. In short, an Entity defines a model in your database."),(0,r.kt)("p",null,"Wasp uses the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma ORM")," to implement all database functionality and occasionally enhances it with a thin abstraction layer.\nWasp Entities directly correspond to ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-schema/data-model"},"Prisma's data model"),". Still, you don't need to be familiar with Prisma to effectively use Wasp, as it comes with a simple API wrapper for working with Prisma's core features."),(0,r.kt)("p",null,"The only requirement for defining Wasp Entities is familiarity with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Prisma Schema Language (PSL)")),", a simple definition language explicitly created for defining models in Prisma.\nThe language is declarative and very intuitive. We'll also go through an example later in the text, so there's no need to go and thoroughly learn it right away. Still, if you're curious, look no further than Prisma's official documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"},"Basic intro and examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference"},"A more exhaustive language specification"))),(0,r.kt)("h2",{id:"defining-an-entity"},"Defining an Entity"),(0,r.kt)("p",null,"As mentioned, an ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," declaration represents a database model."),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," declaration corresponds 1-to-1 to ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-schema/data-model"},"Prisma's data model"),". Here's how you could define an Entity that represents a Task:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},"entity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},"entity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n")))),(0,r.kt)("p",null,"Let's go through this declaration in detail:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity Task")," - This tells Wasp that we wish to define an Entity (i.e., database model) called ",(0,r.kt)("inlineCode",{parentName:"li"},"Task"),". Wasp automatically creates a table called ",(0,r.kt)("inlineCode",{parentName:"li"},"tasks"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{=psl ... psl=}")," - Wasp treats everything that comes between the two ",(0,r.kt)("inlineCode",{parentName:"li"},"psl")," tags as ",(0,r.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"},"PSL (Prisma Schema Language)"),".")),(0,r.kt)("p",null,"The above PSL definition tells Wasp to create a table for storing Tasks where each task has three fields (i.e., the ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks")," table has three columns):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - An integer value serving as a primary key. The database automatically generates it by incrementing the previously generated ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," - A string value for storing the task's description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isDone")," - A boolean value indicating the task's completion status. If you don't set it when creating a new task, the database sets it to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," by default.")),(0,r.kt)("h3",{id:"working-with-entities"},"Working with Entities"),(0,r.kt)("p",null,"Let's see how you can define and work with Wasp Entities:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create/update some Entities in your ",(0,r.kt)("inlineCode",{parentName:"li"},".wasp")," file."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"wasp db migrate-dev"),". This command syncs the database model with the Entity definitions in your ",(0,r.kt)("inlineCode",{parentName:"li"},".wasp")," file. It does this by creating migration scripts."),(0,r.kt)("li",{parentName:"ol"},"Migration scripts are automatically placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"migrations/")," folder. Make sure to commit this folder into version control."),(0,r.kt)("li",{parentName:"ol"},"Use Wasp's JavasScript API to work with the database when implementing Operations (we'll cover this in detail when we talk about ",(0,r.kt)("a",{parentName:"li",href:"../data-model/operations/overview"},"operations"),").")),(0,r.kt)("h4",{id:"using-entities-in-operations"},"Using Entities in Operations"),(0,r.kt)("p",null,"Most of the time, you will be working with Entities within the context of ",(0,r.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Operations (Queries & Actions)"),". We'll see how that's done on the next page."),(0,r.kt)("h4",{id:"using-entities-directly"},"Using Entities directly"),(0,r.kt)("p",null,"If you need more control, you can directly interact with Entities by importing and using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-client/crud"},"Prisma Client"),". We recommend sticking with conventional Wasp-provided mechanisms, only resorting to directly using the Prisma client only if you need a feature Wasp doesn't provide."),(0,r.kt)("p",null,"You can only use the Prisma Client in your Wasp server code. You can import it like this:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { prisma } from 'wasp/server'\n\nprisma.task.create({\n    description: \"Read the Entities doc\",\n    isDone: true // almost :)\n})\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { prisma } from 'wasp/server'\n\nprisma.task.create({\n    description: \"Read the Entities doc\",\n    isDone: true // almost :)\n})\n")))),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that we've seen how to define Entities that represent Wasp's core data model, we'll see how to make the most of them in other parts of Wasp. Keep reading to learn all about Wasp Operations!"))}h.isMDXComponent=!0}}]);