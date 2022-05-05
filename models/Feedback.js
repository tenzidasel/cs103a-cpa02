'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var feedbackSchema = Schema( {
  userId: ObjectId,
  courseName: String,
  profName: String,
  comment:String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'feedbackItem', feedbackSchema );
