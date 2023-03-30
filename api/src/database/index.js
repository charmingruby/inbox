const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5100,
  user: 'root',
  password: 'root',
  database: 'inbox',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
