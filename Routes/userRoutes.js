// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// router.post('/signup', async (req, res) => {
//   try {
//     const { fullName, email, phoneNumber, password } = req.body;
//     const user = new User({ fullName, email, phoneNumber, password });
//     await user.save();
//     res.status(201).json({ message: 'User signed up successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to sign up user' });
//   }
// });

// module.exports = router;
