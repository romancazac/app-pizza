const initialStore = {
    productCart: [5,6],
    
 };
 

  const cart = (state = initialStore, action) => {
      switch(action.type) {
          case 'SET_CAT':
              return {
                  ...state,
                  productCart:action.payload
              }
      }
      return state;
  };

  export default cart;