//const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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
if(newDog.temperaments.length<=0){
  errors.temperaments='You must select at least one temperament';
}

  return errors;
}