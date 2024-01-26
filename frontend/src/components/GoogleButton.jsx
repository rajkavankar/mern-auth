import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"

const GoogleButton = () => {
  return (
    <div>
      <GoogleLogin
        theme='filled_blue'
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential)
          console.log(decoded)
        }}
        onError={() => {
          console.log("Login Failed")
        }}
      />
    </div>
  )
}

export default GoogleButton
