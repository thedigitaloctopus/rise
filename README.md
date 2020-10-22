This is a basic Gridsome project, made from the default Gridsome Starter. The site is live at [rise.getflywheel.com](https://rise.getflywheel.com).

1. Download, and `cd` into the directory;
2. Run `yarn install`
3. Use `yarn dev` (an alias for `gridsome develop`) to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## A crash course on this Gridsome site

*If you're new to Gridsome and need to modify this site for Flywheel/WP Engine, here's a super quick tour.*

Gridsome is a Vue-powered static site generator. Any .vue file in the `pages` directory becomes a page. (In this case, there's only one, but it's still statically generated.)

### The main view is `layouts/Default.vue`

Most of the global CSS lives here in this file, and it's the wrapper for everything. (Since this site is just one page, that's kinda silly, because there's nothing to wrap. But if/when there ever was another page, the Default layout would still apply to it.)

### The home page is `pages/Index.vue`

Pretty much all the content is hard-coded HTML. (Really, Gridsome is kinda overkill for this project, but it's nice to work with.)

### The content lists are extracted out to the `components` folder.

These should be fairly self-explanatory. They each contain mostly just static HTML. Moving them all to Markdown or a CMS was a future project.
