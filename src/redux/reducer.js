
import { ADD_DOG,DELETE_DOG,GET_DOGS,GET_TEMPERAMENTS,GET_DOGBYNAME,FILTER,ORDER } from "./actions";

const initialState={
    dogBreeds:[],
    myDogs:[],
    temperaments:[],
    loading:false
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                dogBreeds:[...action.payload],
                myDogs:[...action.payload]
            }
        case ADD_DOG:
            const addDog=[...state.dogBreeds,action.payload];
            return{
                ...state,
                dogBreeds:[...addDog],
                myDogs:[...addDog]
            }
        case DELETE_DOG:
            const deleteDog=state.dogBreeds.filter(
                (dog)=>dog.id!==action.payload
            )
            return{
                ...state,
                myDogs:[...deleteDog],
                dogBreeds:[...deleteDog]
            }
        case GET_DOGBYNAME:
            return {
                ...state,
                dogBreeds:[...action.payload]
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments:[...action.payload]
            }       
            case FILTER:
                let filterDogs=[...state.myDogs];
                return {
                  ...state,
                  dogBreeds: filterDogs.filter(e => e.temperament && e.temperament.includes(action.payload))
                }
              

        case ORDER:
            let orderDogs=[...state.myDogs];
            if(action.payload==='Race A-Z'){
                orderDogs=state.dogBreeds.sort((a,b)=>a.name>b.name?1:-1);
            }
            else if(action.payload==='Race Z-A'){
                orderDogs=state.dogBreeds.sort((a,b)=>a.name<b.name?1:-1);
            }
            else if(action.payload==='Weight A-Z'){
                orderDogs=state.dogBreeds.sort((a,b)=>a.weight>b.weight?1:-1);
            }else{
                orderDogs=state.dogBreeds.sort((a,b)=>a.weight<b.weight?1:-1);
            }
            return{
                ...state,
                dogBreeds:[...orderDogs]
            }
            case 'RESET':
                return{
                    ...state,
                    dogBreeds:state.myDogs
                }
            default:
                return {...state}
    }
}

export default rootReducer;