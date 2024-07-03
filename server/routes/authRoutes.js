const express = require('express');
const router = express.Router();
const cors = require('cors')

const { test, registerUser, loginUser, getProfile, authMiddleware } = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'https://authentify-front.vercel.app' 
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.get('/dashboard', authMiddleware, (req, res) => {
    // Access user information from req.user if needed
    res.json({ message: "Welcome to the dashboard!" });
  });

module.exports = router

