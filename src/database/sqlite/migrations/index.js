const sqliteConnection = require('../../sqlite')
const createEmails = require('./createEmails')

async function migrationsRun(){
  const schemas = [
    createEmails
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationsRun