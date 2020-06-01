const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/blog.js"))),
  "component---src-pages-blog-tags-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/blog/tags.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/projects.js")))
}

