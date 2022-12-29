import React from "react";
import './Career.css';

function ContainerOne() {
    return (
        <div className="container-career-one-img">
            <div className="container-career-one-bg">
                <div className="container-career-one-content">
                    <h1>JOIN US</h1>
                    {/* <p>Discover a great career in Oil & Gas around the world with Bumi Armada. With offices around the globe, we offer the best opportunities for you to realise your dreams.</p>
                    <p>We are inviting the best to join our world-class team to help transform the Oil and Gas industry. If you are the right individual, get ready to take on the world and make your mark.</p>
                    <p>If you’re interested in joining us, please visit the following links:</p> */}
                    <p>PT. Armada Gema Nusantara’s recruitment policy requires all recruiters and search/placement agencies to engage solely with the HR department of PT. Armada Gema Nusantara.</p>
                    <p>A signed agreement with any agency must be obtained from PT. Armada Gema Nusantara HR, prior to any proposed candidates being submitted to PT. Armada Gema Nusantara, failing which, PT. Armada Gema Nusantara reserves the right to engage the potential candidate submitted by recruiters and search/placement agencies, either directly or via another mandated agency, without any compensation to the initial unauthorised recruiter and search/placement agency.</p>
                    <p>For expression of interest in being engaged by PT. Armada Gema Nusantara to fill any potential vacancy, kindly contact:</p>
                    <p>HR Career Team</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                        // padding: '1rem'
                    }}>
                        <div className="container-career-one-btn">
                            recruitment_onshore@armadagema.co.id
                        </div>
                        <div className="container-career-one-btn">
                            recruitment_offshore@armadagema.co.id
                        </div>
                    </div>
                    <p>We will endeavour to respond to any expression of interest to work with PT. Armada Gema Nusantara from recruiters and search/placement agencies within 5 working days. However due to the large volume of requests from recruiters and search/placement agencies, should you not receive a response from PT. Armada Gema Nusantara within that time, you may assume that you have been unsuccessful in your request to be engaged by PT. Armada Gema Nusantara. We thank you for your interest in working with PT. Armada Gema Nusantara.</p>
                </div>
            </div>
        </div>
    )
}

function CareerPage() {
    return (
        <>
            <ContainerOne />
        </>
    )
}

export default CareerPage;