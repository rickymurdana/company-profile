import React from "react";
import './Contact.css';

function ContainerOne() {
    return (
        <>
            <div className="container-contact-one">
                <div className="bg-white">
                    <div className="text">
                        CONTACT <span style={{ color: '#00C04C' }}>US</span>
                    </div>
                </div>
            </div>
            <div className="container-contact-two">
                <p>For career enquiries, kindly drop an email to our HR Career Team at <span style={{ fontWeight: 700 , color: '#260A87' }}>careers.my@bumiarmada.com</span> </p>
                <p>For enquiries on Strategic Procurement, please drop an email to <span style={{ fontWeight: 700 , color: '#260A87' }}>suppliermgmt@bumiarmada.com</span> </p>    
                <p>For general enquiries, please email us at <span style={{ fontWeight: 700 , color: '#260A87' }}>enquiry@bumiarmada.com</span> </p>    
                <p>To report compliance related issues or wrong doings, click here <span style={{ fontWeight: 700 , color: '#260A87' }}>bumiarmada.ethicspoint.com</span> </p>    
            </div>
        </>
    )
}

function ContactPage() {
    return (
        <>
            <ContainerOne />
        </>
    )
}

export default ContactPage;