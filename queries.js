const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-52-212-157-46.eu-west-1.compute.amazonaws.com',
  database: 'db655lvan2ooii',
  user:'jwcqquksqxxiai',
  password: '2e61a2e1faf3c310110a59a17e4edd92cc56193ef98376d9438e58f326ae5d33',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}