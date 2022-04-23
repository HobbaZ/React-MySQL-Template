const router = require('express').Router();
const db = require('../../config/connection');
const { User } = require('../../models');

//Find all users
router.get('/', async (req, res) => {
  const sql = `SELECT firstname, lastname FROM user`;

  db.query(sql, params, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message});
      return;
    }
    res.json({ message: 'Found all users: ',
    data: res
  });
  });
});

//Find one user
router.get('/:id', async (req, res) => {
  const sql = `SELECT firstname, lastname WHERE id= ? FROM user`;
  const params = [req.params.id];

  db.query(sql, params, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message});
      return;
    } else if (!res.affectedRows) {
      res.json({message: 'User not found'});
    } else {
    res.json({ message: 'Found the user: ',
    data: res
  });
  }
  });
});

//Create a user
router.post('/', async (req, res) => {
  const sql = `INSERT INTO user (id, username, firstname, lastname, password, email) VALUES (?, ?, ?, ?, ?, ?) `;

  db.query(sql, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message});
      return;
    }
    res.json({ message: 'Found all users: ',
    data: res
  });
  });
});

// update a user by its `id` value
router.put('/:id', async (req, res) => {
  const sql = `UPDATE users SET (username, firstname, lastname, password, email) VALUES (?, ?, ?, ?, ?, ?) WHERE id= ? `;

  const params = [req.params.id, 
                 req.body.username,
                 req.body.firstname, 
                 req.body.lastname,
                 req.body.password, 
                 req.body.email
                ];

  db.query(sql, params, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message});
      return;
    } else if (!res.affectedRows) {
      res.json({message: 'User not found'});
    } else {
      res.json({ message: 'Updated user details: ',
      data: req.body,
      changes: res.affectedRows
    });
  }
  });
});

//Delete user by id
router.delete('/:id', async(req, res) => {
  const sql = `DELETE FROM user WHERE id= ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message});
      return;
    } else if (!res.affectedRows) {
      res.json({message: 'User not found'});
    } else {
    res.json({ message: 'deleted user',
    changes: result.affectedRows,
    id: req.params.id
  });
  }
  });
});

module.exports = router;
