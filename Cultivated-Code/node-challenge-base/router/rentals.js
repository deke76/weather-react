const { Pool } = require('pg/lib');

const router = require('express').Router();

router.get('/health', (req, res) => {
  res.json({ success: true });
  console.log(req.db)
});

router.post('/rentals', (req, res) => {
  // destructure the data
  const { name, model, start_date, end_date } = req.body;
  const db = req.db;

  // validate form input and set messaging
  const errMessage = (!name || !model)
    ? 'Name and Model must not be blank'
    : (end_date < start_date)
      ? 'Start date must not be greater than the end date'
      : '';
  const status = errMessage.length > 0
    ? 422
    : 200;

  if (status !== 200) {
    res.send({"error": errMessage});
  }

  // create the insertion query
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  let stringQuery = `
    INSERT INTO rentals
    (${keys[0]}, ${keys[1]}, ${keys[2]}, ${keys[3]})
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

  // return an good status
  return db
    .then(connection => {
      connection
        .query(stringQuery, values)
        .then(() => res.sendStatus(status));
    })
    .catch(err => console.log(err));
});

module.exports = { path: '/api/v1', router };
