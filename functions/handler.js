module.exports = (callback) => {
  return (err, results) => {
    if (err != null) {
      console.log(err)
      callback(null, err)
      return
    } else {
      console.log(results)
      callback(null, results)
      return
    }
  }
}
