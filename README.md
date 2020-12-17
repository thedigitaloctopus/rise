This is a basic Gridsome project, made from the default Gridsome Starter. The site is live at [rise.getflywheel.com](https://rise.getflywheel.com).

1. Download, and `cd` into the directory;
2. Run `yarn install`
3. Use `yarn dev` (an alias for `gridsome develop`) to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## A crash course on this Gridsome site

*If you're new to Gridsome and need to modify this site for Flywheel/WP Engine, here's a super quick tour.*

Gridsome is a Vue-powered static site generator. Any .vue file in the `pages` directory becomes a page. (In this case, there's only one, but it's still statically generated.)

## Adding new newsletters

**If you duplicate a newsletter markdown file inside the `src/newsletters folder`, you should be able to just update its contents and have a new page automatically.** Just copy and paste the `issue-02.md` file, rename it (e.g., to `issue-03.md`) and update all its contents, including the `title` at the top and all the image links.

**All markdown files in the `src/newsletters` folder become pages.** They're rendered with the `templates/Newsletter.vue` file, which is where most of the styling lives. Their path will be `/newsletter/:slug`, where `:slug` is a sluggified version of the `title`.

**The newsletter CSS is very specific** and expects the content layout to stay exactly the same. (E.g., all pull quotes should be followed with images; articles always end with an `hr` and begin with a large image; the first paragraph after the `h2` of an article is actually the pre-title, relatively positioned.)

### The main view is `layouts/Default.vue`

Most of the global CSS lives here in this file, and it's the wrapper for everything. (Since this site is just one page, that's kinda silly, because there's nothing to wrap. But if/when there ever was another page, the Default layout would still apply to it.)

### The home page is `pages/Index.vue`

Pretty much all the content is hard-coded HTML. (Really, Gridsome is kinda overkill for this project, but it's nice to work with.)

### The content lists are extracted out to the `components` folder.

These should be fairly self-explanatory. They each contain mostly just static HTML. Moving them all to Markdown or a CMS was a future project.
