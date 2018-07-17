'use strict'

const extName = require('ext-name')
const fs = require('fs')
const parse = require('csv-parse/lib/sync')

module.exports = async (filename) => {
  const parsed = extName(filename)
  if (!parsed || !parsed.length) throw new Error(`invalid batch file "${filename}"`)

  const { ext } = parsed[0]
  const data = fs.readFileSync(filename, 'utf8')

  if (ext === 'json') {
    return JSON.parse(data)
  } else if (ext === 'csv') {
    return parse(data)
  } else {
    throw new Error(`invalid batch file format "${filename}"`)
  }
}
