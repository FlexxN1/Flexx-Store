import React, { useContext }from 'react'
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'

function  Payment(){
  const { state: { cart }, buyer, addNewOrder } = useContext(AppContext);

  
  const paypalOtions = {
    clientId: 'AYFUDr3dpAuX3JO5mK4a54hXQAjYFfKcUDwmAwuC0b3sPG5dj1K8RWWqjDodzY_UyewhINDP_kwMmKIZ',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      useHistory.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }


  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className='Payment-item' key={uuidv4()}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;