const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'example',
  database: 'userdb'
})

const createUserDB = (request, response) => {
  const values = request.body
  const text = `INSERT INTO users(info) VALUES($1::JSONB), ($2::JSONB), ($3::JSONB), ($4::JSONB), ($5::JSONB), ($6::JSONB), ($7::JSONB), ($8::JSONB), ($9::JSONB), ($10::JSONB)`
  console.log(request.body)
  pool.query(text, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Users added`)
  })
}

const getUserDB = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const clearDB = (request, response) => {
  pool.query('DELETE FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows) 
  })
}

module.exports = {
  createUserDB,
  getUserDB,
  clearDB
}