import React, { useEffect, useState } from 'react';

import './FormCreate.css';

import axios from 'axios';
export default function CreateForm(){

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

  async function fetchTemperaments() {
    try {
      const response = (await axios.get('http://localhost:3001/temperament')).data;
      console.log(response);
      // Obtener temperamentos de cada raza de perro
      //const breeds = Object.values(response);
 
      setTemperaments(response);
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch: ' + error.message);
    }
  }
  console.log(temperaments);
  useEffect(() => {
    fetchTemperaments();
  }, []);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDog({ ...newDog, [name]: value });
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
    //axios.post("http://localhost:3001/dogs",newDog)
    axios.post("http://localhost:3001/dogs",{
      "name":newDog.name,
      "image":newDog.image,
      "height": newDog.minheight+' - '+newDog.maxheight,
      "weight":newDog.minweight+' - '+newDog.maxweight,
      "lifeSpan":newDog.lifeSpan,
      "temperament":newDog.temperaments
    })
    
    .then(res=>alert(res))
    
    // Aquí puedes enviar los datos del nuevo perro al servidor
    // usando la función dispatch de Redux o cualquier otra forma
    

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
  };
  


    return(
        <div>
        <h1>Formulario De Creacion Dogs</h1>

        <div className='FormContent'>
            <form onSubmit={handleSubmit}>
            <div className='name'>
            <label title='name'>breed name: </label>
            <input 
            type="text" 
            name='name' 
            placeholder='dog breed name'
            value={newDog.name}
            onChange={handleInputChange}
            />
            </div>
            <div className='image'>
            <label title='image'>breed image: </label>
            <input 
            type="text" 
            name='image' 
            placeholder='dog breed image'
            value={newDog.image}
            onChange={handleInputChange}
            />
            </div>
            <div className='height'>
            <label title='minheight'>height: </label>
            <label title='minheight'>min:</label>
            <input 
            type="number" 
            name='minheight' 
            placeholder='min height'
            value={newDog.minheight}
            onChange={handleInputChange}
            />
            
             <label title='minheight'>max: </label>
            <input 
            type="number" 
            name='maxheight' 
            placeholder='max height'
            value={newDog.maxheight}
            onChange={handleInputChange}
            />
            </div>
            <div className='weight'>
            <label title='minweight'>weight: </label>
            <label title='minweight'>min:</label>
            <input 
            type="number" 
            name='minweight' 
            placeholder='min weight'
            value={newDog.minweight}
            onChange={handleInputChange}
            />
            
             <label title='maxweight'>max: </label>
            <input 
            type="number" 
            name='maxweight' 
            placeholder='max height'
            value={newDog.maxweight}
            onChange={handleInputChange}
            />
            </div>
            <div className='lifespan'>
            <label title='lifespan'>life span: </label>
            <input 
            type="number" 
            name='lifeSpan' 
            placeholder='life span'
            value={newDog.lifeSpan}
            onChange={handleInputChange}
            />
            </div>
            <div className='temperaments' >
            <label title='temperaments'>temperaments: </label><br/>
            <div className='classtemperaments'>
      
            {temperaments.map((temp, index) => (
                <label key={index} className='temp'>
                   
                {temp.name}<input type="checkbox" name={temp.id} checked={newDog.temperaments.includes(temp.id)} value={temp.id} onChange={handleTemperamentsChange} />
                
                </label>
                
            ))}
            
            </div>
           
            </div>


            <input type="submit" value="Create" />

            </form>

        </div>
        </div>
    )


}