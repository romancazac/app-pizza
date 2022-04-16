import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Product } from "./components/products/Product";
import './style.css'
function App() {

  const [product, setProduct] = useState([{"id":1,"title":"Title1","generic":[{"gen":"test1"},{"gen":"test2"},{"gen":"test3"},{"gen":"test4"}]}])
  const onCart = () => {
    console.log("Click")
  }
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <section className="products">
          <div className="products__container">
            <div className="products__category row-category">
              <div className="row-category__items">
                <button className="row-category__item _active">Все</button>
                <button className="row-category__item">Мясные</button>
                <button className="row-category__item ">Вегетарианская</button>
                <button className="row-category__item ">Гриль</button>
                <button className="row-category__item ">Острые</button>
                <button className="row-category__item ">Закрытые</button>
              </div>
              <div className="row-category__sort">
                <div className="row-category__btns">
                  Сортировка по: <span>популярности</span>
                </div>
                <ul className="row-category__list">
                  <li><button className="row-category__btn">популярности</button></li>
                  <li><button className="row-category__btn">по цене</button></li>
                  <li><button className="row-category__btn">по алфавиту</button></li>
                </ul>
              </div>
            </div>
            <div className="products__product product">
              <h1 className="product__title">Все пиццы</h1>
              <div className="product__row">
                {
                  product.map((p) =>
                    <Product onCart={onCart} key={p.id} {...p} generic={p.generic}/>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
