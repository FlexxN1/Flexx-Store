import React, { useContext }from 'react'
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'

function  Payment(){
  const { state: { cart } } = useContext(AppContext);

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className='Payment-item' key={uuidv4()}>
            <h4>{item.title}</h4>
            <spam>{item.price}</spam>
          </div>
        ))}
        <div className="Payment-button">Boton de pago con Paypal</div>
      </div>
      <div />
    </div>
  );
}

export default Payment;