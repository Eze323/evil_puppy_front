import { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import { useEffect } from "react";
//const URLimage='https://cdn2.thedogapi.com/images/';

export default function SearchBar() {
  const [isLoading,setLoading]= useState(false);
  
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [dogBreeds, setDogBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setLoading(true);
    dispatch(getDogsByName(searchTerm))
      .then((result) => {
        setDogBreeds(result);
        console.log(result);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {}, [searchTerm]);

  return (
    <div className="ContentSearchBar">
    <input
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
    />
    <button onClick={handleSearchButtonClick}>Search</button>
    {isLoading && <div>Loading Dogs...</div>}
    
  </div>
  );
}
