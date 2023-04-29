import { useRef } from "react";
import { useDispatch } from "react-redux";
import {filterCards,orderCards} from "../../redux/actions"

export default function FilterBar(){
  
  const dispatch = useDispatch();
  const filter=useRef(null);
  const order=useRef(null);
  
  function handleReset(e){
    dispatch({type:'RESET'});
    filter.current.value="";
    order.current.value="";
    
  }


  return(
    <>
    <h1>Filter && Order</h1>
    <div className="ContenedorDeFiltros">
  <select className="SelectStyle" ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))}>
      {['Ascendente', 'Descendente'].map((e,i) =>(<option value={e} key={i}>{e}</option>) )}
  </select>
  <select className="SelectStyle" ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))}>
      {['Male', 'Female', 'unknown', 'Genderless'].map((e,i) =>(<option value={e} key={i}>{e}</option> ))}
  </select>

  <button  value="reset" onClick={handleReset}>
Reset
  </button>
  </div>
    </>
  )
}


