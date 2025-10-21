import React from 'react';
import { Link } from 'react-router-dom';
import Copyrights from '../copyrights/copyrights';
import "./policy.scss"



const Policy  = () =>  {
    return(
        <>        
        <h1 className='policyNav'><Link to="/"><img src="/logo.png" alt="" /></Link> <span>Privacy Policy</span></h1>

        <div className='policy'>
        <p>Last Updated: July 20, 2025</p>

       <p>Welcome to ivalidatecards (“we”, “our”, or “us”).</p> 
       <p>This Privacy Policy explains how we collect, use, and protect information when you use our website https://ivalidatecards.com
        and related services.</p>

        <h3>1. Information We Collect</h3>

       <p>We may collect the following types of information from users:</p> 

        <p>Basic contact details (name, email address, phone number, if provided)</p>

        <p>Gift card details submitted for validation (card type, amount and card code)</p>

        <p>Technical data such as IP address, device type, browser version, and usage data (for analytics and security)</p>

        <p>We never permanently store or share full gift card codes, pins , or redemption credentials.</p>
        <h3>2. How We Use Information</h3>

        <p>We use collected information to:</p>

        <p>Verify and validate gift cards at the user’s request</p>

        <p>Provide customer support and respond to inquiries</p>

        <p>Improve our website, service quality, and user experience</p>

        <p>Ensure security and prevent misuse or fraudulent activities</p>
        <p>Run analytics and advertising to improve service reach</p>

        <h3>3. Sensitive Data Protection</h3>

        <p>We never request or store full card codes beyond the validation process.</p>
        <p>All sensitive details are processed securely and automatically deleted after completion.</p>
        <p>We do not resell, trade, or reuse card data under any circumstances.</p>

        <h3>4. Data Security</h3>

        <p>We implement appropriate security and encryption measures to protect user data.</p>
        <p>While no online service can guarantee 100% security, we take all reasonable steps to safeguard your information against unauthorized access, alteration, or misuse.</p>

        <h3>5. Third-Party Services</h3>

        <p>We may use trusted third-party tools such as:</p>

        <p>Google Analytics – for anonymous traffic measurement</p>

        <p>Google Ads conversion tracking – to measure advertising performance</p>

        <p>AdPay (Google partner) – for ad payments and billing support</p>

       <p>These third-party services may use cookies or similar technologies in accordance with their own privacy policies.</p> 

        <h3>6. Legal Compliance</h3>

        <p>We follow the principles of the Nigeria Data Protection Act (NDPA 2023) and align our practices with global standards such as the EU General Data Protection Regulation (GDPR) regarding fairness, transparency, and purpose limitation in data processing.</p>

        <h3>7. Sharing of Information</h3>

        <p>We do not sell, rent, or trade user information.</p>
        <p>We may share limited data only when:</p>

       <p>Required by law, court order, or government regulation</p> 

       <p>Necessary to detect, prevent, or address fraud, security, or technical issues</p> 

        <h3>8. Cookies</h3>

        <p>We use cookies to understand user behavior, remember preferences, and improve website performance.</p>
        <p>You can manage or disable cookies in your browser settings if you prefer.</p>

        <h3>9. Your Rights</h3>

        <p>You have the right to:</p>

        <p>Request access to your personal data</p>

       <p>Request correction or deletion of your data</p> 

       <p>Withdraw consent for processing at any time</p> 

        <h3>10. Data Retention</h3>

        <p>We retain personal data only as long as necessary to provide our services and comply with legal obligations.</p>
       <p>Gift card information is deleted immediately after validation is completed.</p> 

        <h3>11. Changes to This Policy</h3>

       <p>We may update this Privacy Policy from time to time. The “Last Updated” date above reflects the latest revision.</p> 
        <p>By continuing to use our services, you agree to the updated version of this policy.</p>

        <h3>12. Contact Us </h3>

       <p>If you have any questions or complaints regarding this Privacy Policy, please contact us:</p> 

        <p>https://ivalidatecards.com</p>


    </div>
    <Copyrights/>
    </>

    )
   
}

export default Policy