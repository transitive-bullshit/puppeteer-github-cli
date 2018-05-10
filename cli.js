'use strict'

const program = require('commander')

const PuppeteerGitHub = require('puppeteer-github')
const { version } = require('./package')

module.exports = (argv) => {
  program
    .version(version)
    .option('-u, --username <username>', 'account username')
    .option('-e, --email <email>', 'account email')
    .option('-p, --password <password>', 'account password')
    .option('-H, --no-headless', '(puppeteer) disable headless mode')
    .option('-s, --slow-mo <timeout>', '(puppeteer) slows down operations by the given ms', parseInt, 0)

  program
    .command('signup')
    .action(async (opts) => {
      try {
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

        if (!user.username || !user.username.length) {
          throw new Error('missing required "username"')
        }

        if (!user.email || !user.email.length) {
          throw new Error('missing required "email"')
        }

        if (!user.password || !user.password.length) {
          throw new Error('missing required "password"')
        }

        await client.signup(user)
        await client.close()

        console.log(JSON.stringify(user, null, 2))
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('signin')
    .action(async () => {
      try {
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

        if (!user.username && !user.email) {
          throw new Error('missing required "username" or "email"')
        }

        if (!user.password || !user.password.length) {
          throw new Error('missing required "password"')
        }

        await client.signin(user)
        await client.close()

        console.log(JSON.stringify(user, null, 2))
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('signout')
    .action(async () => {
      try {
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

        if (!user.username && !user.email) {
          throw new Error('missing required "username" or "email"')
        }

        if (!user.password || !user.password.length) {
          throw new Error('missing required "password"')
        }

        await client.signin(user)
        await client.signout()
        await client.close()
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program.parse(argv)
}

module.exports(process.argv)
