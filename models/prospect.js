'use strict';

const mongoose = require('../config/mongodb'),
      Schema = mongoose.Schema;

function model() {
  
  const prospectSchema = 
    new Schema(
      {
        name: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
          trim: true,
          index: true
        },
        phone: {
          type: String,
          maxlength: 16,
          trim: true
        },
        email: {
          type: String,
          maxlength: 20,
          trim: true,
          required: true
        },
        interest: {
          type: String
        },
        description: {
          type: String,
          required: true,
          maxlength: 1000,
          trim: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    );

  return mongoose.model('prospect', prospectSchema);
};

module.exports = model();