import React, {useRef, useContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css'

function Information() {
  const {state: { cart }, addToBuyer } = useContext(AppContext)
  const form = useRef(null);
  const history = useHistory();
  const [error, setError] = useState(false)
  const [errorEmail, setEmail] = useState(false)
  const [errorAdress, setAddress] = useState(false)
  const [errorPhone, setPhone] = useState(false)


  
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),

    }

    if(buyer.name === ''){
      setError(true)
      return
    } 
    if(buyer.email === ''){
      setEmail(true)
      return
    }
    if(buyer.address === ''){
      setAddress(true)
      return
    }
    if(buyer.phone === ''){
        setPhone(true)
        return
    }

    addToBuyer(buyer);
    history.push('/checkout/payment')
  }
  
  
  /*otra forma de leer todos los resultados sin harcordear todo los valores es asi
        //const buyer = Object.fromEntries(formData);
        // console.log(buyer);
  */

return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <span>{error && <p>Ingresa un nombre porfavor</p>}</span>
            <input type="email" placeholder="Correo Electronico" name="email" />
            <span>{errorEmail && <p>ingresa un email porfavor</p>}</span>
            <input type="text" placeholder="Direccion" name="address" />
            <span>{errorAdress && <p>Ingresa una direccion porfavor</p>}</span>
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type='number' placeholder="Telefono" name="phone" />
            <span>{errorPhone && <p>Ingresa un numero porfavor</p>}</span>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Information;