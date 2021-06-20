const config = (plop) => {
  plop.setGenerator("Component", {
    description: "Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: "templates/component",
        destination: "src/components/{{name}}",
        templateFiles: "templates/component/*.hbs",
        stripExtensions: ["hbs"],
        verbose: true,
      },
      "- - - - - - - - - - - - - - - - - - - -",
      "Component created successfully!",
      "- - - - - - - - - - - - - - - - - - - -\n",
    ],
  });
};

module.exports = config;
