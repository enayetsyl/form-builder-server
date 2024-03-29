import Form from "../models/form.model.js"
import { generateTokenAndSetCookie } from "../utils/generateToken.js";


export const createForm = async (req, res) => {
  try {
    // Extract form data from request body
    const formData = req.body;
    console.log('data from frontend',formData)

    // Create a new form instance using the Form model
    const newForm = new Form(formData);
    console.log('newForm', newForm)
    // Save the new form to the database
    await newForm.save();

    // Respond with success message
    return res.status(201).json({ message: "Form created successfully", form: newForm });
  } catch (error) {
    // Handle errors
    console.error("Error creating form:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getForm = async (req, res) => {
  try {
    const { userId } = req.query;
     // Find forms associated with the provided user ID
     const forms = await Form.find({ creator: userId });

     // Return the forms in the response
     return res.status(200).json(forms);
  } catch (error) {
     // Handle errors
     console.error("Error getting form:", error);
     return res.status(500).json({ error: "Internal server error" });
  }
}
export const getUserForm = async (req, res) => {
  try {
    console.log('route hit')
    
    const { formId } = req.query;
     // Find forms associated with the provided user ID
     console.log(formId)
     const forms = await Form.find({ _id: formId });
    console.log(forms)
     // Return the forms in the response
     return res.status(200).json(forms);
  } catch (error) {
     // Handle errors
     console.error("Error getting form:", error);
     return res.status(500).json({ error: "Internal server error" });
  }
}