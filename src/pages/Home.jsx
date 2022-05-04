import React, {useEffect,useState} from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'



import Sort from '../components/products/Sort'
import Category from '../components/products/Category'
import { Product } from '../components/products/Product'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas} from '../redux/actions/pizzas'
import { setLoading } from '../redux/actions/pizzas'
import {setCategory,setSortBy } from '../redux/actions/filters'

function Home({ itemCat, onCat, onSort, activeItem, openSort}) {
   // const [isLoading, setIsLoading] = useState(true)
  
  
   const dispatch = useDispatch();
   const { items } = useSelector(({ pizzas }) => pizzas);
   const isLoading = useSelector (({ pizzas })=> pizzas.isLoading)
   const  {category, sortBy}  = useSelector(({ filters }) => filters);
   console.log(category)
   


   const onSelectCategory = React.useCallback((index) => {
      onCat(index)
      dispatch (setCategory(index));
   },[]);
   // const onSelectSort = React.useCallback((type) => {
   //    onSort()
   //    dispatch (setSortBy(type));
   // },[]);
      
   useEffect(() => {
      dispatch(setLoading(false))
      dispatch(fetchPizzas(category))
      // setIsLoading(false)
   }, [onCat, category]);



   return (
      <section className="products">
         <div className="products__container">
            <div className="products__category row-category">
               <div className="row-category__items">
                  <Category itemCat={itemCat} activeItem={activeItem} onCat={onSelectCategory} />
               </div>
               {/* onSort={onSelectSort} */}
               <Sort  openSort={openSort}
                  items={[
                  {"name":"популярности", "type":"populare"},
                  {"name":"по цене","type":"price"},
                  {"name": "по алфавиту","type":"alphabet"}]}
               />
            </div>
            <div className="products__product product">
               <h1 className="product__title">Все пиццы</h1>
               <div className="product__row">
                  {
                     isLoading ? 
                 
                        items.map((p) =>
                           <Product key={p.id} {...p} generic={p.generic} />

                        )
                        :
                        Array(10)
                        .fill(0)
                        .map((_, index) => <ContentLoader key={index} style={{width:'25%'}}/>)                     
                       
                           
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Home