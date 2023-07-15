import { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

import DetailPage from "./components/DetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NEW } from "./redux/actions/action";
import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setDatas(JSON.parse(res.data));
      console.log(datas)
      console.log("123");
    });
  }, []);
   
 const abc= ()=>{
    console.log(datas)
    dispatch(NEW(datas))
  }

  return (
    <div className="App">
      <NavBar onClick={abc()}/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;