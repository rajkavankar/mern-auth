import { Router } from "express"
import authRouters from "./auth-route.js"
import otpRouters from "./otp-route.js"
const router = Router()

router.use("/auth", authRouters)

router.use("/otp", otpRouters)

router.get("/", (_, res) => {
  res.status(200).json({
    message: "great",
  })
})

export default router
