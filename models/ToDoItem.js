'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var toDoItemSchema = Schema( {
  userId: ObjectId,
  title: String,
  description:String,
  profName: String,
  courseName: String,
  createdAt: Date,
  year:String,
} );

module.exports = mongoose.model( 'ToDoItem', toDoItemSchema );
