import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Lukas",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Test on multiple platform", "already-existent pipelines"],
    // Which CI/CD tools do you use in your project?
    tools: ["GitHub Actions", "GitLab CI", "Jenkins"],
    // What do you want to learn in this workshop?
    expectations: ["More foundational understanding of CI/CD"],
  },
});
