import React, { useEffect, useState } from 'react';
import {useNavigate } from "react-router-dom";
import './FormCreate.css';

import axios from 'axios';
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regex = /^[A-Za-z\s]+$/; // Expresión regular para validar que solo haya letras y espacios


export function validate(newDog) {

  let errors={};
  if (!newDog.name) {
    errors.name = "Breed name is required";
  
} else if (!regex.test(newDog.name)) {
    errors.name= "Breed name can only contain letters and spaces";
} else if (newDog.name.length < 3 || newDog.name.length > 50) {
  errors.name= "Breed name must be between 3 and 50 characters long";
}
//errors.name= ""; // La cadena vacía indica que la validación pasó satisfactoriamente

// Expresión regular para validar una URL de imagen
const imageUrlRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  
if(!imageUrlRegex.test(newDog.image)){
  errors.image = "Please enter a valid image URL";
}
if (newDog.minheight==='') {
    errors.minheight = 'Minimun height is required';
 }
  if(newDog.minheight>newDog.maxheight){
    errors.minheight='The minimum height cannot exceed the maximum height';
  }
  
  if (newDog.maxheight==='') {
    errors.maxheight = 'Maximum height is required';
 }
  if(newDog.maxheight<newDog.minheight){
    errors.maxheight='The maximum height cannot be less than the minimum height';
  }

  if (newDog.minweight==='') {
    errors.minweight = 'Minimun weight is required';
 }
  if(newDog.minweight>newDog.maxweight){
    errors.minweight='The minimum weight cannot exceed the maximum weight';
  }
  
  if (newDog.maxweight==='') {
    errors.maxweight = 'Maximum weight is required';
 }
  if(newDog.maxweight<newDog.minweight){
    errors.maxweight='The maximum weight cannot be less than the minimum height';
  }
  
 
 if (newDog.lifeSpan==='') {
    errors.lifeSpan = 'Life span is required';
 }
if(newDog.lifeSpan<0 || newDog.lifeSpan>30){
  errors.lifeSpan='select consistent life years';
}

  return errors;
}


export default function CreateForm(){
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
    //const { name, value } = event.target;

   // setNewDog({ ...newDog, [name]: value });
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
              axios.post("/dogs",{
                "name":newDog.name,
                "image":newDog.image,
                "height": newDog.minheight+' - '+newDog.maxheight,
                "weight":newDog.minweight+' - '+newDog.maxweight,
                "lifeSpan":newDog.lifeSpan,
                "temperament":newDog.temperaments
              })
                  .then(res => {
                
                  navigate("/home");
                })
                .catch(error => {
                  console.log(error);
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
        alert("Debe llenar todos los campos");
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
            {!errors.minheight ? null : <span className='danger'>{errors.minweight}</span>}
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
            <div className='classtemperaments'>
      
            {temperaments.map((temp, index) => (
                <label key={index} className='temp'>
                   
                {temp.name}<input type="checkbox" name={temp.id} checked={newDog.temperaments.includes(temp.id)} value={temp.id} onChange={handleTemperamentsChange} />
                
                </label>
                
            ))}
            
            </div>
           
            </div>


            <button type="submit" value="Create">Create breed</button>

            </form>

        </div>
        </div>
    )


}