# puppeteer-github-cli

> CLI for [GitHub](https://github.com) automation driven by headless chrome.

[![NPM](https://img.shields.io/npm/v/puppeteer-github-cli.svg)](https://www.npmjs.com/package/puppeteer-github-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-github-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-github-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This CLI also has a [library](https://github.com/transitive-bullshit/puppeteer-github).

## Install

```bash
npm install -g puppeteer-github-cli
```

## Usage

```bash
  Usage: github [options] [command]

  Options:

    -V, --version              output the version number
    -u, --username <username>  account username
    -e, --email <email>        account email
    -p, --password <password>  account password
    -H, --no-headless          (puppeteer) disable headless mode
    -s, --slow-mo <timeout>    (puppeteer) slows down operations by the given ms (default: 0)
    -h, --help                 output usage information

  Commands:

    signup [options]
    signin
    signout
    verify [options]
    star-package <pkg>
    unstar-package <pkg>
    star-repo <repo>
    unstar-repo <repo>
```

## Related

-   [puppeteer-github](https://github.com/transitive-bullshit/puppeteer-github) - Library for this CLI.
-   [puppeteer-email](https://github.com/transitive-bullshit/puppeteer-email) - Email automation driven by headless chrome.
-   [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node API.
-   [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) - A curated list of awesome puppeteer resources.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
