import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./Routes/protectedRoutes/ProtectedRoutes";
import RedirectifAuth from "./Routes/RedirectifAuth/RedirectifAuth";
import AppLayout from "./Layout/Applayout";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<AppLayout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<About />} />
        </Route>
      </Route>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<div>Registration Page</div>} />
      <Route path="*" element={<div>Not found...</div>} />
    </Routes>
  );
}

export default App;
