const fs = require("fs");
const fsa = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const shell = require("shelljs");

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

function createGitignore(options) {
  return new Promise(async (resolve, reject) => {
    try {
      if (options.git && options.git.ignore) {
      } else {
        const copy = await fs.copyFileSync(
          path.join(options.samplePath, "gitignore.template"),
          path.join(options.rootPath, ".gitignore")
        );
        resolve(copy);
      }
    } catch (err) {
      reject(err);
    }
  });
}

function createENV(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.copyFileSync(
        path.join(path.join(options.samplePath, ".env.example")),
        path.join(options.rootPath, ".env")
      );
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createPackageJson(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const sampleContent = await fs.readFileSync(
        path.join(options.samplePath, "package.json"),
        { encoding: "utf8", flag: "r" }
      );
      const sample = JSON.parse(sampleContent);
      const json = {
        ...sample,
        ...{
          name: options.projectName,
          version: "0.0.0",
        },
      };
      const result = await fs.writeFileSync(
        path.join(options.rootPath, "package.json"),
        JSON.stringify(json, undefined, 2),
        { encoding: "utf8" }
      );
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createPrettierConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.copyFileSync(
        path.join(options.samplePath, ".prettierrc"),
        path.join(options.rootPath, ".prettierrc")
      );
      await fs.copyFileSync(
        path.join(options.samplePath, ".prettierignore"),
        path.join(options.rootPath, ".prettierignore")
      );
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createTsConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.copyFileSync(
        path.join(options.samplePath, "tsconfig.json"),
        path.join(options.rootPath, "tsconfig.json")
      );
      await fs.copyFileSync(
        path.join(options.samplePath, "tsconfig.build.json"),
        path.join(options.rootPath, "tsconfig.build.json")
      );
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createReadme(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fs.copyFileSync(
        path.join(options.samplePath, "README.md"),
        path.join(options.rootPath, "README.md")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function createOthersCli(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fs.copyFileSync(
        path.join(options.samplePath, "nest-cli.json"),
        path.join(options.rootPath, "nest-cli.json")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function createSourceCode(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, "src"),
        path.join(options.rootPath, "src")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function installNodeModulePackages(options) {
  return new Promise(async (resolve, reject) => {
    try {
      shell.cd(options.rootPath);
      shell.exec("yarn", {});
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

async function generateServer(argv) {
  try {
    const options = getGenerateOptions(argv);
    await createProjectFolder(options);
    console.log(`Created folder ${options.projectName}`);
    await createGitignore(options);
    console.log(`Created .gitignore`);
    await createENV(options);
    console.log(`Created .env`);
    await createPackageJson(options);
    console.log(`Created package.json`);
    await createPrettierConfig(options);
    console.log(`Created .prettierrc and .prettierignore`);
    await createTsConfig(options);
    console.log(`Created tsconfig.json and tsconfig.build.json`);
    await createReadme(options);
    console.log(`Created readme.md`);
    await createOthersCli(options);
    console.log(`Created Nestjs cli`);
    await createSourceCode(options);
    console.log(`Created folder src`);
    console.log(
      chalk.green(
        "Created template successfully. Start installing node_modules packages..."
      )
    );
    await installNodeModulePackages(options);
    console.log(chalk.green("Install Successfully"));
  } catch (error) {
    console.log(chalk.red(error));
  }
}

module.exports = { generateServer };
