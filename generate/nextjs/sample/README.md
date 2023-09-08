# TRIPPER USER DOCUMENTS

## Libraries, dependencies and tools

- `Node v16.20.\* /Gallium`
- `NextJS v13.4 + TypeScript` <https://nextjs.org>
- `React v18.*` <https://react.dev/learn>
- `Axios v1.4` <https://axios-http.com/docs/intro>
- `Mui (Material for React) v5.14.*` <https://mui.com>
- `React Query (@tanstack) v4.33.*` <https://tanstack.com/query/v4/docs/react/overview>
- `Jest v29.6.*` <https://jestjs.io/docs/getting-started>
- `React Redux v8.1.*` <https://react-redux.js.org/introduction/getting-started>
- `Redux-toolkit v1.9.*` <https://redux-toolkit.js.org/introduction/getting-started>
- `Storybook v7.4.*` <https://storybook.js.org/docs/react/writing-docs/introduction>
- `Styled-components v6.*` <https://styled-components.com>
- `Sass`
- `Hygen`
- `Eslint`
- `Webpack v5 + Babel + SWC`
- `Docker`

## Files / Directories

| Path                               | Purpose                                                                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| /\_templates/                      | contains scaffolding templates based on `Hygen`, used for quickly generating boilerplate code                               |
| /.github/                          | contains `GitHub Actions` or workflows, used for CI/CD and other GitHub-related automations                                 |
| /.husky                            | contains hooks for Husky, a tool that ensures code quality by running linters/tests `commit-msg` `pre-commit` or `pre-push` |
| /.next/                            | `Next.js` build output directory                                                                                            |
| /.storybook/                       | contains `Storybook`config files, used for developing and showcasing UI components                                          |
| /.swc/                             | configuration for the `SWC` (faster alternative to `Babel`) compiler                                                        |
| /.vscode/                          | settings for `Visual Studio Code` workspace, may contain debug configs, recommended extensions, etc.                        |
| /public/                           | static files and assets served directly by `Next.js`                                                                        |
| /src/                              | contains the source code of the application                                                                                 |
| .env .env.development .env.example | environment variable files; `.env.example` usually demonstrates the structure without real values                           |
| .eslintrc.json                     | settings for `ESLint`, a linter tool for `JavaScript` and `TypeScript`                                                      |
| .prettierrc                        | configuration for Prettier, a code formatter                                                                                |
| .swcrc                             | configuration file for `SWC` compiler                                                                                       |
| CHANGELOG.md                       | records of all notable changes made to the project                                                                          |
| commitlint.config.js               | configuration for commit message linting, ensuring consistent commit messages                                               |
| docker-compose.yml                 | defines and runs multi-container `Docker` applications, helps in setting up local dev environments                          |
| Dockerfile                         | script to create a `Docker` container image of the project                                                                  |
| jest.config.mjs                    | configuration for `Jest`, a `JavaScript` testing framework                                                                  |
| next-env.d.ts                      | `TypeScript` definitions for `Next.js`                                                                                      |
| next.config.js                     | configuration file for `Next.js`                                                                                            |
| package.json                       | manifest file for `Node.js` projects, lists dependencies, scripts, and other metadata                                       |
| README.md                          | documentation providing an overview and instructions related to the project                                                 |
| tsconfig.json                      | settings for `TypeScript`, defining compiler options and other settings                                                     |
| yarn.lock                          | ensures consistent installation of dependencies across systems, if using `Yarn` as a package manager                        |

---

## Source Tree

```shell
.
└── src/                                             # Main application source code
    ├── app/                                         # Core application components
    │   ├── [page]/...                               # Individual pages or routes of the application
    │   ├── error.tsx                                # Error component/view for the app
    │   ├── head.tsx                                 # Component for setting the <head> of the application
    │   ├── layout.tsx                               # Main layout component for the application
    │   ├── loading.tsx                              # Loading state/component for the app
    │   ├── page.tsx                                 # Base page component, possibly a wrapper for individual pages
    │   ├── styles.module.scss                       # Module-based SCSS styles for the app directory components
    │   └── styles.ts                                # Style-related utilities or constants for the app
    ├── common/                                      # Shared utilities, assets, and constants
    │   ├── assets/                                  # Static assets
    │   │   ├── fonts/...                            # Font files
    │   │   ├── icons/...                            # Icon assets
    │   │   └── images/...                           # Image assets
    │   ├── constants/                               # App-wide constants
    │   │   ├── [kebab-case].constant.ts/            # Individual constant file
    │   │   └── index.ts                             # Aggregated exports for constants
    │   ├── enums/                                   # Enumerations used in the app
    │   │   ├── [kebab-case.enum].ts/                # Individual enum file
    │   │   └── index.ts                             # Aggregated exports for enums
    │   ├── helpers/                                 # Helper functions for common tasks
    │   │   ├── [kebab-case].helper.ts/              # Individual helper function
    │   │   └── index.ts                             # Aggregated exports for helper functions
    │   ├── mocks/                                   # Mock data or functions for testing/dev purposes
    │   │   ├── [kebab-case].mock.ts/                # Individual mock data/function
    │   │   └── index.ts                             # Aggregated exports for mocks
    │   └── utils/                                   # General utility functions
    │       ├── [kebab-case].util.ts/                # Individual utility function
    │       └── index.ts                             # Aggregated exports for utility functions
    ├── components/                                  # UI components, structured by complexity
    │   ├── atoms/                                   # Smallest UI components (e.g., button, input)
    │   │   └── [PascalCase]/                        # Individual atomic component directory
    │   │       ├── index.module.scss                # Styles for this atomic component
    │   │       ├── index.spec.tsx                   # Tests for this atomic component
    │   │       ├── index.stories.tsx                # Storybook stories for this atomic component
    │   │       └── index.tsx                        # Component definition
    │   ├── molecules/...                            # Slightly complex components made of atoms
    │   ├── organisms/...                            # Complex components made of atoms and/or molecules
    │   ├── templates/...                            # Components that define page layouts or structures
    │   └── type.d.ts                                # Type definitions related to components
    ├── documents/                                   # MDX documents, likely for documentation purposes
    │   ├── CHANGELOG.mdx                            # Change log in MDX format
    │   └── README.mdx                               # README in MDX format
    ├── hooks/                                       # Custom React hooks
    │   └── [camelCase].ts or [camelCase].tsx        # Individual custom hook
    │       └── store.ts                             # (Note: This looks out of place, might be related to global state)
    ├── libs/                                        # Library configurations and extensions
    │   ├── configs/                                 # Custom configurations for libraries or tools
    │   │   ├── [PascalCase].ts or [PascalCase].tsx  # Individual config
    │   │   └── index.ts                             # Aggregated exports for configs
    │   ├── material/                                # Extensions or customizations for Material-UI
    │   │   ├── overrides/                           # Overrides for default Material-UI styles or behaviors
    │   │   │   ├── [PascalCase].ts                  # Individual override
    │   │   │   └── index.ts                         # Aggregated exports for overrides
    │   │   └── styles/                              # Custom styles or themes for Material-UI
    │   │       ├── [kebab-case].style.ts            # Individual style/theme
    │   │       └── index.ts                         # Aggregated exports for styles
    │   ├── react-query/                             # Configurations or utilities related to react-query
    │   │   ├── [PascalCase].ts or [PascalCase].tsx  # Individual react-query related file
    │   │   └── index.ts                             # Aggregated exports for react-query utilities
    │   └── stories/                                 # Library or tool-specific stories (e.g., for Storybook)
    │       └── [PascalCase].stories.tsx             # Individual story file
    ├── services/                                    # Services, typically for API calls or external interactions
    │   └── [kebab-case]/                            # Individual service directory
    │       ├── [kebab-case].service.ts              # Service logic
    │       ├── [use[camelCase]Query].ts             # Hooks related to this service, typically using react-query
    │       └── types.d.ts                           # Type definitions related to this service
    ├── sockets/...                                  # WebSocket or real-time related utilities and services
    ├── stores/                                      # State management, likely using Redux or similar
    │   └── [camelCase].slice.ts                     # Redux slice (reducers + actions)
    │       └── index.ts                             # Aggregated exports for state slices
    └── types/                                       # Global TypeScript type definitions
        ├── .editorconfig                            # Editor configuration for consistent coding styles
        ├── jest-styled-components.d.ts              # Type definitions for jest-styled-components
        ├── material.d.ts                            # Type definitions related to Material-UI
        └── styled.d.ts                              # Type definitions for styled-components or related
```

## Available Scripts

**Here are the scripts you can run to perform various tasks in the development lifecycle:**

- **Development:** `yarn dev` -> Starts the `Next.js` development server.
- **Build:** `yarn build` -> Creates a production-ready build.
- **Production Start:** `yarn start` -> Starts the production server.
- **Linting:** `yarn lint` -> Lint codebase using `Next.js` built-in linting.
- **Prettier Check:** `yarn prettier` -> Check if your files are formatted according to `Prettier`.
- **Prettier Fix:** `yarn prettier:fix` -> Automatically format your files with `Prettier`.
- **Testing:** `yarn test` -> Run `Jest` for unit tests.
- **Watch Tests:** `yarn test:watch` -> Run `Jest` in watch mode.
- **Storybook:** `yarn storybook` -> Start the `Storybook` development server.
- **Build Storybook:** `yarn build-storybook` -> Create a static `Storybook` site.
- **Generate Component:** `yarn gen:component` -> Generate a new component scaffold using `Hygen`.

## Git

- Rebase: <https://git-scm.com/docs/git-rebase>
- Git branch format: <http://karma-runner.github.io/5.0/dev/git-commit-msg.html>

**Note: When create a new branch. The `type` will include `feature | bugfix | hotfix | release | support`**

```ssh
  git checkout -b type/feature-name
```

**Note: When committed. The `type` will include `build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test | draft`**

```shell
 <type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ commit message
  │       │
  │       └─⫸ Commit Scope: module name
  │
  └─⫸ Commit Type: build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|draft
```

**The type must be one of the following:**

| Type         | Emoji                      | Description                                                                                                 |
| ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **build**    | 📦 `:package:`             | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **chore**    |                            | Updating grunt tasks etc.; no production code change                                                        |
| **ci**       | 👷 `:construction_worker:` | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| **docs**     | 📚 `:books:`               | Documentation only changes                                                                                  |
| **feat**     | ✨ `:sparkles:`            | A new feature                                                                                               |
| **fix**      | 🐛 `:bug:`                 | A bug fix                                                                                                   |
| **perf**     | 🐎 `:racehorse:`           | A code change that improves performance                                                                     |
| **refactor** | 🔨 `:hammer:`              | A code change that neither fixes a bug nor adds a feature                                                   |
| **revert**   |                            |                                                                                                             |
| **style**    | 💄 `:lipstick:`            | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| **test**     | 🚨 `:rotating_light:`      | Adding missing tests or correcting existing tests                                                           |
| **draft**    | 🚧 `:construction:`        | Work In Progress                                                                                            |

**Emoji** <https://gist.github.com/parmentf/035de27d6ed1dce0b36a>

## Generate Template

- Generate component: `yarn gen:component → select level → enter component's name`

## Rebase Procedure

### Why Rebase?

- Used as an alternative to merging, but approached differently.
- Resolving conflicts.
- Pulling the latest code from the main branch.

### Why choose rebase over merging?

- When merging, all conflicts are resolved in a single commit, which complicates conflict resolution.
- Rebase resolves conflicts right at the commit causing the conflict, making it easier to handle.
- When rebasing to handle conflicts, in the worst-case scenario, one can still checkout and rewrite that particular commit from scratch following its commit message.
- Merging takes the code of the subsidiary branch as the primary code, potentially overwriting changes, while rebasing takes the code from the main branch as primary.
- Rebasing results in a neater and more intuitive git branch.
- Rebase also benefits other management tasks.

### When should you rebase?

- Rebase to pull code from the `develop` branch to your branch.
- Conflicts should be resolved using rebase.
- It's advisable to rebase frequently (when there's a new commit in develop) and to rebase before creating a pull request to avoid challenges when rebasing across many commits.

### Rebase Process

**1.** Fetch the latest code from the remote and initiate a rebase onto the main branch.

> `git fetch` -> `git rebase origin/develop`

**2.** Resolve conflicts if they arise.

> In the worst-case scenario, you can checkout the conflicting file and re-code according to the old commit. Rebase on a branch with only one coder is straightforward, but with two coders simultaneously, more cases might need handling. However, by following git-flow, we already limit cases where multiple developers code on one branch at the same time.

**3.** Thoroughly check the current code after rebasing, ensuring it matches the old code without introducing errors.

**4.** Run the following command to officially push your changes to the remote: `git push --force-with-lease` or `git push -f`.

### Hotfix Procedure

**1.** When a hotfix is necessary:

> It's needed for urgent fixes of `serious errors`, when merging the development branch into the production branch is not feasible.

> Can also be used for urgent feature development for production, but `shouldn't be overused`.

**2.** Implementation steps:

> The hotfix branch should branch off from the production branch (may vary per project), with names in the format `hotfix/branch-name`.

> Create 2 PRs from that hotfix branch: one for production and another for development, ensuring to merge into production first.

> Follow these exact subsequent steps:

> - Resolve conflicts for the PR into production (if any).

> - Merge the PR into production, but do not delete the branch.

> - Resolve conflicts for the PR into development (if any).

> - Merge the PR into development, checking the box to delete the branch.

### Branch Splitting Procedure

- All branches should branch off from the primary branch, `develop`.

- In cases where subsidiary branches have their sub-branches, check out from the subsidiary branch, work, and merge into that subsidiary branch. Afterward, merge the subsidiary branch into the primary `develop` branch.
