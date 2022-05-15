import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../components/basked/Item'
import cart from '../redux/actions/cart'
function Basked() {

    const items = useSelector (({cart}) => cart.productCart)
  console.log(items)
  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__wrapper">
          <div className="cart__header">
            <h1 className="cart__title">Корзина</h1>
            <button className="cart__clear">Очистить корзину</button>
          </div>
          {
            // items.map((item) =>
            //   <Item/>
            // )

          }






          {/* <div className="cart__row">
            <div className="cart__column product">
              <img src="../img/pz.png" alt="pizza" className="cart__img" />
                <div className="cart__info">
                  <h3 className="product__name">Сырный цыпленок</h3>
                  <h4 className="product__subname">тонкое тесто, 26 см.</h4>
                </div>
            </div>
            <div className="cart__column">
              <button className="cart__cant">-</button>
              <button className="cart__cant-cant">2</button>
              <button className="cart__cant">+</button>
            </div>
            <div className="cart__column">
              <span className="cart__sum">770 ₽ </span>
            </div>
            <div className="cart__column">
              <button className="cart__delete cart__cant"></button>
            </div>
          </div>
          <div className="cart__row">
            <div className="cart__column product">
              <img src="../img/pz.png" alt="pizza" className="cart__img" />
                <div className="cart__info">
                  <h3 className="product__name">Сырный цыпленок</h3>
                  <h4 className="product__subname">тонкое тесто, 26 см.</h4>
                </div>
            </div>
            <div className="cart__column">
              <button className="cart__cant">-</button>
              <button className="cart__cant-cant">2</button>
              <button className="cart__cant">+</button>
            </div>
            <div className="cart__column">
              <span className="cart__sum">770 ₽ </span>
            </div>
            <div className="cart__column">
              <button className="cart__delete cart__cant"></button>
            </div>
          </div>
          <div className="cart__row">
            <div className="cart__column product">
              <img src="../img/pz.png" alt="pizza" className="cart__img" />
                <div className="cart__info">
                  <h3 className="product__name">Сырный цыпленок</h3>
                  <h4 className="product__subname">тонкое тесто, 26 см.</h4>
                </div>
            </div>
            <div className="cart__column">
              <button className="cart__cant">-</button>
              <button className="cart__cant-cant">2</button>
              <button className="cart__cant">+</button>
            </div>
            <div className="cart__column">
              <span className="cart__sum">770 ₽ </span>
            </div>
            <div className="cart__column">
              <button className="cart__delete cart__cant"></button>
            </div>
          </div>
          <div className="cart__row">
            <div className="cart__column product">
              <img src="../img/pz.png" alt="pizza" className="cart__img" />
                <div className="cart__info">
                  <h3 className="product__name">Сырный цыпленок</h3>
                  <h4 className="product__subname">тонкое тесто, 26 см.</h4>
                </div>
            </div>
            <div className="cart__column">
              <button className="cart__cant">-</button>
              <button className="cart__cant-cant">2</button>
              <button className="cart__cant">+</button>
            </div>
            <div className="cart__column">
              <span className="cart__sum">770 ₽ </span>
            </div>
            <div className="cart__column">
              <button className="cart__delete cart__cant"></button>
            </div>
          </div> */}
          <div className="cart__footer footer-cart">
            <div className="footer-cart__row">
              <p className="footer-cart__total">Всего пицц:<span>3 шт.</span></p>
              <p className="footer-cart__total-price">Сумма заказа:<span>900 ₽</span></p>
            </div>
            <div className="footer-cart__row">
              <button className="footer-cart__btn footer-cart__btn-prev"><span>Вернуться назад</span></button>
              <button className="footer-cart__btn footer-cart__btn-procur">Оплатить сейчас</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Basked