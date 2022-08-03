# Versioning Style Guide
In this documentation, I'll describe the guidelines I'm using when it comes to git on our project!

## Commits
We're going to use semantic commit messages here, so here's how you should build your commits:

Commit format: `<type>: <subject>`.

### Commit Types
* ✨ feat: a new feature implemented to the codebase;
* 🐛 fix: fixes a bug on the codebase that may affect final users;
* 📝 docs: any changes to the documentation;
* 🎨 style: formatting the codebase, should not affect production code;
* ♻️ refactor: refactoring the codebase;
* 🧪 test: adding missing or creating new tests;
* 🔧 chore: updates without changing the production code, configuration;
* ⚙️ ci: changes related to continuous integration or deployment system.

### Example
```
✨ feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```