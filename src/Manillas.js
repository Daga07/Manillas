import './Manillas.css'
import Pulceras from './Imagenes/pus.png';
function Manillas(){
return(
<div className='ContenedorMan'> 
    <div className='Titulo'> Manilla y accesosrios</div>
    <img src={Pulceras} className='Imagen'/> 
</div>
);

}

export default Manillas;