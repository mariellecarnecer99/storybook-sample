import{P as h}from"./PureTaskList-481fcb64.js";import{Default as s}from"./Task.stories-9fb8cb67.js";import"./Task-3e1a9237.js";import"./vue.esm-bundler-2078ee8f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./chunk-KKE3V3AL-49257385.js";import"./_commonjsHelpers-87174ba5.js";const _={component:h,title:"PureTaskList",tags:["autodocs"],decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],argTypes:{onPinTask:{},onArchiveTask:{}}},a={args:{tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]}},e={args:{tasks:[...a.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},t={args:{tasks:[],loading:!0}},r={args:{...t.args,loading:!1}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [{
      ...TaskStories.Default.args.task,
      id: '1',
      title: 'Task 1'
    }, {
      ...TaskStories.Default.args.task,
      id: '2',
      title: 'Task 2'
    }, {
      ...TaskStories.Default.args.task,
      id: '3',
      title: 'Task 3'
    }, {
      ...TaskStories.Default.args.task,
      id: '4',
      title: 'Task 4'
    }, {
      ...TaskStories.Default.args.task,
      id: '5',
      title: 'Task 5'
    }, {
      ...TaskStories.Default.args.task,
      id: '6',
      title: 'Task 6'
    }]
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,g,k;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...(k=(g=e.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,T;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const I=["Default","WithPinnedTasks","Loading","Empty"];export{a as Default,r as Empty,t as Loading,e as WithPinnedTasks,I as __namedExportsOrder,_ as default};
//# sourceMappingURL=PureTaskList.stories-ce64dc44.js.map
