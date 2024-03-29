import Response from "../models/response.model.js"
import { generateTokenAndSetCookie } from "../utils/generateToken.js";


export const userResponse = async (req, res) => {
  console.log('route hit')
  try {
    // Extract data from the request body
    const { _id, creator, formDescription, formTitle, questionDivs } = req.body[0];
    console.log(req.body)
    console.log(_id, creator, formDescription, formTitle, questionDivs)

    // Create a new Response document
    const newResponse = new Response({
      formId:_id,
      creator,
      formDescription,
      formTitle,
      questionDivs,
    });

    // Save the new Response document to the database
    await newResponse.save();
    console.log(newResponse)
    res.status(201).json({ message: "Response submitted successfully" });
  } catch (error) {
    console.error("Error submitting response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const allForms = async (req, res) => {
  try {
    // console.log('route hit')
    const { userId } = req.query;
    console.log('reciviving fromfront end')
   
    const forms = await Response.aggregate([
      { $match: { creator: userId } }, // Match documents with the provided userId
      { $group: { _id: "$formId", firstDocument: { $first: "$$ROOT" } } }, // Group by formId and get the first document in each group
      { $replaceRoot: { newRoot: "$firstDocument" } } 
    ]);

      console.log(forms)
     // Return the forms in the response
    return res.status(200).json(forms);
  } catch (error) {
     // Handle errors
     console.error("Error getting form:", error);
     return res.status(500).json({ error: "Internal server error" });
  }
}


export const formResponse = async (req, res) => {
  try {
    // console.log('route hit')
    const { formId } = req.query;
    const formResponses = await Response.find({ formId });

    return res.status(200).json(formResponses);

     
  } catch (error) {
     // Handle errors
     console.error("Error getting form:", error);
     return res.status(500).json({ error: "Internal server error" });
  }
}
