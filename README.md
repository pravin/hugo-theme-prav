# Hugo Theme Prav

![Screenshot](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/screenshot.png)

## History

This theme began it's life in early 2013, as the theme for my blog "[Thoughts on Engineering and Management](https://cto.me.uk)". Back then it was generated using [nanoc](https://nanoc.ws/). In 2018, I moved to [hugo](https://gohugo.io/) because of it's ability to hot-reload the website while I was working.

## Principles

I have always believed in using as little computing resources as possible. This theme uses the excellent [purecss](https://purecss.io/) css library, which is tiny while still being quite functional.

The colours used have been chosen to be easy on the eyes, with just enough contrast to help with accessibility.

This theme is by no means complete. I have added to it over the last six years and will continue to do so. I hope you and the rest of the community will help in contributing to making this theme even better.

## Features

This is a two column theme with a navbar at the top and a sidebar to the right. The navbar contains links to major pages and links to social networks. The sidebar contains an about section, a section with the last 10 posts and finally a section which lists tags used across your site.

### Beautiful tables and images through purecss

![Beautiful tables](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/table.png)

### Syntax highlighting

Code is highlighted by Hugo's built-in highlighter (Chroma). Pick a style in your site config,

```toml
[markup.highlight]
  style = "perldoc"
```

Example highlighted code,

![Example highlighted code](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/code.png)

### Update the about image

To update the image shown in the sidebar, create a file called `author.png` in your site's `static/img/` folder. Alternatively, set `params.authorImgPath` in your config.

### Feature images in archives

Setting the `image` parameter in the front matter sets a feature image which is displayed in the articles list. The image can either be a [page resource](https://gohugo.io/content-management/page-resources/) (e.g. `content/posts/my-post/cover.jpg` in a page bundle) or a file in your site's `static/img/feature/` folder.

```yaml
image: cover.jpg
```

### Menu

By default the navbar shows Articles, Categories and About. To change these, define a `main` menu in your config. Each entry can have an optional Font Awesome icon,

```toml
[[menus.main]]
  name = "Articles"
  pageRef = "/posts"
  weight = 10
  [menus.main.params]
    icon = "fas fa-box-archive"
```

### Custom header, footer and menu

To add custom code to the `<head>`, the end of the page, or the right side of the navbar, create `custom_header.html`, `custom_footer.html` or `custom_menu.html` in your site's `layouts/_partials/` folder.

### Custom styles

To override the stylesheet, copy `assets/css/style.css` from the theme to `assets/css/style.css` in your site and edit it. It is minified and fingerprinted automatically.

### Comments by disqus

To enable comments, set `services.disqus.shortname` in your config. Comments appear on all single pages, and can be turned off for a page with `disableComments: true` in its front matter.

### Google Analytics

Set `services.googleAnalytics.ID` in your config. The tracking code is only included in production builds (`hugo`, not `hugo server`).

### Social

To show a link to a social network in the navbar (top-right), set its URL under `params.social`. To hide it, comment it out. Supported keys: `mastodon`, `bluesky`, `github`, `twitter`, `linkedin`, `medium`, `facebook` and `email`.

![Social header](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/social.png)

## Configuration

This theme requires Hugo v0.146.0 or later. A complete example lives in [`exampleSite/hugo.toml`](exampleSite/hugo.toml). To try it,

```sh
cd exampleSite
hugo server
```

A minimal `hugo.toml`,

```toml
baseURL = "https://example.com/"
locale = "en-GB"
title = "Hugo Theme - Prav"
theme = "hugo-theme-prav"

[services.disqus]
  # shortname = ""
[services.googleAnalytics]
  # ID = "G-XXXXXXXXXX"

[params]
  title = "Hugo Theme - Prav"
  tagline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  author = "Pravin Paratey"
  authorImgPath = "/img/author.png"
  authorBlurb = "Something about me"
  mainSections = ["posts"]

  [params.social]
    email = "mailto:example@example.com"
    mastodon = "https://mstdn.social/@example"
    github = "https://github.com/example"

# Allows raw HTML in content and in markdownified descriptions
[markup.goldmark.renderer]
  unsafe = true
```

## Upgrading from older versions of this theme

* **Hugo v0.146.0 or later is required.**
* Move the `[social]` section to `[params.social]`. Hugo no longer supports a top-level `social` key.
* Replace `googleAnalytics = "..."` with `[services.googleAnalytics] ID = "..."`, and `disqusShortname = "..."` with `[services.disqus] shortname = "..."`.
* Replace `pygmentsCodeFences` / `pygmentsStyle` with `[markup.highlight] style = "..."`.
* Replace `paginate = N` with `[pagination] pagerSize = N`.
* If you overrode `static/css/style.css`, move your copy to `assets/css/style.css`.
* Custom partials in `layouts/partials/` still work, but `layouts/_partials/` is the new location.

## In closing

I hope you enjoy this theme as much as I have enjoyed building and using it over the last few years.

-Prav
