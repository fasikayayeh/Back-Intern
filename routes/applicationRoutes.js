import express from "express"
import {
 createApplication,
 getApplications,
 deleteApplication,
    updateApplication,
    loginApplication
} from "../controllers/applicationController.js"

const router = express.Router()

router.post("/", createApplication)
router.get("/", getApplications)
router.delete("/:id", deleteApplication)
router.put("/:id", updateApplication)
router.post("/login", loginApplication)

export default router