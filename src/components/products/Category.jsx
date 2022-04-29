import React from "react";
function Category({ onCat, itemCat, activeItem }) {
   return (
      <>
         {
            itemCat.map((item, index) =>
               <button onClick={() => onCat(index)} key={`${item}_${index}`} className={activeItem === index ? 'row-category__item _active' : 'row-category__item'} >{item}</button>
            )
         }
      </>
   )
}
export default Category;