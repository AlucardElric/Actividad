import Card from './Card';
import imagen1 from '../assets/1.jpg'
import imagen2 from '../assets/2.jpg'
import imagen3 from '../assets/imagen1.png'


const CompShowProd = () => {

  
const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    producto: 'Descripción del Producto 1',
    imagen: imagen1,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    producto: 'Descripción del Producto 2',
    imagen: imagen2,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    producto: 'Descripción del Producto 3',
    imagen: imagen3,
  },
];

  
  return (
  <div className='container d-flex justify-content-center align-items-center h-100'>
  <div className='row'>
    {productos.map((producto) => (
      
      <div className='col-md-4' key={producto.id}>
        <Card
          key={producto.id}
          id={producto.id}
          title={producto.Nombre}
          image={producto.imagen}
          instructor={producto.Precio} 
        />
      </div>
    ))}
  </div>
</div>
);
};

export default CompShowProd;
