import React, { useEffect, useState } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";


import { Header } from "./components/header/Header";
import Home from "./pages/Home";
import Basked from "./pages/Basked";

import './style.css'


function App() {

  // const [product, setProduct] = useState([])
  const [cartProduct, setCartProduct] = useState([])
  const [itemCat, setItemCat] = useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]);
  const [activeItem, setActiveItem] = useState(0)
  const [openSort, setOpenSort] = useState(false)



  const onSort = () => {
    setOpenSort(!openSort)
  }


  // const onCart = (obj) => {
  //   setCartProduct([...cartProduct, obj])
  // }


  const onCat = (index) => {

    setActiveItem(index)




  }



  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Routes>

          <Route path="/"
            element={
            
            <Home
              onCat={onCat}
              onSort={onSort}
              itemCat={itemCat}
              activeItem={activeItem}
            />
          
          
          }
          />
          <Route path="basked"
            element={<Basked />}
          />
        </Routes>

      </main>
    </div>
  );
}

export default App;
