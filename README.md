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

### Beautiful tables and images through purecss.

![Beautiful tables](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/table.png)

### Syntax highlighting by pygments

Set your pygments theme by setting,

```toml
pygmentsCodeFences = "true"
pygmentsStyle = "perldoc"
```

Example highlighted code,

![Example highlighted code](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/code.png)

### Update the about image

To update the image shown in the sidebar, simply create a file called "author.png" in the `static/img/` folder. Alternatively, you can edit the path in `config.toml` file.

### Feature images in archives

Setting the image parameter in the yaml header sets a feature image which is displayed in the articles section. Note that the feature images should be present in the `static/img/feature/` folder. The frontmatter should contain something like,

```yaml
image: path-to-image.jpg
```

### Custom header and footer

If you want to add custom code to the header or footer, create a file called `custom_header.html` or `custom_footer.html` under `layouts\partials` folder in the root folder of your hugo project. The contents of these files will be included in the header and footer.

### Comments by disqus

To enable comments, set your `disqusShortname` in config.toml. This will make comments appear on all single article pages. This bit of code is located at `layouts/_default/single.html`.

### Social

To enable a link to a social network in the header (top-right), enter the url. To disable it, just comment it out. This bit of code is located at `layouts/partials/menu.html`.

![Social header](https://raw.githubusercontent.com/pravin/hugo-theme-prav/master/images/social.png)

## Configuration

This is an example of the configuration file.

```toml
baseURL = "https://example.com/"
languageCode = "en-gb"
title = "Hugo Theme - Prav"
theme = "hugo-theme-prav"

pygmentsCodeFences = "true"
pygmentsStyle = "perldoc"

# If you want to track using GA or use disqus for comments, uncomment the 
# following and add the correct values
#googleanalytics = ""
#disqusShortname = ""

# The settings below are used throughout the theme.
# Please update!
[params]
  title = "Hugo Theme - Prav"
  tagline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  author = "Pravin Paratey"
  authorImgPath = "/img/author.png"
  authorBlurb = "Something about me"

# If you do not want a social icon, just comment it out
# Please update the example values!
[social]
  email = "mailto:example@example.com"
  facebook = "https://www.facebook.com/example"
  twitter = "http://twitter.com/example"
  medium = "https://www.medium.com/@example"
  github = "https://github.com/example"
  linkedin = "http://uk.linkedin.com/in/example"


# Set unsafe mode to allow markdownify to work with goldmark
# This is important. Please do not delete. It is used to re-render markdown
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

## In closing

I hope you enjoy this theme as much as I have enjoyed building and using it over the last few years.

-Prav
