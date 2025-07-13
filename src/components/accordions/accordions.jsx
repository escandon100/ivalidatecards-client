import {React , useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./accordions.scss"

const Accordions = () => {

    const [click , setClick] = useState({
        one : false,
        two : false,
        three : false,
        four : false
    })

    const handleClick = (number) => {

        if(number === 1){
            if(click.one === true){
                setClick((pre)=>({
                    ...pre,
                    one:false
                      }))

            }else{
                setClick((pre)=>({
                    ...pre,
                    one:true
                      }))

            }
         
     
        
        }else if(number === 2){
            if(click.two === true){
                setClick((pre)=>({
                    ...pre,
                    two:false
                      }))

            }else{
                setClick((pre)=>({
                    ...pre,
                    two:true
                      }))

            }
        }else if(number === 3){
            if(click.three === true){
                setClick((pre)=>({
                    ...pre,
                    three:false
                      }))

            }else{
                setClick((pre)=>({
                    ...pre,
                    three:true
                      }))

            }
        }else if(number === 4){
            if(click.four === true){
                setClick((pre)=>({
                    ...pre,
                    four:false
                      }))

            }else{
                setClick((pre)=>({
                    ...pre,
                    four:true
                      }))

            }
        }else{console.log("never")}
   
    }




  return (
    <div className='accordions'>
        <Accordion>
            <AccordionSummary  onClick = {() => {handleClick(1)}} className = {`accordionSummary ${click.one && "changeBackground"}`} 
            expandIcon = {<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className='typographySummary' component="span">How will my  giftcard be delivered</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='typographyDetails'>
            Your Gift Card will be digitally delivered via web email, after the completion of your order. 
            In the case of some orders, to fight against payment fraud, we may need to send a request to verify your payment details with the upload of an identification card. 
            If you get this request, this is a one-time request, and will make placing future orders much faster. 
            Our typical processing time for a Gift Card is 1-3 minutes.
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
            <AccordionSummary onClick = {() => {handleClick(2)}} className = {`accordionSummary ${click.two && "changeBackground"}`}
            expandIcon = {<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className='typographySummary' component="span">How can i gift a giftcard to a friend</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='typographyDetails'>
            What payment methods can I use to buy digital Gift Cards?
            At Gifty Checker, you can safely buy Gift Cards online from anywhere in the world! There are several payment methods you can use:
            Credit card, Debit card, CashApp and Crypto (BTC, ETH).
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
            <AccordionSummary  onClick = {() => {handleClick(3)}} className = {`accordionSummary ${click.three && "changeBackground"}`}
            expandIcon = {<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className='typographySummary' component="span">What if i have an issue redeeming my digital gift card</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='typographyDetails'>
            If in the case there is an issue and you are receiving an error when you try to redeem. 
            please open an online support ticket and include your order number along with a screenshot so we can see the exact error message,
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion>
            <AccordionSummary onClick = {() => {handleClick(4)}} className = {`accordionSummary ${click.four && "changeBackground"}`}
            expandIcon = {<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className='typographySummary' component="span">What if i need instant support</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className='typographyDetails'>
            You can open a support ticket using our customer support live chat and we will respond to your request right away. 
            If you are an existing customer, 
            please provide your order number or email address associated with your order to help us assist you faster
            </Typography>
            </AccordionDetails>
      </Accordion>
      
    </div>
  )
}

export default Accordions
