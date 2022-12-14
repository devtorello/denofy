# Versioning Style Guide

In this documentation, I'll describe the guidelines I'm using when it comes to git on our project!

## Commits

We're going to use semantic commit messages here, so here's how you should build your commits:

Commit format: `<type>: <subject>`.

### Commit Types

- โจ feat: a new feature implemented to the codebase;
- ๐ fix: fixes a bug on the codebase that may affect final users;
- ๐ docs: any changes to the documentation;
- ๐จ style: formatting the codebase, should not affect production code;
- โป๏ธ refactor: refactoring the codebase;
- ๐งช test: adding missing or creating new tests;
- ๐ง chore: updates without changing the production code, configuration;
- โ๏ธ ci: changes related to continuous integration or deployment system.

### Example

```
โจ feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```
