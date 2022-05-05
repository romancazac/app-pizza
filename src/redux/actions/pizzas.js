import axios from "axios"

const setLoading = (payload) => ({

  type:'SET_LOADING',
  payload,
})
 const fetchPizzas = (category) =>  (dispatch)  => {
   try {

      async function feachData() {
        
        const productResponse = await axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` :''}`)
        
        dispatch(setPizzas(productResponse.data))
      }
      feachData();
    } catch (err) {
      console.log('err')
    }
 }
 
 
 const setPizzas = (items) =>({
   type: 'SET_PIZZAS',
   payload:items,
});

export {
  setLoading,
fetchPizzas,
setPizzas
}
