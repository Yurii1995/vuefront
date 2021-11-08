import VfMPostThumbInline from "./post-thumb-inline.vue.mjs";
import "./post-thumb-inline.scss.mjs";
import { getPost } from "../../../utils/fakeData.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/post-thumb-inline",
  component: VfMPostThumbInline,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMPostThumbInline
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-m-post-thumb-inline v-bind="args" />`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  rightAlign: false,
  post: getPost()
};
//# sourceMappingURL=post-thumb-inline.stories.mjs.map