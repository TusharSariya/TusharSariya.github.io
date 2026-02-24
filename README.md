# Personal Website

A personal website and blog built with Jekyll and hosted on GitHub Pages.

## Setup

### Prerequisites
- Ruby (>= 2.7)
- Bundler (`gem install bundler`)

### Local Development
```bash
bundle install
bundle exec jekyll serve
```
Then visit `http://localhost:4000`.

### Adding a Markdown Page
1. Create a `.md` file in the project root
2. Add front matter at the top:
   ```yaml
   ---
   layout: page
   title: "Your Title"
   permalink: /your-url
   ---
   ```
3. Write your content below the front matter
4. Jekyll will convert it to HTML and serve it at the permalink

### Adding a Blog Post
1. Create a file in `_posts/` named `YYYY-MM-DD-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   ---
   ```

## Color Palette

From [ColorHunt](https://colorhunt.co/palette/f4f0e444a194537d96ec8f8d):

| Color   | Hex       |
|---------|-----------|
| Cream   | `#F4F0E4` |
| Teal    | `#44A194` |
| Slate   | `#537D96` |
| Coral   | `#EC8F8D` |

Use these values in your CSS (e.g. `color: #537D96`, `background-color: #F4F0E4`).
