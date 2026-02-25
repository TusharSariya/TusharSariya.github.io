# AGENTS.md

## Cursor Cloud specific instructions

This is a Jekyll static site (personal website/blog) hosted on GitHub Pages.

### Prerequisites

Ruby >= 2.7 and Bundler must be installed system-wide (`sudo apt-get install -y ruby-full build-essential zlib1g-dev && sudo gem install bundler`).

### Development

- **Install deps:** `bundle config set --local path 'vendor/bundle' && bundle install`
- **Build:** `bundle exec jekyll build`
- **Dev server:** `bundle exec jekyll serve --host 0.0.0.0 --port 4000` (serves at `http://localhost:4000/`, auto-regenerates on file changes)

### Caveats

- There is no linter or test suite configured for this project. Validation is done by building the site (`bundle exec jekyll build`) and visually inspecting pages.
- The `vendor/` directory is git-ignored and excluded in `_config.yml`; gems are installed there via `bundle config set --local path 'vendor/bundle'`.
- Blog posts are plain `.md` files with front matter (e.g., `aristotle.md` produces `/project-aristotle.html`); the output path is controlled by the `permalink` front matter field, not the filename.
- The `github-pages` gem pins Jekyll to v3.x; do not upgrade to Jekyll 4 without removing this gem.
