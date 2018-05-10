# puppeteer-github-cli

> CLI for [GitHub](https://github-cli.com) automation driven by headless chrome.

[![NPM](https://img.shields.io/npm/v/puppeteer-github-cli.svg)](https://www.npmjs.com/package/puppeteer-github-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-github-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-github-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install -g puppeteer-github-cli
```


## Usage

```bash
  Usage: index [options] [command]

  Options:

    -V, --version              output the version number
    -u, --username <username>  account username
    -e, --email <email>        account email
    -p, --password <password>  account password
    -H, --no-headless          (puppeteer) disable headless mode
    -s, --slow-mo <timeout>    (puppeteer) slows down operations by the given ms (default: 0)
    -h, --help                 output usage information

  Commands:

    signup
    signin
    signout
```


## Related

- [puppeteer-github](https://github-cli.com/transitive-bullshit/puppeteer-github) - Library for this CLI.
- [puppeteer-email](https://github-cli.com/transitive-bullshit/puppeteer-email) - Email automation driven by headless chrome.


## License

MIT © [Travis Fischer](https://github-cli.com/transitive-bullshit)
