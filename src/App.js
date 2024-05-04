import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
// import PopularCategory from "./Components/PopularCategory/PopularCategory";
// import PopularListing from "./Components/PopularListing/PopularListing";
import Listinfo from "./Components/Listinfo/Listinfo";
import ListingPage from "./Pages/ListingPage";
import CategoryPage from "./Pages/CategoryPage";
import Subcategory from "./Components/Subcategory/Subcategory";
import Subcate_listing from "./Components/Subcategory-listing/Subcate_listing";
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
          element={<CategoryPage heading={"ALL CATEGORIES"}/>}
        ></Route>
        <Route
          exact
          path="/listing/:id"
          element={<ListingPage/>}
        ></Route> 
        <Route
          exact
          path="/:name"
          element={<Subcategory/>}
        ></Route>
        <Route
          exact
          path="/:name/:subname"
          element={<Subcate_listing/>}
        ></Route>
        <Route
          exact
          path="/:name/:subname/:id"
          element={<Listinfo/>}
        ></Route>
      </Routes>
    </Router>
      
    
  );
}

export default App;
