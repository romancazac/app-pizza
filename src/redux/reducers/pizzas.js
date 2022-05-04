const initialStore = {
   items: [],
   isLoading: false,
};

const pizzas = (state = initialStore, action) => {
   switch(action.type){
      case 'SET_PIZZAS':
         return {
            ...state,
            items:action.payload,
            isLoading:true,
         };
      case 'SET_LOADING':
         return{
            ...state,
            isLoading:action.payload,

         }  
   }
   return state;
};



// const pizzas = (state = initialStore, action) => {
//    if(action.type === 'SET_PIZZAS') {
//       return {
//          ...state,
//          items: action.payload,
//          isLoading:true,
//       };
//    }
//    return state;
// };

export default pizzas;
