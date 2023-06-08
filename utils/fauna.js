const faunadb = require('faunadb')

const secret = process.env.NEXT_PUBLIC_FUANA_DB_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = { client, q }
