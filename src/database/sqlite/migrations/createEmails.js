const createEmails = `
  CREATE TABLE IF NOT EXISTS emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR
  )
`

module.exports = createEmails