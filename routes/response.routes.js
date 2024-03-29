import express from "express"
import { userResponse, allForms, formResponse } from "../controllers/response.controller.js";

const router = express.Router()

router.post("/userResponse", userResponse)
router.get("/allForms", allForms)
router.get("/formResponse", formResponse)



export default router;