import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Card.css';

export function Card(props) {
   

   

   return (
      <div className='Figurita'>
         
         <Link to={`/detail/${props.id}`}>
         <div className='imageCard'>
         <LazyLoad width={200}>
         <img src={props.image} width="400px" alt={props.name}/> 
         </LazyLoad>
         </div>
         
               <h2 className='name'>{props.name} - {props.temperament}</h2>
         </Link>
         
         
      </div>
   );
}
export default Card