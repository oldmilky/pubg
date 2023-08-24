import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";
import Proof from "./components/Proof/Proof";
import Sended from "./components/Sended/Sended";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Proof />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sended" element={<Sended />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
