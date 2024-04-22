// routes.js
const express = require('express');
const router = express.Router(); 
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { PD } = require('../models/PlantDisease'); 
const User = require('../models/User');
const ContactMessage = require('../models/ContactMessage');
  
const secretKey = crypto.randomBytes(32).toString('hex');

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('User with this email already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Login failed');
  }
});

router.get('/search-plantdisease', async function(req, res) {
  try {
    const { symptoms, affectedParts,plantType } = req.query; 
    const disease = await PD.findOne({
      symptoms: { $in: symptoms },
      affectedParts: { $in: affectedParts },
      plantType:plantType
    }, '_id');

    if (!disease) {
      return res.status(404).json({ error: 'Disease not found' });
    }

    res.json({ message: "Success", diseaseId: disease._id });
  } catch (err) {
    console.error('Error searching plant diseases:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/get-plantdisease/:id', async function(req, res) {
  try {
      const diseaseId = req.params.id;
      const disease = await PD.findById(diseaseId);
      if (!disease) {
          return res.status(404).json({ error: 'Disease not found' });
      }
      res.json({ message: "Success", disease: disease });
  } catch (err) {
      console.error('Error fetching disease details:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/get-plantdisease', async function(req, res) {
  try {
    const diseases = await PD.find();
    res.json({ message: "Success", diseases: diseases });
  } catch (err) {
    console.error('Error fetching diseases:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact message instance
    const newMessage = new ContactMessage({ name, email, message });
    // Save the message to the database
    await newMessage.save();
    // Respond with success message
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    // Respond with error message
    res.status(500).json({ error: 'Failed to send message' });
  }
});


module.exports = router; 
