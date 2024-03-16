import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010831";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextSwift - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextSwift - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title={"TextSwift"} toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>

            <Route
              path="/about"
              element={<About mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
