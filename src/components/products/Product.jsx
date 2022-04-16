import React from 'react'

export const Product = ({title,onCart,generic}) => {
   console.log(generic)
   return (
      <div className="product__column">
         <img src="img/pz.png" alt="" className="product__img" />
         <h3 className="product__name">{title}</h3>
         <div className="product__footer">
            <div className="product__lables lables">
               {
                  generic.map((g) => 
                  <button className="lables__btn _active">{g.gen}</button>
                  )
               }
               <button className="lables__btn _active">тонкое</button>
               <button className="lables__btn">традиционное</button>
               <button className="lables__btn _active">26 см.</button>
               <button className="lables__btn">30 см.</button>
               <button className="lables__btn">40 см.</button>
            </div>
            <div className="product__price">
               <span className="product__nr">от 395 ₽</span>
               <button className="product__add" onClick={onCart}><span>Добавить <div className="product__count">2</div></span></button>
            </div>
         </div>
      </div>
   )
}
