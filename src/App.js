import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import PopularCategory from "./Components/PopularCategory/PopularCategory";
import PopularListing from "./Components/PopularListing/PopularListing";
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage/>}
        ></Route>
        <Route
          exact
          path="/categories"
          element={<PopularCategory heading={"ALL CATEGORIES"}/>}
        ></Route>
        <Route
          exact
          path="/listing"
          element={<PopularListing/>}
        ></Route>
      </Routes>
    </Router>
      
    
  );
}

export default App;
