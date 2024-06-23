const templatePrefix = "plop-templates";
export default function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "create new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/viewparts/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: templatePrefix + "/viewparts/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/viewparts/{{pascalCase name}}/index.tsx",
        templateFile: templatePrefix + "/viewparts/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/viewparts/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
        templateFile: templatePrefix + "/viewparts/Component.stories.ts.hbs",
      },
    ],
  });
}