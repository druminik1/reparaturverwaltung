import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./reparaturen.db', (err) => {
  if (err) {
    console.error('Database opening error:', err)
  }
})

function getAllReparaturen(oCallback) {
  const sql = 'SELECT * FROM REPARATUR'
  let stmt = db.prepare(sql)

  return stmt.all(oCallback);
}

export { getAllReparaturen }
