export default () => ({
  type: "checkbox",
  name: "middleware",
  choices: [
    {
      name: "koaStatic",
    },
    {
      name: "koaRouter",
    },
  ],
});
