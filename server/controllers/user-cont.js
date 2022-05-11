// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {

  //Get all users
  async allUsers( req, res) {
    const userData = await User.findAll()

    if (!userData) {
        return res.status(400).json({ message: 'Cannot find all users!' });
    }

    res.json("found all users", userData);
  },

  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const singleUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!singleUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(singleUser);
  },
  // create a user, sign a token
  async createUser( req, res) {
    const user = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(400).json({ message: 'Couldn\'t create user!' });
    }
    const token = signToken(user);
    res.json({ message: 'Created user', token, user });
  },
  // login a user, sign a token, and send it back
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = user.checkPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password or email entered!' });
    }
    const token = signToken(user);
    res.json({ message: 'Login successful', token, user });
  },
  
  // Delete a user
  async deleteUser( req, res) {
    const delUser = await User.destroy({ where: { id: req.params.id}});

    if (!delUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(delUser);
  },

  // Update a user
  async updateUser( req, res) {
    const user = await User.update(
      {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
      }, { where: { id: req.params.id } });

    if (!user) {
      return res.status(400).json({ message: 'Couldn\'t update user!' });
    }
    res.json({ message: 'updated user', user });
  },
};