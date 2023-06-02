import{T}from"./Task-3e1a9237.js";import{a as e}from"./chunk-KKE3V3AL-49257385.js";import"./vue.esm-bundler-2078ee8f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-87174ba5.js";const S={component:T,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},_={onPinTask:e("pin-task"),onArchiveTask:e("archive-task")},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},t={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var r,o,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var k,m,d;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["actionsData","Default","Pinned","Archived"];export{t as Archived,a as Default,s as Pinned,f as __namedExportsOrder,_ as actionsData,S as default};
//# sourceMappingURL=Task.stories-9fb8cb67.js.map
