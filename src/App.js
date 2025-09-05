import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";
import Ciudadano from "./pages/Ciudadano";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home goLogin={() => setPage("login")} goRegister={() => setPage("register")} goReport={() => setPage("report")} />}
      {page === "login" && <Login onNavigate={(page) => setPage(page)} />}
      {page === "register" && <Register goLogin={() => setPage("login")} />}
      {page === "report" && <Report goHome={() => setPage("home")} />}
      {page === "ciudadano" && <Ciudadano goHome={() => setPage("home")} />}
    </div>
  );
}

export default App;
