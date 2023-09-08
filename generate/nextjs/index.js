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

function createHygenTemplates(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, "_templates"),
        path.join(options.rootPath, "_templates")
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

function createStorybook(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, ".storybook"),
        path.join(options.rootPath, ".storybook")
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

function createPublic(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fsa.copySync(
        path.join(options.samplePath, "public"),
        path.join(options.rootPath, "public")
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

function createDocker(options) {
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
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createEnvironment(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, ".env.development"),
          path.join(options.rootPath, ".env.development")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, ".env.example"),
          path.join(options.rootPath, ".env.example")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createESLint(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, ".eslintignore"),
          path.join(options.rootPath, ".eslintignore")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, ".eslintrc.json"),
          path.join(options.rootPath, ".eslintrc.json")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
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

function createBuildAndConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, ".npmrc"),
          path.join(options.rootPath, ".npmrc")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, ".nvmrc"),
          path.join(options.rootPath, ".nvmrc")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, ".swcrc"),
          path.join(options.rootPath, ".swcrc")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "commitlint.config.js"),
          path.join(options.rootPath, "commitlint.config.js")
        ),
      ]);
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

function createReadmeAndChangelog(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, "CHANGELOG.md"),
          path.join(options.rootPath, "CHANGELOG.md")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "README.md"),
          path.join(options.rootPath, "README.md")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createJestConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      await Promise.all([
        fs.copyFileSync(
          path.join(options.samplePath, "jest.config.mjs"),
          path.join(options.rootPath, "jest.config.mjs")
        ),
        fs.copyFileSync(
          path.join(options.samplePath, "jest.setup.js"),
          path.join(options.rootPath, "jest.setup.js")
        ),
      ]);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

function createNextConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fs.copyFileSync(
        path.join(options.samplePath, "next.config.js"),
        path.join(options.rootPath, "next.config.js")
      );
      resolve(copy);
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

function createTsConfig(options) {
  return new Promise(async (resolve, reject) => {
    try {
      const copy = await fs.copyFileSync(
        path.join(options.samplePath, "tsconfig.json"),
        path.join(options.rootPath, "tsconfig.json")
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

async function generateNextJS(argv) {
  try {
    const options = getGenerateOptions(argv);
    await createProjectFolder(options);
    console.log(`Created folder ${options.projectName}`);
    await createHygenTemplates(options);
    console.log(`Created folder hygen templates`);
    await createGithubWorkFlows(options);
    console.log(`Created folder .github includes action workflow`);
    await createHusky(options);
    console.log(`Created folder .husky`);
    await createStorybook(options);
    console.log(`Created folder .storybook`);
    await createVscode(options);
    console.log(`Created folder .vscode`);
    await createPublic(options);
    console.log(`Created folder public`);
    await createSourceCode(options);
    console.log(`Created folder src`);
    await createDocker(options);
    console.log(`Created files Dockerfile docker-compose.yml .dockerignore`);
    await createEnvironment(options);
    console.log(`Created Environment env.development .env.example`);
    await createESLint(options);
    console.log(`Created files .eslintignore .eslint.json`);
    await createGitignore(options);
    console.log(`Created files .gitignore`);
    await createBuildAndConfig(options);
    console.log(
      `Created config files .npmrc .nvmrc .swcrc commitlint.config.js`
    );
    await createPrettierConfig(options);
    console.log(`Created files .prettierrc .prettierignore`);
    await createReadmeAndChangelog(options);
    console.log(`Created files README.md CHANGELOG.md`);
    await createJestConfig(options);
    console.log(`Created files jest.config.mjs jest.setup.js`);
    await createNextConfig(options);
    console.log(`Created files next.config.js`);
    await createPackageJson(options);
    console.log(`Created file package.json`);
    await createTsConfig(options);
    console.log(`Created file tsconfig.json`);
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

module.exports = { generateNextJS };
