# css-find-vars

## 0.2.1

### Patch Changes

- [#13](https://github.com/anton-fomichev/css-find-vars/pull/13) [`bfd6aa7`](https://github.com/anton-fomichev/css-find-vars/commit/bfd6aa718b00a288071f2ca4c4fe0c454c613a5e) Thanks [@anton-fomichev](https://github.com/anton-fomichev)! - fix(build): add shebang string

  - Add build.cli.js script to insert shebang (#!/usr/bin/env node) to the compiled CLI executable.

## 0.2.0

### Minor Changes

- [#10](https://github.com/anton-fomichev/css-find-vars/pull/10) [`e34afb9`](https://github.com/anton-fomichev/css-find-vars/commit/e34afb988dc2e80690a6809c9cd19a5a343e2776) Thanks [@anton-fomichev](https://github.com/anton-fomichev)! - feat(cli): add ability to group by file and order

  - Add `--order` option to the CLI for specifying the sorting order of data.
  - Add `--group` option to the CLI for grouping data.

## 0.1.0

### Minor Changes

- [#4](https://github.com/anton-fomichev/css-find-vars/pull/4) [`0a1de5d`](https://github.com/anton-fomichev/css-find-vars/commit/0a1de5d693b93befc0f7f925e5568e3d04b2ba72) Thanks [@anton-fomichev](https://github.com/anton-fomichev)! - feat(cli): Initial version of css-find-vars CLI utility

  This release includes the core functionality for finding CSS variables, initial project setup with TypeScript and ESLint, added documentation in README and CI configuration for linting and building.
