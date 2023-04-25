import Card from '../Card/Card';
import './Cards.css';

export default function Cards(props) {
  
   const { dogBreeds } = props;
   let i=0;
   
   if(dogBreeds.length===0){
      return <h1>...no dogs available...</h1>
   }else{
      return (
         <div className='ContieneTarjeta' >   
           <div className='ContieneFiguritas'>
              
              {dogBreeds.map((dog)=>(
                 <Card
                   // onClose={props.onClose}
                    key={i++}
                    name={dog.name}
                   // species={dog.species}
                    temperament={dog.temperament}
                    image={dog.image}
                    id={dog.id}
                 />
              )
              
                 
              )}
                   
        
           </div>  
         </div>
           );
   }
   
}
