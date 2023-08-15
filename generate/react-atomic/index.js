const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function getGenerateOptions(argv) {
  const options = {
    samplePath: path.resolve(__dirname, "./sample"),
    rootPath: path.resolve(process.cwd(), argv.projectName),
    projectName: argv.projectName,
    gitNamespace: argv.gitNamespace,
    emails: argv.emails
      ? argv.emails.replaceAll(" ", "").split(",")
      : ["annminn100@gmail.com"],
    git: argv.git,
    email: argv.git ? argv.email.split(",") : [],
  };
  return options;
}

function createProjectFolder(options) {
  if (!fs.existsSync(options.rootPath)) {
    return fs.mkdirSync(options.rootPath);
  }
  return Promise.resolve(options.rootPath);
}

async function generateReactAtomic(argv) {
  try {
    const options = getGenerateOptions(argv);
    await createProjectFolder(options);
    console.log(`Created folder ${options.projectName}`);
  } catch (error) {
    console.log(chalk.red(error));
  }
}

module.exports = { generateReactAtomic };
