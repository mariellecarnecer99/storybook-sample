import{P as B}from"./PureTaskList-481fcb64.js";import{j as P,e as x,f as l,g as L,k as m,l as w,m as a}from"./vue.esm-bundler-2078ee8f.js";import{d as E}from"./pinia-8de54fbb.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{w as A,f as d}from"./index-6a59d725.js";import"./Task-3e1a9237.js";import"./index-078d3f98.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-87174ba5.js";import"./index-356e4a49.js";const K=[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],D=E({id:"taskbox",state:()=>({tasks:K,status:"idle",error:null}),actions:{archiveTask(e){const s=this.tasks.find(t=>t.id===e);s&&(s.state="TASK_ARCHIVED")},pinTask(e){const s=this.tasks.find(t=>t.id===e);s&&(s.state="TASK_PINNED")}},getters:{getFilteredTasks:e=>e.tasks.filter(t=>t.state==="TASK_INBOX"||t.state==="TASK_PINNED")}}),b={components:{PureTaskList:B},name:"TaskList",setup(){const e=D();return{tasks:P(()=>e.getFilteredTasks),archiveTask:n=>e.archiveTask(n),pinTask:n=>e.pinTask(n)}}};function O(e,s,t,r,n,y){const p=x("PureTaskList");return l(),L(p,{tasks:r.tasks,onArchiveTask:r.archiveTask,onPinTask:r.pinTask},null,8,["tasks","onArchiveTask","onPinTask"])}const $=I(b,[["render",O]]);b.__docgenInfo={displayName:"TaskList",exportName:"default",description:"",tags:{},sourceFiles:["/Users/mariellecarnecer/Developer/taskbox/src/components/TaskList.vue"]};const N={name:"PureInboxScreen",components:{TaskList:$},props:{error:{type:Boolean,default:!1}}},X={key:0,class:"page lists-show"},F=a("div",{class:"wrapper-message"},[a("span",{class:"icon-face-sad"}),a("p",{class:"title-message"},"Oh no!"),a("p",{class:"subtitle-message"},"Something went wrong")],-1),V=[F],C={key:1,class:"page lists-show"},U=a("nav",null,[a("h1",{class:"title-page"},"Taskbox")],-1);function W(e,s,t,r,n,y){const p=x("TaskList");return l(),m("div",null,[t.error?(l(),m("div",X,V)):(l(),m("div",C,[U,w(p)]))])}const j=I(N,[["render",W]]);N.__docgenInfo={displayName:"PureInboxScreen",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/mariellecarnecer/Developer/taskbox/src/components/PureInboxScreen.vue"]};const ee={component:j,title:"PureInboxScreen",tags:["autodocs"]},o={},i={args:{error:!0}},c={play:async({canvasElement:e})=>{const s=A(e);await d.click(s.getByLabelText("pinTask-1")),await d.click(s.getByLabelText("pinTask-3"))}};var k,u,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(T=(u=o.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var _,f,g;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const se=["Default","Error","WithInteractions"];export{o as Default,i as Error,c as WithInteractions,se as __namedExportsOrder,ee as default};
//# sourceMappingURL=PureInboxScreen.stories-6732b550.js.map