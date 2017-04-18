const plaid = require('../plaid-client.js')
const handler = require('../handler.js')

module.exports = (params, callback) => {
  const accessToken = params.kwargs.access_token
  const count = parseInt(params.kwargs.count, 10)
  const offset = parseInt(params.kwargs.offset, 10)
  const startDate = params.kwargs.start_date
  const endDate = params.kwargs.end_date

  plaid.getTransactions(accessToken,
    startDate,
    endDate,
    {
      count: count,
      offset: offset
    },
    handler(callback))
}
