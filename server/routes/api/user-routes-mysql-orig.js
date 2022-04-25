const router = require('express').Router();
const db = require('../../config/connection');

//Find all users
router.get('/', async (req, res) => {
  const sql = `SELECT * FROM users`;

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({Error: "Error finding all users", err});
      console.log("Error finding all users", err);
    }
    res.status(200).json({message: "Found all users", result});
    console.log("Found all users", result);
  });
});

//Find one user
router.get('/:id', async (req, res) => {
  const sql = `SELECT * FROM users WHERE id= ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({Error: "Error finding user", err});
      console.log("Error finding user", err);
    }
    res.status(200).json({message: "Found user", result});
    console.log("Found user", result);
});
});

//Create a user
router.post('/', async (req, res) => {
  const sql = `INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?) `;

  const params = [
    req.body.firstname, 
    req.body.lastname,
    req.body.username,
    req.body.email,
    req.body.password
   ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({Error: "Error creating user", err});
      console.log("Error creating user", err);
    }
    res.status(200).json({message: "Created user", result});
    console.log("Created user", result);
  });
});

// update a user by its `id` value
router.put('/:id', async (req, res) => {
  const sql = `UPDATE users SET username= ?, firstname= ?, lastname= ?, password= ?, email= ? WHERE id= ?`;

  const params = [ 
                 req.body.username,
                 req.body.firstname, 
                 req.body.lastname,
                 req.body.password, 
                 req.body.email,
                 req.params.id
                ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({Error: "Error updating user", err});
      console.log("Error updating user", err);
    }
    res.status(200).json({message: "Updating user", result});
    console.log("Updating user", result);
});
});

//Delete user by id
router.delete('/:id', async(req, res) => {
  const sql = `DELETE FROM users WHERE id= ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({Error: "Error deleting user", err});
      console.log("Error deleting user", err);
    } else if (!res.affectedRows) {
      res.status(200).json({message: "User doesn't exist with that id"});
      console.log("User doesn't exist with that id");
    } else {
    res.status(200).json({message: "Deleting user", result});
    console.log("Deleting user", result);
  }
});
});

module.exports = router;
