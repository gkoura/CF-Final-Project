// userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Send the response with the correct variable
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
