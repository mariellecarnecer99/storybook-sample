// Chart.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3';

import Chart from './Chart.vue';

const meta: Meta<typeof Chart> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Chart',
  component: Chart,
  tags: ['autodocs']
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Chart>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Chart },
    setup() {
      return { args };
    },
    template: '<Chart v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};