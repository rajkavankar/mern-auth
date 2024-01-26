import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../features/users/userSlice"

const LogoutBtn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(logout())
    navigate("/")
  }
  return (
    <Button onClick={handleLogout} variant='danger'>
      Logout
    </Button>
  )
}

export default LogoutBtn
