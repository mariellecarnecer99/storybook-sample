import MyButton from './Button.vue';
import { withDesign } from "storybook-addon-designs";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: { 
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: {
        type: 'text',
      }
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

Primary.story = {
  name: "Embedded Figma File",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CvoAcROScm0QimjIPusLNL/Button-(Community)?type=design&t=wyi9ajnU4lut1hM4-1",
    },
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const embedFile = () => ({
  components: { MyButton },
  template: "<MyButton />",
});

embedFile.story = {
  name: "Embedded Figma File",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CvoAcROScm0QimjIPusLNL/Button-(Community)?type=design&t=wyi9ajnU4lut1hM4-1",
    },
  },
};