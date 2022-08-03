# 🦕 Denofy

Hey, there! Welcome to Denofy! This is supposed to be a wrapper to the Spotify API developed in Deno, so we can
integrate it easier in our projects.

## 🚧 Is it under development?

Yes! This is just the initial concept, so, until the end of the project, probably a lot of things are going to change.
So yeah, this is a WIP repository.

## 🗞️ Documentation

You can find the repository documentation here:

- [Versioning Style Guide](./docs/versioning-style-guide.md)

## 🎉 Getting Started`

### Linting the application

```bash
deno lint
```

### Formatting the application

```bash
deno fmt
```

### Testing the application

```bash
deno test tests/ --allow-read --allow-net
```

### Generating coverage

```bash
deno test tests/ --coverage=cov_profile --allow-read --allow-net
deno coverage cov_profile
```

## 🔍 Links and Repos

Those are the links and repos I'm using as a reference:

- [Create your first library with Deno](https://dev.to/brunnerlivio/create-your-first-module-with-deno-575k).
