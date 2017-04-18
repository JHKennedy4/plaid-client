var plaid = require('../plaid-client.js')

// TODO:
// persist to save the trouble of reauthenticating user on each load
//
// User
// - id
// - phone number
// - access_token
module.exports = (params, callback) => {
  let publicToken = params.kwargs.public_token

  plaid.exchangePublicToken(publicToken, (err, exchangeTokenRes) => {
    if (err != null) {
      callback(null, err)
    } else {
      console.log(exchangeTokenRes)
      callback(null, {
        accessToken: exchangeTokenRes.access_token
      })
    }
  })
}
