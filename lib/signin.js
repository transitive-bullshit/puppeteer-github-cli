'use strict'

const PuppeteerGitHub = require('puppeteer-github')

module.exports = async (program) => {
  const client = new PuppeteerGitHub({
    puppeteer: {
      headless: !!program.headless,
      slowMo: program.slowMo
    }
  })

  const user = {
    username: program.username,
    email: program.email,
    password: program.password
  }

  if (!user.email && !user.username) {
    throw new Error('missing required param "username" or "email"')
  }

  if (!user.password) {
    throw new Error('missing required param "password"')
  }

  await client.signin(user)
  const browser = await client.browser()

  return {
    client,
    browser,
    user
  }
}
