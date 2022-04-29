const petsDb = require('./pets')
const commentsDb = require('./comments')

module.exports = {
  ...petsDb,
  ...commentsDb
}
