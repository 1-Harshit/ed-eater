import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ug3igq',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
