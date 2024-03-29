import mongoose from "mongoose";

// Define the schema for the question div
const questionDivSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answerType: {
    type: String,
    enum: ["shortAnswer", "paragraph"],
    required: true,
  },
  answer: {
    type: String,
  },
});

// Define the schema for the form
const formSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  formTitle: {
    type: String,
    required: true,
  },
  formDescription: {
    type: String,
    required: true,
  },
  questionDivs: [questionDivSchema],
});

// Create the model for the form
const Form = mongoose.model("Form", formSchema);

export default Form;
