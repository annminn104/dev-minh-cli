#!/usr/bin/env node

const path = require("path");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { GenerateBuilder, GenerateHandler } = require("./generate");

require = require("esm")(module /*, options*/);
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const argv = yargs(hideBin(process.argv))
  .command({
    command: "generate [project-name] [options]",
    aliases: ["g"],
    builder: GenerateBuilder,
    handler: GenerateHandler,
    desc: "Generate a project from a specified template",
  })
  .demandCommand(1, "You need at least one command before moving on")
  .example(
    "minh generate project_name -t angular",
    "Generate an Angular project with the name 'project_name'"
  )
  .help() // Enables the --help flag
  .alias("h", "help").argv;
