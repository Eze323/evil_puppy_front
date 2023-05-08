import axios from 'axios';
export const ADD_DOG='ADD_DOG';
export const DELETE_DOG='DELETE_DOG';
export const GET_DOGS='GET_DOGS';
export const GET_DOGSBYNAME='GET_DOGSBYNAME';
export const GET_TEMPERAMENTS='GET_TEMPERAMENTS';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export function addDog(dog){
    return{
        type: ADD_DOG,
        payload: dog
    }
}

export function deleteDog(id){
    return{
        type: DELETE_DOG,
        payload: id
    }
}

export const getDogs=()=>{
    //traigo todos los dogs de la base-api
        return async function (dispatch) {
          const apiData = await axios.get(`/dogs`);
          
          const dogs= apiData.data;

          return dispatch({
            type: GET_DOGS,
            payload: dogs,
          });
        };
      
}

  
  


export const getDogsByName = (name)=> async function (dispatch) {
  //busca todos los dogs por nombre
  try{
    if(name){
    //const response = await axios.get(`/dogs?name=${name}`);
    //const data=response.data;
    const apiData = await axios.get(`/dogs`);     
    const dogs= apiData.data;
    const filteredDogs = dogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));

    return dispatch({
      type: GET_DOGSBYNAME,
      payload: filteredDogs,
    });
  }else{
    // si el nombre de búsqueda es undefined, limpiamos el estado de búsqueda
      dispatch({
        type: CLEAR_SEARCH,
      });
  }
   } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: error.message,
    });
  }
 
}


export const getTemperaments=()=>{
    
      return async function (dispatch) {
        const response = await axios.get('/temperament');
        return dispatch({
          type: GET_TEMPERAMENTS,
          payload: response.data,
        });
      };
   
    
}

export const filterCards=(status)=>{
  return {
    type:FILTER,
    payload:status
  }
}

export const orderCards=(id)=>{
  return{
    type:ORDER,
    payload:id
  }
}