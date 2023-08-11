# Documentation for dev-minh-cli

## dev-minh-cli is a tool that helps generate project templates for various types of projects including Angular, React, Server (NestJS)

### Installation

To install dev-minh-cli, you will need to use Node Package Manager (npm). Here's how:

```shell
npm install -g devminhcli
```

This command will install `dev-minh-cli` globally on your machine, allowing you to run it from any directory in your command line.

### Usage

Once installed, you can use `dev-minh-cli` to create a new project using a supported template.
Here is a general syntax to generate a new project:

```shell
minhcli generate <project_name> --template <template_name>
```

or shorthand version:

```shell
minhcli g <project_name> -t <template_name>
```

**Where:**

- <project_name> is the name of your new project.

- <template_name> is the name of the template you wish to use. Currently supported templates are: angular, react, and nest.

**For example:** to create a new Angular project named "my-new-project", you can use the following command:

```shell
minhcli generate my-new-project --template angular
```

Similarly, you can replace `angular` with `react` or `server` (NestJS) to create a new project with one of those templates.

Here's a table summarizing the available commands:

| Command                                                | Description                              |
| ------------------------------------------------------ | ---------------------------------------- |
| **minhcli generate <project_name> --template angular** | Generate an Angular project              |
| **minhcli generate <project_name> --template react**   | Generate a React project                 |
| **minhcli generate <project_name> --template server**  | Generate a NestJS project                |
|                                                        |                                          |
| **minhcli g <project_name> -t angular**                | Shorthand to generate an Angular project |
| **minhcli g <project_name> -t react**                  | Shorthand to generate a React project    |
| **minhcli g <project_name> -t server**                 | Shorthand to generate a NestJS project   |

### HELP

```shell
minhcli --help
```
