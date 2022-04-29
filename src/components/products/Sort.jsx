import React, { useState } from 'react'

export default function Sort({ onSort, items }) {

   const [sortItem, setSortItem] = useState(0)
   const [activeSortItem, setActiveItem] = useState()
   let titleSort = items[sortItem]
   const onSortItem = (index) => {
      setSortItem(index)
      setActiveItem(!activeSortItem)
      console.log(sortItem)
   }
   return (
      <div className="row-category__sort" onClick={onSort}>
         <div className="row-category__btns">
            Сортировка по: <span>{titleSort}</span>
         </div>
         <ul className="row-category__list">
            {
               items.map((item, index) =>
                  <li className={sortItem === index ? 'row-category__btn _active' : 'row-category__btn'} onClick={() => onSortItem(index)} key={`${item}_${item.index}`}>
                     <button>{item}</button>
                  </li>
               )
            }

         </ul>
      </div>
   )
}
