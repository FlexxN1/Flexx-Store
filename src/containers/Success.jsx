import React, { useContext } from 'react'
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css'

function Success(){
const { state: {buyer} } = useContext(AppContext);

return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0]?.name || 'Pepito Alfajor'}, gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;