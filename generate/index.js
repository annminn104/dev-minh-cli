const inquirer = require("inquirer");
const chalk = require("chalk");

const Template = {
  ANGULAR: "ANGULAR",
  NEXTJS: "NEXTJS",
  REACT_ATOMIC: "REACT_ATOMIC",
  SERVER: "SERVER",
};

function promptUserForTemplateChoice(projectName) {
  const questions = [
    {
      type: "list",
      name: "template",
      message: "Choose a template:",
      choices: [
        { name: chalk.red("Angular"), value: Template.ANGULAR },
        { name: chalk.cyan("NextJS"), value: Template.NEXTJS },
        { name: chalk.blue("React Atomic"), value: Template.REACT_ATOMIC },
        { name: chalk.yellow("Server"), value: Template.SERVER },
      ],
    },
  ];

  if (!projectName || projectName === "./") {
    questions.push({
      type: "input",
      name: "folderName",
      message: "Enter folder name for the project:",
      default: "my_project",
    });
  }

  return inquirer.prompt(questions);
}

function processSelectedTemplate(template, argv) {
  console.log("Project name received:", argv["projectName"]);

  switch (template) {
    case Template.ANGULAR:
      require("./angular").generateAngular(argv);
      break;
    case Template.NEXTJS:
      require("./nextjs").generateNextJS(argv);
      break;
    case Template.REACT_ATOMIC:
      require("./react-atomic").generateReactAtomic(argv);
      break;
    case Template.SERVER:
      require("./server").generateServer(argv);
      break;
    default:
      console.log(chalk.red("Invalid template"));
      break;
  }
}

function GenerateHandler(argv) {
  if (!argv.template) {
    promptUserForTemplateChoice(argv["projectName"]).then((answers) => {
      argv.template = answers.template;
      console.log("Received folder name:", answers.folderName);

      if (answers.folderName) {
        argv["projectName"] = answers.folderName;
      } else if (!argv["projectName"] || argv["projectName"] === "./") {
        argv["projectName"] = "my_project";
      }

      processSelectedTemplate(answers.template, argv);
    });
  } else {
    processSelectedTemplate(argv.template.toUpperCase(), argv);
  }
}

function GenerateBuilder(yargs) {
  const builder = yargs
    .options({
      template: {
        type: "string",
        alias: "t",
        describe:
          "Type of template to generate (optional). If not provided, you'll be prompted.",
        choices: ["angular", "nextjs", "react-atomic", "server"],
        demandOption: false, // set this to false
      },
    })
    .positional("projectName", {
      type: "string",
      alias: ["p"],
      describe: "Name of the project (optional)",
      default: "./",
    });

  return builder;
}

module.exports = { GenerateHandler, GenerateBuilder };
