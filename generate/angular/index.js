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

function createPackageJson(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const sampleContent = await fs.promises.readFile(
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
      await fs.promises.writeFile(
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
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, ".prettierrc"),
          path.join(options.rootPath, ".prettierrc")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, ".prettierignore"),
          path.join(options.rootPath, ".prettierignore")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createTsConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, "tsconfig.json"),
          path.join(options.rootPath, "tsconfig.json")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "tsconfig.app.json"),
          path.join(options.rootPath, "tsconfig.app.json")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "tsconfig.spec.json"),
          path.join(options.rootPath, "tsconfig.spec.json")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createDockerNginx(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, ".dockerignore"),
          path.join(options.rootPath, ".dockerignore")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "docker-compose.yml"),
          path.join(options.rootPath, "docker-compose.yml")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "Dockerfile"),
          path.join(options.rootPath, "Dockerfile")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "nginx.conf"),
          path.join(options.rootPath, "nginx.conf")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "copy-dist.sh"),
          path.join(options.rootPath, "copy-dist.sh")
        ),
      ]);
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

function createAngularJson(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fs.copyFileSync(
        path.join(options.samplePath, "angular.json"),
        path.join(options.rootPath, "angular.json")
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

function createHusky(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, ".husky"),
        path.join(options.rootPath, ".husky")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function createGithubWorkFlows(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, ".github"),
        path.join(options.rootPath, ".github")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function createVscode(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, ".vscode"),
        path.join(options.rootPath, ".vscode")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

function createEditorConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copyFileSync(
        path.join(options.samplePath, ".editorconfig"),
        path.join(options.rootPath, ".editorconfig")
      );
      resolve(copy);
    } catch (err) {
      reject(err);
    }
  });
}

async function generateAngular(argv) {
  try {
    const options = getGenerateOptions(argv);
    await createProjectFolder(options);
    console.log(`Created folder ${options.projectName}`);
    await createGitignore(options);
    console.log(`Created .gitignore`);
    await createPackageJson(options);
    console.log(`Created package.json`);
    await createPrettierConfig(options);
    console.log(`Created .prettierrc and .prettierignore`);
    await createTsConfig(options);
    console.log(
      `Created tsconfig.json ,tsconfig.spec.json and tsconfig.app.json`
    );
    await createDockerNginx(options);
    console.log(
      `Created .dockerignore, docker-compose.yml and Dockerfile and Nginx Config`
    );
    await createHusky(options);
    console.log(`Created folder .husky`);
    await createGithubWorkFlows(options);
    console.log(`Created .github/workflows Actions CI`);
    await createEditorConfig(options);
    console.log(`Created .editorconfig`);
    await createVscode(options);
    console.log(`Created folder .vscode`);
    await createReadme(options);
    console.log(`Created README.md`);
    await createAngularJson(options);
    console.log(`Created Angular Json`);
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

module.exports = { generateAngular };
