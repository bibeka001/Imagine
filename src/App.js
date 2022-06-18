import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import DoRegister from "./Component/Register/DoRegister";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DoCheck from "./Component/Check/DoCheck";
import "../src/App.css";
function App() {
  const user = false;
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <DoRegister />
        {/* <DoCheck /> */}
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          {/* <Route
            exact
            path="/Write"
            element={user ? <Login /> : <DoCheck />} */}
          {/* // /> */}

          {/* <Route exact path="/DoRegister" element={<DoRegister />} /> */}
          {/* <Route exact path = "/DoCheck" element= {<DoCheck />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
