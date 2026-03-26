import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Feed } from './pages/Feed'
import { Register } from './pages/Register'

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/cadastro" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
