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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.637204540288!2d106.7832862!3d-6.2427261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70d80dcb6eab1da3!2sGandaria%208%20Office%20Tower!5e0!3m2!1sid!2sid!4v1672307506353!5m2!1sid!2sid" width={400} height={300} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h1>
                        SURABAYA <span style={{ color: '#00C04C' }}>OFFICE</span>
                    </h1>
                    <p>Spazio Office Building</p>
                    <p>7th Floor Unit 15</p>
                    <p>Jl. Mayjen Yono Suwoyo Kav.3 Pradah Kali Kendal, Dukuh Pakis, Surabaya 60226, East Java Indonesia</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.574348846893!2d112.67564341379727!3d-7.289172873664896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc37c16803b9%3A0x209ab8b64b6905d0!2sSpazio!5e0!3m2!1sid!2sid!4v1672307843716!5m2!1sid!2sid" width={400} height={300} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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