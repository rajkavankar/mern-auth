import { asyncHandler } from "../utils/asyncHandler.js"
import { AuthError } from "../utils/CustomError.js"
import jwt from "jsonwebtoken"
import User from "../models/users-model.js"
import { config } from "../config/config.js"

export const isLoggedin = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let token = req.headers.authorization.split(" ")[1]
    let decoded = jwt.verify(token, config.JWT_SECRET)

    const user = await User.findById(decoded._id)
    req.user = user

    next()
  } else {
    throw new AuthError()
  }
})
