
import './App.css';
import { About } from './Components/About/About';

function App() {
  //Js vanilla
  const nombre = "Pedro"

  const persona={
    name:'Brandon',
    lastname:'Stark',
    age:20,
    likecss:false,
    likewarg:true,
    img:'https://picsum.photos/id/91/200' 
  }
  
  function clickeo(){
    console.log(`Usted ${nombre}, hizo click.`)
  }


  return (
    //jsx
    <main>  
        <h2> Bienvenido {nombre}, buen día.</h2>
        <button onClick={clickeo}> Click me </button>
        <button onClick={()=>console.log(`Usted ${nombre}, hizo click en el otro botón.`)}> Click me 2 </button>
        <About persona={persona}/>
    </main>
  );
}

export default App;
