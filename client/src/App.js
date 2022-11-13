import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { EmployeeProvider } from "./context/EmployeeContext";
import EditEmployee from "./components/EditEmployee";
import NewEmployee from "./components/NewEmployee";


function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/newEmployee" element={<NewEmployee />}></Route>
          <Route exact path="/edit/:id" element={<EditEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
