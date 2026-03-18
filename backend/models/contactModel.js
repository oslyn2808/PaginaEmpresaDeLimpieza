const pool = require('../config/database');

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id        SERIAL PRIMARY KEY,
      firstName VARCHAR(100) NOT NULL,
      lastName  VARCHAR(100) NOT NULL,
      email     VARCHAR(150) NOT NULL,
      phone     VARCHAR(20),
      service   VARCHAR(100),
      message   TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

const saveContact = async (data) => {
  const { firstName, lastName, email, phone, service, message } = data;
  const result = await pool.query(
    `INSERT INTO contacts (firstName, lastName, email, phone, service, message)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [firstName, lastName, email, phone, service, message]
  );
  return result.rows[0];
};
const getAllContacts = async () => {
  const result = await pool.query(
    'SELECT * FROM contacts ORDER BY "createdat" DESC'
  );
  return result.rows;
};

module.exports = { createTable, saveContact, getAllContacts };