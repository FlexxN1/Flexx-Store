import React, { useContext }from 'react'
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'

function  Payment(){
  const { state: { cart }, buyer, addNewOrder } = useContext(AppContext);

  const history = useHistory();
  
  const paypalOtions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
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
        history.push('/checkout/success')
      }
    }
  
    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: handleSumTotal()
              },
            },
          ],
        });
      };
      const onApprove = (data, actions) => {
        return actions.order.capture().then(function(data) {
        handlePaymentSuccess(data);
               });
      };


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
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={(error) => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;