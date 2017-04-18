const plaid = require('../plaid-client.js')
const handler = require('../handler.js')

module.exports = (params, callback) => {
  const accessToken = params.kwargs.access_token

  plaid.getBalance(accessToken, handler(callback))
}
