import { withDesign } from "storybook-addon-designs";
import Button from './Button.vue';

export default {
    title: "My stories",
    decorators: [withDesign],
  };
  
  export const myStory = () => ({
    components: { Button }
  });

  myStory.story = {
    name: "My awesome story",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/CvoAcROScm0QimjIPusLNL/Button-(Community)?type=design&node-id=2%3A2&t=BsAXKHqYpTeGFoTS-1",
      },
    },
  };