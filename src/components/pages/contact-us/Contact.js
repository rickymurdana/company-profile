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
                <div>
                    <h1>
                        JAKARTA <span style={{ color: '#00C04C' }}>OFFICE</span>
                    </h1>
                    <p>Gandaria 8 Office Tower</p>
                    <p>15th Floor Unit A</p>
                    <p>Jl. Sultan Iskandar Muda No.10 Kebayoran Lama, Jakarta Selatan 12240 Indonesia</p>
                </div>
                <div>
                    <h1>
                        SURABAYA <span style={{ color: '#00C04C' }}>OFFICE</span>
                    </h1>
                    <p>Spazio Office Building</p>
                    <p>7th Floor Unit 15</p>
                    <p>Jl. Mayjen Yono Suwoyo Kav.3 Pradah Kali Kendal, Dukuh Pakis, Surabaya 60226, East Java Indonesia</p>
                </div>
                {/* <p>For career enquiries, kindly drop an email to our HR Career Team at <span style={{ fontWeight: 700 , color: '#260A87' }}>careers.my@bumiarmada.com</span> </p>
                <p>For enquiries on Strategic Procurement, please drop an email to <span style={{ fontWeight: 700 , color: '#260A87' }}>suppliermgmt@bumiarmada.com</span> </p>    
                <p>For general enquiries, please email us at <span style={{ fontWeight: 700 , color: '#260A87' }}>enquiry@bumiarmada.com</span> </p>    
                <p>To report compliance related issues or wrong doings, click here <span style={{ fontWeight: 700 , color: '#260A87' }}>bumiarmada.ethicspoint.com</span> </p>     */}
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