import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormDataPartner from "../pages/FormDataPartner";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateUser from "../pages/CreateUser";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulario" element={<FormDataPartner />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default RoutesApp;
