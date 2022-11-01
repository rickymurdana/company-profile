import React from "react";
import './Covid19.css';

function ContainerOne() {
    return (
        <div className="container-covid-one">
            <div className="container-bg"></div>
        </div>
    )
}

function ContainerTwo() {
    return (
        <div className="container-covid-two">
            <h1>COVID-19, OUR COMMITMENT IN MALAYSIA AND ABROAD</h1>
            <p>During a global pandemic, we must innovate and mobilise all resources to overcome the challenges that arise. Bumi Armada is committed to enforcing our ongoing preventive controls based on recommendations from the World Health Organisation, International SOS, U.S. Centres for Disease Control and Prevention, and local regulations in countries where we operate. Our preventive controls which were initiated since early January 2020, include:</p>
            <p>1. Improved COVID-19 Medical Emergency Response Guideline</p>
            <p>2. Daily Health Surveillance and stringent Onboarding Quarantine process for our offshore crew members</p>
            <p>3. Strengthen Travel Risk Management with COVID-19 preventive controls for critical business travel</p>
            <p>4. Extension of COVID-19 risk management to Supply Chain Management</p>
            <p>5. Enhanced Health and Safety protocols</p>
            <p>6. Ongoing COVID-19 awareness campaigns across the organization</p>
            <p>7. Improved Business Continuity Plan (BCP) with consideration of COVID-19 risks</p>
            <p>8. Collaborate with the Major Clients on COVID-19 preventive measures implementation onboard</p>
            <p>In order to establish if the Company’s global risk management of the COVID-19 pandemic is effective, an independent COVID-19 Energy Risk Framework assessment was conducted by AON UK, where the Group received an “EXCELLENT” rating.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="img-covid1"></div>
            </div>
        </div>
    )
}

function ContainerThree() {
    return (
        <div className="container-covid-three">
            <h1>COVID-19 VACCINATION</h1>
            <p>Bumi Armada encourage its people to embark on the national immunisation program in countries where we operate, so that they can protect themselves and the community. Our HSSEQ team actively raise awareness on COVID-19 vaccines across the organisation to ensure our people receive ample information to make informed decision, prior to their participation in the vaccination program. The Company will continue to closely monitor the pandemic situation, explore for areas of improvement and implement the necessary preventive measures in order to protect our people, operations and the community.</p>
        </div>
    )
}

function ContainerFour() {
    return (
        <div className="container-covid-four">
            <h1>EMERGENCY COVID-19 RESPONSE</h1>
            <h5>UNICEF</h5>
            <p>On 17 August 2021, Bumi Armada Berhad responded to UNICEF Malaysia’s local emergency appeal by contributing RM50,000.00 to help our healthcare and save lives in Malaysia. UNICEF Malaysia is providing essential oxygen concentrators, and other life-saving supplies to fight COVID-19 and help patients affected by COVID, undergoing post-COVID rehabilitation treatment or suffering from other respiratory infections. UNICEF Malaysia launched a local COVID-19 emergency appeal to respond to the urgent needs of some hospitals in Malaysia, in consultation with the Ministry of Health.</p>
            <div>
                <p>Photo credit:</p>
                <p>IMG_5363 – ©UNICEF Malaysia/2021/Joyce Chan</p>
                <p>IMG_5397 – ©UNICEF Malaysia/2021/Joyce Chan</p>
                <p>081A9717 – ©UNICEF Malaysia/2021/Faradiza Zahri</p>
            </div>
            <div className="container-covid-img">
                <div className="img-covid2" />
                <div className="img-covid3" />
                <div className="img-covid4" />
            </div>
        </div>
    )
}

function CovidPage() {
    return (
        <>
            <ContainerOne />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />
        </>
    )
}

export default CovidPage;