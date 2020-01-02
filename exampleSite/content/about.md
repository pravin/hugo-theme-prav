---
author: "Pravin Paratey"
title: "About Theme Prav"
date: "2019-12-31"
description: "A little more about this theme"
tags: [
    "theme",
    "prav",
]
---

## History

This theme began it's life in early 2013, as the theme for my blog "[Thoughts on Engineering and Management](https://cto.me.uk)". Back then it was generated using [nanoc](https://nanoc.ws/). In 2018, I moved to [hugo](https://gohugo.io/) because of it's ability to hot-reload the website while I was working. Nanoc forced me to rebuild the site which took roughly 10-20 seconds, which quickly became a deal breaker.

## Principles

I have always believed in using as little computing resources as possible. This theme uses the excellent [purecss](https://purecss.io/) css library, which is tiny while still being quite functional.

The colours used have been chosen to be easy on the eyes, with just enough contrast to help with accessibility.

This theme is by no means complete. I have added to it over the last six years and will continue to do so. I hope you and the rest of the community will help in contributing to making this theme even better.

## Features

This is a two column theme with a navbar at the top and a sidebar to the right. The navbar contains links to major pages and links to social networks. The sidebar contains an about section, a section with the last 10 posts and finally a section which lists tags used across your site.

### Beautiful tables and images through purecss.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Syntax highlighting by pygments

Set your pygments theme by setting,

    pygmentsCodeFences = "true"
    pygmentsStyle = "perldoc"

Example highlighted code,

{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Feature images in archives
Setting the image parameter in the yaml header sets a feature image which is displayed in the articles section.

### Comments by disqus

To enable comments, set your `disqusShortname` in config.toml. This will make comments appear on all single article pages. This bit of code is located at `layouts\_default\single.html`.

### Social

To enable a link to a social network in the header (top-right), enter the url. To disable it, just comment it out. This bit of code is located at `layouts\partials\menu.html`.

## Configuration

This is an example of the configuration file.

{{< highlight toml >}}
baseURL = "https://cto.me.uk/"
languageCode = "en-gb"
title = "Hugo Theme - Prav"
theme = "prav"

pygmentsCodeFences = "true"
pygmentsStyle = "perldoc"

#googleanalytics = ""
#disqusShortname = ""

# Below settings are used throughout the theme. Please update
[params]
  title = "Hugo Theme - Prav"
  tagline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  author = "Pravin Paratey"

[social]
  email = "mailto:pravin@paratey.com"
  facebook = "https://www.facebook.com/pravin.paratey"
  twitter = "http://twitter.com/pravin"
  medium = "https://www.medium.com/@pravin"
  github = "https://github.com/pravin"
  linkedin = "http://uk.linkedin.com/in/pravinp"


# Set unsafe mode to allow markdownify to work with goldmark
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
{{< /highlight >}}

## In closing

I hope you enjoy this theme as much as I have enjoyed building and using it over the last few years.

-Prav