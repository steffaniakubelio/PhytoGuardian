const express = require('express');
const router = express.Router(); // Create an instance of Express Router
const { PD } = require('../models/PlantDisease'); // Assuming models folder is in the same directory as routes

// Endpoint to handle plant disease analysis
// router.post('/create-plantdisease', async function(req, res) {
//   try {
//     const plantDisease = new PD(req.body);
//     await plantDisease.save();
//     res.status(200).send({ message: 'Success', plantDisease });
//   } catch (err) {
//     res.status(500).json({ error: 'Internal server error', err });
//   }
// });

// // Endpoint to search plant diseases based on symptoms, severity, affected parts, etc.
// router.get('/search-plantdisease', async function(req, res) {
//     try {
//       const { symptoms, severity, affectedParts, plantType, ageOfPlant, weatherConditions, wateringFrequency } = req.body;
  
//       // Example query based on provided parameters
//       const diseases = await PD.findOne({
//         symptoms: { $all: symptoms },
//         severity: { $gte: severity }, // Adjust as needed
//         affectedParts: { $all: affectedParts },
//         plantType: plantType,
//         ageOfPlant: ageOfPlant,
//         weatherConditions: weatherConditions,
//         wateringFrequency: wateringFrequency
//       });
  
//       res.json({ message: "Success", diseases: diseases });
//     } catch (err) {
//       console.error('Error searching plant diseases:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
router.get('/search-plantdisease', async function(req, res) {
  try {
    const { symptoms, affectedParts,plantType } = req.query; // Assuming symptoms and affectedParts are passed as query parameters

    // Example query based on provided symptoms and affected parts
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
      // Use the diseaseId to fetch disease details from your database
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


  
// Endpoint to get all plant diseases
router.get('/get-plantdisease', async function(req, res) {
  try {
    const diseases = await PD.find();
    res.json({ message: "Success", diseases: diseases });
  } catch (err) {
    console.error('Error fetching diseases:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router; 
