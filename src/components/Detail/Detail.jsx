import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Detail.css';
import imgLoading from "../../img/dog.gif";
import axios from "axios";

  export default function Detail() {

    const navigate = useNavigate();
    const { id } = useParams();
  
    const [dogBreeds, setDogBreeds] = useState({
      name:'',
      weight:'',
      height:'',
      temperament:'',
      image:'',
      lifeSpan:''
    });
  
    const [isLoading, setIsLoading] = useState(true); // agregar estado de carga
  
    async function fetchDogById(idRaza) {
      try {
        const response =await axios.get(`/dogs/${idRaza}`); 
        console.log(response);
        if (response.status===200) {
          setDogBreeds(response.data);
          setIsLoading(false); // cambiar estado de carga cuando se recibe la respuesta
        } else {
          window.alert("No hay perros con ese ID");
          //navigate("/home");
        }
      } catch (error) {
        console.log(error);
        window.alert("No hay perros con ese ID");
        //navigate("/home");
      }
    }
    
    useEffect(() => {
        fetchDogById(id);
    }, [id]);
  
    return (
      <div className="ContainerDetail">
        {console.log(dogBreeds)}
        {isLoading ? (
          <p><img src={imgLoading} alt="Loading"/></p> // mensaje de carga mientras se espera la respuesta
        ) : (
          <>
            <div className="ContainerCharacteristics">
              <h2>Name: {dogBreeds.name}</h2>
              <h5>Temperaments: {dogBreeds.temperament}</h5>
              <h5>Height: {dogBreeds.height}</h5>
              <h5>Weight: {dogBreeds.weight}</h5>
              <h5>Life span: {dogBreeds.lifeSpan}</h5> 
            </div>
            <div className="ContainerImage">
              <img className="imageCard" src={`${dogBreeds.image}`} alt={dogBreeds.name} />
            </div>
            <div>
              <button className="btnClose btn btn1" onClick={() => navigate("/home")}>Back Home</button>
            </div>
          </>
        )}
      </div>
    );
  }
  