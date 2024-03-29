import mongoose from "mongoose";

// Define schema for questionDivs array
const questionSchema = new mongoose.Schema({
  answer: String,
  answerType: String,
  question: String,
});

// Define schema for main form object
const responseSchema = new mongoose.Schema({
  formId: String, // Add formId field
  creator: String,
  formDescription: String,
  formTitle: String,
  questionDivs: [questionSchema], // Embed the question schema here
});

// Create the model using the schema
const Response = mongoose.model('Response', responseSchema);



export default Response;