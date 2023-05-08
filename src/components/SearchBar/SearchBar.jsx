import { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions"
import { useEffect } from "react";
// import lupa from '../../img/lupa.png';

export default function SearchBar() {
  // const [isLoading,setLoading]= useState(false);
  
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [dogBreeds, setDogBreeds] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const name = event.target.value;
    dispatch(getDogsByName(name));
  };
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearchButtonClick = () => {
  //   setLoading(true);
  //   dispatch(getDogsByName(searchTerm))
  //     .then((result) => {
  //       setDogBreeds(result);
  //       console.log(result);
  //     })
  //     .finally(() => setLoading(false));
  // };


  useEffect(() => {}, [dispatch]);

  return (<>
    
    <div className="contentSearchBar">
    {/* <h1>Search bar</h1> */}
    {/* <input className="inputStyle"
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
    /> */}
    {/* <button className="btnSearch" onClick={handleSearchButtonClick}>
      <img src={lupa} alt="Search" width="20px" />
      </button> */}
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
    {/* {isLoading && <div>Loading Dogs...</div>} */}
    
  </div>
  </>
  );
}
