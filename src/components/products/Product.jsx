import React, { useState } from 'react'
import classNames from 'classnames'


export const Product = ({ id,name, price, onCart, imageUrl, sizes, types }) => {

  

   const productTypes = ["тонкое", "традиционное"]
   const productSize = [26, 30, 40]

   const [activeTypes, setActiveTypes] = useState(types[0]);
   const [activeSize, setActiveSize] = useState(sizes[0])

   const onAddCart = () => {
      const obj = {
         id,
         name,
         price,
         imageUrl,
         type:types[activeTypes],
         size:activeSize,
         
         
      }
      onCart(obj)
   }
 
   const onActiveTypes = (index) => {
      setActiveTypes(index)

   }
   const onActiveSize = (index) => {
      setActiveSize(index)
   }
   

   return (
      <div className="product__column">
         <img src={imageUrl} alt="" className="product__img" />
         <h3 className="product__name">{name}</h3>
         <div className="product__footer">
            <div className="product__lables lables">


               {
                  productTypes.map((pTypes, index) =>
                     <button className={classNames({
                        _active: activeTypes === index,
                        disable: !types.includes(index)
                     })}
                        onClick={() => onActiveTypes(index)}
                        key={index}>
                        {pTypes}
                     </button>
                  )
               }
               {

                  productSize.map((size, index) =>
                     <button className={classNames({
                        _active:activeSize === size,
                        disable:!sizes.includes(size)

                     })} 
                     key={index}
                     onClick={() => onActiveSize(size)}
                     >
                        {size} см.
                     
                     </button>
                  )
               }

            </div>
            <div className="product__price">
               <span className="product__nr">от {price} MDL</span>
               <button className="product__add" onClick={onAddCart}><span>Добавить <div className="product__count">2</div></span></button>
            </div>
         </div>
      </div>
   )
}
