import express from "express"
import { createForm, getForm, getUserForm } from "../controllers/form.controller.js";

const router = express.Router()

router.post("/createForm", createForm)
router.get("/getForm", getForm)
router.get("/getUserForm", getUserForm)


export default router;