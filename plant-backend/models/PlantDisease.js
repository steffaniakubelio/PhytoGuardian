const mongoose = require('mongoose');

const plantDiseaseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  causes: {
    type: String,
  },
  treatment: {
    type: String,
  },
  careTips: {
    type: String,
  },
  image: {
    type: String,
  },
  symptoms: {
    type: [String],
  },
  severity: {
    type: Number,
  },
  affectedParts: {
    type: [String],
  },
  plantType: {
    type: String,
  },
  ageOfPlant: {
    type: String,
  },
  weatherConditions: {
    type: String,
  },
  wateringFrequency: {
    type: String,
  }
});
const PD = mongoose.model('plantdiseases', plantDiseaseSchema)
module.exports = { PD ,plantDiseaseSchema}
