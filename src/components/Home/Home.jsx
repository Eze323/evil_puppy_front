
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogs} from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import { Paginado } from "../Paginado/Paginado";
import imgLoading from "../../img/pnghuella.png";
import FilterBar from "../FilterBar/FilterBar";
function Home() {
  //const [dogBreeds, setDogBreeds] = useState([]);
  const [isLoading,setLoading]= useState(true);
  const dogBreeds = useSelector((state) => state.dogBreeds);
  const dispatch = useDispatch();
  
  
  // eslint-disable-next-line
  const [numPage, setNumPage] = useState(8);
  // eslint-disable-next-line
  const [indexPage, setIndexPage] = useState(1);
  
  const paginaInicio=(indexPage-1)*numPage;
  const paginaEnd=paginaInicio+numPage;
  const dogSlice=dogBreeds.slice(paginaInicio, paginaEnd);


  useEffect(() => {
    dispatch(getDogs()).then(()=>setLoading(false));

  }, [dispatch,indexPage,isLoading]);



  return (
    <div className="Home">
      <h1>Home Page</h1>
      <span className="spanDescription">Welcome to our website about dog breeds. Here you will find detailed information about different breeds of dogs, including their characteristics</span>
      
      <SearchBar/>
      <FilterBar/>
     
      <Paginado paginado={setIndexPage} indexPage={indexPage}  />
      {isLoading?(<p><img src={imgLoading} alt="Loading"/></p>):(<Cards dogBreeds={dogSlice}/>)}
    </div>
  );
}

export default Home;