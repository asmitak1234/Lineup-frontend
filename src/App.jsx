
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { Button } from 'react-bootstrap';
import CustomNavbar from "./pages/CustomNavbar";
import Footer from "./components/Footer";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  // Define form content for Home page
  const formContentHome = {
    content: <Button type="submit" variant="light">Log out</Button>,
    onSubmit: Logout,
  };

  // Define form content for Login page
  const formContentLogin = {
    content: <Button variant="light" onClick={() => window.location.href = '/register'}>Register</Button>,
    onSubmit: () => {},
  };

  // Define form content for Register page
  const formContentRegister = {
    content: <Button variant="light" onClick={() => window.location.href = '/login'}>Login</Button>,
    onSubmit: () => {},
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CustomNavbar formContent={formContentHome} />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <CustomNavbar formContent={formContentLogin} />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <CustomNavbar formContent={formContentRegister} />
              <RegisterAndLogout />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// import react from "react"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Home from "./pages/Home"
// import NotFound from "./pages/NotFound"
// import ProtectedRoute from "./components/ProtectedRoute"
// import { Button } from 'react-bootstrap';
// import CustomNavbar from "./pages/CustomNavbar"

// function Logout() {
//   localStorage.clear()
//   return <Navigate to="/login" />
// }

// function RegisterAndLogout() {
//   localStorage.clear()
//   return <Register />
// }


// export default function App() {

//   const formContentHome = {
//       content: <Button type="submit" variant="light">Log out</Button>,
//       onSubmit: Logout
//   };


//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <CustomNavbar formContent={formContentHome}/>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/register" element={<RegisterAndLogout />} />
//         <Route path="*" element={<NotFound />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }



