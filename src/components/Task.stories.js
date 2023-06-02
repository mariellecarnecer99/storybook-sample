
import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

// import { withDesign } from "storybook-addon-designs";

export default {
  component: Task,
  title: 'Task',
  // decorators: [withDesign],
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

// export const myStory = () => <Task />;

// myStory.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
//   },
// };

// export const MyStory = {
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/CvoAcROScm0QimjIPusLNL/Button-(Community)?type=design&node-id=2%3A2&t=BsAXKHqYpTeGFoTS-1",
//     },
//   },
// }

// export const myStory = () => <Button>Hello, World!</Button>;

// myStory.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
//   },
// };