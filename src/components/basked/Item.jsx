import { useSelector } from "react-redux";

function Item() {

   // const {items} = useSelector(({cart}) => cart.productCart)
   // console.log(items)
   return (
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
   )
}
export default Item;