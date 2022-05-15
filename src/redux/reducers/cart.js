const initialState = {
    productCart: {},
    totalCount:0,
    totalPrice:0,

};


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART': {
            const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
            const currentPizzaItems = !state.productCart[action.payload.id]
                ? [action.payload]
                : [...state.productCart[action.payload.id].productCart, action.payload];
            const newItems ={
                ...state.productCart,
                [action.payload.id]:{
                   productCart: currentPizzaItems,
                   totalPrice: getTotalPrice(currentPizzaItems),
                }
            }  
            const allPizzas =  [].concat.apply([], Object.values(newItems))
          
        //   calc total price
            let total = [];
            for(let sum of Object.values(newItems)){
                total.push( sum.totalPrice)
            }

            
            const calcPrice = total.reduce((sum, obj) => obj + sum, 0 )

            return {
                ...state,
               productCart:newItems,
               totalCount:allPizzas.length,
               totalPrice:calcPrice
            }
            
        }
        default:
            return state;

    }
    
    
};

export default cart;