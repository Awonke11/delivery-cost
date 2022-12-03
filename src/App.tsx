import { useState } from 'react';
import "./app.scss";

function App() {
  const [distance, setDistance] = useState<number>(0)
  const [foodPrice, setFoodPrice] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const calculateTotal = () : void => {
    if (distance > 0 && distance <= 2) {
      setPrice(price + 3)
    } else if (distance > 2 && distance <= 3) {
      setPrice(price + 6)
    } else if (distance > 3) {
      setPrice(price + 9)
    }

    let deliveryFee = price 
    let serviceFee = 0.05 * foodPrice
    let smallOrderFee = 0
    if (foodPrice<10 && foodPrice > 0) {
        smallOrderFee+=5
    }
    setTotal(deliveryFee+serviceFee+smallOrderFee)
    setDistance(0)
    setFoodPrice(0)
    setPrice(0)
  }

  return (
    <div className="app">
      <div className='app-heading'>
        <h1 className='app-heading-title'>Delivery Cost Calculator</h1>
      </div>
      <div className='app-container'>
        <div className='app-container-inputs'>
          <div className='app-container-inputs-input'>
            <h2 className='app-container-inputs-input-title'>Enter distance (km)</h2>
            <p className='app-container-inputs-input-note'>The number of kilometers away from destination</p>
            <input 
              type="number" 
              placeholder='Type here...' 
              className='app-container-inputs-input-enter' 
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
            />
          </div>
          <div className='app-container-inputs-input'>
            <h2 className='app-container-inputs-input-title'>Enter price (R)</h2>
            <p className='app-container-inputs-input-note'>The price of the food purchased</p>
            <input 
              type="number" 
              placeholder='Type here...' 
              className='app-container-inputs-input-enter' 
              value={foodPrice}
              onChange={(e) => setFoodPrice(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className='app-container-display'>
          <h2 className='app-container-display-title'>The total amount</h2>
          <div className='app-container-display-answer'>
            <p>R{Math.round((total + Number.EPSILON) * 100) / 100}</p>
          </div>
        </div>
      </div>
        <button className='app-button' onClick={calculateTotal}>Calculate</button>
    </div>
  )
}

export default App
