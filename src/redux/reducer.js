
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
                dogBreeds:[...action.payload]
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

            }       
        case FILTER:
            return {
                ...state,
                myDogs:state.dogBreeds.filter(e=>e.temperament===action.payload)
            }
        case ORDER:
            let orderDogs;
            if(action.payload==='Ascendente'){
                orderDogs=state.myDogs.sort((a,b)=>a.name>b.name?1:-1);
            }
            else{
                orderDogs=state.myDogs.sort((a,b)=>a.name<b.name?1:-1);
            }
            return{
                ...state,
                myDogs:[...orderDogs]
            }
            case 'RESET':
                return{
                    ...state,
                    myDogs:state.dogBreeds
                }
            default:
                return {...state}
    }
}

export default rootReducer;