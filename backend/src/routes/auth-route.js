import { Router } from "express"
import { authUser, getPProfile } from "../controllers/auth-controller.js"
import { isLoggedin } from "../middlewares/auth-middleware.js"
import { requestBodyValidation } from "../middlewares/requestbody-middleware.js"
import { authSchema } from "../utils/validations.js"

const router = Router()

router.post("/", requestBodyValidation(authSchema), authUser)

router.get("/profile", isLoggedin, getPProfile)

export default router
