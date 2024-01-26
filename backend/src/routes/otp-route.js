import { Router } from "express"
import { sendOtp, verifyOtp } from "../controllers/otp-controller.js"
import { requestBodyValidation } from "../middlewares/requestbody-middleware.js"
import { getOtpSchema, verifyOtpSchema } from "../utils/validations.js"
const router = Router()

router.post("/sendotp", requestBodyValidation(getOtpSchema), sendOtp)
router.post("/verifyOtp", requestBodyValidation(verifyOtpSchema), verifyOtp)

export default router
