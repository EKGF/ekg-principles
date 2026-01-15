# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when
working with code in this repository.

## Project overview

This is the **EKG Principles** repository - containing the Principles
& Manifesto for the Enterprise Knowledge Graph. It uses MkDocs with
the Material theme to generate documentation published at
<https://principles.ekgf.org>.

## Commands

### Installation

```bash
make install              # Full setup (Homebrew packages + Python via uv)
uv sync                   # Install Python dependencies only
npm install               # Install Node.js dev tools (husky, commitlint)
```

### Development

```bash
make docs-serve           # Serve with live reload
make docs-build           # Build site to /site directory
```

### Linting

```bash
npm run lint:md           # Markdown linting
```

## Architecture

- **docs/** - Markdown source files
- **docs/diagrams/** - PlantUML diagrams
- **mkdocs.yml** - MkDocs configuration
- **site/** - Generated output (never edit)

## Critical conventions

### Markdown formatting

- Maximum line length: 70 characters
- Use `-` for unordered lists
- Sentence case for headers (not Title Case)
- Do not trim trailing whitespace

### Git workflow

- **NEVER execute `git push`** - users must push manually
- **NEVER bypass hooks** with `--no-verify`
- **NEVER use `git merge`** - always use `git rebase` for linear
  history
- Commit only when explicitly requested

For commit message format, see [CONTRIBUTING.md](.github/CONTRIBUTING.md)

## Dependencies

- Python 3.14.2+ with `uv` package manager
- Node.js for dev tools (commitlint, markdownlint)
