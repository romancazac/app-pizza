import axios from "axios"


 const fetchPizzas = () =>  (dispatch)  => {
   try {
      async function feachData() {
        const productResponse = await axios.get('https://625406a519bc53e234775c39.mockapi.io/products-pizza')
        
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
fetchPizzas,
setPizzas
}
