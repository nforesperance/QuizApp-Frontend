  const initState ={
      data:[],
      chosenIds:[]
  }
 
  const rootReducer = (state = initState,action) =>{
      switch (action.type) {
          case 'ADD':{
           let idAlready = state.chosenIds.indexOf(action.payload.question)>-1;
          //making a copy of the sta chosenIds and data
          let copy =state.data.slice();
          if(idAlready){
              // chosenIds = chosenIds.filter(id=>id!==action.payload.id);
              copy = copy.filter(el=>el.question!==action.payload.question);
              return{
                ...state,
                data:[...copy,action.payload]
              };
          }
          else{
            return{
                ...state,
              data:[...state.data,action.payload],
              chosenIds:[...state.chosenIds,action.payload.question]
          } 
        
          }
          }
          case 'UPDATE':{
             return{
               ...state,
               data:[...action.payload]
             }
          }            
      
          default:{
            return state
          }
               
        }
  }
 
  export default rootReducer