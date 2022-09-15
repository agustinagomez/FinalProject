import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context";
import ProtectedRoute from "./context/ProtectedRoute";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Provider store ={store}>
        <Routes>
          <Route path="/" element={<ProtectedRoute></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  );
}
export default App;
