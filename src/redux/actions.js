import axios from 'axios';
export const ADD_DOG='ADD_DOG';
export const DELETE_DOG='DELETE_DOG';
export const GET_DOGS='GET_DOGS';
export const GET_DOGBYNAME='GET_DOGBYNAME';
export const GET_TEMPERAMENTS='GET_TEMPERAMENTS';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


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

export function getDogsByName(name){
  //busca todos los dogs por nombre
  return async function (dispatch) {
    const response = await axios.get(`/dogs?name=${name}`);
    return dispatch({
      type: GET_DOGBYNAME,
      payload: response.data,
    });
  };
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