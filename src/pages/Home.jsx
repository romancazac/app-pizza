import React, {useEffect,useState} from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'



import Sort from '../components/products/Sort'
import Category from '../components/products/Category'
import { Product } from '../components/products/Product'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import setSortBy from '../redux/actions/filters'

function Home({ itemCat, onCat, onSort, activeItem, openSort}) {
   const [isLoading, setIsLoading] = useState(true)
  
  
   const dispatch = useDispatch();
   const { items } = useSelector(({ pizzas }) => pizzas);






   useEffect(() => {
      dispatch(fetchPizzas())
      setIsLoading(false)
   }, []);

   return (
      <section className="products">
         <div className="products__container">
            <div className="products__category row-category">
               <div className="row-category__items">
                  <Category itemCat={itemCat} activeItem={activeItem} onCat={onCat} />
               </div>
               <Sort onSort={onSort} openSort={openSort}
                  items={["популярности", "по цене", "по алфавиту"]}
               />
            </div>
            <div className="products__product product">
               <h1 className="product__title">Все пиццы</h1>
               <div className="product__row">
                  {
                     isLoading ? <ContentLoader />
                        :
                        items.map((p) =>
                           <Product key={p.id} {...p} generic={p.generic} />

                        )
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Home