import React, { useEffect, useState } from 'react';
import {useNavigate } from "react-router-dom";
import './FormCreate.css';
import {validate} from './validation';
import axios from 'axios';
const imgPreviusly="https://i.ebayimg.com/thumbs/images/g/WfsAAOSwVX9kOQd4/s-l300.jpg";
// eslint-disable-next-line

export default function CreateForm(){
  const [creating, setCreating] = useState('You are about to create a race...');
  
  const navigate = useNavigate()

  const [temperaments, setTemperaments] = useState([]);
  const [newDog, setNewDog] = useState({
    name:'',
    image:'',
    minheight:'',
    maxheight:'',
    minweight:'',
    maxweight:'',
    lifeSpan:'',
    temperaments:[]
  });
  const [errors, setErrors] = useState({
    name:'',
    image:'',
    minheight:'',
    maxheight:'',
    minweight:'',
    maxweight:'',
    lifeSpan:'',
    temperaments:''
  });



  async function fetchTemperaments() {
    try {
      const response = (await axios.get('/temperament')).data;
      // Obtener temperamentos de cada raza de perro
 
      setTemperaments(response);
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch: ' + error.message);
    }
  }
  //console.log(temperaments);
  useEffect(() => {
    fetchTemperaments();
  }, []);
  
 


  const handleInputChange = (event) => {
   setErrors(
    validate({
       ...newDog,
       [event.target.name]: event.target.value,

    })
 );
  setNewDog({
    ...newDog,
    [event.target.name]: event.target.value,
 
  })
    


  };

  const handleTemperamentsChange = (event) => {
    const temperament = event.target.name;
    const checked = event.target.checked;
  
    if (checked) {
      setNewDog((prevDog) => ({
        ...prevDog,
        temperaments: [...prevDog.temperaments, temperament],
      }));
    } else {
      setNewDog((prevDog) => ({
        ...prevDog,
        temperaments: prevDog.temperaments.filter(
          (temp) => temp !== temperament
        ),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorArray = Object.values(errors);
    if (errorArray.length === 0) {
              setErrors(validate);
                // Envio la solicitud a una API que tarda 3 segundos en responder
                setCreating('Creating race...'); // establece el estado de "creating" a "true"
  
      // Aquí iría el código para enviar el formulario
      axios.post("/dogs",{
        "name":newDog.name,
        "image":newDog.image,
        "height": newDog.minheight+' - '+newDog.maxheight,
        "weight":newDog.minweight+' - '+newDog.maxweight,
        "lifeSpan":newDog.lifeSpan,
        "temperament":newDog.temperaments
      })
          .then(res => {
        setCreating('Raza de perro creada correctamente')
          
        })
        .catch(error => {
          console.log(error);
          setCreating('Could not create dog breed')
        })
        .finally(() => {
          // Limpiar el mensaje después de un tiempo determinado
          setTimeout(() => {
            setCreating('');
            navigate("/home");
          }, 3000);
        });
  
      // Reiniciar el estado para limpiar el formulario
      setNewDog({
      name:'',
      image:'',
      minheight:'',
      maxheight:'',
      minweight:'',
      maxweight:'',
      lifeSpan:'',
      temperaments:[]
      });
    } else {
        setCreating("You must complete all fields");
      }
    
  };
  


    return(
        <div>
        <h1>Dog Breed Form</h1>
        
        <div className='FormContent'>
            <form onSubmit={handleSubmit}>
            <div className='name'>
            <label title='name'>Breed name: </label>
            <input 
            type="text" 
            name='name' 
            placeholder='dog breed name'
            value={newDog.name}
            onChange={handleInputChange}
            />
            {!errors.name ? null : <span className='danger'>{errors.name}</span>}
            
            </div>
            <div className='image'>
            <label title='image'>Breed image: </label>
            <input 
            type="text" 
            name='image' 
            placeholder='dog breed image'
            value={newDog.image}
            onChange={handleInputChange}
            />
            {!errors.image ? null : <span className='danger'>{errors.image}</span>}
            </div>
            <div className='height'>
            <label title='minheight'>Height: </label>
            <label title='minheight'>min:</label>
            <input 
            type="number" 
            name='minheight' 
            placeholder='min height'
            value={newDog.minheight}
            onChange={handleInputChange}
            />
            {!errors.minheight ? null : <span className='danger'>{errors.minheight}</span>}
             <label title='minheight'>max: </label>
            <input 
            type="number" 
            name='maxheight' 
            placeholder='max height'
            value={newDog.maxheight}
            onChange={handleInputChange}
            />
            {!errors.maxheight ? null : <span className='danger'>{errors.maxheight}</span>}
            </div>
            <div className='weight'>
            <label title='minweight'>Weight: </label>
            <label title='minweight'>min:</label>
            <input 
            type="number" 
            name='minweight' 
            placeholder='min weight'
            value={newDog.minweight}
            onChange={handleInputChange}
            />
            {!errors.minweight ? null : <span className='danger'>{errors.minweight}</span>}
             <label title='maxweight'>max: </label>
            <input 
            type="number" 
            name='maxweight' 
            placeholder='max height'
            value={newDog.maxweight}
            onChange={handleInputChange}
            />
            {!errors.maxweight ? null : <span className='danger'>{errors.maxweight}</span>}
            </div>
            <div className='lifespan'>
            <label title='lifespan'>Life span: </label>
            <input 
            type="number" 
            name='lifeSpan' 
            placeholder='life span'
            value={newDog.lifeSpan}
            onChange={handleInputChange}
            />
            {!errors.lifeSpan ? null : <span className='danger'>{errors.lifeSpan}</span>}
            </div>
            <div className='temperaments' >
            <label title='temperaments'>Temperaments: </label><br/>
            {!errors.temperaments ? null : <span className='danger'>{errors.temperaments}</span>}
            <div className='classtemperaments'>
            
            {temperaments.map((temp, index) => (
                <label key={index} className='temp'>
                   
                <input type="checkbox" name={temp.id} checked={newDog.temperaments.includes(temp.id)} value={temp.id} onChange={handleTemperamentsChange} />{temp.name}
                
                </label>
                
            ))}
            
            </div>
           
            </div>


            <button type="submit" value="Create">Create breed</button>
         
            </form>
            <div className='cardPreviusly'>
              <span className='characteristicPreviusly'>Preview</span>
              <span className='characteristicPreviusly'>{newDog.name}</span>
              <span className='characteristicPreviusly'><img src={newDog.image?newDog.image:imgPreviusly } alt={newDog.name} width="100px" /></span>
              <span className='characteristicPreviusly'>Height: {newDog.minheight}-{newDog.maxheight}</span>
              <span className='characteristicPreviusly'>Weight: {newDog.minweight}-{newDog.maxweight} </span>
              <span className='characteristicPreviusly'>Life Span: {newDog.lifeSpan}</span>
              
             <span className='characteristicPreviusly'>{creating}</span>

            </div>

        </div>
        </div>
    )


}