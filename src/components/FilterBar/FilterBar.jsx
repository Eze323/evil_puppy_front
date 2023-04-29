import { useRef } from "react";
import { useDispatch } from "react-redux";

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
    <h1>Filtro</h1>
    {/* <ContenedorDeFiltros>
  <SelectStyle ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))}>
      {['Ascendente', 'Descendente'].map((e,i) =>(<option value={e} key={i}>{e}</option>) )}
  </SelectStyle>
  <SelectStyle ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))}>
      {['Male', 'Female', 'unknown', 'Genderless'].map((e,i) =>(<option value={e} key={i}>{e}</option> ))}
  </SelectStyle>

  <button  value="reset" onClick={handleReset}>
Reset
  </button>
  </ContenedorDeFiltros> */}
    </>
  )
}


