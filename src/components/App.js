import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container 
    className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{ maxWidth: "440px"}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute> } />
              <Route path="update_profile/*" element={<PrivateRoute><UpdateProfile/></PrivateRoute> } />
              <Route path="signup/*" element={<SignUp/>} />
              <Route path="login/*" element={<Login/>} />
              <Route path="forgot_password/*" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
          
  )
  
  
}

export default App;
