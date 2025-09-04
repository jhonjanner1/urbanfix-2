import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";

function App() {
  const [page, setPage] = useState("home"); // inicio por defecto en "home"

  return (
    <div>
      {page === "home" && <Home goLogin={() => setPage("login")} goRegister={() => setPage("register")} goReport={() => setPage("report")} />}
      {page === "login" && <Login goHome={() => setPage("home")} />}
      {page === "register" && <Register goHome={() => setPage("home")} />}
      {page === "report" && <Report goHome={() => setPage("home")} />}
    </div>
  );
}

export default App;
