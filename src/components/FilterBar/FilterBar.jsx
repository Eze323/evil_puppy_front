import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './FilterBar.css';
import {filterCards,orderCards,getTemperaments} from "../../redux/actions"

export default function FilterBar(){
  
  const dispatch = useDispatch();
  const filter=useRef(null);
  const order=useRef(null);
  const filterTemperaments= useSelector(state => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  
  //console.log(filterTemperaments);
  
  const temperamentOptions = filterTemperaments.map((temperament, index) => (
    <option key={temperament.id} value={temperament.name}>{temperament.name}</option>
  ));
console.log(temperamentOptions);

  function handleReset(e){
    dispatch({type:'RESET'});
    filter.current.value="";
    order.current.value="";
    
  }


  return(
    <div className="contentFilter">
   
    <div className="ContenedorDeFiltros">
      <label>Order by: </label>
  <select className="selectStyle" ref={order} onChange={(e)=>dispatch(orderCards(e.target.value))}>
      {['Race A-Z', 'Race Z-A','Weight A-Z', 'Weight Z-A'].map((e,i) =>(<option value={e} key={i}>{e}</option>) )}
  </select>
  
  
  <label>Filter by: </label>
  <select className="selectStyle" ref={filter} onChange={(e)=>dispatch(filterCards(e.target.value))}>
      {temperamentOptions}
  </select>
  

  </div>
  <button className="btnReset"  value="reset" onClick={handleReset}>
Reset
  </button>
    </div>
  )
}


