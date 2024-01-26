import crypto from "crypto"
import { config } from "../config/config.js"

class OtpService {
  ttl = 1000 * 60 * 5 //5 mins

  async getOtp() {
    const otp = crypto.randomInt(1000, 9999)
    return otp
  }

  hashData(data) {
    return crypto
      .createHmac("SHA256", config.OTP_HASH)
      .update(data)
      .digest("hex")
  }
}

export default new OtpService()
