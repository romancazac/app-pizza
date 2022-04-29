import React, { useEffect, useState } from "react";
import axios from "axios"
import {
  Routes,
  Route,
} from "react-router-dom";


import { Header } from "./components/header/Header";
import Home from "./pages/Home";
import Basked from "./pages/Basked";

import './style.css'
import { useDispatch, useSelector } from "react-redux";
import setPizzas from "./redux/actions/pizzas";
function App() {

  // const [product, setProduct] = useState([])
  const [cartProduct, setCartProduct] = useState([])
  const [itemCat, setItemCat] = useState(["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]);
  const [activeItem, setActiveItem] = useState(0)
  const [openSort, setOpenSort] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  const onSort = () => {
    setOpenSort(!openSort)
  }


  const onCart = (obj) => {
    setCartProduct([...cartProduct, obj])
  }


  const onCat = (index) => {

    setActiveItem(index)




  }
  const dispatch = useDispatch();

  const {items} = useSelector(({pizzas, sortBy}) => {
    return {
     items:pizzas.items,
     sortBy:sortBy 

    }
    
  });
    
  console.log(items)
 


  
  useEffect(() => {
    try {
      async function feachData() {
        const productResponse = await axios.get('https://625406a519bc53e234775c39.mockapi.io/products-pizza')
        setIsLoading(false)
        // setProduct(productResponse.data)

        dispatch(setPizzas(productResponse.data))
      }
      feachData();
    } catch (err) {
      console.log('err')
    }
    // axios.get('http://localhost:3000/db.json').then(({data}) => {
    //   setIsLoading(false)
    //   dispatch(setPizzas(data.pizzas))

    // });

  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Routes>

          <Route path="/"
            element={
            
            <Home
              onCat={onCat}
              onCart={onCart}
              onSort={onSort}
              product={items}
              itemCat={itemCat}
              activeItem={activeItem}
              isLoading={isLoading}
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
