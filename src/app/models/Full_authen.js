const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);



const authentication = new Schema({
    name: {type: String, required: true,},
    email: {type: String, required: true,},
    password: {type: String, required: true,},
  }, {
    _id: false,
    timestamps: true,
  });

  mongoose.plugin(slug);

  authentication.plugin(AutoIncrement);

  authentication.plugin(mongooseDelete, { 
          deleteAt : true,
          overrideMethods: 'all' ,
  })
  
  module.exports = mongoose.model('authentication', authentication)