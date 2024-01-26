import { Card } from "react-bootstrap"
import LogoutBtn from "../components/LogoutBtn"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user)

  return (
    <div
      style={{ height: "100vh" }}
      className='d-flex justify-content-center align-items-center bg-light '>
      <Card>
        <Card.Body>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
          <LogoutBtn />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dashboard
