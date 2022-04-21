# casper-daily-theme (fork of Casper)

Casper is the default theme for [Ghost](http://github.com/tryghost/ghost/). At Daily, we've built our blog's theme on Casper. We've forked the original repo to make sure we can keep up with the latest updates. This theme is intended to work on Ghost v4.44.0 and up.

# Local development

You will need two things to run the Daily blog locally: a local Ghost install, and this theme. For info on how to get a local Ghost instance, [follow this guide](https://ghost.org/docs/install/local/). Then, you'll need to clone this theme in _a separate directory_. For example:

```bash
-- My Code Folder
  -- casper-daily-theme
  -- local-ghost-install
```

To connect the two -- i.e. run Ghost locally with the casper-daily theme active -- we need to create a symlink between this repo's directory and `content/themes/casper-daily-theme` wherever you install Ghost. To do this, run the following commands (assuming this repo and your local Ghost install are in adjacent directories like above):

```bash
cd local-ghost-install/content/themes
ln -s ../../../casper-daily-theme casper-daily-theme
```

Once you've confirmed this worked, run the following from your local Ghost directory:

```bash
ghost start
```

This command will return a URL for your local admin page. (e.g. http://localhost:2368/ghost/)

From the admin page, create a local Ghost account. Once signed in, go to Settings > Design > Change theme (sidebar, on the bottom) > Advanced > Activate casper (casper-daily-theme):

<img width="1287" alt="Screenshot 2022-04-20 at 10 53 05" src="https://user-images.githubusercontent.com/12814720/164191671-b62c8e87-f7d1-48a1-a4c0-9b46e3d81a4e.png">

# Importing existing blog content

When you first set up the blog locally, it will display placeholder content.

To instead use the blog's real current content, you will need to:

1. Ask a DevRel team member to provide a current export of the blog's content (a JSON file).
2. Once you have that content, go to Settings > Labs and under Migration Options, delete the content currently used.
3. Finally, import the existing blog content by uploading the JSON file you've received. If you view the site again, you should see the updated content.

# Creating pull requests

Because this is a fork, you need to make sure to select the right base repository when opening a pull request for this repo:

<img width="441" alt="Screenshot 2022-04-20 at 10 56 55" src="https://user-images.githubusercontent.com/12814720/164191712-8e3bb8fd-1c30-484a-844f-eac1e97352a1.png">

If you don't, you'll accidentally open a PR in the original repo :D

# Theme development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
# create .zip file
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.

# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

# Copyright & License

Copyright (c) 2013-2022 Ghost Foundation - Released under the [MIT license](LICENSE).
