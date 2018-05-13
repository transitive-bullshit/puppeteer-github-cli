'use strict'

const program = require('commander')

const PuppeteerGitHub = require('puppeteer-github')
const { version } = require('../package')

const signin = require('./signin')
const verifyEmail = require('./verify-email')

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
    .option('-V, --verify', 'verify github account in email')
    .option('-P, --email-password <password>', 'email account password for verification')
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

        if (opts.verify && (!opts.emailPassword || !opts.emailPassword.length)) {
          throw new Error('missing required "email-password" for verify')
        }

        await client.signup(user)

        if (opts.verify) {
          const browser = await client.browser()
          await verifyEmail({
            email: user.email,
            password: opts.emailPassword
          }, browser)
          console.log('email verified')
        }

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
        const { client, user } = await signin(program)
        await client.close()

        console.log(JSON.stringify(user, null, 2))
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('verify')
    .option('-P, --email-password <password>', 'email account password for verification')
    .action(async (opts) => {
      try {
        // email verification requires signin
        const { client, browser, user } = await signin(program)

        await verifyEmail({
          email: user.email,
          password: opts.emailPassword
        }, browser)

        await client.close()

        console.log('email verified')
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('signout')
    .action(async () => {
      try {
        // signin and then immediately signout
        const { client } = await signin(program)

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
