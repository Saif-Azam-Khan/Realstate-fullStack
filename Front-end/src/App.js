import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import DetailPage from "./components/DetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NEW } from "./redux/actions/action";
import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the specified BASE_URL
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        // Set the retrieved data to the 'datas' state
        setDatas(data);
      });
  }, []);

  const storNewData = () => {
    console.log("in abc");
    // Dispatch the 'NEW' action with the 'datas' as payload
    dispatch(NEW(datas));
  };

  return (
    <div className="App">
      {/* Render the NavBar component and pass the 'storNewData' function as a prop */}
      <NavBar onClick={storNewData()} />
      <Routes>
        {/* Render the Cards component and pass the 'datas' as a prop */}
        <Route path="/" element={<Cards datas={datas} />} />
        {/* Render the DetailPage component */}
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;