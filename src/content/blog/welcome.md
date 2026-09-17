---
title: "Welcome — how this blog works"
description: "A short note on what this space is for, and the template for new posts."
pubDate: 2026-09-12
tags: ["meta"]
draft: false
---

This is a placeholder first post, and also the template for every post after
it. To publish something new:

1. Copy this file to a new one in `src/content/blog/`, e.g. `my-post-slug.md`.
2. Update the frontmatter block at the top (`title`, `description`, `pubDate`,
   optionally `tags`). The filename becomes the URL slug.
3. Write the post below the frontmatter in plain Markdown.
4. Set `draft: false` when you're ready to publish — `draft: true` keeps a
   post out of the list and off its own page while you're still writing it.
5. Commit and push. Netlify rebuilds and deploys automatically.

No CMS, no database, no login — just a markdown file per post.

## Formatting cheatsheet

Standard Markdown works: **bold**, _italic_, [links](/), and:

- bullet lists
- like this

```
code blocks too
```

> Blockquotes render with the accent color, for pull-quotes or callouts.

Delete this post (or set `draft: true`) once you've written a real first one.
