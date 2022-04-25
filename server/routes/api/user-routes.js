const router = require('express').Router();
const { User } = require('../../models');

// create a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Find one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk({ where: { id: req.params.id } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user by that id' });
      return;
    } else {
      res
        .status(200)
        .json({ message: 'Found the user', userData })
    }
  }
  catch (err) {
  res.status(400).json(err);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Error trying to find all users' });
      return;
    } else {
      res
        .status(200)
        .json({ message: 'Found all users', userData })
    }
  }
  catch (err) {
  res.status(400).json(err);
  }
});

// Update one user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk({ where: { id: req.params.id } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user by that id' });
      return;
    } else {
      res
        .status(200)
        .json({ message: 'Found the user', userData })
    }
  }
  catch (err) {
  res.status(400).json(err);
  }
});

// Delete one user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({ where: { id: req.params.id } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user by that id' });
      return;
    } else {
      res
        .status(200)
        .json({ message: 'Found the user', userData })
    }
  }
  catch (err) {
  res.status(400).json(err);
  }
});

// post data for login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // if no user data entered, display error message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    //Check the entered password
    const validPassword = await userData.checkPassword(req.body.password);

    // If invalid password, display error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // if credentials are valid, log in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;