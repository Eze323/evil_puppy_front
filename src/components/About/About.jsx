import { useState } from 'react';
import './About.css';


export default function About() {
    const [idioma, setIdioma] = useState("espanol");
    // eslint-disable-next-line
  const [texto, setTexto] = useState({
    espanol: `Había una vez un perro llamado Max que era el mejor amigo de su dueño, Tomás. Max y Tomás habían estado juntos desde que Max era un cachorro, y habían formado un vínculo inseparable. Max era un perro muy fiel, siempre seguía a Tomás a donde quiera que fuera, incluso si eso significaba caminar durante horas bajo el sol caliente.

    Un día, Tomás enfermó gravemente y tuvo que ser hospitalizado durante semanas. Max estaba muy triste porque no podía estar con su amigo. Pero eso no lo detuvo. Cada día, Max se escapaba de la casa y corría hasta el hospital. Allí, se las arreglaba para entrar en el edificio y encontrar la habitación de Tomás. Cuando lo encontraba, se acurrucaba junto a él en la cama y se quedaba allí hasta que lo descubrían y lo sacaban.
    
    Finalmente, Tomás se recuperó y fue dado de alta del hospital. Cuando llegó a casa, encontró a Max esperándolo en la puerta. Max saltó de alegría y movió su cola tan rápido que casi se cayó. Desde ese día, Max no se alejó de Tomás ni un solo momento, siempre estuvo a su lado para cuidarlo y protegerlo.
    
    Y así, Max demostró su amor y lealtad hacia su mejor amigo, y juntos vivieron muchas aventuras más.
    
    Nuestras mascotas son parte de nuestra familia, nos brindan amor incondicional y nos hacen felices con su presencia. Pero a menudo, tendemos a olvidar que ellos dependen completamente de nosotros para sobrevivir y tener una vida saludable y feliz.
    
    Cuidar de nuestras mascotas significa mucho más que simplemente alimentarlas y darles agua. También implica proporcionarles atención médica adecuada, darles el suficiente ejercicio y jugar con ellos, y asegurarnos de que estén seguros en todo momento. Además, también es importante educarnos sobre las necesidades específicas de cada especie y raza, para poder brindarles un cuidado óptimo.
    
    Por otro lado, también es crucial recordar que las mascotas no son desechables. No deberíamos adoptarlos solo porque son lindos y divertidos, sino porque estamos dispuestos a asumir la responsabilidad de cuidarlos durante toda su vida. Abandonar a una mascota es cruel y puede tener consecuencias devastadoras para su bienestar emocional y físico.
    
    En resumen, nuestras mascotas merecen el mismo cuidado y respeto que cualquier otro miembro de nuestra familia. Debemos tomarnos en serio su bienestar y asegurarnos de que estén siempre felices y saludables. Si todos asumimos esta responsabilidad, nuestras mascotas nos lo devolverán con amor y alegría, lo cual nos hará sentir muy agradecidos y felices.`,
    ingles: `Once upon a time there was a dog named Max who was the best friend of his owner, Tomás. Max and Tomás had been together since Max was a pup, and they had formed an inseparable bond. Max was a very faithful dog, always following Tomás wherever he went, even if it meant walking for hours in the hot sun.

    One day, Tomás became seriously ill and had to be hospitalized for weeks. Max was very sad because he couldn't be with his friend. But that didn't stop him. Every day, Max would sneak out of the house and run to the hospital. There, he managed to get into the building and find Tomás's room. When she found him, she would curl up next to him on the bed and stay there until they discovered him and took him out.
    
    Eventually, Tomás recovered and was released from the hospital. When he got home, he found Max waiting for him at the door. Max jumped for joy and wagged his tail so fast he almost fell over. From that day on, Max did not leave Tomás for a single moment, he was always by his side to take care of him and protect him.
    
    And so, Max demonstrated his love and loyalty to his best friend, and together they lived many more adventures.
    
    Our pets are part of our family, they give us unconditional love and make us happy with their presence. But often, we tend to forget that they are completely dependent on us to survive and lead a healthy and happy life.
    
    Taking care of our pets means much more than just feeding and watering them. It also means providing them with proper medical care, giving them enough exercise and play with them, and making sure they are safe at all times. In addition, it is also important to educate ourselves on the specific needs of each species and breed, in order to provide them with optimal care.
    
    On the other hand, it is also crucial to remember that pets are not disposable. We should not adopt them just because they are cute and funny, but because we are willing to take responsibility for caring for them throughout their lives. Abandoning a pet is cruel and can have devastating consequences for their emotional and physical well-being.
    
    In short, our pets deserve the same care and respect as any other member of our family. We must take their well-being seriously and make sure they are always happy and healthy. If we all take this responsibility, our pets will return it to us with love and joy, which will make us feel very grateful and happy.`
  });

  const cambiarIdioma = () => {
    setIdioma(idioma === "espanol" ? "ingles" : "espanol");
  };

    return (<>
        <div className="ContentAbout">
            <h1>Alumno: Ezequiel Irace</h1>
            <h3>Aplicación de API Dogs - Proyecto individual - Bootcamp Henry</h3>
            <h3>One History</h3>
          
    

    
      <p className="texto">{texto[idioma]}</p>
      <button className='btnChangeLanguage' onClick={cambiarIdioma}>change language</button>
    </div>
    </>
    )
}
